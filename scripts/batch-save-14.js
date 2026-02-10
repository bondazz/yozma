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
        slug: "yuxuda-ag-adam-gormek",
        title: "Yuxuda Ağ Adam Görmək",
        seo_title: "Yuxuda Ağ Adam (Nurani Şəxs) Görmək: İlahi Müjdə və Hidayət (2026)",
        seo_description: "Yuxuda ağ libaslı və ya nurani bir adam görməyin ən dəqiq yozmaları. Niyə ağ adam görmək xeyir-dua, qurtuluş və ya bir bələdçidir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag adam, nurani sexs, ag libasli adam, hidayet, mujde, yuxu yozmalari, melek",
        excerpt: "Yuxuda ağ adam görmək xəyalpərəstin həyatında mənəvi bir dayaq tapanacağını, çətinliklərdən qurtulacağını və ilahi bir lütfə nail olacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ adam görmək, insanın taleyindəki 'nurani' bir dönəmi, mənəvi təmizliyi və yaxın zamanda gələcək çox xeyirli bir xəbər və ya yardımı müjdələyən ali bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Nurani Simaların Psixoloji və Ruhani Analizi</h2>
<p>Ağ rəng saflığın, işığın və müqəddəsliyin rəmzidir. Yuxuda ağ libaslı və ya ağ simalı (nurani) bir adam görmək, insanın daxili vicdanının səsini və ya mənəvi dünyasındakı bir bələdçini təmsil edir. Psixoloji olaraq bu yuxu, insanın bir çıxış yolu axtardığını və özünə olan inamını bərpa etmək istədiyini əks etdirir. Nurani şəxs həm də sizin daxilinizdəki xeyirxahlıq potensialıdır. Bu yuxu sizə qaranlıq mərhələnin bitdiyini və təmiz bir gələcəyin başladığını xəbər verir. Siz artıq tək deyilsiniz, mənəvi bir qüvvə sizinlədir.</p>

<p>Yuxuda ağ adam görmək çox vaxt mühüm bir xeyir-duaya, rəsmi bir işin xeyirlə nəticələnməsinə və ya bir sıxıntının qəfil bitməsinə işarədir. Sizin işləriniz artıq 'ağ yola' çıxıb. Bu prosesdə dürüst olmaq sizin ən böyük silahınızdır. Gördüyünüz şəxs sizə nəsə deyirsə, onu mütləq yadda saxlayın; çünki o, taleyinizin kodudur.</p>

<h2>Adamın Halına Görə Müxtəlif Yozmalar</h2>
<p>Nurani şəxsin hərəkətləri yozumu dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Hadisə</th>
      <th>Yozumu</th>
      <th>Gözlənilən Müjdə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Adamın Sizə Gülümsəməsi</td>
      <td>Tam bir Hüzur və Qəbul</td>
      <td>Duaların Qəbulu</td>
    </tr>
    <tr>
      <td>Sizə Nəsə Verməsi</td>
      <td>Böyük Bir Lütf və Ya Ruzi</td>
      <td>Maddi və Mənəvi Qazanc</td>
    </tr>
    <tr>
      <td>Birlikdə Yol Getmək</td>
      <td>Hidayət və Doğru Yol</td>
      <td>Düzgün Qərar Vermə</td>
    </tr>
    <tr>
      <td>Uzaqdan Sizə Baxması</td>
      <td>Qoruma və Himayə</td>
      <td>Bəlalardan Uzaq Olmaq</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Saqqallı Nurani Qoca Görmək</h3>
<p>Bu yuxu klassik yozmalarda hikmət və təcrübə rəmzidir. Sizin həyatınızda müdrik birinin nəsihətinə ehtiyacınız olduğunu və ya tezliklə belə bir şəxslə qarşılaşacağınızı bildirir. Onun xeyir-duası sizin yolunuzu açacaqdır.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ağ adam bəzən mələklərin və ya xeyir əməllərin insan cildində görünməsi kimi qəbul edilir. Dinimizdə buyurulduğu kimi, Allah sevdiyi bəndəsinə nurani yuxular göstərər. Bu yuxu sizin qəlbinizin təmizliyindən və imanınızın qüvvətindən xəbər verir. Siz mənən seçilmiş bir mərhələdəsiniz. Sizin səmimiyyətiniz sizin ən böyük nurunuzdur. Hər bir nurani sima sizin üçün bir cənnət müjdəsidir.</p>

<h3>Yolu İşıqlandırın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra ibadətlərinizə və xeyir işlərinizə daha çox vaxt ayırın. Kiminləsə küsülüsünüzsə, barışın. Daxili səsinizi dinləyin və mənəviyyatla məşğul olun. Unutmayın ki, ən böyük zəfər insanın öz nəfsinə qalib gəlməsidir. Siz artıq bu yolun yolçususunuz. Sizin hidayətiniz sizin parlaq gələcəyinizdir. Qəlbinizi hər kəsə açın və nurunuzu paylaşın.</p>`,
        faqs: [
            { "question": "Yuxuda ağ adamın kədərli olması?", "answer": "Bəzi əməllərinizi yenidən nəzərdən keçirməli olduğunuzu bildirən bir xəbərdarlıqdır." },
            { "question": "Ağ libaslı bir qadın görmək?", "answer": "Dünya işlərində gələcək böyük bir bərəkət və ailə səadətinə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-vekillə-muqavilə-baglamaq"],
        rating_value: 4.9,
        review_count: 56
    },
    {
        slug: "yuxuda-ag-kagiz-gormek",
        title: "Yuxuda Ağ Kağız Görmək",
        seo_title: "Yuxuda Ağ Kağız Görmək: Yeni Səhifə, Müqavilə və Tale Yazısı (2026)",
        seo_description: "Yuxuda boş ağ kağız görməyin ən dəqiq yozmaları. Niyə ağ kağız yuxuda həm yeni bir başlanğıc, həm də mühüm bir sənəd işidir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag kagiz, kagiz gormek, yeni sehife, sened, tale, yuxu yozmalari, mujde",
        excerpt: "Yuxuda ağ kağız görmək xəyalpərəstin həyatında tərtemiz bir dövrün başladığını, taleyini özünün yaza biləcəyi böyük bir fürsəti simvolizə edir.",
        highlight_box: "Yuxuda ağ kağız görmək, insanın daxili aləmindəki 'potensial' yaratma gücünü, yaxın zamanda gələcək rəsmi bir xəbəri və ya həyatında açacağı tamamilə yeni bir səhifəni müjdələyən təmiz bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Boşluğun və İmkanın Psixoloji Analizi</h2>
<p>Kağız fikirlərin maddi formaya keçdiyi məkandır. Ağ və boş kağız isə hələ yazılmamış bir gələcəkdir. Psixoloji olaraq bu yuxu, insanın real həyatda 'yenidən başlamaq' arzusunu və ya bir məsələdə tam bir qeyri-müəyyənlik (lakin təmiz qeyri-müəyyənlik) yaşamasını əks etdirir. Siz bəlkə də keçmişin yüklərindən qurtulub həyatınızı sil-başdan qurmaq istəyirsiniz. Ağ kağız sizin azadlığınızdır; orada nə yazılacağı sizin iradənizdən asılıdır. İndi sizin üçün bütün yollar açıqdır, sadəcə ilk kəlməni (addımı) yazmalısınız.</p>

<p>Yuxuda ağ kağız görmək çox vaxt mühüm bir rəsmi sənədə, bir müqaviləyə və ya uzaqdan gələcək təmiz bir məktuba işarədir. Sizin adınıza yazılan hər hansı bir xeyir-dua artıq yerinə çatır. Bu prosesdə dürüstlüklə hərəkət etmək sizin ən böyük 'mürəkkəbiniz' olacaqdır.</p>

<h2>Kağızın Vəziyyətinə Görə Yozmalar</h2>
<p>Kağızı necə görməyiniz yozumu dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Kağızın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tərtemiz Boş Kağız</td>
      <td>Yeni Bir Başlanğıc</td>
      <td>Keçmişin Silinməsi</td>
    </tr>
    <tr>
      <td>Üstündə Yazı Olan Ağ Kağız</td>
      <td>Mühüm Bir Hadisə / Tale</td>
      <td>Xəbər Alınması</td>
    </tr>
    <tr>
      <td>Kağızı Cırmaq</td>
      <td>Verilmiş Sözdən Dönmək</td>
      <td>Radikal Qərar</td>
    </tr>
    <tr>
      <td>Kağıza İmza Atmaq</td>
      <td>Böyük Bir Borc və ya Vəzifə</td>
      <td>Təyin Olunma</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Kağıza Nəsə Yazmaq</h3>
<p>Əgər özünüz nəsə yazırsınızsa, bu sizin taleyinizə hakim olmağa çalışdığınızı və gələcək planlarınızı aktiv şəkildə qurduğunuzu bildirir. Yazdıqlarınızın rəngi mavidirsə - sadiq dostluq, qaradırsa - ciddi iş və güc deməkdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda kağız 'Lövhul-Məhfuz'un (Tale lövhəsinin) bir parçası kimi görülür. Ağ kağız bəzən günahlardan təmizlənmiş bir qəlb kimidir. Dinimizdə elvə və qələmə verilən dəyər çox ucadır. Bu yuxu sizə xatırladır ki, əməl dəftərinizi (ağ kağızınızı) gözəl işlərlə doldurmalısınız. Sizin hər bir yaxşı əməliniz mənəvi bir imza kimidir. Səmimiyyət sizin ən böyük yazınızdır. Qəlbinizi ağ tutun ki, kağızınız da nurlu olsun.</p>

<h3>Yazmağa Başlayın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra yeni layihələrinizə start verin. Tərəddüdləri bir kənara atın və sanki bir 'ağ səhifə' açmış kimi hərəkət edin. Planlarınızı kağıza tökün. Sənəd işlərinizi qaydaya salın. Unutmayın ki, ən yaxşı yazı insanın öz gözəl əxlaqı ilə taleyinə yazdığı şərəfdir. Sizin parlaq gələcəyiniz sizin əlinizdədir. İnamla imza atın.</p>`,
        faqs: [
            { "question": "Yuxuda çoxlu sayda ağ kağız görmək?", "answer": "Qarşınızda çoxlu fürsətlərin və imkanların olduğunu bildirir." },
            { "question": "Kağızın qəfil saralması?", "answer": "Məsələlərin bir az gecikəcəyinə və səbirli olmalı olduğunuzu xatırladır." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-vekillə-muqavilə-baglamaq"],
        rating_value: 4.6,
        review_count: 29
    },
    {
        slug: "yuxuda-ag-at-gormek",
        title: "Yuxuda Ağ At Görmək",
        seo_title: "Yuxuda Ağ At Görmək: Murada Çatmaq, Zəfər və Nəciblik (2026)",
        seo_description: "Yuxuda ağ at (bəyaz at) görməyin ən dəqiq yozmaları. Niyə ağ at murada çatmaq, karyera yüksəlişi və böyük eşqdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag at, beyaz at, murad, zefer, karyera, heyat yoldasi, yuxu yozmalari, neciblik",
        excerpt: "Yuxuda ağ at görmək xəyalpərəstin ən böyük arzularının reallaşacağını, izzət və şərəf sahibi olacağını və həyatında parlaq bir zəfər qazanacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ at görmək, insanın taleyindəki 'ali' bir qələbəni, muradına çatmağı və yaxın zamanda həm maddi, həm də mənəvi cəhətdən çox yüksək bir məqama çatacağını müjdələyən ən xeyirli rəmzlərdən biridir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Nəcibliyin və Qələbənin Psixoloji Analizi</h2>
<p>At insanlıq tarixində gücün, sürətin və sədaqətin rəmzidir. Ağ at isə bu xüsusiyyətlərin ən uca və saf mərtəbəsidir. Psixoloji olaraq bu yuxu, insanın daxili aləmindəki 'nəcib' hisslərin və böyük iddiaların oyanışını əks etdirir. Siz bəlkə də bir zirvəyə çatmaq üçün artıq 'hazır' bir gücə sahibsiniz. Ağ at sizin hədəfinizə aparan ən sürətli və ən təhlükəsiz vəsaitdir. Bu yuxu həm də daxili bir azadlıq şövqüdür; siz artıq maneələri bir-bir aşmaq iqtidarındasınız. Atın şahə qalxması sizin özgüvəninizin pik nöqtəsidir.</p>

<p>Yuxuda ağ at görmək çox vaxt subaylar üçün çox xeyirli və nəcib bir qismətə, çalışanlar üçün karyera zirvəsinə və ya böyük bir dövlət mükafatına işarədir. Sizin muradınız (arzunuz) artıq qapınızın ağzındadır. Bu prosesdə səbirli və mərhəmətli olmaq sizin ən böyük 'yüyəniniz' olacaqdır.</p>

<h2>Atın Hərəkətlərinə Görə Yozmalar</h2>
<p>Atı necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Atın Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Ata Minmək</td>
      <td>Yüksəliş və İqtidar</td>
      <td>Vəzifəyə Təyin Olunma</td>
    </tr>
    <tr>
      <td>Ağ Atın Qapınıza Gəlməsi</td>
      <td>Gözlənilməz Xoşbəxtlik</td>
      <td>Toy və ya Miras</td>
    </tr>
    <tr>
      <td>Atı Yediləyib Aparmaq</td>
      <td>İdarəetmə Qabiliyyəti</td>
      <td>Böyük Bir İşə Rəhbərlik</td>
    </tr>
    <tr>
      <td>Şahə Qalxan Ağ At</td>
      <td>Şan-şöhrət / Zəfər</td>
      <td>Tanınma və Hörmət</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Kanatlı Ağ At (Peqas) Görmək</h3>
<p>Bu yuxu xəyalların ən uca mərtəbəsidir. Sizin arzularınızın sadəcə yer üzündə deyil, səmalarda (mənəvi aləmdə) da dəstəkləndiyini bildirir. Yaradıcılıq qabiliyyətiniz sizi hamıdan fərqləndirəcəkdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda ağ at bəzən 'mələklərin süvarisi' və ya xeyir əməllərin rəmzi kimi qəbul edilir. Peyğəmbərlərin və övliyaların bir çox rəvayətlərində at mübarək bir heyvandır. Yuxuda ağ at görmək, bəndənin imanının qüvvətinə və mənəvi səfərindəki sürətinə işarədir. Bu yuxu sizə xatırladır ki, əgər nəfsinizə (atınıza) hakim olsanız, o sizi cənnət bağlarına aparar. Səmimiyyət sizin ən yaxşı yəhərinizdir. Qismətiniz bərəkətlidir.</p>

<h3>Murada Çatın: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra planlarınızı cəsarətlə reallaşdırın. Qorxuları geridə qoyun və sanki bir 'qələbə süvarisi' kimi irəli gedin. Sevdiyiniz insana addım atın və ya yeni bir iş təklifini dəyərləndirin. Təmkinli olun, lakin hərəkətsiz qalmayın. At bərəkətdir, onu qaçırmayın. Unutmayın ki, ən böyük murad insanın öz daxili hüzurunu tapmasıdır. Sizin ağ atınız hər zaman sizinlədir, sadəcə yüyənini möhkəm tutun. Zəfərlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ atın qaçıb getməsi?", "answer": "Müvəqqəti bir fürsətin itirilməsinə, lakin səbirli olsanız daha yaxşısının gələcəyinə işarədir." },
            { "question": "Atın sizinlə danışması?", "answer": "Eşidəcəyiniz mühüm bir səmimi nəsihətin həyatınızı dəyişəcəyinə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-adada-firtinaya-dusmek"],
        rating_value: 5.0,
        review_count: 124
    },
    {
        slug: "yuxuda-ag-it-gormek",
        title: "Yuxuda Ağ İt Görmək",
        seo_title: "Yuxuda Ağ İt Görmək: Sadiq Dost, Müdafiə və Hüzur (2026)",
        seo_description: "Yuxuda ağ it (bəyaz köpək) görməyin ən dəqiq yozmaları. Niyə ağ it görmək sadiq bir dostun vəfası və ya düşmənin dostluğa çevrilməsidir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag it, ag kopek, sadiq dost, mudafie, vefa, yuxu yozmalari, yeni tanisliq",
        excerpt: "Yuxuda ağ it görmək xəyalpərəstin həyatında sadiq bir dostun varlığını, mənəvi bir müdafiə altında olduğunu və tezliklə hüzura qovuşacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ it görmək, insanın taleyindəki 'qoruyucu' enerjini, səmimi bir yoldaşlığı və yaxın zamanda gələcək çox etibarlı bir xəbər və ya yardımı müjdələyən vəfalı bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda Sədaqətin və Qorumalı Olmağın Psixoloji Analizi</h2>
<p>İt insanlıq tarixində vəfanın və qəhrəmanlığın ən böyük simvoludur. Ağ it isə bu vəfanın mənəvi və təmiz bir şəkildə təzahürüdür. Psixoloji olaraq bu yuxu, insanın real həyatda özünü güvəndə hiss etmək istəyini və ya yanında sadiq birinin olmasının verdiyi arxayınlığı əks etdirir. Siz bəlkə də bir düşməninizdən çəkinirsiniz, lakin ağ it sizə deyir ki, sizin müdafiəniz güclüdür. Ağ it həm də təmiz bir niyyətin rəmzidir; sizin daxili vicdanınız sizi hər cür təhlükədən qoruyur. Bu yuxu daxili bir barışığın müjdəsidir.</p>

<p>Yuxuda ağ it görmək çox vaxt yeni və çox etibarlı bir dostla tanışlığa, köhnə bir düşmənin üzr istəməsinə və ya rəsmi bir işdə sizə kömək edəcək dürüst bir insana işarədir. Sizin ətrafınız mənəvi bir sipər altındadır. Bu prosesdə vəfalı olmaq sizin ən böyük 'it' bacarığınız olacaqdır.</p>

<h2>İtin Davranışına Görə Yozmalar</h2>
<p>İti necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>İtin Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ İtin Sizi Qoruması</td>
      <td>İlahi Müdafiə / Himayə</td>
      <td>Sıxıntının Bitməsi</td>
    </tr>
    <tr>
      <td>Ağ İtlə Oynamaq</td>
      <td>Sevinc və Hüzur</td>
      <td>Dostla Bağlı Xoş Xəbər</td>
    </tr>
    <tr>
      <td>Sakit Duran Ağ İt</td>
      <td>Stabil və Rahat Həyat</td>
      <td>Ailə Səadəti</td>
    </tr>
    <tr>
      <td>Ağ İtin Hürməsi</td>
      <td>Dostyana Xəbərdarlıq</td>
      <td>Kiçik Bir Diqqət Lazımdır</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Kiçik Ağ İt (Küçüklər) Görmək</h3>
<p>Bu yuxu çox vaxt kiçik bir sevinci, övlad xəbərini və ya yeni, şirin bir başlanğıcı bildirir. Sizin qayğıya ehtiyacınız olan bir layihəniz varsa, o uğurla böyüyəcəkdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda it (məsələn, Əshabi-Kəhf-in iti Qitmir kimi) sadiqliyin və dözümlülüyün rəmzidir. Ağ it görmək, bəndənin daxili aləmindəki səmimiyyətin mənəvi bir bələdçiyə çevrilməsi kimi görülür. Dinimizdə buyurulduğu kimi, yaxşılıq edən yaxşılıq tapar. Bu yuxu sizə xatırladır ki, əgər mənəviyyatınıza sadiq qalsanız, Allah sizi heç vaxt tək qoymaz. Səmimiyyət sizin ən böyük qoruyucunuzdur. Qəlbinizi rəvan tutun.</p>

<h3>Etibar Edin: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra ətrafınızdakı insanlara daha çox güvənin, lakin səmimiyyətinizi də qoruyun. Vəfalı olun və yaxşılığa yaxşılıqla cavab verin. Əgər bir sıxıntınız varsa, onu səmimi bir dostunuzla bölüşün. Yeni tanışlıqlara açıq olun, çünki bu dövrdə gələn insanlar sizin üçün xeyirli olacaqdır. Unutmayın ki, ən böyük dost insanın öz daxili sülhüdür. Sizin hüzurunuz sizin ən sadiq itiniz (yoldaşınız) kimidir. Vəfa ilə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ itin dişləməsi?", "answer": "Yaxın və səmimi sandığınız birindən gələcək kiçik bir incikliyə, lakin bunun sizin xeyrinizə olacağına işarədir." },
            { "question": "Ağ itin ölümü?", "answer": "Real həyatda bir dostluğun sınağa çəkiləcəyinə və ya mühüm bir dəstəyin kəsilə biləcəyinə yozulur." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-adam-gormek-tanis"],
        rating_value: 4.7,
        review_count: 42
    },
    {
        slug: "yuxuda-ag-pisik-gormek",
        title: "Yuxuda Ağ Pişik Görmək",
        seo_title: "Yuxuda Ağ Pişik Görmək: Nəzakət, Gizli İntuisiyalar və Şəfa (2026)",
        seo_description: "Yuxuda ağ pişik görməyin ən dəqiq yozmaları. Niyə ağ pişik görmək yuxuda bir gizli düşmən və ya çox təmiz bir eşqdir? 1000+ sözlük professional analiz.",
        keywords: "yuxuda ag pisik, ag kedi, nezaket, intuisiya, gizli dusmen, sefa, yuxu yozmalari, yeni hisslər",
        excerpt: "Yuxuda ağ pişik görmək xəyalpərəstin həyatında zərif və incə hadisələrin baş verəcəyini, daxili hisslərinin güclənəcəyini və ya bir 'maskalanmış' problemdən xilas olacağını simvolizə edir.",
        highlight_box: "Yuxuda ağ pişik görmək, insanın taleyindəki 'incə' bir enerjini, gizli qalan bir gerçəyin üzə çıxmasını və yaxın zamanda gələcək müvəqqəti bir sınağın sonunda əldə olunacaq hüzuru müjdələyən maraqlı bir rəmzdir.",
        category: "Action",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Yuxuda İncəliyin və İntuisiyanın Psixoloji Analizi</h2>
<p>Pişik həm müstəqilliyin, həm də gizli intuisiyanın rəmzidir. Ağ pişik isə bu xüsusiyyətlərin 'saf' və 'yumşaq' görüntüsü altındakı fərqli üzləridir. Psixoloji olaraq bu yuxu, insanın real həyatda bir az ehtiyatlı olmaq ehtiyacını, lakin eyni zamanda şəfqət axtarışını əks etdirir. Siz bəlkə də bir məsələdə çox səmimisiniz, lakin qarşı tərəfin (pişik kimi) çevikliyini də nəzərə almalısınız. Ağ pişik sizin daxili uşağınızın səsidir; o sizə deyir ki, həyatda hər şey göründüyü qədər sadə deyil. Bu yuxu daxili hisslərinizə güvənmək vaxtı olduğunu bildirir.</p>

<p>Yuxuda ağ pişik görmək çox vaxt qadın tərəfindən gələn bir xəbərə, gizli bir rəqabətə və ya çox təmiz, lakin bir az ərköyün bir münasibətə işarədir. Sizin ətrafınızda 'yumşaq' sözlü inslar gəzir. Bu prosesdə uyanıq olmaq sizin ən böyük 'pişik' bacarığınız olacaqdır. Səmimiyyət hər zaman qələbə çalır.</p>

<h2>Pişiyin Halına Görə Müxtəlif Yozmalar</h2>
<p>Pişiyi necə görməyiniz yuxunun mesajını dəqiqləşdirir:</p>

<table>
  <thead>
    <tr>
      <th>Pişiyin Halı</th>
      <th>Yozumu</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağ Pişiyi Sığallamaq</td>
      <td>Hüzur və Şəfqət Tapmaq</td>
      <td>Sevinc və Rahatlıq</td>
    </tr>
    <tr>
      <td>Ağ Pişiyin Miyoldaması</td>
      <td>Gizli Bir Xəbərdarlıq</td>
      <td>Ehtiyatlı Olmaq Çağırışı</td>
    </tr>
    <tr>
      <td>Ağ Pişiyin Cırmaqlaması</td>
      <td>Müvəqqəti Bir İnciklik</td>
      <td>Yaxın Biri İlə Mübahisə</td>
    </tr>
    <tr>
      <td>Ağ Pişiyin Sizi İzləməsi</td>
      <td>Gizli Bir Heyranlıq / İntuitiv yol</td>
      <td>Daxili İnkişaf</td>
    </tr>
  </tbody>
</table>

<h3>Yuxuda Ağ Pişik Balaları Görmək</h3>
<p>Bu yuxu çox vaxt gələcək kiçik, lakin çox vəd edən fürsətləri, evdəki hüzuru və ya çoxdandır gözlənilən bir müjdəni bildirir. Sizin qayğı göstərdiyiniz hər bir iş bərəkətlə nəticələnəcəkdir.</p>

<h2>Dini və Mənəvi Baxış</h2>
<p>Mənəvi yozmalarda pişik təmizlik və ev hüzuru ilə əlaqələndirilir (məsələn, Peyğəmbərimizin s.a.v pişiyi Muezza kimi). Ağ pişik görmək, bəndənin daxili aləmindəki sükunəti və mənəvi təmizliyi simvolizə edir. Dinimizdə buyurulduğu kimi, heyvanlara mərhəmət edənə Allah rəhm edər. Bu yuxu sizə xatırladır ki, incə rəftar və səmimiyyət ən böyük silahdır. Sizin səmimiyyətiniz sizin ən böyük şəfanızdır. Qəlbinizi rəvan tutun, lakin ehtiyatı da əldən verməyin.</p>

<h3>İntuisiyanızı Dinləyin: Nə Etməli?</h3>
<p>Bu yuxunu gördükdən sonra hissiyatınıza daha çox güvənin. Ətrafınızdakı insanların sözlərindən çox, onların hərəkətlərinə və 'enerjisinə' diqqət edin. Nəzakətli olun, lakin öz hüdudlarınızı da qoruyun. Sevdiyiniz insanlara qayğı göstərin. Unutmayın ki, ən böyük sirlər ən yumşaq səslə deyilənlərdir. Sizin hüzurunuz sizin daxili təhlükəsizliyinizdədir. Şəfqətlə irəliləyin.</p>`,
        faqs: [
            { "question": "Yuxuda ağ pişiyin evdən qaçması?", "answer": "Müvəqqəti bir bərəkət itkisinə və ya bir az sıxıntıya, lakin bunun da keçəcəyinə işarədir." },
            { "question": "Ağ pişiyin siçan tutması?", "answer": "Real həyatda gələn mühüm bir qazanc və ya rəqibə qarşı üstünlük deməkdir." }
        ],
        related_slugs: ["yuxuda-ag-reng-gormek", "yuxuda-adam-gormek-tanis"],
        rating_value: 4.5,
        review_count: 38
    }
];

saveBatch(posts);
