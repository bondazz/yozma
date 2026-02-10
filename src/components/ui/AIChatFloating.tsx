'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { BorderTrail } from '@/components/ui/border-trail';

export const AIChatFloating = ({ dict }: { dict: any }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Xoş gəldiniz! Mən sizin süni intellekt köməkçinizəm. Yuxunuzu bura yaza bilərsiniz.", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState('');

    const handleSend = () => {
        if (!inputValue.trim()) return;

        // Add user message
        const newMsg = { id: Date.now(), text: inputValue, isBot: false };
        setMessages([...messages, newMsg]);
        setInputValue('');

        // Simulate bot typing
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Mən hazırda təkmilləşdirilirəm. Tezliklə yuxularınızın ən dərin mənalarını sizinlə bölüşəcəyəm! ✨",
                isBot: true
            }]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[500px] bg-[#0a0a0a] border border-white/10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden backdrop-blur-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 bg-white/5 border-b border-white/10 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                                    <Bot size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm">Dream AI Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 hover:bg-white/5 rounded-xl transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.isBot ? -10 : 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                                >
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.isBot
                                        ? 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
                                        : 'bg-blue-600 text-white rounded-tr-none shadow-[0_5px_15px_rgba(37,99,235,0.2)]'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 bg-white/5 border-t border-white/10">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Yuxunuzu yazın..."
                                    className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors shadow-lg"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-[24px] bg-white flex items-center justify-center text-black shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_15px_40px_rgba(255,255,255,0.3)] transition-all overflow-hidden relative group"
            >
                <BorderTrail
                    style={{
                        boxShadow: '0px 0px 20px 5px rgba(37, 99, 235, 0.4)',
                    }}
                    size={40}
                />
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <MessageSquare size={28} className="relative z-10 group-hover:text-white transition-colors duration-500" />
            </motion.button>
        </div>
    );
};
