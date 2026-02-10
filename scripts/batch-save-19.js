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
        slug: "yuxuda-ag-heyvanlar-gormek",
        title: "Yuxuda Ağ Heyvanlar Görmək (Böyük Bələdçi)",
        seo_title: "Yuxuda Ağ Heyvanlar Görmək: Dovşan, Qoyun, İnək, Qurd və s. (2026)",
        seo_description: "Yuxuda ağ rəngli heyvanlar görməyin ən dəqiq və professional yozmaları. Niyə ağ heyvanlar yuxuda mənəvi ucalıq, bərəkət və sülhün rəmzidir? 2000+ sözlük bələdçi.",
        keywords: "yuxuda ag heyvanlar, ag dovshan, ag qoyun, ag inek, ag toyuq, ag kepenek, ag qartal, ag tulku, ag qurd, yuxu yozmalari",
        excerpt: "Yuxuda ağ heyvanlar görmək ümumilikdə mənəvi təmizlik, ilahi rəhmət və yaxınlaşan böyük bəxt müjdəsidir. Bu bələdçidə dovşandan qurda qədər bütün ağ heyvanların yozumunu tapacaqsınız.",
        highlight_box: "Ağ heyvanlar yuxuda 'saf enerji' rəmzidir. Rəngin ağ olması heyvanın vəhşi təbiətini mənəvi sülhə çevirir. Bu yuxular çox vaxt həyatınızdakı bir sınağın uğurla bitəcəyini və ya uzaqdan gələcək çox təmiz bir qazancı bildirir.",
        category: "Animals",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Ağ Heyvanların Ümumi Simvolikası</h2>
<p>Ağ rəng bütün rənglərin birləşməsi və saflığın son nöqtəsidir. Heyvanlar isə bizim instinktlərimiz, daxili qüvvələrimiz və ya ətrafımızdakı insanların xüsusiyyətləridir. Yuxuda bir heyvanı ağ rəngdə görmək, həmin instinktin və ya hadisənin 'təqdis' olunduğunu, yəni mənəvi bir lütfə çevrildiyini göstərir. Bu yuxular çox vaxt qorxuların bitməsi, qərarsızlığın hüzura çevrilməsi və həyatda doğru yolun tapılması deməkdir.</p>

<p>Bu böyük bələdçidə fərqli növ ağ heyvanların yozumlarını müqayisəli şəkildə təqdim edirik:</p>

<table>
  <thead>
    <tr>
      <th>Ağ Heyvan</th>
      <th>Əsas Mənası</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Dovşan</td>
      <td>Bəxt və Sürətli Xəbər</td>
      <td>Ailə Səadəti / Övlad</td>
    </tr>
    <tr>
      <td>Ağ Qoyun / Qoç</td>
      <td>Bərəkət və Halal Ruzi</td>
      <td>Böyük Maddi Qazanc</td>
    </tr>
    <tr>
      <td>Ağ İnək</td>
      <td>Bolluq və Ana Rəhməti</td>
      <td>Yeni Emlak / Zənginlik</td>
    </tr>
    <tr>
      <td>Ağ Qartal</td>
      <td>Zəfər və Ali Hakimiyyət</td>
      <td>Vəzifəyə Təyin Olunma</td>
    </tr>
    <tr>
      <td>Ağ Qurd</td>
      <td>Hikmət və Güclü Himayə</td>
      <td>Mənəvi Bələdçi / Qorunma</td>
    </tr>
  </tbody>
</table>

<h2>1. Yuxuda Ağ Dovşan Görmək</h2>
<p>Dovşan zəriflik və sürət rəmzidir. Yuxuda ağ dovşan görmək, taleyinizin sizə çox 'şirin' və gözlənilməz bir sürpriz hazırladığını bildirir. Bu yuxu həm də xeyirli bir övlad və ya ailə daxili kiçik, lakin çox xoş sevinclərə yozulur. Ağ dovşanı qucağınıza almaq, bəxtinizin artıq sizin əlinizdə olduğunu göstərir.</p>

<h2>2. Yuxuda Ağ Qoyun və ya Qoç Görmək</h2>
<p>Qoyun səmimiyyət və bərəkət rəmzidir. Ağ qoyun görmək, qazancınızın tamamilə halal yollarla artacağını və daxili hüzura qovuşacağınızı bildirir. Əgər ağ qoç görürsünüzsə, bu sizin iradənizin güclənəcəyini və bir rəqibə qarşı nəzakətlə qələbə çalacağınızı nişan verir.</p>

<h2>3. Yuxuda Ağ İnək Görmək</h2>
<p>İnək məhsuldarlıq və ruzi mənbəyidir. Ağ inək yuxuda 'bərəkətin anası' kimidir. Bu yuxunu görən şəxsin evi bolluqla dolar, borcları bitər və ailəsində mənəvi bir sülh hökm sürər. Süd verən ağ inək görmək, elmin və xeyrin davamlı olacağına işarədir.</p>

<h2>4. Yuxuda Ağ Toyuq Görmək</h2>
<p>Ağ toyuq xeyirli bir qadın xəbərinə və ya evin hüzuruna yozulur. Toyuğun yumurta qoyması isə davamlı gəlir və ya yeni bir işin başlanğıcı deməkdir. Ağ toyuq həm də daxili dünyanızdakı kiçik hədəflərin necə nurlu və bərəkətli olacağını göstərir.</p>

<h2>5. Yuxuda Ağ Kəpənək Görmək</h2>
<p>Kəpənək ruhun transformasiyası və müvəqqəti gözəllikdir. Ağ kəpənək görmək, mənəvi bir ucalığa, təmiz bir eşqə və ya ruhun bir vəziyyətdən digərinə (daha yaxşıya) keçməsini simvolizə edir. Bu yuxu sizə xəbər verir ki, kədərlər uçub gedəcək, yerinə isə rəngsiz (saf) bir sevinc gələcək.</p>

<h2>6. Yuxuda Ağ Sərçə və Ağ Qaranquş Görmək</h2>
<p>Bu kiçik quşlar ümidin elçiləridir. Ağ sərçə səmimi bir dostluğa, ağ qaranquş isə uzaqdan gələcək müsbət bir məktuba və ya müjdəyə yozulur. Baharın (yeniliyin) artıq qapınızda olduğunu bildirirlər.</p>

<h2>7. Yuxuda Ağ Qartal Görmək</h2>
<p>Qartal yüksəklik və güc rəmzidir. Ağ qartal görmək, sizin ən böyük hədəfinizə çatacağınızı və hamıdan uca bir məqama sahib olacağınızı bildirir. Bu, sadəcə maddi deyil, həm də mənəvi bir liderlik müjdəsidir. Sizin vizyonunuz artıq hər kəsi heyran edir.</p>

<h2>8. Yuxuda Ağ Tülkü Görmək</h2>
<p>Tülkü hiyləgərlik rəmzi olsa da, ağ tülkü bu zəkanın xeyir yolunda istifadə olunması və ya 'ağ yalanlardan' qorunma deməkdir. Bu yuxu sizə deyir ki, rəqibləriniz sizə zərər verə bilməyəcək, çünki sizin zəkanız onlardan daha nurlu və uzaqgörəndir.</p>

<h2>9. Yuxuda Ağ Qurd Görmək</h2>
<p>Qurd qoruyucu və hidayətverici bir rəmzdir. Ağ qurd görmək, mənəvi səyahətinizdə sizin üçün bir bələdçinin olduğunu və böyük bir güc tərəfindən himayə edildiyinizi bildirir. Bu yuxu ən çətin anlarda belə yalnız olmadığınızı və bir 'zəfər' dövrünün başladığını müjdələyir.</p>

<h3>Dini və Mənəvi Baxış</h3>
<p>Mənəvi yozmalarda heyvanların rənginin ağ olması ilahi rəhməti göstərir. Dinimizdə buyurulduğu kimi, heyvanlara mərhəmət edənə Allah da rəhm edər. Ağ heyvanlar sizin xeyir əməllərinizin mənəvi aləmdəki görüntüləridir. Səmimiyyət sizin ən böyük 'heyvani' gücünüzdür (instinktinizdir). Qəlbinizi rəvan tutun.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda ağ heyvanın sizi dişləməsi nə deməkdir?</strong>
    <p>Bu, xeyirli bir xəbərdarlıqdır. Yaxın bir dostunuzun sizin səhvinizi düzəltməyə çalışdığını və ya bir imtiyazın sizə çətinliklə gələcəyini bildirir.</p>
</div>
<div class="faq-item">
    <strong>Ağ heyvan görmək hər zaman xeyirdir?</strong>
    <p>Bəli, demək olar ki, bütün yozmalarda ağ heyvan hüzur, bərəkət və təmizlik rəmzi kimi qəbul edilir.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda ağ heyvandan qorxmaq?", "answer": "Real həyatda gələn böyük bəxtdən və ya məsuliyyətdən duyulan həyəcanı əks etdirir." },
            { "question": "Ağ heyvanın rənginin dəyişməsi?", "answer": "Bir mənəvi vəziyyətin rasionallaşdığını və ya diqqətli olmalı olduğunuzu bildirir." }
        ],
        related_slugs: ["yuxuda-ag-ayi-gormek", "yuxuda-ag-ilan-gormek", "yuxuda-ag-at-gormek"],
        rating_value: 4.9,
        review_count: 156
    },
    {
        slug: "yuxuda-ag-geyim-ve-aksesuarlar",
        title: "Yuxuda Ağ Geyim və Aksesuarlar",
        seo_title: "Yuxuda Ağ Geyim: Köynək, Şalvar, Ayaqqabı və s. (2026)",
        seo_description: "Yuxuda ağ köynək, şalvar, ayaqqabı və digər aksesuarları geyinməyin ən dəqiq yozmaları. Niyə ağ geyim yuxuda mənəvi yüksəliş və toy müjdəsidir? Professional analiz.",
        keywords: "yuxuda ag koynek, ag shalvar, ag ayaqqabi, ag papaq, ag elcek, ag orpek, yuxu yozmalari, yeni imic",
        excerpt: "Yuxuda ağ geyim və aksesuarlar görmək xəyalpərəstin sosial statusunun artacağını, mənəvi olaraq təmizlənəcəyini və həyatında parlaq bir zəfər qazanacağını simvolizə edir.",
        highlight_box: "Ağ geyim yuxuda 'vicdan rahatlığı' və 'ictimai hörmət' rəmzidir. Üstünüzdəki ağlıq sizin daxili dünyanızın kənara əksidir. Bu yuxular çox vaxt bir səyahət, toy və ya mühüm bir rəsmi təyinatın müjdəsidir.",
        category: "Clothing",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Ağ Libasların Mənəvi və Sosial Təhlili</h2>
<p>Libas insanın həm bədənini, həm də sirlərini örtən vasitədir. Ağ rəngdə geyim isə bu örtünün nurlu və xeyir-dualı olduğunu göstərir. Psixoloji olaraq bu yuxu, insanın başqalarının qarşısında 'tərtemiz' görünmək arzusunu və özünə olan hörmətini əks etdirir. Siz bəlkə də həyatınızdakı bir ləkədən (səhvdən) tamamilə qurtulmusunuz və indi hər kəsə öz həqiqi, saf simanızı göstərməyə hazırsınız.</p>

<p>Bu bələdçidə ağ geyim və aksesuarların fərqli növlərini incələyirik:</p>

<table>
  <thead>
    <tr>
      <th>Geyim/Aksesuar</th>
      <th>Simvolik Mənası</th>
      <th>Maddi-Mənəvi Təsir</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Köynək</td>
      <td>Xeyirli Xəbər və Şəffaflıq</td>
      <td>İşdə Uğur</td>
    </tr>
    <tr>
      <td>Ağ Şalvar</td>
      <td>Səfər və Möhkəm Addım</td>
      <td>Maddi Sabitlik</td>
    </tr>
    <tr>
      <td>Ağ Ayaqqabı</td>
      <td>Yeni Yol və Murad</td>
      <td>Xəyalların Reallaşması</td>
    </tr>
    <tr>
      <td>Ağ Papaq</td>
      <td>Hikmət və Akıl</td>
      <td>Düzgün Qərar / Nüfuz</td>
    </tr>
    <tr>
      <td>Ağ Əlcək</td>
      <td>İncəlik və İşgüzarlıq</td>
      <td>Qüsursuz Əl İşləri</td>
    </tr>
  </tbody>
</table>

<h2>1. Yuxuda Ağ Köynək Geyinmək</h2>
<p>Ağ köynək yuxuların ən klassik və xeyirli rəmzlərindəndir. Bu sizin adınızın təmizliyini, ətrafınızdakı insanların sizə olan güvənini və rəsmi bir işdə 'üzüağ' çıxacağınızı bildirir. Köynəyin ütülü olması işlərinizin nizamlı gedəcəyinə, geniş olması isə ruzinizin bolluğuna işarədir.</p>

<h2>2. Yuxuda Ağ Şalvar Geyinmək</h2>
<p>Şalvar hərəkəti və gücü təmsil edir. Ağ şalvar görmək, çıxacağınız bir yolun (həm fiziki, həm mənəvi) çox xeyirli olacağını və heç bir maneə ilə rastlaşmayacağınızı göstərir. Bu, həm də mülk sahibi olmaq və ya mövcud büdcəni halal yollarla artırmaq müjdəsidir.</p>

<h2>3. Yuxuda Ağ Ayaqqabı Görmək</h2>
<p>Ayaqqabı insanın yolunu və bələdçisini təmsil edir. Ağ ayaqqabı geyinmək, sizin çox nəcib və dürüst bir yola qədəm qoyduğunuzu bildirir. Əgər subaysınızsa, bu çox xeyirli və səmimi bir həyat yoldaşına, evlisinizsə, ailə daxili səyahətə və hüzura yozulur.</p>

<h2>4. Yuxuda Ağ Papaq Taxmək</h2>
<p>Papaq insanın düşüncələrini və təfəkkürünü təmsil edir. Ağ papaq taxmaq, sizin çox müdrik və nurlu qərarlar verəcəyinizi, ətrafınızdakıların sizin ağlınızdan və məsləhətinizdən bəhrələnəcəyini göstərir. Bu, mənəvi ucalığın və rütbənin nişanıdır.</p>

<h2>5. Yuxuda Ağ Əlcək və Ağ Örpək</h2>
<p>Əlcək sənəti və gizliliyi, örpək isə həyanı və mühafizəni təmsil edir. Ağ əlcək geyinmək, bir işi qüsursuz və təmkinlə yerinə yetirəcəyinizə işarədir. Ağ örpək isə ailə hüzurunu, səmimi bir dostluğun himayəsini və mənəvi bir müdafiəni bildirir.</p>

<h3>Mənəvi Yozum</h3>
<p>Ağ geyim yuxuda insanın ruhunun libası kimidir. Dinimizdə ağ paltar səmimiyyət və iman nişanı sayılır. Bu yuxu sizə xatırladır ki, xarici görünüşünüzü ağ (təmiz) saxladığınız kimi, daxili dünyanızı da kin və nifrətdən təmiz tutmalısınız. Sizin səmimiyyətiniz sizin ən gözəl bəzəyinizdir.</p>`,
        faqs: [
            { "question": "Yuxuda ağ geyimin qəfildən ləkələnməsi?", "answer": "Real həyatda bir az ehtiyatlı olmalı olduğunuzu və bəzi söz-söhbətlərə qarşı daxili gücünüzü qorumalı olduğunuzu bildirir." },
            { "question": "Köhnə ağ paltar geyinmək?", "answer": "Keçmişdə yarımçıq qalmış bir sevincin və ya köhnə bir dostluğun yenidən canlanacağına yozulur." }
        ],
        related_slugs: ["yuxuda-ag-paltar-geyinmek", "yuxuda-ag-gelinlik-gormek"],
        rating_value: 5.0,
        review_count: 112
    },
    {
        slug: "yuxuda-ag-esyalar-gormek",
        title: "Yuxuda Ağ Əşyalar Görmək (Məişət və Sənədlər)",
        seo_title: "Yuxuda Ağ Süfrə, Çanta, Mürəkkəb və s. Görmək (2026)",
        seo_description: "Yuxuda ağ süfrə, çanta, mürəkkəb, ağardıcı və sənədlər görməyin ən dəqiq yozmaları. Niyə ağ əşyalar yuxuda mənəvi hüzur və rəsmi müjdələrdir? Professional analiz.",
        keywords: "yuxuda ag sufra, ag canta, ag murekkeb, ag verez, imza atmaq, agardici, yuxu yozmalari, yeni imkanlar",
        excerpt: "Yuxuda ağ əşyalar görmək xəyalpərəstin həyatında nizamın bərpa olunacağını, rəsmi işlərinin xeyirlə nəticələnəcəyini və evinə bərəkət gələcəyini simvolizə edir.",
        highlight_box: "Ağ məişət əşyaları yuxuda 'sahman' və 'bolluq' rəmzidir. Sənədlərdəki ağ rəng isə rəsmi işlərdəki dürüstlüyü bildirir. Bu yuxular çox vaxt yeni bir qonaq, bir imza və ya bir müqavilənin müjdəsidir.",
        category: "Objects",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Ağ Əşyaların Mənəvi və Maddi Təhlili</h2>
<p>Əşyalar bizim gündəlik həyatımızın alətləridir. Onları ağ rəngdə görmək, həmin alətlərin və ya məşğuliyyətlərin artıq daha mütəşəkkil və nurlu olduğunu göstərir. Psixoloji olaraq bu yuxu, insanın daxili aləmindəki 'nizam' arzusunu və hər şeyi öz yerinə qoymaq istəyini əks etdirir. Siz bəlkə də həyatınızdakı bir qarışıqlığa son qoyub, hər şeyi səmimiyyətlə sahmana salmısınız.</p>

<p>Bu bölmədə gündəlik həyatımızda rast gəldiyimiz müxtəlif ağ əşyaların yozumlarını təqdim edirik:</p>

<table>
  <thead>
    <tr>
      <th>Ağ Əşya</th>
      <th>Simvolik Mənası</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Süfrə</td>
      <td>Qonaqpərvərlik və Bərəkət</td>
      <td>Sevinc Dolu Məclis</td>
    </tr>
    <tr>
      <td>Ağ Çanta</td>
      <td>Yeni Sirlər / Qazanc</td>
      <td>Səfər və ya Maddi İmkam</td>
    </tr>
    <tr>
      <td>Ağ Vərəqə İmza Atmaq</td>
      <td>Tale Qərarı / Müqavilə</td>
      <td>Təyinat və ya Evlilik</td>
    </tr>
    <tr>
      <td>Ağ Mürəkkəb</td>
      <td>Gizli və Nurlu Yazı</td>
      <td>Xüsusi Bir İlham</td>
    </tr>
    <tr>
      <td>Ağardıcı</td>
      <td>Təmizlik və Bağışlanma</td>
      <td>Daxili Arınma</td>
    </tr>
  </tbody>
</table>

<h2>1. Yuxuda Ağ Süfrə Görmək</h2>
<p>Ağ süfrə ailə birliyinin və bərəkətli ruzinin rəmzidir. Yuxuda təmiz bir ağ süfrə açmaq, evinizə çox hörmətli və xeyirli qonaqların gələcəyini, ailə daxili mübahisələrin bitəcəyini bildirir. Bu yuxu həm də halal qazancla qurulan bir süfrənin heç vaxt boş qalmayacağını müjdələyir.</p>

<h2>2. Yuxuda Ağ Çanta Görmək</h2>
<p>Çanta insanın özü ilə daşıdığı məsuliyyətləri və sirləri təmsil edir. Ağ çanta görmək, sizin yeni və tamamilə təmiz bir yükün (məsuliyyətin) altına girəcəyinizi göstərir. Bu, həm də mənəvi bir səyahətə hazır olduğunuzu və ya tezliklə əlinizə xeyirli bir maddi vəsaitin keçəcəyini bildirir.</p>

<h2>3. Yuxuda Ağ Vərəqə İmza Atmaq</h2>
<p>İmza atmaq qətiyyət rəmzidir. Ağ və təmiz bir vərəqə imza atmaq, sizin həyatınızda çox mühüm və xeyirli bir qərar verdiyinizi bildirir. Bu, işə girmək, ev almaq və ya evlənmək kimi böyük taleyüklü hadisələrin müjdəsidir. Vərəqin ağ olması bu qərarın sizin üçün çox xeyirli olacağını göstərir.</p>

<h2>4. Yuxuda Ağardıcı və Təmizlik Vasitələri Görmək</h2>
<p>Ağardıcı istifadə etmək, keçmiş səhvləri yumaq və mənəvi lekələrdən təmizlənmək deməkdir. Əgər yuxuda nəsə bir şeyi ağardırsınızsa, bu sizin tövbənizin qəbul olacağına və ətrafınızdakı insanların sizin haqqınızda yenidən müsbət düşünməyə başlayacağına işarədir. Sizin səmimiyyətiniz sizin ən böyük 'ağardıcınızdır'.</p>

<h3>Mənəvi Nəsihət</h3>
<p>Ağ əşyalar sədəqə və paylaşma enerjisi ilə bağlıdır. Bu yuxu sizə xatırladır ki, əlinizdəki nemətləri (süfrənizi, çantanızı) başqaları ilə paylaşsanız, onların ağlığı (nuru) daha da artar. Səmimiyyət hər bir əşyanı müqəddəsləşdirir. Qəlbinizi rəvan tutun.</p>`,
        faqs: [
            { "question": "Yuxuda ağ süfrənin cırılması?", "answer": "Real həyatda gələn kiçik bir ailəvi mübahisəyə, lakin tezliklə sülhlə bitəcəyinə işarədir." },
            { "question": "Ağ çantanı itirmək?", "answer": "Müvəqqəti bir fürsətin gecikəcəyinə, lakin səbirli olsanız daha yaxşısının tapılacağına yozulur." }
        ],
        related_slugs: ["yuxuda-ag-kagiz-gormek", "yuxuda-ag-reng-gormek"],
        rating_value: 4.7,
        review_count: 42
    }
];

saveBatch(posts);
