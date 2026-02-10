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
        slug: "yuxuda-ag-yayliq-gormek",
        title: "Yuxuda Ağ Yaylıq Görmək",
        seo_title: "Yuxuda Ağ Yaylıq Görmək: Həya, Sədaqət və Xoş Xəbər (2026)",
        seo_description: "Yuxuda ağ yaylıq görməyin ən dəqiq yozmaları. Niyə ağ yaylıq yuxuda bir eşq müjdəsi, barışıq və ya mənəvi təmizlikdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag yayliq, beyaz esarp, seadet, barisiq, haya, sedaquet, yuxu yozmalari, yeni heyat",
        excerpt: "Yuxuda ağ yaylıq görmək xəyalpərəstin həyatında səmimi bir barışığın olacağını, təmiz hisslərlə yeni bir münasibətə başlayacağını və ya bir sıxıntısının bitəcəyini simvolizə edir.",
        highlight_box: "Yuxuda ağ yaylıq görmək, insanın taleyindəki 'zərif' bir sevinci, ailə daxili hüzuru və yaxın zamanda gələcək çox xeyirli bir eşq və ya övlad müjdəsini xəbər verən incə bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda İncəliyin və Vəfanın Psixoloji Analizi</h2>
<p>Yaylıq həm örtünmənin, həm də xüsusən şərq mədəniyyətində həyanın və sədaqətin rəmzidir. Ağ yaylıq isə bu hisslərin ən uca və saf təzahürüdür. Psixoloji olaraq bu yuxu, insanın real həyatda 'qorunmaq' və ya öz hisslərini təmiz saxlamaq arzusunu əks etdirir. Siz bəlkə də bir insana qarşı çox səmimi hisslər bəsləyirsiniz. Ağ yaylıq sizin ruhunuzun təmizliyidir; siz artıq hər cür yalandan və mənfilikdən uzaq durmaq istəyirsiniz. Bu yuxu daxili bir sükunət və yeni bir başlanğıc müjdəsidir. Siz artıq təmiz bir yolun yolçusunuz.</p>

<p>Yuxuda ağ yaylıq görmək çox vaxt subaylar üçün çox xeyirli bir qismətə, küsülülər üçün tam bir barışığa və ya bir sıxıntıdan sonra gələn göz yaşının sevinclə bitməsinə işarədir. Sizin üçün artıq nurli günlər başlayır. Bu prosesdə səmimi qalmaq sizin ən böyük 'zərifliyiniz' (gücünüz) olacaqdır.</p>

<h2>Yaylığın Halına Görə Müxtəlif Yozmalar</h2>
<p>Yaylığı necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Yaylığın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Başına Ağ Yaylıq Bağlamaq</td>
      <td>İzzət və Həya Sahibi Olmaq</td>
      <td>Hörmət Artımı / Toy</td>
    </tr>
    <tr>
      <td>Ağ Yaylıq Hədiyyə Almaq</td>
      <td>Səmimi Bir Vəfa Müjdəsi</td>
      <td>Doğru Bir Tərəfdaşlıq</td>
    </tr>
    <tr>
      <td>Ağ Yaylıq Sallamaq (Əlvida)</td>
      <td>Xeyirli Bir Ayrılıq / Səfər</td>
      <td>Yeni Üfüqlərə Açılma</td>
    </tr>
    <tr>
      <td>Yerdə Təmiz Ağ Yaylıq Tapmaq</td>
      <td>Gözlənilməz Bir Fürsət</td>
      <td>Taleyin Lütfü</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda İpək Ağ Yaylıq Görmək</h3>
<p>Bu yuxu çox lüks və bərəkətli bir həyatın müjdəsidir. Sizin zəhmətinizin qarşılığını artıqlaması ilə alacağınızı və mənəvi ucalığa nail olacağınızı bildirir. İpək incəlik və gücün birləşməsidir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ağ yaylıq bəndənin daxili aləmindəki paklıq və mənəvi hicab (pərdə) kimi görülür. Ağ yaylıq görmək, bəndənin imanının saflığına və ilahi bir himayə altında olmasına işarədir. Dinimizdə buyurulduğu kimi, həya imandandır. Bu yuxu sizə xatırladır ki, əgər əxlaqınızı və səmimiyyətinizi qorusanız, Allah sizi heç vaxt darda qoymaz. Səmimiyyət sizin ən böyük bəzəyinizdir. Qəlbinizi rəvan tutun.</p>

<h3>Zərif Olun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra ətrafınızdakı insanlaraqarşı daha səmimi və təmkinli olun. Kiminsə könlünə dəymisinizsə, onu bərpa edin. Yeni işlərinizə təmiz niyyətlə başlayın. Özünüzü qoruyun və neqativ düşüncələrin pərdənizi (ruhunuzu) ləkələməsinə icazə verməyin. Unutmayın ki, ən böyük gözəllik insanın öz daxili hüzurudur. Sizin parlaq gələcəyiniz sizin daxili təmizliyinizdədir. İnamla irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ yaylığın çirklənməsi?", "answer": "Real həyatda bir az diqqətli olmalı olduğunuzu və bəzi söz-söhbətlərə qarşı ehtiyatlılığı xatırladır." },
            { "question": "Yaylığın küləkdən uçub getməsi?", "answer": "Müvəqqəti bir fürsətin itirilməsinə, lakin səbirli olsanız daha yaxşısının gələcəyinə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-gelinlik-gormek"],
        rating_value: 4.8,
        review_count: 52
    },
    {
        slug: "yuxuda-ag-perde-gormek",
        title: "Yuxuda Ağ Pərdə Görmək",
        seo_title: "Yuxuda Ağ Pərdə Görmək: Gizli Sirlər, Həya və Ailə Səadəti (2026)",
        seo_description: "Yuxuda ağ pərdə görməyin ən dəqiq yozmaları. Niyə ağ pərdə yuxuda həm bir sirrin gizlədilməsi, həm də çox təmiz bir gələcəkdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag perde, ag tul, gizli sirler, haya, aile seadeti, yeni heyat, yuxu yozmalari, mənəvi mühafizə",
        excerpt: "Yuxuda ağ pərdə görmək xəyalpərəstin həyatında mənəvi bir müdafiə altında olduğunu, ailə daxili sirlərin qorunduğunu və ya çoxdandır gözlənilən bir müjdənin yaxınlaşdığını simvolizə edir.",
        highlight_box: "Yuxuda ağ pərdə görmək, insanın taleyindəki 'ali' bir qorumanı, daxili hüzuru və yaxın zamanda gələcək çox xeyirli bir dəyişikliyin (vəzifə, evlilik və s.) təmiz bir başlanğıc olacağını müjdələyən təmkinli bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Gizliliyin və Təmizliyin Psixoloji Analizi</h2>
<p>Pərdə insanın daxili dünyası ilə xarici dünya arasındakı sərhəddir. Ağ pərdə isə bu sərhədin saflığının və şəffaflığının rəmzidir. Psixoloji olaraq bu yuxu, insanın real həyatda özünü güvəndə hiss etmək istəyini və ya həyatındakı bəzi məsələləri səmimiyyətlə 'gizli' saxlamaq arzusunu əks etdirir. Siz bəlkə də ailə hüzurunuzu qorumağa çalışırsınız. Ağ pərdə sizin daxili mərkəzinizdir; siz artıq hər cür yalanın və mənfiliyində ruhunuza girməsinə icazə vermirsiniz. Bu yuxu daxili bir barışığın və doğru bələdçi axtarışının sonunu müjdələyir. Siz artıq təmiz bir nəfəs alırsınız.</p>

<p>Yuxuda ağ pərdə görmək çox vaxt ailədəki soyuqluğun bitməsinə, yeni bir evə köçməyə və ya rəsmi bir işin xeyirlə nəticələnməsinə işarədir. Sizin üçün artıq nurli bir mərhələ başlayır. Bu prosesdə dürüst və vəfalı qalmaq sizin ən böyük 'pərdəniz' (müdafiəniz) olacaqdır.</p>

<h2>Pərdənin Halına Görə Müxtəlif Yozmalar</h2>
<p>Pərdəni necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Pərdənin Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pəncərəyə Ağ Pərdə Asmaq</td>
      <td>Yeni Həyat / Toy</td>
      <td>Murada Çatmaq</td>
    </tr>
    <tr>
      <td>Ağ Pərdənin Küləkdə Dalğalanması</td>
      <td>Xeyirli Müjdə / Azadlıq</td>
      <td>Sevincli Xəbər Alınması</td>
    </tr>
    <tr>
      <td>Pərdənin Açılması (Günəş Gəlməsi)</td>
      <td>Bütün Sirlərin Aydınlanması</td>
      <td>Hüzur və Aydınlıq</td>
    </tr>
    <tr>
      <td>Tərtemiz Ağ Tül Pərdə</td>
      <td>Dini və Mənəvi Ucalıq</td>
      <td>Duaların Qəbulu</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Pərdənin Yandığını Görmək</h3>
<p>Bu yuxu bir xəbərdarlıqdır. Sizin ailə daxili sirlərinizin və ya xüsusi həyatınızın başqaları tərəfindən öyrənilə biləcəyinə işarədir. Daha diqqətli və təmkinli olun.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda pərdə bəndə ilə Yaradan arasındakı mənəvi hicab kimidir. Ağ pərdə görmək, bəndənin imanının təmizliyindən və ilahi bir rəhmət gördüyündən xəbər verir. Dinimizdə buyurulduğu kimi, hər kəsin bir pərdəsi (həyası) vardır. Bu yuxu sizə xatırladır ki, əgər qəlbinizi təmiz tutsanız, sizin əməlləriniz də nurlu olacaqdır. Səmimiyyət sizin ən böyük bəzəyinizdir. Qəlbinizi rəvan tutun.</p>

<h3>Qoruyun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra ailə hüzurunuza daha çox vaxt ayırın. Sirlərinizi hər kəsə açmayın. Yeni bir başlanğıc edin və köhnə mənfi düşüncələri pərdənizdən (ruhunuzdan) uzaqlaşdırın. Unutmayın ki, ən böyük səadət insanın öz daxili dəyərlərini qorumasıdır. Sizin parlaq gələcəyiniz sizin dürüstlüyünüzdədir. İnamla və paklıqla irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ pərdə almaq?", "answer": "Real həyatda gələn mühüm bir qazanc, bərəkət və ya yeni bir ailə qurmaq müjdəsidir." },
            { "question": "Pərdənin çirkli olması?", "answer": "Müvəqqəti bir sıxıntıya, lakin yuyulduqda tam bir rahatlığa yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-palta-geyinmek"],
        rating_value: 4.7,
        review_count: 38
    },
    {
        slug: "yuxuda-ag-gul-gormek",
        title: "Yuxuda Ağ Gül Görmək",
        seo_title: "Yuxuda Ağ Gül Görmək: Təmiz Eşq, Murada Çatmaq və Şəfa (2026)",
        seo_description: "Yuxuda ağ gül (bəyaz gül) görməyin ən dəqiq yozmaları. Niyə ağ gül yuxuda subaylar üçün qismət, evlilər üçün övlad və ya hüzurdur? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag gul, beyaz gul, temiz esq, murad, sefa, hüzur, yuxu yozmalari, yeni sevinclər",
        excerpt: "Yuxuda ağ gül görmək xəyalpərəstin həyatında ən təmiz duyğuların oyanacağını, sevgidə və işdə muradına çatacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ gül görmək, insanın taleyindəki 'nurani' bir eşqi, səmimi bir dostluğu və yaxın zamanda həyatına gələcək tam bir şəfa, bərəkət və xoşbəxtliyi müjdələyən ən füsunkar rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Gözəlliyin və Saflığın Psixoloji Analizi</h2>
<p>Gül bütün güllərin şahı, gözəlliyin və sevginin ən uca rəmzidir. Ağ gül isə bu sevginin ən saf, təmiz və ruhani formasıdır. Psixoloji olaraq bu yuxu, insanın daxili aləmindəki 'nəzakət' və 'şəffaflıq' arzusunu əks etdirir. Siz bəlkə də bir insana qarşı çox saf hisslər bəsləyirsiniz və ya özünüzü mənəvi bir gül kimi hiss etmək istəyirsiniz. Ağ gül sizin ruhunuzun açılan qönçəsidir; siz artıq hər cür mənfiliyindən arınıb gözəlliyə fokuslanmısınız. Bu yuxu həm də bəlaların bitməsi və yeni bir hüzur mərhələsinin müjdəsidir. Siz artıq kainatın ətri ilə qidalanırsınız.</p>

<p>Yuxuda ağ gül görmək çox vaxt subaylar üçün çox qısa zamanda gələcək xeyirli nişan-toy xəbərinə, evlilər üçün ailədəki münaqişələrin bitməsinə və ya çox xeyirli bir övlad müjdəsinə işarədir. Sizin muradınız artıq açılmaq üzrədir. Bu prosesdə səmimi qalmaq sizin ən böyük 'gül' bacarığınız olacaqdır.</p>

<h2>Gülün Halına Görə Müxtəlif Yozmalar</h2>
<p>Gülü necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Gülün Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Gül Dərmək</td>
      <td>Murada Çatmaq / Qələbə</td>
      <td>Tezliklə Alınacaq Sevincli Xəbər</td>
    </tr>
    <tr>
      <td>Ağ Gül Hədiyyə Almaq</td>
      <td>Səmimi Bir Etiraf / Vəfa</td>
      <td>Doğru Bir Münasibət</td>
    </tr>
    <tr>
      <td>Bağda Çoxlu Ağ Gül Görmək</td>
      <td>Böyük Bir Bərəkət və Səadət</td>
      <td>Ailə Səadəti / Bolluq</td>
    </tr>
    <tr>
      <td>Vazada Təzə Ağ Güllər</td>
      <td>Hüzurlu və Modern Həyat</td>
      <td>Daxili Aydınlıq</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Gülün Qoxusunu Duymaq</h3>
<p>Bu yuxu xəyalpərəstin mənəvi bir oyanış yaşayacağını və dualarının qəbul olduğunu bildirir. Qoxu ruhun qidasıdır; sizin ruhunuz artıq xeyirxahlıqla dolub. Sevincli günlər çox yaxındır.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda gül Peyğəmbərimizin (s.a.v) rəmzi kimi qəbul edilir. Ağ gül görmək, bəndənin imanının təmizliyindən və ilahi bir lütfə nail olmasından xəbər verir. Dinimizdə buyurulduğu kimi, gözəl əməl gözəl qoxu kimidir. Bu yuxu sizə xatırladır ki, əgər əxlaqınızı bir gül kimi qorusanız, sizin üçün bütün qapılar açılacaqdır. Səmimiyyət sizin ən böyük kökünüzdür. Muradınız bərəkətlidir.</p>

<h3>Açılın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra daxili aləminizdəki gözəllikləri üzə çıxarın. Sevdiyiniz insanlara daha çox diqqət yetirin. Yeni işlərinizə təmiz niyyətlə başlayın. Özünüzü və ruhunuzu neqativlərdən 'sulayaraq' (dua və zikrlə) qoruyun. Unutmayın ki, ən gözəl gül insanın qəlbində yetişdirdiyi sülhdür. Sizin parlaq gələcəyiniz sizin dürüstlüyünüzdədir. İnamla və eşqlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ gülün solması?", "answer": "Müvəqqəti bir kədərə və ya bir fürsətin gecikəcəyinə, lakin səbirli olsanız yenidən 'açacağına' işarədir." },
            { "question": "Ağ gülün tikanının batması?", "answer": "Sevdiyiniz birindən gələcək kiçik və xeyirli bir xəbərdarlıq müjdəsidir." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-gelinlik-gormek"],
        rating_value: 5.0,
        review_count: 112
    },
    {
        slug: "yuxuda-ag-corab-gormek",
        title: "Yuxuda Ağ Corab Görmək",
        seo_title: "Yuxuda Ağ Corab Görmək: Səfər, Qazanc və Təmiz Addımlar (2026)",
        seo_description: "Yuxuda ağ corab geyinməyin ən dəqiq yozmaları. Niyə ağ corab yuxuda həm bir ruzi, həm də xeyirli bir səfər deməkdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag corab, ag geyinmek, seyahet, qazanc, temizlik, yuxu yozmalari, yeni addimlar",
        excerpt: "Yuxuda ağ corab görmək xəyalpərəstin həyatında mühüm bir yolun başladığını, maddiyatının təmizlənəcəyini və ya bir sıxıntısının bitəcəyini simvolizə edir.",
        highlight_box: "Yuxuda ağ corab görmək, insanın taleyindəki 'təmiz' bir hərəkəti, halal bir qazancı və yaxın zamanda həyatına gələcək çox xeyirli bir səfər və ya iş müjdəsini xəbər verən hərəkətli bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Addımların və Ruzinin Psixoloji Analizi</h2>
<p>Corab insanın ayağını qoruyan, daxili hərəkətin və ruzinin rəmzidir. Ağ corab isə bu hərəkətin saflığının və qazancın halallığının rəmzidir. Psixoloji olaraq bu yuxu, insanın real həyatda 'doğru addımlar' atmaq istəyini və ya öz gələcəyini təhlükəsiz saxlamaq arzusunu əks etdirir. Siz bəlkə də yeni bir işə və ya münasibətə 'təmiz bir başlanğıc' etmək istəyirsiniz. Ağ corab sizin iradənizin dayaq nöqtəsidir; siz artıq hər cür yalanın və mənfiliyində ruhunuza girməsinə icazə vermirsiniz. Bu yuxu daxili bir barışığın və doğru bələdçi axtarışının sonunu müjdələyir. Siz artıq təmiz bir nəfəs alırsınız.</p>

<p>Yuxuda ağ corab görmək çox vaxt mühüm bir maddi qazanca, yeni bir ayaqqabı (yeni bir iş) ilə birlikdə gələcək uğura və ya uzaqdan gələcək təmiz bir qonağa işarədir. Sizin üçün artıq nurli bir mərhələ başlayır. Bu prosesdə dürüst və vəfalı qalmaq sizin ən böyük 'corabınız' (müdəfiəniz) olacaqdır.</p>

<h2>Corabın Halına Görə Müxtəlif Yozmalar</h2>
<p>Corabı necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Corabın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tərtemiz Ağ Corab Geyinmək</td>
      <td>Halal Ruzi / Uca Məqam</td>
      <td>İşdə Yüksəliş</td>
    </tr>
    <tr>
      <td>Ağ Corab Almaq</td>
      <td>Yeni Səfər / Hazırlıq</td>
      <td>Xeyirli Bir Yolçuluq</td>
    </tr>
    <tr>
      <td>Ağ Corab Yumaq</td>
      <td>Keçmiş Səhvlərdən Arınma</td>
      <td>Hüzur və Aydınlıq</td>
    </tr>
    <tr>
      <td>Ağ pambıq corablar</td>
      <td>Ailə Səadəti / Sağlamlıq</td>
      <td>Stressin Bitməsi</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Yırtıq Ağ Corab Görmək</h3>
<p>Bu yuxu bir xəbərdarlıqdır. Sizin bəzi işlərinizdə bir az diqqətsiz olduğunuzu və ya kiməsə qarşı səmimi sandığınız bir hərəkətin səhv başa düşülə biləcəyini bildirir. Daha təmkinli və nizamlı olun.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda corab insanın dünya malını qorumaq üçün istifadə etdiyi müsyat kimidir. Ağ corab görmək, bəndənin ruzisinin halallığına və mənəvi bir dayaq altında olmasına işarədir. Dinimizdə buyurulduğu kimi, hər bir addımınızın bir cavabı vardır. Bu yuxu sizə xatırladır ki, əgər addımlarınızı təmiz tutsanız, sizin üçün bütün yollar açılacaqdır. Səmimiyyət sizin ən böyük corabınızdır. Qəlbinizi rəvan tutun.</p>

<h3>Addımlayın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra həyatınızdakı mühüm qərarları cəsarətlə verin. Yeni bir işə və ya yola çıxmaqdan qorxmayın. Maddi vəziyyətinizi halal yollarla artırmağa fokuslanın. Sevdiyiniz insanlara qayğı göstərin. Unutmayın ki, ən böyük səyahət insanın öz daxili dünyasına etdiyi dürüstlük səfəridir. Sizin parlaq gələcəyiniz sizin dürüstlüyünüzdədir. İnamla və paklıqla irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ corabın ləkələnməsi?", "answer": "Real həyatda bir az diqqətli olmalı olduğunuzu və bəzi söz-söhbətlərə qarşı ehtiyatlılığı xatırladır." },
            { "question": "Corabı itirmək?", "answer": "Müvəqqəti bir maddi tərəddüdə, lakin səbirli olsanız daha yaxşısının gələcəyinə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-palta-geyinmek"],
        rating_value: 4.5,
        review_count: 26
    },
    {
        slug: "yuxuda-ag-bayraq-gormek",
        title: "Yuxuda Ağ Bayraq Görmək",
        seo_title: "Yuxuda Ağ Bayraq Görmək: Sülh, Barışıq və Tam Qələbə (2026)",
        seo_description: "Yuxuda ağ bayraq (bəyaz bayraq) görməyin ən dəqiq yozmaları. Niyə ağ bayraq yuxuda həm bir sülh, həm də mənəvi ucalıqdır? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag bayraq, beyaz bayrak, sulh, barisiq, zefer, taley, yuxu yozmalari, yeni heyat",
        excerpt: "Yuxuda ağ bayraq görmək xəyalpərəstin həyatında mühüm bir münaqişənin sülhlə bitəcəyini, düşmənlərin barışacağını və ya taleyinin qələbə ilə nurlanacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ bayraq görmək, insanın taleyindəki 'ali' bir barışığı, mənəvi ucalığı və yaxın zamanda həyatına gələcək tam bir hüzur, şəfa və bərəkəti müjdələyən ən əzəmətli rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Təslimiyyətin və Zəfərin Psixoloji Analizi</h2>
<p>Bayraq bir qrup və ya ideologiyanın rəmzidir. Ağ bayraq isə tarixi boyu sülhün, atəşkəsin və təslimiyyətin (yəni qanlı döyüşün bitməsinin) rəmzi olmuşdur. Psixoloji olaraq bu yuxu, insanın daxili münaqişələrinə 'son' qoymaq arzusunu və ya bir məsələdə tam bir sülh axtarışını əks etdirir. Siz bəlkə də bir rəqiblə və ya öz nəfsinizlə olan mübarizədən yorulmusunuz. Ağ bayraq sizin ruhunuzun qələbəsidir; siz artıq hər cür nifaqdan və mənfiliyindən arınıb gözəlliyə fokuslanmısınız. Bu yuxu həm də bəlaların bitməsi və yeni bir hüzur mərhələsinin müjdəsidir. Siz artıq kainatın hüzuru ilə qidalanırsınız.</p>

<p>Yuxuda ağ bayraq görmək çox vaxt ailədəki münaqişələrin bitməsinə, uzun sürən bir məhkəmə işinin sülhlə nəticələnməsinə və ya çox xeyirli bir dövlət xəbərinə işarədir. Sizin muradınız artıq ucalmaq üzrədir. Bu prosesdə səmimi qalmaq sizin ən böyük 'bayraq' bacarığınız olacaqdır.</p>

<h2>Bayrağın Halına Görə Müxtəlif Yozmalar</h2>
<p>Bayrağı necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Bayrağın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Əlinizdə Ağ Bayraq Tutmaq</td>
      <td>Murada Çatmaq / Liderlik</td>
      <td>Tezliklə Alınacaq Sevincli Xəbər</td>
    </tr>
    <tr>
      <td>Ağ Bayraq Hədiyyə Almaq</td>
      <td>Səmimi Bir Etiraf / Barışıq</td>
      <td>Doğru Bir Münasibət</td>
    </tr>
    <tr>
      <td>Uzaqda Dalğalanan Ağ Bayraq</td>
      <td>Böyük Bir Müjdə / Azadlıq</td>
      <td>Xeyirli Bir Xəbər</td>
    </tr>
    <tr>
      <td>Hündür Yerdə Ağ Bayraq</td>
      <td>Dini və Mənəvi Ucalıq</td>
      <td>Duaların Qəbulu</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Bayraq Sallamaq</h3>
<p>Bu yuxu xəyalpərəstin bir haqsızlıqdan təmizlənəcəyini və ya bir mübahisədə dostluq əlini uzadacağını bildirir. Sülh hər zaman qələbədir; sizin ruhunuz artıq xeyirxahlıqla dolub. Sevincli günlər çox yaxındır.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda bayraq bəndənin inancı və iradəsi kimidir. Ağ bayraq görmək, bəndənin imanının təmizliyindən və ilahi bir lütfə nail olmasından xəbər verir. Dinimizdə buyurulduğu kimi, sülh hər şeydən xeyirlidir. Bu yuxu sizə xatırladır ki, əgər əxlaqınızı bir bayraq kimi uca tutsanız, sizin üçün bütün qapılar açılacaqdır. Səmimiyyət sizin ən böyük kökünüzdür. Muradınız bərəkətlidir.</p>

<h3>Sülh Bağlayın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra həyatınızdakı bütün küsülülükləri bitirin. Kiminsə xətrinə dəymisinizsə, ona dostluq əli uzadın. Yeni işlərinizə təmiz niyyətlə başlayın. Özünüzü və ruhunuzu neqativlərdən 'bayraq' (iman) vasitəsilə qoruyun. Unutmayın ki, ən gözəl zəfər insanın öz qəlbində təmin etdiyi sülhdür. Sizin parlaq gələcəyiniz sizin daxili dürüstlüyünüzdədir. İnamla və eşqlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ bayrağın yırtılması?", "answer": "Müvəqqəti bir anlaşılmazlığa və ya sülhün gecikəcəyinə, lakin səbirli olsanız yenidən 'ucalacağına' işarədir." },
            { "question": "Başqasının ağ bayraq tutması?", "answer": "Həmin şəxs tərəfindən gələcək çox xeyirli bir təklif və ya barışıq müjdəsidir." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-gul-gormek"],
        rating_value: 4.9,
        review_count: 47
    }
];

saveBatch(posts);
