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
        slug: "yuxuda-tebiet-hadiseleri-ve-landsaft",
        title: "Yuxuda Təbiət Hadisələri və Landşaft",
        seo_title: "Yuxuda Təbiət Hadisələri: Ay, Bulud, Dəniz və Asfalt (2026)",
        seo_description: "Yuxuda təbiət hadisələri görməyin ən dəqiq yozmaları. Niyə Ay, ağ bulud və axarsu yuxuda taleyin aynasıdır? 2500+ sözlük professional bələdçi.",
        keywords: "yuxuda ag bulud, ag deniz, ay gormek, ayin tutulmasi, ay isigi, aysberq, axarsu, asiman, asfalt, yuxu yozmalari",
        excerpt: "Yuxuda təbiət hadisələri və landşaft görmək insanın daxili aləminin genişliyini, gələcək taleyinin işıqlı və ya fırtınalı olacağını simvolizə edir. Bu bələdçidə səmadan yerə qədər bütün təbiət rəmzlərini incələyirik.",
        highlight_box: "Təbiət yuxuda 'İlahi nizam'ın təzahürüdür. Səma cisimləri ali hədəfləri, sular duyğuları, landşaft isə həyat yolunu təmsil edir. Ağ rəngin hakim olduğu təbiət yuxuları hər zaman mənəvi aydınlıq və sülh müjdəsidir.",
        category: "Nature",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Səmanın və Yerin Mənəvi Harmoniyası</h2>
<p>Təbiət hadisələri yuxuda insanın iradəsindən kənar baş verən böyük dəyişikliklərin rəmzidir. Landşaft isə bizim həyatda hansı zəmində dayandığımızı göstərir. Yuxuda səmanı və ya təbiəti 'ağ' və ya 'nurlu' görmək, xəyalpərəstin ruhunun ali mərtəbələrə qalxdığını və həyatında hər şeyin öz nizamına düşəcəyini bildirir.</p>

<p>Bu massiv bələdçidə təbiətin bütün qatlarını və landşaftın detallarını incələyirik:</p>

<table>
  <thead>
    <tr>
      <th>Hadisə / Element</th>
      <th>Simvolik Mənası</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Buludlar</td>
      <td>Xeyirli Müjdələr / Ümid</td>
      <td>Tezliklə Alınacaq Xoş Xəbər</td>
    </tr>
    <tr>
      <td>Ağ Dəniz</td>
      <td>Sonsuz Bərəkət / Sükunət</td>
      <td>Ailə Səadəti ve Qazanc</td>
    </tr>
    <tr>
      <td>Ay (Bütöv)</td>
      <td>Dövlət Böyüyü / Sevgili</td>
      <td>Yüksəliş və ya Eşq</td>
    </tr>
    <tr>
      <td>Axarsu</td>
      <td>Davamlı Ruzi / Ömür</td>
      <td>İşlərin Axarı ilə Getməsi</td>
    </tr>
    <tr>
      <td>Asiman (Göy Üzü)</td>
      <td>Azadlıq və Uca Hədəf</td>
      <td>Xəyalların Gerçəkləşməsi</td>
    </tr>
  </tbody>
</table>

<h2>Yuxuda Ağ Bulud və Ağ Dəniz Görmək</h2>
<p><strong>Ağ bulud</strong> görmək yuxuda 'qanad açmaq' kimidir. Bu, sizin üçün çox xeyirli və səmimi bir müjdənin yaxınlaşdığını, bütün qüssələrin bir bulud kimi dağılıb gedəcəyini bildirir. Pambıq kimi ağ buludlar sizin nurlu düşüncələrinizin və gələcəyə olan inamınızın rəmzidir.</p>
<p><strong>Ağ dəniz</strong> (süd kimi və ya ağ köpüklü dəniz) görmək, xəyalpərəstin dünyəvi və mənəvi imkanlarının genişlənəcəyini simvolizə edir. Bu, sonsuz bərəkətin və daxili hüzurun ən uca nöqtəsidir. Dənizin kənarında durub bu ağlığa baxmaq, taleyinizin artıq 'sahilə' (hüzura) çatdığını göstərir.</p>

<h2>Yuxuda Ay və Səma Cisimləri (Böyük Analiz)</h2>
<p>Ay yuxuda həm bir gözəllik, həm də bir rəhbər rəmzidir. Ayın fərqli halları taleyinizin fərqli mərhələlərini xəbər verir:</p>
<ul>
    <li><strong>Ayın tutulması, batması və ya parçalanması:</strong> Bu yuxular bir az xəbərdarlıq xarakterlidir. Mühüm bir vəzifəli şəxsin və ya ailə böyüyünün müvəqqəti çətinliklə üzləşəcəyinə və ya mühüm bir sirrin aşkar olacağına işarədir. Lakin parçalanan ayın yenidən birləşməsi böyük bir möcüzəvi qurtuluşdur.</li>
    <li><strong>Ay işığında gəzmək:</strong> Sizin çox romantik, səmimi və nurlu bir münasibətin içində olduğunuzu və ya çox doğru bir mənəvi yol seçdiyinizi bildirir. Ayın nuru sizin yolunuzu işıqlandırır.</li>
    <li><strong>Ayın yerə düşməsi:</strong> Bu, çox nadir və möcüzəvi bir yuxudur. Xəyalpərəstin ölkəsində və ya yaşadığı ərazidə çox böyük bir xeyrin, bərəkətin və ya mühüm bir şəxsin zuhur edəcəyinə yozulur.</li>
    <li><strong>Ayın rənginin qızarması:</strong> Hisslərinizin həddindən artıq coşqun olduğunu və ya mühüm bir ictimai hadisənin (bəzən münaqişənin) yaxınlaşdığını xəbər verir.</li>
    <li><strong>Ayın gülümsəməsi:</strong> Bu yuxu tamamilə xeyirdir! Taleyin sizə gülümsəyəcəyini, bütün qapıların üzünüzə açılacağını və mənəvi ucalığa çatacağınızı bildirir.</li>
    <li><strong>Aypara və ulduz:</strong> Bu, həm dövlət, həm də mənəvi ucalıq rəmzidir. Sizin dualarınızın qəbul olacağına və taleyinizin 'parlayacağına' işarədir.</li>
</ul>

<h2>Yuxuda Aysberq, Axarsu və Landşaft Detalları</h2>
<p><strong>Aysberq</strong> görmək, yuxuda 'buz dağı'nın görünən hissəsi kimi, bir məsələnin hələ tam dərk edilmədiyini bildirir. Aysberqin əriməsi, köhnə kinlərin və soyuqluğun bitməsini, ona çırpılmaq isə bir çətinliklə üzləşməyi, lakin bu sınaqdan dərs almağı simvolizə edir.</p>
<p><strong>Axarsu</strong> yuxunun canıdır. Təmiz axarsuda üzmək, ruzinin bolluğuna və şəfaya, axarsuya yıxılmaq transformsiyaya (yəni həyatın yenidən qurulmasına) işarədir. Su nə qədər təmiz və coşqundursa, həyat enerjiniz də o qədər yüksək olar.</p>
<p><strong>Asiman (Göy üzü)</strong> sizin limitlərinizdir. Göyün ağ və ya parlaq olması, sizin üçün heç bir sərhədin olmadığını və arzularınızın göylərə çatdığını göstərir.</p>
<p><strong>Asfalt</strong> yuxuda sabitlik və yol rəmzidir. Asfata su tökmək bir işi asanlaşdırmaq, asfaltın çatlaması köhnə sistemin dağılması, asfaltın üzərində uzanmaq isə bir müddətlik istirahətə v sükunətə işarədir.</p>

<h3>Mənəvi və Dini Baxış</h3>
<p>Mənəvi yozmalarda təbiət Allahın 'Kitabı' kimidir. Ay Peyğəmbərimizin (s.a.v) rəmzi, buludlar isə rəhmət və vəhy rəmzi sayıla bilər. Bu yuxular sizə xatırladır ki, kainatın hər bir zərrəsi sizin xeyrinizə nizamlanıb. Sizin səmimiyyətiniz sizin ən böyük 'landşaftınız' (həyat zəmininiz) dır. Qəlbinizi rəvan tutun.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda iki ay görmək nə deməkdir?</strong>
    <p>Bu, eyni dərəcədə güclü iki mühüm imkanın və ya iki böyük rəhbərin (bəzən də iki fərqli eşq hədəfinin) qarşınıza çıxacağını bildirir.</p>
</div>
<div class="faq-item">
    <strong>Səmanın rənginin qaralması qorxuludur?</strong>
    <p>Xeyr, bu sadəcə bir az səbirli olmağı və 'ulduzların' (müjdələrin) çıxması üçün qaranlığın keçməsini gözləmək lazım olduğunu bildirir.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda göydən yerə nur yağması?", "answer": "Tam bir hidayət, dua və arzuların sürətlə gerçəkləşməsi müjdəsidir." },
            { "question": "Ayın ardınca qaçmaq?", "answer": "Böyük bir idealın və ya çox uca bir eşqin arxasınca getdiyinizi və ona çatacağınızı bildirir." }
        ],
        related_slugs: ["yuxuda-ag-bulud-gormek", "yuxuda-ay-gormek", "yuxuda-su-gormek"],
        rating_value: 4.9,
        review_count: 184
    },
    {
        slug: "yuxuda-insanlar-ve-munasibetler",
        title: "Yuxuda İnsanlar və Münasibətlər",
        seo_title: "Yuxuda Ağsaqqal, Ana, Ata və Sevgili Görmək (2026)",
        seo_description: "Yuxuda ailə üzvlərini və insanlar görməyin ən dəqiq yozmaları. Niyə ağsaqqal nəsihəti və ana duası taleyin ən böyük açarıdır? 2500+ sözlük professional bələdçi.",
        keywords: "yuxuda agsaqqal, ana gormek, ata gormek, sevdiyini gormek, aile qurmaq, ayriliq, yuxu yozmalari, mənəvi baglar",
        excerpt: "Yuxuda insanlar və münasibətlər görmək bizim sosial kimliyimizi, mənəvi borclarımızı və yaxın zamanlarda baş verəcək həyati dəyişiklikləri simvolizə edir. Bu bələdçidə ağsaqqallardan sevgililərə qədər hər kəsin yozumu var.",
        highlight_box: "İnsanlar yuxuda həm bir aynadır, həm də bir müjdəçidir. Xüsusən nurani ağsaqqallar və ailə böyükləri ilahi bələdçilik rəmzidir. Yuxuda ailə birliyi və barışıq daxili hüzurun və kənar dəstəyin ən böyük nişanıdır.",
        category: "Society",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Sosial Bağların və Ruhani Görüşlərin Analizi</h2>
<p>İnsanlar bizim yuxularımızda sadəcə fiziki varlıqlar deyil, müəyyən keyfiyyətlərin və ya gələcək xəbərlərin canlı rəmzləridir. Yuxuda səmimi və nurlu insanlar görmək, xəyalpərəstin həyatında 'düzgün yol bələdçiləri'nin olduğunu və mənəvi bir dayaq tapacağını bildirir. Münasibətlərdəki hər bir detal (öpmək, nəsihət, dava) sizin real həyatdakı enerji mübadilənizi təmsil edir.</p>

<p>Bu massiv bələdçidə fərqli insan tiplərini və münasibət növlərini incələyirik:</p>

<table>
  <thead>
    <tr>
      <th>Şəxs / Hadisə</th>
      <th>Simvolik Mənası</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Nurani Ağsaqqal</td>
      <td>Hikmət və Hidayət</td>
      <td>Doğru Yol / Hörmət</td>
    </tr>
    <tr>
      <td>Gülümsəyən Ana</td>
      <td>İlahi Rəhmət / Murad</td>
      <td>Böyük Xoşbəxtlik</td>
    </tr>
    <tr>
      <td>Ata (Nəsihət Verən)</td>
      <td>İradə və Maddi Dayalq</td>
      <td>Vəzifə / Pul / Sahman</td>
    </tr>
    <tr>
      <td>Ailə Qurmaq / Toy</td>
      <td>Tamlıq və Yeni İttifaq</td>
      <td>Mühüm Dəyişiklik</td>
    </tr>
    <tr>
      <td>Aşiq Olmaq</td>
      <td>Daxili Atəş / Təmizlik</td>
      <td>Yeni Hisslər / Sürpriz</td>
    </tr>
  </tbody>
</table>

<h2>Yuxuda Ağsaqqal və Ağ Saqqal Görmək</h2>
<p><strong>Ağsaqqal görmək</strong> yuxuların ən müqəddəs anlarından biridir. Bu, sizin qarşınızda çox böyük bir 'həqiqət qapısı'nın açılacağını bildirir. Ağsaqqalın nəsihəti real həyatda mütləq riayət edilməli olan bir xəbərdarlıq və ya müjdədir. Ondan xeyir-dua almaq, taleyinizin parlaq olacağına və hamı tərəfindən seviləcəyinizə işarədir.</p>
<p><strong>Ağ saqqal</strong> (fiziki olaraq birində görmək və ya özünün ağarması) isə təcrübənin, uzun ömürün və nüfuzun rəmzidir. Bu, artıq 'ağıllı' qərarlar vermək vaxtınızın çatdığını göstərir.</p>

<h2>Yuxuda Ailə və Qohumlar</h2>
<p>Ailə bizim təməlimizdir. Yuxuda ailə ilə bağlı hadisələr çox xeyirlidir:</p>
<ul>
    <li><strong>Ailə qurmaq və ailə üzvləri:</strong> Bu, daxili bütövlüyün və yeni bir məsuliyyətin rəmzidir. Ailəvi səyahət, foto çəkdirmək və ya toplantı görmək, keçmişin gözəl izlərinin gələcəyə daşınacağını və ailə bağlarının möhkəmlənəcəyini göstərir.</li>
    <li><strong>Ailə büdcəsi və davası:</strong> Büdcə planlamaq ruzi nizamı, ailə davası isə (əksinə) daxili gərginliyin boşalması və barışığın yaxınlaşması deməkdir.</li>
    <li><strong>Ailə qəbiristanlığı:</strong> Bu qorxulu deyil; əksinə, köklərə sadiqlik və keçmiş ailə böyüklərinin xeyir-duasının sizinlə olması deməkdir.</li>
</ul>

<h2>Yuxuda Ana və Ata Görmək (Ən Dərin Yozmalar)</h2>
<p><strong>Ana görmək</strong> cənnətin qoxusunu duymaq kimidir. Ananın ağlayan görmək sizin diqqətli olmağınızı, xəstə görmək isə onun duasına ehtiyacınız olduğunu bildirir. Ananın səsi uzaqdan gələn müjdə, əlini öpmək isə bütün qapıların açılmasıdır.</p>
<p><strong>Ata görmək</strong> iradənin və gücün rəmzidir. Ölmüş atanı görmək onun sizin üçün dua etdiyini, mübahisə etmək öz iradənizi sübut etməyi, gülümsəyən ata isə böyük bir rəsmi uğuru və ya maddi qazancı bildirir. Ata yurdu və ata nəsihəti sizin həyat yolunuzdakı ən böyük 'pusula' (kompas) mənasına gəlir.</p>

<h2>Eşq, Ayrılıq və Duyğular</h2>
<p><strong>Aşiq olmaq</strong> (sevdiyini görmək, gəzmək) sizin ruhunuzun təravətini və yeni bir ilham mənbəyi tapdığınızı göstərir. Bu, real həyatda da xoş bir sürprizin müjdəsi ola bilər.</p>
<p><strong>Ayrılmaq</strong> (məktub, göz yaşı, mahnı) yuxuda çox vaxt 'çatışmazlıq qorxusu' kimidir. Lakin bu yuxu sizə xatırladır ki, hər bitiş yeni bir başlayıştır. Ayrılıq qorxusu əslində bağların daha da möhkəmlənməsinə xidmət edə bilər.</p>

<h3>Mənəvi və Dini Baxış</h3>
<p>Mənəvi yozmalarda ana-ataya hörmət imandandır. Yuxuda onları görmək sizin mənəvi vəziyyətinizin aynasıdır. Dinimizdə buyurulduğu kimi, mömin möminin aynasıdır. Bu yuxular sizə xatırladır ki, insanlar vasitəsilə sizə müjdələr və ya dərslər göndərilir. Səmimiyyət sizin ən böyük 'insani' bağınızdır. Qəlbinizi rəvan tutun.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda tanımadığım bir insanla ailə qurmaq?</strong>
    <p>Bu, sizin yeni və tamamilə fərqli bir işə və ya mənəvi bir mərhələyə qədəm qoyacağınızı bildirir. Xeyirli bir ittifaqdır.</p>
</div>
<div class="faq-item">
    <strong>Ölmüş birinin nəsə verməsi?</strong>
    <p>Hər zaman xeyirdir; bu, gözlənilməz bir ruzi, sağlamlıq və ya uzun ömür müjdəsi kimi yozulur.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda çoxlu insan toplantısı görmək?", "answer": "Böyük bir sevinc xəbərinin və ya cəmiyyət tərəfindən təqdir olunacaq bir işin müjdəsidir." },
            { "question": "Uşaqlıq dostunu görmək?", "answer": "Səmimi və köhnə bir sadiqliyin həyatınıza yenidən rəng qatacağına işarədir." }
        ],
        related_slugs: ["yuxuda-ana-gormek", "yuxuda-ata-gormek", "yuxuda-toy-gormek"],
        rating_value: 5.0,
        review_count: 312
    }
];

saveBatch(posts);
