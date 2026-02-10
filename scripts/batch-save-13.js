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
        slug: "yuxuda-aerozoldan-istifade-etmek",
        title: "Yuxuda Aerozoldan İstifadə Etmək",
        seo_title: "Yuxuda Aerozoldan İstifadə Etmək: Təmizlik, Maskalanma və Sağlamlıq (2026)",
        seo_description: "Yuxuda aerozol (sprey) istifadə etməyin ən dəqiq yozmaları. Niyə sprey istifadə etmək yuxuda bir həqiqəti gizlətmək və ya şəfa tapmaqdır? 1000+ sözlük professional analiz.",
        keywords: "yuxuda aerozol, sprey gormek, təmizlik, xəstəlik, şəfa, yuxu yozmalari, maskalanma",
        excerpt: "Yuxuda aerozoldan istifadə etmək xəyalpərəstin həyatında b bəzi qüsurları gizlətməyə çalışmasını, sağlamlığına diqqət etməli olduğunu və ya daxili bir təmizlik apardığını simvolizə edir.",
        highlight_box: "Yuxuda aerozoldan istifadə etmək, insanın bəzi problemləri səthi şəkildə həll etməyə çalışdığını, daxili deyil, zahiri görünüşə daha çox fokuslandığını və yaxın zamanda gələcək müvəqqəti bir rahatlığın xəbərçisidir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Spreyin Kimyəvi və Ruhani Analizi</h2>
<p>Aerozol və ya sprey, bir maddənin havaya sürətlə yayılmasını təmin edən bir vasitədir. Yuxuda ondan istifadə etmək, insanın öz fikirlərini və ya təsirini ətrafına sürətlə yaymaq istəyini təmsil edir. Psixoloji olaraq bu yuxu, insanın bəzi neqativləri (məsələn, pis qoxunu gizlədən odekolon spreyi kimi) ört-basdır etməyə çalışmasını əks etdirir. Siz bəlkə də həyatınızda bir şeyi 'daha gözəl' göstərmək üçün süni vasitələrdən istifadə edirsiniz. Aerozol həm də təmizlik rəmzidir; bədəni və ya məkanı təmizləmək daxili bir arınma ehtiyacından xəbər verir.</p>

<p>Yuxuda aerozoldan istifadə etmək çox vaxt müvəqqəti bir həll yoluna, qısa müddətli bir sevincə və ya rəsmi bir işdə 'makiyaj' (düzəliş) ediləcəyinə işarədir. Lakin unutmayın ki, əsl təmizlik kökdən olmalıdır. Bu yuxu sizi məsələlərin daxilinə enməyə çağırır. Sizin səmimiyyətiniz hər cür spreydən daha qalıcı bir qoxu (təsir) buraxır.</p>

<h2>Spreyin Növünə Görə Yozmalar</h2>
<p>Nə məqsədlə sprey istifadə etməyiniz yozumu dəyişir:</p>

<table>
  <thead>
    <tr>
      <th>Spreyin Növü</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xoş Qoxulu Sprey (Parfüm)</td>
      <td>Hörmət və Nüfuz Artımı</td>
      <td>Yeni Tanışlıqlar</td>
    </tr>
    <tr>
      <td>Dərman Spreyi (Boğaz spreyi və s.)</td>
      <td>Şəfa və Sağlamlıq</td>
      <td>Xəstəliklərin Bitməsi</td>
    </tr>
    <tr>
      <td>Həşərat Spreyi</td>
      <td>Düşmənləri Dəf Etmək</td>
      <td>Problemlərin Həlli</td>
    </tr>
    <tr>
      <td>Rəng Spreyi (Boyamaq üçün)</td>
      <td>Yaradıcılıq / Gizlətmə</td>
      <td>Yeni Bir İmic</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Başqasının Üzünə Sprey Sıxmaq</h3>
<p>Əgər kimsəyə nəsə sıxırsınızsa, bu sizin həmin şəxsi mənfi bir fikirdən qorumağa çalışdığınızı və ya ona öz təsirinizi qəbul etdirmək istədiyinizi bildirir. Ünsiyyətdə daha səmimi olun və başqalarının şəxsi sahəsinə hörmət edin.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda gözəl qoxular mələklərin və xeyir əməllərin rəmzidir. Aerozolla ətrafı gözəlləşdirmək, insanın mənəvi atmosferini təmizləməyə çalışması kimi görülür. Dinimizdə təmizlik imandandır və gözəl qoxu sünnədir. Bu yuxu sizə xatırladır ki, əməl dəftərinizi gözəl qoxulu (halal) işlərlə doldurmalısınız. Lakin spreyin dumanı müvəqqəti olduğu kimi, dünya işlərinin də keçici olduğunu unutmamaq lazımdır. Sizin daimi ətriniz sizin əxlaqınızdır.</p>

<h3>Şəffaflaşın: Nə Etməli?</h3>
<p>Bu yuxu sizə problemləri 'gizlətmək' yox, 'həll etmək' vaxtı olduğunu deyir. Özünüzü başqalarına olduğu kimi göstərin. Sağlamlığınıza, xüsusən tənəffüs yollarınıza diqqət edin. Ətrafınızdakı mənfi insanlardan və ya mühitlərdən uzaqlaşın (həşərat spreyi kimi). Unutmayın ki, həqiqətin özü bütün süni vasitələrdən daha parlaqdır. Sizin parlaqlığınız sizin daxili dürüstlüyünüzdədir. Sədaqətlə və təmiz qəlblə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda aerozolun bitdiyini görmək?", "answer": "Real həyatda bir məsələdə imkanlarınızın tükəndiyini və yeni üsullar axtarmalı olduğunuzu bildirir." },
            { "question": "Gözlərə sprey sıçraması?", "answer": "Bəzi həqiqətləri görməkdə çətinlik çəkəcəyinizə və ya yanlış bir qərar verəcəyinizə yozulur." }
        ],
        related_slugs: ["yuxuda-aci-su-icmek", "yuxuda-adam-gormek-yad"],
        rating_value: 4.4,
        review_count: 22
    },
    {
        slug: "yuxuda-afisa-gormek",
        title: "Yuxuda Afişa Görmək",
        seo_title: "Yuxuda Afişa (Poster) Görmək: Elanlar, Şöhrət və Gözlənilməz Xəbərlər (2026)",
        seo_description: "Yuxuda bir afişa və ya reklam posteri görməyin ən dəqiq yozmaları. Niyə afişa yuxuda şöhrət, tanınma və ya mühüm bir dəvətdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda afisa gormek, poster, reklam, elan, sohret, xəbər, yuxu yozmalari, diqqət mərkəzi",
        excerpt: "Yuxuda afişa görmək xəyalpərəstin həyatında mühüm bir hadisənin 'elan' ediləcəyinə, diqqət mərkəzində olacağına və ya böyük bir fürsətlə qarşılaşacağına işarədir.",
        highlight_box: "Yuxuda afişa görmək, insanın daxili aləmindəki bir arzunun 'vizuallaşması', bir məlumatın ona çatdırılması və yaxın zamanda həyatındakı mühüm bir dəyişikliyin hər kəs tərəfindən bilinəcəyini göstərən parlaq bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Mesajın Vizuallığı və Ruhani Analizi</h2>
<p>Afişa, məlumatın kütləvi şəkildə çatdırılması üçün bir vasitədir. Yuxuda rəngli və böyük bir afişa görmək, insanın özünü ifadə etmək və ya bir həqiqəti hər kəsə duyurmaq istəyini təmsil edir. Psixoloji olaraq bu yuxu, insanın 'diqqət' çəkmək ehtiyacını və ya bir hadisə haqqında öncədən xəbərdar olmasını əks etdirir. Siz bəlkə də bir imtahan nəticəsini, bir toyu və ya bir konserti gözləyirsiniz. Afişa həm də bir 'vəd' rəmzidir; taleyin sizə göstərdiyi bir rəsm kimidir. Afişanın üzərindəki şəkillər və yazılar sizin gələcəyiniz haqqında kodlaşdırılmış ipuclarıdır.</p>

<p>Yuxuda afişa görmək çox vaxt sevincli bir dəvət alacağınıza, yeni bir iş təklifinə və ya adınızın yaxşı mənada hallanacağına işarədir. Siz artıq kölgədə deyilsiniz, işığa doğru irəliləyirsiniz. Bu prosesdə dürüstlük sizin ən gözəl reklamınızdır. Afişanın parlaqlığı gələn sevinci dəqiqləşdirir.</p>

<h2>Afişanın Məzmununa Görə Yozmalar</h2>
<p>Afişada nə təsvir olunması yozumu tamamilə dəyişir:</p>

<table>
  <thead>
    <tr>
      <th>Afişadakı Təsvir</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Öz Şəklini Görmək</td>
      <td>Şöhrət və Müvəffəqiyyət</td>
      <td>Nüfuzun Artması</td>
    </tr>
    <tr>
      <td>Konsert / Bayram Afişası</td>
      <td>Sevinc və Əyləncə</td>
      <td>Mənəvi İstirahət</td>
    </tr>
    <tr>
      <td>Qara-Ağ və Sadə Afişa</td>
      <td>Ciddi Bir Xəbər / Rəsmiyyət</td>
      <td>Mühüm Bir Sənəd İşinin Həlli</td>
    </tr>
    <tr>
      <td>Yırtıq və ya Köhnə Afişa</td>
      <td>Keçmiş Bir Ümidin Bitməsi</td>
      <td>Yeni Başlanğıc Hazırlığı</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Afişa Yapışdırmaq</h3>
<p>Əgər özünüz afişa yapışdırırsınızsa, bu sizin bir fikrinizi və ya işinizi başqalarına qəbul etdirmək üçün böyük səy göstərəcəyinizi bildirir. Əməyiniz hədər getməyəcək, səs-küyünüz hər tərəfə yayılacaqdır. Səmimiyyət sizin ən böyük 'kleyinizdir'.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda görüntülər və elanlar insanın qəlbinə gələn 'ilham' kimi də yozulur. Afişa, Allahın sizin üçün hazırladığı bəzi xeyirli hadisələrin 'ön nümayişi' kimidir. Dinimizdə dürüstlüklə edilən hər bir iş insanın daxili gözəlliyini kənara 'afişa' kimi əks etdirir. Bu yuxu sizə xatırladır ki, əsl şöhrət yer üzündə deyil, səma əhli (mələklər) yanındakı şöhrətdir. Sizin yaxşı əməlləriniz sizin mənəvi afişalarınızdır. Səmimiyyət sizin ən parlaq boyanızdır.</p>

<h3>Diqqəti Cəlb Edin: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra özünüzə inanın və hədəflərinizi hər kəsə bəyan etməkdən qorxmayın. Yeni bir layihəniz varsa, onu təqdim edin. Sosial çevrənizdə daha aktiv olun. Lakin israfdan və təkəbbürdən uzaq durun. Unutmayın ki, ən gözəl reklam insanın təvazökarlığıdır. Sizin vizyonunuz artıq reallaşmağa başlayır, sadəcə doğru zamanda doğru yerdə olun. Sizin uğurunuz artıq 'divarlara yazılıb'. Paylaşdıqca çoxalın.</p>`,
        faqs: [
            { "question": "Yuxuda afişanı oxuya bilməmək?", "answer": "Real həyatda bəzi xəbərlərin hələ tam aydınlaşmadığına və səbr etməli olduğunuzu bildirir." },
            { "question": "Afişanın yandığını görmək?", "answer": "Bəzi planlarınızın gözlənilmədən dəyişəcəyinə yozulur." }
        ],
        related_slugs: ["yuxuda-admin-gormek", "yuxuda-afisanin-qopmasi"],
        rating_value: 4.6,
        review_count: 33
    },
    {
        slug: "yuxuda-afisanin-qopmasi",
        title: "Yuxuda Afişanın Qopması",
        seo_title: "Yuxuda Afişanın Divardan Qopması: Bitən Ümidlər və Yeni Gerçəkliklər (2026)",
        seo_description: "Yuxuda bir reklam posterinin və ya afişanın qopub düşməyinin ən dəqiq yozmaları. Niyə afişanın qopması yuxuda bir maskanın düşməsi və ya dəyişiklikdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda afisanin qopmasi, poster dusmesi, biten umid, heqiqet, yuxu yozmalari, heyat deyisikliyi",
        excerpt: "Yuxuda afişanın qopması xəyalpərəstin həyatında müvəqqəti bir şöhrətin bitməsini, bir həqiqətin üzə çıxmasını və ya köhnə bir hədəfdən imtina etməni simvolizə edir.",
        highlight_box: "Yuxuda afişanın qopması, insanın bəzi illüziyalardan qurtulduğunu, artıq 'reklam' deyil, reallıqla yaşamağa başladığını və yaxın zamanda həyatındakı bəzi formal (süni) münasibətlərin sona çatacağını göstərən mühüm bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Qırılmanın və Düşmənin Psixoloji və Ruhani Analizi</h2>
<p>Qopma və ya düşmə yuxularda hər zaman 'sonluq' və ya 'bağlılığın kəsilməsi' mənasına gəlir. Afişanın divardan qopması, bir elanın və ya bir sözün artıq qüvvədən düşməsini təmsil edir. Psixoloji olaraq bu yuxu, insanın bir məsələdə yanıldığını anlamasını və ya özünü başqalarına göstərmək üçün istifadə etdiyi 'maskanın' (afişanın) artıq dözmədiyini əks etdirir. Siz bəlkə də bir gözləntidən yorulmusunuz. Qopan afişa sizin keçmiş bir arzunuzun artıq aktual olmadığını bildirir. Bu bir itki deyil, daxili azadlıqdır; çünki divar (ruhunuz) artıq başqa, daha yeni bir afişaya hazırdır.</p>

<p>Yuxuda afişanın qopması çox vaxt bir sirrin üzə çıxacağına, müvəqqəti bir iş birliyinin bitməsinə və ya bir yalanın ifşasına işarədir. Lakin bu sizi kədərləndirməməlidir; çünki həqiqət hər zaman xeyirlidir. Siz artıq daha real və daha möhkəm təməllər üzərində həyatınızı quracaqsınız. Sizin səmimiyyətiniz heç vaxt qopmayan ən böyük afişadır.</p>

<h2>Qopma Şəklinə Görə Yozmalar</h2>
<p>Afişanın necə düşməsi yozumu təyin edir:</p>

<table>
  <thead>
    <tr>
      <th>Hadisə</th>
      <th>Yozumu</th>
      <th>Məsləhət</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Külək Afişanı Qoparması</td>
      <td>Taleyin Müdaxiləsi</td>
      <td>Hadisələri Axarına Burax</td>
    </tr>
    <tr>
      <td>Xəyanətkarın Afişanı Cırması</td>
      <td>Paxıllıq və ya Pis Niyyət</td>
      <td>Ətrafına qarşı diqqətli ol</td>
    </tr>
    <tr>
      <td>Afişanın Öz-özünə Düşməsi</td>
      <td>Zamanın Bitməsi / Məntiqi Son</td>
      <td>Yeni Səhifə Aç</td>
    </tr>
    <tr>
      <td>Afişanı Özünüz Qoparmağınız</td>
      <td>İradəli Qərar / Imtina</td>
      <td>Öz Yolunu Seç</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Yerə Düşmüş Afişanı Tapdalamaq</h3>
<p>Əgər düşmüş afişanın üstündən keçirsinizsə, bu sizin keçmişdəki bir hadisəyə və ya insana artıq əhəmiyyət vermədiyinizi, mənən çox ucalmış olduğunuzu bildirir. Sizin artıq köhnə elanlarla deyil, yeni hədəflərlə işiniz var. Qətiyyətli olun.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda dünya bir 'oyun və ticarət' yeridir; afişalar isə onun bəzəkləridir. Afişanın qopması, bəndənin dünya bəzəyindən uzaqlaşıb həqiqətə (yaradana) yönəlməsi kimi görülür. Dinimizdə buyurulduğu kimi, hər şey fanidir. Bu yuxu sizə xatırladır ki, insanlara özünüzü sevdirmək üçün istifadə etdiyiniz 'reklamlar' müvəqqətidir, əsas olan qəlbin Allah yanındakı yeridir. Səbr və dua ilə köhnənin getməsinə və yeninin (həqiqətin) gəlməsinə icazə verin. Səmimiyyət sizin ən böyük dayaq nöqtənizdir.</p>

<h3>Yenilənin: Nə Etməli?</h3>
<p>Bu yuxu sizə keçmişi keçmişdə qoymaq vaxtı olduğunu deyir. Alınmayan bir iş və ya bitən bir münasibət üçün kədərlənməyin. Divarınızı (həyatınızı) təmizləyin və yeni, daha xeyirli hədəflər üçün yer açın. İnsanlara yox, öz vicdanınıza hesabat verin. Unutmayın ki, ən böyük zəfər yıxılanı deyil, qalxanı seyr etməkdir. Sizin üçün yeni və daha parlaq bir mərhələ başlayır, sadəcə səmimi olun. Sizin hidayətiniz sizin həqiqətinizdədir. Həyatı olduğu kimi qəbul edin.</p>`,
        faqs: [
            { "question": "Yuxuda qopan afişanı yenidən yapışdırmaq?", "answer": "Bitmiş bir məsələni və ya münasibəti bərpa etmək üçün əbəs yerə çalışdığınızı bildirir." },
            { "question": "Qopan afişanın altında başqa bir afişa görmək?", "answer": "Gizli bir fürsətin və ya bir sirrin tezliklə aşkar olacağına yozulur." }
        ],
        related_slugs: ["yuxuda-afisa-gormek", "yuxuda-adamlarin-icinde-tek-qalmaq"],
        rating_value: 4.5,
        review_count: 29
    },
    {
        slug: "yuxuda-afrikali-gormek",
        title: "Yuxuda Afrikalı Görmək",
        seo_title: "Yuxuda Afrikalı Görmək: Egzotika, Güclü Enerji və Uzaq Səfərlər (2026)",
        seo_description: "Yuxuda afrikalı bir insan görməyin ən dəqiq yozmaları. Niyə afrikalı görmək yuxuda bir daxili güc, bərəkət və ya uzaqdan gələn xeyirdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda afrikali gormek, uzaq olke, enerji, guc, bereket, yuxu yozmalari, egzotik",
        excerpt: "Yuxuda afrikalı görmək xəyalpərəstin həyatında gözlənilməz və çox maraqlı hadisələrin baş verəcəyini, daxili qüvvəsinin artacağını və ya uzaqdan mühüm bir dəstək alacağını simvolizə edir.",
        highlight_box: "Yuxuda afrikalı görmək, insanın həyatındakı 'naməlum' lakin çox güclü bir potensialı, mənəvi bir dayanıqlığı və yaxın zamanda həyatına rəng qatacaq çox fərqli bir fürsətin xəbərçisidir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Fərqli Mədəniyyətin Ruhani Analizi</h2>
<p>Afrika insanlıq tarixinin beşiyi, günəşin və təbii gücün rəmzidir. Yuxuda afrikalı görmək, insanın öz 'köklərinə' və ya təbiətinə olan daxili bağlılığını təmsil edir. Psixoloji olaraq bu yuxu, insanın monotonluqdan bezməsini və daha enerjili, daha 'isti' (səmimi) bir həyat axtarışında olmasını əks etdirir. Siz bəlkə də bir məsələdə daha cəsur və qətiyyətli olmalısınız. Afrikalı insan sizin daxilinizdəki sönməyən atəşi və dözümlülüyü simvolizə edir. Bu görüş sizin həyatınıza yeni bir nəfəs və geniş vizion gətirəcəkdir.</p>

<p>Yuxuda afrikalı görmək çox vaxt uzaqdan gələcək çox xeyirli bir xəbərə, mühüm bir ticarət əlaqəsinə və ya heç gözləmədiyiniz bir yerdən gələcək mənəvi yardıma işarədir. Sizin imkanlarınız artıq yerli sərhədləri aşır. Bu prosesdə fərqliliklərə hörmət və səmimiyyət sizin ən böyük qazancınızdır. Günəş sizin üçün doğur.</p>

<h2>Görüşün Şəklinə Görə Yozmalar</h2>
<p>İnsanın halı və rəftarı yozumu dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Afrikalının Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gülən və Səmimi Afrikalı</td>
      <td>Böyük Xoşbəxtlik / Dostluq</td>
      <td>Yeni və etibarlı bir tanışlıq</td>
    </tr>
    <tr>
      <td>Qəmli və ya Xəstə Afrikalı</td>
      <td>Yatırılmış potensial / Kədər</td>
      <td>Bir sınaq dövrü</td>
    </tr>
    <tr>
      <td>Afrikalı İlə Söhbət Etmək</td>
      <td>Uzaqdan Gələn Hikmət</td>
      <td>Beynəlxalq və ya geniş layihə</td>
    </tr>
    <tr>
      <td>Çoxlu Afrikalı Görmək</td>
      <td>Bərəkət və Kütləvi Uğur</td>
      <td>Sosial Nüfuzun Artması</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Afrikaya Səyahət Etmək</h3>
<p>Əgər özünüzü Afrikada görürsünüzsə, bu sizin ruhunuzun böyük bir azadlıq və kəşf dövrünə girdiyini bildirir. Siz həyatın həqiqi dadını duymağa başlayırsınız. Qarşınızda maneələr yoxdur, sadəcə sonsuz üfüqlər var. Cəsarətli olun.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda rənglərin və millətlərin fərqli olması Allahın möcüzələrindən biri kimi qəbul edilir. Yuxuda fərqli simalı insan görmək, insanın mənəvi dünyasının genişlənməsi kimidir. Dinimizdə bütün insanlar bərabərdir və ən xeyirlisi ən təqvalı (səmimi) olanıdır. Bu yuxu sizə xatırladır ki, xeyir hər yerdə ola bilər, onu uzaqda axtarmaqdan qorxmayın. Sizin səmimiyyətiniz sizin ən böyük elçinizdir. Qəlbinizi hər kəsə açın, rəhmət hər tərəfdən gələcəkdir.</p>

<h3>Vizyonunuzu Genişləndirin: Nə Etməli?</h3>
<p>Bu yuxu sizə qəlibləri qırmaq vaxtı olduğunu deyir. Həyatınıza yeni rənglər və fərqli düşüncələr qatın. Əgər bir yeni iş və ya təhsil daxilində uzaqlarla bağlı planınız varsa, onu reallaşdırın. Öz gücünüzə inanın və çətinliklərin qarşısında sarsılmayın (təbii dözümlülük kimi). Unutmayın ki, ən qiymətli almazlar ən tünd yerlərdə tapılır. Sizin daxili işığınız hər kəsi heyran edəcək. Səmimiyyətlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda afrikalı ilə yemək yemək?", "answer": "Böyük bir bərəkət, ruzi və beynəlxalq səviyyədə bir ortaqlığa işarədir." },
            { "question": "Afrikalının sizə hədiyyə verməsi?", "answer": "Gözlənilməz bir yerdən gələn mühüm bir lütf və sevinclə yozulur." }
        ],
        related_slugs: ["yuxuda-adam-gormek-yad", "yuxuda-ada-gormek"],
        rating_value: 4.8,
        review_count: 36
    },
    {
        slug: "yuxuda-ag-reng-gormek",
        title: "Yuxuda Ağ Rəng Görmək",
        seo_title: "Yuxuda Ağ Rəng Görmək: Paklıq, Hüzur və Yeni Başlanğıclar (2026)",
        seo_description: "Yuxuda ağ rəngin ən dəqiq yozmaları. Niyə ağ rəng yuxuda tam bir təmizlik, toy, şəfa və ya ilahi rəhmətdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag reng, ag rengin menasi, pakliq, hüzur, toy, sefa, yuxu yozmalari, yeni heyat",
        excerpt: "Yuxuda ağ rəng görmək xəyalpərəstin həyatında yeni və təmiz bir səhifənin açıldığını, bütün dərdlərin bitdiyini və mənəvi hüzura qovuşduğunu simvolizə edir.",
        highlight_box: "Yuxuda ağ rəng görmək, insanın ruhunun ən ali mərtəbəsinə, saflığa və tam bir təslimiyyətə çatdığını, yaxın zamanda həyatına böyük bir nur, işıq və xoşbəxtliyin hakim olacağını müjdələyən müqəddəs bir rəmzdir.",
        category: "Feelings",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Ağlığın Ontoloji və Ruhani Analizi</h2>
<p>Ağ rəng bütün rənglərin birləşməsi, işığın təməli və günahsızlığın ən böyük rəmzidir. Yuxuda hər tərəfi ağ görmək və ya ağ bir əşyaya fokuslanmaq, insanın daxili aləmindəki 'qaranlıqların' (sıxıntıların) yox olduğunu təmsil edir. Psixoloji olaraq bu yuxu, insanın vicdanının rahat olmasını və hüzurlu bir dövrə qədəm qoymasını əks etdirir. Siz bəlkə də bir səhvi düzəltmisiniz və ya ağır bir yükdən azad olmusunuz. Ağ rəng həm də şəfa rəmzidir; həm cismani, həm də ruhani xəstəliklərin dərmanıdır. Bu işıq sizin gələcək yolunuzu aydınladır.</p>

<p>Yuxuda ağ rəng görmək çox vaxt toy-bayram müjdəsi, subaylar üçün izdivaç, xəstələr üçün şəfa və dindar insanlar üçün mənəvi ucalıq deməkdir. Siz artıq kainatın ən saf enerjisi ilə rezonansdasınız. Bu prosesdə səmimi qalmaq sizin ən böyük qazancınızdır. Hər şey sizin üçün yenidən başlayır.</p>

<h2>Ağ Rəngli Əşyalara Görə Yozmalar</h2>
<p>Ağlığı nədə görməyiniz yozumu dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Ağ Əşya</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Paltar Geyinmək</td>
      <td>İzzət və Şərəf</td>
      <td>Yeni bir dərəcə / Mövqe</td>
    </tr>
    <tr>
      <td>Ağ Gül Görmək</td>
      <td>Təmiz Eşq / Sədaqət</td>
      <td>Xeyirli bir izdivaç</td>
    </tr>
    <tr>
      <td>Ağ Heyvan (At, Göyərçin)</td>
      <td>Murada Çatmaq / Qələbə</td>
      <td>Arzuların Reallaşması</td>
    </tr>
    <tr>
      <td>Ağ Divarlar / Ev</td>
      <td>Zehni Aydınlıq / Hüzur</td>
      <td>Ailə Səadəti</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Kağız Görmək</h3>
<p>Əgər əlinizdə tərtəmiz bir ağ kağız varsa, bu sizin həyatınızın sizin əlinizdə olduğunu və onu istədiyiniz kimi yaza biləcəyinizi bildirir. Allah sizə yeni bir fürsət verir. Səmimiyyətlə və xeyirdua ilə bu kağızı 'doldurmağa' (yeni işə) başlayın.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ağ rəng İslamın, mələklərin və cənnətin rəmzidir. Peyğəmbərimiz (s.a.v) ağ paltarı çox sevərdi. Yuxuda ağ rəng görmək, bəndənin imanının parlaqlığına və Allahın rəhminə işarədir. Dinimizdə ağ kəfən də bir təmizlik və dünyaya 'əlvida' deyib haqqa qovuşmaq rəmzidir; lakin bir çox yozmalara görə bu, həm də 'yeni bir doğum' (ruhən) deməkdir. Bu yuxu sizə xatırladır ki, qəlbinizi ağ tutsanız, həyatınız da ağ olar. Səmimiyyət sizin ən böyük nurunuzdur.</p>

<h3>İşıqlanın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra qəlbinizdəki bütün kin və nifrəti təmizləyin. Hamını bağışlayın və yeni bir başlanğıc edin. Ətrafınızdakı insanlara xeyirxahlıq edin. Ağ bir səhifə açın və köhnə səhvləri təkrarlamayın. Sağlam həyat tərzinə keçin və mənəviyyatınıza vaxt ayırın. Unutmayın ki, ən qaranlıq gecədən sonra ağappaq bir sabah doğur. Sizin sabahınız artıq gəlib, sadəcə gözlərinizi açın və işığın dadını çıxarın. Nur içində olun.</p>`,
        faqs: [
            { "question": "Yuxuda bulanıq ağ rəng görmək?", "answer": "Real həyatda bir az tərəddüd içinde olduğunuzu və səmimiyyətinizi qorumalı olduğunuzu bildirir." },
            { "question": "Ağ rəngin qəfildən qaralması?", "answer": "Bir nemətin qədrini bilməməyə dair xəbərdarlıqdır." }
        ],
        related_slugs: ["yuxuda-vekil-advokat-gormek", "yuxuda-ada-gormek"],
        rating_value: 5.0,
        review_count: 82
    }
];

saveBatch(posts);
