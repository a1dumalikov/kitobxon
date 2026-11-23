const KITOBLAR = [
  {
    id: 'otgan-kunlar', title: "O'tgan kunlar", author: 'Abdulla Qodiriy', genre: 'roman', label: "O'ZBEK ADABIYOTI", year: 1926, rating: 4.9, cover: 'covers/otgan-kunlar.svg',
    chapters: [
      { title: "Eski mahalla tongi", text: [
        `Tong otganda eski mahalla uyg'onardi. Hovlilardagi eshiklar birin-ketin ochilib, suv quyg'on ayollarning ovozi, yigitlarning Salom alaykum degan salomi ko'cha bo'ylab tarqalardi. Hasan bu tongda hali uxlab yotar, lekin onasi uning ismini uch marta chaqirgach, ko'zini ochdi.`,
        `U o'rnidan turib, derazadan boqqa qaradi. Anor daraxtining yashil barglari shabnamga cho'mgandi. Onasi unga choy quyib: «Bugun otang bilan bozorga borasan», dedi. Hasan bosh irg'adi, lekin ichida bir g'alati bezovtalik bor edi — go'yo bu kuni kutayotgan bir ish bor edi, ammo u nima ekanini bilmasdi.`
      ]},
      { title: "Bozor orasidagi uchrashuv", text: [
        `Bozor qizg'in edi. Savdogarlar o'z mollaring mahtab, xaridorlarga qarab-qarab turar, chorvachilar esa qo'ylarini haydab o'tishardi. Hasan otasining yonida borar, ko'zi esa doim oldidagi qizil ko'ylakli qizga tushar edi. U qizni ilgari hech ko'rmagandi, lekin uning yurishi tanishdek tuyulardi.`,
        `Qiz bir to'xtab, unga qaradi va kichkina jilmaydi. Hasan hayajondan otasining qo'lidan tortib yubordi. Otasi kulib: «Bola, savdo qilishni ham o'rgan», dedi. Ammo Hasan savdo haqida emas, o'sha jilmayish haqida o'ylayotgandi. U o'ziga: «Ertaga yana kelaman», deb va'da berdi.`
      ]},
      { title: "Xat va sabr", text: [
        `O'sha kecha Hasan uyiga qaytib, stol ustiga o'tirib xat yozdi. Har bir so'zni uch marta o'chirib qayta yozdi. Xatni qizning qo'liga yetkazishni o'ziga vazifa qilib oldi, lekin qanday qilib yetkazishni bilmasdi. U tun bo'yi uxlolmay, tongni kutdi.`,
        `Ertasi kuni bozorda u yana keldi. Qiz yo'q edi. U uch kun ketma-ket keldi, to'rtinchi kuni esa xatni o'z qo'li bilan berish nasib qildi. Qiz xatni o'qib, hech narsa demay, faqat: «Rahmat», dedi. Bu bir so'z Hasan uchun butun bir dunyo edi.`
      ]},
      { title: "Sinov", text: [
        `Kunlar o'tavergach, otasi Hasanga: «O'g'lim, sevgi — bu faqat ko'z bilan qarash emas, u sabr bilan sinovdan o'tadi», dedi. Hasan bu gapni o'sha paytda tushunmadi. Faqat qizni ko'rganda yuragi tez urishini bilardi. U har kuni ertalab uyg'onib, avval uning xayoli bilan xayrlashardi.`,
        `Bir kuni qiz uyiga bormay qoldi. Hasan uning mahallasiga borib so'radi. Qiz uzoq safarga ketgani ma'lum bo'ldi. Hasan uzoq vaqt deraza oldida o'tirib, osmonga qaradi. U birinchi marta kutishning qanchalik og'ir ekanini his qildi.`
      ]},
      { title: "O'tgan kunlar", text: [
        `Yillar o'tdi. Hasan voyaga yetdi, otasining ishini davom ettirdi, lekin o'sha qizli xotira yuragida saqlanib qoldi. Bir kuni u eski bozordan o'tayotib, qizil ko'ylakli ayolni ko'rdi. U ham uni tanidi. Ikkalasi ham bir-biriga qaradi, lekin gap boshlamadi.`,
        `Hasan uyiga qaytib, eski xatni topdi. Xat sarg'argan, harflar o'chib ketgandi. U xatni o'qib chiqdi va kulumsiradi. O'tgan kunlar qaytmas, lekin ular bizda yaxshi odat, sabr va mehr bo'lib qoladi. U shuni tushundi va xatni yana stol ustiga qo'ydi.`
      ]}
    ]
  },
  {
    id: 'mehrdan', title: "Mehrdan ko\'z yashigacha", author: 'Abdulla Qodiriy', genre: 'roman', label: 'HIKOYALAR', year: 1929, rating: 4.6, cover: 'covers/mehrdan.svg',
    chapters: [
      { title: "Kichik uy", text: [
        `Toshkent chekkasidagi kichik uyda bir oila yashar edi. Uy kichik bo'lsa-da, hovlisida uzum bor, devorining yonida esa g'ishtin pech qurilgandi. Qish oqshomlarida pech boshiga yig'ilib, choy ichishardi. Bu oila uchun eng katta boylik shu edi.`,
        `Oila boshlig'i ertalab ishga ketar, qizlari esa uy ishlarida onasiga yordam berardi. Kattasi xat yozishni yaxshi ko'rardi. U har kuni bir varaq qog'ozga o'zining kichik orzularini yozar, keyin uni pech ichiga yoqib yuborardi.`
      ]},
      { title: "Yolg'iz xat", text: [
        `Bir kuni pochtachi uylariga xat olib keldi. Xat uzoq shahardan kelgandi. Onasi uni o'qib, ko'zini artib qo'ydi. Xatda otasining sog'lig'i haqida xabar bor edi. Qiz birinchi marta onasining yig'laganini ko'rdi va yig'lashning ham bir turi mehr ekanini tushundi.`,
        `O'sha oqshom pech o'chgandi. Uy sovuq edi, lekin uchalovi bir-biriga yaqin o'tirib, choy ichishdi. Katta qiz xatni olib, uni pechga yoqish o'rniga sandiqqa soldi. U birinchi marta xotirani saqlash kerakligini his qildi.`
      ]},
      { title: "Yo'l", text: [
        `Ertasi kuni ular otasining oldiga yo'l olishdi. Yo'l uzoq edi; arava uyma-uy yurib, qor ustidan o'tardi. Qiz deraza tashqarisiga qarab, har bir uyni, har bir daraxtni eslab borardi. U uyidan uzoqlashgani sayin, uying qanchalik qadrli ekanini anglab yetardi.`,
        `Yo'lda bir chol ularga yo'l ko'rsatdi. U: «Yolg'izlikdan ko'ra, bir-biringni sog'inish yaxshiroq», dedi. Qiz bu so'zni eslab qoldi. U otasiga yetib borgach, bu gapni aytib berdi. Otasi kuldii va uning boshini siladi.`
      ]},
      { title: "Qaytish", text: [
        `Ota sog'ayib, uyga qaytishdi. Hovlidagi uzum hali quruq edi, lekin pech yana ishlab turardi. Onasi xamir qordi, qizlari esa dasturxon yozdi. Ular shunchalik uzoq yurganki, endi choyning ta'mi boshqacha tuyulardi.`,
        `Katta qiz sandiqdan eski xatni oldi. U uni o'qib chiqdi va yana joyiga qo'ydi. Endi u xatni yoqishni xohlamardi. U tushundi: mehr yozilsa ham, o'chirilmasa ham bo'ladi — faqat uni eslab turish kerak.`
      ]},
      { title: "Yorug' oqshom", text: [
        `Shu kundan boshlab oila har oqshom pech boshiga yig'iladigan bo'ldi. Otasi ertalab ishga ketar, qizlari uy ishlarida yordam berar, onasi choy damlar edi. Uy yana o'sha kichik uy edi, lekin unda yangi bir narsa paydo bo'lgandi — bir-biriga bo'lgan ishonch.`,
        `Qiz yana bir varaq qog'oz oldi. Bu safar u orzu emas, rahmat yozdi. Qog'ozni pechga yoqmadi, sandiqqa soldi. Keyin o'choqqa qarab jilmaydi. U bilardi: ko'z yoshi ham, kulgi ham mehrdan tug'iladi.`
      ]}
    ]
  },
  {
    id: 'kichik-shahzoda', title: "Kichik shahzoda", author: 'Antuan de Sent-Ekzyuperi', genre: 'roman', label: 'JAHON KLASSIKASI', year: 1943, rating: 4.8, cover: 'covers/kichik-shahzoda.svg',
    chapters: [
      { title: "Cho'lda uchrashuv", text: [
        `Bir kuni cho'lda yolg'iz qolgan sayyoh kichkina bola bilan tanishdi. Bola uning oldiga kelib: «Iltimos, menga qo'ycha chizib ber», dedi. Sayyoh hayron bo'ldi, lekin qalam oldi va bir qo'ycha chizdi. Bola boshini chayqab: «Yo'q, ichiga quti chiz», dedi.`,
        `Shunday qilib ular tanishdilar. Bola o'zining kichik sayyorasi haqida gapirdi. U yerdagi eng katta narsa — uning uchta vulqoni va bitta guli edi. Sayyoh esa uning jiddiy ovoziga qarab, bu bolaning oddiy bola emasligini angladi.`
      ]},
      { title: "Gul va sayyora", text: [
        `Bola har kuni ertalab vulqonlarni tozalar, guliga suv quyardi. U gulining har bir harakatini bilardi. Gul esa unga: «Men senga ishonaman, shuning uchun meni himoya qil», degan edi. Bola bu so'zlarni hech unutmadi.`,
        `Bir kuni u sayyoradan jo'nab ketdi. U boshqa sayyoralarga bordi, har birida kattalarning g'alati ishlari bilan tanishdi. Ba'zilari faqat raqam hisoblar, ba'zilari esa faqat hokimlik qilishni orzu qilardi. Bola ularni tushunmay, yana yo'lga chiqardi.`
      ]},
      { title: "Tulki bilan do'stlik", text: [
        `Yer yuziga tushgach, bola bir tulki bilan uchrashdi. Tulki unga: «Men bilan o'rtoq bo'l», dedi. Bola rozi bo'ldi. Tulki unga qanday qilib do'st ortop kerakligini o'rgatdi: «Har kuni bir vaqtda kelish kerak. Shundagina men seni kuta olaman.»`,
        `Bola tulki bilan har kuni uchrashadigan bo'ldi. Ular quyosh botishini birgalikda tomosha qilishardi. Tulki unga sir buyurdi: «Eng muhim narsa ko'zga ko'rinmaydi. Sen gulinga sarflagan vaqting uni qadrli qiladi.» Bola bu sirni yuragiga soldi.`
      ]},
      { title: "Yo'qotish", text: [
        `Bir kuni bola o'z sayyorasiga qaytishga qaror qildi. U ilon bilan uchrashdi va ilon uni chaqdi. Bola yiqildi, lekin ketmadi. U tulkiga: «Men gulimga qaytishim kerak», dedi. Tulki jim turdi, keyin uning qo'lini yaladi.`,
        `O'sha oqshom bola yulduzlar ostida yotib, o'z sayyorasini o'yladi. U endi bilardi: guli uni kutayotgan bo'lishi kerak. U qanchalik uzoqda bo'lsa ham, guli bilan bog'langanligini his qildi. U ko'zlarini yumib, uxlab qoldi.`
      ]},
      { title: "Yulduzlar", text: [
        `Ertasi kuni sayyoh bolani topa olmadi. U osmonga qaradi va yulduzlarni boshqacha ko'rdi. U bilardi: ulardan birida kichik bola bor, u o'z guliga qarap turibdi. Sayyoh yulduzlarga qarab jilmaydi.`,
        `U o'z chizgan qo'ychasiga yana qaradi. Endi uning ichida quti bor edi. U qutining ichiga gul chizdi. Cho'l shamoli esib, qum ustidan o'tdi. Sayyoh esa o'yladi: har bir katta odam bir vaqtlar kichik bola bo'lgan, lekin buni ko'pchilik unutgan.`
      ]}
    ]
  },
  {
    id: 'robinzon', title: "Robinzon Kruzo", author: 'Daniel Defo', genre: 'sarguzasht', label: 'SARGUZASHT', year: 1719, rating: 4.7, cover: 'covers/robinzon.svg',
    chapters: [
      { title: "Dengizga chiqish", text: [
        `Robinzon yoshligida uydan ketib, dengizga chiqishni orzu qilardi. Otasi unga tinch hayotni maslahat bergan, lekin u tinglamagan edi. Bir kuni u kema bortiga chiqdi va shamol uning taqdirini boshqa tomonga olib ketdi.`,
        `Dastlab dengiz go'zal tuyuldi. Ammo ko'p o'tmay bo'ron boshlandi. Kema to'lqinlar orasida yulduzdek yo'qolib qoldi. Robinzon o'zini suvga tashlab, qirg'oqqa chiqishga muvaffaq bo'ldi. U yolg'iz edi.`
      ]},
      { title: "Orol", text: [
        `Ertasi kuni u uyg'onib, atrofiga qaradi. Orol kichik, lekin daraxtlarga boy edi. U kemadan oziq-ovqat, asbob va qurol olib chiqishga ulgurdi. Birinchi ishi — boshpana qurish bo'ldi. U palma barglari bilan o'ziga kichik kulba yasadi.`,
        `Robinzon kunlarni hisoblash uchun daraxtga belgi qo'ya boshladi. U ovqat topishni, olov yoqishni o'rgandi. Yolg'izlik og'ir edi, lekin u har kuni o'ziga: «Men yashashim kerak», deb takrorlardi. Bu takrorlash uni tirik tutardi.`
      ]},
      { title: "Ish va sabr", text: [
        `U yerdagi hayot ish bilan to'la edi. U non pishirishni, loydan idish yasashni, daraxtni o'yib qayiq yasashni o'rgandi. Har bir ish birinchi marta qiyin tuyulardi, lekin u to'xtamadi. U hatto kichik bog' yaratib, unda bug'doy ekdi.`,
        `Bir kuni u qum ustida notanish iz ko'rdi. U qo'rqdi, lekin keyin bu iz o'ziniki ekanini angladi. U kulib qo'ydi. O'zidan qo'rqish — yolg'izlikning eng g'alati ko'rinishi ekanini u shunda tushundi.`
      ]},
      { title: "Juma", text: [
        `Keyinchalik u boshqa odam bilan tanishdi. Uning ismini Juma deb atadi. Juma unga yordam berdi, ular birgalikda ish qildilar. Robinzon birinchi marta uzoq vaqtdan keyin gaplashadigan odam topdi. Uning yuragi yumshabil ketdi.`,
        `Ular birgalikda qayiq yasab, oroldan chiqishga tayyorlandilar. Robinzon endi faqat o'zi uchun emas, Juma uchun ham yashayotgandi. Bu unga kuch berdi. U har kuni ertalab: «Bugun ham bir ish qilamiz», derdi.`
      ]},
      { title: "Uyga qaytish", text: [
        `Bir kuni ularni kema ko'rdi. Robinzon uzoq yillar o'tib yana odamlar orasiga qaytdi. U orolda o'tkazgan kunlarini hisoblab chiqdi — yillar edi ular. U ko'p narsani yo'qotgandi, lekin ko'p narsani topgandi.`,
        `U uyiga kelgach, derazadan dengizga qaradi. Endi dengiz unga dushman emas, hayotining bir qismidek tuyulardi. U o'zining kichik kulbasini, bug'doy bog'ini va Jumani doim eslab yurdi. Sabr insonga eng katta kema ekanini u bilardi.`
      ]}
    ]
  },
  {
    id: 'jinoyat', title: "Jinoyat va jazo", author: 'Fyodor Dostoyevskiy', genre: 'roman', label: 'JAHON KLASSIKASI', year: 1866, rating: 4.9, cover: 'covers/jinoyat.svg',
    chapters: [
      { title: "Torf ko'chasi", text: [
        `Peterburgning tor ko'chalaridan birida yosh talaba yashar edi. U kambag'al, lekin o'qimishli edi. Har kuni u xonachasida o'tirib, o'zi o'ylab topgan nazariyasini yozardi. Uningcha, odamlar ikki xilga bo'linadi: oddiy va alohida.`,
        `Bu nazariya uni tinch qo'ymadi. U ko'chada yurib, har bir odamni o'lchab qarardi. Bir kuni u kechqurun uyiga qaytayotib, ko'prik ostida yashovchi kampirni ko'rdi. U kampirning hayoti hech kimga kerak emasdek tuyuldi.`
      ]},
      { title: "Qaror", text: [
        `U uzoq o'ylandi. Qaror qabul qilishdan oldin u bir necha kun bemor bo'lib yotti. Issiq havoda uning fikrlari aralashib ketardi. U o'ziga: «Men odam emas, printsipni sinayapman», deb oqlanishga harakat qildi.`,
        `Ertasi kuni u kampirning uyiga bordi. Eshik ochildi. U qo'liga o'roq olgandi. Bir lahzada hamma narsa tugadi. U qochib chiqdi, lekin orqasidan hech kim quvmadi. Eng qiyini boshlandi: o'zi bilan yolg'iz qolish.`
      ]},
      { title: "Taqvo", text: [
        `U uyiga yetib keldi va yotqizdi. Ertasi kuni u ko'chada yurib, odamlarning yuziga qarardi. Hamma oddiydek, hamma tinchdek edi. Faqat u emas. U endi o'zini boshqalardan ajratib turadigan devorni ko'rdi.`,
        `U pulni, soatni yashirdi, lekin vijdonini yashira olmadi. U madaniyatga, kitoblarga, do'stiga murojaat qildi. Hamma narsa o'z o'rnida edi, faqat ichida bir joy bo'm-bo'sh qolgandi. U birinchi marta jazo qamoqxona emasligini angladi.`
      ]},
      { title: "Tan olish", text: [
        `Bir kuni u do'sti Razumixinga bordi. Ular gaplashdilar. Keyin u politsiya idorasiga kirdi. U hamma narsani aytib berdi. Sud unga og'ir jazo berdi. U buni qabul qildi, lekin yuragida hali ham bir savol qolardi.`,
        `Sibirga ketayotganda u o'z hayotini qayta o'yladi. U ilgari o'zini yuqori deb hisoblagan ekan. Endi esa u oddiy odam bo'lishni orzu qilardi. U tushundi: inson faqat boshqalarga mehr bilan qaraganda o'zini topadi.`
      ]},
      { title: "Yangi boshlanish", text: [
        `Sibirda u mehnat qildi. Qish uzoq, lekin tinch edi. U yonida bir ayol bor edi — u uni sevardi va unga ishonardi. Robinzon kabi u ham ish bilan o'zini qayta qurdi. Ammo bu safar yolg'iz emasdi.`,
        `Bir kuni u xat oldi. Xatda: «Hayot boshlanadi», degan so'z bor edi. U xatni katlab, cho'ntagiga soldi. U bilardi: o'tgan kunlar qaytmaydi, lekin keyingi kun hali yozilmagan. U qalam oldi.`
      ]}
    ]
  },
  {
    id: 'ming-bir', title: "Ming bir kecha", author: 'Xalq ertaklari', genre: 'ertak', label: 'XALQ ERTAKLARI', year: 1830, rating: 4.6, cover: 'covers/ming-bir-kecha.svg',
    chapters: [
      { title: "Saroy kechasi", text: [
        `Bir paytlar sharq shaharlaridan birida saroy bor edi. Saroyning oltin gumbazlari quyoshda yaltirar, bulbul esa bog'da soatlab sayrardi. Ammo saroyda hech kim kulmasdi. Podsho har kecha bir qiz bilan nikohlanar, tong otganda esa uni jo'natib yuborardi.`,
        `Navbat Shaxerezodaga keldi. U otasining oldiga borib: «Men boraman», dedi. Otasi yig'ladi, lekin qizining qaroriga qarshi turmadi. U o'zining oxirgi kechasini hikoya bilan to'ldirishga qaror qildi.`
      ]},
      { title: "Birinchi hikoya", text: [
        `Shaxerezoda podsho oldida o'tirib, ertak boshladi. U savdogar va uning uch o'g'li haqida gapirdi. Hikoya shunday qiziq ediki, podsho uxlab qolmadi. U: «Keyin nima bo'ldi?» deb so'radi. Qiz: «Ertaga aytib beraman», dedi.`,
        `Shunday qilib bir kecha o'tdi. Tong otganda podsho uni jo'natmadi. U ikkinchi kechani ham kutdi. Shaxerezoda har oqshom yangi ertak boshlar, eng qiziq joyida to'xtardi. U vaqt sotib olayotgandi.`
      ]},
      { title: "Ko'z yoshi va kula", text: [
        `Ertaklar ichida qirolicha va g'ulomning hikoyasi bor edi. Unda adolat, sabr va xiyonat haqida so'z borardi. Podsho ba'zida kuldi, ba'zida ko'zi namlandi. U birinchi marta ertakning ichida o'zini ko'rdi.`,
        `Shaxerezoda ertak aytar ekan, o'zining ham haqiqiy hikoyasini yashirib turardi. U podshoning yuragiga yo'l topishga harakat qilardi. Har kecha u bir oz yaqinlashardi. Bu yo'l ming kechaga cho'zildi.`
      ]},
      { title: "Oxirgi kecha", text: [
        `Ming birinchi kecha keldi. Shaxerezoda oxirgi ertagini tugatdi. Podsho o'rnidan turib: «Men endi hech kimni jo'natmayman», dedi. U saroyda birinchi marta chiroq yoqishni buyurdi. Butun shahar yoridi.`,
        `U Shaxerezodaga: «Sen menga ertak emas, hayotni o'rgatding», dedi. Ular birga yashadilar. Bog'dagi bulbul endi har tong sayrardi. Saroyda nihoyat kulgilar eshitila boshladi.`
      ]},
      { title: "Ertak ichidagi ertak", text: [
        `Yillar o'tdi. Shaxerezodaning ertaklari xalq orasiga tarqaldi. Ular har bir uyda, har bir choyxonada aytiladigan bo'ldi. Bolalar ularni eshitib uxlar, kattalari esa ertakdan o'ziga saboq olar edi.`,
        `Eng katta saboq shu edi: so'z odamni o'zgartira oladi. Bir kecha, bir hikoya, bir sabr — va butun saroy o'zgaradi. Shuning uchun ertaklar hech qachon tugamaydi; ular har yangi tinglovchi bilan qaytadan boshlanadi.`
      ]}
    ]
  },
  {
    id: 'tom-soyer', title: "Tom Soyerning sarguzashtlari", author: 'Mark Tven', genre: 'sarguzasht', label: 'SARGUZASHT', year: 1876, rating: 4.7, cover: 'covers/tom-soyer.svg',
    chapters: [
      { title: "Oq devor", text: [
        `Bir shanba kuni Tom Soyer hovlidagi devorni oqlashi kerak edi. U cho'tkani olib, bir necha urish qildi va to'xtadi. Devor uzun, quyosh issiq, u esa o'ynashni xohlardi. Bu paytda uning do'sti Ben kelib o'tdi.`,
        `Tom unga: «Bu ishni qilish san'at, hamma ham uddalay olmaydi», dedi. Ben qiziqib ketdi. Bir oz vaqt o'tib, Ben devorni oqlab bo'lgandi. Tom esa soyada o'tirib, uning ishini tomosha qildi. U kichik hiyla bilan katta ish qildirgandi.`
      ]},
      { title: "Daryo bo'yida", text: [
        `Daryo bo'yidagi o'rmon Tom uchun eng sevimli joy edi. U u yerda Bekki bilan uchrashardi. Ular sal qurib, suvda suzishni orzu qilishardi. Bir kuni ular kichik qayiq topib, uni sinalab ko'rishga qaror qildilar.`,
        `Qayiq ularni oqim olib ketdi. Ikkalasi ham qo'rqdi, lekin qirg'oqqa yetib keldilar. Tom: «Biz sarguzasht qildik», dedi. Bekki kuldi. Ularga katta dunyo juda yaqin, lekin juda sirli tuyulardi.`
      ]},
      { title: "G'or", text: [
        `Bir kuni ular tog'dagi katta g'orga borishdi. G'or ichi qorong'u, devorlari esa nam edi. Tom sham yoqdi. Ular yuraverib, yo'lni topa olmay qoldilar. Bekki yig'lamoqchi bo'ldi, lekin Tom uning qo'lini tutdi.`,
        `U g'or devoriga belgi qo'ya-qo'ya yurdi. Bir payt u uzoqdan yorug'lik ko'rdi. Bu chiqish joyi edi. Ular chiqqach, osmonni ko'rib, chuqur nafas oldilar. Tom: «Endi hech narsadan qo'rqmayman», dedi.`
      ]},
      { title: "Xazina", text: [
        `G'orda yurganida Tom bir eski sandiq ko'rdi. Uning ichida tangalar, eski soat va bir necha qog'oz bor edi. U xazina topganiga ishondi. Qog'ozlarni o'qib, ularning eski xaritaga o'xshashligini payqadi.`,
        `U do'sti Xak bilan xaritani o'rganib chiqdi. Ular xaritadagi belgilarga amal qilib, yana g'orga qaytdilar. Bu safar ular ehtiyotkor edilar. Tom bilardi: haqiqiy xazina pul emas, topish jarayonining o'zi.`
      ]},
      { title: "Katta qaror", text: [
        `Shaharga qaytgach, Tom ko'p o'zgargandek his qildi. U devorni oqlash shart emasligini, lekin vaqtni to'g'ri ishlatish kerakligini bilardi. U endi kichik hiylalardan voz kechishga qaror qildi.`,
        `O'sha oqshom u xaritani stol ustiga qo'ydi va Bekkaga qaradi: «Keyingi safar qayer boramiz?» dedi. Bekki jilmaydi. Ular oldilarida butun dunyo bor edi. Tom shuni tushundi va katta nafas oldi.`
      ]}
    ]
  },
  {
    id: 'xaklberri', title: "Xaklberri Fin sarguzashtlari", author: 'Mark Tven', genre: 'sarguzasht', label: 'SARGUZASHT', year: 1884, rating: 4.6, cover: 'covers/xaklberri.svg',
    chapters: [
      { title: "Daryo boshlanishi", text: [
        `Xak kambag'al, lekin ozod bola edi. U shaharchada yashab, kattalar qoidasiga ko'nikmagan edi. Bir kuni u o'zini kichik sal ustida topdi. Daryo uni pastga olib borayotgandi. U qo'rqmadi, aksincha, xursand bo'ldi.`,
        `Saldagi yana bir bola Jim bo'lib, u ham uydan qochgandi. Ikkalasi daryo bo'yida yashashga qaror qildilar. Ular baliq ovlar, non topishar, kechqurun yulduzlarga qarar edilar. Erkinlik ularga shirin tuyulardi.`
      ]},
      { title: "Tun va shamol", text: [
        `Bir kecha shamol kuchayib, daryo to'lqinlandi. Salni ushlab turish qiyinlashdi. Xak hampered bilan eshkak olib, uni qirg'oqqa yaqinlashtirdi. Jim esa suv sepish bilan banda edi. Ular ho'l bo'lib, kulishdi.`,
        `Tong otganda ular quruq joy topdilar. Xak olov yoqdi, Jim esa baliq pishirdi. Ular hech qachon bunday non yemagandek his qildilar. Chunki uni o'zlari topgandi. Daryo ularga uy bo'lib qolayotgandi.`
      ]},
      { title: "Katta shahar", text: [
        `Bir kuni ular katta shaharga yetib keldilar. Ko'cha chiroqlari, do'kon derazalari, olomon ularni hayratga soldi. Jim: «Bu yer odamlar bilan to'la», dedi. Xak esa: «Lekin ularning hammasi yolg'iz», deb javob berdi.`,
        `Ular shaharda bir necha kun yurdilar. Ko'p narsa ko'rdilar, lekin daryoni sog'indilar. Xak har oqshom suv shovqinini eshitgusi kelardi. U tushundi: erkinlik shaharda emas, o'z kichik salida ekan.`
      ]},
      { title: "Qaror", text: [
        `Jim tunda uzoqqa keta boshladi. Xak uni kutib o'tirdi. U bilardi: do'sti o'z yo'lini tanlayotgandi. Ertalab Jim qaytdi va: «Men ketaman», dedi. Xak unga qaradi, keyin bosh irg'adi.`,
        `Ular bir-biri bilan xayrlashdilar. Xak yana salga o'tirdi. Daryo avvalgidek oqardi. U endi yolg'iz edi, lekin qo'rqmasdi. Uning yonida Tajriba bor edi.`
      ]},
      { title: "Daryo davom etadi", text: [
        `Xak kunlarni suv ustida o'tkazdi. U har bir qirg'oqni, har bir daraxtni tanidi. Ba'zan u shaharchaga qaytib kelar, lekin u yerda uzoq turmasdi. Uning uyi endi daryo edi.`,
        `U bir kuni qog'oz oldi va o'z sarguzashtlarini yozishni boshladi. Birinchi jumla shunday edi: «Men daryoda yashaganman va u menga hamma narsani o'rgatgan». U qalamni qo'yib, yana suvga qaradi. Daryo davom etardi.`
      ]}
    ]
  },
  {
    id: 'otmish', title: "O\'tmish sari sayohat", author: 'Tarixchi sayyoh', genre: 'tarix', label: 'TARIX', year: 2021, rating: 4.5, cover: 'covers/otmish.svg',
    chapters: [
      { title: "Qadimgi darvoza", text: [
        `Sayyoh cho'l orasidagi eski darvozaga yetib keldi. Darvozaning yarmi qumga ko'milgandi, lekin uning ustidagi naqshlar hali ham ko'rinib turardi. U qo'lini toshga tegizdi. Tosh issiq edi.`,
        `U yonidagi daftarga bir necha satr yozdi: «Bu yer odamlar yuzlab yillar oldin o'tishgan. Ular ham quyosh ostida yurgan, ham suv izlagan». U darvozadan o'tib, ichkariga kirdi.`
      ]},
      { title: "Karvon izi", text: [
        `Ichkarida tor yo'l bor edi. Yo'l bo'yida eski quduq qoldiqlari yotardi. Sayyoh uning ichiga qaradi. Quduq quruq edi, lekin uning devorlaridagi izlar suv bir vaqtlar bu yerga kelganini ko'rsatardi.`,
        `U karvon o'tgan yo'lni topdi. Toshlarga tushgan izlar uni oldiga boshlardi. U o'zining ham shu izga qo'shilayotganini his qildi. Tarix — bu faqat kitobdagi sana emas, u yerda qolgan kichik izlar.`
      ]},
      { title: "Shahar xarobasi", text: [
        `Bir necha soat yurgach, u xaroba shaharga chiqdi. Uylarning devorlari turar, lekin tom yo'q edi. Hovlilarda daraxt o'rnida quruq shoxlar qolgan. Sayyoh bir uyning o'rtasiga o'tirib, atrofga qaradi.`,
        `U tasavvur qildi: bu yerda bir vaqtlar oila yashagan, bola yugurib o'ynagan, onasi non yoqqan. U bu tasavvurni daftarga yozdi. U tarixni manbalardan emas, his bilan o'qiyotgandi.`
      ]},
      { title: "Topilma", text: [
        `Bir xonada u kichik sopol idish topdi. Idishning ustida g'alati naqsh bor edi. U uni olib, quyoshga tutti. Naqsh ichida quyosh va suv belgisi borligini ko'rdi. Bu odamlarning hayotga munosabatini bildirardi.`,
        `Sayyoh idishni joyiga qo'ydi. U uni olib ketishga haqqi yo'q edi. U faqat chizib oldi va daftarga yozdi: «Ba'zi narsalarni topish uchun ularni qoldirish kerak». U qalamini yopdi.`
      ]},
      { title: "Qaytish", text: [
        `Oqshom u darvozaga qaytdi. Quyosh botayotganda darvozaning soyasi uzayib, yo'lni ko'rsatardi. U orqasiga qaradi. Xaroba shahar jim edi, lekin u jimlik emas, xotira edi.`,
        `U shaharga qaytib, daftarini stol ustiga qo'ydi. Yozganlarini qayta o'qidi. U bilardi: o'tmish sari sayohat — bu orqaga qarash emas, bugunni yaxshiroq tushunish. U keyingi safarga tayyorlanishni boshladi.`
      ]}
    ]
  },
  {
    id: 'don-kixot', title: "Don Kixot", author: 'Migel de Servantes', genre: 'roman', label: 'JAHON KLASSIKASI', year: 1605, rating: 4.7, cover: 'covers/don-kixot.svg',
    chapters: [
      { title: "Kitoblar xonasida", text: [
        `Bir paytlar Ispaniyada yashovchi bir odam ritsarlik haqidagi kitoblarni o'qishga berilib ketdi. U kunduzi ham, kechasi ham kitob o'qirdi. Oxir-oqibat u o'qiganlarining hammasi haqiqat deb ishona boshladi.`,
        `U o'ziga ot, qurol va dubulg'a topdi. Oti Roksinante deb ataldi. U yana bir qo'shni dehqonni o'ziga yordamchi qilib oldi. Ular yo'lga chiqishga tayyor edilar. Don Kixot endi o'zini haqiqiy ritsar deb hisoblardi.`
      ]},
      { title: "Birinchi yurish", text: [
        `Ular yo'lda bir mehmonxonaga to'xtadilar. Don Kixot uni qal'a deb o'yladi. Mehmonxonachi esa uning gapiga kulib qo'ydi. Don Kixot jahllanib, bir necha kishi bilan tortishdi. Oxirida u yarador bo'lib, uyga qaytdi.`,
        `Qo'shnisi unga: «Bu faqat mehmonxona edi», dedi. Don Kixot esa: «Men hali o'z ishini boshlamadim», deb javob berdi. U mag'lubiyatni tan olmadi. Uning orzusi undan kuchliroq edi.`
      ]},
      { title: "Shamol tegirmoni", text: [
        `Ikkinchi yurishda ular katta shamol tegirmonlarini ko'rdilar. Don Kixot ularni yovuz dev deb o'yladi. U otini oldinga surib, nayzasi bilan hujum qildi. Shamol qanoti aylanib, uni yiqitib yubordi.`,
        `U yerdan turib: «Bu dev o'zini shamolga aylantirdi», dedi. U do'sti Sancho Pançaga qaradi. Sancho hech narsa demadi, faqat boshini chayqadi. U o'z xo'jayinining dunyosini tushunishga harakat qilardi.`
      ]},
      { title: "Sancho oroli", text: [
        `Sancho Pança doim och va charchoq edi, lekin u xo'jayiniga sodiq qoldi. Bir kuni Don Kixot unga: «Men senga bir orol beraman», deb va'da qildi. Sancho bu gapga ishondi. U o'zini kelajakda hokim deb tasavvur qila boshladi.`,
        `Ular bir shaharchaga yetib keldilar. U yerda odamlar ularni tanib, hazil qilishdi. Sanchoni hokim qilib o'tirishdi. U bir necha kun adolatli hukm chiqardi va keyin: «Men uyga qaytaman», dedi. Hokimlik unga tez yoqdi, lekin u oilasini sog'inddi.`
      ]},
      { title: "Uyga qaytish", text: [
        `Oxirida Don Kixot jiddiy kasal bo'ldi. U yotog'ida uzoq vaqt yotgach, bir kuni ko'zini ochdi va: «Men endi o'zimni tanidim», dedi. U kitoblarining yomon ta'sirini tushundi. Uning haqiqiy ismi Alonso Kixano edi.`,
        `Sancho uning yonida o'tirar, yig'lamasdi, lekin jim edi. Don Kixot vafot etgach, u uzoq vaqt deraza oldida turdi. U o'z xo'jayinining orzularini, shamol tegirmonlarini va berilgan va'dalarni esladi. U bilardi: dunyo ularsiz ham, ular bilan ham g'alati edi.`
      ]}
    ]
  }
];
