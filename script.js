const users = {
admin: { role: 'Admin', email: '[admin@bcp.com](mailto:admin@bcp.com)', password: '1234' },
teacher: { role: 'Teacher', email: '[teacher@bcp.com](mailto:teacher@bcp.com)', password: '1234' },
clifford: {
role: 'Student',
email: 'clifford@bcp.com',
password: '1234',
name: 'Clifford Guda',
studentNumber: '2025001',
year: '1st Year',
semester: '1st Semester',
status: 'Regular',
},
jordan: {
role: 'Student',
email: 'jordan@bcp.com',
password: '1234',
name: 'Jordan Nacion',
studentNumber: '2025002',
year: '2nd Year',
semester: '1st Semester',
status: 'Regular',
},
ryle: {
role: 'Student',
email: 'ryle@bcp.com',
password: '1234',
name: 'Ryle Resseles',
studentNumber: '2025003',
year: '3rd Year',
semester: '2nd Semester',
status: 'Regular',
},
};



const allModules = {
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
const accountStatus = document.getElementById('account-status');
const accountPhoto = document.getElementById('account-photo');

const quizContainer = document.getElementById('quizContainer');
const quizResult = document.getElementById('quizResult');
const timerDisplay = document.getElementById('timer');

// Assuming you have a users object defined somewhere
// Example:
// const users = {
//   john: { password: '123', role: 'student', scores: {} },
//   jane: { password: 'abc', role: 'student', scores: {} }
// };

// LOGIN
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

  accountName.textContent = currentUser.username;
  accountNumber.textContent = "2025-0001";
  accountYear.textContent = "1st Year";
  accountSemester.textContent = "1st Semester";
  accountStatus.textContent = currentUser.role;
  accountPhoto.src = 'https://via.placeholder.com/100';

  showSection('account');
}

function logout() {
  currentUser = null;
  loginContainer.classList.remove('hidden');
  portalContainer.classList.add('hidden');
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
}

function showSection(sectionName) {
  accountSection.classList.add('hidden');
  subjectSection.classList.add('hidden');
  checkSection.classList.add('hidden');
  moduleContent.classList.add('hidden');
  quizContent.classList.add('hidden');

  if (sectionName === 'account') accountSection.classList.remove('hidden');
  else if (sectionName === 'subject') subjectSection.classList.remove('hidden');
  else if (sectionName === 'check') {
    checkSection.classList.remove('hidden');
    showScores();  // Show scores when check section is opened
  }
}

function openLesson(moduleNumber) {
  const pdfPath = `lesson/module${moduleNumber}.pdf`;
  window.open(pdfPath, '_blank', 'noopener,noreferrer');
}


// QUIZ FUNCTIONS

function startQuiz(moduleNumber) {
  if (!allModules[moduleNumber] || allModules[moduleNumber].length === 0) {
    alert('No quiz available for this module.');
    return;
  }
  currentModule = moduleNumber;
  currentQuestions = allModules[moduleNumber];
  currentQuestionIndex = 0;
  score = 0;
  quizResult.textContent = '';
  quizContent.classList.remove('hidden');

  accountSection.classList.add('hidden');
  subjectSection.classList.add('hidden');
  checkSection.classList.add('hidden');
  moduleContent.classList.add('hidden');

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