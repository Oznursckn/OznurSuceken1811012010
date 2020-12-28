var footer="Öznur Suçeken"
const anaSayfa = function (req, res, next) {
  res.render('mekanlar-liste', {
    'baslik': 'Anasayfa',
    'footer': footer,
    'sayfaBaslik': {
      'siteAd': 'Mekan32',
      'aciklama': 'Isparta nın popüler mekanlarını keşfedin!'
    },
    'mekanlar': [
      {
        'ad': 'Starbucks',
        'adres': 'Centrum Garden AVM',
        'puan': '4',
        'imkanlar': ['Kahve', 'Kurabiye', 'Pasta'],
        'mesafe': '10km'
      },
      {

        'ad': 'Karikatur Bi Kafe',
        'adres': 'Isparta Carsi',
        'puan': '3',
        'imkanlar': ['Kahve', 'FastFood', 'Soguk Icecek', 'Tatlı'],
        'mesafe': '15km'
      },
      {
        'ad': 'Mackbear',
        'adres': 'Iyas Park',
        'puan': '4',
        'imkanlar': ['Kahve', 'Tatlı', 'Soguk Icecek'],
        'mesafe': '5km'
      },
      {
        'ad': 'Gramofon',
        'adres': 'Isparta Carsi',
        'puan': '2',
        'imkanlar': ['Kahve', 'FastFood', 'Kahvaltı'],
        'mesafe': '15km'
      },
      {
        'ad': 'Zeyrek',
        'adres': 'Iyas Park',
        'puan': '3',
        'imkanlar': ['Kahve', 'Et', 'Soguk Icecek'],
        'mesafe': '5km'
      }
    ],

  })
}
const mekanBilgisi = function (req, res, next) {
  res.render('mekan-detay',
    {
      'baslik': 'Mekan Bilgisi',
      'footer': 'Öznur Suçeken 2020',
      'sayfaBaslik': 'Starbucks',
      'mekanBilgisi': {
        'ad': 'Starbucks',
        'adres': 'Centrum Garden',
        'puan': 3,
        'imkanlar': ['Kahve', 'Kurabiye', 'Pasta'],
        'koordinatlar': {
          'enlem': 37.781885,
          'boylam': 30.566034

        },
        'saatler': [
          {
            'gunler': 'Pazartesi-Cuma',
            'acilis': '7:00',
            'kapanis': '23:00',
            'kapali': false

          },
          {
            'gunler': 'Cumartesi',
            'acilis': '9:00',
            'kapanis': '22:30',
            'kapali': false

          },
          {
            'gunler': 'Pazar',
            'kapali': true
          }
        ],

        'yorumlar': [
          {
            'yorumYapan': 'Öznur Suçeken',
            'puan': 3,
            'tarih': '1 Aralık 2020',
            'yorumMetni': 'Sevdiğim her çeşit kahve vardı.İçeri girince hoş bir kahve kokusu karşılıyor sizi.'

          },
          {
            'yorumYapan': 'Asım Sinan Yüksel',
            'puan': 4,
            'tarih': '27 Kasım 2020',
            'yorumMetni': 'Kahveler mükemmel'
          }

        ],

      },
    })

}


const yorumEkle = function (req, res, next) {
  res.render('yorum-ekle', {
    title: 'Yorum Ekle',
    'footer': 'Öznur Suçeken 2020',

  });
}

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}