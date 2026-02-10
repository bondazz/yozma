require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

async function savePost() {
    const post = {
        slug: "yuxuda-abide-gormek",
        title: "Yuxuda Abidə Görmək",
        seo_title: "Yuxuda Abidə Görmək: Tarixi Miras, Şöhrət və Mənəvi Ucalıq (2026)",
        seo_description: "Yuxuda abidə görməyin ən dəqiq və professional yozmaları. Abidə ucaltmaq, tarixi abidə ziyarəti və mənəvi ucalıq haqqında 1000+ sözlük SEO məqaləsi.",
        keywords: "yuxuda abide gormek, yuxuda heykel gormek, yuxuda tarixi abide gormek, yuxu yozmasi abide, yuxuda ucaliq, yuxuda sohret, abide gormenin menasi",
        excerpt: "Yuxuda abidə görmək, insanın cəmiyyətdə qazanacağı hörmətin, ad-sanın və əbədi qalan əməllərin rəmzidir. Bu yuxu həm də keçmişdən alınan dərsləri simvolizə edir.",
        highlight_box: "Yuxuda abidə görmək, sarsılmaz iradə, cəmiyyətdə qazanılacaq yüksək status və əbədi xatirəni simvolizə edir. Bu, insanın öz həyatında mühüm bir iz qoymaq istəyinin və mənəvi ucalığının ən bariz nümunəsidir.",
        category: "Objects",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Abidə Görməyin Fəlsəfi və Psixoloji Analizi</h2>
<p>Yuxuda abidə görmək, insan ruhunun ölməzliyə, yaddaşlarda qalmağa və ucalığa olan meylinin ən aşkar ifadəsidir. Abidələr zamanın sınağından keçmiş, daşa həkk olunmuş xatirələrdir. Psixoloji baxımdan bu yuxu, xəyalpərəstin öz həyatında mühüm bir iz qoymaq istəyini, daxili gücünü və sabitliyini təmsil edir. Əgər yuxuda qarşınızda əzəmətli bir abidə dayanıbsa, bu, sizin ideallarınızın sarsılmaz olduğunu və böyük hədəflərə doğru inamla irəlilədiyinizi göstərir.</p>

<p><strong>Yuxuda abidə görmək</strong> çox vaxt cəmiyyət tərəfindən qəbul ediləcək bir uğura, hörmətə və şöhrətə işarədir. Bu yuxu həm də xəbərdarlıq edir ki, hərəkətləriniz gələcək nəsillər üçün bir nümunə olacaq. Özünüzü bir abidənin qarşısında durmuş görürsünüzsə, bu, keçmiş dərsləri analiz etməyin və gələcəyi həmin təməllər üzərində qurmağın vaxtıdır. Bəzən bu, <a href="/az/yuxu-yozmalari/yuxuda-ilan-gormek">yuxuda ilan görmək</a> kimi bəzi təhlükələrin geridə qaldığını və artıq sabitlik dövrünə qədəm qoyduğunuzu da bildirə bilər.</p>

<h2>Fərqli Abidə Növləri və Onların Yozmaları</h2>
<h3>Qədim və Tarixi Abidələr</h3>
<p>Yuxuda qədim, tarixi bir abidə görmək, köklərinizə, tariximizə və ailə şəcərənizə olan bağlılığınızı simvolizə edir. Bu, bəzən unudulmuş bir vədin və ya yerinə yetirilməli olan mənəvi borcun xatırladılmasıdır. Əgər abidə dağılmış vəziyyətdədirsə, bu, bəzi ideallarınızın sarsıldığını göstərə bilər. Lakin daxili gücünüzü bərpa edərək hər şeyi yenidən qura bilərsiniz. Bu mənada, yuxuda abidə görmək həm də daxili aydınlığın, yeni bir <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi ruhun işıqlanmasının başlanğıcıdır.</p>

<h3>Yeni Ucaldılmış Abidə</h3>
<p>Əgər yuxuda yeni bir abidənin ucaldıldığını görürsünüzsə, bu, yaxın gələcəkdə əldə edəcəyiniz böyük bir qələbənin və ya yeni bir statusun müjdəçisidir. Bu uğur sizin zəhmətinizin bəhrəsi olaraq hər kəs tərəfindən görüləcekdir. Cəmiyyət içərisində nüfuzunuzun artması, sözünüzün keçərli olması və rəhbər vəzifələrə yüksəlmək ehtimalınız çoxdur.</p>

<div class="my-12 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl relative">
    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full -mr-16 -mt-16"></div>
    <h4 class="text-sm font-black uppercase tracking-[0.3em] text-blue-400 mb-6 flex items-center gap-2">
        <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
        Abidə Yozmaları Cədvəli
    </h4>
    <div class="overflow-x-auto">
        <table class="w-full text-xs text-left border-collapse">
            <thead>
                <tr class="border-b border-white/10">
                    <th class="py-4 font-black uppercase tracking-widest text-gray-400">Abidənin Vəziyyəti</th>
                    <th class="py-4 font-black uppercase tracking-widest text-gray-400">Mənəvi Yozumu</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
                <tr class="group hover:bg-white/[0.02] transition-colors">
                    <td class="py-4 font-bold text-gray-200">Gözəl və Əzəmətli</td>
                    <td class="py-4 text-gray-400 italic">Cəmiyyət tərəfindən böyük hörmət və ucalıq qazanmaq</td>
                </tr>
                <tr class="group hover:bg-white/[0.02] transition-colors">
                    <td class="py-4 font-bold text-gray-200">Sınmış və Dağılmış</td>
                    <td class="py-4 text-gray-400 italic">Planların təxirə düşməsi və ya nüfuzun sarsılması</td>
                </tr>
                <tr class="group hover:bg-white/[0.02] transition-colors">
                    <td class="py-4 font-bold text-gray-200">Qızıldan Abidə</td>
                    <td class="py-4 text-gray-400 italic">Maddi zənginlik və eyni zamanda mənəvi xəbərdarlıq</td>
                </tr>
                <tr class="group hover:bg-white/[0.02] transition-colors">
                    <td class="py-4 font-bold text-gray-200">Uzaqdan Baxmaq</td>
                    <td class="py-4 text-gray-400 italic">Böyük hədəflərə gedən yolun başlanğıcı</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

<h2>Dini və Mənəvi Baxış: Abidə və Əməllər</h2>
<p>İslam mədəniyyətində və bir çox dini yozmalarda abidələr, insanın dünyadan köçdükdən sonra arxasında bıraxdığı daimi xeyirxahlıq kimi dəyərləndirilir. Yuxuda abidə görmək, dualarınızın mənəvi qatda ucaldığını və qəbul edildiyini göstərə bilər. Əgər abidə müqəddəs bir şəxsiyyətə aiddirsə, bu, sizin mənəvi rəhbərliyə ehtiyacınız olduğunu və ya həmin şəxsin yolunu izləməli olduğunuzu bildirir.</p>

<p>Abidənin materialı da önəmlidir. Daş abidə davamlılığı, qızıl və ya gümüş abidə isə keçici dünyəvi zənginliyi təmsil edir. Əgər yuxuda abidənin uçduğunu görsəniz, bu, sığındığınız bəzi mənəvi dəyərlərin sarsıldığını və ya cəmiyyətdəki bəzi tabuların sındığını ifadə edir. Bu halda mənəvi sabitliyi bərpa etmək üçün daxili aləminizə yönəlməli və həyatınızdakı prioritetləri yenidən nəzərdən keçirməlisiniz.</p>

<h3>Abidə və Gələcək Miras: Psixoloji Metod</h3>
<p>Siz özünüzü bir abidə ucaldan görürsünüzsə, bu, ailəniz və ya vətəniniz üçün çox mühüm bir iş görəcəyiniz mənasına gəlir. Bu iş yalnız maddiyyatla bağlı deyil, daha çox intellektual və ya mənəvi bir irsin qoyulmasıdır. Belə bir yuxudan sonra mənəvi gücünüzü artırmaq üçün sükutla dincəlmək və daxili niyyətlərinizi təmizləmək tövsiyə olunur. Unutmayın ki, ən böyük abidələr daşdan deyil, könüllərdə qurulur. Hər bir yaxşı hərəkətiniz sizin ruhunuzun sarsılmaz heykəlidir.</p>`,
        faqs: [
            {
                "question": "Yuxuda öz abidəmi görmək nə deməkdir?",
                "answer": "Bu, adətən böyük bir iz qoymaq istəyi və ya bəzən təkəbbürə işarədir. Əməllərinizə və niyyətinizə nəzər salmalısınız."
            },
            {
                "question": "Abidənin titrəyən bir işıqla aydınlandığını görmək?",
                "answer": "Bu, gələcək uğurlarınızın mənəvi bir dayaq üzərində qurulduğunu və qətiyyətli olmalı olduğunuzu bildirir."
            },
            {
                "question": "Qədim dağılmış abidə ziyarət etmək?",
                "answer": "Keçmişdə qalan mühüm bir dərsi yenidən xatırlamaq və ondan nəticə çıxarmaq vaxtının gəldiyini göstərir."
            }
        ],
        related_slugs: ["yuxuda-abajur-gormek", "yuxuda-ilan-gormek"],
        rating_value: 4.9,
        review_count: 86
    };

    const { error } = await supabaseAdmin
        .from('dreams')
        .upsert(post);

    if (error) {
        console.error(error);
        process.exit(1);
    }

    console.log("✅ Post saved directly to Supabase!");
    process.exit(0);
}

savePost();
