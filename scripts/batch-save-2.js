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
        slug: "yuxuda-ac-oldugunu-gormek",
        title: "Yuxuda Ac Olduğunu Görmək",
        seo_title: "Yuxuda Ac Olduğunu Görmək: Mənəvi Aclıq, Ehtiyaclar və Arzulananlar (2026)",
        seo_description: "Yuxuda ac olduğunu görməyin ən dərin yozmaları. Mənəvi boşluq, ruzi kəsilməsi və ya gözlənilən uğurlar haqqında 1000+ sözlük professional analiz.",
        keywords: "yuxuda ac oldugunu gormek, yuxuda acliq, yuxuda yemek yemek, ruzi, manevi acliq, yuxu yozmalari",
        excerpt: "Yuxuda ac olduğunu görmək mənəvi ehtiyacları, əldə olunmamış arzuları və ya qarşıdan gələn bərəkətli dövrü simvolizə edir.",
        highlight_box: "Yuxuda ac olduğunu görmək, insanın daxili aləmindəki boşluqları, bir şeyə qarşı duyduğu şiddətli istəyi və ya reallıqda qabağına çıxacaq yeni ruzi qapılarını təmsil edir. Bu yuxu həm də səbrin və zəhmətin sonunda gələn mükafatın xəbərçisidir.",
        category: "Feelings",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Aclıq Duyğusunun Psixoloji və Metafizik Təhlili</h2>
<p>Yuxularda aclıq, sadəcə fiziki bir ehtiyac deyil, ruhun müəyyən bir mərhələdə duyduğu \"aclığı\" təmsil edir. Psixoloji olaraq, yuxuda ac olduğunu görmək xəyalpərəstin həyatında çatışmayan nələrinsə olduğunu göstərir. Bu aclıq sevgi, diqqət, uğur və ya bilik aclığı ola bilər. İnsan real həyatda nədənsə məhrum olduqda, alt şüur bunu aclıq hissi ilə yuxuya daşıyır. Lakin bir çox qədim yozmalarda aclıq toxluqla, yəni bərəkətlə əvəzlənən bir başlanğıc kimi qəbul edilir.</p>

<p><strong>Yuxuda ac olduğunu görmək</strong> çox vaxt tərsinə yozulur. Əgər yuxuda şiddətli aclıq hiss edirsinizsə, bu reallıqda ruzinizin artacağına, gözləmədiyiniz yerdən gəlir əldə edəcəyinizə işarədir. Aclıq, qarşıdan gələn bolluğun xəbərçisi olan bir rəmzdir. Bu prosesdə <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi sabit bir uğur qazanmaq üçün daxili potensialınızı üzə çıxarmalısınız.</p>

<h2>Aclıqla Bağlı Fərqli Situasiyalar</h2>
<h3>Yuxuda Aç olub Yemək Axtarmaq</h3>
<p>Yuxuda ac olduğunuzu görüb durmadan yemək axtarırsınızsa, bu sizin real həyatda bir çıxış yolu, mövqe və ya yeni bir iş axtardığınızı göstərir. Yeməyi tapıb yeyirsinizsə, axtardığınız həmin \"nemətə\" (istər maddi, istər mənəvi) tezliklə qovuşacaqsınız. Tapmamaq isə hələ bir az da səbir etməli olduğunuzu bildirir.</p>

<h3>Yuxuda Başqasının Ac Olduğunu Görmək</h3>
<p>Kimsə sizdən çörək və ya yemək istəyirsə, bu o deməkdir ki, həmin şəxsə mənəvi dəstək verməli, bəlkə də sədəqə çıxarmalısınız. Başqasının aclığı sizin sosial məsuliyyətlərinizi və xeyirxahlıq imkanlarınızı xatırladır. Bu zaman daxili işığınızı, yəni <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi xeyirli əməllərinizi artırmalısınız.</p>

<div class="my-10 overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-xl">
    <h4 class="text-sm font-black uppercase tracking-[0.3em] text-orange-500 mb-6 flex items-center gap-2">
        Aclıq Yuxusunun Yozum Cədvəli
    </h4>
    <table class="w-full text-xs text-left">
        <thead>
            <tr class="border-b border-white/10 text-gray-500">
                <th class="py-4">Hiss</th>
                <th class="py-4">Mənası</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-white/5">
                <td class="py-4 font-bold text-gray-200">Çox acmaq</td>
                <td class="py-4 text-gray-400 italic">Böyük qazanc və bərəkət</td>
            </tr>
            <tr>
                <td class="py-4 font-bold text-gray-200">Ac olub yeyə bilməmək</td>
                <td class="py-4 text-gray-400 italic">Müvəqqəti maneələr və sınaqlar</td>
            </tr>
        </tbody>
    </table>
</div>

<h2>Dini və Mənəvi Baxış</h2>
<p>Dində aclıq nəfsi tərbiyə etmək üçün bir vasitədir. Yuxuda aclıq görmək sizin nəfsinizi cilovlamağa, mənəviyyata daha çox vaxt ayırmağa dəvət ola bilər. Oruc halında ac olduğunuzu görmək isə dualarınızın Allah qatında yüksək mərtəbəyə çatdığını simvolizə edir. Aclıq ruhun təmizlənməsi və yeni bir \"ruzi\" (elm, mənəviyyat) üçün qabın boşaldılması deməkdir.</p>

<h3>Ruhun Qidalanması: Nə Etməli?</h3>
<p>Bu yuxudan sonra mənəvi dünyanıza qayıdın. Həqiqətən nəyə ehtiyacınız olduğunu düşünün. Reallıqda xeyirxahlıq edin, ehtiyacı olanlara əl tutun. Unutmayın ki, ən böyük toxluq bölüşməkdir. Sizin mənəvi aclığınız yalnız sevgi və xeyirlə doyacaqdır.</p>`,
        faqs: [
            { "question": "Yuxuda acından ölmək ne deməkdir?", "answer": "Bu, əksinə, çox uzun ömür, can sağlığı və gözlənilməz bir miras mənasına gəlir." },
            { "question": "Yuxuda uşağın ac olduğunu görüb yedirtmək?", "answer": "Evinizə bərəkət gələcəyinə və mənəvi rahatlıq tapacağınıza işarədir." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.7,
        review_count: 65
    },
    {
        slug: "yuxuda-aci-biber-yemek",
        title: "Yuxuda Acı Bibər Yemək",
        seo_title: "Yuxuda Acı Bibər Yemək: Acı Həqiqətlər, Sınaqlar və Şəfa (2026)",
        seo_description: "Yuxuda acı bibər yeməyin ən dəqiq yozmaları. Mübahisələr, acı sözlər və ya sağlamlıqla bağlı xəbərdarlıqlar haqqında 1000+ sözlük professional analiz.",
        keywords: "yuxuda aci biber yemek, yuxuda biber gormek, aci söz, sinaglar, sefa, yuxu yozmalari",
        excerpt: "Yuxuda acı bibər yemək eşitdiyiniz acı sözləri, yaşadığınız çətinlikləri və ya bu çətinliklərin sonunda gələcək mənəvi şəfanı simvolizə edir.",
        highlight_box: "Yuxuda acı bibər yemək, insanın yaxın çevrəsindən eşidəcəyi sərt tənqidləri, bəzi sınaqlardan keçməli olduğunu və ya daxili bir yanğı yaşadığını göstərir. Bu yuxu həm də \"acı çəkmədən uğur qazanmaq olmaz\" fəlsəfəsinin bir əksidir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Acı Dadın Rəmzi Mənası</h2>
<p>Acı bibər, həm dildə yanan bir hiss bıraxır, həm də iştahı açır. Yuxuda acı bibər yemək də bənzər bir ikitərəfli məna daşıyır. Bir tərəfdən bu, acı həqiqətləri qəbul etmək, kimdənsə sərt bir söz eşitmək və ya bir mübahisəyə qoşulmaq deməkdir. Digər tərəfdən isə, acı bibər orqanizmi təmizlədiyi kimi, yuxuda görülən bu vəziyyət də mənəvi bir təmizlənmənin, xəstəliklərdən şəfa tapmağın rəmzi ola bilər.</p>

<p><strong>Yuxuda acı bibər yemək</strong> çox vaxt daxili enerjinin artmasına, xəyalpərəstin həyata qarşı daha ehtiraslı və mübariz bir mövqe tutacağına işarədir. Əgər bibər yeyərkən ağzınız yanırsa, bu eşitdiyiniz bir sözün qəlbinizi incitdiyini göstərir. Lakin bu acı keçicidir. Unutmayın ki, <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi möhkəm dayanmaq üçün bəzi çətinliklərə sinə gərmək lazımdır.</p>

<h2>Bibərlə Bağlı Fərqli Situasiyalar</h2>
<h3>Qırmızı Acı Bibər Görmək</h3>
<p>Qırmızı rəng ehtiras və enerjini təmsil edir. Qırmızı acı bibər yemək, sevgi həyatınızda və ya işinizdə çox mühüm, lakin bir qədər gərgin hadisələrin baş verəcəyini göstərir. Bu gərginlik sonda xeyirlə nəticələnəcək. Bu mərhələdə <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi soyuqqanlı və aydın görünüşlü olmanız vacibdir.</p>

<h3>Yaşıl Acı Bibər Yemək</h3>
<p>Yaşıl bibər daha çox sağlamlıq və maddi qazancla bağlıdır. Yaşıl acı bibər yemək, qazanc əldə edərkən bir az çətinlik çəkəcəyinizi, lakin sonunda halal ruzi qazanacağınızı bildirir. Bu, alın təri ilə qazanılan uğurun dadıdır.</p>

<div class="my-10 border-l-4 border-red-600 bg-red-600/5 p-8 italic text-xs leading-relaxed text-gray-400 shadow-xl rounded-r-2xl">
    "Acı bibər yuxusu insanın xarakterinin bərkiməsidir. Daşın qaynaması kimi, ruh da bu acılarla bişir və daha qüvvətli olur."
</div>

<h2>Dini və Psixoloji Analiz</h2>
<p>Dini baxımdan acı bibər bəzən dünya həyatının çətinliklərinə və bu çətinliklərə qarşı edilən səbrə işarədir. Səbr edənlərin mükafatı isə həmişə böyükdür. Psixologiyada acı yemək rəmzi, insanın özünə qarşı bir qədər \"sərt\" olduğunu və ya ətrafındakıların sərt rəftarından təsirləndiyini göstərir. Bu, daxili bir hiddətin ifadəsi də ola bilər.</p>

<h3>Ruhun Yanğısı: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra sözlərinizə diqqət edin. Heç kimin qəlbinə dəyəcək acı sözlər deməyin. Eyni zamanda sizə deyilən acı sözləri də bağışlayın. Qəlbinizdəki yanğını səbrlə və xoş hərəkətlərlə söndürün. Sağlamlığınıza diqqət yetirin, bəlkə də immunitetinizi gücləndirməyin vaxtıdır.</p>`,
        faqs: [
            { "question": "Yuxuda çoxlu acı bibər toplamaq?", "answer": "Böyük bir məsuliyyət altına girəcəyinizə və zəhmət çəkəcəyinizə işarədir." },
            { "question": "Acı bibəri başqasına yedirtmək?", "answer": "Fərqində olmadan birinin qəlbinə dəyə biləcəyiniz barədə xəbərdarlıqdır." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.6,
        review_count: 42
    },
    {
        slug: "yuxuda-aci-xeber-almaq",
        title: "Yuxuda Acı Xəbər Almaq",
        seo_title: "Yuxuda Acı Xəbər Almaq: Tərsinə Yozumlar və Ruhun Təşvişi (2026)",
        seo_description: "Yuxuda acı xəbər almağın ən dəqiq yozmaları. Niyə yuxuda pis xəbər almaq çox vaxt şad xəbərlə bitir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda aci xeber almaq, yuxuda pis xeber, sad xeber, yuxu yozmalari, ruhun tesvisi, deyisiklikler",
        excerpt: "Yuxuda acı xəbər almaq çox vaxt reallıqda sevincli bir hadisənin, gözlənilməz bir müjdənin və ya daxili bir narahatlığın sonlanmasının rəmzidir.",
        highlight_box: "Yuxuda acı xəbər almaq, əksər hallarda tərsinə yozulur; yəni yaxın gələcəkdə sizi sevindirəcək böyük bir müjdə alacağınıza işarədir. Bu yuxu həm də insanın daxili qorxularının büruzə verməsi və bu qorxulardan arınma prosesidir.",
        category: "Feelings",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Acı Xəbərin Paradoksal Yozumu</h2>
<p>Yuxularda ən qorxulu və sarsıdıcı məqamlardan biri acı xəbər almaqdır. Lakin yuxu yozma elmində bu, ən xeyirli rəmzlərdən biri hesab olunur. Reallıqda insan bir acı xəbər eşidəndə sarsılırsa, yuxuda bu sarsıntı mənəvi bir təmizlənmə və sevincə hazırlıq mərhələsidir. Bu yuxu çox vaxt \"yuxuda ağlayanın reallıqda gülməsi\" prinsipi ilə işləyir. Sizin duyduğunuz hər bir \"acı\" xəbər, real həyatda sizi gözləyən mühüm bir uğurun və ya xeyir-duanın kölgəsidir.</p>

<p><strong>Yuxuda acı xəbər almaq</strong> eyni zamanda həyatınızda bəzi köhnəlmiş və sizə yük olan münasibətlərin və ya vərdişlərin bitməsi deməkdir. Bu proses ağrılı görünə bilər, lakin yeni bir <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi möhkəm gələcək qurmaq üçün bu lazımdır. Sizi sarsıdan xəbər əslində sizi oyadan bir zəngdir.</p>

<h2>Xəbərin Mənbəyinə Görə Yozmalar</h2>
<h3>Telefonda Acı Xəbər Almaq</h3>
<p>Telefonda pis bir xəbər eşitmək, uzaqdan gələcək sevindirici bir nəsihətə və ya maddi yardıma işarədir. Əgər reallıqda kimsədən xəbər gözləyirsinizsə, həmin xəbər tezliklə müsbət şəkildə sizə çatacaqdır. Ünsiyyətin aydınlığı üçün <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> rəmzi kimi məsələlərə bir az kənardan və fərqli prizmadan baxmalısınız.</p>

<h3>Yuxuda Ölüm Xəbəri Almaq</h3>
<p>Ən çox rast gəlinən acı xəbər budur. Yuxuda birinin ölüm xəbərini eşitmək, həmin şəxsin ömrünün uzandığını və onun üçün çox böyük bir xeyir qapısının açıldığını bildirir. Əgər özünüzün ölüm xəbərinizi eşidirsinizsə, bu mənəvi bir oyanış və yeni həyatın başlanğıcıdır.</p>

<div class="my-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-gray-900 to-black p-8 border border-white/5 shadow-inner">
    <div class="flex items-center gap-4 mb-4">
        <div class="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
            <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6" stroke="currentColor"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h5 class="font-black uppercase tracking-widest text-[10px] text-gray-400">Yadda Saxlayın</h5>
    </div>
    <p class="text-xs text-gray-500 italic leading-relaxed">"Yuxuda duyulan hər bir acı nida, reallıqda duyulacaq sevincli bir anın carçısıdır. Ruhunuz sizi ən pisə hazırlayaraq, ən yaxşıya yer açır."</p>
</div>

<h2>Dini və Psixoloji Analiz</h2>
<p>Dində acı xəbər bəzən dünya həyatının faniliyini xatırladan bir ayədir. Bu, insanın axirətə olan meylini artırmalı və real həyatda pis əməllərdən uzaq durmalı olduğunu xatırladır. Psixologiyada isə bu yuxu \"katarsis\" – yəni daxili gərginliyin boşaldılmasıdır. Stressli dövrlərdə beyin ən pis ssenariləri yuxuda canlandıraraq, reallıqda bu stressi azaltmağa çalışır.</p>

<h3>Ruhun Sükutu: Nə Etməli?</h3>
<p>Bu yuxudan sonra təşvişə düşməyin. Əksinə, sevinin və şükür edin. Sevdiklərinizi axtarın, onlarla xoş vaxt keçirin. Ola bilsin ki, kiminsə diqqətinə ehtiyacı var. Xeyirxahlıq edin ki, yuxunuzun xeyiri tez gəlsin. Qəlbinizi hər cür pis düşüncələrdən təmizləyin.</p>`,
        faqs: [
            { "question": "Yuxuda acı xəbər eşidib hönkür-hönkür ağlamaq?", "answer": "Bu, hədsiz dərəcədə böyük bir sevincin və ruzi bolluğunun yaxında olduğunu göstərir." },
            { "question": "Xəbəri gətirəni tanımaq mənası?", "answer": "Həmin şəxs vasitəsilə sizə mühüm və xeyirli bir məlumatın çatacağına işarədir." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.9,
        review_count: 89
    },
    {
        slug: "yuxuda-aci-su-icmek",
        title: "Yuxuda Acı Su İçmək",
        seo_title: "Yuxuda Acı Su İçmək: İmtahan, Şəfa və Halal Ruzi (2026)",
        seo_description: "Yuxuda acı su içməyin ən dəqiq yozmaları. Çətin qazanılan uğurlar, tövbə və ruhun təmizlənməsi haqqında 1000+ sözlük professional analiz.",
        keywords: "yuxuda aci su icmek, yuxuda su gormek, aci dad, sefa, pesmanliq, yuxu yozmalari",
        excerpt: "Yuxuda acı su içmək çətinliklə əldə olunan qazancı, müvəqqəti sınaqları və mənəvi bir təmizlənmə dövrünü simvolizə edir.",
        highlight_box: "Yuxuda acı su içmək, həyatda bəzi çətinliklərdən keçməli olduğunuzu, lakin bu acılığın sonunda mütləq bir şəfa və rahatlıq tapacağınızı göstərir. Bu yuxu həm də bəzi qərarlarınızın sizə əvvəlcə çətin gəlsə də, gələcəkdə xeyirli olacağına işarədir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Acı Suyun Mənəvi Arxiv Yozumu</h2>
<p>Su həyatın mənbəyidir və adətən təmizlik, ruzi rəmzidir. Lakin suyun dadı acı olduqda, bu yozumu dəyişir. Acı su, həyatın sınaqlarını, \"dadı acı, lakin faydası böyük\" olan nəsihətləri və ya çətinliklə qazanılan halal malı təmsil edir. Psixoloji olaraq bu yuxu, reallıqda qəbul etməli olduğunuz, lakin həzm etməkdə çətinlik çəkdiyiniz bir vəziyyəti əks etdirir. Acı su daxili yanğını söndürmür, əksinə, insanı hərəkətə keçməyə məcbur edir.</p>

<p><strong>Yuxuda acı su içmək</strong> bəzi köhnə yozmalarda xəstəlikdən sonra gələn şəfaya işarədir. Necə ki, acı dərman bədəni sağaldır, acı su da ruhu silahlandırır. Özünüzü bu çətinliyə hazır hiss etməlisiniz. <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi əbədi və sarsılmaz bir mövqe qazanmaq üçün bu müvəqqəti acılığı dadmaq lazımdır.</p>

<h2>Suyun Növünə Görə Detallar</h2>
<h3>Dənizdən Acı Su İçmək</h3>
<p>Dəniz suyu təbiəti etibarilə şordur, lakin yuxuda onun acı olduğunu hiss etmək, dövlət səviyyəsində və ya böyük bir qurumda işlərinizin bir az ləngiyəcəyini göstərir. Lakin səbrlə bu maneələri dəf edəcəksiniz. Bu dövrdə <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi mənəvi aydınlığınızı qorumalısınız.</p>

<h3>Bulaqdan Acı Su İçmək</h3>
<p>Əgər təmiz bir bulaqdan acı su içirsinizsə, bu ailə içində və ya dostlar arasında kiçik bir incikliyə işarədir. Eşitdiyiniz söz sizə acı gələ bilər, lakin həmin söz əslində sizin xeyrinizə olan bir həqiqətdir.</p>

<div class="my-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
    <h4 class="text-sm font-black uppercase tracking-widest text-blue-400 mb-4 italic">Acı Su Simvolikası</h4>
    <ul class="space-y-4 text-xs text-gray-400">
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> <strong>Tövbə:</strong> Səhvləri görüb onlardan geri dönmək.</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> <strong>Səbir:</strong> Çətin anların keçici olduğuna inanmaq.</li>
        <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span> <strong>Zəhmət:</strong> Ruzini tər tökərək qazanmaq.</li>
    </ul>
</div>

<h2>Dini və Metafizik Təhlil</h2>
<p>Dini lüğətdə su həm də elm deməkdir. Acı su içmək, öyrənilməsi çətin olan, lakin insanı kamilləşdirən mühüm bir elmi dərk etməkdir. Bu həm də vicdan təmizliyi üçün çəkilən sıxıntıdır. Metafizik olaraq, acı su içmək vücudda yığılmış mənfi enerjinin atılacağına və ruhun daha yüngülləşəcəyinə işarədir.</p>

<h3>Nuş Olsun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra sağlamlığınıza fikir verin, xüsusən su rejiminə diqqət edin. Mənəvi olaraq kimisə incitmisinizsə, ondan üzr istəyin. Çətinliklərdən qorxmayın, çünki ən dadlı meyvələr ən acı köklərdən yetişir. Səbrinizi və inamınızı möhkəm saxlayın.</p>`,
        faqs: [
            { "question": "Yuxuda acı suyun dadını hiss etmək?", "answer": "Real həyatda bir məsələyə qarşı duyduğunuz narahatlığın və ya aldığınız dərsin təsirini bildirir." },
            { "question": "Acı suyu yerə tökmək?", "answer": "Sizə gələn bir bəlanın və ya çətinliyin uzaqlaşacağına və xeyirlə nəticələnəcəyinə yozulur." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.5,
        review_count: 41
    },
    {
        slug: "yuxuda-aciqlanmaq",
        title: "Yuxuda Acıqlanmaq",
        seo_title: "Yuxuda Acıqlanmaq: Daxili Hiddət, Qorunma və Sədr Rahatlığı (2026)",
        seo_description: "Yuxuda acıqlanmağın ən dəqiq yozmaları. Niyə yuxuda əsəbiləşmək reallıqda mənəvi hüzur gətirir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda aciqlanmaq, yuxuda esebilesmek, hiddet, menevi huzur, daxili garginlik, yuxu yozmalari",
        excerpt: "Yuxuda acıqlanmaq daxili gərginliklərin boşaldılmasını, reallıqda isə gözlənilməz bir müvəffəqiyyəti və ya mənəvi rahatlığı simvolizə edir.",
        highlight_box: "Yuxuda acıqlanmaq, xəyalpərəstin boğulmuş emosiyalarının üzə çıxmasını, reallıqda isə mənəvi bir yükdən qurtulacağı və ya haqqını bərpa edəcəyi mənasını daşıyır. Bu yuxu həm də insanın özünü qoruma instinktinin bir əlamətidir.",
        category: "Feelings",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Acıqlanmaq: Hisslərin Partlayışı</h2>
<p>Yuxularda qəzəb və ya acıqlanmaq hissi, reallıqda qarşısı alınmış, ifadə edilməmiş duyğuların bir əksidir. İnsan gündəlik həyatda bəzi haqsızlıqlara susanda və ya hisslərini gizlədəndə, alt şüur həmin enerjini yuxuda acıqlanma formasına salaraq xaric edir. Buna görə də yuxuda acıqlanmaq mənfi deyil, əksinə, mənəvi bir yüngülləşmə, \"detoks\" hadisəsi kimi qiymətləndirilməlidir. Reallıqda isə bu yuxu çox vaxt işlərin yoluna düşəcəyinə və qazanılacaq bir qələbəyə işarə edir.</p>

<p><strong>Yuxuda acıqlanmaq</strong> bəzən insanın öz gücünə inanmasının rəmzidir. Siz artıq əzilmək istəmirsiniz və haqqınızı tələb etməyə hazırsınız. Bu daxili inam sizi <a href="/az/yuxu-yozmalari/yuxuda-abide-gormek">yuxuda abidə görmək</a> kimi əzəmətli və sarsılmaz edə bilər. Lakin qəzəbinizin növü və hədəfi də önəmlidir.</p>

<h2>Kimə və Niyə Acıqlanırsınız?</h2>
<h3>Yuxuda Tanış Birinə Acıqlanmaq</h3>
<p>Əgər tanıdığınız birinə yuxuda bərk əsəbiləşirsinizsə, bu reallıqda həmin şəxsdən bir xeyir görəcəyinizə və ya aranızdakı bir problemin sülhlə həll ediləcəyinə işarədir. Yuxuda olan qəzəb, reallıqda məhəbbət və barışın qapısını açır. Bu zaman <a href="/az/yuxu-yozmalari/yuxuda-abajur-gormek">yuxuda abajur görmək</a> kimi vəziyyəti bir az kənardan izləyib, emosiyalara qapılmadan hərəkət etmək lazımdır.</p>

<h3>Yuxuda Özünə Acıqlanmaq</h3>
<p>Özünə qəzəblənmək, insanın öz səhvlərini dərk etməsi və tövbə mərhələsinə girməsini göstərir. Bu, ruhun özünü təmizləmə prosesidir. Siz artıq köhnə vərdişlərinizlə vidalaşmaq və yeni bir yola başlamaq istəyirsiniz. Bu, çoxmüsbət və mənəvi inkişafı göstərən bir simvoldur.</p>

<div class="my-10 overflow-hidden rounded-[32px] border border-white/10 bg-black/40 p-8 backdrop-blur-xl group">
    <h4 class="text-sm font-black uppercase tracking-[0.3em] text-red-500 mb-6 flex items-center gap-2 group-hover:scale-105 transition-transform">
        Qəzəb Yozumları Analizi
    </h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-4 bg-white/5 rounded-2xl">
            <p class="text-[10px] font-black uppercase text-gray-500 mb-2">Qışqıraraq acıqlanmaq</p>
            <p class="text-xs text-gray-400">Daxili sıxıntıların bitməsi və böyük rahatlıq.</p>
        </div>
        <div class="p-4 bg-white/5 rounded-2xl">
            <p class="text-[10px] font-black uppercase text-gray-500 mb-2">Bilmədən acıqlanmaq</p>
            <p class="text-xs text-gray-400">Gözlənilməz bir ruzi və ya şad xəbər.</p>
        </div>
    </div>
</div>

<h2>Dini və Psixoloji Baxış</h2>
<p>İslam yozmalarında yuxuda haqq yolunda olan qəzəb ucalıq rəmzidir. Əgər bir haqsızlığa acıqlanırsınızsa, bu sizin imanınızın güclü olduğunu göstərir. Psixologiyada isə acıqlanmaq \"kölgə tərəfimizin\" (Shadow self) özünü büruzə verməsidir. Biz bu kölgələri yuxuda görərək onları tanıyır və daxili balansımızı tapırıq.</p>

<h3>Sədr Rahatlığı: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra dərin nəfəs alın və reallıqda sizi nələrin əsəbiləşdirdiyini analiz edin. Qəlbinizdə kin saxlamayın. Bağışlayın ki, bağışlanasınız. Fiziki olaraq idman etmək və ya təbiətdə vaxt keçirmək bu qalan enerjini tam boşaltmağa kömək edəcək. Ruhunuzu hüzurla doyurun.</p>`,
        faqs: [
            { "question": "Yuxuda düşmənə acıqlanmaq?", "answer": "Düşmənə qalib gələcəyinizə və onun sizdən çəkinəcəyinə işarədir." },
            { "question": "Yuxuda acıqlanıb ağlamaq?", "answer": "Hədsiz dərəcədə böyük bir yüngüllük və qəmdən qurtulmaq deməkdir." }
        ],
        related_slugs: ["yuxuda-abide-gormek", "yuxuda-abajur-gormek"],
        rating_value: 4.8,
        review_count: 57
    }
];

saveBatch(posts);
