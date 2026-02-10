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
        slug: "yuxuda-ag-un-gormek",
        title: "Yuxuda Ağ Un Görmək",
        seo_title: "Yuxuda Ağ Un Görmək: Bərəkət, Ruzi və Halal Qazanc (2026)",
        seo_description: "Yuxuda ağ un görməyin ən dəqiq yozmaları. Niyə ağ un yuxuda ruzinin bollaşması, ailə səadəti və ya yeni bir işdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag un, ag un gormek, bereket, ruzi, halal qazanc, seadet, yuxu yozmalari, yeni imkanlar",
        excerpt: "Yuxuda ağ un görmək xəyalpərəstin həyatında bolluq və bərəkətin artacağını, halal yollarla böyük bir sərvətə sahib olacağını və ailə hüzuruna qovuşacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ un görmək, insanın taleyindəki 'ali' bir bərəkəti, ruzinin asanlıqla gəlməsini və yaxın zamanda gələcək çox xeyirli bir maddi artım və ya övlad müjdəsini xəbər verən mübarək bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Ruzinin və Təməlin Psixoloji Analizi</h2>
<p>Un həyatın təməli olan çörəyin əsasıdır və hər zaman bolluğun, bərəkətin simvolu olmuşdur. Ağ un isə bu ruzinin ən təmiz və emal olunmuş (halallaşmış) formasıdır. Psixoloji olaraq bu yuxu, insanın real həyatda 'təminatlı' olmaq arzusunu və gələcəyə olan ümidini əks etdirir. Siz bəlkə də yeni bir layihənin bünövrəsini qoyursunuz. Ağ un sizin daxili potensialınızdır; sizin əlinizdə hər cür 'nemət' (imkan) var, sadəcə onu yoğurub (işləyib) nəticəyə çevirməlisiniz. Bu yuxu həm də daxili bir doyumun və ailə daxili sülhün müjdəsidir. Siz artıq təmiz bir bərəkətin içindəsiniz.</p>

<p>Yuxuda ağ un görmək çox vaxt gözlənilməz bir miras müjdəsinə, rəsmi bir işdə böyük bir qazanca və ya subaylar üçün çox qısa zamanda gələcək varlı və xeyirli bir qismətə işarədir. Sizin üçün artıq nurli günlər başlayır. Bu prosesdə səmimi qalmaq sizin ən böyük 'bərəkətiniz' olacaqdır.</p>

<h2>Unun Halına Görə Müxtəlif Yozmalar</h2>
<p>Unu necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Unun Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Unu Kisələrlə Görmək</td>
      <td>Limitsiz Bərəkət / Sərvət</td>
      <td>Maddi Rifahın Artması</td>
    </tr>
    <tr>
      <td>Un Ələmək</td>
      <td>Xeyiri Şərdən Ayırmaq</td>
      <td>Düzgün Seçim / Şəffaflıq</td>
    </tr>
    <tr>
      <td>Üst-Başın Una Batması</td>
      <td>Böyük Bir Lütfə Nail Olmaq</td>
      <td>Nüfuzun Artması</td>
    </tr>
    <tr>
      <td>Unla Xəmir Yoğurmaq</td>
      <td>Yeni Bir İşin Qurulması</td>
      <td>Uğurlu Layihənin Başlanğıcı</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Yerə Un Dağılması</h3>
<p>Bu yuxu bir xəbərdarlıqdır. Sizin bəzi fürsətləri israf edə biləcəyinizə və ya ruzinizin qədrini bilməli olduğunuzu bildirir. Daha diqqətli və qənaətcil olun. Lakin dağılan un ağdırsa, bu zərərin yerinə daha xeyirlisi gələcəkdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda un 'elm' və 'hikmət' kimi də görülür (çünki un bədəni, elm ruhu doyurur). Ağ un görmək, bəndənin imanının təmizliyindən və Allahın ona verdiyi elmdən xəbər verir. Dinimizdə buyurulduğu kimi, halal ruzi ibadətin yarısıdır. Bu yuxu sizə xatırladır ki, əgər qəlbinizi təmiz tutsanız, sizin ruziniz də bol olacaqdır. Səmimiyyət sizin ən böyük ununuzdur. Muradınız xeyirli olsun.</p>

<h3>Bərəkəti Artırın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra yeni maddi hədəflər müəyyən edin və onlara doğru addım atın. Halal qazanca daha çox önəm verin. Ehtiyacı olanlara kömək edin (zəkat və sədəqə verin), çünki paylaşılan un (ruzis) heç vaxt bitməz. Unutmayın ki, ən böyük sərvət insanın öz daxili bərəkətidir. Sizin parlaq gələcəyiniz sizin zəhmətinizdə və dürüstlüyünüzdədir. İnamla və paklıqla irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda qara un görmək?", "answer": "Real həyatda bir az çətinliklə gələn qazanca, lakin səbirli olsanız xeyirli olacağına işarədir." },
            { "question": "Unun içində qurd görmək?", "answer": "Qazancınıza paxıllıq edən insanların varlığına dair xəbərdarlıqdır." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-vekillə-muqavilə-baglamaq"],
        rating_value: 4.8,
        review_count: 65
    },
    {
        slug: "yuxuda-ag-sud-icmek",
        title: "Yuxuda Ağ Süd İçmək",
        seo_title: "Yuxuda Ağ Süd İçmək: Fitrət, Şəfa və Saf Qazanc (2026)",
        seo_description: "Yuxuda təzə ağ süd içməyin ən dəqiq yozmaları. Niyə süd yuxuda elm, fitrət və ya böyük bir ruzi müjdəsidir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag sud, sud icmek, fitret, sefa, ruzi, elm, yuxu yozmalari, mənəvi təmizlik",
        excerpt: "Yuxuda ağ süd içmək xəyalpərəstin daxili dincliyə qovuşacağını, mənəvi bir şəfa tapacağını və həyatında çox xəyirli bir xəbər alacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ süd içmək, insanın taleyindəki 'ali' bir paklığı, fitrətinə (özünə) qayıdışı və yaxın zamanda gələcək çox xeyirli bir maddi və ruhani bərəkəti müjdələyən şəfalı bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Südün Fitrət və Ruhani Analizi</h2>
<p>Süd həyatın ilk qidası, masumiyyətin və fitrətin (insanın doğuşdan gələn təmizliyinin) rəmzidir. Ağ və təzə süd içmək, insanın öz mənəviyyatını bəsləməsini və ya bir həqiqəti qəbul etməsini təmsil edir. Psixoloji olaraq bu yuxu, insanın real həyatda 'şəfa' tapmaq arzusunu və daxili hüzura olan ehtiyacını əks etdirir. Siz bəlkə də bir səhvi düzəltmisiniz və ruhunuz artıq təskinlik tapıb. Süd həm də elm rəmzidir; onu içmək yeni biliklər əldə etmək deməkdir. Bu yuxu daxili aydınlığın və sağlamlığın müjdəsidir. Siz artıq kainatın ən saf neməti ilə qidalanırsınız.</p>

<p>Yuxuda ağ süd içmək çox vaxt xəstələr üçün sürətli şəfaya, daxili sıxıntısı olanlar üçün hüzura və ya mühüm bir imtahanda qazanılacaq uğura işarədir. Sizin üçün artıq nurli bir mərhələ başlayır. Bu prosesdə səmimi qalmaq sizin ən böyük 'süd' bacarığınız olacaqdır. Südün dadı nə qədər şirindirsə, gələn müjdə də o qədər böyük olar.</p>

<h2>Südün Halına Görə Müxtəlif Yozmalar</h2>
<p>Südü necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Südün Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Təzə Sağlmış Süd</td>
      <td>Halal Qazanc / Bərəkət</td>
      <td>Yeni Sərvət</td>
    </tr>
    <tr>
      <td>Qaynadılmış Süd İçmək</td>
      <td>Zəhmətlə Gələn Uğur</td>
      <td>Stabil Rifah</td>
    </tr>
    <tr>
      <td>Südü Yerə Tökmək</td>
      <td>Müvəqqəti Bir Fürsət İtkisi</td>
      <td>Daha Diqqətli Olma</td>
    </tr>
    <tr>
      <td>Südün Daşması</td>
      <td>Bol Ruzi / Sevincli Xəbər</td>
      <td>Evə Gələn Müjdə</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Başqasına Süd Vermək</h3>
<p>Bu yuxu çox xeyirdir. Sizin bir insana yol göstərəcəyinizi və ya mənəvi bir dəstək olacağınızı bildirir. Sizin elminiz və merifətiniz başqalarına da şəfa olacaqdır. Paylaşdıqca çoxalan bərəkət sizinlədir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda süd 'fitrət' (İslam fitrəti) və 'elm' kimi qəbul edilir. Peyğəmbərimiz (s.a.v) meracolduqda ona süd və şərab təklif edildikdə o, südü seçmiş və bu, fitrətin seçilməsi kimi yozulmuşdur. Yuxuda süd içmək bəndənin imanının təmizliyindən və Allahın ona verdiyi hikmətdən xəbər verir. Bu yuxu sizə xatırladır ki, əgər fitrətinizi (ruhunuzu) təmiz tutsanız, sizin üçün bütün qapılar açılacaqdır. Səmimiyyət sizin ən böyük şərbətinizdir.</p>

<h3>Şəfa Tapın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra mənəviyyatınıza və sağlamlığınıza daha çox diqqət yetirin. Yeni məlumatlar öyrənməyə can atın. Kiməsə qarşı qəlbinizdə kin varsa, onu 'süd kimi' təmizləyin və bağışlayın. Halal nemətlərlə qidalanın. Unutmayın ki, ən böyük dərman insanın öz daxili sülhüdür. Sizin parlaq gələcəyiniz sizin fitrətinizdə və daxili dürüstlüyünüzdədir. İnamla və eşqlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda turşumuş süd içmək?", "answer": "Real həyatda gələn kiçik bir məyusluğa və ya bir işin gecikəcəyinə işarədir." },
            { "question": "Südün içində nəsə görmək?", "answer": "Bəzi sirlərin aşkar olacağına və ya diqqətli olmalı olduğunuzu bildirən xəbərdarlıqdır." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-vekillə-muqavilə-baglamaq"],
        rating_value: 4.9,
        review_count: 78
    },
    {
        slug: "yuxuda-ag-dish-gormek",
        title: "Yuxuda Ağ Diş Görmək",
        seo_title: "Yuxuda Ağ Diş Görmək: Sağlamlıq, Nüfuz və Ailə Gücü (2026)",
        seo_description: "Yuxuda ağappaq dişlər görməyin ən dəqiq yozmaları. Niyə ağ diş yuxuda həm bir yüksəliş, həm də ailə daxili möhkəmlikdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag dish, ag dushler, saglamliq, nufuz, aile gucu, yeni heyat, yuxu yozmalari, boyuk mujde",
        excerpt: "Yuxuda ağ diş görmək xəyalpərəstin həyatında nüfuzunun artacağını, sağlamlıq problemlərinin bitəcəyini və ailə bağlarının möhkəmlənəcəyini simvolizə edir.",
        highlight_box: "Yuxuda ağ diş görmək, insanın taleyindəki 'möhkəm' bir mərhələni, özgüvənin artmasını və yaxın zamanda gələcək çox xeyirli bir maddi qazanc və ya cəmiyyətdə tanınma müjdəsini xəbər verən parlaq bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Gücün və Gözəlliyin Psixoloji Analizi</h2>
<p>Dişlər insanın həm qidalanma (ruzini qəbul etmə), həm də sosial ünsiyyət (təbəssüm) vasitəsidir. Ağ və sağlam dişlər, insanın həyatdakı 'durumunun' və enerjisinin pik nöqtəsini təmsil edir. Psixoloji olaraq bu yuxu, insanın real həyatda özünü güclü, cazibədar və nüfuzlu hiss etmək istəyini əks etdirir. Siz bəlkə də bir rəqiblə mübarizədə üstünlük qazanmısınız. Ağ dişlər sizin daxili iradənizdir; sizin sözünüz artıq kəsərlidir (çünki diş kəsər rəmzidir). Bu yuxu həm də daxili bir barışığın və özgüvən artımının müjdəsidir. Siz artıq təmiz bir gələcəyə gülümsəyirsiniz.</p>

<p>Yuxuda ağ diş görmək çox vaxt ailə üzvlərindən gələn böyük bir dəstəyə, rəsmi bir işdə söz sahibi olmağa və ya uzun sürən bir xəstəliyin tamamilə bitməsinə işarədir. Sizin üçün artıq nurli günlər başlayır. Bu prosesdə səmimi qalmaq sizin ən böyük 'diş' bacarığınız olacaqdır.</p>

<h2>Dişlərin Halına Görə Müxtəlif Yozmalar</h2>
<p>Dişləri necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Dişlərin Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağsaqqal / Nurani Dişlər</td>
      <td>Böyük Hörmət / Şərəf</td>
      <td>Vəzifədə Yüksəliş</td>
    </tr>
    <tr>
      <td>Yeni Çıxan Ağ Diş</td>
      <td>Ailəyə Gələn Yeni Üzv / İş</td>
      <td>Övlad və ya Yeni Qazanc</td>
    </tr>
    <tr>
      <td>Dişlərin Parıldaması</td>
      <td>Sözün Kəsərli Olması</td>
      <td>Hamı Tərəfindən Qəbul</td>
    </tr>
    <tr>
      <td>Ağ Dişli Gülüş</td>
      <td>Hüzur və Xoşbəxtlik</td>
      <td>Sevincli Xəbər</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Dişlərin Ağardığını Görmək</h3>
<p>Bu yuxu çox xeyirdir. Sizin mənbi bir ləkədən və ya bir iftiradan tamamilə təmizlənəcəyinizi, adınızın yenidən hörmətlə hallanacağını bildirir. Sizin dürüstlüyünüz hər kəsə aşkar olacaqdır.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda dişlər 'ailə üzvləri' və ya 'qohumlar' kimi qəbul edilir. Ağ dişlər, ailənizin və nəslinizin səmimiyyətinə, onların yaxşı halına işarədir. Dinimizdə buyurulduğu kimi, misvak istifadə etmək və ağzı təmiz saxlamaq sünnədir. Bu yuxu sizə xatırladır ki, əgər əlaqələrinizi (dişlərinizi) təmiz və möhkəm tutsanız, sizin üçün bütün qapılar açılacaqdır. Səmimiyyət sizin ən böyük incinizdir. Qəlbini nurlu tutun.</p>

<h3>Gülümsəyin: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra ailə bağlarınızı daha da möhkəmləndirin. Özünüzə inanın və hədəflərinizə doğru kəsərli addımlar atın. Özgüvənli olun və ünsiyyətdə səmimiyyəti qoruyun. Sağlamlığınıza diqqət yetirin. Unutmayın ki, ən gözəl bəzək insanın daxili hüzuru və sağlam ruhudur. Sizin parlaq gələcəyiniz sizin dürüstlüyünüzdədir. İnamla və eşqlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ dişin düşməsi?", "answer": "Müvəqqəti bir maddi tərəddüdə və ya ailədə bir kədərə, lakin yerinə yenisi çıxsa daha sürətli bir zəfərə işarədir." },
            { "question": "Dişlərin qəfil saralması?", "answer": "Bəzi sirlərin və ya xəstəliklərin üzə çıxacağına dair mühüm bir xəbərdarlıqdır." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-adam-gormek"],
        rating_value: 4.8,
        review_count: 94
    },
    {
        slug: "yuxuda-ag-sach-gormek",
        title: "Yuxuda Ağ Saç Görmək",
        seo_title: "Yuxuda Ağ Saç Görmək: Hikmət, Hörmət və Uzun Ömür (2026)",
        seo_description: "Yuxuda ağarmış saçlar görməyin ən dəqiq yozmaları. Niyə ağ saç yuxuda həm bir nüfuz, həm də mənəvi ucalıqdır? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag sach, agarmis saclar, hikmet, hormet, uzun omur, nufuz, yuxu yozmalari, mujde",
        excerpt: "Yuxuda ağ saç görmək xəyalpərəstin cəmiyyətdə hörmətinin artacağını, müdrik qərarlar verəcəyini və mənəvi ucalığa nail olacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ saç görmək, insanın taleyindəki 'müdrik' bir mərhələni, təcrübələrin bəhrəsini və yaxın zamanda gələcək çox xeyirli bir nüfuz və ya ailə daxili mövqe artımını müjdələyən ali bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Təcrübənin və İşığın Psixoloji Analizi</h2>
<p>Saçlar insanın mənəvi gücünün və enerjisinin kənara çıxan hissəsidir. Ağ saç isə bu enerjinin 'durulduğu', hikmətə çevrildiyi formadır. Psixoloji olaraq bu yuxu, insanın real həyatda 'ciddi' qəbul edilmək istədiyini və ya öz çətinliklərindən mühüm dərslər çıxardığını əks etdirir. Siz bəlkə də yaşınızdan daha böyük bir məsuliyyət daşıyırsınız. Ağ saç Sizin daxili 'ağsaqqallığınızdır'; Sizin sözünüz artıq dinlənilir. Bu yuxu həm də daxili bir barışığın və keçmişlə olan hesablaşmanın müsbət nəticəsidir. Siz artıq kainatın sirlərinə daha yaxınsınız.</p>

<p>Yuxuda ağ saç görmək çox vaxt gənc insanlar üçün birdən-birə gələcək böyük bir hörmətə, vəzifədə yüksəlişə və ya uzun sürmüş bir problemin 'müdrikcəsinə' həllinə işarədir. Sizin üçün artıq nurli günlər başlayır. Bu prosesdə təmkinli qalmaq sizin ən böyük 'saç' bacarığınız olacaqdır.</p>

<h2>Saçın Halına Görə Müxtəlif Yozmalar</h2>
<p>Saçları necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Saçın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Öz Saçının Ağardığını Görmək</td>
      <td>Vəqar və Hörmət Artımı</td>
      <td>Cəmiyyətdə Nüfuz</td>
    </tr>
    <tr>
      <td>Saçda Tək-tək Ağlar Görmək</td>
      <td>Mühüm Bir Dərs / Oyanış</td>
      <td>Yeni Bir Vizyon</td>
    </tr>
    <tr>
      <td>Bütün Saçların Ağappaq Olması</td>
      <td>Tam bir Hikmət və Qurtuluş</td>
      <td>Böyük Bir Borcun Bitməsi</td>
    </tr>
    <tr>
      <td>Ağ Saçlı Tanış Şəxs</td>
      <td>Həmin Şəxsdən Alınacaq Dəstək</td>
      <td>Xəbər və Barışıq</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Saçları Boyamaq</h3>
<p>Bu yuxu bir xəbərdarlıqdır. Sizin bəzi həqiqətləri gizlətməyə çalışdığınızı və ya təcrübənizi gizlədib 'gənc və təcrübəsiz' görünmək istədiyinizi bildirir. Özünüz olun, ağ saç sizin şərəfinizdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ağ saç 'nur' (nur) kimidir. Peyğəmbərimiz (s.a.v) buyurub ki: 'İslam yolunda ağaran hər bir saç axirətdə nur olacaq'. Yuxuda ağ saç görmək bəndənin imanının yetkinləşməsinə və Allahın ona verdiyi rəhmətə işarədir. Bu yuxu sizə xatırladır ki, əgər təqvanızı (təmizliyinizi) qorusanız, sizin üçün bütün qapılar açılacaqdır. Səmimiyyət sizin ən böyük parıltınızdır. Qəlbinizi rəvan tutun.</p>

<h3>Müdrik Olun: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra qərarlarınızda daha təmkinli olun. Təcrübəli insanların məsləhətinə qulaq asın. Öz nüfuzunuzu qoruyun və ailə daxili ağsaqqallıq (liderlik) vəzifənizi yerinə yetirin. Keçmişdən dərs alın və gələcəyə inamla baxın. Unutmayın ki, ən böyük gənclik ruhun təravətidir. Sizin parlaq gələcəyiniz sizin müdrikliyinizdədir. İnamla və hikmətlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ saçların tökülməsi?", "answer": "Müvəqqəti bir güc itkisinə və ya ailədə bir kədərə, lakin səbirli olsanız daha yaxşısının gələcəyinə işarədir." },
            { "question": "Saçın qəfil qaralması?", "answer": "Həyatınızda yeni və dinamik bir dövrün (ola bilsin eşq) başlayacağına yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-adam-gormek"],
        rating_value: 4.7,
        review_count: 104
    },
    {
        slug: "yuxuda-ag-toz-gormek",
        title: "Yuxuda Ağ Toz Görmək",
        seo_title: "Yuxuda Ağ Toz Görmək: Gizli Sədəqə, Ruzi və Xeyirli Qazanc (2026)",
        seo_description: "Yuxuda ağ toz görməyin ən dəqiq yozmaları. Niyə ağ toz yuxuda həm bir bərəkət, həm də xırda, lakin xəyirli gəlirlərdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag toz, ag zerrecikler, bereket, ruzi, qazanc, sefa, yuxu yozmalari, yeni imkanlar",
        excerpt: "Yuxuda ağ toz görmək xəyalpərəstin həyatında xırda, lakin çoxsaylı sevinclərin baş verəcəyini, gözlənilməz ruzi alacağını və ya mənəvi bir təmizliyə hazırlaşdığını simvolizə edir.",
        highlight_box: "Yuxuda ağ toz görmək, insanın taleyindəki 'səpələnmiş' bərəkəti, hər tərəfdən gələcək kiçik müjdələri və yaxın zamanda gələcək çox xeyirli bir maddi artım və ya şəfa xəbərini müjdələyən maraqlı bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Zərrəciklərin və Bərəkətin Psixoloji Analizi</h2>
<p>Toz həm hər yerə sızan bir maddə, həm də çoxluğun rəmzidir. Ağ toz isə (un tozu və ya digər təmiz maddələr kimi) bu çoxluğun saflığını və xeyirliliyini təmsil edir. Psixoloji olaraq bu yuxu, insanın real həyatda 'kiçik detallardan' böyük bir nəticə çıxarmaq arzusunu əks etdirir. Siz bəlkə də bir işdə xırda qazancları toplayaraq böyük bir sərvət qurmaq istəyirsiniz. Ağ toz sizin səpələnmiş fürsətlərinizdir; onlar hər yerdədir, sadəcə onları görməyi və toplamağı bacarmalısınız. Bu yuxu həm də daxili bir hazırlığın və 'toz-duman' (sıxıntı) içindən nurlu bir çıxışın müjdəsidir. Siz artıq kainatın zərrəcikləri ilə rəqs edirsiniz.</p>

<p>Yuxuda ağ toz görmək çox vaxt xeyirli bir səfərdən gələcək qazanca, gizli bir sədəqənin bəhrəsinə və ya uzaqdan gələcək təmiz bir xəbərə işarədir. Sizin üçün artıq bərəkətli günlər başlayır. Bu prosesdə qənaətcil və səmimi qalmaq sizin ən böyük 'toz' bacarığınız olacaqdır.</p>

<h2>Tozun Halına Görə Müxtəlif Yozmalar</h2>
<p>Tozu necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Tozun Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pəncərədən Gələn Ağ Toz</td>
      <td>İlahi Rəhmət / Nur</td>
      <td>Duaların Qəbulu</td>
    </tr>
    <tr>
      <td>Üstünüzdə Ağ Toz Görmək</td>
      <td>Zənginlik və Ya Tanınma</td>
      <td>Gözlənilməz Pay</td>
    </tr>
    <tr>
      <td>Ağ Tozu Silmək</td>
      <td>Böyük Bir Maneəni Def Etmək</td>
      <td>Hüzur və Aydınlıq</td>
    </tr>
    <tr>
      <td>Ətrafın Ağ Tozla Örtülməsi</td>
      <td>Geniş Bir Bərəkət / Sülh</td>
      <td>Ailə Səadəti</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Şəkər Pudrası (Ağ Toz) Görmək</h3>
<p>Bu yuxu ağ tozun ən ləzzətli formasıdır. Sizin həyatınızda şirin və sevincli bir hadisənin baş verəcəyini, münasibətlərinizin qaydaya düşəcəyini və hər kəsin sizdən razı qalacağını bildirir. Dadınız şirin olacaqdır.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda toz bəzən 'sədəqə' və ya 'əməllərin zərrəsi' kimi görülür. Ağ toz görmək, bəndənin gizli etdiyi yaxşılıqların (gizli ruzinin) qat-qat geri dönməsinə işarədir. Dinimizdə buyurulduğu kimi, zərrə qədər yaxşılığın da cavabı vardır. Bu yuxu sizə xatırladır ki, xırda işləri kiçik görməyin, onlar böyük bir silsilənin başlanğıcıdır. Səmimiyyət sizin ən böyük zerrenizdir. Muradınız xeyirli olsun.</p>

<h3>Fırsatları Toplayın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra xırda qazanclarınıza və dostluqlarınıza daha çox dəyər verin. Hər bir fürsəti dəyərləndirin. Əlinizə keçən kiçik məbləğləri doğru istiqamətə yönəldin. Sevdiyiniz insanlara kiçik də olsa sürprizlər edin. Unutmayın ki, ən böyük çimərlik (uğur) kiçik qum dənələrindən ibarətdir. Sizin parlaq gələcəyiniz sizin bu kiçik, lakin təmiz addımlarınızdadır. İnamla irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ tozun gözə qaçması?", "answer": "Bəzi həqiqətləri görməkdə müvəqqəti bir çətinliyə, lakin göz yuyulduğunda tam bir aydınlığa işarədir." },
            { "question": "Tozun hisə (qara toza) çevrilməsi?", "answer": "Bir nemətin qədrini bilməməyə dair xəbərdarlıqdır." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-ag-un-gormek"],
        rating_value: 4.6,
        review_count: 31
    }
];

saveBatch(posts);
