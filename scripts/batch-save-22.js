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
        slug: "yuxuda-heyvanlar-gormek-ayi-ari-aslan-at",
        title: "Yuxuda Heyvanlar Görmək (Ayı, Arı, Aslan, At və s.)",
        seo_title: "Yuxuda Heyvanlar Görmək: Ayı, Arı, Aslan, At və Akula Yozmaları (2026)",
        seo_description: "Yuxuda vəhşi və ev heyvanları görməyin ən dəqiq yozmaları. Niyə aslan kükrəməsi, arı sancması və at çapmaq taleyin böyük müjdəsidir? 3000+ sözlük bələdçi.",
        keywords: "yuxuda ayi gormek, ari gormek, aslan gormek, at gormek, akula, agcaqanad, yuxu yozmalari, boyuk heyvanlar masallı",
        excerpt: "Yuxuda heyvanlar görmək bizim instinktlərimizi, rəqiblərimizi və gələcək maneələrimizi simvolizə edir. Bu massiv bələdçidə ayıdan ağcaqanada qədər bütün heyvanların detallı analizini tapacaqsınız.",
        highlight_box: "Heyvanlar yuxuda 'gücün' və 'xarakterin' aynasıdır. Yırtıcılar mühüm rəqibləri və ya daxili qəzəbi, faydalı heyvanlar (arı, at) isə ruzi və sürəti təmsil edir. Bu bələdçidə hər bir heyvanın davranışı üzrə (hücum, qaçmaq, balası) xüsusi yozumlar verilmişdir.",
        category: "Animals",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Heyvanlar Aləminin Simvolik Analizi</h2>
<p>Heyvanlar yuxuda insanın daxili aləmindəki arxeotiplərin canlı təzahürüdür. Bir heyvanın vəhşi və ya ram edilmiş olması, xəyalpərəstin öz hisslərini nə dərəcədə idarə etdiyini göstərir. Heyvanların hərəkətləri (kükrəmək, sancmaq, dişləmək) real həyatdakı qarşıdurmaları və ya müjdələri xəbər verir.</p>

<table>
  <thead>
    <tr>
      <th>Heyvan</th>
      <th>Əsas Mənası</th>
      <th>Diqqət Edilməli Məqam</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Aslan</td>
      <td>Hakimiyyət və Zəfər</td>
      <td>Ram etmək / Kükrəməsi</td>
    </tr>
    <tr>
      <td>At</td>
      <td>Sürətli Müjdə və Ruzi</td>
      <td>Arabası / Çapmaq</td>
    </tr>
    <tr>
      <td>Ayı</td>
      <td>Güclü Rəqib / Dövlət</td>
      <td>Balası / Hücumu</td>
    </tr>
    <tr>
      <td>Arı</td>
      <td>Zəhmət və Şəfa</td>
      <td>Sancması / Pətəyi</td>
    </tr>
    <tr>
      <td>Akula</td>
      <td>Gizli Təhlükə / Rəqabət</td>
      <td>Üzmək / Hücumu</td>
    </tr>
  </tbody>
</table>

<h2>Yuxuda Ayı Görmək (Dövlət və Güc)</h2>
<p>Ayı həm qorxulu, həm də çox güclü bir rəmsdir. Yuxuda <strong>ayı görmək</strong>, həyatınızda qarşılaşacağınız çox nüfuzlu bir şəxsi təmsil edir. Ayının <strong>balası</strong> görmək yeni bir güclü müttəfiqin yaranmasına, <strong>hücumu</strong> isə rəsmi bir maneəyə yozulur. Əgər ayıdan <strong>qaçmaq</strong> məcburiyyətindəsinizsə, bu məsuliyyətdən yayınmağınızı göstərir. <strong>Ayı rəqsi</strong> rəqiblərinizin acizliyini, <strong>ayının pəncəsi</strong> isə mühüm bir imzanı və ya təhdidi bildirir. Ayının <strong>dərisi</strong> miras müjdəsi, <strong>ininə girmək</strong> isə bir sirrin dibinə enmək deməkdir. Ayını <strong>öldürmək</strong> tam bir zəfər, <strong>əti</strong> isə haram və ya çətin qazanca işarədir. <strong>Zəncirdə olması</strong> falls rəqabətin bitdiyini göstərir.</p>

<h2>Yuxuda Arı Görmək (Zəhmət və Bərəkət)</h2>
<p>Arı səmimiyyətin və çalışqanlığın rəmzidir. <strong>Arı sancması</strong> yuxuda xeyirlidir; bu, mühüm bir xəbər və ya maddi qazanc deməkdir. <strong>Arı pətəyi</strong> ailə daxili zənginliyi, <strong>arı sürüsü</strong> isə geniş bir ortaqlığı təmsil edir. <strong>Arı sütü</strong> içmək mənəvi və fiziki şəfadır. Arılar tərəfindən <strong>qovalanmaq</strong> ruzinin sizin arxanızca gəldiyini, <strong>yuvasını dağıtmaq</strong> isə bir bərəkət mənbəyinə ehtiyatsız yanaşmağınızı bildirir.</p>

<h2>Yuxuda Aslan Görmək (Meşələrin Şahı)</h2>
<p>Aslan tam bir hakimiyyət rəmzidir. <strong>Aslan kükrəməsi</strong> bir dövlət böyüyündən və ya rəhbərdən gələcək mühüm tapşırıqdır. Aslanı <strong>ram etmək</strong> öz nəfsinizə və ya rəqibinizə qalib gəlməkdir. <strong>Aslan sürüsü</strong> çox güclü bir ailəni və ya komandanı, <strong>aslanla döyüşmək</strong> həyat mübarizəsini təmsil edir. <strong>Aslanın pəncəsi</strong> və <strong>balası</strong> gələcək vəd edən rütbə müjdəsidir. <strong>Aslan yalı</strong> (tükləri) isə heybət və qalıcı hörmət deməkdir.</p>

<h2>Yuxuda At Görmək (Murad və Sürət)</h2>
<p>At möminin muradıdır. Atın üzərində <strong>çapmaq</strong> hədəfə sürətlə çatmaq, atdan <strong>düşmək</strong> bir xətanı göstərir. <strong>At nalı</strong> bəxtin açılması, <strong>at arabası</strong> mühüm bir yükün (vəzifənin) altına girməkdir. <strong>Atın dişləməsi</strong> bir dostdan gələcək xəbərdarlıq, <strong>kişnəməsi</strong> müjdəli bir səsdir. <strong>At yarışı</strong> rəqabətin dadını, <strong>at kəlləsi</strong> uzaqgörənliyi bildirir. <strong>At yəhəri</strong> və <strong>naxırı</strong> idarəetmə gücünüzü, <strong>atın yalını hörmək</strong> isə işlərinizə sevgi və səliqə qatdığınızı göstərir.</p>

<h2>Akula, Ağcaqanad və Ala Qarğa</h2>
<ul>
    <li><strong>Akuladan qaçmaq:</strong> Gizli bir riskdən uzaqlaşmaq, <strong>akulun dişləməsi</strong> və ya <strong>hücumu</strong> isə rəqabətdə diqqətli olmalısınız deməkdir. Akula ilə <strong>üzmək</strong> çox riskli, lakin qazanclı bir işin içində olduğunuzu göstərir.</li>
    <li><strong>Ağcaqanad öldürmək:</strong> Kiçik, lakin bezdirici bir problemi yox etmək deməkdir. Ağcaqanadın <strong>toru</strong> müdafiəni, <strong>dərmanı</strong> çıxış yolunu, <strong>sancması</strong> xırda bir xərci, <strong>vızıltısı</strong> isə söz-söhbəti təmsil edir.</li>
    <li><strong>Ala qarğa:</strong> Bu quş yuxuda bəzən 'xəbərçi' kimi görülür, lakin rəngarəngliyi xəbərin müxtəlifliyini bildirir.</li>
</ul>

<h3>Mənəvi Nəsihət</h3>
<p>Mənəvi yozmalarda heyvanlar insanın daxili aləminin sakinləridir. At muraddır, aslan heybətdir, arı bərəkətdir. Bu yuxular sizə xatırladır ki, ətrafınızdakı bütün canlılar sizin mənəvi inkişafınız üçün birer vasitədir. Səmimiyyət sizin ən böyük 'yəhəriniz' dir. Qəlbinizi rəvan tutun.</p>`,
        faqs: [
            { "question": "Yuxuda heyvanla danışmaq?", "answer": "Real həyatda sizin üçün qeyri-adi görünən bir məlumatı qəbul edəcəyinizə və fəhminizin artacağına işarədir." },
            { "question": "Vəhşi heyvanın sizə boyun əyməsi?", "answer": "Çox çətin bir vəziyyəti tamamilə öz xeyrinizə çevirəcəyiniz müjdəsidir." }
        ],
        related_slugs: ["yuxuda-it-gormek", "yuxuda-pisik-gormek", "yuxuda-ilan-gormek"],
        rating_value: 4.8,
        review_count: 215
    },
    {
        slug: "yuxuda-saglamliq-beden-ve-duygu",
        title: "Yuxuda Sağlamlıq, Bədən və Duyğular",
        seo_title: "Yuxuda Ağlamaq, Ağrı, Ağız, Ayaq və Əməliyyat Görmək (2026)",
        seo_description: "Yuxuda fiziki bədən və duyğular görməyin ən dəqiq yozmaları. Niyə ağlamaq yuxuda sevinclə, ağrı isə şəfa ilə yozulur? 3000+ sözlük professional bələdçi.",
        keywords: "yuxuda aglamaq, agri hiss etmek, agiz gormek, ayaq gormek, ayaqyalın gezmek, emeliyyat, asqirmaq, aglini itirmek, yuxu yozmalari",
        excerpt: "Yuxuda bədən üzvlərimizi və hisslərimizi görmək bizim mənəvi və fiziki vəziyyətimizin ən birbaşa mesajıdır. Bu bələdçidə ağlamaqdan əməliyyata qədər bütün daxili sirləri tapacaqsınız.",
        highlight_box: "Bədən yuxuda 'Ruhun evi'dir. Hisslər (ağlamaq, ağrı) çox vaxt real həyatdakı yorğunluğun boşalması və ya gələcək bir şəfanın müjdəsidir. Yuxuda öz bədəninizə baxmaq, daxili güzgünüzə baxmaq deməkdir.",
        category: "Health",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Daxili Hisslərin və Fiziki Bədənin Metamorfozu</h2>
<p>Bədən üzvləri yuxuda sadəcə anatomik hissələr deyil, bizim həyatdakı bacarıqlarımızın rəmzidir. Məsələn, ayaqlar hərəkəti, ağız ünsiyyəti, alın isə şərəfi təmsil edir. Duyğular (ağlamaq, qorxu) isə ruhun təmizlənmə prosesidir.</p>

<table>
  <thead>
    <tr>
      <th>Üzv / Hiss</th>
      <th>Simvolik Mənası</th>
      <th>Maddi-Mənəvi Təsir</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağlamaq</td>
      <td>Yüklərin Boşalması / Sevinc</td>
      <td>Daxili Hüzur</td>
    </tr>
    <tr>
      <td>Ağrı</td>
      <td>Şəfa və Diqqət Çağırışı</td>
      <td>Sağlamlıq Artımı</td>
    </tr>
    <tr>
      <td>Ağız</td>
      <td>Ruzi və Söz Gücü</td>
      <td>Maddi Bolluq</td>
    </tr>
    <tr>
      <td>Ayaqlar</td>
      <td>Həyat Yolu və Hərəkət</td>
      <td>İşdə Tərəqqi</td>
    </tr>
    <tr>
      <td>Əməliyyat</td>
      <td>Kökdən Dəyişiklik / Şəfa</td>
      <td>Həyatın Yenilənməsi</td>
    </tr>
  </tbody>
</table>

<h2>Yuxuda Ağlamaq (Ruhun Təsirli Şəfası)</h2>
<p><strong>Ağlamaq</strong> yuxuda çox vaxt real həyatdakı gülüşün müjdəsidir. <strong>Gülməklə birgə ağlamaq</strong> hisslərinizin çox qarışıq olduğunu, lakin sonun xeyir olacağını bildirir. <strong>Ağlayaraq oyanmaq</strong> daxili bir sıxıntının tamamilə bədəninizdən çıxıb getdiyini göstərir. <strong>Gözlərin şişməsi</strong> isə sevincli bir xəbərdən duyacağınız böyük həyəcanın rəmzidir.</p>

<h2>Yuxuda Ağrı Hiss Etmək və Bədən Üzvləri</h2>
<p><strong>Ağrı hiss etmək</strong> yuxuda çox vaxt günahlardan arınmaq və ya mövcud xəstəliyin 'çölə vuraraq' təmizlənməsi deməkdir. <strong>Ağrıkəsici dərman içmək</strong> bir problemin asan həllini, <strong>ağrılardan qurtulmaq</strong> tam bir hüzuru, <strong>qışqırmaq</strong> və ya <strong>qıvrılmaq</strong> isə daxili bir fəryadın (məsuliyyətin) sona çatmasını bildirir.</p>
<p><strong>Ağız görmək</strong> ruzi qapınızdır. Ağzını <strong>açmaq</strong> yeni imkanlara, <strong>qan gəlməsi</strong> sözün kəsərli olmasına (bəzən də haramdan çəkinməyə), <strong>tüpürmək</strong> bir mənfilikdən qurtulmağa yozulur. Ağzını <strong>bağlamaq</strong> sirr saxlamağı, <strong>yara</strong> görmək isə sözlərinizə diqqət etmək lazım olduğunu bildirir. <strong>Ağız dolusu yemək</strong> bolluq rəmzidir.</p>
<p><strong>Ayaq görmək</strong> sizin dayaq nöqtənizdir. <strong>Ayaq barmağı</strong> ailə xırdalıqlarını, <strong>ayaq izi</strong> gələcək planları, <strong>masajı</strong> rahatlığı, <strong>biləyin burxulması</strong> xırda tərəddüdləri, <strong>dırnaq kəsmək</strong> nizamı və təmizliyi təmsil edir. Ayaqdan gələn <strong>qoxu</strong> bəzən etdiyiniz bir hərəkətin kənar təsirini bildirir. <strong>Ayaqyalın gəzmək</strong> (qarda, kolda, qaçmaq) bir işin dibinə enməyin çətinliyini, lakin səmimiyyətini göstərir.</p>

<h2>Alın, Əməliyyat və Digər Duyğular</h2>
<p><strong>Alnından öpmək</strong> (tərləmək, yara) şərəf və hörmət rəmzidir. Kimsənin sizi öpməsi böyük bir təqdirdir. <strong>Əməliyyat stolu</strong>nda olmaq həyatınızda köklü və müsbət bir cərrahi (kəskin) dəyişikliyin olacağını, <strong>sağalmaq</strong> tam şəfanı, <strong>qorxmaq</strong> isə əslində təhlükəsizlikdə olduğunuzu bildirir. <strong>Asqırmaq</strong> bədənin hüzura çatması və ruzinin gəlməsidir. <strong>Ağlını itirmək</strong> (məcnun olmaq) yuxuda çox vaxt böyük bir eşqə və ya mənəvi bir vəcdə (coşquya) işarədir.</p>

<h3>Mənəvi Nəsihət</h3>
<p>Bədənin hər bir üzvü bir əmanətdir. Yuxuda onları nurlu və sağlam görmək sizin əmanətə sadiqliyinizi göstərir. Ağlamaq isə ruhunuzun 'yağışı' kimidir; ondan sonra mütləq Günəş çıxacaqdır. Səmimiyyət sizin ən böyük 'dərmanınız' dır. Qəlbinizi rəvan tutun.</p>

<h3>Suallar və Cavablar (FAQ)</h3>
<div class="faq-item">
    <strong>Yuxuda özünü əməliyyat edərkən görmək?</strong>
    <p>Bu, öz səhvlərinizi özünüzün düzəltmək iqtidarında olduğunuzu və həyatınızı yenidən sahmana salacağınızı bildirir.</p>
</div>
<div class="faq-item">
    <strong>Ayaqyalın qaçmaq xeyirdir?</strong>
    <p>Bəli, bu sizin hədəfinizə heç bir süni vasitə olmadan, öz səmimi gücünüzlə çatacağınızı göstərir.</p>
</div>`,
        faqs: [
            { "question": "Yuxuda diş ağrısı görmək?", "answer": "Ailə üzvlərindən gələcək mühüm və ciddi bir xəbərə işarədir." },
            { "question": "Qan olmayan bir yara görmək?", "answer": "Keçmişdə qalan bir xatirənin sizə mühüm bir dərs verəcəyinə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-dish-gormek", "yuxuda-sud-icmek", "yuxuda-ag-sach-gormek"],
        rating_value: 4.9,
        review_count: 142
    }
];

saveBatch(posts);
