// Genel değişkenler
let currentTestQuestions = null;
let isBilgiTesti = false;
let testType = '';
let correctAnswers = 0;
let totalQuestions = 0;

// Test veri objeleri
const karincaTesti = {
  testName: "Karınca Bilgi Testi",
  questions: [
    { 
      id: 0,
      soru: "Karıncalar kaç bacaklıdır?",
      seçenekler: ["6", "4", "8", "10"],
      doğru: "6",
      karakter: ["A", "B", "C", "D"]
    },
    { 
      id: 1,
      soru: "Karıncalar hangi hayvan grubuna aittir?",
      seçenekler: ["Böcekler", "Sürüngenler", "Memeliler", "Omurgasızlar"],
      doğru: "Böcekler",
      karakter: ["A", "B", "C", "D"]
    },
    {
      id: 2,
      soru: "Dünyada kaç farklı karınca türü vardır?",
      seçenekler: ["1000", "5000", "12000", "20000"],
      doğru: "12000",
      karakter: ["A", "B", "C", "D"]
    },
    { 
      id: 3,
      soru: "Karıncalar en çok hangi duyu organını kullanır?",
      seçenekler: ["Antenler", "Gözler", "Ayaklar", "Kanatlar"],
      doğru: "Antenler",
      karakter: ["A", "B", "C", "D"]
    },
    { 
      id: 4,
      soru: "Karıncalar en fazla hangi kıtada bulunur?",
      seçenekler: ["Asya", "Afrika", "Güney Amerika", "Antarktika"],
      doğru: "Güney Amerika",
      karakter: ["A", "B", "C", "D"]
    },
    {
      id: 5,
      soru: "Karıncalar genellikle koloniler halinde yaşar. Peki bir karınca kolonisinde hangi bireyler bulunur?",
      seçenekler: [
        "Sadece işçi karıncalar", 
        "Kraliçe, işçi ve erkek karıncalar",
        "Sadece kraliçe karınca", 
        "Kraliçe ve asker karıncalar"
      ],
      doğru: "Kraliçe, işçi ve erkek karıncalar",
      karakter: ["A", "B", "C", "D"]
    },
    { 
      id: 6,
      soru: "Karıncaların vücut yapısında kaç bölüm bulunur?",
      seçenekler: ["2", "3", "4", "5"],
      doğru: "3",
      karakter: ["A", "B", "C", "D"]  
    },
    { 
      id: 7,
      soru: "Karıncalar yiyecek bulduklarında kolonilerini nasıl bilgilendirir?",
      seçenekler: [
        "Ses çıkararak", 
        "Kanatlarını çırparak", 
        "Fermon salgılayarak",  
        "Ayaklarıyla yere vurarak"
      ],
      doğru: "Fermon salgılayarak",
      karakter: ["A", "B", "C", "D"]  
    }
  ] 
};

const karincaTürü = {
  testName: "Karınca Türünü Keşfet",
  questions: [
    {
      id: 0,
      soru: "Ormanda yiyecek ararken ne yaparsın?",
      seçenekler: [
        "Etrafı keşfeder, iyi yolu bulmaya çalışırım.", 
        "Hızlıca hareket edip ilk bulduğum şeyi alırım.", 
        "Başkalarıyla haberleşip en iyi yeri belirlerim.",
        "Gerekirse rakiplerimle savaşırım."
      ],
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 1,
      soru: "Kolonide en çok hangi işi yapmaktan hoşlanırsın?",
      seçenekler: [
        "Yeni yollar keşfetmek.", 
        "Yiyecek toplamak.", 
        "Yuvayı inşa etmek.", 
        "Kraliçeyi korumak."
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 2,
      soru: "Düşman bir böcek kolonine saldırıyor, ne yaparsın?",
      seçenekler: [
        "Strateji geliştirip ekibi yönetirim.", 
        "Panik yapmadan kaçabileceğim bir yol ararım.", 
        "Koloniye haber verip savunmaya geçerim.", 
        "Direkt saldırıya geçerim!"
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 3,
      soru: "En sevdiğin yaşam alanı hangisi?",
      seçenekler: [
        "Ormanlık alanlar.", 
        "Tropikal bölgeler.", 
        "Toprak altı tünelleri.", 
        "Sıcak ve kurak çöller."
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 4,
      soru: "Bir insan şeker bırakıyor, ne yaparsın?",
      seçenekler: [
        "Hemen keşfe çıkarım.", 
        "İlk ben almak için koşarım.", 
        "Arkadaşlarımı çağırırım.", 
        "Rakipleri uzaklaştırıp sahiplenirim."
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 5,
      soru: "En büyük korkun ne olurdu?",
      seçenekler: [
        "Kaybolmak", 
        "Yiyeceksiz kalmak.", 
        "Kolonimden kopmak", 
        "Düşmanlarla savaşta kaybetmek."
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 6,
      soru: "Bir karınca olarak en güçlü yanın ne olurdu?",
      seçenekler: [
        "Keşif yeteneğim.", 
        "Hızım.", 
        "Takım çalışması yeteneğim.", 
        "Gücüm ve cesaretim."
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    { 
      id: 7,
      soru: "Yeni bir koloni kurman gerekiyor, ilk işin ne olurdu?",
      seçenekler: [
        "Çevreyi keşfetmek.", 
        "Hızlıca yiyecek stoğu oluşturmak.", 
        "Dayanıklı bir yuva inşa etmek.", 
        "Savunma sistemleri kurmak."
      ], 
      karakter: ["A", "B", "C", "D"] 
    }
  ]
};

const karincaTanima = {
  testName: "Karınca Türü Tanıma",
  questions: [
    { 
      id: 0,
      soru: "Hangi karınca türü yaprakları keserek mantar yetiştirir?",
      seçenekler: [
        "Ateş Karıncası", 
        "Kesik Yaprak Karıncası", 
        "Asker Karınca", 
        "Şeker Karıncası"
      ], 
      doğru: "b", 
      karakter: ["A", "B", "C", "D"] 
    },
    { 
      id: 1,
      soru: "Ağaçlarda yuva yapan karınca türü hangisidir?",
      seçenekler: [
        "Kesik yapraklı karınca", 
        "Dokumacı karınca", 
        "Ateş karıncası", 
        "Çöl karıncası"
      ], 
      doğru: "b", 
      karakter: ["A", "B", "C", "D"]
    },
    { 
      id: 2,
      soru: "Hangi karınca türü güçlü zehiriyle bilinir ve saldırganlığıyla tanınır?",
      seçenekler: [
        "Marangoz Karınca", 
        "Ateş Karıncası", 
        "Arjantin Karıncası", 
        "Çılgın Karınca"
      ], 
      doğru: "b", 
      karakter: ["A", "B", "C", "D"]
    },
    { 
      id: 3,
      soru: "Asya'da devasa koloniler kuran ve insan ısırıklarıyla bilinen karınca türü hangisidir?",
      seçenekler: [
        "Weaver(Dokumacı) Karınca", 
        "Süper Karınca", 
        "Asker Karınca", 
        "Siyah Bahçe Karıncası"
      ], 
      doğru: "c", 
      karakter: ["A", "B", "C", "D"] 
    },
    { 
      id: 4,
      soru: "Hangi karınca türü tahtaları ve ahşap yapıları kemirerek zarar verebilir?",
      seçenekler: [
        "Marangoz karıncalar", 
        "Elektrik Karıncası", 
        "Kesik Yaprak Karıncası", 
        "Kırmızı Orman Karıncası"
      ], 
      doğru: "a", 
      karakter: ["A", "B", "C", "D"] 
    },
    { 
      id: 5,
      soru: "Su üzerinde hareket edebilen ve adeta yüzebilen karınca türü hangisidir?",
      seçenekler: [
        "Elektrik Karıncası", 
        "Çılgın Karınca", 
        "Pirana Karınca", 
        "Weaver(dokumacı) Karınca"
      ], 
      doğru: "b", 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 6,
      soru: "Dünyanın en büyük kolonilerini kurabilen ve kıtalara yayılabilen istilacı karınca türü nedir?",
      seçenekler: [
        "Arjantin Karıncası", 
        "Kırmızı Orman Karıncası", 
        "Çöl Karıncası", 
        "Kanatlı Karınca"
      ], 
      doğru: "a", 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 7,
      soru: "Hangi karınca türü yuvasına ağaç yapraklarını birbirine dikerek yapar?",
      seçenekler: [
        "Weaver(dokumacı)", 
        "Çöl Karıncası", 
        "Şeker Karıncası", 
        "Asker Karınca"
      ], 
      doğru: "a", 
      karakter: ["A", "B", "C", "D"]
    }
  ]
};

const karincakrallik = {
  testName: "Karınca krallığını Yönet",
  questions: [
    {
      id: 0,
      soru: "Karınca Krallığı'nda büyük bir sel felaketi yaklaşıyor. Ne yaparsın?",
      seçenekler: [
        "Yüksek yerlere acil tahliye emri veririm.", 
        "Kraliçeyi korumaya odaklanırım.", 
        "Savaş hazırlıkları yaparım.", 
        "Koloninin içinden kimseyi dışarı çıkarmam."
      ], 
      doğru: "Yüksek yerlere acil tahliye veririm",
      karakter: ["A", "B", "C", "D"] 
    }, 
    { 
      id: 1,
      soru: "Düşman bir koloni gizlice topraklarınıza girdi! Ne yaparsın?",
      seçenekler: [
        "Casusları gönderip düşmanın planlarını öğrenirim.", 
        "Hızlıca saldırırım.", 
        "Düşmanla müzakere ederim.", 
        "Tüm koloniye alarm verir, savunma hazırlıklarına başlarım."
      ], 
      doğru: "Casusları gönderip düşmanın planlarını öğrenirim.",
      karakter: ["A", "B", "C", "D"] 
    }, 
    {
      id: 2,
      soru: "Krallıktaki işçiler grev yapıp çalışmayı bıraktı! Ne yaparsın?", 
      seçenekler: [
        "Onları dinleyip sorunlarını çözmeye çalışırım.", 
        "Zorluklarla mücadele etmelerini söylerim.", 
        "Grev yapanları cezalandırırım.", 
        "Diğer işçilere onları ikna etmelerini söylerim."
      ], 
      doğru: "Onları dinleyip sorunlarını çözmeye çalışırım.",
      karakter: ["A", "B", "C", "D"]
    }, 
    { 
      id: 3,
      soru: "Kış yaklaşıyor ve yiyecekler azalıyor. Ne yaparsın?",
      seçenekler: [
        "Tüm koloniyi daha fazla yiyecek toplamaya teşvik ederim.", 
        "Yiyecekleri eşit şekilde paylaştırırım.", 
        "Yiyecekleri yalnızca kraliçeye ayırırım.", 
        "Bir plan yapar ve kışı atlatmak için daha fazla yiyecek ararım."
      ], 
      doğru: "Tüm koloniyi daha fazla yiyecek toplamaya teşvik ederim.",
      karakter: ["A", "B", "C", "D"] 
    }, 
    { 
      id: 4, 
      soru: "Bir gün, dev bir insan elini uzatıp seni alıyor! Ne yaparsın?",
      seçenekler: [
        "Beni bırakması için karınca asidini kullanırım.", 
        "Isırırım, böylece beni bırakır.", 
        "Sakinleşir ve insanla iletişim kurmaya çalışırım.", 
        "Kendimi savunmadan bırakırım."
      ], 
      doğru: "Isırırım, böylece beni bırakır.",
      karakter: ["A", "B", "C", "D"] 
    }, 
    { 
      id: 5, 
      soru: "Düşman koloniden sürgün edilmiş bir karınca krallığına sığınmak istiyor. Ne yaparsın?",
      seçenekler: [
        "Onu dinler, güvenilir olup olmadığını test ederim.", 
        "Onu kabul ederim, çünkü krallığımıza faydalı olabilir.", 
        "Onu kabul etmem, çünkü tehlikeli olabilir.", 
        "Güvenlik için dışarıda bırakırım."
      ], 
      doğru: "Onu dinler, güvenilir olup olmadığını test ederim.",
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 6,
      soru: "Yeni bir koloni kurmak için yola çıkıyorsun. İlk işin ne olur?",
      seçenekler: [
        "Güvenli bir yuva kazmak.", 
        "Hızla yiyecek toplamak.", 
        "Diğer karıncalarla ittifak kurmak.", 
        "İlk olarak tehditleri analiz etmek."
      ], 
      doğru: "Güvenli bir yuva kazmak.",
      karakter: ["A", "B", "C", "D"] 
    }, 
    { 
      id: 7, 
      soru: "Bir gün ansızın, karınca krallığının yanında bir çekirge sürüsü beliriyor! Ne yaparsın?",
      seçenekler: [
        "Saldırmadan önce casusları gönderip niyetlerini öğrenirim.", 
        "Hızla saldırır ve çekirgeleri uzaklaştırırım.", 
        "Bütün koloni olarak kaçmaya başlarız.", 
        "Sadece kraliçeyi korumaya odaklanırım."
      ], 
      doğru: "Saldırmadan önce casusları gönderip niyetlerini öğrenirim.",
      karakter: ["A", "B", "C", "D"] 
    }, 
    { 
      id: 8,
      soru: "Krallıkta yeni bir kural koyma hakkın var. Ne yaparsın?",
      seçenekler: [
        "Herkes şeker stoğuna katkıda bulunmalı!",
        "Sadece belirli bir grup şeker tüketmeli.", 
        "Şeker, sadece kraliçeye ait olmalı.", 
        "Yiyecek paylaşımı serbest olmalı." 
      ],
      doğru: "Herkes şeker stoğuna katkıda bulunmalı!",
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 9,
      soru: "Kraliçe aniden hastalanıyor! Ne yaparsın?",
      seçenekler: [
        "En bilgili karıncalardan tıbbi destek isterim.", 
        "Kraliçeyi başka bir kraliçe ile değiştirmeyi öneririm.", 
        "Kendi başıma bir çözüm ararım.", 
        "Kraliçenin iyileşmesi için dua ederim."
      ], 
      doğru: "En bilgili karıncalardan tıbbi destek isterim.",
      karakter: ["A", "B", "C", "D"] 
    }
  ]
};

const karincakoloni = {
  testName: "Karınca Koloni",
  questions: [
    {
      id: 0,
      soru: "Nasıl bir yaşam tarzı seni daha çok cezbeder?",
      seçenekler: [
        "Sürekli bir şeyler inşa edip düzenlemek", 
        "Keşif yapıp yeni yerler keşfetmek", 
        "Grup halinde hareket edip güçlü hissetmek", 
        "Düşmanlarla savaşmak ve rekabet etmek"
      ], 
      karakter: ["A", "B", "C", "D"]
    },
    {
      id: 1,
      soru: "Bir grubun içindeyken hangi rolü üstlenmeyi tercih edersin?",
      seçenekler: [
        "Plan yapan ve işleri yönlendiren", 
        "Risk alan ve yeni yollar keşfeden", 
        "Takımı güçlendiren ve destekleyen", 
        "Savunmayı üstlenen ve düşmanları püskürten"
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 2,
      soru: "Hangi ortamda yaşamak isterdin?",
      seçenekler: [
        "Orman içinde büyük bir yapı", 
        "Ağaçların tepesinde güvenli bir yuva", 
        "Çölde sert şartlara uyum sağlamış bir koloni", 
        "Sıcak ve nemli topraklarda büyük bir yeraltı ağı"
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 3,
      soru: "Bir saldırı olduğunda ne yaparsın?",
      seçenekler: [
        "Koloniyi organize edip savunmayı güçlendiririm", 
        "Farklı bir kaçış rotası ararım", 
        "Takımımı bir arada tutmaya çalışırım", 
        "Ön saflarda savaşırım"
      ], 
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 4,
      soru: "Ne tür bir beslenme alışkanlığın var?",
      seçenekler: [
        "Yaprak ve bitki parçalarını toplamak hoşuma gider", 
        "Tatlı yiyecekler ve şeker içeren şeyler ilgimi çeker", 
        "Farklı türde yiyecekleri toplamayı severim", 
        "Etçil bir beslenme bana daha uygun"
      ],
      karakter: ["A", "B", "C", "D"] 
    },
    {
      id: 5,
      soru: "Koloninin en büyük gücü ne olmalı?",
      seçenekler: [
        "Mükemmel organizasyon ve disiplin", 
        "Keşif yetenekleri ve hız", 
        "Birlik ve dayanışma", 
        "Güçlü savaşçılar"
      ], 
      karakter: ["A", "B", "C", "D"] 
    }
  ]
};

// Kişilik testi değerlendirme fonksiyonları
function startkarincaTürü() {
  let aCount = 0, bCount = 0, cCount = 0, dCount = 0;

  karincaTürü.questions.forEach((question) => {
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

  const resultBox = document.getElementById('result-box');
  if (resultBox) {
    resultBox.style.display = "block";
    resultBox.innerHTML = resultMessage;
  } else {
    console.error('Result box bulunamadı!');
  }
}

function startkarincakrallik() {
  let aCount = 0, bCount = 0, cCount = 0, dCount = 0;

  karincakrallik.questions.forEach((question) => {
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

  showkarincakrallikResult(aCount, bCount, cCount, dCount);
}

function showkarincakrallikResult(aCount, bCount, cCount, dCount) {
  let maxCount = Math.max(aCount, bCount, cCount, dCount);
  let resultMessage = "";

  if (maxCount === aCount) {
    resultMessage = "Karınca Krallığı'nın lideri olarak oldukça dikkatli ve planlısınız. Kararlarınıza odaklanmış ve stratejik bir yaklaşıma sahipsiniz.";
  } else if (maxCount === bCount) {
    resultMessage = "Krallıkta güçlü bir savunma stratejisine sahipsiniz. Koloniye liderlik ederken genellikle daha hızlı ve cesur hareket ediyorsunuz."; 
  } else if (maxCount === cCount) { 
    resultMessage = "Bir lider olarak daha pratik ve doğrudan çözümler tercih ediyorsunuz. Krallığınızı hızlıca yönetmeye eğilimlisiniz."; 
  } else if (maxCount === dCount) {
    resultMessage = "Koloniyi korumaya odaklanıyorsunuz. Kraliçe ve koloninin güvenliği her şeyden önce geliyor."; 
  }

  const resultBox = document.getElementById("result-box");
  resultBox.style.display = "block";
  resultBox.innerHTML = resultMessage;
}

function startkarincakoloni() {
  let aCount = 0, bCount = 0, cCount = 0, dCount = 0;

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

// Test tipine göre soruları getir
function getQuestionsByType(testType) {
  console.log('Test Türü:', testType);
  let questions;

  switch (testType) {
    case 'karincaTesti':
      questions = karincaTesti.questions;
      isBilgiTesti = true;
      break;
    case 'karincaTürü':
      questions = karincaTürü.questions;
      isBilgiTesti = false;
      break;
    case 'karincaTanima':
      questions = karincaTanima.questions;
      isBilgiTesti = true;
      break;
    case 'karincakrallik':
      questions = karincakrallik.questions;
      isBilgiTesti = false;
      break;
    case 'karincakoloni':
      questions = karincakoloni.questions;
      isBilgiTesti = false;
      break;
    default:
      console.error('Geçersiz test tipi:', testType);
      return null;
  }

  return questions;
}

// Soruları göster
function displayQuestions(questions) {
  const questionContainer = document.getElementById('question-container');
  questionContainer.innerHTML = '';

  questions.forEach((question) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    
    let optionsHTML = '';
    question.seçenekler.forEach((option, i) => {
      optionsHTML += `
        <label>
          <input type="radio" name="q${question.id}" value="${question.karakter[i]}" /> 
          ${option}
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

// Quiz'i değerlendir (bilgi testleri için)
function evaluateQuiz(questions) {
  correctAnswers = 0;
  totalQuestions = questions.length;

  questions.forEach((question) => {
    const selectedOption = document.querySelector(`input[name="q${question.id}"]:checked`);
    
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      if (userAnswer === question.doğru) {
        correctAnswers++;
        selectedOption.parentElement.classList.add('correct');
      } else {
        selectedOption.parentElement.classList.add('incorrect');
      }
    }
  });

  return calculateResult(correctAnswers, testType);
}

// Sonuç mesajını hesapla
function calculateResult(score, testType) {
  let resultMessage = "";
  const totalQuestions = currentTestQuestions.length;

  if (testType === 'karincaTesti' || testType === 'karincaTanima') {
    if (score === totalQuestions) {
      resultMessage = "Mükemmel! Tüm soruları doğru yanıtladınız!";
    } else if (score >= totalQuestions * 0.75) {
      resultMessage = "Harika! Karıncalar hakkında oldukça bilginiz var!";
    } else if (score >= totalQuestions * 0.5) {
      resultMessage = "İyi Gidiyorsunuz! Temel bilgilere sahipsiniz.";
    } else {
      resultMessage = "Başlangıç Seviyesi! Daha fazla bilgi edinmek için konuyu tekrar gözden geçirin.";
    }
  }
  return resultMessage;
}

// Quiz'i başlatma fonksiyonu
function startQuiz(selectedTestType) {
  testType = selectedTestType;
  currentTestQuestions = getQuestionsByType(testType);
  
  if (!currentTestQuestions) {
    console.error('Bu test tipi için sorular bulunamadı:', testType);
    return;
  }

  // Butonları gizle ve quiz ekranını göster
  document.querySelector('.quiz-container').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  
  // Soruları göster
  displayQuestions(currentTestQuestions);
  
  // Gönder butonunu göster
  const submitBtn = document.getElementById('submit-btn');
  if (submitBtn) {
    submitBtn.style.display = 'block';
    submitBtn.onclick = function() {
      if (isBilgiTesti) {
        const resultMessage = evaluateQuiz(currentTestQuestions);
        const resultBox = document.getElementById("result-box");
        resultBox.style.display = "block";
        resultBox.innerHTML = `${resultMessage}<br>Doğru sayınız: ${correctAnswers} / ${totalQuestions}`;
      } else {
        // Kişilik testlerini yönet
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
        }
      }
      
      // Ana sayfa butonu ekle
      const homeButton = document.createElement('button');
      homeButton.textContent = 'Ana Sayfaya Dön';
      homeButton.onclick = function() {
        location.reload();
      };
      document.getElementById('result-box').appendChild(homeButton);
    };
  }
}

// DOM yüklendiğinde olay dinleyicilerini başlat
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.start-btn');
  
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const testType = this.getAttribute('data-test');
      startQuiz(testType);
    });
  });
});
