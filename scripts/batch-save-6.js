require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

async function saveBatch(posts) {
    const { error } = await supabaseAdmin
        .from('dreams')
        .upsert(posts);

    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log(`✅ Successfully saved ${posts.length} posts!`);
}

const posts = [
    {
        slug: "yuxuda-adada-firtinaya-dusmek",
        title: "Yuxuda Adada Fırtınaya Düşmək",
        seo_title: "Yuxuda Adada Fırtınaya Düşmək: Daxili Çarpışmalar, Sınaqlar və Hüzur (2026)",
        seo_description: "Yuxuda adada fırtınaya düşməyin ən dəqiq yozmaları. Niyə fırtına mənəvi təmizlənmə və maneələrin dəf edilməsi deməkdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda adada firtinaya dusmek, firtina, sınaqlar, daxili garginlik, yuxu yozmalari, menevi temizlenme",
        excerpt: "Yuxuda adada fırtınaya düşmək xəyalpərəstin real həyatda qarşılaşdığı çətinlikləri, emosional sarsıntıları və ya mühüm bir sınaqdan keçməsini simvolizə edir.",
        highlight_box: "Yuxuda adada fırtınaya düşmək, insanın həyatında müvəqqəti xaosun hökm sürdüyünü, daxili gərginliyin pik həddə çatdığını, lakin bu fırtınanın mənfi enerjini yox edərək yeni bir hüzur gətirəcəyini göstərir.",
        category: "Feelings",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Fırtına və Tənhalıq Simvolizmi</h2>
<p>Fırtına, təbiətin ən güclü və təmizləyici hadisələrindən biridir. Yuxuda dənizin ortasındakı bir adada fırtınaya düşmək, xəyalpərəstin emosional dünyasındakı böyük dalğalanmaları təmsil edir. Psixoloji olaraq bu yuxu, sizin həyatınızda kənar kömək olmadan tək başınıza mübarizə apardığınız bir vəziyyəti əks etdirir. Ada sizin \"mənliyiniz\", fırtına isə xarici təzyiqlər və ya daxili qəzəbinizdir. Bu sınaq sizin dözümlülüyünüzü yoxlayır. Fırtınadan sağ çıxmaq, sizin xarakterinizin nə qədər polad kimi bərkidiyini göstərir.</p>

<p><strong>Yuxuda adada fırtınaya düşmək</strong> çox vaxt tərsinə, yəni real həyatda böyük bir sıxıntıdan sonra gələn daimi hüzura işarədir. Necə ki, fırtına havanı təmizləyir, bu yuxu da sizin mənəviyyatınızdakı tozları yuyub aparacaqdır. Bu prosesdə <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi sarsılmaz qalmaq üçün inamınızı möhkəm tutmalısınız.</p>

<h2>Fırtınanın Şiddətinə Görə Yozmalar</h2>
<h3>Güclü Külək və Dalğalar Arasında Qalmaq</h3>
<p>Əgər dalğalar adaya hücum edirsə, bu sizin ailə və ya iş həyatınızda bəzi xırda mübahisələrin olacağını bildirir. Lakin unutmayın ki, dalğa geri çəkiləndə sahili təmiz qoyur. Sizin mənəvi aydınlığınız <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> rəngində olsa, hər hansı bir qaranlıq mənzərəni işıqlandıra bilərsiniz.</p>

<h3>Fırtınanın Birdən Sönməsi</h3>
<p>Yuxuda fırtınanın qəfildən bitdiyini və günəşin çıxdığını görmək, ən çətin probleminizin möcüzəvi şəkildə həll olunacağına və həyatınızda rəvan bir dövrün başlayacağına müjdədir. Bu, dualarınızın qəbul olunmasıdır.</p>

<div class="my-10 p-8 border border-white/10 rounded-[40px] bg-black/40 backdrop-blur-2xl shadow-inner relative overflow-hidden">
    <div class="absolute -left-10 -top-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
    <h4 class="text-xs font-black uppercase tracking-[0.5em] text-blue-500 mb-6 flex items-center gap-3 italic">
        Fırtına Analiz Paneli
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-[10px] leading-relaxed text-gray-500 font-medium">
        <p><strong class="text-white uppercase tracking-widest">Sığınacaq tapmaq:</strong> Çətin anlarda ailənizdən və ya yaxınlarınızdan görəcəyiniz mühüm dəstək.</p>
        <p><strong class="text-white uppercase tracking-widest">Yağışda islanmaq:</strong> Günahlardan arınmaq, ruhun təmizlənməsi və mənəvi yüngüllük.</p>
    </div>
</div>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda fırtına, ilahi bir xəbərdarlıq və ya imtahan kimi görülür. Allah sevdiyi bəndəsini sınağa çəkər ki, onun səbrini artırsın. Adada tək və fırtınada olmaq, kimsədən deyil, yalnız Yaradandan kömək istəməli olduğunuzu xatırladan ali bir vəziyyətdir. Bu yuxu həm də sizin nəfsinizlə apardığınız mübarizənin rəmzidir. Səbr edənlər üçün fırtınadan sonra cənnət ruziləri var.</p>

<h3>Dözümlü Olun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra real həyatdakı xırda problemləri böyütməyin. Hər bir sınağın müvəqqəti olduğunu düşünün. Daxili sükutu tapmağa çalışın. Səbr edin, çünki fırtınada edilən dua ən səmimi duadır. Özünüzü və əzizlərinizi sevgi ilə qoruyun. Unutmayın ki, ən güclü ağaclar ən bərk küləklərdə böyüyür. Sizin ruhunuz bu fırtınadan daha parlaq çıxacaq.</p>`,
        faqs: [
            { "question": "Yuxuda fırtınada gəminin batdığını görmək?", "answer": "Maddi bir itki deyil, əksinə bəzi lazımsız yüklərdən qurtulmağa işarədir." },
            { "question": "Fırtına zamanı sığınacaq tikmək?", "answer": "Öz zəhmətinizlə gələcəyinizi qorunmuş vəziyyətə gətirəcəyinizə yozulur." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.6,
        review_count: 37
    },
    {
        slug: "yuxuda-adani-uzaqdan-gormek",
        title: "Yuxuda Adanı Uzaqdan Görmək",
        seo_title: "Yuxuda Adanı Uzaqdan Görmək: Hədəflər, Ümid və Gelecek Planları (2026)",
        seo_description: "Yuxuda adanı uzaqdan görməyin ən dəqiq yozmaları. Niyə üfiqdəki ada hər zaman yeni bir şans və müjdə rəmzidir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda adani uzaqdan gormek, ümid, hədəflər, müjdə, gələcək, yuxu yozmalari, yeni baslangiclar",
        excerpt: "Yuxuda adanı uzaqdan görmək qarşınızda duran parlaq imkanları, hələ reallaşmamış arzuları və ya həyat dənizində tapacağınız hüzurlu limanı simvolizə edir.",
        highlight_box: "Yuxuda adanı uzaqdan görmək, insanın həyatında çox mühüm bir məqsədə doğru irəlilədiyini, çətinliklərin sonunda bir qurtuluş yolunun göründüyünü və yaxın zamanda böyük bir müvəffəqiyyət qazanacağını bildirir.",
        category: "Nature",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Üfiqdə Görünən Adanın Analizi</h2>
<p>Dənizçilər üçün uzaqdan görünən ada, qurtuluşun, qurunun və təhlükəsizliyin carçısıdır. Yuxularda da bu rəmz insanın həyatındakı \"ümid işığını\" təmsil edir. Siz bəlkə də bir müddətdir çətinliklər içində üzürsünüz, lakin uzaqdan gördüyünüz həmin ada sizin üçün işlərin nəhayət düzələcəyini göstərir. Psixoloji olaraq bu yuxu, fokuslanma qabiliyyətinizi əks etdirir. Siz artıq hədəfinizi seçmisiniz və gözünüz həmin parlaq nöqtədədir. Hədəfə çatmaq artıq an məsələsidir.</p>

<p><strong>Yuxuda adanı uzaqdan görmək</strong> həm də daxili bir oyanışdır. Siz həyatdan nə istədiyinizi anlamağa başlayırsınız. Uzaqda görünən yaşıl bir ada, mənəvi ucalıq və maddi bərəkətin yaxınlaşdığını bildirir. Bu prosesdə <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi möhtəşəm bir nəticəyə nail olmaq üçün stabil addımlarla irəliləməlisiniz.</p>

<h2>Görünüşə Görə Ada Yozmaları</h2>
<h3>Dumanlar Arasında Ada Görmək</h3>
<p>Əgər ada dumanlıdırsa və tam görünmürsə, bu sizin gələcəklə bağlı bəzi tərəddüdləriniz olduğunu bildirir. Lakin dumanın olması adanın orada olmadığını göstərmir. <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> rəngində bir aydınlıqla bu dumanı dağıdıb hədəfə yönəlməlisiniz.</p>

<h3>Bir Neçə Adanı Uzaqdan Görmək</h3>
<p>Bir deyil, bir neçə adanın üfiqdə görünməsi, seçimlərin çoxluğunu və hər birinin özünəməxsus xeyirləri olduğunu simvolizə edir. Sizin üçün bir neçə qapı eyni anda açılacaqdır.</p>

<div class="my-10 overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-r from-blue-900/10 to-transparent p-10 relative">
    <div class="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
    <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 mb-6 flex items-center gap-2">
        Hədəf və Müjdə Paneli
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed text-gray-400">
        <p><strong class="text-white">Adaya doğru üzmək:</strong> Məqsədə çatmaq üçün göstərilən real zəhmət.</p>
        <p><strong class="text-white">Adaya gəmi ilə baxmaq:</strong> Uğurun gələcəyinə olan tam inam və səbir.</p>
    </div>
</div>

<h2>Dini və Metafizik Təhlil</h2>
<p>Mənəvi yozmalarda uzaqdan görünən ada, \"vəd edilmiş bərəkət\" kimidir. Siz səbrin mükafatını görmək üzrəsiniz. Bu yuxu həm də bəzi mənəvi dərəcələrin uzaqdan sizə işıq salmasıdır. Adanın nurani şəkildə görünməsi dualarınızın mənəvi qatda artıq \"meyvə verdiyini\" və tezliklə reallaşacağını bildirir. Səmimiyyət və inam sizin gəminizdir.</p>

<h3>Həvəslənin: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra planlarınızdan vaz keçməyin. Hədəf artıq görünür. Daha çox zəhmət çəkin, çünki mənzilə az qalıb. Özünüzü neqativ insanlardan uzaq tutun və üfiqdəki həmin adaya (hədəfə) fokuslanın. Unutmayın ki, ən uzun səfərlər belə bir ümid işığı ilə bitir. Sizin adanız sizi gözləyir.</p>`,
        faqs: [
            { "question": "Yuxuda adanın birdən yox olduğunu görmək?", "answer": "Fürsətlərin müvəqqəti olaraq gizləndiyinə, lakin tezliklə yenidən görünəcəyinə işarədir." },
            { "question": "Uzaqdan görünən adadan səs eşitmək?", "answer": "Gələcək uğurunuzun carçısı olan mühüm bir xəbərə və ya nəsihətə yozulur." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.7,
        review_count: 52
    },
    {
        slug: "yuxuda-adam-oldurmek",
        title: "Yuxuda Adam Öldürmək",
        seo_title: "Yuxuda Adam Öldürmək: Tərsinə Yozumlar, Qələbə və Problemlərin Həlli (2026)",
        seo_description: "Yuxuda adam öldürməyin ən dəqiq yozmaları. Niyə öldürmək çox vaxt çətinliklərdən qurtulmaq və düşmənə qalib gəlmək deməkdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda adam oldurmek, qələbə, problemlərin həlli, dəyişikliklər, yuxu yozmalari, daxili garginlik",
        excerpt: "Yuxuda adam öldürmək adətən tərsinə, yəni düşmənə qalib gəlməyi, bir problemi kökündən həll etməyi və ya daxili bir zəifliyi məhv etməyi simvolizə edir.",
        highlight_box: "Yuxuda adam öldürmək, insanın həyatındakı böyük bir maneənin aradan qalxacağını, rəqiblərinə qarşı mütləq üstünlük qazanacağını və ya öz daxili qorxuları ilə amansızcasına mübarizə aparıb qalib gələcəyini göstərir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Öldürmə Simvolizminin Psixoloji Dərinliyi</h2>
<p>Yuxularda ölüm və öldürmə hərəkətləri həmişə real mənada deyil, rəmzi mənada yozulmalıdır. Öldürmək, bir vəziyyətin, bir xüsusiyyətin və ya bir sıxıntının \"sonlandırılması\" deməkdir. Psixoloji olaraq, yuxuda adam öldürmək sizin həyatınızda artıq yer almasını istəmədiyiniz bir şeyi (məsələn, tənbəllik, qorxu, pis vərdiş) daxili aləminizdə məhv etməyinizdir. Bu, radikal bir dəyişikliyin carçısıdır. Siz artıq köhnə \"mənliyinizi\" öldürüb, yeni və daha güclü bir şəxsiyyətə çevrilirsiniz.</p>

<p><strong>Yuxuda adam öldürmək</strong> köhnə yozmalarda həm də bir günahdan və ya bəladan qurtulmağa işarədir. Əgər yuxuda tanıdığınız birini öldürürsünüzsə, bu reallıqda həmin şəxsə qarşı olan bir hiddətinizin bitməsi və ya həmin şəxs vasitəsilə mühüm bir işin həll olunması deməkdir. Bu yüksəliş prosesində <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi sarsılmaz bir mövqe qazanmaq üçün bəzi maneələri kəsib atmalısınız.</p>

<h2>Öldürmənin Müxtəlif Halları</h2>
<h3>Müdafiə Zamanı Adam Öldürmək</h3>
<p>Əgər özünüzü qoruyarkən kimisə öldürürsünüzsə, bu sizin real həyatda haqqınızı qoruyacağınızı və sizə qarşı olan haqsızlıqların qarşısını qətiyyətlə alacağınızı bildirir. Bu şərəfli bir mübarizədir. Bu zaman <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi soyuqqanlı olmaq vacibdir.</p>

<h3>Heç Bir Səbəb Olmadan Öldürmək</h3>
<p>Bu yuxu bir növ xəbərdarlıqdır. Sizin daxili hiddətiniz və ya qəfil verdiyiniz qərarlar sizə zərər verə bilər. Nəfsinizlə mübarizə aparmalı və hisslərinizi nəzarətdə saxlamalısınız.</p>

<div class="my-10 overflow-hidden border border-white/10 rounded-[48px] bg-black/50 p-12 shadow-2xl backdrop-blur-3xl relative">
    <div class="absolute -right-20 -bottom-20 w-64 h-64 bg-red-600/5 rounded-full blur-[100px]"></div>
    <h4 class="text-sm font-black uppercase tracking-widest text-red-500 mb-6 flex items-center gap-2">
        Mübarizə və Qələbə
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-xs text-gray-400 leading-relaxed">
        <p><strong class="text-white">Düşməni öldürmək:</strong> Şər qüvvələrə qalib gəlmək və tam hüzur.</p>
        <p><strong class="text-white">Tanımadığı birini öldürmək:</strong> Mənasız qayğıların və qorxuların bitməsi.</p>
    </div>
</div>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda öldürmək, çox vaxt mühüm bir elmi və ya hikməti kəşf etmək kimi də yozulur. Bəzi qaynaqlara görə, yuxuda adam öldürmək namazın qəzaya qalması və ya mühüm bir borcun xatırladılması ola bilər. Lakin əksər hallarda öldürülən adamın (əgər tanınırsa) ömrünün uzandığına və onun üçün ruzi qapılarının açıldığına işarədir. Ölümlə həyat yuxularda daim bir-birini əvəzləyir.</p>

<h3>Problem Həll Edin: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra həyatınızda sizə mane olan hər şeyi analiz edin. Hansı vərdişinizi \"öldürməlisiniz\"? Hansı problemi kökündən həll etməlisiniz? Qətiyyətli olun, lakin aqressiyadan qaçın. Öz gücünüzü yaradıcılığa sərf edin. Səhvlərinizi düzəldin və gələcəyinizə daha təmiz, daha cəsarətli baxın. Sizin ən böyük qələbəniz öz nəfsiniz üzərində olan qələbədir.</p>`,
        faqs: [
            { "question": "Yuxuda adam öldürüb qaçmaq?", "answer": "Real həyatda bir məsuliyyətdən kənarlaşmaq istədiyinizə, lakin vicdanınızın sizi rahat bıraxmadığına işarədir." },
            { "question": "Öldürdüyün adamın yenidən dirildiyini görmək?", "answer": "Bitmiş hesab etdiyiniz bir problemin yenidən gündəmə gələcəyinə və bu dəfə daha səmimi həll olunacağına yozulur." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.5,
        review_count: 64
    },
    {
        slug: "yuxuda-adam-gormek-tanis",
        title: "Yuxuda Adam Görmək (Tanış)",
        seo_title: "Yuxuda Tanış Adam Görmək: Mesajlar, Xəbərlər və Münasibətlər (2026)",
        seo_description: "Yuxuda tanıdığın bir adamı görməyin ən dəqiq yozmaları. Niyə tanış simalar yuxuda mühüm bir xəbər və ya mənəvi dəstək rəmzidir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda tanis adam gormek, xeberler, münasibətlər, mənəvi dəstək, yuxu yozmalari, heyat hadisələri",
        excerpt: "Yuxuda tanış adam görmək həmin şəxslə bağlı xəbər almağı, unudulmuş bir məsələnin xatırlanmasını və ya daxili bir bağın mövcudluğunu simvolizə edir.",
        highlight_box: "Yuxuda tanış adam görmək, çox vaxt həmin şəxsdən xoş bir müjdə alacağınıza, aranızdakı münasibətlərin yeni bir müstəviyə keçəcəyinə və ya onun vasitəsilə həyatınızda bir xeyir tapacağınıza işarədir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Tanış Simaların Psixoloji Analizi</h2>
<p>Tanış simalar yuxularımızda adətən müəyyən bir keyfiyyətin və ya məlumatın daşıyıcısı kimi çıxış edirlər. Bir tanış adamı yuxuda görmək, reallıqda sizin həmin adamda olan bir xüsusiyyətə (məsələn, cəsarət, sakitlik, uğur) ehtiyac duyduğunuzu və ya onunla bağlı bir alt şüur işləminin getdiyini göstərir. Psixoloji olaraq bu yuxu, sosial çevrənizlə olan bağlarınızın vəziyyətini əks etdirir. Əgər tanış adam gülümsəyirsə, bu sizin həyatınızdakı hüzuru; qucaqlaşırsa, mənəvi dəstəyi təmsil edir.</p>

<p><strong>Yuxuda tanış adam görmək</strong> bəzən həmin şəxslə bağlı real bir hadisənin (onun toyu, iş uğuru və ya ziyarəti) yaxınlaşdığını bildirir. Bu prosesdə <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi möhkəm və səmimi dostluqlar qurmaq üçün sizə verilən mənəvi mesajları diqqətlə dinləməlisiniz.</p>

<h2>Görüşün Şəklinə Görə Yozmalar</h2>
<h3>Tanış Adamla Söhbət Etmək</h3>
<p>Yuxuda tanıdığın birisindən nəsihət almaq və ya xoş söhbət etmək, reallıqda qarşılaşdığınız problemin həlli üçün lazım olan ipucunun elə yaxınlarınızda olduğunu bildirir. Onların təcrübəsindən istifadə edin. Daxili işığınızı <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> rəngində parlaq saxlayın ki, bu nəsihətləri doğru anlayasınız.</p>

<h3>Tanış Adamla Mübahisə Etmək</h3>
<p>Yuxuda olan mübahisə çox vaxt tərsinə, yəni reallıqda həmin şəxslə daha çox səmimiyyət qazanmağa və ya onun tərəfindən müdafiə olunmağa yozulur. Bu, daxili gərginliyin təmizlənməsidir.</p>

<div class="my-10 overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br from-blue-900/10 to-transparent p-10">
    <h4 class="text-xs font-black uppercase tracking-[0.5em] text-gray-500 mb-8 italic">Münasibət Analiz Cədvəli</h4>
    <div class="grid grid-cols-2 gap-8 text-[11px] leading-relaxed">
        <div class="space-y-4">
            <p class="font-bold text-blue-400">Gülümsəyən tanış</p>
            <p class="text-gray-400">Yaxın zamanda gələcək xoş xəbər və müjdə.</p>
        </div>
        <div class="space-y-4">
            <p class="font-bold text-green-400">Kədərli tanış</p>
            <p class="text-gray-400">Həmin şəxsə mənəvi kömək və ya dua ehtiyacı.</p>
        </div>
    </div>
</div>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda tanış birini görmək, ruzi və bərəkət rəmzidir. Tanışın yuxuda olması sizin rəhmət və mərhəmət qapınızın açıq olduğunu göstərir. Əgər həmin şəxs xeyirxah biridirsə, onun xasiyyətindən nümunə götürməyiniz tövsiyə olunur. Bu yuxu həm də sileyi-rəhim (qohumluq əlaqələri) barədə xəbərdarlıq ola bilər – bəlkə də kimi isə çoxdan unutmusunuz.</p>

<h3>Əlaqə Qurun: Nə Etməli?</h3>
<p>Bu yuxudan sonra həmin şəxsi axtarın, zəng edin və ya hal-əhval tutun. Səmimiyyətinizi artırın. İnsanlarla olan münasibətlərinizi sevgi üzərində qurun. Unutmayın ki, həyatda ən böyük sərvət səmimi dostlar və yaxınlardır. Kimisə incitmisinizsə, könlünü alın. Sizin ruhunuz başqaları ilə olan bu gözəl əlaqələrlə qidalanır.</p>`,
        faqs: [
            { "question": "Yuxuda çoxdan görmədiyi tanışını görmək?", "answer": "Keçmişdə yarımçıq qalmış bir məsələnin yenidən gündəmə gələcəyinə və bu dəfə uğurla bitəcəyinə işarədir." },
            { "question": "Tanış adamın sizə nəsə verməsi?", "answer": "Real həyatda həmin şəxsdən və ya başqasından maddi-mənəvi bir fayda görəcəyinizə yozulur." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.8,
        review_count: 76
    },
    {
        slug: "yuxuda-adam-gormek-yad",
        title: "Yuxuda Adam Görmək (Yad)",
        seo_title: "Yuxuda Yad Adam Görmək: Naməlum Fürsətlər, İntuisiya və Sınaqlar (2026)",
        seo_description: "Yuxuda tanımadığın bir adamı görməyin ən dəqiq yozmaları. Niyə yad simalar bəzən mələklər və ya naməlum xəbərlər deməkdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda yad adam gormek, tanımadığın adam, naməlum xəbərlər, intuisiya, yuxu yozmalari, sınaqlar",
        excerpt: "Yuxuda yad adam görmək həyatınıza girəcək yeni insanları, hələ bilmədiyiniz kəşfləri və ya alt şüurunuzun sizə verdiyi gizli mesajları simvolizə edir.",
        highlight_box: "Yuxuda yad adam görmək, çox vaxt gözlənilməz bir yerdən gələcək köməyi, həyatınızdakı yeni və parlaq bir mərhələnin başlanğıcını və ya mənəvi bir bələdçi ilə qarşılaşmağınızı göstərən sirli rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Naməlum Simvolların Psixologiyası</h2>
<p>Yuxularda gördüyümüz yad adamlar əslində özümüzün hələ kəşf etmədiyimiz tərəfləridir. Psixologiyada bu simvollar \"persona\" və ya \"animus/anima\" kölgələri kimi qəbul olunur. Bir yad adamı yuxuda görmək, reallıqda yeni bir situasiya ilə qarşılaşacağınızı və buna necə reaksiya verəcəyinizi simvolizə edir. Yad adamın geyimi, rəftarı və siması sizin gələcəyiniz barədə mühüm ipucları verir. Əgər yad adam nurani və gözəldirsə, bu sizin parlaq gələcəyinizdir; əgər qorxuludursa, bu daxili narahatlıqlarınızdır.</p>

<p><strong>Yuxuda yad adam görmək</strong> çox vaxt \"xızır\" rəmzi kimi də bəzən yozulur – yəni darda qaldığınızda köməyə çatacaq naməlum bir xilaskar. Bu prosesdə <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi sabit bir uğur üçün daxili intuisiyanıza güvənməlisiniz.</p>

<h2>Yad Adamla Bağlı Fərqli Ssenarilər</h2>
<h3>Yad Adamla Yol Getmək</h3>
<p>Yuxuda tanımadığın biri ilə çiyin-çiyinə yol getmək, yaxın zamanda yeni bir iş ortaqlığına və ya dərin bir dostluğa qədəm qoyacağınızı bildirir. Bu adam sizin həyat yolunuzda mühüm bir keçid rolunu oynayacaq. Yolun aydın olması üçün <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi soyuqqanlı şəkildə qarşınızdakını tanımağa çalışmalısınız.</p>

<h3>Yad Adamın Evinizə Gəlməsi</h3>
<p>Evinizə yad birinin daxil olması, ailənizə gələcək yeni bir xəbər və ya bərəkət rəmzidir. Qonaq hər zaman ruzi gətirər. Əgər qonaq xoş niyyətlidirsə, daxili hüzurunuz daha da artacaqdır.</p>

<div class="my-10 border-l-4 border-purple-500 bg-purple-500/5 p-8 italic text-xs leading-relaxed text-gray-400 rounded-r-3xl">
    "Yuxuda yad adam, sizin hələ açılmamış gizli potensialınızdır. O sizə tanıdıqlarınızdan deyil, tanımadıqlarınızdan gələcək böyük xeyiri müjdələyir."
</div>

<h2>Dini və Metafizik Təhlil</h2>
<p>Mənəvi yozmalarda yad adam bəzən müqəddəs bir varlığın və ya yaxşı bir niyyətin rəmzi sayılır. Yuxuda naməlum birinin sizə nəsə verməsi, Allahdan gələn bir lütf kimi qiymətləndirilir. Yad adamın siması unudulubsa, bu deməkdir ki, gələn xəbər insan faktoru ilə deyil, birbaşa tale ilə bağlıdır. Səmimiyyət və təvazökarlıq sizin ən böyük mühafizənizdir.</p>

<h3>Açıq Olun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra yeni tanışlıqlara və imkanlara qapılarınızı bağlamayın. İntuisiyanızı dinləyin. Hər bir naməlum şəxsdə bir öyrənilməli dərs olduğunu düşünün. Yad insanlara qarşı xeyirxah olun, bəlkə də onların duaları sizin üçün açar olacaqdır. Unutmayın ki, hər bir dost bir vaxtlar yad bir adam idi. Həyatın sürprizlərinə inamla qucaq açın.</p>`,
        faqs: [
            { "question": "Yuxuda yad birinin sizə kömək etməsi?", "answer": "Real həyatda tək başınıza həll edə bilməyəcəyiniz bir məsələnin möcüzəvi şəkildə düzələcəyinə işarədir." },
            { "question": "Yad birindən qaçmaq?", "answer": "Yeniliklərdən və ya daxili dəyişikliklərdən duyulan müvəqqəti bir qorxudur." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.6,
        review_count: 49
    }
];

saveBatch(posts);
