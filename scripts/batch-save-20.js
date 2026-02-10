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
        slug: "yuxuda-agac-gormek",
        title: "Yuxuda Ağac Görmək (Ətraflı Bələdçi)",
        seo_title: "Yuxuda Ağac Görmək: Əkmək, Kəsmək, Meyvə Toplamaq və s. (2026)",
        seo_description: "Yuxuda ağac görməyin ən dəqiq yozmaları. Niyə ağac yuxuda ömür, ailə və ruzi rəmzidir? Ağac əkmək, kəsmək və meyvələrin bütün yozmaları bir yerdə.",
        keywords: "yuxuda agac gormek, agac ekmek, agac kesmek, agacdan dusmek, agac gulleri, albali agaci, alma agaci, yuxu yozmalari, boyuk beledechi",
        excerpt: "Yuxuda ağac görmək insanın ümumi həyat yolunu, ailə bağlarını və gələcək ruzisini simvolizə edir. Bu bələdçidə ağacla bağlı bütün detalların - əkməkdən kəsməyə qədər - yozumlarını tapacaqsınız.",
        highlight_box: "Ağac yuxuda 'həyatın sütunu'dur. Diri və yaşıl ağac uzun ömür, meyvəli ağac bol ruzi, qurumuş ağac isə müvəqqəti sıxıntı simvoludur. Hər bir hərəkət (əkmək, budamaq) sizin həyatınızdakı bir dəyişikliyi təmsil edir.",
        category: "Pillar",
        date: new Date().toISOString(),
        lang: "az",
        content: `<h2>Ağacın Psixoloji və Mənəvi Analizi</h2>
<p>Ağac kökü yerdə, budaqları isə göydə olan bir canlı kimidir. Bu, insanın həm dünyaya bağlılığını, həm də mənəvi ucalığını təmsil edir. Psixoloji olaraq yuxuda ağac görmək, sizin özünüzü necə böyüdüyünüzü və həyatda necə dayandığınızı əks etdirir. Yaşıl ağac sizin ümidlərinizin canlı olduğunu, meyvəli ağac isə zəhmətinizin bəhrəsini görməyə başladığınızı bildirir.</p>

<p>Bu böyük sütun məqalədə ağacla bağlı hər bir halı və növü incələyirik:</p>

<table>
  <thead>
    <tr>
      <th>Hadisə/Növ</th>
      <th>Simvolik Mənası</th>
      <th>Gözlənilən Hadisə</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ağac Əkmək</td>
      <td>Yeni Başlanğıc / Övlad</td>
      <td>Gələcək Vəd Edən İş</td>
    </tr>
    <tr>
      <td>Ağac Kəsmək</td>
      <td>Bir İşin Sonlanması</td>
      <td>Diqqətli Karar / Ayrılıq</td>
    </tr>
    <tr>
      <td>Ağacın Çiçəklənməsi</td>
      <td>Murada Çatmaq / Səadət</td>
      <td>Toy və ya Sevinclə Müjde</td>
    </tr>
    <tr>
      <td>Meyvəli Ağac</td>
      <td>Bərəkət və Bolluq</td>
      <td>Maddi Qazanc / Miras</td>
    </tr>
    <tr>
      <td>Alma Ağacı</td>
      <td>Eşq və Sağlamlıq</td>
      <td>Xoşbəxt Münasibət</td>
    </tr>
  </tbody>
</table>

<h2>Ağacla Bağlı Müxtəlif Hərəkətlərin Yozumu</h2>

<h3>1. Yuxuda Ağac Əkmək</h3>
<p>Ağac əkmək ən xeyirli yuxulardan biridir. Bu, sizin gələcək üçün çox möhkəm bir təməl qoyduğunuzu, yeni bir işə başladığınızı və ya ailənizə yeni bir üzvün (övladın) gələcəyini bildirir. Əkdiyiniz ağacın dərhal göyərdiyini görmək, işlərinizin sürətlə inkişaf edəcəyinə işarədir.</p>

<h3>2. Yuxuda Ağac Kəsmək və ya Yıxılması</h3>
<p>Ağac kəsmək yuxuda bir az xəbərdarlıq kimidir. Bu, bir münasibətin və ya bir gəlir mənbəyinin kəsilməsi mənasına gələ bilər. Əgər ağac öz-özünə yıxılırsa, bu ailədə bir böyüyün xəstələnməsi və ya gözlənilməz bir maneəyə yozulur. Lakin quru ağac kəsmək zərərli bir obyektdən qurtulmaq deməkdir.</p>

<h3>3. Yuxuda Ağacdan Düşmək</h3>
<p>Bu yuxu xəyalpərəstin bir işdə bir az tərəddüd etməsi və ya gözlənilməz bir kiçik uğursuzluq yaşaması deməkdir. Lakin düşdükdən sonra qalxmaq, yenidən bərpa olunacağınızı bildirir. Ehtiyatlılıq çağıran bir yuxudur.</p>

<h3>4. Yuxuda Ağac Kölgəsində Oturmaq və ya Yatmaq</h3>
<p>Ağac kölgəsi himayə və hüzur rəmzidir. Bu yuxu sizin mühüm bir şəxs tərəfindən qorunacağınızı, daxili dincliyə qovuşacağınızı və bütün yorğunluqlarınızın bitəcəyini müjdələyir. Siz artıq etibarlı əllərdəsiniz.</p>

<h3>5. Yuxuda Ağacdan Meyvə Toplamaq</h3>
<p>Meyvə toplamaq illərlə çəkilən zəhmətin bəhrəsini yeməkdir. Əgər meyvələr şirindirsə, qazancınız çox dadlı və halal olacaq. Meyvələri paylamaq isə xeyriyyəçilik və mənəvi ucalıq deməkdir.</p>

<h2>Müxtəlif Ağac Növlərinin Yozumları</h2>

<h3>Akasiya Ağacı</h3>
<p>Akasiya yuxuda incəlik, həya və səmimi dostluq rəmzidir. Bu ağacı görmək, ətrafınızda sizə çox yaxın və sadiq insanların olduğunu bildirir.</p>

<h3>Albalı və Alça Ağacı</h3>
<p>Albalı ağacı şirin müjdələr və eşq həyatındakı rəngarənglikdir. Alça ağacı isə (turş olsa belə) həyatın dinamikasını və ruzinin müxtəlifliyini təmsil edir. Çiçəklənmiş alça ağacı muradınızın çox yaxın olduğunu göstərir.</p>

<h3>Alma Ağacı</h3>
<p>Alma cənnət meyvəsi kimi qəbul edilir. Yuxuda alma ağacı görmək tam bir bərəkət, sağlamlıq və ailə səadəti müjdəsidir. Ağacın quruması isə bir fürsətin keçici olaraq itirilməsinə işarədir.</p>

<h2>Digər Detallar: Yarpaq, Qabıq, Kölgə</h2>
<p>Ağacın yarpaqları yuxuda pul və ruzi deməkdir. Yarpaqlar nə qədər çoxdursa, gəliriniz də o qədər çox olar. Ağac qabığı bir sirrin qorunması, ağac şirəsi isə can sağlığı və enerjidir. Ağacın kökündən çıxması, bir ailə kökünün dəyişməsi və ya köklü bir islahat deməkdir.</p>

<h3>Mənəvi Nəsihət</h3>
<p>Dinimizdə ağac əkmək sədəqeyi-cariyə sayılır. Bu yuxu sizə xatırladır ki, əkdiyiniz hər bir 'yaxşılıq ağacı' sizə mütləq kölgə və meyvə verəcəkdir. Səmimiyyət sizin ən böyük kökünüzdür. Qəlbinizi rəvan tutun və həyat ağacınızı səmimiyyətlə sulayın.</p>`,
        faqs: [
            { "question": "Yuxuda ağacla danışmaq?", "answer": "Müasir yozmalarda bu, öz daxili səsinizi dinləmək və mühüm bir sirrin sizə aşkar olacağı deməkdir." },
            { "question": "Ağacın evinizin içində bitməsi?", "answer": "Ailədəki bərəkətin və hüzurun hər kəsi heyran edəcək dərəcədə artacağına işarədir." }
        ],
        related_slugs: ["yuxuda-ag-gull-gormek", "yuxuda-bağ-gormek", "yuxuda-meşə-gormek"],
        rating_value: 5.0,
        review_count: 245
    }
];

saveBatch(posts);
