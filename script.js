
const users = {
  admin: { role: 'Admin', email: 'admin@bcp.com', password: '1234' }, 
};

const savedUsers = localStorage.getItem('users');
if (savedUsers) {
  Object.assign(users, JSON.parse(savedUsers));
}

const allModules = {
  fildis:{
  1: [
  { question: "Ayon kay mayroong 100 na wika sa Pilipinas?", options: ["Dr Enero to Constantino", "Gunigundo ng Valenzuela", "Dr Ricardo Ma.", "Duran Nolasco"], answer: 0 },
  { question: "Ayon kay bago pa ang kolonyalisasyon ay pamilya ng malayo-polinesyo ang wikang Filipino?", options: ["Dr Enero to Constantino", "Gunigundo ng Valenzuela", "Lorenzo Hueves", "Duran Nolasco"], answer: 2 },
  { question: "Nagpatunay na ang wikang Filipino na kaya itong tanggapin sa iba’t ibang rehiyon at gawing katuwang ng wika ng rehiyon dahil ang komposisyon ng Filipino ay hindi nalalayo sa naturang wika?", options: ["Dr Ernesto Constantino", "Dr. Robert T. Anonuevo", "Lorenzo Hueves", "Duran Nolasco"], answer: 1 },
  { question: "Isa sa bansang bumuo ng kaharian ng Netherland at malapit sa Venezuela?", options: ["Aruba", "Timor-leste", "Malaysia", "Singapore"], answer: 0 },
  { question: "Bansa na may labing isa ang opisyal na wika?", options: ["South Africa", "Suriname", "Singapore", "India"], answer: 0 },
  { question: "Anong taon isinumite sa senado ang House Bill Blg. 4719?", options: ["2015", "2013", "2008", "2017"], answer: 2 },
  { question: "Ano ang isinumite sa senado kung saan ang paksa ay paggamit ng unang wika bilang midyum ng pagtuturo?", options: ["Ordinansang Blg.74", "MTB-MLE", "KWF", "House bill blg. 47"], answer: 3 },
  { question: "Isa ito sa mga naging bagong direksyon sa pag-iimplementa ng K to 12", options: ["Ordinansang Blg.74", "MTB-MLE", "KWF", "House bill blg. 47"], answer: 1 },
  { question: "Ano ang tinatalakay sa Ordinansa Blg. 74?", options: ["Paggamit ng teknolohiya sa pag tuturo", "Pagsasagawa ng MTB-MLE", "Paggamit ng unang wika ng mga mag-aaral", "Pagbabahagi ng impormasyon sa pag-aaral"], answer: 2 },
  { question: "Bansang itinuturing na bahagi ng Africa?", options: ["Mauritius", "Singapore", "Suriname", "Malaysia"], answer: 0 }
],
   
  2: [
  { question: "Ayon kay ang anomang wika sa daigdig tulad ng wikang Filipino, ay nalilikha, nililinang, pinagyayaman at hindi lamang basta isinilang.", options: ["G. Eugene Y. Evasco", "Gloria Macapagal -Arroyo", "Dr. David San Juan", "Bienvenido Lumbera"], answer: 0 },
  { question: "Dating pangulong ginawa ang Pang-ehekutibo (E.O) 210 na nag-aanyas na ibalik ang Ingles bilang wikang panturo sa bansa", options: ["G. Eugene Y. Evasco", "Gloria Macapagal -Arroyo", "Rodrigo Duterte", "Bienvenido Lumbera"], answer: 1 },
  { question: "Ayon kay ang konvinor ng Tanggol Wika at dalubguro sa Pamantasan ng De La Salle, ang Wikang Pambansa ang tanging wika ng mga kilusang panlipunan", options: ["G. Eugene Y. Evasco", "Gloria Macapagal -Arroyo", "Dr. David San Juan", "Bienvenido Lumbera"], answer: 2 },
  { question: "Ano ang inilabas na Memo ng CHED na serye ng 2013 tahasang inaalis ang mga asignaturang sa wika, agham panlipunan at kasaysayan sa antas ng tersyaryo.", options: ["House bill 4701", "United nation", "CMO#20", "CMO# 30"], answer: 2 },
  { question: "Ayon kay sa pagtanggap natin sa wika, pumapaloob tayo sa isang lipunan at nakikiisa sa mga taong naroon", options: ["G. Eugene Y. Evasco", "Gloria Macapagal -Arroyo", "Dr. David San Juan", "Bienvenido Lumbera"], answer: 3 },
  { question: "Ano ang Taliwas sa mga obsebasyon ng mga kritiko at pinatunayan ng pag aaral ng United Nation", options: ["Kahalagahan ng wika at hamon na kinakaharap nito. At ito ay ag sisilbing pagkakakilanlan", "Paggamit ng teknolohiya sa pag aaral", "Pag papa buti ng wika sa bansang Pilipinas", "Pag -aalaga sa ating kapaligiran"], answer: 0 },
  { question: "Ang \"Act Prescribing English as Medium of Instructions in the Philippines School\" ay nakapaloob ?", options: ["House Bill 4701", "House Bill 1254", "CMO #20", "Serye ng 2013"], answer: 0 },
  { question: "Bakit mahalaga ang wika sa Tersyarya ayon sa tanggol wika ?", options: ["Hindi mahalaga sapagkat ito ay hindi nanakakatulong", "Marami ang nanatiling buo ang paniniwala na ang mga umiiral na wika sa Pilipinas ay ang sagot sa mga suliranin ng Pambansang Edukasyon", "Isa lamang ito nagpapakita ng pag kakakilanlan", "Wala sa nabanggit"], answer: 1 },
  { question: "Siya ang nag bigay ng kahalagahan sa wikang Filipino bilang isang indibidwal", options: ["G. Eugene Y. Evasco", "Gloria Macapagal -Arroyo", "Dr. David San Juan", "Bienvenido Lumbera"], answer: 3 },
  { question: "Ano ang ginawa ng Pang-ehekutibo na nag-aanyas na ibalik ang Ingles bilang wikang panturo sa bansa ?", options: ["House Bill 4701", "House Bill 1254", "CMO #20", "(E.O) 210"], answer: 3 }

  ],
  3:[
  { question: "Dito higit na kailangan ng maingat na pag-aaral at pag-iimbestiga sa larangang ito ay walang hanggang ang pag-unlad", options: ["Pananaliksik sa Politika", "Pananaliksik sa Edukasyon", "Pananaliksik ng mga mag-aaral", "Pananaliksik sa Agham"], answer: 0 },
  { question: "Mahalaga makapagtatag ng matibay na pundasyon ng karunungan sa isip ng mga mag-aaral sa pamamagitan ng pagtuklas", options: ["Pananaliksik sa Politika", "Pananaliksik sa Edukasyon", "Pananaliksik ng mga mag-aaral", "Pananaliksik sa Agham"], answer: 1 },
  { question: "Pagpapatupad ng mga kapasyahan sa isang negosyo ay batay na rin sa resulta ng maingat na pagpaplano at pagsusuri", options: ["Pananaliksik sa Politika", "Pananaliksik sa Edukasyon", "Pananaliksik sa Negosyo at Industriya", "Pananaliksik sa Agham"], answer: 2 },
  { question: "Marahil kung walang pananaliksik ay atrasado pa rin ang ating pamumuhay sa kasalukuyan.", options: ["Pananaliksik sa Politika", "Pananaliksik sa Edukasyon", "Pananaliksik ng mga mag-aaral", "Pananaliksik sa Agham"], answer: 3 },
  { question: "Bilang refleksiyon ng talino at husay ng mananaliksik, matagal nang nakasusulat ng pananaliksik sa Filipino ang mga Pilipino lalo na ang mga nakapagdalubhasa sa Filipino", options: ["Buod", "Pananaliksik", "Kabanata", "Nobela"], answer: 1 },
  { question: "Sino ang mananaliksik sa Pagsasalin sa Filipino ng Pup students Handbook ?", options: ["John Cenon G. Barrios", "Mariel Sofia D. Garrot", "John Michael D Oliver", "Dr. David San Juan"], answer: 1 },
  { question: "Sino ang mananaliksik Language of fashion : Pagsusuri sa Penomenon ng Hype beast ?", options: ["John Cenon G. Barrios", "Mariel Sofia D. Garrot", "John Michael D Oliver", "Dr. David San Juan"], answer: 2 },
  { question: "Sino mananaliksik ang naratibo ng ng pakikibaka sa panitikang oral ng mga \"Matigsalug\"", options: ["John Cenon G. Barrios", "Mariel Sofia D. Garrot", "John Michael D Oliver", "Dr. David San Juan"], answer: 1 },
  { question: "Lingguwistikong Etnograpiya ng Filipinas : Ayata Ambaka", options: ["Pananaliksik sa Politika", "Pananaliksik sa Edukasyon", "Pananaliksik ng mga mag-aaral", "Pananaliksik sa Agham"], answer: 1 },
  { question: "Pananaliksik Pagsasalin sa Filipino ng Pup students Handbook ?", options: ["Pananaliksik sa Politika", "Pananaliksik sa Edukasyon", "Pananaliksik ng mga mag-aaral", "Pananaliksik sa Agham"], answer: 2 }
],
4:[
  { question: "Ano ang katumbas na Terminolohiya na accountant", options: ["Tagatuos", "Arko", "Alipunga", "Tagasuri"], answer: 0 },
  { question: "Ano ang katumbas na Terminolohiya na athlete foot", options: ["Tagatuos", "Arko", "Alipunga", "Tagasuri"], answer: 2 },
  { question: "Ano ang katumbas na Terminolohiya na auditor", options: ["Tagatuos", "Arko", "Alipunga", "Tagasuri"], answer: 3 },
  { question: "Ayon kay ang wika ay sumusunod lamang sa pagbabago ng mga bagay. Kapag nagbago ang bagay, nag-iiba rin ang wika.", options: ["John Cenon G. Barrios", "Mariel Sofia D. Garrot", "P.L Strawson", "Dr. David San Juan"], answer: 2 },
  { question: "Ano ang katumbas na Terminolohiya na anti-sit-off", options: ["Pangapit-tinta", "Maliit na letra", "Orasyon", "lagakan"], answer: 0 },
  { question: "Ano ang katumbas na Terminolohiya na ascende", options: ["Pangapit-tinta", "Maliit na letra", "Orasyon", "lagakan"], answer: 1 },
  { question: "Ano ang katumbas na Terminolohiya na archives", options: ["Pangapit-tinta", "Maliit na letra", "Orasyon", "lagakan"], answer: 3 },
  { question: "Ano ang katumbas na Terminolohiya na Angelus", options: ["Pangapit-tinta", "Maliit na letra", "Orasyon", "lagakan"], answer: 2 },
  { question: "Ano ang katumbas na Terminolohiya na keribels", options: ["Pangapit-tinta", "Maliit na letra", "Kaya yan", "lagakan"], answer: 2 },
  { question: "Ang salita amor ay nakapaloob saan katawagan", options: ["Telebisyon", "Kasaysayan", "Pamamahayag", "Adbertaysing"], answer: 1 }
],
5:[
  { question: "Salik sa paglikha ng mga makina at sangkap sa produksyon", options: ["Magagaan na industriya", "Mabigat na industriya", "Intermedyong Industriya", "Malawak na kalupaan sa bansa"], answer: 1 },
  { question: "Lilikha ng mga spare parts para sa produksyon", options: ["Magagaan na industriya", "Malawak na kalupaan", "Intermedyong Industriya", "Malawak na kalupaan sa bansa"], answer: 2 },
  { question: "Lilikha ng mga produksyong pangkunsumo ng mayayaman Sa indutriya nagmumula ang mga kagamitang kinakailangan ng mamamayan", options: ["Magagaan na industriya", "Malawak na kalupaan", "Intermedyong Industriya", "Malawak na kalupaan sa bansa"], answer: 0 },
  { question: "Mataba at pabor sa agrikultura Mahigit 12.4M ektaryang lupang agricultural ang tinataniman ng palay, niyog, mais, saing, tubo, cassava, manga, rubber at iba pa.?", options: ["Magagaan na industriya", "Malawak na kalupaan", "Intermedyong Industriya", "Malawak na kalupaan sa bansa"], answer: 3 },
  { question: "Pang-ilan ang Pilipinas sa prodyuser ng isda sa buong mundo?", options: ["Ika-Lima", "Pangatlo", "Ika-Anim", "Ika-apat"], answer: 0 },
  { question: "Pang-ilan ang Pilipinas sa prodyuser ng copper sa buong mundo?", options: ["Ika-Lima", "Pangatlo", "Ika-Anim", "Ika-apat"], answer: 3 },
  { question: "Ilan ang skilled workers na may trabaho sa bansa?", options: ["26 milyong", "2 milyong", "39 milyong", "16 milyong"], answer: 0 },
  { question: "Ano ang balakid sa pagtataguyod ng NI sa Pilipinas?", options: ["Pag hubog ng ekonomiya ng malaking bansa", "Pag gagamit ng teknolohiya", "Walang sapat na edukasyon", "Kawalan ng interest sa pag unload"], answer: 0 },
  { question: "Ano ang mahalagang punto na dapat isaalang-alang sa NI?", options: ["Kailangan ang maayos ay masusing pag-aaral, pagpaplano at pagpapatakbo ng ekonomiya.", "Respetuhin ang karapatan ng mamamayan para sa ligtas at mapayapang mamumuhay", "Siguraduhin ang pantay na relasyon sa anumang papasuking kasunduang pangkalakalan sa sinumang bansa", "Lahat ng nabangit"], answer: 3 },
  { question: "Ano dapat gawin upang maisulong ang NI?", options: ["Gumawa ng aksyon sa pagsususlong ng industriyalisasyon", "Iwasan ang pag sulong ng NI", "Hayaan na ang mga gobyerno sa pamamahala", "Wala sa nabangit"], answer: 0 }
],
7:[
  { question: "Halaw sa pakikipaglaban ng mga katutubo sa Cordillera", options: ["Dam", "Anak", "O kay sarap", "Sinisintang Bayan"], answer: 0 },
  { question: "Sumikat sa ibang bansa at nais Alin sa ibat-ibang bansa", options: ["Dam", "Anak", "O kay sarap", "Sinisintang Bayan"], answer: 1 },
  { question: "Isinulat ni Granada at inawit ni Bayang barrios", options: ["Dam", "Anak", "O kay sarap", "Sinisintang Bayan"], answer: 3 },
  { question: "Ang record ng ating militar kay linis-linis", options: ["Dam", "Anak", "O kay sarap", "Sinisintang Bayan"], answer: 3 },
  { question: "\"Hanggat nag hahari ang pera at baril ng mga uri ng naniniil\"", options: ["Dam", "Hating gabi sa picket line", "O kay sarap", "Sinisintang Bayan"], answer: 1 },
  { question: "\"Pinagtagpi-tagpi ibasura pinatungan ng bato\"", options: ["Dam", "Anak", "O kay sarap", "Bahay"], answer: 3 },
  { question: "Ang pangunahing karakter si Lolo tasio na umalis ng Pilipinas", options: ["Ugat", "Anak", "O kay sarap", "Sinisintang Bayan"], answer: 0 },
  { question: "Binigyang diin ang pagiging manhid ng mga kapitalisa sa karaingan ng mga manggawa", options: ["Dam", "Anak", "Manggawa", "Sinisintang Bayan"], answer: 2 },
  { question: "Siya ay kilala malaki ambag sa awiting sumasalamin sa nagyyari sa bansa", options: ["Gary Granada", "Joel Costa Malabanan", "Marcos Ferdinand", "Wala sa nabangit"], answer: 0 },
  { question: "Siya ang gumawa ng pananaliksik gamit ang liriko ni Granada", options: ["Gary Granada", "Joel Costa Malabanan", "Marcos Ferdinand", "Wala sa nabangit"], answer: 1 }
],
8:[
  { question: "Pahayag sa isyung Agraryo, naging paraan ito upang maipahayag ang isyu sa wikang Filipino ng maipabatid sa mamamayang Pilipino.", options: ["Anak Pawis Info", "ALS", "FARDEC", "PDP"], answer: 0 },
  { question: "Kailan isinagawa ang Anak Pawis Info?", options: ["Disyembre 14 2015", "Disyembre 28 2017", "Disyembre 11 2015", "Disyembre 23 2015"], answer: 0 },
  { question: "Wala itong ilusyong lumikha ng tunay na pag-unlad na nakabatay sa Pambansang Industriyalisasyon", options: ["Anak Pawis Info", "ALS", "FARDEC", "PDP"], answer: 3 },
  { question: "Nananatiling mababa ang sahod ng mga manggagawang bukid, karaniwang ay umaabot ito sa magkano?", options: ["150-250", "1000", "500", "Wala sa nabangit"], answer: 0 },
  { question: "Ang sistemang kung bakit sampu-sampung ektaryang lupa ay tinatamnan lamang ng iisang uri ng produksyon", options: ["Anak Pawis Info", "Hacienda", "FARDEC", "PDP"], answer: 1 },
  { question: "Ang atake sa ay pangunahing bunsod ng pang-aagaw sa kanilang lupang ninuno, pagwasak sa kanilang komunidad para angkinin ng monopolyo kapitalista ang likas na yaman.", options: ["Anak Pawis Info", "Hacienda", "Lumad", "Magsasaka"], answer: 2 },
  { question: "Ang may epektibong pamumuno sa 2 milyong magsasakang Pilipino ay masugid na inaabante ang pagsusulong ng Tunay na Reporma sa Lupa", options: ["KMP", "Hacienda", "Lumad", "Magsasaka"], answer: 0 },
  { question: "Mula sa agrikultura ng Pilipinas ay nagsilbing taga supay lamang ng dikta ng dayuhang kapangyarihan", options: ["Kolonyalismong Kastila", "Hacienda", "Lumad", "Amerikano"], answer: 0 },
  { question: "Bunga na rin ng kawalang lupa at monopolyo ng mga panginoong may lupa sa merkado, karaniwang nakaasa sa utang ang mga magsasaka magkano ang pautang?", options: ["3000 pesos", "150 na utang na may interes", "5000 pesos", "P1000 na utang ay may interes"], answer: 3 },
  { question: "Umaabot ng ilang kaban kada 100 kaban inaning palay ang upa sa lupa.", options: ["100 kaban", "13 kaban", "12 kaban", "11 kaban"], answer: 1 }
],
9:[
  { question: "Kaninong programa ang Alternatibong Sistema ng pagtuturo?", options: ["Kagawaran ng Edukasyon", "Kagawaran ng Kalusugan", "Kagawaran ng Agham", "Kagawaran ng Agrikultura"], answer: 0 },
  { question: "Kailan ang target ng Pilipinas na magkaroon ng edukasyon para sa lahat?", options: ["2015", "2017", "2019", "2018"], answer: 0 },
  { question: "Kailan nanganap ang Komprehensyong \"The state of Basic Education: Gaining Ground\"?", options: ["Marso 16 2015", "Marso 28 2012", "Marso 20 2017", "Marso 29 2012"], answer: 1 },
  { question: "Umabot sa ilan ang learning center ng ginamit sa pag-aaral?", options: ["130", "140", "128", "23"], answer: 2 },
  { question: "Sa 100 na mag-aaral na pumasok sa unang baitang, ilan ang nakapagtapos kapag kolehiyo?", options: ["6", "70", "30", "23"], answer: 3 },
  { question: "Sino ang gumawa ng pag-aaral hinggil sa mungkahing salin sa mga paalala?", options: ["Ranee Rose A. Garatol", "Joel Costa Malabanan", "Marcos Ferdinand", "Wala sa nabangit"], answer: 0 },
  { question: "Sino ang nagsasagawa ng pag-aaral hinggil sa Kabisaan ng Wikang Filipino at Alternatibong Sistema ng Pagkatuto (ALS)?", options: ["Ranee Rose A. Garatol", "Hermeline Aguilar", "Marcos Ferdinand", "Wala sa nabangit"], answer: 1 },
  { question: "Kailan naisakatuparan ang ALS?", options: ["2016", "2018", "2008", "2003"], answer: 3 },
  { question: "Ano ang midyum na ginamit sa ALS na pagtuturo?", options: ["Wikang Filipino", "Wikang Ingles", "Wikang Frances", "Wala sa nabangit"], answer: 0 },
  { question: "Naging mabisa ba ang Mungkahing salin ng mga paalala?", options: ["Hindi", "Oo dahil ito ay nakakatulong sa mga hospital at pampublikong lugar", "Oo dahil ito ay nagagamit", "Wala sa nabangit"], answer: 1 }
],
10: [
  { question: "Alin sa nabanggit ang hindi makakatulong sa pag Iwas sa Influenza?", options: ["Takpan ng tisyu ang bibig kung uubo at ang ilong kung babahing", "Agad na itapon nang maayos at tama ang ginagamit na tisyu", "Madalas na maghugas ng kamay gamit ang tubig at sabon", "Isa walang bahala ang sintomas"], answer: 3 },
  { question: "Ano ang mga sintomas ng Influenza maliban sa isa?", options: ["Lagnat", "Pagiging masigla", "Pag-ubo", "Masakit ang Ulo"], answer: 1 },
  { question: "Nagtatagal ang Jolibee at Mc Donalds, mas higit na marami ang bumibili ng tabloid kaysa broadsheet", options: ["About kamay na kulturang popular", "Relasyon ng kulturang popular", "Pinagkakaitaan ang kulturang popular", "Ordianaryong ang Kulturang popular"], answer: 0 },
  { question: "Pagiging pangkaraniwan ng mga paksang talakay at paglalarawan ang kalakasan ng kulturang popular.", options: ["About kamay na kulturang popular", "Relasyon ng kulturang popular", "Pinagkakaitaan ang kulturang popular", "Ordianaryong ang Kulturang popular"], answer: 3 },
  { question: "Hindi maihihiwalay ang konsepto ng komersyalisasyon sa kulturang popular", options: ["About kamay na kulturang popular", "Relasyon ng kulturang popular", "Pinagkakaitaan ang kulturang popular", "Ordianaryong ang Kulturang popular"], answer: 2 },
  { question: "Ugnayan Ito ng pinatatatag ng kulturang popular Likas sa tao na ariin siyang may ugnayan o relasyon sa kaniyang kapwa.", options: ["About kamay na kulturang popular", "Relasyon ng kulturang popular", "Pinagkakaitaan ang kulturang popular", "Ordianaryong ang Kulturang popular"], answer: 1 },
  { question: "Narito ang ilang bahagi ng ginawang sulatin ni_____ na may pamgat na Panimulangpag sipat sa kulturang popular", options: ["Perla S. Carpio", "Patrick M. Malabo", "Allauahbah", "Jollibee"], answer: 0 },
  { question: "\"Isang midyum at isang instrument ang wika na nakatutulong sa kumonikasyon, pagpapalitan ng kaisipan, at ang pag-uunawaan ng tao\".", options: ["Perla S. Carpio", "Patrick M. Malabo", "Allauahbah", "J.V. Stalin"], answer: 3 },
  { question: "Nakasaad sa ginawang Pananliksik na maaring gamiting ang wikang Filipino sa mundo ng Akawting", options: ["Perla S. Carpio", "Patrick M. Malabo", "Allauahbah", "Jollibee"], answer: 1 },
  { question: "Laging may paghihiwalay sa estadong ekonomiko ang tao", options: ["Pangmasa ang kulturang popular", "Relasyon ng kulturang popular", "Pinagkakaitaan ang kulturang popular", "Ordianaryong ang Kulturang popular"], answer: 0 }
],

11: [
  { question: "Ito ay ang paraan ng panghihiram o paglilipat ng mga kultural na salita mula sa Pinagmulang Wika (PM) patungo sa Target na Wika (TW)", options: ["Adapsyon", "Isahang Pagtutumbas", "Hawig", "Kuplets"], answer: 0 },
  { question: "Literal na pagsasalin sa isa-sa-isa pagtutumbasan ng salita sa salita, parirala sa parirala, sugnay sa sugnay at pangusap sa pangusap", options: ["Adapsyon", "Isahang Pagtutumbas", "Hawig", "Kuplets"], answer: 1 },
  { question: "May pagkakahawig sa Transference o adapsyon ngunit dito ay nakikiaayon muna ang normal na pagbigkas at pagkatapos ang normal na morpolohiya sa target na wika na inaayon sa ortgrapiya ng Tunguhing Wika", options: ["Adapsyon", "Naturalisyaon", "Hawig", "Kuplets"], answer: 1 },
  { question: "Tinatawag ding Shift na ang ibig sabihin ay pagkakaroon ng pagbabago sa gramatika ng pinagmulang wika kapag isinalin sa target na wika", options: ["Transposisyon", "Naturalisyaon", "Hawig", "Kuplets"], answer: 0 },
  { question: "Ito ang malapit o halos wastong salin, ang isang kulturang salita PW ay isasalin sa katumbas ding kulturang salita sa TW", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 0 },
  { question: "Paraan sa pagsasalin na naghahati-hati batay sa leksikal na yunit sa mga makabuluhang sangkap o hanay", options: ["Kulturan na katumbas", "Naturalisyaon", "Pagsusuri sa mga bahagi", "Kuplets"], answer: 2 },
  { question: "Paraan sa pagsasali na nagpapaliwanag sa kahulugan ng isang hanay, pangungusap o talata", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 2 },
  { question: "Nagwawasto sa mga gramatikal o tipograpikal na kamalian sa OT, Kaya’ walang mali sa ST", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Pagpapabuti"], answer: 3 },
  { question: "Paraan sa pagsasalin na pinagsasama ang paggamit ng dalawa, tatlo o higit pa sa mga pamamaraang nabanggit", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 3 },
  { question: "Maaaring lagyan ng limitasyon ang pananaliksik sang-ayon sa kasarian", options: ["Panahon", "Propesyon", "Hawig", "Kasarian"], answer: 0 }
],

13: [
  { question: "Ito ay ang paraan ng panghihiram o paglilipat ng mga kultural na salita mula sa Pinagmulang Wika (PM) patungo sa Target na Wika (TW)", options: ["Adapsyon", "Isahang Pagtutumbas", "Hawig", "Kuplets"], answer: 0 },
  { question: "Literal na pagsasalin sa isa-sa-isa pagtutumbasan ng salita sa salita, parirala sa parirala, sugnay sa sugnay at pangusap sa pangusap", options: ["Adapsyon", "Isahang Pagtutumbas", "Hawig", "Kuplets"], answer: 1 },
  { question: "May pagkakahawig sa Transference o adapsyon ngunit dito ay nakikiaayon muna ang normal na pagbigkas at pagkatapos ang normal na morpolohiya sa target na wika na inaayon sa ortgrapiya ng Tunguhing Wika", options: ["Adapsyon", "Naturalisyaon", "Hawig", "Kuplets"], answer: 1 },
  { question: "Tinatawag ding Shift na ang ibig sabihin ay pagkakaroon ng pagbabago sa gramatika ng pinagmulang wika kapag isinalin sa target na wika", options: ["Transposisyon", "Naturalisyaon", "Hawig", "Kuplets"], answer: 0 },
  { question: "Ito ang malapit o halos wastong salin, ang isang kulturang salita PW ay isasalin sa katumbas ding kulturang salita sa TW", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 0 },
  { question: "Paraan sa pagsasalin na naghahati-hati batay sa leksikal na yunit sa mga makabuluhang sangkap o hanay", options: ["Kulturan na katumbas", "Naturalisyaon", "Pagsusuri sa mga bahagi", "Kuplets"], answer: 2 },
  { question: "Paraan sa pagsasali na nagpapaliwanag sa kahulugan ng isang hanay, pangungusap o talata", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 2 },
  { question: "Nagwawasto sa mga gramatikal o tipograpikal na kamalian sa OT, Kaya’ walang mali sa ST", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Pagpapabuti"], answer: 3 },
  { question: "Paraan sa pagsasalin na pinagsasama ang paggamit ng dalawa, tatlo o higit pa sa mga pamamaraang nabanggit", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 3 },
  { question: "Maaaring lagyan ng limitasyon ang pananaliksik sang-ayon sa kasarian", options: ["Panahon", "Propesyon", "Hawig", "Kasarian"], answer: 0 }
],

 15:[
  { question: "Ito ay ang paraan ng panghihiram o paglilipat ng mga kultural na salita mula sa Pinagmulang Wika (PM) patungo sa Target na Wika (TW)", options: ["Adapsyon", "Isahang Pagtutumbas", "Hawig", "Kuplets"], answer: 0 },
  { question: "Literal na pagsasalin sa isa-sa-isa pagtutumbasan ng salita sa salita, parirala sa parirala, sugnay sa sugnay at pangusap sa pangusap", options: ["Adapsyon", "Isahang Pagtutumbas", "Hawig", "Kuplets"], answer: 1 },
  { question: "May pagkakahawig sa Transference o adapsyon ngunit dito ay nakikiaayon muna ang normal na pagbigkas at pagkatapos ang normal na morpolohiya  sa target na wika na inaayon sa ortgrapiya ng Tunguhing Wika", options: ["Adapsyon", "Naturalisyaon", "Hawig", "Kuplets"], answer: 1 },
  { question: "Tinatawag ding Shift na ang ibig sabihin ay pagkakaroon ng pagbabago sa gramatika ng pinagmulang wika kapag isinalin sa target na wika", options: ["Transposisyon", "Naturalisyaon", "Hawig", "Kuplets"], answer: 0 },
  { question: "Ito ang malapit o halos wastong salin, ang ang isang kulturang salita PW ay isasalin sa katumbas ding kulturang salita sa TW", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 0 },
  { question: "Paraan sa pagsasalin na naghahati-hati batay sa leksikal na yunit sa mga makabuluhang sangkap o hanay", options: ["Kulturan na katumbas", "Naturalisyaon", "Pagsusuri sa mga bahagi", "Kuplets"], answer: 2 },
  { question: "Paraan sa pagsasali  na nagpapaliwanag sa kahulugan ng isang hanay, pangungusap o talata", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 2 },
  { question: "Nagwawasto sa mga gramatikal o tipograpikal na kamalian sa OT, Kaya’ walang mali sa ST", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Pagpapabuti"], answer: 3 },
  { question: "Paraan sa pagsasalin na pinagsasama ang paggamit ng dalawa , tatlo o higit pa sa mga pamamaraang nabanggit", options: ["Kulturan na katumbas", "Naturalisyaon", "Hawig", "Kuplets"], answer: 3 },
  { question: "Maaaring lagyan ng limitasyon ang pananaliksik sang-ayon sa kasarian", options: ["Panahon", "Propesyon", "Hawig", "Kasarian"], answer: 0 }
],
14:[
  { question: "Applied research – ito naman ay gumagamit ng sopistikasyon, sapagkat ito ay konklusyon at estadistika. Karaniwang ito ay bunga ng pagsasagawa ayon sa hinihinging panahon.", options: ["Applied research", "Pure research", "Empirical o Mala", "Pamamaraan ng Pananaliksik"], answer: 0 },
  { question: "Pure research - ito ay ginagawa ng isang tao sa sariling kasiyahan upang maunawaan ang isang bagay na gumugulo sa kaniyang isipan. Maarii naman itong gawin ayon sa hilig ngmananaliksik.", options: ["Applied research", "Pure research", "Empirical o Mala", "Pamamaraan ng Pananaliksik"], answer: 1 },
  { question: "Siyentipiko, ito ay nangangailangan ng malalim na pagsusuri ng mga ebidensiya at aktuwal na mga datos.", options: ["Applied research", "Pure research", "Empirical o Mala", "Pamamaraan ng Pananaliksik"], answer: 2 },
  { question: "Tugunin anng mga katanungang sino, ano, kailan, saan at paano ng isang partikular na paksain.", options: ["Applied research", "Deskriptibong Pamamaraan", "Empirical o Mala", "Pamamaraan ng Pananaliksik"], answer: 1 },
  { question: "Kaiba sa tunguhin ng isang deskriptibong pananaliksik na ilarawan ang kasalukuyang nagaganap.", options: ["Historikal na Pamamaraan", "Deskriptibong Pamamaraan", "Empirical o Mala", "Pamamaraan ng Pananaliksik"], answer: 0 },
  { question: "Ang baryabol na sumasailalim sa pag-aaaral ay maaaring isagawa o gamitin at maaaring matukoy ang kaligiran nito", options: ["Historikal na Pamamaraan", "Deskriptibong Pamamaraan", "Eksperimental na pamamaraan", "Pamamaraan ng Pananaliksik"], answer: 2 },
  { question: "Higit sa pagpunta sa mga aklatan at pagsangguni sa mga panakasulat na batis, kailangang magmasid at makipamuhay ang mananaliksik", options: ["Historikal na Pamamaraan", "Etnograpiko Pamamaraan", "Eksperimental na pamamaraan", "Pamamaraan ng Pananaliksik"], answer: 1 },
  { question: "Ayon kay Alipio M. Garcia, ang deskriptibong pananaliksik ay kinabibilangan ng lahat ng mga pag-aaral na magpapakahulugan sa kasalukuyang katotohanan", options: ["Alipio M. Garcia", "Eugene Y. Evasco", "David San Juan", "Pamamaraan ng Pananaliksik"], answer: 0 },
  { question: "Batay kay tatlong antas ng pagpapakahulugan ang pamamaraang etnograpiko.", options: ["Alipio M. Garcia", "Eugene Y. Evasco", "David San Juan", "Pamamaraan ng Pananaliksik"], answer: 1 },
  { question: "Narito ang ilan sa mga pamamaraang kadalasang ginagamit sa pananaliksik", options: ["Applied research", "Pure research", "Empirical o Mala", "Pamamaraan ng Pananaliksik"], answer: 3 }
],
15:[
  { question: "Ito ay gabay ng isang mananaliksik kung paano isasagawa o bibigyang-direksyon ang siasaliksik,", options: ["Teoryang ng Dating", "Teoryang Bukod -Bukod", "Dulot at teorya", "Pagbagtas"], answer: 2 },
  { question: "Pagbaklas/Pagbagtas na pagsusuring historikal", options: ["Pag-aklas", "Pagbaklas", "Pagbagtas", "Pagbaklas"], answer: 0 },
  { question: "Pagbaklas/Pagbagtas na pagbuwag sa mga tradisyonal na pag-aaral", options: ["Pag-aklas", "Pagbaklas", "Pagbagtas", "Pagbaklas"], answer: 1 },
  { question: "Pagbaklas/Pagbagtas na paghahapag ng alternatibo; pagtawid sa hinaharap", options: ["Pag-aklas", "Pagbaklas", "Pagbagtas", "Pagbaklas"], answer: 2 },
  { question: "Ang buod ng pantayong pananaw ay nasa panloob na pagkakaugnay-ugnay at pag-uugnay ng mga katangian, halagahin, , hangarin, kaugalian,pag-aasal, kaalaman, karunungan at karanasan.", options: ["Pag-aklas", "Pagbaklas", "Pagbagtas", "Pantayong pananaw"], answer: 3 },
  { question: "Kapangyarihan ng tawa na tumutuligsa at mang-uyam sa mga nasa kapangyarihan; ang tawa bilang kritikal", options: ["Pag-aklas", "Pagbaklas", "Pantawang pananaw", "Pantayong pananaw"], answer: 2 },
  { question: "Tumutukoy sa kalikasan ng araling Filipino bilang multidisiplinari ang lapit, multikultural at multilinggwal ang mga konsiderasyon sa pag-aaral nito.", options: ["Pag-aklas", "Sagandiwa", "Pantawang pananaw", "Pantayong pananaw"], answer: 1 },
  { question: "Ayon kay tinatawag na dalumat-salita ang paggamit ng wika sa mataas na antas ng pagteteorya batay sa masusi, masinop, kritikal at analitikal na paggamit ng mga salita", options: ["Roderick Nuncio", "Sagandiwa", "Virgilio Enriquez", "Pantayong pananaw"], answer: 0 },
  { question: "Pag-aangkop rekonstekstuwalisasyon: Sikolohiyang Pilipino", options: ["Roderick Nuncio", "Sagandiwa", "Virgilio Enriquez", "Pantayong pananaw"], answer: 2 },
  { question: "Ayon kay ang buod ng pantayong pananaw ay nasa panloob na pagkakaugnay-ugnay at pag-uugnay ng mga katangian, halagahin, , hangarin, kaugalian, pag-aasal.", options: ["Roderick Nuncio", "Dr Zeus Salazar", "Virgilio Enriquez", "Pantayong pananaw"], answer: 1 }
],
16: [
  { question: "Ang metodong ito ay kabuoan ng mga teknik, teorya at prinsipyo sa pag-aanalisa sa mga anyo, gamit at pinagmulan ng mga dokumento na may partikular na tingin sa pagtatayo ng awtentisiti.", options: ["Arkival", "Diplomatik", "Pagbuo at pag likha ng modelo", "Etnograpikong Dulog"], answer: 1 },
  { question: "Pananaliksik ang mga gamiting gawain sa pagsusuri ng mga dokumento at mga nakasulat na materyales ng mga organisasyon", options: ["Arkival", "Diplomatik", "Pagbuo at pag likha ng modelo", "Etnograpikong Dulog"], answer: 0 },
  { question: "Ito ay gamit ng pormal na mga aktibidad, relasyon ng mga entiti, konsepto, gampanin at mga paulit-ulit na teknik ng modelong datos.", options: ["Arkival", "Diplomatik", "Pagbuo at pag likha ng modelo", "Etnograpikong Dulog"], answer: 2 },
  { question: "Pananaliksik sa uring ito sa pamamagitan ng malalimang pag-aaral ng pagtatago ng rekord, gawain arkival, pangnakaraan at pangkasalukuyang gawaing pambansa, kultural.", options: ["Arkival", "Diplomatik", "Pagbuo at pag likha ng modelo", "Etnograpikong Dulog"], answer: 3 },
  { question: "Ang metodong ito ay nakatuon sa pagdiskubre ng mga konsepto, hipotesis at nagdebelop ng teorya na direktang nakuha mula sa mga nakolektang mga datos", options: ["Arkival", "Pagdebelop ng Guinea Theory", "Pagbuo at pag likha ng modelo", "Etnograpikong Dulog"], answer: 1 },
  { question: "Ito ay sistematikong pagbuo at eksposisyon ng bagong teorya, mula sa pagsusuri sa mga umiiral na teorya, konsepto mga modelo obserbasyon komunikasyon, mga datos na mula modelo.", options: ["Arkival", "Pagdebelop ng Guinea Theory", "Pagbuo ng Teoryang", "Etnograpikong Dulog"], answer: 2 },
  { question: "Ito ay kinakatawanan ng pilosopikal na teoryang feminista, pawang mga katanungan at kaukulang pangbababaihan", options: ["Feministang pananaliksik", "Pagdebelop ng Guinea Theory", "Pagbuo ng Teoryang", "Etnograpikong Dulog"], answer: 0 },
  { question: "Ang uring ito ng pananaliksik ay nagaganap kapag nakadiskubre ng bagong teorya na nagagamit sa iyong pag-aaral sa panahon ng pangongolekta at analisis ng mga datos.", options: ["Feministang pananaliksik", "Grounded Theory", "Pagbuo ng Teoryang", "Etnograpikong Dulog"], answer: 1 },
  { question: "Analisis na matulungan ang mga organisasyon na magkaroon ng kabuang pagkakabatid sa lahat ng salik na bahagi ng pagdedesisyon.", options: ["Feministang pananaliksik", "Grounded Theory", "Pagbuo ng Teoryang", "SWOT"], answer: 3 },
  { question: "Ito ay higit sa pamamaraang pangognolekta ng datos kaysa sa disenyo ng pananaliksik, gayonpaman, sa kwalitatibong pananaliksik", options: ["Feministang pananaliksik", "Grounded Theory", "Pagbuo ng Teoryang", "Kasaysayang Pasalita"], answer: 3 }
],
17:[
  { question: "Tumutukoy sa proseso ng pangangalap ng mga datos o impormasyon sa pamamagitan ng paglalatag ng mga serye ng mga katanungan sa ninanais", options: ["Pakikipanayam", "pagtatata", "Una", "Dalawa"], answer: 0 },
  { question: "Bilang paghahanda sa pakikipabayam ano ang una dapat gawin?", options: ["Mag-tanong ng katanungan", "Ipaliwanag ang layunin", "Pumili ng lugar", "Magtala"], answer: 2 },
  { question: "Bilang paghahanda sa pakikipabayam ano ang pangalawa dapat gawin?", options: ["Mag-tanong ng katanungan", "Ipaliwanag ang layunin", "Pumili ng lugar", "Magtala"], answer: 1 },
  { question: "Bilang paghahanda sa pakikipabayam ano ang panglima dapat gawin?", options: ["Mag-tanong ng katanungan", "Ipaliwanag ang layunin", "Pumili ng lugar", "Magtala o irecord"], answer: 3 },
  { question: "Bilang paghahanda sa pakikipabayam ano ang ika-apat dapat gawin?", options: ["Mag-tanong ng katanungan", "Ipaliwanag ang layunin", "Pumili ng lugar", "Magtala o irecord"], answer: 0 },
  { question: "Ang mga kalahok ay nagkakaroon ng interaksiyon sa isa’t isa at nakaiimpluwensya sa mga inihayag na ideya ng mga kasama sa panayam", options: ["Mag-tanong ng katanungan", "Ipaliwanag ang layunin", "Community Discussions", "Focus Group Discussion"], answer: 3 },
  { question: "Nakadisenyo upang kumalap ng mga opinion, pag-uugali at ediya ng komunidad na may kaugnayan sa mga suliranin at isyung panlipunan", options: ["Mag-tanong ng katanungan", "Ipaliwanag ang layunin", "Community Discussions", "Focus Group Discussion"], answer: 2 },
  { question: "Ginagamit sa mga pananaliksik halos lahat ng mga tugon at datos sa isinasagawang pananaliksik ay nanggagaling sa mga interbyu na naitala o nirekord", options: ["Pakikipanayam", "pagtatata", "Una", "Dalawa"], answer: 0 },
  { question: "Ilan ang paghahanda sa pakikipanayam?", options: ["apat", "tatlo", "lima", "Anim"], answer: 2 },
  { question: "Siguraduhin na ang lahat ng impormasyon at nairekord na audio ay nakaorganisa at maingat na naitatago at napahahalagahan", options: ["Ika-apat", "Ika- tatlo", "Ika- lima", "Ika- Anim"], answer: 2 }
]
},

komfil:{
  1: [
  { question: "Ayon kay Henry Gleason, ang wika ay:", options: ["isang kasangkapan sa komunikasyon", "masistemang balangkas ng binibigkas na tunog", "anyo ng pagpapahayag ng damdamin"], answer: 1 },
  { question: "Alin sa mga sumusunod ang nilalaman ng Saligang Batas ng 1935 ukol sa wika?", options: ["ginawang Filipino ang wika", "ginawang Tagalog ang opisyal na wika", "gagawa ng hakbang upang paunlarin ang wikang pambansa batay sa katutubong wika"], answer: 2 },
  { question: "Aling teorya ng wika ang nagsasabing nagmula ito sa tunog ng kapaligiran?", options: ["teoryang dingdong", "teoryang bow-wow", "teoryang pooh-pooh"], answer: 1 },
  { question: "Ano ang sinasabi ng Saligang Batas ng 1987 ukol sa wika?", options: ["itaguyod ang Tagalog bilang wika", "Filipino bilang wikang pambansa at gamitin sa edukasyon at komunikasyon", "gamitin lamang sa seremonyang pampamahalaan"], answer: 1 },
  { question: "Alin sa sumusunod ang naglalarawan sa Teoryang Ta-ta?", options: ["wika mula sa ritwal", "wika mula sa pag-ibig", "wika mula sa kumpas ng kamay"], answer: 2 }
],
2: [
  { question: "Siya ang sumulat ng *Imperyalismo* na nagtanggol sa katutubong wika at tinuligsa ang dulot ng wikang banyaga.", options: ["jose dela cruz", "jose corazon de jesus", "francisco baltazar"], answer: 1 },
  { question: "Ito ang taon na nagsimulang isinigaw sa Katipunan na maging pambansang wika ang Pilipino.", options: ["1959", "1987", "1897"], answer: 2 },
  { question: "Sino ang ama ng wikang pambansa?", options: ["manuel l. quezon", "jose rizal", "emilio aguinaldo"], answer: 0 },
  { question: "Alin sa mga sumusunod ang katangian ng wikang Filipino?", options: ["ito ay patay na wika", "ito ay banyaga", "ito ay buhay at ginagamit sa araw-araw"], answer: 2 },
  { question: "Kailan ipinahayag ang Batas Komonwelt Blg. 570?", options: ["1946", "1935", "1987"], answer: 0 },
  { question: "Ano ang ibig sabihin ng “multilingguwalismo”?", options: ["isa lamang ang alam na wika", "maraming wika ang ginagamit", "wala ni isang wika"], answer: 1 },
  { question: "Ano ang gamit ng wika sa edukasyon?", options: ["pampalipas oras", "midyum ng pagtuturo at pagkatuto", "pampatawa"], answer: 1 },
  { question: "Ano ang tawag sa varayti ng wika batay sa lokasyon?", options: ["idyolek", "diyalekto", "sosyolek"], answer: 1 },
  { question: "Anong uri ng varayti ng wika ang ginagamit sa mga propesyon?", options: ["jargon", "pidgin", "creole"], answer: 0 },
  { question: "Ano ang ibig sabihin ng sosyolek?", options: ["wika ng mga propesyonal", "wika batay sa estado sa lipunan", "wika ng kabataan"], answer: 1 }
],
3: [
  { question: "Sa Speaking ni Dell Hymes, ito ay tumutukoy sa lugar kung saan isinasagawa ang pakikipag-usap.", options: ["act of sequence", "settings", "participants"], answer: 1 },
  { question: "Uri ng pakikipagkomunikasyon na nagaganap sa dalawa o higit pang tao.", options: ["intrapersonal na komunikasyon", "komunikasyong pangmadla", "interpersonal na komunikasyon"], answer: 2 },
  { question: "Ito ay modelo ng komunikasyon kung saan walang nagaganap na feedback o tugon mula sa tagatanggap ng mensahe.", options: ["modelo ni dance", "modelo ni laswell", "modelo ni berlo"], answer: 2 },
  { question: "Pagpili ng hanguan ng impormasyon na isa sa mga kakayahang dapat taglayin ng mga mag-aaral sa kanilang pananaliksik.", options: ["magdebrief", "pagtatala", "paggamit ng internet"], answer: 1 },
  { question: "Batis ng impormasyon na ang pinaghahanguan ay mula sa indibidwal o awtoridad.", options: ["primaryang batis ng impormasyon", "sekondaryang batis ng impormasyon", "hanguang elektroniko"], answer: 0 },
  { question: "Modelo ng komunikasyon na ipinapakita ang katanungan na “sino ang nagsabi ng anong mensahe, na anong dayuhan at ano ang magiging epekto nito?”", options: ["modelo ni schramm", "modelo ni dance", "modelo ni laswell"], answer: 2 },
  { question: "Nilalaman ng akronim na SPEAKING ni Dell Hymes na nagpapahayag ng anong uri ng pakikipag-usap ang isinagawa sa komunikasyon.", options: ["ends", "genre", "act of sequence"], answer: 1 },
  { question: "Nilalaman ng akronim na SPEAKING ni Dell Hymes na nakatuon sa layunin ng pakikipag-usap.", options: ["keys", "instrumentalities", "ends"], answer: 2 },
  { question: "Potensyal na sagabal sa komunikasyon na tumutukoy sa kultura na kinalakihan ng tao na maaaring maging sagabal sa interpretasyon ng mensahe.", options: ["semantikong sagabal", "pisyolohikal na sagabal", "sikolohikal na sagabal"], answer: 2 },
  { question: "Ang akronim ni Dell Hymes na may kaugnayan sa paglalahad ng pangungusap at kung paano ang takbo ng usapan.", options: ["participants", "instrumentalities", "act of sequence"], answer: 2 }
],
4: [
  { question: "Ito ay siksik at pinaikling bersyon ng teksto.", options: ["pagsulat", "pagbasa", "buod"], answer: 2 },
  { question: "Pinaikli ang pangunahing punto ng isang babasahin; karaniwan itong ginagamit bilang pabalat sa mga nobela o sa likod na bahagi nito.", options: ["preci", "sintesis", "lagom o sinopsis"], answer: 2 },
  { question: "Ito ay modelo ng komunikasyon kung saan walang nagaganap na feedback o tugon mula sa tagatanggap ng mensahe.", options: ["modelo ni dance", "modelo ni laswell", "modelo ni berlo"], answer: 2 },
  { question: "Pinagsama-sama ang mga impormasyon na nakalap mula sa mga tao o manunulat, libro o pananaliksik upang makabuo ng malinaw na pagbubuod.", options: ["preci", "sintesis", "hawig"], answer: 1 },
  { question: "Uri ng abstrak kung saan mababasa ang kaligiran, layunin, at tuon ng papel. Inilalarawan nito ang pangunahing ideya ng artikulo.", options: ["abstrak", "impormatibong abstrak", "deskriptibong abstrak"], answer: 1 },
  { question: "Uri ng pagsulat na sumusunod sa pamantayan at may layuning mailahad nang malinaw ang mga ideya.", options: ["pormal na pagsulat", "pagsulat", "di-pormal na pagsulat"], answer: 0 },
  { question: "Uri ng sulatin na gumagamit ng jargon batay sa propesyon ng manunulat.", options: ["sulating panteknikal", "sulating jornalistik", "sulating pampropesyunal"], answer: 2 },
  { question: "Uri ng sulatin na sumusukat sa kaalaman ng mag-aaral sa mga isyung panlipunan at akademikong paksa.", options: ["malikhaing pagsulat", "sulating jornalistik", "pang-akademikong sulatin"], answer: 2 },
  { question: "Tinaguriang responsableng pagsulat na matatagpuan sa pahayagan, tulad ng balita, editorial, at kolum.", options: ["malikhaing pagsulat", "sulating jornalistik", "sulating pampropesyunal"], answer: 1 },
  { question: "Hakbang sa pagsulat na tumutukoy sa pagkuha ng impormasyon tungkol sa paksa.", options: ["pagpili ng paksa", "pangangalap ng datos", "pagsusuri ng mga nakalap na datos"], answer: 1 }
],
5: [
  { question: "Pangkomunikasyon ng mga Pilipino.", options: ["tsismisan", "umpukan", "salamyaan"], answer: 1 },
  { question: "Nilalaman ng artikulo na ito ang lahat ng tao ay dapat irespeto ang dignidad, personalidad, privacy at kapanatagan ng pag-iisip o peace of mind ng ibang tao.", options: ["artikulo 24 – new civil code of human relations", "artikulo 25 – new civil code of human relations", "artikulo 26 – new civil code of human relations"], answer: 2 },
  { question: "Ang pamilyang nagplaplano ng susunod na bakasyon ay halimbawa ng anong gawaing pangkomunikasyon ng mga Pilipino.", options: ["tsismisan", "salamyaan", "umpukan"], answer: 2 },
  { question: "Naglalaman ng mga usapan na nadaragdagan at nababawasan sa pagpapalit-palit ng taong nagkukuwento.", options: ["tsismisan", "salamyaan", "talakayan"], answer: 0 },
  { question: "Kabilang sa gawaing pangkomunikasyon na ito ang walang katiyakan sa oras ng pagdating ng mga matatanda, bagama’t karaniwang marami ang pumupunta sa umaga at hapon.", options: ["talakayan", "tsismisan", "salamyaan"], answer: 2 },
  { question: "Isang intelektwalisadong gawaing pangkomunikasyon na naglalayon na isagawa ang tama. Maaaring gamitin sa pagpapalitan ng datos, impormasyon, opinyon, hinaing, ideya, mungkahi at iba pa.", options: ["pormal na pagsulat", "gawaing pangkomunikasyon ng mga Pilipino", "di-pormal na pagsulat"], answer: 1 },
  { question: "Kabilang sa makrong kasanayan na nagtataglay ng paggamit ng simbolo o pagsenyas sa kilos o galaw ng kamay, katawan o ulo.", options: ["pagbasa", "pagsulat", "pagsasalita"], answer: 2 },
  { question: "Simpleng pagtitipon ng mga mamamayan sa isang lugar na kapwa layunin nila ay makipag-usap sa bawat isa at makinig sa mga opinyon o suhestyon.", options: ["umpukan", "pulong bayan", "talakayan"], answer: 0 },
  { question: "Tawag sa pangkomunikasyon ng mga Marikenyo.", options: ["tsismisan", "salamyaan", "umpukan"], answer: 1 },
  { question: "Kinikilalang talastasan ng bayan na nagkakaroon ng pantay ang mga kalahok at ang daloy ng usapan. Anong gawaing pangkomunikasyon ito nabibilang?", options: ["seminar", "umpukan", "salamyaan"], answer: 2 }
],
7: [
  { question: "Ang mga kapulisan ay tumungo sa bawat tahanan ng Barangay Commonwealth upang magbigay ng paalala hinggil sa pagtaas ng krimen sa kanilang lugar.", options: ["Pagbabahay-bahay", "Talakayan", "Pulong-bayan", "Umpukan"], answer: 0 },
  { question: "Pinamumunuan ng isang may kapangyarihan o awtoridad.", options: ["Pulong-bayan", "Pagbabahay-bahay", "Umpukan", "Talakayan"], answer: 0 },
  { question: "Isang gawain na nagpupunta sa iba’t ibang lugar at tirahan upang magsiyasat ng mga bagay-bagay na maaaring makakuha ng impormasyon.", options: ["Seminar", "Talakayan", "Pulong-bayan", "Pagbabahay-bahay"], answer: 2 },
  { question: "Kausapin at inaanyayahan sa barangay ang mga pinaghihinalaang gumagamit at nagbebenta ng droga.", options: ["Misyong pang medikal", "Sensus", "Oplan tokhang", "Relihiyon"], answer: 2 },
  { question: "Inaabutan ang mga mamamayan sa pamamagitan ng pagbabahay-bahay upang maibigay ang tulong pangkalusugan.", options: ["Misyong pang medikal", "Sensus", "Oplan tokhang", "Relihiyon"], answer: 0 },
  { question: "Nagpapahayag ng mabuting balita, makapanghikayat at mabigyang linaw ang anumang katanungan mula sa bibliya.", options: ["Misyong Pangmedikal", "Sensus", "Oplan tokhang", "Relihiyon"], answer: 3 },
  { question: "Si Ismael ay nagtitinda ng sabon sa kanilang distrito upang magkaroon ng sapat na kita na siyang pantustos sa kanyang pag-aaral.", options: ["Misyong Pang Medikal", "Pagbabahay-bahay", "Relihiyon", "Pulong-bayan"], answer: 1 },
  { question: "Si Kapitan Rex ay nagsagawa ng pagtitipon kasama ang kanyang mga nasasakupan upang pag-usapan at talakayin ang mga proyektong isasagawa sa kanilang lugar.", options: ["Umpukan", "Pulong Bayan", "Talakayan", "Tsismisan"], answer: 1 },
  { question: "Ang bawat organisasyon sa loob ng paaralan ay nag-uusap-usap hinggil sa nalalapit na araw ng kaguruan.", options: ["Tsismisan", "Salamyaan", "Talakayan", "Umpukan"], answer: 3 },
  { question: "Nagsagawa ng medikal misyon ang mga doktor at nars upang magbigay ng libreng konsultasyon sa mga batang malnutrisyon.", options: ["Pagbabahay-bahay", "Umpukan", "Tsismisan", "Salamyaan"], answer: 0 }
],
8: [
  { question: "Proseso ng pagbibigay at pagtanggap ng ideya sa pamamagitan ng kilos o galaw, ekspresyon ng mukha, lakas at hina ng boses, galaw ng mata at iba pa.", options: ["Ekspresyong lokal", "Komunikasyon", "Berbal at Di-berbal", "Pormal at Di-Pormal"], answer: 0 },
  { question: "Ito ay tumutukoy sa pag-aaral ng kilos at galaw ng tao.", options: ["Haptics", "Kinesika", "Oculesics", "Paralanguage"], answer: 1 },
  { question: "Pinaka-primitibong anyo ng komunikasyon na nagpapahiwatig ng positibong emosyon na kadalasan nararamdaman ng malapit sa isa’t isa", options: ["Oculesics", "Paralanguage", "Proksemika", "Haptics"], answer: 3 },
  { question: "Tumutukoy sa tono ng pagbigkas ng mga salita o bilis ng pagsasalita. Kasama na rin sa bahaging ito ang pagsut-sot, buntong hininga, ungol at paghinto", options: ["Paralanguage", "Haptic", "Oculesics", "Proksemika"], answer: 0 },
  { question: "Ito ay pantawag o pagkuha ng atensyon ng isang tao.", options: ["Para", "Pag Pitik", "Apir", "Pito"], answer: 3 },
  { question: "Maaari ding magpahiwatig ng damdamin o oryentasyon ang bawat kulay na iyong nakikita sa paligid.", options: ["Paralanguage", "Colorics", "Iconics", "Objectics"], answer: 1 },
  { question: "Tumutukoy sa paggamit ng mga bagay sa pakikipagtalastasan. Kabilang rito ang mga elektronikong ekwipment", options: ["Paralanguage", "Colorics", "Iconics", "Objectics"], answer: 3 },
  { question: "Nagpapahayag ng pagiging masaya kung siya ay nakangiti, malungkot kung umiiyak, nakasimangot kung galit at naiinis kung tulala.", options: ["Tindig o postura", "Galaw ng Mata", "Ekspresyon ng Mukha", "Kumpas ng Kamay"], answer: 2 },
  { question: "Ang pagdarausan o lugar na gagamitin sa anumang pulong o kumperensiya.", options: ["Katahimikan", "Kapaligiran", "Haprics", "Kinesika"], answer: 1 },
  { question: "Pinaikling “Ayon” maaaring pagsang-ayon o paglabas ng matinding damdamin.", options: ["Luh", "Wapak", "Yown", "Gets"], answer: 2 }
],
9: [
  { question: "Tumutukoy sa katiwalian o pangungurakot na kawalan ng integridad at katapatan.", options: ["Fixer", "Pagnanakaw", "Konsepto ng mga Bayani", "Korapsyon"], answer: 3 },
  { question: "Isa sa pinakatanyag na pormula ng korapsyon", options: ["Accountability + Discretion-Monopoly= Corruption", "Controlling Corruption Monopoly + Discretion- Accountability= Corruption", "Controlling Corruption Monopoly- Discretion + Accountability= Corruption", "Discretion- Accountability + Monopoly= Corruption"], answer: 1 },
  { question: "Ito ay isang salita na tumutukoy sa pagtatalaga ng pamahalaan sa paggasta ng pangunahing kinukuha mula sa kaban ng bayan ng bansa upang magamit sa distrito ng isang mambabatas para sa mga lokal na proyekto nito.", options: ["Hello Garci Tape", "Presidential Communications Operations", "Pork Barrel Scam", "Malampaya Fund Scam"], answer: 2 },
  { question: "Ito ang saligang batas laban sa korapsyon at iba pang mga kasong sibil.", options: ["R.A No 3019 Anti Graft and Corrupt Practices Act", "R.A No 6770 Investigation for Government Employee", "R.A No 6713 Batas anti-korupsiyon sa Pilipinas", "R.A No 9485 Anti Red Tape Act of 2007"], answer: 0 },
  { question: "Sila ang kumilos na humiling ng direktang koneksyon ng tubig at kuryente sa mga tirahan", options: ["Department of Health", "Commission on Audit", "Kalipunan ng Damayang Mahihirap", "National Housing Authority"], answer: 2 },
  { question: "Ito ang nagsisilbing proteksyon ng pamilya.", options: ["Damit", "Pera", "Pagkain", "Bahay"], answer: 3 },
  { question: "Ito ang kinakailangan ng bawat guro na kumuha ng 45 yunit upang mapanatili ang lisensya matapos ang tatlong taong pagiging balido nito.", options: ["Priority Development", "Continuing Professional Development", "Priority Development", "Priority Funds"], answer: 1 },
  { question: "Siya ang binansagang Ina ng Katipunan", options: ["Pangulong Gloria Macapagal Arroyo", "Francisco Baltazar", "Melchora Aquino", "Corazon Aquino"], answer: 2 },
  { question: "Ito ang araw ng kamatayan ni Rizal sa Bagumbayan na kasalukuyang tawag ay Luneta. Bunga ng paglaban sa mga mananakop na espanyol.", options: ["Disyembre 30, 1896", "Disyembre 20, 1897", "Hunyo 19, 1890", "Hunyo 19, 1888"], answer: 0 },
  { question: "Ito ang nagmarka sa diwa ng mga Pilipino noon hanggang sa kasalukuyan na maraming personalidad ang naging kilala, pinagmamalaki at naging prominente sa kasaysayan ng Pilipinas sa ilalim ng mga mananakop.", options: ["Korapsyon", "Kickback", "Konsepto ng mga Bayani", "Edukasyon"], answer: 2 }
],
10: [
  { question: "Siya nag nagbigay ng layunin na magpatupad ng mga proyekto na makakatulong at makabubuti para sa mamamayan ng Pilipinas hinggil sa usapin ng kalusugan.", options: ["Department of Health", "Health Center", "Health Maintenance Organization", "Philippines Health Insurance Organization"], answer: 0 },
  { question: "Ito ang naging dominante sa isyu ng dengue sa administrasyon ng Dating Pangulong Benigno Aquino III na nagkaroon ng maraming biktima. Nagmula sa Sanofi Pharmaceutical Company.", options: ["Dengvaxia", "Malaria", "Ebola Virus", "Toxoid Vaccine"], answer: 0 },
  { question: "Ito ang mismong virus na unang nakukuha na nagdudulot ng sakit na kung tawagin ay Aids.", options: ["Dengvaxia", "Malaria", "Ebola Virus", "HIV"], answer: 3 },
  { question: "Ito ay isang proyekto na naglalayong unit-unting palitan ang mga jeepney na tumagal ng 15 taon o pataas ng mkabagong electronic jeepney.", options: ["Balik-eskwela Program", "Pantawid Pamilya Program", "Jeepney Modernization Program", "Transportasyon"], answer: 2 },
  { question: "Sila ang patuloy na nakikipaglaban upang tiyaking hindi mangyayari ang Jeepney Phase Out.", options: ["NHA", "Piston", "PSE", "PSA"], answer: 1 },
  { question: "Pinakapangunahing sanhi ng HIV", options: ["Pakikipagtalik", "Pag-ibig", "Paglalagay ng Tattoo", "HIV"], answer: 0 },
  { question: "Iba pang katawagan sa K-12 Curriculum.", options: ["Republic Act No. 10533", "Republic Act No. 7783", "Republic Act No. 7863", "Republic Act No. 8980"], answer: 0 },
  { question: "Sa programang ito isinisawat ang hindi maayos na pamamalakad ng NHA para sa mga nasalanta ng bagyo at giyera.", options: ["Wish ko lang", "T.V Patrol", "Failon Ngayon", "Jessica Sojo"], answer: 0 },
  { question: "Ilan ang Bilang ng mga batang naturukan ng dengvaxia na hindi pa nagkaka-dengue.", options: ["50,000", "60,000", "70,000", "80,000"], answer: 2 },
  { question: "Ito ay pinagkakakitaan ang mga Pilipinong nasa iskwater upang kumita nang pansarili.", options: ["Pagpatay", "Akyat-bahay", "Pagnanakaw", "Squatting Syndicate"], answer: 3 }
],
11: [
  { question: "Proseso kung paano nabubuo at lumalaki ang mga bayan at lungsod dahil sa pagdami ng mga taong naninirahan at nagtatrabaho sa mga sentrong lokasyon.", options: ["Kontemporaryo", "Urbanisasyon", "Naturalisasyon"], answer: 1 },
  { question: "Ito ang pagbabago sa orihinal na anyo ng lupa upang maging handang tayuan ng mga imprastraktura, bahay, gusali, at gawing komersyal.", options: ["Kontemporaryo", "Polusyon", "Kumbersyon sa Lupa"], answer: 2 },
  { question: "Tawag sa mga materyal o kagamitang nasa ano mang anyo na nagpaparumi, sumisira, at ginagawang hindi ligtas o hindi akmang gamitin ang lupa, tubig, hangin, at iba pa.", options: ["Kontemporaryo", "Polusyon", "Kumbersyon sa Lupa"], answer: 1 },
  { question: "Ilang porsyento ang tinatayang polusyon sa lawa ay dahil sa domestikong basura mula sa mga naninirahan sa paligid ng Laguna de Bay?", options: ["60%", "70%", "80%"], answer: 2 },
  { question: "Kailan isinara ang Boracay para sa malawakang rehabilitasyon?", options: ["April 25, 2018", "April 26, 2018", "April 27, 2018"], answer: 1 },
  { question: "Batay sa grupong Greenpeace, pang-ilan ang Pilipinas sa mga bansa na nagpo-produce ng malaking porsyento ng plastic na sumisira sa karagatan ng daigdig?", options: ["Una", "Pangalawa", "Pangatlo"], answer: 2 },
  { question: "Ito ay bunga ng pagdami at pagkaipon ng mga greenhouse gas sa atmospera ng mundo.", options: ["Globalisasyon", "Pagbaha", "Climate Change"], answer: 2 },
  { question: "Mula sa pagkakabuo ng mga ulap, ulan, at hangin ay natural na proseso ng kalikasan.", options: ["Globalisasyon", "Bagyo at Baha", "Paglindol"], answer: 1 },
  { question: "Ito ang ahensiyang nagbigay ng payo sa mga gumagamit ng sasakyan at mga kompanya na gumamit ng mas malinis na gasolina upang bumaba ang porsyento ng polusyon.", options: ["Department of Environment and Natural Resources", "Department of Trade and Industry", "Department of Agriculture"], answer: 0 },
  { question: "Ito ang taon kung kailan nabuo ang isang super typhoon at nanalasa sa Kabisayaan at mga bahagi ng Luzon.", options: ["Nobyembre 3, 2012", "Nobyembre 3, 2013", "Nobyembre 6, 2012"], answer: 1 }
],
13: [
  { question: "Tumutukoy sa patuloy na pagkamkam at pagdadamot ng mga lupang sakahan sa mga magsasaka sa bansa.", options: ["imperyalismo", "pyudalismo", "kolonyalismo"], answer: 1 },
  { question: "Ito ay kaparaanan kung paano nagiging global o pangbuong mundo ang mga lokal, pampook o kaya pambansang mga gawi o paraan.", options: ["intelektwalisasyon", "globalisasyon", "nasyonalisasyon"], answer: 1 },
  { question: "Simula ng nagkaroon ng batas na ito noong panahon ni dating Pangulong Elpidio Quirino, nagkaroon ng kaunting siwang na liwanag ang mga uring manggagawa.", options: ["republic act no. 602", "republic act no. 603", "republic act no. 604"], answer: 0 },
  { question: "Ano ang nilahukan ng Pilipinas noong taong 1989?", options: ["united nation education scientific and cultural organization", "galleon trade", "asia pacific economic cooperation"], answer: 2 },
  { question: "Isang katayuan sa trabaho kung saan pinagkakakitaan ang mga manggagawa upang manatili sa kanilang pagtatrabaho.", options: ["globalisasyon", "pribatisasyon", "kontraktuwalisasyon"], answer: 2 },
  { question: "Nilalayon ng batas na ito ang pagtatalaga ng Regional Boards ng Minimum Wage Rates para sa mga manggagawang nasasakop ng pribadong sektor.", options: ["republic act no. 6269", "republic act no. 6230", "republic act no. 6272"], answer: 2 },
  { question: "Ito ay isinulong ng gobyerno upang iangat ang antas ng makinarya sa bansa.", options: ["grab", "traditional jeep", "e-jeep"], answer: 2 },
  { question: "Ito ang pinirmahan ni Pangulong Rodrigo Duterte bilang handog sa milyun-milyong mamamayang Pilipino.", options: ["incentive act", "creating processing zone authority", "tax reform for acceleration and inclusion"], answer: 2 },
  { question: "Ito ang batas o paraan ng pamamahala kung saan ang malalaking bansa ay nagpapalawak ng kapangyarihan sa pamamagitan ng pagsakop at kontrol sa iba.", options: ["imperyalismo", "naturalisasyon", "globalisasyon"], answer: 0 },
  { question: "Nangangahulugang walang habas na pagnanakaw ng pera sa kaban ng bayan at isa sa mga pangunahing dahilan ng kahirapan.", options: ["kawalang disiplina ng mga tao", "korapsyon", "pyudalismo"], answer: 1 }
],
14: [
  { question: "Tumutukoy sa pagtitipon o asembliya na bukas para sa publiko upang magkaroon ng talastasan o diskusyon kung saan ang opinyon ng mga tao tungkol sa isang isyu ay maaaring maibahagi.", options: ["worksyap", "forum", "lekyur"], answer: 1 },
  { question: "Ito ang maaaring ipamahagi upang maipakalat ang mahahalagang impormasyon tungkol sa gagawing forum.", options: ["flyers", "pahayagan", "libro"], answer: 0 },
  { question: "Pumili ng mapagkakatiwalaang magbabahagi ng sariling danas sa forum.", options: ["tagapakinig", "tagapagsalita", "tagatanong"], answer: 1 },
  { question: "Ito ang maaaring ibigay upang malaman kung ano ang naging pagkukulang at dapat ayusin sa naganap na forum.", options: ["pidbak", "marka", "hato"], answer: 0 },
  { question: "Isa sa mga estratehiyang maaaring gamitin sa epektibong pagbabahagi ng teorya, kaalaman at kuru-kuro sa mga mag-aaral.", options: ["worksyap", "forum", "lektyur"], answer: 2 },
  { question: "Ito ay ang simula ng unang tatlo hanggang limang minuto na bahagi ng pagtalakay. Sa bahaging ito dapat masukat ng tagapagtalakay ang paksang pag-uusapan.", options: ["introduksyon", "katawan o nilalaman", "katapusan"], answer: 0 },
  { question: "Ito ang pinakamahalagang bahagi ng lektyur dahil dito tinatalakay ang mahahalagang impormasyon na nais matutuhan ng mga tagapakinig.", options: ["introduksyon", "katawan o nilalaman", "konklusyon"], answer: 1 },
  { question: "Ito ang bahagi na karaniwang isinasawalang-bahala kaya kinakailangan na gamitin ito sa muling pagpapaaalala at pagbibigay-diin sa mga inilahad na mahahalagang impormasyon.", options: ["introduksyon", "katawan o nilalaman", "konklusyon"], answer: 2 },
  { question: "Isang uri ng estratehiya sa pagtuturo para sa mas mataas na antas ng pagkatuto.", options: ["seminar", "lektyur", "forum"], answer: 3 },
  { question: "Karaniwang maliit ang bilang ng dumadalo at simple lamang ang konseptong tatalakayin.", options: ["internasyunal seminar", "national seminar", "mini-seminar"], answer: 2 }
],
15: [
  { question: "Isa sa mga pinakamabisang paraan ng pagbabahagi ng kaalaman at kasanayan sa ibang tao. Dito ay nabibigyan ng pagkakataon ang isang tao na isagawa ang mga nais niyang matutuhan.", options: ["worksyap", "forum", "lekyur"], answer: 0 },
  { question: "Unang hakbang sa pagsasagawa ng worksyap. Sa bahaging ito, dapat isaisip kung ano ang tiyak na layunin na nais makamit o adhikain ng isinasagawa.", options: ["pagpili", "pagpaplano", "pagpapatupad"], answer: 0 },
  { question: "Maaari nang buuin ang talaan ng mga gagawin subalit kailangan munang mag-isip kung paano ito isasagawa.", options: ["set-up", "pagpapatupad", "pagpaplano"], answer: 2 },
  { question: "Ito ang kinakailangang isinasayos bago dumating ang mga dadalo.", options: ["set-up", "pagpaplano", "pagpapatupad"], answer: 0 },
  { question: "Nakalahad dito ang magiging takbo ng kabuuan ng programa kasama ang mga iskrip ng mga isinasagawang aktibidad.", options: ["daloy ng programa", "pagpaplano", "pagpapatupad"], answer: 0 },
  { question: "Ito ang pagkakataon ng bawat isa na kung saan maaaring balikan ang mga naging pagkukulang sa ginawang worksyap.", options: ["set-up", "pagtataya", "pagpaplano"], answer: 1 },
  { question: "Ito ay kinakailangan maayos ang pagkakasunod-sunod ng bawat gawain at naiuugnay ito sa bawat isa.", options: ["bumuo ng layuning kayang makamit sa gagawing kumperensiya", "bumuo ng daloy ng programa", "paglalatag ng kinakailangang badyet"], answer: 1 },
  { question: "Isa sa mga kailangang gawin ang paghingi ng tulong at suporta kabilang ang mga miyembro ng organisasyon.", options: ["bumuo ng layuning kayang makamit sa gagawing kumperensiya", "magtalaga ng mga taong mangunguna sa mga gawain at lumikha ng mga komite", "paglalatag ng kinakailangang badyet"], answer: 1 },
  { question: "Kinakailangan magmula sa lahat ng inaasahang pagkukunan laban sa inaasahang gastos. Kailangan itong pag-aralan nang mabuti upang makatipid sa mga gugugulin.", options: ["gumawa ng plano ng mga dapat gawin na nakasaad kung sino at kailan dapat tapusin", "paglalatag ng kinakailangang badyet", "magtalaga ng mga taong mangunguna sa mga gawain at lumikha ng mga komite"], answer: 1 },
  { question: "Ang sistematikong paggawa ng plano ng mga dapat gawin ay makatutulong upang hindi malihis ang mga inaasahang makamit.", options: ["bumuo ng layuning kayang makamit sa gagawing kumperensiya", "magtalaga ng mga taong mangunguna sa mga gawain at lumikha ng mga komite", "paglalatag ng kinakailangang badyet"], answer: 0 }
],
16: [
  { question: "Ito ay tumutukoy sa elemento sa paghahanda ng pulong na kinakailangang tiyakin na ang mga kalahok ay makadadalo sa oras na itinalaga at makakarating sa lugar na pagdarausan ng pulong. Alalahaning mahalaga ang bawat oras ng mga kalahok kaya kinakailangang mahusay ang paggamit ng oras sa pulong.", options: ["agenda", "tagapag-ulat", "oras at lugar"], answer: 2 },
  { question: "Siya ang katuwang ng tagapangulo sa paghahanda ng agenda at pamamahagi ng imbitasyon sa mga kalahok at tagapag-ulat.", options: ["kalihim", "tagapag-ulat", "kalahok"], answer: 0 },
  { question: "Tumutukoy sa mga materyales na ihahanda upang gamitin sa isasagawang pulong.", options: ["kagamitan", "kalahok", "tagapagsalita"], answer: 0 },
  { question: "Nagsisilbing balangkas at gabay sa pagpupulong.", options: ["oras at lugar", "agenda", "kalahok"], answer: 1 },
  { question: "Kabilang sa paghahanda ng ulat na kinakailangan na kilalanin at alamin ang katangian, interes, kakayahan, at pangangailangan ng tagapakinig.", options: ["alamin ang paksa", "kilalanin ang tagapakinig", "iplano ang pagkakasunod-sunod ng ideya"], answer: 1 },
  { question: "Katuwang ng tagapangulo sa paghahanda ng agenda at ng pamamahagi ng imbitasyon sa mga kalahok at tagapag-ulat.", options: ["tagapag-ulat", "agenda", "kalihim"], answer: 2 },
  { question: "Siya ang tagapaghatid ng datos na tatalakayin sa pagpupulong.", options: ["tagapag-ulat", "oras at lugar", "tagapangulo"], answer: 0 },
  { question: "Tagapamagitan at tagapagtaguyod ng ideya. Siya ang nagpaplano ng pulong kabilang ang paghahanda ng agenda.", options: ["tagapangulo", "agenda", "kalihim"], answer: 0 },
  { question: "Mahalagang maging handa ang mga materyales na gagamitin tulad ng katitikang ng naunang pulong, visual aids na gagamitin ng tagapag-ulat.", options: ["kagamitan", "kalihim", "tagapangulo"], answer: 0 },
  { question: "Ito ay nagaganap sa pagitan ng isang taon tungo sa nakararaming tagapanood o tagapakinig. Ang ganitong uri ng komunikasyon ay gumagamit ng midya gaya ng radyo, telebisyon, internet at iba pa.", options: ["komunikasyong pangmadla", "pag-uulat sa maliit na pangkat", "pampublikong komunikasyon"], answer: 0 }
],
17: [
  { question: "Sino ang nagpasimula ng Kasaysayan sa telebisyon?", options: ["Joe Sikat", "Rogelio Ordonez", "James Lindernerg"], answer: 2 },
  { question: "Pinakamakapangyarihan na midya sa kasalukuyan.", options: ["Telebisyon", "Telepono", "Cellphone"], answer: 0 },
  { question: "Nagsisilbing imbakan ng impormasyon na tagahatid ng kaalaman.", options: ["Sender", "Receiver", "Tsanel"], answer: 0 },
  { question: "Isang sikat na manunulat ng tula at piksyon, isang dating propesor. Siya ay nagpasimula sa pagkritika sa maling gamit ng mga salita sa midya.", options: ["Joe Sikat", "Rogelio Ordonez", "Rogelio Sikat"], answer: 2 },
  { question: "Siya ang pambansang alagad ng Sining at Tagapagtatag ng Linangan sa Imahen.", options: ["Jaime C. De Veyra", "Virgilio S. Almario", "Lope K. Santos"], answer: 1 },
  { question: "Tumutukoy sa kasalukuyang nagaganap sa loob o labas man ng bansa.", options: ["Variety Show", "Drama at Komedya", "Balita"], answer: 2 },
  { question: "Mga palabas na naghahatid ng gawaing pantulong na sumasalamin sa reyalidad ng buhay at tumatalakay sa kultura ng isang lipunan.", options: ["Dokumentaryo", "Balita", "Drama at Komedya"], answer: 0 },
  { question: "Binubuo ng iba’t ibang tauhan na nagsasadula ng isang kwento.", options: ["Variety Show", "Drama at Komedya", "Balita"], answer: 1 },
  { question: "Binubuo ng pagkakaibang pagtatanghal sa musika, komedya, talk show at iba pa na pinangungunahan ng mga host ng programa.", options: ["Variety Show", "Drama at Komedya", "Balita"], answer: 0 },
  { question: "Unang lisensyadong istasyon sa bansang Pennsylvania.", options: ["Kdka", "Kkda", "Dakk"], answer: 0 }
]
},

soslit:{
  1: [
  { question: "Ano ang pinagmulan ng salitang “panitikan”?", options: ["Pagsasalaysay", "Pangarap", "Pang-titik-an", "Pamumuhay"], answer: 2 },
  { question: "Ayon kay Honorio Azarias, ang panitikan ay...", options: ["Kasaysayan ng kaluluwa ng mamamayan", "Ganti ng tao sa kanyang pagsusumikap", "Pagpapahayag ng damdamin tungkol sa pamumuhay at kaluluwa", "Kuru-kuro ng isang manunulat"], answer: 2 },
  { question: "Anong uri ng panitikan ang may sukat at tugma?", options: ["Tula", "Talumpati", "Maikling Kuwento", "Sanaysay"], answer: 0 },
  { question: "Ayon kay Maria Ramos, ang panitikan ay...", options: ["Kasangkapan sa pulitika", "Kasaysayan ng kaluluwa ng mamamayan", "Pagpapahayag ng opinyon ng may-akda", "Koleksyon ng mga salitang magaganda"], answer: 1 },
  { question: "Alin sa mga sumusunod ang isang akdang tuluyan?", options: ["Epiko", "Tanaga", "Alamat", "Awit/Korido"], answer: 2 },
  { question: "Anong uri ng akda ang naglalaman ng kasaysayan ng buhay ng isang tao?", options: ["Talumpati", "Sanaysay", "Talambuhay", "Pabula"], answer: 2 },
  { question: "Alin sa mga sumusunod ang tumutukoy sa isang akdang patula?", options: ["Dula", "Balita", "Bugtong", "Anekdota"], answer: 2 },
  { question: "Ano ang pagkakaiba ng tuluyan sa tula?", options: ["Mas maikli ang tuluyan", "Tuluyan ay may sukat, tula ay wala", "Tula ay may sukat at tugma, tuluyan ay karaniwang pagsasalita", "Tula ay patungkol sa kasaysayan, tuluyan ay kathang-isip"], answer: 2 },
  { question: "Ano ang tawag sa akdang patula na tungkol sa kagitingan at kabayanihan?", options: ["Balita", "Epiko", "Talumpati", "Anekdota"], answer: 1 },
  { question: "Ano ang layunin ng isang sanaysay?", options: ["Magkuwento ng kababalaghan", "Maglarawan ng kabayanihan", "Magpahayag ng kuru-kuro ng may-akda", "Magbigay ng tagpo sa teatro"], answer: 2 }
],
2: [
  { question: "Ano ang layunin ng teoryang Realismo?", options: ["Ipakita ang kagandahan ng kalikasan", "Ilarawan ang mga karanasan sa lipunan", "Gamitin ang imahen para sa masining na paglalarawan", "Maglahad ng mga pangyayaring payak"], answer: 1 },
  { question: "Anong teorya ang nagbibigay-diin sa damdamin, kaisipan at imahe sa isang akda?", options: ["Realismo", "Imahismo", "Klasisismo", "Queer"], answer: 1 },
  { question: "Aling teorya ang nagbibigay-diin sa mabubuting katangian ng mga babae?", options: ["Feminismo", "Sosyolohikal", "Moralismo", "Eksistensyalismo"], answer: 0 },
  { question: "Sa anong teorya ipinapakita ang kalayaan ng isang tao sa paggawa ng desisyon?", options: ["Humanismo", "Eksistensyalismo", "Dekonstraksyon", "Arketaypal"], answer: 1 },
  { question: "Alin sa mga sumusunod ang layunin ng Teoryang Klasisismo?", options: ["Ipakita ang emosyonal na labanan sa lipunan", "Maglahad ng payak na pangyayari na may kaayusan", "Iangat ang homosekswal sa paningin ng lipunan", "Ilarawan ang panloob na damdamin ng tao"], answer: 1 },
  { question: "Ano ang pangunahing layunin ng teoryang Queer?", options: ["Ipakita ang mabuting ugali ng kabataan", "Itaguyod ang karapatan ng kababaihan", "Iangat ang homosexual sa lipunan", "Ipakita ang pagsisikap ng isang bayani"], answer: 2 },
  { question: "Anong teorya ang nagbibigay pansin sa moralidad at pamantayan ng tama at mali?", options: ["Dekonstraksyon", "Moralismo", "Sosyolohikal", "Arketaypal"], answer: 1 },
  { question: "Alin sa mga sumusunod ang halimbawa ng Teoryang Sosyolohikal?", options: ["Isang tula ukol sa ganda ng kalikasan", "Sanaysay tungkol sa kahirapan sa lipunan", "Kwento ng pag-ibig na may pantasya", "Talumpati ukol sa personal na karanasan"], answer: 1 },
  { question: "Sa anong teorya ginagamit ang mga simbolo upang ilantad ang mensahe ng akda?", options: ["Formalismo", "Dekonstraksyon", "Arketaypal", "Realismo"], answer: 2 },
  { question: "Ano ang ipinapakita sa teoryang Marxismo?", options: ["Karanasan sa lipunan", "Pag-ibig sa bayan", "Pag-angat mula sa kahirapan at suliranin", "Imaheng nagpapahayag ng damdamin"], answer: 2 }
],
3:[
  { question: "Ano ang pangunahing mensahe ng 'Itaboy ang Kahirapan, Hindi ang Mahihirap'?", options: ["Dapat ayusin ang barung-barong ng mga mahihirap", "Ang mahihirap ay kailangang itaboy sa ibang lugar", "Dapat resolbahin ang kahirapan, hindi sisihin ang mahihirap", "Gantimpalaan ang gobernador ng lalawigan"], answer: 2 },
  { question: "Ano ang simbolo ng “pader” sa kwento ng hari?", options: ["Proteksyon para sa hari", "Pagkakahiwalay ng mayaman at mahirap", "Dekorasyon sa bayan", "Alaala ng pagbisita ng hari"], answer: 1 },
  { question: "Sa “Mabangis na Lungsod”, ano ang pangunahing suliranin ni Adong?", options: ["Nawawala siya sa lungsod", "Gutom at takot kay Bruno", "Hindi niya makita ang simbahan", "Walang makausap na kaibigan"], answer: 1 },
  { question: "Ano ang sinisimbolo ng simbahan sa kwento ni Adong?", options: ["Lugar ng pag-asa at kabuhayan", "Palengke ng mga pulubi", "Tahanan ni Adong", "Bahagi ng lungsod na puno ng takot"], answer: 0 },
  { question: "Ano ang pananaw ng gobyerno ayon sa tekstong “Itaboy ang Kahirapan…”?", options: ["Kailangang bigyan ng ayuda ang mga mahihirap", "Dapat turuan ang mahihirap ng hanapbuhay", "Kailangang itaboy ang mahihirap para sa kaayusan", "Lahat ng nasa lungsod ay dapat tulungan"], answer: 2 }
],

4: [
  { question: "Ano ang ibig sabihin ng karapatang pantao?", options: ["Karapatang iginagawad lamang ng pamahalaan", "Karapatang ipinagkakaloob ng pamilya", "Karapatang taglay ng tao mula sa pagsilang", "Karapatang tinatanggap sa pag-aaral"], answer: 2 },
  { question: "Bakit mahalagang malaman ng isang tao ang kaniyang mga karapatang pantao?", options: ["Upang makipagtalo sa iba", "Upang matamasa ang mga pangunahing pangangailangan", "Upang makapamili sa pamahalaan", "Upang hindi maparusahan"], answer: 1 },
  { question: "Ano ang maaaring gawin ng isang tao kung siya ay nilabag sa kanyang karapatan?", options: ["Magalit sa lipunan", "Lumayo sa pamahalaan", "Dumulog sa hukuman", "Manahimik na lamang"], answer: 2 },
  { question: "Ayon sa teksto, ano ang bunga ng pagkilala sa karapatan ng ibang tao?", options: ["Kaguluhan", "Pagkakawatak-watak", "Paglabag sa batas", "Kapayapaan"], answer: 3 },
  { question: "Ano ang naging pangunahing tungkulin ng kababaihan sa tradisyonal na lipunang Pilipino?", options: ["Maging lider ng pamahalaan", "Maghanapbuhay sa labas", "Mag-alaga ng bata at bahay", "Mamuno sa negosyo"], answer: 2 },
  { question: "Ano ang epekto ng pagkakait ng pantay na oportunidad sa kababaihan?", options: ["Mas maraming oportunidad sa lahat", "Pag-unlad ng kababaihan", "Kakulangan ng papel ng babae sa lipunan", "Pagtaas ng posisyon ng kababaihan"], answer: 2 },
  { question: "Alin sa mga sumusunod ang suliraning nararanasan ng mga babae ayon sa teksto?", options: ["Pagkaunti ng kita", "Kawalan ng trabaho", "Pambubog ng asawa at karahasan", "Pagkainip sa bahay"], answer: 2 },
  { question: "Bakit sinisi ni Aling Marta ang batang lalaki sa pagkawala ng kanyang kalupi?", options: ["May nakita siyang ebidensiya", "Nakatanggap siya ng babala", "Mahirap at marungis ang bata", "Inamin ito ng bata"], answer: 2 },
  { question: "Ano ang tunay na dahilan kung bakit naiwan ni Aling Marta ang kanyang kalupi?", options: ["Ninakaw ito ng bata", "Naiwan sa bahay at kinuha ng asawa", "Nahulog sa palengke", "Kinuha ng ibang mamimili"], answer: 1 },
  { question: "Ano ang naging reaksyon ni Aling Marta sa huli nang matuklasan ang katotohanan?", options: ["Masaya siya at tama ang hinala", "Pinanigan pa rin ang pulis", "Labis na pagsisisi at panghihina", "Ipinagtanggol pa rin ang kanyang ginawa"], answer: 2 }
],
5: [
  { question: "Ano ang pangunahing layunin ng tulang 'Ang Magsasaka' ni Julian Cruz Balmaceda?", options: ["Ipakita ang kahinaan ng mga magsasaka", "Ilarawan ang pagiging tamad ng mga magsasaka", "Ibigay ang pagkilala sa sakripisyo ng magsasaka", "Himukin ang mga tao na huwag magsaka"], answer: 2 },
  { question: "Ayon sa tula ni Jess Santiago, ang bawat butil ng palay ay simbolo ng ano?", options: ["Kasaganaan at kayamanan", "Pawis, luha, at dugo ng magsasaka", "Regalo ng Diyos sa mga mayaman", "Karangyaan ng pamahalaan"], answer: 1 },
  { question: "Ano ang ibig sabihin ng 'butil ng ginto' sa tulang Butil ng Palay?", options: ["Tunay na ginto mula sa lupa", "Gintong palay na binebenta sa ibang bansa", "Mahalagang bunga ng paghihirap ng magsasaka", "Butil na ginawang alahas"], answer: 2 },
  { question: "Sa tulang 'Alay sa mga Frontliners', ano ang sentral na tema?", options: ["Pagpuna sa pamahalaan", "Pagpapakita ng sakripisyo ng frontliners sa panahon ng pandemya", "Pananabik sa pagbabakasyon", "Pag-ibig sa pamilya"], answer: 1 },
  { question: "Sa nobelang Ibong Mandaragit, sino ang pangunahing tauhan?", options: ["Martin", "Karyo", "Mando Plaridel / Andoy", "Don Segundo"], answer: 2 },
  { question: "Bakit nagtatag si Mando ng pahayagang 'Kampilan'?", options: ["Upang magbalita ng tsismis", "Upang makatulong sa kampanya ng gobyerno", "Upang ipahayag ang katotohanan at ipaglaban ang karapatan ng mga naaapi", "Upang yumaman sa media"], answer: 2 },
  { question: "Ano ang ginawa ni Mando upang matamo ang higit na kaalaman?", options: ["Nagbenta ng kayamanan", "Nag-aral sa U.P.", "Naglibot sa mundo upang magpakadalubhasa", "Nagpatayo ng paaralan"], answer: 2 },
  { question: "Ano ang simbolismo ng 'paghuhukay ng kayamanan ni Simoun' sa Ibong Mandaragit?", options: ["Literal na kayamanan para sa kasayahan", "Kayamanang gagamitin sa pagganti", "Pagtuklas ng karunungan upang magamit sa paglaya ng bayan", "Kayamanang ipinamana sa simbahan"], answer: 2 },
  { question: "Anong uri ng panlipunang isyu ang tinatalakay ng Ibong Mandaragit?", options: ["Kalikasan", "Pagsasamantala sa mga manggagawa at magsasaka", "Kultura ng mga dayuhan", "Industriyalisasyon"], answer: 1 },
  { question: "Ano ang layunin ng pag-aaral ng panitikang tumatalakay sa mga isyung panlipunan?", options: ["Magsaya sa pagbabasa", "Malibang sa mga kwento", "Mapaunlad ang pag-unawa sa mga suliraning kinakaharap ng lipunan", "Maiwasan ang pagbabasa ng mahihirap na akda"], answer: 2 }
],
7: [
  { question: "Siya ay isang German politician at nagsilbing Chancellor ng Germany mula 2005 hanggang 2021.", options: ["Angel Merkel", "Sonia Gandhi", "Dilma Rouseff", "Hillary Clinton"], answer: 0 },
  { question: "Siya ay may malaking impluwensya sa politika ng bansa bilang lider ng Indian National Congress (INC).", options: ["Angel Merkel", "Sonia Gandhi", "Dilma Rouseff", "Hillary Clinton"], answer: 1 },
  { question: "Siya ay isang Brazilian politician na naging unang babaeng Pangulo ng Brazil.", options: ["Angel Merkel", "Sonia Gandhi", "Hillary Clinton", "Dilma Rouseff"], answer: 3 },
  { question: "Siya ay isang kilalang politiko, diplomat, abogado, at unang ginang ng Estados Unidos. Siya ay isang pangunahing personalidad sa politika ng Amerika.", options: ["Angel Merkel", "Sonia Gandhi", "Hillary Clinton", "Dilma Rouseff"], answer: 2 },
  { question: "Isang kilalang Amerikanong TV host, aktres, producer, at philanthropist. Siya ay kilala bilang host ng The Oprah Winfrey Show.", options: ["Angel Merkel", "Oprah Winfrey", "Dilma Rouseff", "Hillary Clinton"], answer: 1 },
  { question: "Ano ang batas ang hindi ipinasa para sa kababaihan protekta sa mga karanasan?", options: ["R.A blg 9261", "R.A blg 6725", "R.A blg 7192", "R.A blg 4516"], answer: 3 },
  { question: "Isang epikong Bisaya na tungkol sa isang bayan na nagngangalang Labaw Donggon?", options: ["Labaw Donggon", "Biag ni Lang am", "Datu Marai", "Wala sa nabanggit"], answer: 0 },
  { question: "Ang pagsulong ng panitikan ay mahalagang papel sa paghubog ng kamalayan ng lipunan hinggil sa mga isyung pangkasarian.", options: ["Tama", "Mali", "Siguro", "Wala sa nabanggit"], answer: 0 },
  { question: "Ano ang pagkakaiba ng mga kababaihan sa panahon noon at ngayon?", options: ["Wala pagkakaiba sa mga kababaihan noon at ngayon", "Nagkakaroon ng halaga, makikibahagi na sa politika at paggawa ng desisyon sa lipunan", "Humadlang sa pagkakaiba ng mga kasarian ang mga kababaihan dahil sa ideya nila", "Wala sa nabanggit"], answer: 1 },
  { question: "Ayon kay isa, ang solarium ay isa sa mga kantang may tagong pakahulugan mula sa album na Sticker Happy?", options: ["Angel Merkel", "Sonia Gandhi", "Hillary Clinton", "David Gonzales"], answer: 3 }
],
8: [
  { question: "Sino ang kaunang-unahang gobernador Heneral?", options: ["Miguel Lopez de Legazpi", "Villabos", "Jose Basco", "Espanyol"], answer: 0 },
  { question: "Sino ang nagpasya ng ngalang Felipinas o Felipenas bilang parangal kay Haring Felipe?", options: ["Miguel Lopez de Legazpi", "Villabos", "Jose Basco", "Espanyol"], answer: 1 },
  { question: "Ano ang mga lumusob at umagaw sa Pilipinas?", options: ["Miguel Lopez de Legazpi", "Villabos", "Jose Basco", "Espanyol, Hapon, Ingles"], answer: 3 },
  { question: "Kauna-unahang aklat na nailimbag sa Pilipinas noong 1593?", options: ["Doctrina Christiana", "Nuestra Senora Del Rosario", "Barlaan at Josaphat", "Urbana at Felisa"], answer: 0 },
  { question: "Aral na tunay na totoong Pag-aacay sa Tauo, nang manga Cabanalang?", options: ["Doctrina Christiana", "Nuestra Senora Del Rosario", "Barlaan at Josaphat", "Urbana at Felisa"], answer: 2 },
  { question: "Ikalawang aklat na nailimbag sa Pilipinas?", options: ["Doctrina Christiana", "Nuestra Senora Del Rosario", "Barlaan at Josaphat", "Urbana at Felisa"], answer: 1 },
  { question: "Aklat na sinulat ni Modesto de Castro ang tinaguriang Ama ng Klasikong Tuluyan sa Tagalog?", options: ["Doctrina Christiana", "Nuestra Senora Del Rosario", "Barlaan at Josaphat", "Urbana at Felisa"], answer: 3 },
  { question: "Aklat na nauukol sa buhay at pagpapakasakit ni Kristo?", options: ["Doctrina Christiana", "Nuestra Senora Del Rosario", "Pasyon", "Urbana at Felisa"], answer: 2 },
  { question: "Panunuluyan - Dulang tinatanghal sa lansangan. Paghahanap ng matutuluyan nina Maria at Joseph?", options: ["Panunuluyan", "Nuestra Senora Del Rosario", "Pasyon", "Urbana at Felisa"], answer: 0 },
  { question: "Flores De Mayo/Dalit - ang pag-aalay ng bulaklak kasabay ng pag-awit bilang handog sa Birheng?", options: ["Panunuluyan", "Flores De Mayo/Dalit", "Pasyon", "Urbana at Felisa"], answer: 1 }
],
9: [
  { question: "Ang pamansag ng Katipunan. Itinatag ito noong 1896. Pinamatnugutan ito ni Pio Valenzuela.", options: ["Kalayaan", "Diario de Manila", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 0 },
  { question: "Diario de Manila - ang pantulong ng Kalayaan. Natagpuan ng mga kastila ang limbagan nito kaya’t may katibayan sila sa mga plano ng mga Katipunero.", options: ["Kalayaan", "Diario de Manila", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 1 },
  { question: "El Heraldo de la Revolucion - Makalawa sa isang linggo kung lumabas ang pahayagang ito.", options: ["Kalayaan", "Diario de Manila", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 2 },
  { question: "Ang mga manunulat na natampok sa panahong ito’y sina (Ama ng Katipunan)", options: ["Kalayaan", "Diario de Manila", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 3 },
  { question: "Siya ang Utak ng Katipunan kabilang dito Pio Valenzuela. Ang wikang natatampok nang panahong ito’y ang Tagalog", options: ["Kalayaan", "Emilio Jacinto", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 1 },
  { question: "La Independencia - Naging patnugot nito si Antonio Luna. Itinatag ito noong ika- 3 ng Setyembre, 1898.", options: ["Kalayaan", "La Independencia", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 1 },
  { question: "La Republika Filipina - Pinamatnugutan at itinatag ni Pedro Paterno noong 1898.", options: ["Kalayaan", "La Republika Filipina", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 1 },
  { question: "Ang Bayang Kahapis-hapis - Lumabas noong ika-24 ng Agosto, 1899.", options: ["Ang Bayang Kahapis-hapis", "Emilio Jacinto", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 0 },
  { question: "La Libertad- pinamatnugutan ni Clemente Zuleta", options: ["La Libertad", "Emilio Jacinto", "El Heraldo de la Revolucion", "Andres Bonifacio"], answer: 0 },
  { question: "Heraldo de la Revolucion - naglalathala ng mga dekreto ng pamahalaang mapanghimagsik, balita at mga akda sa Tagalog.", options: ["Kalayaan", "Emilio Jacinto", "Heraldo de la Revolucion", "Andres Bonifacio"], answer: 2 }
],
10: [
  { question: "Kailan naiwagayway ang ating bandila?", options: ["Hunyo 12 1898", "Hulyo 12 1898", "Hunyo 13 1898", "Hunyo 14 1898"], answer: 0 },
  { question: "Ano ang hindi kabilang sa tatlong pangkat ng mga manunulat?", options: ["Maka-Kastila", "Maka-Ingles", "Maka-tagalog", "Maka-hapon"], answer: 3 },
  { question: "“Doveglion”; pinakatanyag na Pilipinong manunulat sa Ingles", options: ["Jose Garcia Villa", "Jorge Bacobo", "Zoilo Galang", "Zulueta De Costa"], answer: 0 },
  { question: "Sinulat-”Filipino Contact with America”; A Vision of Beauty", options: ["Jose Garcia Villa", "Jorge Bacobo", "Zoilo Galang", "Zulueta De Costa"], answer: 1 },
  { question: "Sumulat ng kauna-unahang nobelang Pilipino sa wikang Ingles na pinamagatang “A Child of Sorrow”", options: ["Jose Garcia Villa", "Jorge Bacobo", "Zoilo Galang", "Zulueta De Costa"], answer: 2 },
  { question: "Nagkamit ng unang gantimpala sa tulang “Like the Molave”", options: ["Jose Garcia Villa", "Jorge Bacobo", "Zoilo Galang", "Zulueta De Costa"], answer: 3 },
  { question: "May-akda ng “My Islands” at “Children of the Ash Covered Loom”. Ang huli ay isinalin sa iba’t ibang wika sa India", options: ["Jose Garcia Villa", "Jorge Bacobo", "Nvm Gonzales", "Zulueta De Costa"], answer: 2 },
  { question: "Umakda ng “April Morning”; nakilala sa pagsulat ng mga tulang lirikonoong panahon ng Komomwelt", options: ["Jose Garcia Villa", "Jorge Bacobo", "Angela Manalang Gloria", "Zulueta De Costa"], answer: 2 },
  { question: "Ipinalalagay na pinakapangunahing manunulat na babae sa Ingles bago magdigma. Sinulat niya ang “MAGNIFICENCE” at “GRAY CONFETTI”", options: ["Jose Garcia Villa", "Estrella Alfon", "Angela Manalang Gloria", "Zulueta De Costa"], answer: 1 },
  { question: "May-akda ng “THE WOUND AND THE SCAR”- kauna-unahang aklat na nalimbag sa Philippine Book Guild", options: ["Jose Garcia Villa", "Arturo Rotor", "Zoilo Galang", "Zulueta De Costa"], answer: 1 }
],
11:[
  { question: "Ano ang pangunahing ideolohiya ni Delfin sa nobelang \"Banaag at Sikat\"?", options: ["Anarkismo", "Komunismo", "Sosyalismo", "Kapitalismo"], answer: 2 },
  { question: "Sino ang may-akda ng nobelang \"Banaag at Sikat\" na tinaguriang \"Ama ng Pambansang Wika at Balarila\" ng Pilipinas?", options: ["Valeriano Hernandez-Peña", "Lope K. Santos", "Jose Rizal", "Andres Bonifacio"], answer: 1 },
  { question: "Saan naging patnugot si Lope K. Santos para sa mga lathalaing nasa wikang Tagalog noong 1900?", options: ["Liwayway at Bulaklak", "Muling Pagsilang at Sampaguita", "Manila Bulletin at Philippine Daily Inquirer", "Taliba at La Solidaridad"], answer: 1 },
  { question: "Ano ang pangunahing suliranin na umusbong sa unang kabanata ng \"Banaag at Sikat\" ayon sa balangkas ng pagsusuri?", options: ["Pag-aaway ng magkasintahan", "Pagkaganid ng mga Don sa batis", "Pagkawala ng trabaho", "Pagkakasakit ng pangunahing tauhan"], answer: 1 },
  { question: "Anong teoryang pampanitikan ang angkop sa nobelang \"Banaag at Sikat\" dahil sa pagpapakita ng tunay na nangyayari sa lipunan, partikular ang pang-aapi ng mayaman sa mahirap?", options: ["Romantisismo", "Klasisismo", "Realismo", "Humanismo"], answer: 2 },
  { question: "Sino ang matalik na magkaibigang dalaga sa nobelang \"Nene at Neneng\"?", options: ["Meni at Talia", "Tentay at Chayong", "Nena at Neneng", "Isiang at Loleng"], answer: 2 },
  { question: "Sino ang lalaking naging sanhi ng unang pagsubok sa pagkakaibigan nina Nena at Neneng dahil sa pagiging babaero nito?", options: ["Deogracias", "Narciso", "Miguel", "Isko"], answer: 2 },
  { question: "Sino ang naging asawa ni Nena sa nobelang \"Nene at Neneng\"?", options: ["Miguel", "Narciso", "Deogracias", "Isko"], answer: 2 },
  { question: "Ano ang nangyari kay Miguel sa huling bahagi ng kwento ng \"Nene at Neneng\"?", options: ["Nagpakasal kay Chayong", "Naging mayaman", "Namatay sa bilangguan", "Lumisan ng bansa"], answer: 2 },
  { question: "Ano ang naging sanhi ng pagkasakit at pagpanaw ni Neneng sa nobela?", options: ["Pagkalugi sa negosyo", "Isang liham mula kay Isko na nagdulot ng duda kay Narciso", "Pag-aaway sa pamilya", "Hindi pagkakaintindihan sa pagitan ng magkakaibigan"], answer: 1 }
],
13:[
  { question: "Isang maikling tula na may tatlong taludtod at sumusunod sa sukat na 5-7-5 na pantig.", options: ["Haiku", "Tanaga", "Maikling Kwento", "Dula"], answer: 0 },
  { question: "Binuhay ni Ildefonso Santos, ang tanaga ay isang uri ng tula na may apat na taludtod, bawat isa ay may pitong pantig. May sukat at tugma ito at mayaman sa talinghaga.", options: ["Haiku", "Tanaga", "Maikling Kwento", "Dula"], answer: 1 },
  { question: "Bunga ng kahirapan sa panahon ng digmaan, naging tanyag ang mga dula bilang libangan ng mga tao.", options: ["Haiku", "Tanaga", "Maikling Kwento", "Dula"], answer: 3 },
  { question: "Kaunti lamang ang naisulat na nobela dahil sa krisis sa papel at kahirapan sa pamumuhay. Dahil dito, higit na tumutok ang mga manunulat sa maikling kuwento at tula.", options: ["Haiku", "Nobela", "Maikling Kwento", "Dula"], answer: 1 },
  { question: "Kauna-unahang Pilipino na nagsulat ng soap opera sa radyo, nakasulat ng 3000 nobela, 2000 maikling kuwento, at 36 tomo ng iskrip.", options: ["Haiku", "Liwayway A. Arceo", "Maikling Kwento", "Dula"], answer: 1 },
  { question: "Kilala sa kanyang dula na “Sa Pula, Sa Puti.” Siya ay naging senador at kasapi sa pagbabalangkas ng Konstitusyon noong 1987.", options: ["Haiku", "Francisco Soc Rodrigo", "Maikling Kwento", "Dula"], answer: 1 },
  { question: "Mga Tema ng Panitikan noong Panahon ng Hapon", options: ["Buhay sa lalawigan, pagsasaka, at pangingisda.", "Pagiging masipag, na bahagi ng kulturang Hapon.", "Makabayan at pagmamahal sa kalikasan.", "Lahat ng nabanggit"], answer: 3 },
  { question: "Noong panahon ng pananakop ng mga Hapon sa Pilipinas, nakilala ito bilang ng maikling kuwento at dula sa wikang Tagalog.", options: ["Tagalog", "Ingles", "Maikling Kwento", "Gintong Panahon"], answer: 1 },
  { question: "Ang mga Hapon ay nagbawal sa paggamit , na siyang nakasanayan mula sa panahon ng mga Amerikano, kaya’t higit na naging prominente ang panitikang Pilipino sa wikang Tagalog.", options: ["Tagalog", "Ingles", "Maikling Kwento", "Dula"], answer: 1 },
  { question: "Itinuturing na pinakamaunlad na anyo ng panitikan sa panahong ito.", options: ["Haiku", "Tanaga", "Maikling Kwento", "Dula"], answer: 2 }
],
14:[
  { question: "Naglalayong ipakita ang mga karanasan ng mga pangkat na karaniwang nakakaranas ng diskriminasyon o hindi pagkakapantay-pantay sa lipunan.", options: ["Sitwasyon ng Mga Pangkat Minorya", "Pagbuo ng Bansang Estado", "Multikulturalismo", "Multikultural"], answer: 0 },
  { question: "Pagbuo ng Bansang Estado. Sinikap ng mga bansa na magkaroon ng isang kultura, lahi, at wika.", options: ["Sitwasyon ng Mga Pangkat Minorya", "Pagbuo ng Bansang Estado", "Multikulturalismo", "Multikultural"], answer: 1 },
  { question: "Multikultural: Tumutukoy sa pagkakaroon ng maraming kultura sa loob ng isang estado.", options: ["Sitwasyon ng Mga Pangkat Minorya", "Pagbuo ng Bansang Estado", "Multikulturalismo", "Multikultural"], answer: 3 },
  { question: "Isang ideolohiya na tumatanggap sa pagkakaiba-iba ng kultura sa loob ng isang bansa.", options: ["Sitwasyon ng Mga Pangkat Minorya", "Pagbuo ng Bansang Estado", "Multikulturalismo", "Multikultural"], answer: 2 },
  { question: "Rehiyonalismo ay ang malakas na pagkilala ng mga Pilipino sa kanilang rehiyon bago pa sa kanilang pagka-Pilipino.", options: ["Sitwasyon ng Mga Pangkat Minorya", "Pagbuo ng Bansang Estado", "Multikulturalismo", "Rehiyonalismo"], answer: 3 },
  { question: "Pagtingin na mas mataas ang sariling rehiyon kumpara sa iba.", options: ["Sitwasyon ng Mga Pangkat Minorya", "Pagbuo ng Bansang Estado", "Rehiyonal na Etnosentrismo", "Rehiyonalismo"], answer: 2 },
  { question: "Rehiyonal na Diskriminasyon: Pag-aakalang mas mababa ang kagalingan ng ibang rehiyon.", options: ["Rehiyonal na Diskriminasyon", "Pagbuo ng Bansang Estado", "Rehiyonal na Etnosentrismo", "Rehiyonalismo"], answer: 0 },
  { question: "Kristiyano sa Kapatagan: Mayorya at ang pangunahing pangkat sa Pilipinas (mga Ilokano, Tagalog, Cebuano, atbp.).", options: ["Rehiyonal na Diskriminasyon", "Pagbuo ng Bansang Estado", "Rehiyonal na Etnosentrismo", "Kristiyano sa Kapatagan"], answer: 3 },
  { question: "Itinuturing na minorya sa kabuuan ng Pilipinas, ngunit may mas matibay na pagkakaisa at itinuturing na mayorya sa harap ng mga katutubo.", options: ["Rehiyonal na Diskriminasyon", "Pagbuo ng Bansang Estado", "Rehiyonal na Etnosentrismo", "Mga Muslim sa Mindanao"], answer: 3 },
  { question: "Katutubo (Lumad): Maraming tribu sa buong Pilipinas, tulad ng mga Ifugao sa Luzon at mga Bagobo sa Mindanao, na patuloy na nakakaranas ng marginalisasyon. Sila ay itinuturing na minorya sa harap ng mga Kristiyano at Muslim.", options: ["Rehiyonal na Diskriminasyon", "Katutubo Lumad", "Rehiyonal na Etnosentrismo", "Mga Muslim sa Mindanao"], answer: 1 }
],
15:[
  { question: "Orihinal na tumutukoy sa paglipat o pagkalat ng mga sinaunang Griyego sa ibang mga lupain sa labas ng kanilang bansa", options: ["Diaspora", "Migrasyon", "Mas Ligtas na Pamumuhay", "Mas Mataas na Kita sa Ibang Bansa"], answer: 0 },
  { question: "Paglipat ng mga tao mula sa isang lugar patungo sa iba. Maaari itong pansamantala o permanente", options: ["Diaspora", "Migrasyon", "Mas Ligtas na Pamumuhay", "Mas Mataas na Kita sa Ibang Bansa"], answer: 1 },
  { question: "Maraming Pilipino ang nagiging OFW para magkaroon ng mas magandang kabuhayan.", options: ["Diaspora", "Migrasyon", "Mas Ligtas na Pamumuhay", "Mas Mataas na Kita sa Ibang Bansa"], answer: 3 },
  { question: "Ang kagustuhang tumira sa mas ligtas na lugar ay isa pang dahilan ng migrasyon.", options: ["Diaspora", "Migrasyon", "Mas Ligtas na Pamumuhay", "Mas Mataas na Kita sa Ibang Bansa"], answer: 2 },
  { question: "Nais ng ilang Pilipino na muling makapiling ang kanilang pamilya sa ibang bansa.", options: ["Diaspora", "Pagkakasama ng Pamilya", "Mas Ligtas na Pamumuhay", "Mas Mataas na Kita sa Ibang Bansa"], answer: 1 },
  { question: "Ang ilang kabataan ay nag-aaral sa ibang bansa para sa mas mataas na antas ng edukasyon.", options: ["Diaspora", "Mas Maayos na Edukasyon", "Mas Ligtas na Pamumuhay", "Mas Mataas na Kita sa Ibang Bansa"], answer: 1 },
  { question: "Isang Pilipinong alipin na nabili ni Ferdinand Magellan sa Melaka, ay itinuturing na unang OFW", options: ["Enrique", "Rogelio G. Mangahas", "Filipino", "Walang nabanggit"], answer: 0 },
  { question: "Siya ang sumulat akda na paglisan", options: ["Enrique", "Rogelio G. Mangahas", "Filipino", "Walang nabanggit"], answer: 1 },
  { question: "Ang pagtira sa sariling bayan ay nagbubukas ng mas malalim na pag-unawa sa pinagmulan at kultura ng isang tao", options: ["Enrique", "Rogelio G. Mangahas", "Filipino", "Pagtuklas sa Tahanan ng mga Ninuno"], answer: 3 },
  { question: "Ang karanasan kong ito ay nagbigay-linaw sa akin sa yaman ng kulturang Filipino at nagparamdam na kumpleto ang aking pagkatao.", options: ["Tama", "Mali", "Hindi nabanggit", "Lahat ng nabanggit"], answer: 0 }
],
16:[
  { question: "Nagpapagalaw at nagbibigay buhay sa kwento.", options: ["Tauhan", "banghay", "Tagpuan", "Tungalian"], answer: 0 },
  { question: "Lugar at panahon ng mga pangyayari.", options: ["Tauhan", "banghay", "Tagpuan", "Tungalian"], answer: 2 },
  { question: "Pagkakasunod-sunod ng mga pangyayari.", options: ["Tauhan", "banghay", "Tagpuan", "Tungalian"], answer: 1 },
  { question: "Laban ng tauhan sa sarili, lipunan, o kapaligiran.", options: ["Tauhan", "banghay", "Tagpuan", "Tungalian"], answer: 3 },
  { question: "Mensahe o aral sa mambabasa.", options: ["Tauhan", "banghay", "Magandang kaisipan", "Tungalian"], answer: 2 },
  { question: "Tumatalakay ito sa kultura, tradisyon, at mga kaugalian ng isang partikular na lugar o komunidad", options: ["Tauhan", "Kwentong Katutubong Kulay", "Magandang kaisipan", "Tungalian"], answer: 1 },
  { question: "Kwento ito na nagmula sa mga karaniwang mamamayan at laganap sa kanilang komunidad", options: ["Tauhan", "Kwentong Bayan", "Magandang kaisipan", "Tungalian"], answer: 1 },
  { question: "Uri ng kwento na naglalaman ng mga kaganapang hindi pangkaraniwan o mahirap paniwalaan. Madalas may temang supernatural, gaya ng mga multo o kakaibang nilalang.", options: ["Tauhan", "banghay", "Magandang kaisipan", "Kwentong Kababalaghan"], answer: 3 },
  { question: "Kwentong ang pangunahing layunin ay maghatid ng takot o pangamba sa mambabasa. Naglalaman ito ng mga pangyayaring nakakakilabot o nakakatakot", options: ["Tauhan", "banghay", "Kwentong Katatakutan", "Tungalian"], answer: 2 },
  { question: "Nakasentro ang kwento sa isang dramatikong pangyayari na nagdudulot ng malaking pagbabago sa buhay ng tauhan.", options: ["Tauhan", "Kwentong Madulas Pangyayari", "Magandang kaisipan", "Tungalian"], answer: 1 }
],
17:[
  { question: "Gaano katagal ang worksyap?", options: ["1-3 araw", "1-2 araw", "5 araw", "1 araw"], answer: 1 },
  { question: "Maaari itong mga tula tungkol sa sarili, pamilya, kultura, o karanasan.", options: ["Sanaysay", "Tula", "Wika", "Maikling kwento"], answer: 1 },
  { question: "Pumili ng isang paksang mahalaga at malapit sa puso ng may-akda, halimbawa’y karanasan, opinyon, o mga natutunan sa buhay.", options: ["Sanaysay", "Tula", "Wika", "Maikling kwento"], answer: 0 },
  { question: "Isalaysay ang isang makabuluhang kuwento na may malinaw na banghay, tauhan, at aral.", options: ["Sanaysay", "Tula", "Wika", "Maikling kwento"], answer: 3 },
  { question: "Alin ang hindi bahagi ng pag rebisa?", options: ["Istruktura", "Wika", "Pagsusuri ng Akda", "paggamit ng Imahe"], answer: 2 },
  { question: "Ano ang isinasagawa pagkatapos ng worksyap?", options: ["Istruktura", "Pagninilay", "Pagsusuri ng Akda", "paggamit ng Imahe"], answer: 1 },
  { question: "Ano ang isinasagawa Feedback Session?", options: ["Istruktura", "Pagninilay", "Pagsusuri ng Akda", "Pagsusuri sa Output at tanggapin ang kritikal"], answer: 3 },
  { question: "Ano ang isinasagawa pagsusuri at Pagpasa ng Output?", options: ["Istruktura", "Pagninilay", "Pagsusuri ng Akda at paggapasa ng output", "Pagsusuri sa Output at tanggapin ang kritikal"], answer: 2 },
  { question: "Bigyang pansin ang tugma, simbolismo, o tema sa mga tula; ang lohika at detalye sa sanaysay; at ang banghay at tauhan sa maikling kwento.", options: ["Istruktura", "Pagninilay", "Pagsusuri ng Akda", "paggamit ng Imahe"], answer: 2 },
  { question: "Pagkatapos ng pagsusuri, ihanda ang panghuling bersyon ng akda at isumite sa facilitator ng worksyap o sa grupo.", options: ["Istruktura", "Pagninilay", "Pagsusuri ng Akda", "pagpapasa ng Awtoradong Output"], answer: 3 }
]

},


};
let currentUser = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 30;
let currentModule = null;  // Track which module quiz is active

const loginContainer = document.getElementById('login-container');
const portalContainer = document.getElementById('portal-container');
const loginError = document.getElementById('login-error');

const signupContainer = document.getElementById('signup-container');
const signupError = document.getElementById('signup-error');

const userRoleSpan = document.getElementById('user-role');

const accountSection = document.getElementById('account-section');
const subjectSection = document.getElementById('subject-section');
const checkSection = document.getElementById('check-section');
const moduleContent = document.getElementById('module-content');
const quizContent = document.getElementById('quiz-content');

const accountName = document.getElementById('account-name');
const accountNumber = document.getElementById('account-number');
const accountYear = document.getElementById('account-year');
const accountSemester = document.getElementById('account-semester');
const accountStatus= document.getElementById('account-status');
const accountPhoto = document.getElementById('account-photo');

const quizContainer = document.getElementById('quizContainer');
const quizResult = document.getElementById('quizResult');
const timerDisplay = document.getElementById('timer');

function showSignupForm() {
  loginContainer.classList.add('hidden');
  signupContainer.classList.remove('hidden');
  signupError.textContent = '';
}
localStorage.setItem('users', JSON.stringify(users));

function showLoginForm() {
  document.getElementById('signup-container').classList.add('hidden');
  document.getElementById('login-container').classList.remove('hidden');
}

function signup() {
  const name = document.getElementById('signup-name').value.trim();
  const email = document.getElementById('signup-email').value.trim().toLowerCase();
  const password = document.getElementById('signup-password').value;
  const studentNumber = document.getElementById('signup-number').value.trim();
  const year = document.getElementById('signup-year').value.trim();
  const semester = document.getElementById('signup-semester').value.trim();
  const status = document.getElementById('signup-status').value.trim();

  if (!name || !email || !password || !studentNumber || !year || !semester || !status) {
    signupError.textContent = 'Please fill in all fields.';
    return;
  }

  const username = email.split('@')[0];
  if (users[username]) {
    signupError.textContent = 'User already exists.';
    return;
  }

  users[username] = {
    role: 'Student',
    email,
    password,
    name,
    studentNumber,
    year,
    semester,
    status,
    scores: {}
  };

  localStorage.setItem('users', JSON.stringify(users)); // <-- add this line

  signupError.textContent = '';
  alert('Account created successfully! Please login.');
  showLoginForm();
}


function login() {
  const emailInput = document.getElementById('email').value.trim().toLowerCase();
  const passwordInput = document.getElementById('password').value;

  const username = emailInput.split('@')[0];

  if (!users[username]) {
    loginError.textContent = 'User not found';
    return;
  }
  if (users[username].password !== passwordInput) {
    loginError.textContent = 'Incorrect password';
    return;
  }

  currentUser = { username, ...users[username] };

  // Ensure scores object exists
  if (!currentUser.scores) {
    currentUser.scores = {};
  }

  loginError.textContent = '';
  showPortal();
}
function showPortal() {
  loginContainer.classList.add('hidden');
  portalContainer.classList.remove('hidden');
  userRoleSpan.textContent = currentUser.username;

  accountName.textContent = currentUser.name || currentUser.username;
  accountNumber.textContent = currentUser.studentNumber || '';
  accountYear.textContent = currentUser.year || '';
  accountSemester.textContent = currentUser.semester || '';
  accountStatus.textContent = currentUser.status || '';

  showSection('account');
}

function logout() {
  currentUser = null;
  loginContainer.classList.remove('hidden');
  portalContainer.classList.add('hidden');
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}

// ...existing code...

// Track online status on login
function login() {
  const emailInput = document.getElementById('email').value.trim().toLowerCase();
  const passwordInput = document.getElementById('password').value;
  const username = emailInput.split('@')[0];

  if (!users[username]) {
    loginError.textContent = 'User not found';
    return;
  }
  if (users[username].password !== passwordInput) {
    loginError.textContent = 'Incorrect password';
    return;
  }

  currentUser = { username, ...users[username] };

  // Ensure scores object exists
  if (!currentUser.scores) {
    currentUser.scores = {};
  }

  loginError.textContent = '';
  showPortal();
}


function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));

  // Show the requested section if it exists
  const target = document.getElementById(sectionName + '-section');
  if (target) target.classList.remove('hidden');

  // Special case: show scores if "check" section
  if (sectionName === 'check') showScores();
}

function openLesson(subject, moduleNumber) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));
  const moduleContent = document.getElementById('module-content');
  moduleContent.classList.remove('hidden');
  moduleContent.innerHTML = '';

  // Create a container for the PDF picker cards
  const pickerList = document.createElement('div');
  pickerList.className = 'pdf-picker-list';

  const pdfs = [
    { label: 'PDF 1', path: `lesson/${subject}/module${moduleNumber}_1.pdf` },
    { label: 'PDF 2', path: `lesson/${subject}/module${moduleNumber}_2.pdf` }
  ];

  pdfs.forEach(pdf => {
    fetch(pdf.path, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          const card = document.createElement('div');
          card.className = 'pdf-picker-card';
          card.textContent = pdf.label;
          card.onclick = () => window.open(pdf.path, '_blank' + Math.random(), 'noopener,noreferrer');
          pickerList.appendChild(card);
        }
      });
  });

  moduleContent.appendChild(pickerList);
}

// QUIZ FUNCTIONS

function startQuiz(subject, moduleNumber) {
  if (
    !allModules[subject] ||
    !allModules[subject][moduleNumber] ||
    allModules[subject][moduleNumber].length === 0
  ) {
    alert('No quiz available for this module.');
    return;
  }
  currentModule = `${subject}-${moduleNumber}`; // Save as subject-module for unique key
  currentQuestions = allModules[subject][moduleNumber];
  currentQuestionIndex = 0;
  score = 0;
  quizResult.textContent = '';
  quizContent.classList.remove('hidden');

  // Hide all subject sections and other sections
  document.querySelectorAll('.section').forEach(sec => sec.classList.add('hidden'));

  // Show only the quiz section
  quizContent.classList.remove('hidden');

  showQuestion();
  startTimer();
}

function showQuestion() {
  const q = currentQuestions[currentQuestionIndex];
  quizContainer.innerHTML = `<p><strong>Q${currentQuestionIndex + 1}:</strong> ${q.question}</p>`;

  const ul = document.createElement('ul');
  ul.style.listStyleType = 'none'; // no bullets
  ul.style.padding = '0';
  ul.style.marginTop = '12px';
  ul.style.maxWidth = '400px'; // optional width limit

  q.options.forEach((option, idx) => {
    const li = document.createElement('li');
    li.textContent = option;

    // Basic styling for clickable list items
    li.style.padding = '10px 15px';
    li.style.marginBottom = '8px';
    li.style.border = '1.5px solid #007BFF';
    li.style.borderRadius = '8px';
    li.style.cursor = 'pointer';
    li.style.userSelect = 'none';
    li.style.transition = 'background-color 0.3s ease, color 0.3s ease';

    // Hover effect
    li.onmouseenter = () => {
      li.style.backgroundColor = '#007BFF';
      li.style.color = '#fff';
    };
    li.onmouseleave = () => {
      li.style.backgroundColor = '';
      li.style.color = '';
    };

    li.onclick = () => selectAnswer(idx);

    ul.appendChild(li);
  });

  quizContainer.appendChild(ul);
}


function selectAnswer(selectedIndex) {
  if (selectedIndex === currentQuestions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  quizContainer.innerHTML = '';
  quizResult.textContent = `Quiz finished! Your score: ${score} / ${currentQuestions.length}`;
  clearInterval(timerInterval);
  timerDisplay.textContent = '';

  // Save score for the current module
  if (!currentUser.scores) currentUser.scores = {};
  currentUser.scores[currentModule] = {
    score: score,
    total: currentQuestions.length,
    date: new Date().toLocaleString()
  };
}

function startTimer() {
  timeLeft = 30;
  timerDisplay.textContent = `Time left: ${timeLeft}s`;

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert('Time is up! Quiz will end now.');
      endQuiz();
    }
  }, 1000);
}

function showScores() {
  checkSection.innerHTML = '<h3>Your Quiz Scores</h3>';

  if (!currentUser.scores || Object.keys(currentUser.scores).length === 0) {
    checkSection.innerHTML += '<p>No scores recorded yet.</p>';
    return;
  }

  const table = document.createElement('table');
  table.border = 1;
  table.style.borderCollapse = 'collapse';
  table.style.width = '100%';

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Module</th>
      <th>Score</th>
      <th>Date Taken</th>
    </tr>
  `;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  for (const moduleNum in currentUser.scores) {
    const s = currentUser.scores[moduleNum];
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>Module ${moduleNum}</td>
      <td>${s.score} / ${s.total}</td>
      <td>${s.date}</td>
    `;
    tbody.appendChild(tr);
  }

  table.appendChild(tbody);
  checkSection.appendChild(table);
}
