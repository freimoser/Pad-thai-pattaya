export type Lang = 'de' | 'en' | 'th';

export type Localized = Record<Lang, string>;

export interface Restaurant {
  slug: string;
  rank: number;
  name: string;
  rating?: number;
  reviews?: number;
  priceLevel: 1 | 2 | 3;
  pricePadThaiTHB?: string;
  tags: string[];
  area: 'south' | 'center' | 'jomtien' | 'naklua' | 'walking-street' | 'pratumnak';
  lat: number;
  lng: number;
  mapsUrl: string;
  phone?: string;
  award?: boolean;
  highlight: Localized;
  description: Localized;
  cuisine: Localized;
  address: Localized;
}

export const restaurants: Restaurant[] = [
  {
    slug: 'mai-thai-cuisine',
    rank: 1,
    name: 'Mai Thai Cuisine',
    rating: 4.6,
    reviews: 809,
    priceLevel: 2,
    pricePadThaiTHB: '180–250',
    tags: ['Restaurant', 'Asian', 'Thai'],
    area: 'south',
    lat: 12.9275,
    lng: 100.8778,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mai+Thai+Cuisine+Pattaya',
    highlight: {
      de: 'TOP Qualität, zuvorkommender Service',
      en: 'TOP quality, attentive service',
      th: 'คุณภาพระดับท็อป บริการใส่ใจ',
    },
    description: {
      de: 'Mai Thai Cuisine in Süd-Pattaya überzeugt mit hochwertigem Pad Thai, frischen Zutaten und freundlichem Service. Ideal für Gäste, die authentische Thai-Küche in ruhiger Atmosphäre suchen.',
      en: 'Mai Thai Cuisine in South Pattaya impresses with high-quality Pad Thai, fresh ingredients and friendly service. Ideal for guests seeking authentic Thai cuisine in a relaxed setting.',
      th: 'Mai Thai Cuisine ที่พัทยาใต้โดดเด่นด้วยผัดไทยคุณภาพสูง วัตถุดิบสด และบริการเป็นมิตร เหมาะสำหรับผู้ที่ต้องการอาหารไทยแท้ในบรรยากาศสบาย ๆ',
    },
    cuisine: {
      de: 'Asiatisch, Thai',
      en: 'Asian, Thai',
      th: 'เอเชียน, ไทย',
    },
    address: {
      de: 'Süd-Pattaya, Pattaya, Chonburi',
      en: 'South Pattaya, Pattaya, Chonburi',
      th: 'พัทยาใต้ พัทยา ชลบุรี',
    },
  },
  {
    slug: 'mays-pattaya',
    rank: 2,
    name: 'MAYs Pattaya',
    rating: 4.6,
    reviews: 671,
    priceLevel: 2,
    pricePadThaiTHB: '160–220',
    tags: ['Restaurant', 'Thai', 'Lokal'],
    area: 'jomtien',
    lat: 12.9053778,
    lng: 100.8730125,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=MAYs+Pattaya+315%2F73+Thepprasit',
    highlight: {
      de: 'Ein Kleinod in Pattaya',
      en: 'A hidden gem in Pattaya',
      th: 'อัญมณีล้ำค่าแห่งพัทยา',
    },
    description: {
      de: 'MAYs Pattaya an der Thepprasit Road ist ein gemütliches Kleinod mit ausgezeichnetem Pad Thai und herzlicher Atmosphäre. Reisende und Locals schätzen die konstante Qualität.',
      en: 'MAYs Pattaya on Thepprasit Road is a cozy gem with excellent Pad Thai and a warm atmosphere. Travelers and locals praise the consistent quality.',
      th: 'MAYs Pattaya บนถนนเทพประสิทธิ์เป็นร้านเล็ก ๆ น่ารัก ผัดไทยยอดเยี่ยม บรรยากาศอบอุ่น นักท่องเที่ยวและคนท้องถิ่นชื่นชอบคุณภาพที่สม่ำเสมอ',
    },
    cuisine: {
      de: 'Asiatisch, Thai',
      en: 'Asian, Thai',
      th: 'เอเชียน, ไทย',
    },
    address: {
      de: '315/73 Thepprasit Rd, Jomtien / Süd-Pattaya',
      en: '315/73 Thepprasit Rd, Jomtien / South Pattaya',
      th: '315/73 ถนนเทพประสิทธิ์ จอมเทียน / พัทยาใต้',
    },
  },
  {
    slug: 'jasmins-cafe',
    rank: 3,
    name: "Jasmin's Cafe Pattaya",
    rating: 4.5,
    reviews: 811,
    priceLevel: 1,
    pricePadThaiTHB: '90–150',
    tags: ['Cafe', 'Asian', 'Günstig'],
    area: 'center',
    lat: 12.9373221,
    lng: 100.8849934,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jasmin%27s+Cafe+Pattaya+Central',
    award: true,
    highlight: {
      de: 'Pattaya Geheimtipp · Travellers\' Choice',
      en: 'Pattaya insider tip · Travellers\' Choice',
      th: 'ร้านลับพัทยา · Travellers\' Choice',
    },
    description: {
      de: 'Jasmin\'s Cafe ist ein preiswerter Geheimtipp mit Travellers\' Choice Auszeichnung. Großartige Portionen, authentischer Geschmack und faire Preise mitten in Zentral-Pattaya.',
      en: 'Jasmin\'s Cafe is a budget-friendly insider tip with a Travellers\' Choice award. Great portions, authentic taste and fair prices in Central Pattaya.',
      th: 'Jasmin\'s Cafe เป็นร้านลับราคาย่อมเยา ที่ได้รางวัล Travellers\' Choice ปริมาณเยอะ รสชาติแท้ ราคาเป็นธรรม ใจกลางพัทยา',
    },
    cuisine: {
      de: 'Cafe, Asiatisch',
      en: 'Cafe, Asian',
      th: 'คาเฟ่, เอเชียน',
    },
    address: {
      de: '137 M.9, Central Pattaya Road, Pattaya',
      en: '137 M.9, Central Pattaya Road, Pattaya',
      th: '137 ม.9 ถนนพัทยากลาง พัทยา',
    },
  },
  {
    slug: 'five-star-j-vegetarian',
    rank: 4,
    name: 'Five Star J Vegetarian Restaurant',
    rating: 4.7,
    reviews: 843,
    priceLevel: 2,
    pricePadThaiTHB: '120–200',
    tags: ['Vegetarisch', 'Vegan', 'International'],
    area: 'south',
    lat: 12.9237836,
    lng: 100.8822659,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ning%27s+Five+Star+J+Vegetarian+Restaurant+Pattaya',
    highlight: {
      de: 'Höchste Bewertung der Liste!',
      en: 'Highest rating on this list!',
      th: 'คะแนนสูงสุดในลิสต์นี้!',
    },
    description: {
      de: 'Ning\'s Five Star J Vegetarian bietet hervorragendes vegetarisches und veganes Pad Thai. Mit 4.7 Sternen die bestbewertete Adresse – auch für Fleischesser ein Erlebnis.',
      en: 'Ning\'s Five Star J Vegetarian serves outstanding vegetarian and vegan Pad Thai. At 4.7 stars it is the top-rated spot — a must even for meat-eaters.',
      th: 'Ning\'s Five Star J Vegetarian เสิร์ฟผัดไทยเจและมังสวิรัติยอดเยี่ยม คะแนน 4.7 สูงสุดในลิสต์ — แม้คนกินเนื้อก็ประทับใจ',
    },
    cuisine: {
      de: 'Vegan/Vegetarisch, International',
      en: 'Vegan/Vegetarian, International',
      th: 'เจ/มังสวิรัติ, นานาชาติ',
    },
    address: {
      de: 'South Pattaya Road, Pattaya',
      en: 'South Pattaya Road, Pattaya',
      th: 'ถนนพัทยาใต้ พัทยา',
    },
  },
  {
    slug: 'mae-sri-ruen-thai-food',
    rank: 5,
    name: 'Mae Sri Ruen Thai Food',
    rating: 4.2,
    reviews: 57,
    priceLevel: 2,
    pricePadThaiTHB: '140–200',
    tags: ['Thai', 'Lokal', 'Restaurant'],
    area: 'naklua',
    lat: 12.9348859,
    lng: 100.8821187,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mae+Sri+Ruen+Thai+Food+Pattaya',
    highlight: {
      de: 'Authentisch nord-pattaya / Beach Road',
      en: 'Authentic North Pattaya / Beach Road style',
      th: 'รสชาติแท้ สไตล์พัทยาเหนือ / ถนนชายหาด',
    },
    description: {
      de: 'Mae Sri Ruen serviert klassische Thai-Gerichte mit ehrlichem Hausmannskost-Charakter. Pad Thai hier schmeckt wie bei Mama – ohne Touristen-Show.',
      en: 'Mae Sri Ruen serves classic Thai dishes with honest home-cooking character. Pad Thai here tastes like mom\'s — no tourist show.',
      th: 'แม่ศรีเรือนเสิร์ฟอาหารไทยคลาสสิกแบบบ้าน ๆ ผัดไทยที่นี่รสชาติเหมือนแม่ทำ — ไม่มีโชว์นักท่องเที่ยว',
    },
    cuisine: {
      de: 'Thai',
      en: 'Thai',
      th: 'ไทย',
    },
    address: {
      de: 'Pattaya Sai 1 (Beach Road), Pattaya',
      en: 'Pattaya Sai 1 (Beach Road), Pattaya',
      th: 'ถนนพัทยาสายหนึ่ง (ถนนชายหาด) พัทยา',
    },
  },
  {
    slug: 'kiss-food-drinks',
    rank: 6,
    name: 'Kiss Food & Drinks',
    rating: 3.7,
    reviews: 805,
    priceLevel: 1,
    pricePadThaiTHB: '80–130',
    tags: ['Thai', 'Günstig', 'Street Food'],
    area: 'walking-street',
    lat: 12.9308679,
    lng: 100.8820502,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kiss+Food+%26+Drinks+Pattaya+Walking+Street',
    highlight: {
      de: 'Günstig nahe Walking Street',
      en: 'Budget-friendly near Walking Street',
      th: 'ราคาถูก ใกล้ Walking Street',
    },
    description: {
      de: 'Kiss Food & Drinks ist die Adresse für schnelles, günstiges Thai-Essen in Walking-Street-Nähe. Perfekt nach einem langen Strandtag – unkompliziert und sättigend.',
      en: 'Kiss Food & Drinks is the spot for quick, cheap Thai food near Walking Street. Perfect after a long beach day — simple and filling.',
      th: 'Kiss Food & Drinks คือจุดแวะอาหารไทยเร็ว ราคาถูก ใกล้ Walking Street เหมาะหลังเที่ยวชายหาด — เรียบง่าย อิ่มท้อง',
    },
    cuisine: {
      de: 'Thai, günstig',
      en: 'Thai, budget',
      th: 'ไทย ราคาย่อมเยา',
    },
    address: {
      de: 'Nähe Walking Street / Pattaya Sai 2, Süd-Pattaya',
      en: 'Near Walking Street / Pattaya Sai 2, South Pattaya',
      th: 'ใกล้ Walking Street / พัทยาสายสอง พัทยาใต้',
    },
  },
  {
    slug: 'mae-sri-reun',
    rank: 7,
    name: 'Mae Sri Reun',
    rating: 4.1,
    reviews: 92,
    priceLevel: 1,
    pricePadThaiTHB: '70–120',
    tags: ['Thai', 'Günstig', 'Lokal'],
    area: 'center',
    lat: 12.9343006,
    lng: 100.8927441,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mae+Sri+Reun+Pattaya+Central',
    highlight: {
      de: 'Bestes Thai Lunch',
      en: 'Best Thai lunch',
      th: 'อาหารกลางวันไทยที่ดีที่สุด',
    },
    description: {
      de: 'Mae Sri Reun ist bei Locals für günstiges Mittagessen bekannt. Pad Thai und Reisgerichte kommen frisch aus der Wok-Pfanne – ehrlich und lecker.',
      en: 'Mae Sri Reun is known among locals for great-value lunch. Pad Thai and rice dishes come fresh from the wok — honest and tasty.',
      th: 'แม่ศรีเรือนเป็นที่รู้จักในหมู่คนท้องถิ่นเรื่องอาหารกลางวันราคาดี ผัดไทยและกับข้าวสดจากกระทะ — ซื่อสัตย์ อร่อย',
    },
    cuisine: {
      de: 'Thai, günstig',
      en: 'Thai, budget',
      th: 'ไทย ราคาย่อมเยา',
    },
    address: {
      de: 'Central Pattaya Road, Pattaya',
      en: 'Central Pattaya Road, Pattaya',
      th: 'ถนนพัทยากลาง พัทยา',
    },
  },
  {
    slug: 'pad-lay-pattaya',
    rank: 8,
    name: 'Pad Lay Pattaya',
    priceLevel: 2,
    pricePadThaiTHB: '150–280',
    tags: ['Seafood', 'Thai', 'Signature'],
    area: 'pratumnak',
    lat: 12.9185,
    lng: 100.8685,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pad+Lay+Pattaya',
    phone: '+66 64 575 0860',
    highlight: {
      de: 'Signature-Flavor vom Golf von Thailand',
      en: 'Signature flavor from the Gulf of Thailand',
      th: 'รสซิกเนเจอร์จากอ่าวไทย',
    },
    description: {
      de: 'Pad Lay setzt auf hausgemachtes Pad Thai mit lokalen Zutaten und Meeresfrüchten vom Golf von Thailand. Frisch, aromatisch und mit klarem Signature-Charakter.',
      en: 'Pad Lay focuses on homemade Pad Thai with local ingredients and seafood from the Gulf of Thailand. Fresh, aromatic, with a clear signature style.',
      th: 'Pad Lay เน้นผัดไทยทำเองด้วยวัตถุดิบท้องถิ่นและอาหารทะเลจากอ่าวไทย สด หอม มีเอกลักษณ์ชัดเจน',
    },
    cuisine: {
      de: 'Thai, Meeresfrüchte',
      en: 'Thai, Seafood',
      th: 'ไทย อาหารทะเล',
    },
    address: {
      de: 'Pattaya (Pratumnak / Küstenbereich)',
      en: 'Pattaya (Pratumnak / coastal area)',
      th: 'พัทยา (พระตำหนัก / โซนชายฝั่ง)',
    },
  },
  {
    slug: 'pj-tavern',
    rank: 9,
    name: 'PJ Tavern',
    priceLevel: 3,
    pricePadThaiTHB: '250–450',
    tags: ['Seafood', 'Restaurant', 'Thai'],
    area: 'jomtien',
    lat: 12.8950,
    lng: 100.8750,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=PJ+Tavern+Pattaya+River+Prawn+Pad+Thai',
    highlight: {
      de: 'Spezialität: River Prawn Pad Thai',
      en: 'Specialty: River Prawn Pad Thai',
      th: 'เมนูเด่น: ผัดไทยกุ้งแม่น้ำ',
    },
    description: {
      de: 'PJ Tavern kombiniert authentische Thai-Küche mit frischem Seafood. Das River Prawn Pad Thai ist die Signature-Spezialität – großzügig und beeindruckend.',
      en: 'PJ Tavern combines authentic Thai cuisine with fresh seafood. River Prawn Pad Thai is the signature specialty — generous and impressive.',
      th: 'PJ Tavern ผสมผสานอาหารไทยแท้กับซีฟู้ดสด ผัดไทยกุ้งแม่น้ำคือเมนูซิกเนเจอร์ — จัดเต็ม น่าประทับใจ',
    },
    cuisine: {
      de: 'Authentisch Thai & Fresh Seafood',
      en: 'Authentic Thai & Fresh Seafood',
      th: 'ไทยแท้และซีฟู้ดสด',
    },
    address: {
      de: 'Jomtien / Pattaya',
      en: 'Jomtien / Pattaya',
      th: 'จอมเทียน / พัทยา',
    },
  },
  {
    slug: 'tai-thai-restaurant',
    rank: 10,
    name: 'Tai Thai Restaurant',
    priceLevel: 2,
    pricePadThaiTHB: '150–230',
    tags: ['Thai', 'Restaurant', 'Lokal'],
    area: 'center',
    lat: 12.9350,
    lng: 100.8880,
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Tai+Thai+Restaurant+Pattaya',
    highlight: {
      de: 'Eines der besten Thai-Restaurants in Pattaya',
      en: 'Easily one of the best places for Thai food in Pattaya',
      th: 'หนึ่งในร้านอาหารไทยที่ดีที่สุดในพัทยา',
    },
    description: {
      de: 'Tai Thai Restaurant wird von Locals und Facebook-Community stark empfohlen. Ausgewogenes Pad Thai, authentische Gewürze und zuverlässige Küche.',
      en: 'Tai Thai Restaurant is highly recommended by locals and the Facebook community. Balanced Pad Thai, authentic spices and reliable cooking.',
      th: 'Tai Thai Restaurant ได้รับการแนะนำอย่างมากจากคนท้องถิ่นและชุมชน Facebook ผัดไทยสมดุล เครื่องเทศแท้ ครัวน่าเชื่อถือ',
    },
    cuisine: {
      de: 'Thai',
      en: 'Thai',
      th: 'ไทย',
    },
    address: {
      de: 'Zentral-Pattaya',
      en: 'Central Pattaya',
      th: 'พัทยากลาง',
    },
  },
];

export const honorableMentions: {
  slug: string;
  name: Localized;
  description: Localized;
  area: Restaurant['area'];
  mapsUrl: string;
}[] = [
  {
    slug: 'jomtien-night-market',
    name: {
      de: 'Jomtien Night Market',
      en: 'Jomtien Night Market',
      th: 'ตลาดนัดจอมเทียน',
    },
    description: {
      de: 'Street-Food-Pad-Thai frisch vom Wok – abends die beste Atmosphäre am Strand.',
      en: 'Street-food Pad Thai fresh from the wok — best beach vibe in the evening.',
      th: 'ผัดไทยสตรีทฟู้ดสดจากกระทะ — บรรยากาศชายหาดยามค่ำที่ดีที่สุด',
    },
    area: 'jomtien',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jomtien+Night+Market+Pattaya',
  },
  {
    slug: 'walking-street-food-stalls',
    name: {
      de: 'Walking Street Food Stalls',
      en: 'Walking Street Food Stalls',
      th: 'แผงอาหาร Walking Street',
    },
    description: {
      de: 'Mehrere Stände mit schnellem Pad Thai mitten im Nachtleben – laut, lecker, unvergesslich.',
      en: 'Several stalls with quick Pad Thai in the heart of nightlife — loud, tasty, unforgettable.',
      th: 'แผงหลายร้านกับผัดไทยเร็วใจกลางไนท์ไลฟ์ — เสียงดัง อร่อย ไม่ลืม',
    },
    area: 'walking-street',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Walking+Street+Pattaya+food+stalls',
  },
];

export function getRestaurant(slug: string): Restaurant | undefined {
  return restaurants.find((r) => r.slug === slug);
}

export function getByArea(area: Restaurant['area']): Restaurant[] {
  return restaurants.filter((r) => r.area === area);
}
