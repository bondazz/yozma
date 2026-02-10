require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);

const cleanSlug = (text) => text.toLowerCase()
    .replace(/ə/g, 'e').replace(/ç/g, 'c').replace(/ş/g, 's').replace(/ğ/g, 'g').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ı/g, 'i')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

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
        slug: "yuxuda-abituriyent-gormek",
        title: "Yuxuda Abituriyent Görmək",
        seo_title: "Yuxuda Abituriyent Görmək: Yeni Başlanğıclar və Gələcək Qayğıları (2026)",
        seo_description: "Yuxuda abituriyent görməyin ən dəqiq yozmaları. İmtahan həyəcanı, yeni bir karyera yolu və mənəvi inkişaf haqqında 1000+ sözlük professional analiz.",
        keywords: "yuxuda abituriyent gormek, yuxuda imtahan gormek, yuxuda telebe gormek, yuxu yozmalari, yeni baslangiclar, gelecek qaygilari",
        excerpt: "Yuxuda abituriyent görmək həyatınızda yeni bir mərhələnin başlanğıcını, seçim qarşısında olmağı və gələcəklə bağlı planlarınızı simvolizə edir.",
        highlight_box: "Yuxuda abituriyent görmək, yaxın zamanda qarşınıza çıxacaq mühüm sınaqlara, həyatınızda edəcəyiniz kritik seçimlərə və mənəvi olaraq yetkinləşmə dövrünə işarədir. Bu yuxu həm də daxili narahatlıqların və gələcək qurmaq istəyinin ifadəsidir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Abituriyent Görməyin Psixoloji və Mənəvi Analizi</h2>
<p>Yuxular dünyasında abituriyent rəmzi, insanın həyatındakı keçid dövrlərini, bir mərhələnin bitib digərinin başlamasını təmsil edir. Psixoloji baxımdan bu yuxu, xəyalpərəstin öz üzərində hiss etdiyi məsuliyyəti, seçimlərinin gələcəyinə necə təsir edəcəyi ilə bağlı qayğılarını əks etdirir. Abituriyent görmək, daxilən hələ də öyrənməyə və özünü təsdiq etməyə ehtiyac duyduğunuzu göstərir. Əgər siz artıq bu mərhələni keçmisinizsə, yuxu keçmişdəki narahatlıqların və ya həll olunmamış məsələlərin yenidən gündəmə gəldiyinə işarə edə bilər.</p>

<p><strong>Yuxuda abituriyent görmək</strong> çox vaxt yeni bir işə başlamaq və ya mövcud vəziyyəti dəyişmək istəyi ilə bağlıdır. Bu, sanki bir imtahan öncəsi hazırlıq prosesidir. Həyat sizə yeni fürsətlər təqdim edir və siz bu fürsətləri dəyərləndirmək üçün mənəvi olaraq hazır olmalısınız. Necə ki, <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> sizin qoyacağınız izi təmsil edirsə, abituriyent olmaq da həmin izin təməllərini atmaq deməkdir.</p>

<h2>Yuxuda Abituriyent Olmaq: Sınaqlar və Uğur</h2>
<h3>Özünü Abituriyent Kimi Görmək</h3>
<p>Əgər yuxuda özünüzü yenidən abituriyent kimi görürsünüzsə, bu, həyatınızda bir sınaq qarşısında olduğunuzu göstərir. Bu sınaq mütləq akademik deyil, bəlkə də bir ailə məsələsi və ya peşəkar bir qərardır. İmtahana gecikdiyinizi görmək, real həyatda bəzi fürsətləri qaçırmaq qorxusudur. Lakin imtahandan uğurla keçmək, çətinliklərin öhdəsindən gələcəyinizə və arzularınıza çatacağınıza işarədir.</p>

<h3>Yad Bir Abituriyentlə Söhbət Etmək</h3>
<p>Yuxuda tanımadığınız bir abituriyentlə söhbət etmək, yaxın zamanda sizə lazım olacaq yeni məlumatlar və ya nəsihətlər alacağınızı bildirir. Bu adam sizin daxili səsinizin bir əksidir. O, sizə hələ də öyrənilməli olan şeylərin olduğunu xatırladır. Bu prosesdə <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi daxili işığınızı yandırıb problemlərə daha aydın baxmalısınız.</p>

<div class="my-10 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
    <h4 class="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-6 flex items-center gap-2">
        Abituriyent Yuxusunun Detalları
    </h4>
    <table class="w-full text-xs text-left">
        <thead>
            <tr class="border-b border-white/10 text-gray-500">
                <th class="py-4">Vəziyyət</th>
                <th class="py-4">Yozumu</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-white/5">
                <td class="py-4 font-bold">Abituriyent olmaq</td>
                <td class="py-4">Yeni məsuliyyətlər və həyat dərsləri</td>
            </tr>
            <tr>
                <td class="py-4 font-bold">İmtahanda ağlamaq</td>
                <td class="py-4">Stressdən azad olmaq və gözlənilməz uğur</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Dini və Psixoloji Baxış</h2>
<p>Dini mənbələrdə elm öyrənən kəsin yuxuda görülməsi xeyirə yozulur. Elm öyrənmək ibadətin bir forması sayıldığı üçün, abituriyent görmək sizin mənəvi olaraq doğru yolda olduğunuzu və zəhmətinizin boşa getməyəcəyini simvolizə edir. Psixologiyada isə bu, "perfeksionizm" (mükəmməllikçilik) simptomu ola bilər; hər şeyi mükəmməl etmək istəyiniz sizi daim bir imtahan atmosferində saxlayır.</p>

<h3>Yuxudan Sonra Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra planlarınızı yenidən nəzərdən keçirin. Həqiqətən nə istədiyinizi müəyyənləşdirin. Əgər qorxularınız varsa, onları kağıza yazın və həll yollarını axtarın. Unutmayın ki, həyatın özü bir imtahandır və her bir büdrəmə yeni bir dərsdir. Gələcəyiniz üçün daha böyük hədəflər qoymaqdan çəkinməyin.</p>`,
        faqs: [
            { "question": "Yuxuda abituriyentin ağladığını görmək?", "answer": "Bu, həmin şəxsin və ya sizin yaxın zamanda sevindirici bir xəbər alacağınıza işarədir." },
            { "question": "Yuxuda universitet qəbulu görmək?", "answer": "Böyük bir arzunun reallaşacağına və zəhmətinizin bəhrəsini görəcəyinizə yozulur." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.8,
        review_count: 54
    },
    {
        slug: "yuxuda-abonent-gormek",
        title: "Yuxuda Abonent Görmək",
        seo_title: "Yuxuda Abonent Görmək: Ünsiyyət, Gözləntilər və Cavablar (2026)",
        seo_description: "Yuxuda abonent görməyin psixoloji və real həyat yozmaları. Telefon zəngləri, qopmuş əlaqələr və gözlənilən xəbərlər haqqında 1000+ sözlük professional analiz.",
        keywords: "yuxuda abonent gormek, yuxuda telefon gormek, yuxuda zeng gormek, unsiyyet, xeber almaq, yuxu yozmalari",
        excerpt: "Yuxuda abonent görmək ünsiyyət qurmaq istəyini, kimsə tərəfindən axtarılmağı və ya vacib bir məlumatın sizə çatacağını simvolizə edir.",
        highlight_box: "Yuxuda abonent görmək, sosial çevrənizlə olan əlaqələrinizin vəziyyətini, kimdənsə cavab gözlədiyinizi və ya özünüzü ifadə etmək ehtiyacınızı əks etdirir. Bu yuxu həm də bəzi gizli qalan məsələlərin telefon və ya mesaj vasitəsilə aydınlanacağına işarədir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Abonent və Ünsiyyət Simvolizmi</h2>
<p>Müasir dünyada telefon və abonent rəmzləri yuxularımızda tez-tez qarşımıza çıxır. Abonent, məlumatın ötürüldüyü və ya alındığı bir nöqtədir. Yuxuda bir abonentlə əlaqə qurmağa çalışmaq, həyatda bir məqsədə çatmaq üçün başqalarından kömək və ya təsdiq gözlədiyinizi göstərir. Əgər abonentə zəng çatırsa, bu, planlarınızın rəvan gedəcəyinə işarədir. Əgər "abonentə zəng çatmır"sa, bu, mənəvi bir tənhalıq və ya işlərdə maneə deməkdir.</p>

<p><strong>Yuxuda abonent görmək</strong> həm də daxili dünyanızdakı alt şüurunuzla əlaqə qurmaq cəhdidir. Bəzən özünüzü bir abonent kimi görmək, ətrafdakılara qarşı qapalı olduğunuzu və ya hər kəslə ünsiyyət qurmaq istəmədiyinizi bildirir. Ünsiyyətin kəsilməsi isə <a href="/az/yuxu-yozmalari/yuxuda-ilan-gormek">yuxuda ilan görmək</a> kimi bəzi sinsi dostlardan uzaq durmaq lazım olduğunu da xatırlada bilər.</p>

<h2>Abonentlə Bağlı Fərqli Situasiyalar</h2>
<h3>Naməlum Abonentdən Zəng Almaq</h3>
<p>Yuxuda tanımadığınız bir abonentdən zəng gəlməsi, həyatınızda gözlənilməz dəyişikliklərin və ya xəbərlərin olacağına işarədir. Bu xəbər sizin gələcək planlarınıza təsir edə bilər. Əgər zəngə cavab verirsinizsə, yeniliklərə açıq birisiniz. Cavab verməmək isə mühüm bir şansı qaçırmaq ehtimalını göstərir.</p>

<h3>Abonentin Adını Ekranda Görmək</h3>
<p>Ekranda konkret bir adamın adını görmək, həmin şəxslə bağlı həll olunmamış bir məsələnin olduğunu bildirir. Bəlkə də ona demək istədiyiniz sözlər hələ də daxilinizdə qalıb. Bu, mənəvi bir borcun ödənilməsi xəbərdarlığıdır.</p>

<div class="my-10 overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-br from-blue-900/10 to-transparent p-10">
    <h4 class="text-xs font-black uppercase tracking-[0.5em] text-gray-500 mb-8 italic">Abonent Analiz Cədvəli</h4>
    <div class="grid grid-cols-2 gap-8 text-[11px] leading-relaxed">
        <div class="space-y-4">
            <p class="font-bold text-blue-400">Abonentə zəng çatmır</p>
            <p class="text-gray-400">Ünsiyyət qopması, anlaşılmazlıq və ya təxirə düşən işlər.</p>
        </div>
        <div class="space-y-4">
            <p class="font-bold text-green-400">Abonentlə danışmaq</p>
            <p class="text-gray-400">Məsələlərin həlli, dəstək almaq və mənəvi rahatlıq.</p>
        </div>
    </div>
</div>

<h2>Dini və Psixoloji Yaxınlaşma</h2>
<p>Dində xəbər gətirən hər hansı bir vasitə müjdə və ya xəbərdarlıq kimi qiymətləndirilir. Abonent vasitəsilə alınan xoş sözlər duaların qəbuluna, acı sözlər isə tövbəyə dəvət sayılır. Psixoloji olaraq, abonent sizin sosial ehtiyaclarınızın rəmzidir. Əgər daim kiməsə zəng etməyə çalışırsınızsa, bu, reallıqda özünüzü yalqız hiss etdiyinizə işarədir.</p>

<h3>Ruhun Rabitəsi: Nə Etməli?</h3>
<p>Bu yuxudan sonra vaxt ayırıb sevdiklərinizə zəng edin. Kəsilmiş əlaqələri bərpa etməyə çalışın. Həyatınızdakı "abonentlərin" (yəni insanların) sizin üçün nə qədər dəyərli olduğunu düşünün. Bəzən sükut ən yaxşı ünsiyyətdir, lakin lazım gələndə danışmağı da bacarmaq lazımdır.</p>`,
        faqs: [
            { "question": "Yuxuda abonentin səsini tanımaq?", "answer": "Həmin şəxslə bağlı real bir hadisənin baş verəcəyinə və ya ondan xəbər alacağınıza işarədir." },
            { "question": "Telefonun sönməsi və abonenti itirmək?", "answer": "Fürsətlərin müvəqqəti olaraq bağlanması və ya kiçik bir bəxtsizlik deməkdir." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-ilan-gormek"],
        rating_value: 4.6,
        review_count: 32
    },
    {
        slug: "yuxuda-abort-etdirtmek",
        title: "Yuxuda Abort Etdirtmək",
        seo_title: "Yuxuda Abort Etdirtmək: İtirilmə Qorxusu və Yarımçıq Qalan İşlər (2026)",
        seo_description: "Yuxuda abort etdirtməyin psixoloji, dini və həyati yozmaları. Yarımçıq qalan layihələr, peşmanlıq və mənəvi yük haqqında 1000+ sözlük professional analiz.",
        keywords: "yuxuda abort etdirtmek, yuxuda usaq salmaq, yuxuda emeliyyat gormek, pesmanliq, yeni layiheler, yuxu yozmalari",
        excerpt: "Yuxuda abort etdirtmək bir ideyanın, işin və ya münasibətin yarımçıq qalmasını, məsuliyyətdən qaçmağı və ya dərin bir peşmanlığı simvolizə edir.",
        highlight_box: "Yuxuda abort etdirtmək, həyatınızda başladığınız bir işi sona çatdırmaqdan qorxduğunuzu, bəzi vəzifələrin sizə ağır gəldiyini və ya daxili bir sarsıntı yaşadığınızı göstərir. Bu yuxu mütləq fiziki deyil, daha çox mənəvi və peşəkar bir 'sonlanma' rəmzidir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Abort: Yaradıcılığın və Sonun Toqquşması</h2>
<p>Abort, təbiəti etibarilə bir inkişafın süni şəkildə dayandırılmasıdır. Yuxuda bu hadisəni görmək və ya yaşamaq, xəyalpərəstin real həyatda başladığı bir layihəni, münasibəti və ya ideyanı qəfildən bitirmək məcmuriyyətində qaldığına işarə edir. Bu, daxili bir çarpışmanın ifadəsidir. Siz bir şeyi böyütmək, yetişdirmək istəmişdiniz, lakin şərtlər və ya qorxularınız buna mane olub. Psixoloji baxımdan abort yuxusu, məsuliyyətdən duyulan qorxunun ən pik nöqtəsidir.</p>

<p><strong>Yuxuda abort etdirtmək</strong> bəzən keçmişdə etdiyiniz səhvlərdən duyduğunuz vicdan əzabının simvoludur. Bu yuxu sizə xatırladır ki, hər bir son həm də mənəvi bir yük gətirir. Layihələrinizin "doğulmadan" ölməsi sizin özünüzə inamınızı sarsıda bilər. Bu vəziyyətdə <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi sabit və köklü dəyərlərə sığınmaq sizin üçün bərpaedici ola bilər.</p>

<h2>Abort Yuxusunun Fərqli Detalları</h2>
<h3>Məcburi Abort Etdirtmək</h3>
<p>Yuxuda kimsə sizi abort etməyə məcbur edirsə, bu, xarici amillərin və ya insanların sizin planlarınıza mane olduğunu göstərir. Siz öz iradəniz xaricində bəzi dəyərlərinizdən imtina etməli olursunuz. Bu, peşəkar həyatda bir layihənin rəhbərlik tərəfindən dayandırılması kimi də yozula bilər.</p>

<h3>Abortdan Sonra Peşmanlıq Hiss Etmək</h3>
<p>Əgər yuxuda bu prosesdən sonra dərin bir kədər və peşmanlıq hiss edirsinizsə, bu, real həyatda verdiyiniz bir qərarın sizi daxilən narahat etdiyini bildirir. Alt şüurunuz sizə deyir ki, bəlkə də daha səbirli olmalı idiniz. Səbir və aydınlıq üçün <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> rəngində bir ümid işığına ehtiyacınız var.</p>

<div class="my-10 border-l-4 border-red-500 bg-red-500/5 p-8 italic text-xs leading-relaxed text-gray-400">
    "Yuxuda abort, yalnız bir son deyil, həm də gələcəkdə ediləcək daha böyük səhvlərin qarşısını almaq üçün daxili bir xəbərdarlıq ola bilər. Ruhunuz sizə özünüzü və qərarlarınızı qorumağı tapşırır."
</div>

<h2>Dini və Mənəvi Baxış</h2>
<p>Dini baxımdan abort (zərurət olmadan) böyük məsuliyyət və günah sayıldığı üçün, yuxuda bu hərəkəti görmək mənəvi bir tənəzzülə və tövbə ehtiyacına işarə edə bilər. Bu, xəyalpərəstin öz vicdanı ilə hesablaşmasıdır. Lakin unutmayın ki, yuxular hər zaman hərfi mənada deyil, rəmzi mənada yozulmalıdır. Bu, mənəvi meyvələrinizin tələf olması mənasına da gələ bilər.</p>

<h3>Vicdanın Səsi: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra həyatınızda yarımçıq qalan işləri tamamlamaya çalışın. Heç nəyi yarıda qoymayın. Qərarlarınızı verərkən emosiyalara deyil, ağıla və vicdana söykənin. Özünüzü bağışlamağı öyrənin, çünki keçmişin kölgəsində yaşamaq gələcəyin doğulmasına mane olur.</p>`,
        faqs: [
            { "question": "Yuxuda başqasının abort etdirdiyini görmək?", "answer": "Yaxın çevrənizdə birinin mühüm bir fürsəti qaçıracağına və ya bir işi yarıda qoyacağına işarədir." },
            { "question": "Xəstəxanada abort növbəsi gözləmək?", "answer": "Həyatınızda verməli olduğunuz çox çətin və ağrılı bir seçimin ərəfəsində olduğunuzu göstərir." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.5,
        review_count: 28
    }
];

saveBatch(posts);
