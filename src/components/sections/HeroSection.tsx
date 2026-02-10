'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Locale } from '@/i18n/config';
import { DreamSearch } from '@/components/ui/DreamSearch';

interface ElasticHueSliderProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    label?: string;
}



interface LightningProps {
    hue?: number;
    xOffset?: number;
    speed?: number;
    intensity?: number;
    size?: number;
}

const Lightning: React.FC<LightningProps> = ({
    hue = 230,
    xOffset = 0,
    speed = 1,
    intensity = 1,
    size = 1,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth * window.devicePixelRatio;
            canvas.height = canvas.clientHeight * window.devicePixelRatio;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        const gl = canvas.getContext("webgl");
        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        const vertexShaderSource = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

        const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform float uHue;
      uniform float uXOffset;
      uniform float uSpeed;
      uniform float uIntensity;
      uniform float uSize;
      
      #define OCTAVE_COUNT 6

      vec3 hsv2rgb(vec3 c) {
          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0,4.0,2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
          return c.z * mix(vec3(1.0), rgb, c.y);
      }

      float hash11(float p) {
          p = fract(p * .1031);
          p *= p + 33.33;
          p *= p + p;
          return fract(p);
      }

      float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * .1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      mat2 rotate2d(float theta) {
          float c = cos(theta);
          float s = sin(theta);
          return mat2(c, -s, s, c);
      }

      float noise(vec2 p) {
          vec2 ip = floor(p);
          vec2 fp = fract(p);
          float a = hash12(ip);
          float b = hash12(ip + vec2(1.0, 0.0));
          float c = hash12(ip + vec2(0.0, 1.0));
          float d = hash12(ip + vec2(1.0, 1.0));
          
          vec2 t = smoothstep(0.0, 1.0, fp);
          return mix(mix(a, b, t.x), mix(c, d, t.x), t.y);
      }

      float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < OCTAVE_COUNT; ++i) {
              value += amplitude * noise(p);
              p *= rotate2d(0.45);
              p *= 2.0;
              amplitude *= 0.5;
          }
          return value;
      }

      void mainImage( out vec4 fragColor, in vec2 fragCoord ) {
          vec2 uv = fragCoord / iResolution.xy;
          uv = 2.0 * uv - 1.0;
          uv.x *= iResolution.x / iResolution.y;
          uv.x += uXOffset;
          uv += 2.0 * fbm(uv * uSize + 0.8 * iTime * uSpeed) - 1.0;
          float dist = abs(uv.x);
          vec3 baseColor = hsv2rgb(vec3(uHue / 360.0, 0.7, 0.8));
          vec3 col = baseColor * pow(mix(0.0, 0.07, hash11(iTime * uSpeed)) / dist, 1.0) * uIntensity;
          col = pow(col, vec3(1.0));
          fragColor = vec4(col, 1.0);
      }

      void main() {
          mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

        const compileShader = (source: string, type: number): WebGLShader | null => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error("Shader compile error:", gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
        const fragmentShader = compileShader(fragmentShaderSource, gl.FRAGMENT_SHADER);
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program linking error:", gl.getProgramInfoLog(program));
            return;
        }
        gl.useProgram(program);

        const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]);
        const vertexBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const aPosition = gl.getAttribLocation(program, "aPosition");
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        const uLocs = {
            iResolution: gl.getUniformLocation(program, "iResolution"),
            iTime: gl.getUniformLocation(program, "iTime"),
            uHue: gl.getUniformLocation(program, "uHue"),
            uXOffset: gl.getUniformLocation(program, "uXOffset"),
            uSpeed: gl.getUniformLocation(program, "uSpeed"),
            uIntensity: gl.getUniformLocation(program, "uIntensity"),
            uSize: gl.getUniformLocation(program, "uSize"),
        };

        const startTime = performance.now();
        let frameId: number;

        const render = () => {
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform2f(uLocs.iResolution, canvas.width, canvas.height);
            const currentTime = performance.now();
            gl.uniform1f(uLocs.iTime, (currentTime - startTime) / 1000.0);
            gl.uniform1f(uLocs.uHue, hue);
            gl.uniform1f(uLocs.uXOffset, xOffset);
            gl.uniform1f(uLocs.uSpeed, speed);
            gl.uniform1f(uLocs.uIntensity, intensity);
            gl.uniform1f(uLocs.uSize, size);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            frameId = requestAnimationFrame(render);
        };
        frameId = requestAnimationFrame(render);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(frameId);
        };
    }, [hue, xOffset, speed, intensity, size]);

    return <canvas ref={canvasRef} className="w-full h-full relative" />;
};


export const HeroSection: React.FC<{ dict: any; lang: Locale }> = ({ dict, lang }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [lightningHue, setLightningHue] = useState(220);
    const [showHueControl, setShowHueControl] = useState(false);

    useEffect(() => {
        const savedHue = localStorage.getItem('lightning-hue');
        if (savedHue) setLightningHue(Number(savedHue));
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--lightning-hue', `${lightningHue}`);
        localStorage.setItem('lightning-hue', `${lightningHue}`);
    }, [lightningHue]);

    const containerVariants: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
    };

    const itemVariants: any = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="relative w-full min-h-screen bg-black text-white overflow-hidden selection:bg-white/20">
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-6 flex flex-col min-h-screen">
                {/* Floating Aesthetics Control (Compact & Modern) */}
                <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[100] flex flex-col items-end gap-3 pointer-events-auto">
                    <AnimatePresence>
                        {(showHueControl) && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                className="bg-black/60 backdrop-blur-3xl border border-white/10 p-4 sm:p-5 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] mb-2 w-56 sm:w-64 group/panel"
                                role="dialog"
                                aria-label={dict.hero.adjustHue}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{dict.hero.adjustHue}</span>
                                    <span className="text-[10px] font-mono text-blue-400">{lightningHue}°</span>
                                </div>
                                <div className="relative group/slider">
                                    <input
                                        type="range"
                                        min="0"
                                        max="360"
                                        value={lightningHue}
                                        onChange={(e) => setLightningHue(Number(e.target.value))}
                                        className="w-full h-1.5 bg-white/5 rounded-full appearance-none cursor-pointer accent-blue-500 hover:accent-blue-400 transition-all"
                                        aria-label="Adjust lightning color"
                                    />
                                    {/* Visual Track Glow */}
                                    <div
                                        className="absolute -inset-1 -z-10 blur-md opacity-20 transition-opacity"
                                        style={{ backgroundColor: `hsl(${lightningHue}, 70%, 50%)` }}
                                    />
                                </div>
                                <div className="mt-4 flex gap-2">
                                    {[220, 0, 140, 280].map((h) => (
                                        <button
                                            key={h}
                                            onClick={() => setLightningHue(h)}
                                            className="w-full h-4 rounded-full transition-transform hover:scale-110 min-h-[16px]"
                                            style={{ backgroundColor: `hsl(${h}, 70%, 50%)` }}
                                            aria-label={`Set color to ${h} degrees`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.button
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setShowHueControl(!showHueControl)}
                        aria-label={showHueControl ? "Close color settings" : "Open color settings"}
                        aria-expanded={showHueControl}
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/10 flex items-center justify-center shadow-2xl transition-all duration-500 min-w-[44px] min-h-[44px] ${showHueControl ? 'bg-blue-500 shadow-blue-500/20 rotate-90' : 'bg-white/5 backdrop-blur-3xl hover:bg-white/10'}`}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={showHueControl ? 'text-white' : 'text-gray-400 group-hover:text-white'}>
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                        </svg>
                    </motion.button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center text-center relative z-30 py-8 sm:py-12">
                    <div className="max-w-4xl opacity-100 transition-opacity duration-1000">
                        <button
                            className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 bg-white/5 border border-white/10 hover:bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm mb-8 sm:mb-12 transition-all duration-300 group"
                        >
                            <span className="text-gray-300 group-hover:text-white">{dict.hero.badge}</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform duration-300">
                                <path d="M8 3L13 8L8 13M13 8H3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <h1
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.2] sm:leading-[1.1] text-white"
                        >
                            {dict.hero.title}
                        </h1>

                        <h2
                            className="text-lg sm:text-2xl md:text-3xl font-light mb-6 sm:mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent px-4"
                        >
                            {dict.hero.subtitle}
                        </h2>

                        <p
                            className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-6"
                        >
                            {dict.hero.description}
                        </p>

                        <div className="w-full">
                            <DreamSearch
                                placeholder={dict.common.searchPlaceholder}
                                buttonText={dict.common.search}
                                lang={lang}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#000000_20%,#0a0a0a_80%)]"></div>
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] aspect-square rounded-full bg-gradient-to-b from-blue-500/10 to-transparent blur-[120px] pointer-events-none"></div>

                <div className="absolute inset-0">
                    <Lightning
                        hue={lightningHue}
                        xOffset={0}
                        speed={1.2}
                        intensity={0.4}
                        size={1.5}
                    />
                </div>

                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-full max-w-[800px] aspect-square backdrop-blur-[100px] rounded-full bg-[radial-gradient(circle_at_30%_80%,_rgba(30,56,107,0.1)_10%,_transparent_60%)] border border-white/5 shadow-2xl pointer-events-none"></div>

                {/* Seamless Transition Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black via-black/90 to-transparent z-40" />

                {/* Decorative Blur Orbs for transition */}
                <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] z-30" />
                <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] z-30" />
            </motion.div>
        </div>
    );
};
