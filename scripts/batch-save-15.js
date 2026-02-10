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
        slug: "yuxuda-ag-ayi-gormek",
        title: "Yuxuda Ağ Ayı Görmək",
        seo_title: "Yuxuda Ağ Ayı (Qütb Ayısı) Görmək: Güc, Soyuqqanlılıq və Böyük Düşmən (2026)",
        seo_description: "Yuxuda ağ ayı görməyin ən dəqiq yozmaları. Niyə ağ ayı görmək yuxuda bir böyük imkan və ya çox güclü bir rəqibdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag ayi, qutb ayisi, guc, soyuqqanliliq, boyuk dusmen, yuxu yozmalari, boyuk fursit",
        excerpt: "Yuxuda ağ ayı görmək xəyalpərəstin həyatında çox güclü bir qüvvə ilə qarşılaşacağını, imkanlarının genişlənəcəyini və ya uzaqdan gələn böyük bir risklə üzləşəcəyini simvolizə edir.",
        highlight_box: "Yuxuda ağ ayı görmək, insanın taleyindəki 'sarsılmaz' bir gücü, böyük bir rütbəni və yaxın zamanda gələcək çox ciddi, lakin xeyirli bir imtahanı müjdələyən əzəmətli bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Əzəmətin və Soyuqqanlılığın Psixoloji Analizi</h2>
<p>Ayı gücün və vəhşi təbiətin ən mühüm nümayəndəsidir. Ağ ayı isə bu gücün saflıq (lakin həm də soyuqluq) daxilindəki təzahürüdür. Psixoloji olaraq bu yuxu, insanın real həyatda çox böyük bir məsuliyyətin altına girməsini və ya özündən qat-qat güclü bir şəxslə münasibət qurmasını əks etdirir. Siz bəlkə də bir məsələdə çox soyuqqanlı olmalısınız. Ağ ayı sizin daxilinizdəki yatırılmış gücün və dözümlülüyün rəmzidir. Bu yuxu həm də uzaq hədəflər (qütblər kimi) haqqında bir vizyondur; siz artıq kiçik işlərlə deyil, nəhəng layihələrlə maraqlanmalısınız.</p>

<p>Yuxuda ağ ayı görmək çox vaxt dövlət tərəfindən gələn bir yüksəlişə, böyük bir ticarət tərəfdaşlığına və ya çətin bir rəqibə qarşı qazanılacaq zəfərə işarədir. Sizin işləriniz artıq 'buz kimidir' - yəni sarsılmaz və ciddidir. Bu prosesdə təmkinli olmaq sizin ən böyük 'ayı' bacarığınız olacaqdır.</p>

<h2>Ayının Rəftarına Görə Müxtəlif Yozmalar</h2>
<p>Ayını necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Ayının Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sakit Duran Ağ Ayı</td>
      <td>Böyük Bir Müdafiə / Dayanıqlıq</td>
      <td>Stabil Maddi Vəziyyət</td>
    </tr>
    <tr>
      <td>Ağ Ayının Hücum Etməsi</td>
      <td>Güclü Bir Rəqiblə Mübarizə</td>
      <td>Mühüm Bir Sınaq</td>
    </tr>
    <tr>
      <td>Ağ Ayı İlə Oynamaq</td>
      <td>Düşməni Dosta Çevirmək</td>
      <td>Yüksək Dərəcəli Ortaqlıq</td>
    </tr>
    <tr>
      <td>Ağ Ayı Balası Görmək</td>
      <td>Yeni və Böyük Bir Layihə</td>
      <td>Gələcək Vəd Edən İş</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Buzlar Üstündə Ağ Ayı Görmək</h3>
<p>Bu yuxu xəyalpərəstin çox nadir və təmiz bir fürsət əldə edəcəyini, lakin bu fürsətin bir az 'soyuqqanlı' (təhlükəli) olduğunu bildirir. Qərarlarınızı verərkən hisslərinizlə deyil, məntiqinizlə hərəkət edin. Sizin zəkanız sizin ən böyük silahınızdır.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ayı bəzən 'nəfs'in bir növü kimi görülsə də, ağ ayı hər zaman bir 'heyvəri' (ali) güc kimi qiymətləndirilir. Dinimizdə güclü olmaq bəyənilən bir haldır. Yuxuda ağ ayı görmək bəndənin mənəvi dözümlülüyünün və imanının sarsılmazlığının rəmzi kimi də görülür. Sizin hüzurunuz sizin daxili gücünüzdədir. Allah sizə bu yuxu vasitəsilə deyir ki, sənə heç kim mane ola bilməz, yetər ki, dürüst qal.</p>

<h3>Güclü Olun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra öz hədəflərinizə fokuslanın və kiçik maneələrdən qorxmayın. Daha ciddi və daha perspektivli işlərə başlayın. Özünüzü müdafiə etməyi öyrənin və rəqiblərinizə qarşı soyuqqanlı olun. Unutmayın ki, ən böyük ayı (güc) səbirdir. Sizin uğurunuz sizin əmənətinizdir, ona sahib çıxın. Zirvələrə doğru irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ ayının ölməsi?", "answer": "Real həyatda böyük bir problemin və ya güclü bir düşmənin zərərsizləşdirilməsinə işarədir." },
            { "question": "Ağ ayının evinizə girməsi?", "answer": "Ailənizə gələcək çox güclü və hörmətli bir qonağa və ya mühüm bir xəbərə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-vekillə-muqavilə-baglamaq"],
        rating_value: 4.8,
        review_count: 45
    },
    {
        slug: "yuxuda-ag-goyerchin-gormek",
        title: "Yuxuda Ağ Göyərçin Görmək",
        seo_title: "Yuxuda Ağ Göyərçin Görmək: Sülh, Müjdə və Mənəvi Ucalıq (2026)",
        seo_description: "Yuxuda ağ göyərçin (bəyaz göverçin) görməyin ən dəqiq yozmaları. Niyə ağ göyərçin yuxuda ən böyük xəbər, sülh və xoşbəxtlikdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag goyerchin, beyaz guvercin, mujde, sulh, hüzur, yuxu yozmalari, ilahi xeber",
        excerpt: "Yuxuda ağ göyərçin görmək xəyalpərəstin çoxdandır gözlədiyi çox xəyirli bir xəbəri alacağını, küsülülərin barışacağını və ilahi bir lütfə nail olacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ göyərçin görmək, insanın taleyindəki 'ali' bir müjdəni, mənəvi təmizliyi və yaxın zamanda həyatına gələcək tam bir hüzur, eşq və bərəkəti xəbər verən ən müqəddəs rəmzlərdən biridir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Müjdənin və Səmanın Enişi Analizi</h2>
<p>Göyərçin tarix boyu sülhün, xəbərin və müqəddəs ruhun rəmzi olmuşdur. Ağ göyərçin isə bu xüsusiyyətlərin ən saf və ən ilahi görüntüsüdür. Psixoloji olaraq bu yuxu, insanın daxili barışığa çatmasını və mənəvi bir rahatlıq axtarışının sonunu əks etdirir. Siz bəlkə də çox böyük bir stressdən sonra 'qanad açmaq' istəyirsiniz. Ağ göyərçin sizin dualarınızın qəbul edilmiş formasıdır; o göylərdən yerə sizin üçün enib. Bu yuxu daxili aydınlığın və yeni bir eşq mərhələsinin başlanğıcıdır. Siz artıq təmiz bir nəfəs alırsınız.</p>

<p>Yuxuda ağ göyərçin görmək çox vaxt uzaqdan gələcək çox sevincli bir kağıza (məktuba), toy-nişan xəbərinə və ya bir münaqişənin sülhlə bitməsinə işarədir. Sizin üçün artıq xoş günlər başlayır. Bu prosesdə səmimi qalmaq sizin ən böyük 'uçuş' enerjiniz olacaqdır.</p>

<h2>Göyərçinin Davranışına Görə Müxtəlif Yozmalar</h2>
<p>Göyərçini necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Göyərçinin Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Əlinizə Qonan Ağ Göyərçin</td>
      <td>Çox Böyük Bir Qismət</td>
      <td>Tezliklə Alınacaq Xəbər</td>
    </tr>
    <tr>
      <td>Ağ Göyərçinin Uçması</td>
      <td>Duanın Ucada Qəbulu</td>
      <td>Ümidlərin Reallaşması</td>
    </tr>
    <tr>
      <td>Cüt Ağ Göyərçin</td>
      <td>Məhəbbət və Sədaqət</td>
      <td>Evlilik və ya Nişan</td>
    </tr>
    <tr>
      <td>Ağ Göyərçinin Pəncərəyə Gəlməsi</td>
      <td>Evə Gələn Bərəkət</td>
      <td>Xoş Bir Qonaq</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Göyərçini Azad Etmək</h3>
<p>Bu yuxu çox xeyirxah bir hərəkətin rəmzidir. Sizin kiməsə kömək edəcəyinizi və bunun qarşılığında Allahın sizə daha çox rəhmət verəcəyini bildirir. Azadlıq vermək, azadlıq tapmaq deməkdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda göyərçin bəzən 'vəhy' və ya mənəvi ilhamın daşıyıcısı kimi görülür (məsələn, Nuhun gəmisi və ya Peyğəmbərimizin s.a.v mağarasında). Ağ göyərçin görmək, bəndənin imanının təmizliyindən və ilahi bir himayə altında olmasından xəbər verir. Bu yuxu sizə xatırladır ki, əgər qəlbiniz ağdırsa, sizin üçün heç bir qapı bağlı qalmaz. Səmimiyyət sizin ən böyük qanadınızdır. Müjdələr sizinlədir.</p>

<h3>Müjdəni Qəbul Edin: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra qəlbinizdəki bütün qara düşüncələri atın. Kiminsə xətrinə dəymisinizsə, könlünü alın. Gələn xəbərlərə hazır olun və təşəkkür edin. İbadət və şükürlə məşğul olun. Unutmayın ki, ən gözəl xəbər insanın öz daxilindəki sülhdür. Sizin ağ göyərçininiz hər zaman sizin yanınızdadır, sadəcə pəncərənizi (qəlbinizi) açın. Sevinclə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ göyərçinin yaralı olması?", "answer": "Yaxın bir dostunuzdan gələcək kədərli bir xəbərə, lakin sizin köməyinizlə məsələnin həll olunacağına işarədir." },
            { "question": "Göyərçinin ağzında zeytun budağı olması?", "answer": "Tam bir sülh, əmin-amanlıq və müharibələrin (münaqişələrin) bitməsi müjdəsidir." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-at-gormek"],
        rating_value: 5.0,
        review_count: 145
    },
    {
        slug: "yuxuda-ag-ilan-gormek",
        title: "Yuxuda Ağ İlan Görmək",
        seo_title: "Yuxuda Ağ İlan Görmək: Zəif Düşmən, Gizli Həqiqət və Şəfa (2026)",
        seo_description: "Yuxuda ağ ilan (bəyaz yılan) görməyin ən dəqiq yozmaları. Niyə ağ ilan görmək yuxuda bir zəif rəqib və ya mənəvi bir imtahandır? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag ilan, beyaz yilan, zeif dusmen, heqiqet, sefa, mənəvi sınaq, yuxu yozmalari, gizli güc",
        excerpt: "Yuxuda ağ ilan görmək xəyalpərəstin həyatında zərif və hiyləgər görünən bir maneəni, zəif bir rəqibi və ya mənəvi bir oyanışı simvolizə edir.",
        highlight_box: "Yuxuda ağ ilan görmək, insanın taleyindəki 'maskalanmış' bir vəziyyəti, düşmən görünən bir xeyiri və yaxın zamanda gələcək mühüm bir şəfa və ya sirlərin aşkar olmasını müjdələyən maraqlı bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda İlanın Sənəti və Ruhani Analizi</h2>
<p>İlan müdriklik və eyni zamanda təhlükənin rəmzidir. Ağ ilan isə bu enerjinin 'saflaşmış' formasıdır. Psixoloji olaraq bu yuxu, insanın real həyatda bir risklə üzləşdiyini, lakin bu riskin göründüyü qədər 'qara' (qorxulu) olmadığını əks etdirir. Siz bəlkə də bir insandan şübhələnirsiniz, lakin ağ ilan sizə deyir ki, o şəxs ya zəifdir, ya da əslində sizin xeyrinizədir. Ağ ilan həm də əczaxanalarda olduğu kimi şəfa rəmzidir; bəzən xəstəliklərin bitməsini xəbər verir. Bu yuxu daxili hisslərinizi 'ayıq' tutmaq vaxtı olduğunu bildirir.</p>

<p>Yuxuda ağ ilan görmək çox vaxt zəifləmiş bir düşmənə, gizli bir sirrin açılmasına və ya mənəvi bir imtahanın sonununa işarədir. Sizin üçün imkanlar çoxdur, lakin diqqətli olmalısınız. Bu prosesdə səmimi qalmaq sizin ən böyük 'zəhəriniz' (müdafiəniz) olacaqdır. Hər şey sizin üçün aydınlaşır.</p>

<h2>İlanın Rəftarına Görə Müxtəlif Yozmalar</h2>
<p>İlanı necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>İlanın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Əlinizdə Ağ İlan Tutmaq</td>
      <td>Düşmənə Qalib Gəlmək</td>
      <td>Mühüm Bir İdarəetmə</td>
    </tr>
    <tr>
      <td>Ağ İlanın Sizi Dişləməsi</td>
      <td>Xeyirli Bir İnciklik / Şəfa</td>
      <td>Xəstəliyin Def Edilməsi</td>
    </tr>
    <tr>
      <td>Sakit Durmuş Ağ İlan</td>
      <td>Xəbərsiz Qalan Maneə</td>
      <td>Gizli Bir Müjdə</td>
    </tr>
    <tr>
      <td>Ağ İlanın Evə Girməsi</td>
      <td>Ailədəki Gizli Hadisə</td>
      <td>Bir Sirrin Aşkar Olması</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ İlan Öldürmək</h3>
<p>Bu yuxu çox xeyirlidir. Sizin həyatınızdakı mühüm bir maniəni tamamilə yox edəcəyinizi və daxili qorxularınızın üstünə gedib zəfər çalacağınızı bildirir. Siz artıq azadsınız.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ilan bəzən 'mal' (sərvət) və ya 'düşmən' kimi görülür. Ağ ilan isə xüsusən 'halal mal' və ya 'dinini gizlədən (yaxud zəif olan) düşmən' kimi qiymətləndirilir. Dinimizdə buyurulduğu kimi, ayıq-sayıq olmaq möminin vəzifəsidir. Bu yuxu sizə xatırladır ki, hər 'bəyaz' (təmiz) görünən şey dost deyil, lakin hər 'ilan' (təhlükə) da fəlakət deyil. Səmimiyyət sizin ən böyük gözünüzdür. Qəlbinizi rəvan tutun.</p>

<h3>Ayıq Olun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra ətrafınızdakı insanlara daha diqqətlə baxın. Sənəd işlərinizi və maddi vəziyyətinizi yoxlayın. Heç kimi dərhal düşmən elan etməyin, lakin tamamilə arxayın da olmayın. Şəxsi həyatınızı gizli saxlayın. Unutmayın ki, ən böyük zəfər döyüşmədən qazanılan zəfərdir. Sizin hikmətiniz sizin ən böyük qalxanınızdır. Səbr və təmkinlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ ilanın qaçıb getməsi?", "answer": "Real həyatda bir sıxıntının sizdən uzaqlaşacağına və ya düşmənin vaz keçəcəyinə işarədir." },
            { "question": "Ağ ilanın rənginin dəyişməsi?", "answer": "İnsanların əsl simasının tezliklə aşkar olacağını bildirən xəbərdarlıqdır." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-vekillə-muqavilə-baglamaq"],
        rating_value: 4.6,
        review_count: 42
    },
    {
        slug: "yuxuda-ag-paltar-geyinmek",
        title: "Yuxuda Ağ Paltar Geyinmək",
        seo_title: "Yuxuda Ağ Paltar Geyinmək: Şərəf, Yeni Həyat və Mənəvi Təmizlik (2026)",
        seo_description: "Yuxuda ağ geyinməyin ən dəqiq yozmaları. Niyə ağ paltar yuxuda bir yüksəliş, toy və ya ilahi rəhmətdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag paltar, ag geyinmek, seref, yeni heyat, təmizlik, toy, yuxu yozmalari, yüksəliş",
        excerpt: "Yuxuda ağ paltar geyinmək xəyalpərəstin həyatında mühüm bir məqama çatacağını, adının ucalacağını və bütün sıxıntılardan təmizlənəcəyini simvolizə edir.",
        highlight_box: "Yuxuda ağ paltar geyinmək, insanın ruhunun ən ali mərtəbəsinə, daxili hüzura və yaxın zamanda gələcək çox xeyirli bir dəyişikliyə (vəzifə, evlilik və s.) hazırlandığını müjdələyən parlaq bir rəmzdet.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Ağlığın və Libasın Psixoloji Analizi</h2>
<p>Paltar insanın sosial kimliyini və daxili halını kənara əks etdirən 'ikinci dəri'dir. Ağ paltar isə bu kimliyin saflığının və ucalığının rəmzidir. Psixoloji olaraq bu yuxu, insanın real həyatda 'təmizlənmək' arzusunu, bir səhvi düzəltməsini və ya yeni bir hədəfə hazır olmasını əks etdirir. Siz bəlkə də bir imtahandan, bir məsuliyyətdən üzüağ çıxmaq istəyirsiniz. Ağ paltar sizin özünüzə olan hörmətinizdir; siz artıq daha 'işıl' (parlaq) görünmək istəyirsiniz. Bu yuxu həm də bir mükafatdır; siz buna layiqsiniz.</p>

<p>Yuxuda ağ paltar geyinmək çox vaxt mühüm bir sevincli xəbərə, karyera yüksəlişinə və ya subaylar üçün çox qısa zamanda gələcək ailə qurm müjdəsinə işarədir. Sizin üçün artıq nurli bir mərhələ başlayır. Bu prosesdə dürüst və vəfalı qalmaq sizin ən böyük 'libasınız' olacaqdır.</p>

<h2>Paltarın Şəklinə Görə Müxtəlif Yozmalar</h2>
<p>Nə cür ağ paltar geyinməyiniz yozumu dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Paltarın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Kostyum / Rəsmi Paltar</td>
      <td>Vəzifə və Hörmət Artımı</td>
      <td>Yeni İdarəetmə / İmzalar</td>
    </tr>
    <tr>
      <td>Ağ Təmiz Köynək</td>
      <td>Xoş Xəbər / Şəffaflıq</td>
      <td>Bir İşin Müsbət Həlli</td>
    </tr>
    <tr>
      <td>Ağ Uzun Libas (Don)</td>
      <td>Səadət və Hüzur</td>
      <td>Ailə Səadəti / Toy</td>
    </tr>
    <tr>
      <td>Ağ Kətan / Rahat Paltar</td>
      <td>Sağlamlıq və Sükunət</td>
      <td>Stressin Bitməsi</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Başqasının Sizə Ağ Paltar Geyindirməsi</h3>
<p>Bu yuxu çox xeyirdir. Sizin mühüm bir şəxs tərəfindən himayə olunacağınızı və ya bir haqsızlıqdan o insan vasitəsilə təmizlənəcəyinizi bildirir. Əlləriniz artıq sərbəstdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ağ paltar İslamın və mələklərin rəmzidir. Peyğəmbərimiz (s.a.v) buyurub ki: 'Paltarlarınızın ən yaxşısı ağ olanıdır'. Yuxuda ağ geyinmək bəndənin imanının saflığına və tövbəsinin qəbuluna işarədir. Bu yuxu sizə xatırladır ki, əgər qəlbiniz ağdırsa, sizin əməlləriniz də nurlu olacaqdır. Səmimiyyət sizin ən böyük bəzəyinizdir. Qəlbinizi rəvan tutun.</p>

<h3>Nurlanın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra həyatınızdakı neqativləri bir kənara atın. Hər kəsə qarşı səmimi olun və xeyirxahlıq edin. Yeni işlərinizə ağ səhifədən başlayın. Geyimlərinizə və xarici görünüşünüzə daha çox diqqət edin (çünki bu sizin daxili halınızı əks etdirəcək). Unutmayın ki, ən gözəl paltar insanın təqvası (təmiz əxlaqı) dır. Sizin parlaq gələcəyiniz sizin dürüstlüyünüzdədir. İnamla və paklıqla irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ paltarın ləkələnməsi?", "answer": "Real həyatda bir az diqqətli olmalı olduğunuzu və bəzi söz-söhbətlərə qarşı ehtiyatlılığı xatırladır." },
            { "question": "Köhnə ağ paltar geyinmək?", "answer": "Keçmişdə yarımçıq qalmış bir sevincin yenidən canlanacağına yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-gelinlik-gormek"],
        rating_value: 5.0,
        review_count: 89
    },
    {
        slug: "yuxuda-ag-gelinlik-gormek",
        title: "Yuxuda Ağ Gəlinlik Görmək",
        seo_title: "Yuxuda Ağ Gəlinlik Görmək: Murada Çatmaq, Səadət və Yeni Həyat (2026)",
        seo_description: "Yuxuda ağ gəlinlik görməyin ən dəqiq yozmaları. Niyə gəlinlik yuxuda subaylar üçün evlilik, evlilər üçün hüzur və ya böyük bir müjdədir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag gelinlik, gelinlik gormek, toy, murad, seadet, yeni heyat, yuxu yozmalari, boyuk mujde",
        excerpt: "Yuxuda ağ gəlinlik görmək xəyalpərəstin həyatında ən böyük arzularından birinin reallaşacağını, xoşbəxtlik və hüzur dolu günlərin başladığını simvolizə edir.",
        highlight_box: "Yuxuda ağ gəlinlik görmək, insanın taleyindəki 'ali' bir birliyi, mənəvi ucalığı və yaxın zamanda həyatına gələcək tam bir sevinc, şəfa və bərəkəti müjdələyən ən füsunkar rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Səadətin və Saflığın Psixoloji Analizi</h2>
<p>Gəlinlik həm məsuliyyətin, həm də ən uca xoşbəxtliyin rəmzidir. Ağ gəlinlik isə bu səadətin günahsızlıqla (paklıqla) birləşməsidir. Psixoloji olaraq bu yuxu, insanın real həyatda bir 'ittifaq' qurmaq istədiyini və ya öz dəyərini sübut etdiyini əks etdirir. Siz bəlkə də həyatınızın mühüm bir 'toy' (zəfər) mərhələsindəsiniz. Ağ gəlinlik sizin daxili dünyanızdakı hüzur və gözəllikdir; siz artıq hər kəsin gözündə ən 'gözəl' (müvəffəq) olanısınız. Bu yuxu həm də bir oyanışdır; siz artıq tək deyilsiniz, kainatın bərəkəti sizinlədir.</p>

<p>Yuxuda ağ gəlinlik görmək çox vaxt subay qızlar üçün bir-iki ay ərzində gələcək xeyirli qismətə, evlilər üçün ailədəki soyuqluğun bitməsinə və ya bir sıxıntıdan qurtulmağa işarədir. Sizin muradınız (arzunuz) artıq ağappaq şəkildə qarşınızdadır. Bu prosesdə şükür etmək sizin ən böyük 'duvağınız' olacaqdır.</p>

<h2>Gəlinliyin Halına Görə Müxtəlif Yozmalar</h2>
<p>Gəlinliyi necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Gəlinliyin Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tərtemiz və Parlaq Gəlinlik</td>
      <td>Tam bir Xoşbəxtlik / Zəfər</td>
      <td>Murada Çatmaq</td>
    </tr>
    <tr>
      <td>Gəlinlik Geyinmək</td>
      <td>Yeni Həyat / Vəzifə</td>
      <td>Mühüm Dəyişiklik</td>
    </tr>
    <tr>
      <td>Kirli və ya Cırıq Gəlinlik</td>
      <td>Müvəqqəti Bir Maneə</td>
      <td>Səbirli Olmaq Lazımdır</td>
    </tr>
    <tr>
      <td>Ağ Gəlinlikli Tanış Birini Görmək</td>
      <td>Həmin Şəxslə Bağlı Sevincli Xəbər</td>
      <td>Gözəl Görüş</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Başqasının Sizə Gəlinlik Hədiyyə Etməsi</h3>
<p>Bu yuxu çox xeyirdir. Sizin mənəvi bir dayaq tapanacağınıza və ya bir böyüyün vasitəçiliyi ilə xoşbəxtliyə qovuşacağınıza işarədir. Hədiyyə gələn gəlinlik, ilahi bir lütfdür.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda gəlinlik bəzən 'dünya sevinci' və ya 'imanın gözəlliyi' kimi görülür. Ağ gəlinlik bəndənin daxili aləmindəki paklığın və ilahi rəhmətin nişanıdır. Dinimizdə buyurulduğu kimi, hər bir mömin üçün bir müjdə var. Bu yuxu sizə xatırladır ki, əgər qəlbinizi təmiz tutsanız, Allah sizi ən gözəl səadətlə mükafatlandırar. Səmimiyyət sizin ən böyük bəzəyinizdir. Muradınız xeyirli olsun.</p>

<h3>Şad Olun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra həyatınıza yeni rənglər və xeyirdua qatın. Hədəflərinizə doğru inamla irəliləyin. Kimlə barışmaq istəyirsinizsə, addım atın. Yeni iş təkliflərini dəyərləndirin. Unutmayın ki, ən böyük gəlinlik (xoşbəxtlik) insanın öz ruhu ilə qurduğu barışıqdır. Sizin parlaq gələcəyiniz sizin səmimiyyətinizdədir. İnamla və paklıqla irəliləyin. Səadət sizlə olsun.</p>`,
        faqs: [
            { "question": "Yuxuda gəlinliyin itməsi?", "answer": "Real həyatda bir imkanın gecikməsinə və ya bir az tərəddüdə, lakin səbirli olsanız daha yaxşısının gələcəyinə işarədir." },
            { "question": "Uşaq gəlinliyi görmək?", "answer": "Masumiyyət və şirin, kiçik bir sevinc xəbəri ilə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-paltar-geyinmek", "yuxuda-ag-reng-gormek"],
        rating_value: 5.0,
        review_count: 98
    }
];

saveBatch(posts);
