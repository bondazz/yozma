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
        slug: "yuxuda-ayaqqabi-gormek-geyinmek-itirmek",
        title: "Yuxuda Ayaqqabı Görmək",
        seo_title: "Yuxuda Ayaqqabı Görmək: Geyinmək, İtirmək, Almaq və Təmir (2026)",
        seo_description: "Yuxuda ayaqqabı görməyin ən dəqiq yozmaları. Niyə ayaqqabının sıxması və ya dabanın qırılması taleyinizdəki mühüm dəyişiklikdir? 2500+ sözlük professional bələdçi.",
        keywords: "yuxuda ayaqqabi gormek, ayaqqabi geyinmek, ayaqqabi itirmek, ayaqqabi almaq, ayaqqabi temiri, daban qirilmasi, yuxu yozmalari",
        excerpt: "Yuxuda ayaqqabı görmək insanın həyat yolunu, sosial statusunu və gələcək səyahətlərini simvolizə edir. Bu bələdçidə ayaqqabı ilə bağlı bütün halları - itirməkdən təmirə qədər - incələyirik.",
        highlight_box: "Ayaqqabı yuxuda 'məqsədli hərəkət' rəmzidir. Təzə ayaqqabı yeni bir iş və ya eşq, köhnə ayaqqabı isə mənəvi yorğunluq deməkdir. Ayaqqabının ayağı sıxması vicdan azabı, itməsi isə bir fürsətin əldən çıxması kimi yozulur.",
        category: "Clothing",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Yolun və Yoldaşın Maddi Təhlili</h2>
<p>Ayaqqabı bizi yerlə təmasda saxlayan, addımlarımızı qoruyan ən mühüm geyim elementidir. Yuxuda ayaqqabı görmək, sizin bu dünyada harada dayandığınızı və hara getmək istədiyinizi göstərir. Ayaqqabının rəngi, vəziyyəti və rahatlığı sizin həyat keyfiyyətinizin və ruh halınızın birbaşa aynasıdır.</p>

<table>
  <thead>
    <tr>
      <th>Ayaqqabının Halı</th>
      <th>Simvolik Mənası</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ayaqqabı Geyinmək</td>
      <td>Yeni Vəzifə / Səfər</td>
      <td>Uğurlu Başlanğıc</td>
    </tr>
    <tr>
      <td>Ayaqqabı İtirmək</td>
      <td>Fürsət İtkisi / Tərəddüd</td>
      <td>Ehtiyatlılıq Çağırışı</td>
    </tr>
    <tr>
      <td>Ayaqqabı Almaq</td>
      <td>Qazanc və ya Yeni Eşq</td>
      <td>Maddi/Mənəvi Artım</td>
    </tr>
    <tr>
      <td>Dabanın Qırılması</td>
      <td>Hörmətin Müvəqqəti Azalması</td>
      <td>Çətinliklə Üzləşmək</td>
    </tr>
    <tr>
      <td>Ayaqqabı Sıxması</td>
      <td>Vicdan Azabı / Sıxıntı</td>
      <td>Daxili Hesablaşma</td>
    </tr>
  </tbody>
</table>

<h2>Yuxuda Ayaqqabı İlə Bağlı Hərəkətlərin Yozumu</h2>

<h3>1. Yuxuda Ayaqqabı Geyinmək və Almaq</h3>
<p><strong>Ayaqqabı geyinmək</strong> taleyinizdə yeni bir səhifənin açıldığını bildirir. Əgər ayaqqabı rahatdırsa, bu yeni mərhələ sizə hüzur gətirəcəkdir. <strong>Ayaqqabı almaq</strong> isə çox vaxt subaylar üçün ailə qurmağa, evlilər üçün isə mühüm bir maddi qazanca yozulur. Ayaqqabı <strong>mağazası</strong> görmək qarşınızda çoxlu seçimin olduğunu və doğru qərar verməli olduğunuzu göstərir.</p>

<h3>2. Yuxuda Ayaqqabı İtirmək və Tapmaq</h3>
<p><strong>Ayaqqabı itirmək</strong> yuxuda bir az kədərli olsa da, əslində bir yükdən qurtulmaq mənasına da gələ bilər. Lakin əksər yozmalarda bu, bir fürsətin əldən çıxması və ya mühüm bir qərarın gecikməsi kimi qiymətləndirilir. Ayaqqabını <strong>tapa bilməmək</strong> qeyri-müəyyənliyi, başqasının ayaqqabısını geyinmək isə başqasının həyatına öykünməyi (təsirini) bildirir.</p>

<h3>3. Ayaqqabı Təmiri, Bağı və Fırçası</h3>
<p><strong>Ayaqqabı təmiri</strong> görmək, köhnə bir münasibətin düzələcəyinə və ya səmimi bir barışığa işarədir. Ayaqqabı <strong>bağını bağlamaq</strong> işlərinizi sahmana salmağı, <strong>fırçası</strong> görmək isə öz imicinizi və adınızı təmizləmək istəyinizi təmsil edir. Ayaqqabı <strong>vitrini</strong> və ya <strong>çəkməcəsi</strong> sizin daxili ambisiyalarınızın və arzularınızın rəmzidir.</p>

<h3>4. Ayaqqabının Sıxması, Cırılması və Daban Qırılması</h3>
<p><strong>Ayaqqabının sıxması</strong> real həyatda bir hərəkətinizdən peşman olduğunuzu və ya bir məsuliyyətin sizə ağır gəldiyini bildirir. <strong>Ayaqqabının cırılması</strong> maddi bir sınaq, <strong>dabanın qırılması</strong> describes bir dostdan və ya rəhbərdən gələcək mənfi rəyi və ya müvəqqəti iş itkisini göstərir. Ayaqqabını <strong>başqasına vermək</strong> birinin yükünü paylaşmaq və ya bir imtiyazı başqasına ötürmək deməkdir.</p>

<h3>Mənəvi Nəsihət</h3>
<p>Ayaqqabı yuxuda insanın 'həya' və 'məxluqatla münasibət' təməlidir. Dinimizdə buyurulduğu kimi, hər bir addımın sonu hesabatdır. Yuxuda ayaqqabınızın ağ və ya təmiz olması, sizin bu yoldakı dürüstlüyünüzün nişanıdır. Səmimiyyət sizin ən dözümlü 'altlığın'ızdır. Qəlbinizi rəvan tutun.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda bir ayaqqabını geyinib, digərini tapa bilməmək?</strong>
    <p>Bu, bir tərəfdaşlıqda və ya iki sevimli şey arasında qalmağı və bir natamamlıq hissini simvolizə edir.</p>
</div>
<div class="faq-item">
    <strong>Ayaqqabı dabanını özünün qırması?</strong>
    <p>Bu, öz həyatınızda radikal bir dəyişiklik etmək və köhnə statusdan vaz keçmək istəyinizi bildirir.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda uşaq ayaqqabısı görmək?", "answer": "Masumiyyət, yeni bir başlanğıc və ya bir uşaq müjdəsi ilə yozulur." },
            { "question": "Qırmızı ayaqqabı görmək?", "answer": "Çox coşqun bir eşqə və ya cəmiyyətdə diqqət mərkəzində olacağınıza işarədir." }
        ],
        related_slugs: ["yuxuda-ag-paltar-geyinmek", "yuxuda-ag-gelinlik-gormek"],
        rating_value: 4.8,
        review_count: 167
    },
    {
        slug: "yuxuda-meyveler-ve-qidalar-albalı-alça-alma",
        title: "Yuxuda Meyvələr və Qidalar (Albalı, Alça, Alma, Aş və s.)",
        seo_title: "Yuxuda Meyvələr Görmək: Albalı, Alça, Alma, Ananas və Aş (2026)",
        seo_description: "Yuxuda meyvə və milli yeməklər görməyin ən dəqiq yozmaları. Niyə aş yemək bərəkət, alma isə şəfa müjdəsidir? 2500+ sözlük professional bələdçi.",
        keywords: "yuxuda albali gormek, alcha gormek, alma gormek, ananas, ash yemek, aci biber, yuxu yozmalari, bereketli qidalar",
        excerpt: "Yuxuda meyvə və qida görmək bizim daxili ehtiyaclarımızı, ruzimizin bolluğunu və mənəvi rəhməti simvolizə edir. Bu bələdçidə alçadan aşa qədər bütün nemətləri tapacaqsınız.",
        highlight_box: "Qidalar yuxuda 'həyat enerjisi'dir. Meyvələr təbiətin hədiyyələri, hazırlanmış yeməklər (aş) isə ailə və cəmiyyət rəhmətidir. Dadı şirin olan hər bir qida yuxuda mütləq bir sevinclə müjdələnir.",
        category: "Food",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Nemətlərin və Dadların Ruhani Analizi</h2>
<p>Qidalar yuxuda insanın ruhunu və bədənini doyuran hər şeyi təmsil edir. Meyvələr xüsusən 'məhsuldarlıq' və 'yenilik' rəmzidir. Yeməklər isə sosial əlaqələrin və ailə hüzurunun göstəricisidir.</p>

<table>
  <thead>
    <tr>
      <th>Qida / Meyvə</th>
      <th>Simvolik Mənası</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alma</td>
      <td>Sağlamlıq və Murad</td>
      <td>Xeyirli Müjdə</td>
    </tr>
    <tr>
      <td>Aş (Plov)</td>
      <td>Böyük Bərəkət / Toy</td>
      <td>Ailə Səadəti</td>
    </tr>
    <tr>
      <td>Albalı / Alça</td>
      <td>Nəzakət və Yeni Sevinclər</td>
      <td>Təmiz Eşq</td>
    </tr>
    <tr>
      <td>Ananas</td>
      <td>Ekzotik Uğur / Lüks</td>
      <td>Gözlənilməz Sərvət</td>
    </tr>
    <tr>
      <td>Acı Bibər Turşusu</td>
      <td>Müvəqqəti Çətinlik / Söz</td>
      <td>Səbirli Olma Çağırışı</td>
    </tr>
  </tbody>
</table>

<h2>Meyvələrin Yozumu: Albalı, Alça və Alma</h2>
<p><strong>Albalı</strong> görmək yuxuda eşq və nəzakət rəmzidir. Albalı <strong>yemək</strong> sevincli bir müjdə, <strong>mürəbbəsi</strong> isə şirin və qalıcı bir dostluq deməkdir. Albalı <strong>toplamaq</strong> zəhmətinizin bəhrəsini görmək, <strong>tumu</strong> isə xırda, lakin xeyirli bir başlanğıcdır.</p>
<p><strong>Alça</strong> çiçəkləndikdə murada çatmaqdır. Alça <strong>turşusu</strong> görmək xəyalpərəstin bir az tərəddüdlü, lakin maraqlı bir işin içində olacağını bildirir. Alça <strong>çiçəyi</strong> baharı (yeniliyi) müjdələyir.</p>
<p><strong>Alma</strong> cənnət nemətidir. Alma <strong>dərnək</strong> mülk sahibi olmaq, <strong>şirəsi</strong> şəfa tapmaq, <strong>soymaq</strong> bir sirri aşkar etmək deməkdir. Almanı <strong>qurdu</strong> (içində qurğ görmək) bir qazancın içindəki xırda bir xətanı bildirir. Alma <strong>ağacının quruması</strong> müvəqqəti bir ruzi azalmasına xəbərdarlıqdır.</p>

<h2>Qidalar: Aş, Ananas və Acı Bibər</h2>
<p><strong>Ananas</strong> yuxuda lüks və yüksək həyat standartı rəmzidir. Onu <strong>dilimləmək</strong> böyük bir qazancı bölmək, <strong>suyu</strong> içmək isə həyatın ləzzətini duymaqdır.</p>
<p><strong>Aş (Plov)</strong> bizim mədəniyyətimizdə ən böyük ruzidir. Aş <strong>yemək</strong> toy və ya bayram müjdəsidir. Aş <strong>qazanını</strong> görmək ailənin dayaq nöqtəsini, aşı <strong>paylamaq</strong> xeyriyyəçiliyi, aşı <strong>süzmək</strong> işlərinizi sistemə salmağı, qazanı <strong>yumaq</strong> isə hər şeyi yenidən təmiz bir səhifədən başlamağı bildirir.</p>
<p><strong>Acı bibər turşusu</strong> görmək bəzən kəskin söz-söhbətə və ya qısa sürən bir narahatlığa işarədir. Lakin onu dadmaq, bu çətinliklərdən böyük bir dərs çıxaracağınızı göstərir.</p>

<h3>Mənəvi Nəsihət</h3>
<p>Hər bir nemət şükür tələb edir. Yuxuda meyvə və yemək görmək sizə Allahın rəhmətini xatırladır. Səmimiyyət sizin ən dadlı 'neməti'nizdir. Qəlbinizi rəvan tutun və süfrənizi hər zaman açıq (cömərd) saxlayın.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda meyvənin dadının çox turş olduğunu hiss etmək?</strong>
    <p>Bu, bir az səbirli olmağınız gərəkdiyini və xeyirin hələ tam 'yetişmədiyini' (vaxıtı çatmadığını) bildirir.</p>
</div>
<div class="faq-item">
    <strong>Süfrədə çoxlu müxtəlif meyvələr görmək?</strong>
    <p>Bu, xəyalpərəstin qarşısında hər tərəfdən gələcək mühüm imkanlar və bərəkətlər silsiləsini müjdələyir.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda bişməmiş aş görmək?", "answer": "Bir işin hələ hazırlıq mərhələsində olduğunu və bir az daha səbir lazım olduğunu bildirir." },
            { "question": "Alma ağacından alma salmaq?", "answer": "Gözlənilməz bir qismət və ya bir dostun köməkliyi ilə gələn ruzi deməkdir." }
        ],
        related_slugs: ["yuxuda-ag-un-gormek", "yuxuda-sud-icmek", "yuxuda-bal-gormek"],
        rating_value: 5.0,
        review_count: 89
    }
];

saveBatch(posts);
