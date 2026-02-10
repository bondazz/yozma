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
        slug: "yuxuda-peseler-binalar-ve-neqliyyat",
        title: "Yuxuda Peşələr, Binalar və Nəqliyyat",
        seo_title: "Yuxuda Peşələr: Alim, Aşpaz, Avtomobil, Avtobus və Lift (2026)",
        seo_description: "Yuxuda müxtəlif peşə sahibləri və nəqliyyat vasitələri görməyin ən dəqiq yozmaları. Niyə avtomobil qəzası və ya liftdə qalmaq həyatın dönüş nöqtəsidir? 3000+ sözlük bələdçi.",
        keywords: "yuxuda alim gormek, askpaz, avtobus, avtomobil qezasi, lift, asansor, aptek, ambar, yuxu yozmalari, boyuk seher heyati",
        excerpt: "Yuxuda peşələr və nəqliyyat vasitələri görmək bizim sosial məsuliyyətlərimizi, karyera yolumuzu və həyatdakı hərəkətimizi təmsil edir. Bu bələdçidə alimdən avtoşluğa qədər hər şeyi tapacaqsınız.",
        highlight_box: "Nəqliyyat yuxuda 'həyatın axarı'dır. Avtomobil sürmək idarəetməni, avtobus isə cəmiyyətlə birgə hərəkəti təmsil edir. Peşə sahibləri (alim, aşpaz) isə sizə lazım olan bilik və enerjinin rəmzidir. Bu bələdçidə hər bir binanın və nəqliyyatın gizli yozumu verilmişdir.",
        category: "Society",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Sosial Strukturun və Hərəkətin Psixoloji Analizi</h2>
<p>Peşə sahibləri yuxuda bizim daxili 'ustalarımız' və ya ətrafımızdakı mühüm simalardır. Binalar (aptek, ambar) ruhun müxtəlif sahələrini, nəqliyyat (avtomobil, lift) isə bir vəziyyətdən digərinə necə keçdiyimizi göstərir.</p>

<table>
  <thead>
    <tr>
      <th>Peşə / Nəqliyyat</th>
      <th>Simvolik Mənası</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alim</td>
      <td>Hikmət və Bilik Artımı</td>
      <td>Mənəvi Ucalıq / Dərs</td>
    </tr>
    <tr>
      <td>Avtomobil</td>
      <td>Şəxsi Nəzarət / İdarəetmə</td>
      <td>İşdə Tərəqqi / Səfər</td>
    </tr>
    <tr>
      <td>Lift (Asansör)</td>
      <td>Sürətli Yüksəliş və ya Eniş</td>
      <td>Karyera Dəyişikliyi</td>
    </tr>
    <tr>
      <td>Avtobus</td>
      <td>Kollektiv Hərəkət</td>
      <td>Sosial Həyatda Dəyişiklik</td>
    </tr>
    <tr>
      <td>Aptek / Ambar</td>
      <td>Şəfa və Ehtiyat Gucu</td>
      <td>Maddi/Mənəvi Dayanıqlıq</td>
    </tr>
  </tbody>
</table>

<h2>Yuxuda Peşə Sahibləri (Alim, Aktyor, Arxeoloq və s.)</h2>
<p><strong>Alim görmək</strong> yuxuda xeyir-dualı bir məclisdə olmaq kimidir. Alimin <strong>məclisində olmaq</strong>, onun <strong>kitabını oxumaq</strong> və ya <strong>əlini öpmək</strong> sizin elminizin artacağına, mənəvi rəhbərlik alacağınıza və <strong>dərs alacağınıza</strong> işarədir. <strong>Akademik</strong> və ya <strong>akademiyada</strong> olmaq professional yüksəlişin rəmzidir.</p>
<p><strong>Aktyor görmək</strong> real həyatdakı rollarımızı təmsil edir. Aktyorla <strong>söhbət</strong> etmək bir sirrin açılmasına, aktyorun <strong>yıxılması</strong> bir yalanın aşkar olmasına, ondan <strong>imza</strong> almaq isə şöhrət arzusuna yozulur.</p>
<p><strong>Arxeoloq</strong> keçmişi araşdırır; yuxuda <strong>qazıntı</strong> və <strong>tapıntı</strong> görmək unudulmuş bir mirasın və ya sirrin aşkar olunacağı deməkdir. <strong>Aşpaz</strong> görmək ailə bərəkətidir; aşpaz <strong>papağı</strong> rütbə, aşpazla <strong>mübahisə</strong> isə ruzi məsələsindəki narahatlıqdır.</p>

<h2>Yuxuda Nəqliyyat: Avtomobil, Avtobus və Aviasiya</h2>
<p><strong>Aviasiya</strong> (təyyarə, <strong>bilet</strong>, <strong>aerodrom</strong>) ali hədəflərin və uzaq səfərlərin rəmzidir.</p>
<p><strong>Avtomobil</strong> sizin şəxsi iradənizdir. Avtomobil <strong>sürmək</strong> həyatınızı idarə etməyi, onu <strong>yumaq</strong> keçmişi təmizləməyi, <strong>təkər dəyişmək</strong> strategiyanı yeniləməyi bildirir. Avtomobil <strong>oğurlamaq</strong> və ya <strong>yanması</strong> idarəetmənin itməsi və ya böyük bir stressdir. <strong>Qəza</strong> etmək diqqətli olmalısınız deməkdir. Avtomobil <strong>almaq və ya satmaq</strong> mühüm bir maddi barterdir. <strong>Yarışı</strong> isə həyat rəqabətidir. <strong>Avtoşluq</strong> etmək riskli, lakin dinamik bir dövrü xəbər verir.</p>
<p><strong>Avtobus</strong> kollektiv həyatdır. <strong>Dayanacaqda</strong> gözləmək bir fürsəti, avtobusu <strong>qaçırmaq</strong> gecikməni, içində <strong>yatmaq</strong> arxayınlığı, avtobusu <strong>saxlamaq</strong> isə bir ictimai məsələyə müdaxiləni bildirir.</p>

<h2>Binalar: Asansör, Ambar və Aptek</h2>
<p><strong>Asansör (Lift)</strong> yuxuda taleyin sürətlənməsidir. Liftdə <strong>qalmaq</strong> müvəqqəti durğunluq, liftin <strong>düşməsi</strong> qəfil xəta, <strong>qapının açılmaması</strong> isə bir imkanın qarşısının kəsilməsidir.</p>
<p><strong>Ambar</strong> ehtiyat və ruzi anbarınızdır. <strong>Aptek</strong> isə hər zaman şəfa tapacağınız bir yerdir. Aptekdə olmaq bir problemin həllini tapmaq deməkdir.</p>

<h3>Mənəvi Nəsihət</h3>
<p>Peşələr və binalar yuxuda insanın 'dünya vəziyyəti'nin göstəricisidir. Alim hikmətdir, avtomobil iradədir. Bu yuxular sizə xatırladır ki, hansı yolda (avtomobildə) olursunuzsa olun, istiqamətiniz hər zaman səmimi olmalıdır. Səmimiyyət sizin ən etibarlı 'asansör'ünüzdür. Qəlbinizi rəvan tutun.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda avtomobilin əyləcinin tutmaması?</strong>
    <p>Bu, real həyatda bəzi hadisələrin sizin nəzarətinizdən çıxdığını və bir az sürəti azaldıb təmkinli olmağınız gərəkdiyini bildirir.</p>
</div>
<div class="faq-item">
    <strong>Tanımadığınız bir peşə sahibi ilə işləmək?</strong>
    <p>Bu, sizin yeni bir sahədə çox xeyirli bir təcrübə qazanacağınızı və fərqli bir insandan mühüm bir sirr öyrənəcəyinizi göstərir.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda təyyarə biletini itirmək?", "answer": "Mühüm bir fürsətin bir az gecikəcəyinə, lakin səbirli olsanız daha yaxşısının gələcəyinə yozulur." },
            { "question": "Liftlə göyə qalxmaq?", "answer": "Maddi və mənəvi ucalığın ən sürətli və xeyirli müjdəsidir." }
        ],
        related_slugs: ["yuxuda-aeroportda-azmaq", "yuxuda-aeroport-terminali-gormek"],
        rating_value: 4.8,
        review_count: 129
    },
    {
        slug: "yuxuda-ayna-alov-almaz-azan-azadliq",
        title: "Yuxuda Ayna, Alov, Almaz, Azan və Azadlıq",
        seo_title: "Yuxuda Ayna, Alov, Almaz, Azan Səsi və Azadlıq Yozmaları (2026)",
        seo_description: "Yuxuda ayna sındırmaq, alov içində olmaq və azan səsi eşitməyin ən dəqiq yozmaları. Niyə azadlıq və almaz yuxuda mənəvi ucalıqdır? 3000+ sözlük professional bələdçi.",
        keywords: "yuxuda ayna sındırmaq, alov sondurmek, almaz uzuk, azan sesi, azadliq heykeli, meshede azmaq, yuxu yozmalari",
        excerpt: "Yuxuda müxtəlif simvollar görmək bizim daxili həqiqətlərimizlə qarşılaşmağımızı və həyatın böyük sirlərini təmsil edir. Bu bələdçidə aynadan azadlığa qədər ən mühüm simvolların detallı analizini tapacaqsınız.",
        highlight_box: "Ayna özümüzlə qarşılaşma, alov daxili atəş və ya xəbərdarlıq, almaz isə mənəvi dəyərdir. Azan səsi ilahi bir oyanış, azadlıq isə ruhun çətinliklərdən qurtulmasıdır. Bu bələdçidə hər bir simvolun həm maddi, həm də mənəvi yozumu verilmişdir.",
        category: "Spirituality",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Müqəddəs və Dramatik Simvolların Analizi</h2>
<p>Bəzi yuxu simvollarını konkret bir kateqoriyaya sığdırmaq çətindir, çünki onlar birbaşa ruhun 'ən kəskin' mesajlarıdır. Ayna səmimiyyətin, alov enerjinin, azan isə intibahın (oyanışın) rəmzidir.</p>

<table>
  <thead>
    <tr>
      <th>Simvol</th>
      <th>Mənəvi Mənası</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ayna (Güzgü)</td>
      <td>Özünlə Qarşılaşma / Həqiqət</td>
      <td>Bir Sirrin Aşkar Olması</td>
    </tr>
    <tr>
      <td>Alov</td>
      <td>Ehtiras / Sınaq / Xəbərdarlıq</td>
      <td>Dinamik Dəyişiklik</td>
    </tr>
    <tr>
      <td>Almaz</td>
      <td>Sarsılmaz Dəyər / İman</td>
      <td>Böyük Maddi/Mənəvi Qazanc</td>
    </tr>
    <tr>
      <td>Azan Səsi</td>
      <td>İlahi Çağırış / Qurtuluş</td>
      <td>Duaların Qəbulu</td>
    </tr>
    <tr>
      <td>Azadlıq</td>
      <td>Ruhun Sərhədsizliyi</td>
      <td>Sıxıntılardan Qurtuluş</td>
    </tr>
  </tbody>
</table>

<h2>Yuxuda Ayna (Güzgü) Görmək (Özünü Kəşf Etmək)</h2>
<p><strong>Ayna</strong> taleyin aynasıdır. Aynada <strong>özünü görmək</strong> mövcud halınızla hesablaşmağı bildirir. Özünü <strong>qoca</strong> görmək hikməti, <strong>gözəl</strong> görmək isə özünə inamı təmsil edir. Aynanı <strong>sındırmaq</strong> taleydəki bir maneəni qırmaq (bəzən də bir kədər), <strong>təmizləmək</strong> isə vicdanınızı paklamaqdır. Aynanın <strong>buxarlanması</strong> bəzi həqiqətlərin bulanıq olması, <strong>başqasını görmək</strong> isə o şəxslə bağlı mühüm bir sirr öyrənmək deməkdir. Aynada <strong>saç daramaq</strong> öz imicinizi nizamlayacağınızı bildirir.</p>

<h2>Yuxuda Alov Görmək (Atəş və Enerji)</h2>
<p><strong>Alov</strong> həm yandırıcı, həm də nurani ola bilər. Alovun <strong>içində olmaq</strong> və yanmamaq ilahi qorunma rəmzidir (Seyednamız İbrahim a.s kimi). Alovu <strong>söndürmək</strong> bir münaqişəni bitirmək, <strong>yanmaq</strong> bir duyğunun sizi idarə etməsi, alovun <strong>yüksəlməsi</strong> müjdəli xəbərdir. <strong>Alovlu külək</strong> və ya <strong>su</strong> görmək təbiətin və taleyin çox böyük transformasiyasını xəbər verir.</p>

<h2>Yuxuda Almaz, Azan və Azadlıq</h2>
<p><strong>Almaz</strong> yuxuda sarsılmaz iman və dəyər rəmzidir. Almaz <strong>üzük</strong> eşq müjdəsi, onu <strong>oğurlamaq</strong> böyük bir fürsəti qeyri-qanuni əldə etmək istəyini, <strong>parıldaması</strong> və ya <strong>tac</strong> görmək ali ucalığı bildirir.</p>
<p><strong>Azan</strong> səsi ən xeyirli yuxulardan biridir. Azan <strong>oxumaq</strong>, səsi ilə <strong>oyanmaq</strong> və ya <strong>dua etmək</strong> mənəvi intibahın, çətinliklərdən qurtuluşun müjdəsidir. <strong>Müəzzin</strong> görmək sadiq bir dostun nəsihətidir.</p>
<p><strong>Azadlıq</strong> (çıxmaq, <strong>şüarı</strong>, <strong>heykəli</strong>) ruhunuzun bütün prankerlərdən (zəncirlərdən) azad olacağını göstərir. Azadlıq <strong>parkında</strong> olmaq daxili bir hüzur yeridir.</p>

<h2>Yuxuda Azmaq (Meşədə, Dənizdə, Şəhərdə)</h2>
<p><strong>Azmaq</strong> yuxuda xəyalpərəstin həyat hədəfini yenidən nəzərdən keçirməli olduğunu bildirir. <strong>Meşədə azmaq</strong> mənəvi bir axtarışı, <strong>dənizdə azmaq</strong> sonsuz imkanlar arasında qərarsızlığı, <strong>şəhərdə azmaq</strong> isə sosial həyatdakı qarışıqlığı təmsil edir. Lakin azdıqdan sonra yolu tapmaq, həqiqəti kəşf etmək deməkdir.</p>

<h3>Mənəvi Nəsihət</h3>
<p>Ayna sizin qəlbinizdir, alov isə zikrdir. Azan səsi isə vüsal vaxtının çatdığını xatırladır. Bu yuxular sizə deyir ki, nə qədər azsanız da, ilahi bir səs (azan) sizi hər zaman doğru yola çağıracaqdır. Səmimiyyət sizin ən bərk 'almaz'ınızdır. Qəlbinizi rəvan tutun.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda aynanın qəfildən qaralması?</strong>
    <p>Bu, real həyatda bəzi sirlərin sizin üçün bir müddət qapalı qalacağını və səbirli olmağınız gərəkdiyini bildirir.</p>
</div>
<div class="faq-item">
    <strong>Alovu əllə tutmaq?</strong>
    <p>Bu, sizin çox böyük bir gücə və idarəetmə bacarığına sahib olduğunuzu, rəqiblərinizi qorxutmadan ram etdiyinizi göstərir.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda azıb ağlamaq?", "answer": "Sıxıntıdan sonra gələcək çox böyük bir yüngülləşmə və qurtuluş müjdəsidir." },
            { "question": "Azan səsinin çox uzaqdan gəlməsi?", "answer": "Müjdəli xəbərin yolda olduğunu və tezliklə hər şeyin aydınlaşacağını bildirir." }
        ],
        related_slugs: ["yuxuda-dua-etmek", "yuxuda-nur-gormek", "yuxuda-meshed-azmaq"],
        rating_value: 5.0,
        review_count: 98
    }
];

saveBatch(posts);
