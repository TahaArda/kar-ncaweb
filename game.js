const karincaTesti = {

testName:"Karınca Bilgi Testi",

questions: [ 

  { id:0,
    soru: "Karıncalar kaç bacaklıdır?",

seçenekler: ["6", "4", "8", "10"],

doğru: "6",

  karakter:["A", "B", "C", "D"]

},

{ id:1,

soru: "Karıncalar hangi hayvan grubuna aittir?",

seçenekler: ["Böcekler", "Sürüngenler", "Memeliler", "Omurgasızlar"],

doğru: "Böcekler",

karakter:["A", "B", "C", "D"]

},

{
id:2,
  soru: "Dünyada kaç farklı karınca türü vardır?",

seçenekler: ["1000", "5000", "12000", "20000"],

doğru: "12000",

karakter:["A", "B", "C", "D"]

},

{ id:3,

soru: "Karıncalar en çok hangi duyu organını kullanır?",

seçenekler: ["Antenler", "Gözler", "Ayaklar", "Kanatlar"],

doğru: "Antenler",

 karakter:["A", "B", "C", "D"]

},

{ id:4,

  soru: "Karıncalar en fazla hangi kıtada bulunur?",

seçenekler: ["Asya", "Afrika", "Güney Amerika", "Antarktika"],

doğru: "Güney Amerika",

karakter:["A", "B", "C", "D"]

},

 

{
id:5,
soru: "Karıncalar genellikle koloniler halinde yaşar. Peki bir karınca kolonisinde hangi bireyler bulunur?",

seçenekler:

[" Sadece işçi karıncalar", "Kraliçe, işçi ve erkek karıncalar",

"Sadece kraliçe karınca", "Kraliçe ve asker karıncalar"],

  doğru: "Kraliçe, işçi ve erkek karıncalar.",

  karakter:["A", "B", "C", "D"]

},

  { id:6,

soru:"Karıncaların vücut yapısında kaç bölüm bulunur?",

seçenekler: ["2", "3", "4", "5"],

doğru:"3",

  karakter:["A", "B", "C", "D"]  

    },

  { id:7,

soru:"Karıncalar yiyecek bulduklarında kolonilerini nasıl bilgilendirir?",

seçenekler: ["Ses çıkararak", "Kanatlarını çırparak", "Fermon salgılayarak",  "Ayaklarıyla yere vurup"],

doğru:"Fermon salgılayarak",

     karakter:["A", "B", "C", "D"]  

  }

] 

};



// Sonuç mesajları

// Sonuçları hesaplayan fonksiyon

function calculateResult(score, testType) {

  let resultMessage = "";

  if (testType === 'karincaTesti') {

    const totalQuestions = karincaTesti.questions.length;

if (score === totalQuestions) {

      resultMessage = "Mükemmel! Tüm soruları doğru yanıtladınız!";

    } else if (score >= 6) {

      resultMessage = "Harika! Karıncalar hakkında oldukça bilginiz var!";

    } else if (score >= 4) {

      resultMessage = "İyi Gidiyorsunuz! Temel bilgilere sahipsiniz.";

    } else {

      resultMessage = "Başlangıç Seviyesi! Daha fazla bilgi edinmek için konuyu tekrar gözden geçirin.";

    }

} else if (testType === 'test1') {

    const totalQuestions = test1.length;

    if (score === totalQuestions) {

      resultMessage = "Mükemmel!";

    } else {

      resultMessage = "Biraz daha çalışmalısınız!";

    }

  }

  return resultMessage;

}

// Start Quiz Fonksiyonu


function startQuiz(testType) {

  let score = 0;

  let questions = [];

// Test tipi belirleniyor ve sorular yükleniyor

  if (testType === 'karincaTesti') {

    questions = karincaTesti.questions;

  } else if (testType === 'test1') {

    questions = test1;

  }

// Soruları dolaşarak cevapları kontrol et

  questions.forEach((question) => {

    const selected = document.querySelector(`input[name="q${question.id}"]:checked`);

    const userAnswer = selected ? selected.value : null;  
  

 // Kullanıcı cevabını al

    if (userAnswer === question.dogru) {

      score++;  // Cevap doğruysa, puan artır

    }

  });
// Sonuç mesajını hesapla

  const resultMessage = calculateResult(score, testType);

  // Sonuç kutusunu göster

  const resultBox = document.getElementById("result-box");

  resultBox.style.display = "block";  // Kutu görünür hale gelsin

  resultBox.innerHTML = resultMessage;  // Sonuç mesajını kutuya ekle

}
// Testi başlatmak için fonksiyonu çağır

startQuiz('karincaTesti');  // Karınca Bilgi Testi başlatma
const karincaTürü = {

testName:"Karınca Türünü Keşfet",

questions: [

{
  id:0,

soru: "Ormanda yiyecek ararken ne yaparsın?",

seçenekler: ["a) Etrafı keşfeder, iyi yolu bulmaya çalışırım.", "b) Hızlıca hareket edip ilk bulduğum şeyi alırım.", 

"c) Başkalarıyla haberleşip en iyi yeri belirlerim.",

"d) Gerekirse rakiplerimle savaşırım."],

karakter:["A", "B", "C", "D"] 

},

{
  id:1,

soru: "Kolonide en çok hangi işi yapmaktan hoşlanırsın?", seçenekler: ["a) Yeni yollar keşfetmek.", "b) Yiyecek toplamak.", "c) Yuvayı inşa etmek.", "d) Kraliçeyi korumak."], karakter:["A", "B", "C", "D"] 

},

{
id:2,
soru: "Düşman bir böcek kolonine saldırıyor, ne yaparsın?", seçenekler: ["a) Strateji geliştirip ekibi yönetirim.", "b) Panik yapmadan kaçabileceğim bir yol ararım.", "c) Koloniye haber verip savunmaya geçerim.", "d) Direkt saldırıya geçerim!"], karakter:["A", "B", "C", "D"] 

},
  {
id:3,
  soru: "En sevdiğin yaşam alanı hangisi ?", seçenekler: ["a) Ormanlık alanlar.", "b) Tropikal bölgeler.", "c) Toprak altı tünelleri.", "d) Sıcak ve kurak çöller."], karakter:["A", "B", "C", "D"] 

},

{
id:4,
soru: "Bir insan şeker bırakıyor, ne yaparsın?",

seçenekler: ["a) Hemen keşfe çıkarım.", "b) İlk ben almak için koşarım.", "c) Arkadaşlarımı çağırırım.", "d) Rakipleri uzaklaştırıp sahiplenirim."], karakter:["A", "B", "C", "D"] 

},

{
 id:5,

  soru: "En büyük korkun ne olurdu?", seçenekler: ["a) Kaybolmak ", "b) Yiyeceksiz kalmak.", "c) Kolonimden kopmak", "d) Düşmanlarla savaşta kaybetmek."], karakter:["A", "B", "C", "D"] 

},

{
id:6,
soru: "Bir karınca olarak en güçlü yanın ne olurdu? ", seçenekler: ["a) Keşif yeteneğim.", "b) Hızım.", "c) Takım çalışması yeteneğim.", "d) Gücüm ve cesaretim."], karakter:["A", "B", "C", "D"] 

},

{ id:7,
  soru: "Yeni bir koloni kurman gerekiyor, ilk işin ne olurdu ?", 

seçenekler: ["a) Çevreyi keşfetmek.", "b) Hızlıca yiyecek stoğu oluşturmak.", "c) Dayanıklı bir yuva inşa etmek.", "d) Savunma sistemleri kurmak."], karakter:["A", "B", "C", "D"] 

}

]

};function startkarincaTürü() {

let aCount = 0;

let bCount = 0;

let cCount = 0;

let dCount = 0;

  // Soruları döngü ile kontrol et

  karincaTürü.questions.forEach((question) => {

    const selected = document.querySelector(`input[name="q${question.id}"]:checked`);

    const userAnswer = selected ? selected.value : null;
       

        if (userAnswer) {

      switch (userAnswer.toUpperCase()) {

        case 'A':

          aCount++;

          break;

        case 'B':

          bCount++;

          break;

        case 'C':

          cCount++;

          break;

        case 'D':

          dCount++;

          break;

        default:

          alert("Geçersiz cevap!");

          break;

      }

    }

  });
          
// Sonuçları göster

  showkarincaTürüResult(aCount, bCount, cCount, dCount);
  }

function showkarincaTürüResult(aCount, bCount, cCount, dCount) {

  let maxCount = Math.max(aCount, bCount, cCount, dCount);

  let resultMessage = "";

  if (maxCount === aCount) {

    resultMessage = "Sen bir Kaşif Karıncasın! Sürekli yeni yollar keşfetmek ve koloninin ilerlemesini sağlamak senin işin."; 

  } else if (maxCount === bCount) {

    resultMessage = "Sen bir İşçi Karıncasın! En hızlı ve pratik çözümleri bulur, koloninin beslenmesini sağlarsın."; 

  } else if (maxCount === cCount) { 

    resultMessage = "Sen bir İletişimci Karıncasın! Koloni içindeki haberleşmeyi yönetir, ekip çalışmasını en iyi şekilde yaparsın."; 

  } else if (maxCount === dCount) { 

    resultMessage = "Sen bir Savaşçı Karıncasın! Cesur, güçlü ve kararlı bir lidersin, kolonini her türlü tehlikeye karşı korursun."; 

  }

  // Sonuç mesajını HTML'de bir elemana ekle

  const resultBox = document.getElementById('result-box');

  if (resultBox) {

    resultBox.style.display = "block";  // Kutu görünür hale gelsin

    resultBox.innerHTML = resultMessage;  // Sonuç mesajını kutuya ekle

  } else {

    console.error('Result box bulunamadı!');

  }

}

startkarincaTürü();

const karincaTanima = {

testName:"Karınca Türü Tanıma ",

questions: [

{ id:0,
  soru: "Hangi karınca türü yaprakları keserek mantar yetiştirir?", seçenekler: ["a) Ateş Karıncası ", "b) Kesik Yaprak Karıncası", "c) Asker Karınca ", "d) Şeker Karıncası"], doğru: "b", karakter:["A", "B", "C", "D"] 

},

{ id:1,

soru: "Ağaçlarda yuva yapan karınca türü hangisidir?",

seçenekler: ["a) Kesik yapraklı karınca", "b) Dokumacı karınca", "c) Ateş karıncası", "d) Çöl karıncası"], doğru: "b", 

karakter:["A", "B", "C", "D"]

  },

{ id:2,

soru: "Hangi karınca türü güçlü zehiriyle bilinir ve saldırganlığıyla tanınır?", seçenekler: ["a) Marangoz Karınca", "b) Ateş Karıncası", "c) Arjantin Karıncası", "d) Çılgın Karınca"], doğru: "b", 

karakter:["A", "B", "C", "D"]

},

{ id:3,

  soru: "Asya'da devasa koloniler kuran ve insan ısırıklarıyla bilinen karınca türü hangisidir?", seçenekler: ["a) Weaver(Dokumacı) Karınca", "b) Süper Karınca", "c)Asker Karınca", "d) Siyah Bahçe Karıncası"], doğru: "c", karakter:["A", "B", "C", "D"] 

},

{ id:4,
  soru: "Hangi karınca türü tahtaları ve ahşap yapıları kemirerek zarar verebilir?", seçenekler: ["a)Marangoz karıncalar", "b)Elektrik Karıncası", "c) Kesik Yaprak Karıncası", "d) Kırmızı Orman Karıncası"], doğru: "a", karakter:["A", "B", "C", "D"] 

},

  { id:5,
    soru: "Su üzerinde hareket edebilen ve adeta yüzebilen karınca türü hangisidir?", seçenekler: ["a) Elektrik Karıncası", "b) Çılgın Karınca", "c) Pirana Karıncası", "d) Weaver(dokumacı) Karınca"], doğru: "b", karakter:["A", "B", "C", "D"] 

},

{
id:6,
soru: "Dünyanın en büyük kolonilerini kurabilen ve kıtalara yayılabilen istilacı karınca türü nedir?", seçenekler: ["a) Arjantin Karıncası", "b) Kırmızı Orman Karıncası", "c) Çöl Karıncası", "d) Kanatlı Karınca "], doğru: "a", karakter:["A", "B", "C", "D"] 

},

{
id:7,
  soru: "Hangi karınca türü yuvasına ağaç yapraklarını birbirine dikerek yapar?",

seçenekler: ["a)Weaver(dokumacı)", "b) Çöl Karıncası", "c) Şeker Karıncası", "d) Asker Karınca "], doğru: "a", 

karakter:["A", "B", "C", "D"]

}

]

};
// Sonuç mesajları

function calculateResult(score, testType) {

  let resultMessage = "";

  if (testType === 'karincaTanima') {

    const totalQuestions = karincaTanima.questions.length;

   if (score === totalQuestions) {

      resultMessage = "Mükemmel! Sen tam bir karınca uzmanısın!";

    } else if (score >= 6) {

      resultMessage = "Harika! Karıncalar hakkında gerçekten iyi bir bilgiye sahipsin.";

    } else if (score >= 4) {

      resultMessage = "Fena değil! Karıncalar hakkında temel bilgilere sahipsin.";

    } else {

      resultMessage = "Karıncalar hakkında pek bilgin yok gibi. Biraz daha araştırmaya ne dersin?";

    }

  }

  return resultMessage;

}

function startQuiz(testType) {

  let score = 0;

  let questions = [];

if (testType === 'karincaTanima') {

    questions = karincaTanima.questions;

  } else if (testType === 'test1') {

    questions = test1;

  }

// Her soruyu kontrol et

  questions.forEach((question) => {

    const selected = document.querySelector(`input[name="q${question.id}"]:checked`);

    const userAnswer = selected ? selected.value : null;

    if (userAnswer === question.dogru) {

      score++;

    }

  });
  

  

const resultMessage = calculateResult(score, testType);

  const resultBox = document.getElementById("result-box");

  if (resultBox) {

    resultBox.innerHTML = resultMessage;

    resultBox.style.display = "block";

} else {

    console.error("Sonuç kutusu bulunamadı. Lütfen HTML'de 'result-box' ID'li bir div ekle.");

  }


  
startQuiz('karincaTanima'); // Karınca Tanıma Testi başlatma

  const karincakrallik = {

testName:"Karınca krallığını Yönet",

questions: [

{
id:0,
soru: "Karınca Krallığı'nda büyük bir sel felaketi yaklaşıyor. Ne yaparsın?",

seçenekler: [ "Yüksek yerlere acil tahliye emri veririm.", "Kraliçeyi korumaya odaklanırım.", "Savaş hazırlıkları yaparım.", "Koloninin içinden kimseyi dışarı çıkarmam." ], 

doğru: "Yüksek yerlere acil tahlie veririm",

karakter:["A", "B", "C", "D"] }, { id:1,

soru: "Düşman bir koloni gizlice topraklarınıza girdi! Ne yaparsın?",

seçenekler: [ "Casusları gönderip düşmanın planlarını öğrenirim.", "Hızlıca saldırırım.", "Düşmanla müzakere ederim.", "Tüm koloniye alarm verir, savunma hazırlıklarına başlarım." ], 

doğru: "Casusları gönderip düşmanın planlarını öğrenirim.",

karakter:["A", "B", "C", "D"] }, 

{
id:2,
soru: "Krallıktaki işçiler grev yapıp çalışmayı bıraktı! Ne yaparsın?", 

seçenekler: [ "Onları dinleyip sorunlarını çözmeye çalışırım.", "Zorluklarla mücadele etmelerini söylerim.", "Grev yapanları cezalandırırım.", "Diğer işçilere onları ikna etmelerini söylerim." ], 

doğru: "Onları dinleyip sorunlarını çözmeye çalışırım.",

karakter:["A", "B", "C", "D"]

}, { id:3,
  soru: "Kış yaklaşıyor ve yiyecekler azalıyor. Ne yaparsın?", seçenekler: [ "Tüm koloniyi daha fazla yiyecek toplamaya teşvik ederim.", "Yiyecekleri eşit şekilde paylaştırırım.", "Yiyecekleri yalnızca kraliçeye ayırırım.", "Bir plan yapar ve kışı atlatmak için daha fazla yiyecek ararım." ], 

    doğru: "Tüm koloniyi daha fazla yiyecek toplamaya teşvik ederim.",

karakter:["A", "B", "C", "D"] }, { id:4, soru: "Bir gün, dev bir insan elini uzatıp seni alıyor! Ne yaparsın?", seçenekler: [ "Beni bırakması için karınca asidini kullanırım.", "Isırırım, böylece beni bırakır.", "Sakinleşir ve insanla iletişim kurmaya çalışırım.", "Kendimi savunmadan bırakırım." ], 

doğru: "Isırırım, böylece beni bırakır.",
                        karakter:["A", "B", "C", "D"] }, { id:5, soru: "Düşman koloniden sürgün edilmiş bir karınca krallığına sığınmak istiyor. Ne yaparsın?", seçenekler: [ "Onu dinler, güvenilir olup olmadığını test ederim.", "Onu kabul ederim, çünkü krallığımıza faydalı olabilir.", "Onu kabul etmem, çünkü tehlikeli olabilir.", "Güvenlik için dışarıda bırakırım." ], 

doğru: "Onu dinler, güvenilir olup olmadığını test ederim.",

karakter:["A", "B", "C", "D"] 

},

{
id:6,
soru: "Yeni bir koloni kurmak için yola çıkıyorsun. İlk işin ne olur?", seçenekler: [ "Güvenli bir yuva kazmak.", "Hızla yiyecek toplamak.", "Diğer karıncalarla ittifak kurmak.", "İlk olarak tehditleri analiz etmek." ], 

doğru: "Güvenli bir yuva kazmak.",

karakter:["A", "B", "C", "D"] }, { id:7, soru: "Bir gün ansızın, karınca krallığının yanında bir çekirge sürüsü beliriyor! Ne yaparsın?",

seçenekler: [ "Saldırmadan önce casusları gönderip niyetlerini öğrenirim.", "Hızla saldırır ve çekirgeleri uzaklaştırırım.", "Bütün koloni olarak kaçmaya başlarız.", "Sadece kraliçeyi korumaya odaklanırım." ], 

doğru: "Saldırmadan önce casusları gönderip niyetlerini öğrenirim.",

karakter:["A", "B", "C", "D"] }, { id:8,

soru: "Krallıkta yeni bir kural koyma hakkın var. Ne yaparsın?",

seçenekler: [

"Herkes şeker stoğuna katkıda bulunmalı!",

"Sadece belirli bir grup şeker tüketmeli.", "Şeker, sadece kraliçeye ait olmalı.", "Yiyecek paylaşımı serbest olmalı." 

],

doğru: "Herkes şeker stoğuna katkıda bulunmalı!",

karakter:["A", "B", "C", "D"] 

},

{
id:9,
  soru: "Kraliçe aniden hastalanıyor! Ne yaparsın?", seçenekler: [ "En bilgili karıncalardan tıbbi destek isterim.", "Kraliçeyi başka bir kraliçe ile değiştirmeyi öneririm.", "Kendi başıma bir çözüm ararım.", "Kraliçenin iyileşmesi için dua ederim." ], 

doğru: "En bilgili karıncalardan tıbbi destek isterim.",

karakter:["A", "B", "C", "D"] 

}

]

};

// Test fonksiyonları 

function startkarincakrallik() {

let aCount = 0;

let bCount = 0;

let cCount = 0;

let dCount = 0;

// Soruları döngüyle kontrol et

  karincakrallik.questions.forEach((question, index) => {

    // Kullanıcı cevabını seçtiği input elemanını bul

    const selected = document.querySelector(`input[name="q${question.id}"]:checked`);

    const userAnswer = selected ? selected.value : null;
  // Cevap seçildiyse, sayacı artır

    if (userAnswer) {

      switch (userAnswer.toUpperCase()) {

        case 'A': aCount++; break;

        case 'B': bCount++; break;

        case 'C': cCount++; break;

        case 'D': dCount++; break;

        default: 

          alert("Geçersiz cevap!"); 

          break;

      }

    }

  });

// Sonuçları göster

  showkarincakrallikResult(aCount, bCount, cCount, dCount);

}

function showkarincakrallikResult(aCount, bCount, cCount, dCount) {

  let maxCount = Math.max(aCount, bCount, cCount, dCount);

  let resultMessage = "";

// En yüksek sayıyı bul ve ona göre sonuç mesajını oluştur

  if (maxCount === aCount) {

    resultMessage = "Karınca Krallığı'nın lideri olarak oldukça dikkatli ve planlısınız. Kararlarınıza odaklanmış ve stratejik bir yaklaşıma sahipsiniz.";

} else if (maxCount === bCount) {

resultMessage = "Krallıkta güçlü bir savunma stratejisine sahipsiniz. Koloniye liderlik ederken genellikle daha hızlı ve cesur hareket ediyorsunuz."; 
} else if (maxCount === cCount) { 
  
resultMessage = "Bir lider olarak daha pratik ve doğrudan çözümler tercih ediyorsunuz. Krallığınızı hızlıca yönetmeye eğilimlisiniz."; 

} else if (maxCount === dCount) {

resultMessage = "Koloniyi korumaya odaklanıyorsunuz. Kraliçe ve koloninin güvenliği her şeyden önce geliyor."; 

}

// Sonuçları göster

  const resultBox = document.getElementById("result-box");

  resultBox.style.display = "block";  // Kutu görünür hale gelsin

  resultBox.innerHTML = resultMessage;  // Sonuç mesajını kutuya ekle

}

// Bu fonksiyonun çağrılmasını sağlayın

startkarincakrallik();

const karincakoloni = {

testName:"Karınca Koloni",

questions: [

{
id:0,
soru: "Nasıl bir yaşam tarzı seni daha çok cezbeder?",

seçenekler: ["Sürekli bir şeyler inşa edip düzenlemek", "Keşif yapıp yeni yerler keşfetmek", "Grup halinde hareket edip güçlü hissetmek", "Düşmanlarla savaşmak ve rekabet etmek"], 

karakter:["A", "B", "C", "D"]

},

{
id:1,
  soru: "Bir grubun içindeyken hangi rolü üstlenmeyi tercih edersin?", seçenekler: ["Plan yapan ve işleri yönlendiren", "Risk alan ve yeni yollar keşfeden", "Takımı güçlendiren ve destekleyen", "Savunmayı üstlenen ve düşmanları püskürten"], karakter:["A", "B", "C", "D"] 

},

{
id:2,
soru: "Hangi ortamda yaşamak isterdin?",          seçenekler: ["Orman içinde büyük bir yapı", "Ağaçların tepesinde güvenli bir yuva", "Çölde sert şartlara uyum sağlamış bir koloni", "Sıcak ve nemli topraklarda büyük bir yeraltı ağı"], karakter:["A", "B", "C", "D"] 

},

{
id:3,
soru: "Bir saldırı olduğunda ne yaparsın?", seçenekler: ["Koloniyi organize edip savunmayı güçlendiririm", "Farklı bir kaçış rotası ararım", "Takımımı bir arada tutmaya çalışırım", "Ön saflarda savaşırım"], karakter:["A", "B", "C", "D"] 

},

{
id:4,
soru: "Ne tür bir beslenme alışkanlığın var?", 

seçenekler: ["Yaprak ve bitki parçalarını toplamak hoşuma gider", "Tatlı yiyecekler ve şeker içeren şeyler ilgimi çeker", "Farklı türde yiyecekleri toplamayı severim", "Etçil bir beslenme bana daha uygun"],

karakter:["A", "B", "C", "D"] 

},

{
id:5,
soru: "Koloninin en büyük gücü ne olmalı?",

seçenekler: ["Mükemmel organizasyon ve disiplin", "Keşif yetenekleri ve hız", "Birlik ve dayanışma", "Güçlü savaşçılar"], karakter:["A", "B", "C", "D"] 

}

]

};

// Test fonksiyonları

function startkarincakoloni() {

  console.log("karincakolonisi başlatıldı!");

  let aCount = 0;

  let bCount = 0;

  let cCount = 0;

  let dCount = 0;

karincakoloni.questions.forEach((question) => {

    const selected = document.querySelector(`input[name="q${question.id}"]:checked`);

    const userAnswer = selected ? selected.value : null;

  if (userAnswer) {

      switch (userAnswer.toUpperCase()) {

        case 'A': aCount++; break;

        case 'B': bCount++; break;

        case 'C': cCount++; break;

        case 'D': dCount++; break;

        default: alert("Geçersiz cevap!"); break;

      }

    }

  });
showkarincakoloniResult(aCount, bCount, cCount, dCount);

}

function showkarincakoloniResult(aCount, bCount, cCount, dCount) {

  let maxCount = Math.max(aCount, bCount, cCount, dCount);

  let resultMessage = "";

if (maxCount === aCount) {

resultMessage = "En çok A şıkkını seçtiniz! Karıncaların yaşam alanları hakkında bilgili birisin!"; 

} else if (maxCount === bCount) {

resultMessage = "En çok B şıkkını seçtiniz! Karıncaların sınıflandırılması hakkında oldukça bilgilisiniz!"; 

} else if (maxCount === cCount) {

resultMessage = "En çok C şıkkını seçtiniz! Karıncaların davranışları konusunda ilginç fikirleriniz var!"; 

} else if (maxCount === dCount) { 

  resultMessage = "En çok D şıkkını seçtiniz! Karıncaların evrimsel tarihi konusunda harika bir anlayışa sahipsiniz!"; 

}

const resultBox = document.getElementById("result-box");

  if (resultBox) {

    resultBox.style.display = "block";

    resultBox.innerHTML = resultMessage;

  } else {

    console.warn("result-box bulunamadı. HTML'ye eklemeyi unutma.");

  }

}

startkarincakoloni();
let currentTestQuestions = null; // Değişkeni tanımlayın
let isBilgiTesti = false;

let testType = '';
let correctAnswers = 0;

let totalQuestions = 0;

// Tüm testler tanımlandıktan sonra:

function startkarincaTestiTest() {

  testType = 'karincaTesti';

  isBilgiTesti = true;

  currentTestQuestions = karincaTesti.questions;

  displayQuestions(currentTestQuestions);

}

function startkarincaTürüTest() {

  testType = 'karincaTürü';

  isBilgiTesti = false;

  currentTestQuestions = karincaTürü.questions;

  displayQuestions(currentTestQuestions);

}

function startkarincaTanimaTest() {

  testType = 'karincaTanima';

  isBilgiTesti = true;

  currentTestQuestions = karincaTanima.questions;

  displayQuestions(currentTestQuestions);

}
function startkarincakrallikTest() {

  testType = 'karincakrallik';

  isBilgiTesti = false;

  currentTestQuestions = karincakrallik.questions;

  displayQuestions(currentTestQuestions);

}
function startkarincakoloniTest() {

  testType = 'karincakoloni';

  isBilgiTesti = false;

  currentTestQuestions = karincakoloni.questions;

  displayQuestions(currentTestQuestions);
}



document.addEventListener('DOMContentLoaded', function () {

  const buttons = document.querySelectorAll('.start-btn');

  

  buttons.forEach(button => {

    button.addEventListener('click', function () {

      testType = this.getAttribute('data-test'); // const kaldırıldı

      const questions = getQuestionsByType(testType);

      if (questions) {
currentTestQuestions = questions;
        // Butonları gizle

        document.querySelector('.quiz-container').style.display = 'none';

        // Test ekranını göster

        document.getElementById('quiz-screen').style.display = 'block';

        // Soruları ekle

        displayQuestions(testType, questions);

      } else {

        console.error('Geçersiz test türü:', testType);
console.log("Butona tıklanan test tipi:", testType);

console.log("Test için gelen sorular:", questions);
      }

    });

  });

});

// Test Başlatma Fonksiyonu

function startQuiz(testType) {

    document.getElementById("button-container").style.display = "none"; // önce butonları gizle  

// Soruları alın

    const questions = getQuestionsByType(testType);

    if (questions) {

        // Soruları görüntüle

        displayQuestions(testType, questions);

    } else {

        console.error('Geçersiz test türü:', testType);

    }

}

// Testi başlatan butona tıklama olayını dinle

document.getElementById('start-button').addEventListener('click', function() {

    const selectedTestType = document.querySelector('input[name="test-type"]:checked').value;
  
console.log('Seçilen test türü:', selectedTestType); // Bu satırı ekleyin
  
    startQuiz(selectedTestType); // Seçilen test türüne göre başlat

});

function getQuestionsByType(testType) {
console.log('Test Türü:', testType); // Bu satırı ekleyin


  let questions;

  switch (testType) {

    case 'karincaTesti':

      questions = karincaTesti.questions;

      break;

    case 'karincaTürü':

      questions = karincaTürü.questions;

      break;

    case 'karincaTanima':
      questions = karincaTanima.questions;

      break;

    case 'karincakrallik':

      questions = karincakrallik.questions;

      break;

    case 'karincakoloni':

      questions = karincakoloni.questions;

      break;

    default:

      console.error('Geçersiz test tipi:', testType);

      return null; // artık geçerli

  }

  return questions;
}

// Soruları görüntüleme

function displayQuestions(testType, questions) {

  console.log('Display ediliyor:', testType, questions);

let currentTestQuestions = questions;
  const questionContainer = document.getElementById('question-container');

  questionContainer.innerHTML = ''; // Temizle

  questions.forEach((question, index) => {

    const questionElement = document.createElement('div');

    questionElement.classList.add('question');
let optionsHTML = '';

question.seçenekler.forEach((option, i) => {

  optionsHTML += `

    <label>

      <input type="radio" name="q${index}" value="${i}" /> ${option}

    </label><br />

  `;

});

    questionElement.innerHTML = `

  <p>${question.soru}</p>

  ${optionsHTML}

`;

    questionContainer.appendChild(questionElement);

  });

}
function loadTest(testType) {

  const questions = getQuestionsByType(testType);

  if (!questions) {

    console.error('Soru yok!');

    return;

  }

  currentTestQuestions = questions;

  displayQuestions(testType, currentTestQuestions);

}


  // Gönder butonunu göster
console.log(currentTestQuestions);

const submitBtn = document.getElementById('submit-btn');

if (submitBtn) {

  submitBtn.style.display = 'block';

  submitBtn.onclick = function () {

    // Sadece bilgi testleri için evaluateQuiz çalıştır

    if (isBilgiTesti) {

      evaluateQuiz(currentTestQuestions, testType);

    const resultBox = document.getElementById("result-box");

      resultBox.style.display = "block";

      resultBox.innerHTML = `Test tamamlandı! Doğru sayınız: ${correctAnswers} / ${totalQuestions}`;

      } else {

      // Kişilik testleri için ilgili fonksiyonları çağır

      if (testType === 'karincaTürü') {

        startkarincaTürü();

      } else if (testType === 'karincakrallik') {

        startkarincakrallik();

      } else if (testType === 'karincakoloni') {

        startkarincakoloni();

      }

    }

  };
} else {

  console.error('submit-btn ID\'sine sahip bir buton bulunamadı.');

}

//Test sonucu degerlendirme
function evaluateQuiz(questions, testType) {

  console.log("Quiz için gelen sorular:", questions);

  let correctAnswers = 0;

  let totalQuestions = questions.length;
  if (!questions || !Array.isArray(questions)) {

    console.error("Geçersiz ya da boş soru listesi!");

    return;

  }

  const bilgiTestleri = ['karincaTesti', 'karincaTürü'];

  const isBilgiTesti = bilgiTestleri.includes(testType);
  questions.forEach((question) => {

    const selectedOption = document.querySelector(`input[name="q${question.id}"]:checked`);

    if (selectedOption) {

      const selectedAnswerIndex = parseInt(selectedOption.value);
   if (

        question.seçenekler && // Seçenekler dizisinin tanımlı olduğuna emin olalım

        selectedAnswerIndex >= 0 && 

        selectedAnswerIndex < question.seçenekler.length && // Seçilen cevap geçerli mi kontrol et
     question.seçenekler[selectedAnswerIndex] // Seçilen cevap var mı diye kontrol et
  ) {
     // Doğru cevabın olup olmadığını kontrol et

       // let correctAnswer = '';

if (isBilgiTesti && question.doğru) {

  correctAnswer = question.doğru.trim();

}
        // Eğer doğru cevap boş ise hata mesajı verebilirsin.

        if (!correctAnswer) {

          console.error(`Soru ID: ${question.id} için doğru cevap tanımlı değil!`);

        }
     
  const userAnswer = question.seçenekler[selectedAnswerIndex].trim();

        const isCorrect = userAnswer === correctAnswer;

         if (isBilgiTesti) {

          // Eğer doğru cevap ise

          if (isCorrect) {

            selectedOption.parentElement.classList.add('correct');

            console.log("Doğru cevap işaretlendi:", question);
      } else {

            // Yanlış cevap ise

            selectedOption.parentElement.classList.add('incorrect');

            console.log("Yanlış cevap işaretlendi:", question);

          }

        }

        if (isCorrect) correctAnswers++;

      }

    }

  });
  }
 //sonuçları göster

  //const resultMessage = `Test bitti! Doğru cevabınız: ${correctAnswers}/${totalQuestions}`;

// Gönder butonuna basınca Sonuç kutusu

// const submitBtn = document.getElementById('submit-btn'); // Bunu sil

submitBtn = document.getElementById('submit-btn'); // Bunu yaz

if (submitBtn) {

  submitBtn.style.display = 'block';

  submitBtn.onclick = function () {

    // Bilgi testi ise değerlendirme fonksiyonu çalıştırılır

    if (isBilgiTesti) {

      evaluateQuiz(currentTestQuestions, testType);

      const resultBox = document.getElementById("result-box");

      resultBox.style.display = "block";

      resultBox.innerHTML = `Test tamamlandı! Doğru sayınız: ${correctAnswers} / ${totalQuestions}`;

    }

    // Kişilik testleri için ilgili start fonksiyonu çağrılır

    else {

      switch (testType) {

        case 'karincaTürü':

          startkarincaTürü();

          break;

        case 'karincakrallik':

          startkarincakrallik();

          break;

        case 'karincakoloni':

          startkarincakoloni();

          break;

        default:

          console.warn('Bilinmeyen test tipi:', testType);

      }

    }

  };

} else {

  console.error('submit-btn ID\'sine sahip bir buton bulunamadı.');

} 
  
  // Ana Sayfaya Dön butonu oluştur

    const homeButton = document.createElement('button');

    homeButton.textContent = 'Ana Sayfaya Dön';

    homeButton.onclick = function () {

      window.location.href = window.location.href; // Sayfayı yeniden yükler

    };

    document.body.appendChild(homeButton);

  });
