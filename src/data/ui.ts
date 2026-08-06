import type { Lang } from './restaurants';

export const languages: { code: Lang; label: string; flag: string; locale: string }[] = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪', locale: 'de_DE' },
  { code: 'en', label: 'English', flag: '🇬🇧', locale: 'en_US' },
  { code: 'th', label: 'ไทย', flag: '🇹🇭', locale: 'th_TH' },
];

export const ui = {
  de: {
    siteName: 'Pad Thai Pattaya',
    siteTagline: 'Top 10 Food Guide',
    navHome: 'Home',
    navTop10: 'Top 10',
    navAreas: 'Stadtteile',
    navAbout: 'Über uns',
    navImpressum: 'Impressum',
    heroTitle: 'Die besten Pad Thai in Pattaya',
    heroSubtitle:
      'Unser unabhängiger Guide zu den Top 10 Pad-Thai-Adressen – von Street Food bis Feinschmecker, getestet und bewertet.',
    heroCta: 'Top 10 entdecken',
    heroSecondary: 'Nach Stadtteil',
    top10Title: 'Top 10 Pad Thai in Pattaya',
    top10Intro:
      'Basierend auf TripAdvisor-Bewertungen, Local-Tipps und eigener Recherche – sortiert nach Gesamteindruck.',
    viewDetails: 'Details ansehen',
    openMaps: 'Auf Google Maps öffnen',
    rating: 'Bewertung',
    reviews: 'Reviews',
    price: 'Preisniveau',
    padThaiPrice: 'Pad Thai ca.',
    cuisine: 'Küche',
    area: 'Umgebung',
    address: 'Adresse',
    phone: 'Telefon',
    highlight: 'Besonderheit',
    backToList: 'Zurück zur Top 10',
    honorableTitle: 'Honorable Mentions',
    honorableIntro: 'Street-Food-Hotspots, die du nicht verpassen solltest.',
    areasTitle: 'Pad Thai nach Stadtteil',
    areasIntro: 'Finde die besten Nudeln in deiner Nähe.',
    aboutTitle: 'Über dieses Projekt',
    aboutBody:
      'Pad Thai Pattaya ist ein unabhängiger, mehrsprachiger Food-Guide. Wir kombinieren öffentliche Bewertungen (u. a. TripAdvisor) mit eigener Recherche zu Lage, Preis und Charakter jedes Restaurants. Keine bezahlten Platzierungen.',
    aboutMission:
      'Mission: Reisenden und Locals helfen, echtes Pad Thai in Pattaya zu finden – ohne Touristenfallen.',
    impressumTitle: 'Impressum & Kontakt',
    impressumBody:
      'Dieses Projekt ist ein redaktioneller Food-Guide mit Fokus auf Pattaya, Thailand. Angaben zu Restaurants können sich ändern – bitte Öffnungszeiten und Preise vor Ort prüfen.',
    impressumContact: 'Kontakt über GitHub: Freemoser/pad-thai-pattaya',
    impressumLocation: 'Bezugsort: Pattaya, Chonburi, Thailand (12.9236° N, 100.8825° E)',
    footerRights: 'Unabhängiger Food Guide · Keine Affiliate-Links',
    allRestaurants: 'Alle Restaurants',
    filterAll: 'Alle',
    thb: 'THB',
    stars: 'Sterne',
    travellersChoice: "Travellers' Choice",
    relatedArea: 'Mehr in diesem Stadtteil',
    ctaMaps: 'Route planen',
    homePreview: 'Vorschau der Top 10',
    seeAll: 'Alle 10 anzeigen',
    keywords: 'Pad Thai Pattaya, beste Pad Thai Pattaya, Pattaya Street Food, Thai Food Pattaya',
    metaHome:
      'Top 10 Pad Thai in Pattaya 2026 – unabhängiger Guide mit Bewertungen, Preisen und Google Maps Links. Deutsch, English, ไทย.',
    metaTop10:
      'Vollständige Top-10-Liste der besten Pad Thai Restaurants und Street-Food-Stände in Pattaya – mit Karten und Preisen.',
    metaAbout: 'Über den Pad Thai Pattaya Guide – unabhängig, mehrsprachig, SEO-optimiert.',
    metaImpressum: 'Impressum und Kontakt – Pad Thai Pattaya Food Guide.',
    metaArea: 'Beste Pad Thai in',
    areaNames: {
      south: 'Süd-Pattaya',
      center: 'Zentrum',
      jomtien: 'Jomtien',
      naklua: 'Naklua / Nord-Pattaya',
      'walking-street': 'Walking Street',
      pratumnak: 'Pratumnak',
    } as Record<string, string>,
    areaDescriptions: {
      south:
        'Süd-Pattaya bietet eine Mischung aus etablierten Restaurants und Alltags-Thai-Küche nahe Beach Road und South Road.',
      center:
        'Zentral-Pattaya ist ideal für Lunch-Stops und günstige Local-Spots zwischen Shopping und Strand.',
      jomtien:
        'Jomtien ist entspannter als das Zentrum – hier findest du Kleinode und Seafood-Pad-Thai am Strand.',
      naklua:
        'Naklua und Nord-Pattaya stehen für authentischere, weniger touristische Thai-Küche.',
      'walking-street':
        'Rund um die Walking Street: schnelles Street Food, späte Öffnungszeiten, laute Energie.',
      pratumnak:
        'Pratumnak Hill verbindet ruhigere Strände mit ausgewählten Signature-Restaurants.',
    } as Record<string, string>,
  },
  en: {
    siteName: 'Pad Thai Pattaya',
    siteTagline: 'Top 10 Food Guide',
    navHome: 'Home',
    navTop10: 'Top 10',
    navAreas: 'Areas',
    navAbout: 'About',
    navImpressum: 'Legal',
    heroTitle: 'The Best Pad Thai in Pattaya',
    heroSubtitle:
      'Our independent guide to the top 10 Pad Thai spots — from street food to fine plates, researched and ranked.',
    heroCta: 'Explore Top 10',
    heroSecondary: 'By area',
    top10Title: 'Top 10 Pad Thai in Pattaya',
    top10Intro:
      'Based on TripAdvisor ratings, local tips and our own research — ranked by overall experience.',
    viewDetails: 'View details',
    openMaps: 'Open in Google Maps',
    rating: 'Rating',
    reviews: 'reviews',
    price: 'Price level',
    padThaiPrice: 'Pad Thai approx.',
    cuisine: 'Cuisine',
    area: 'Area',
    address: 'Address',
    phone: 'Phone',
    highlight: 'Highlight',
    backToList: 'Back to Top 10',
    honorableTitle: 'Honorable Mentions',
    honorableIntro: 'Street-food hotspots you should not miss.',
    areasTitle: 'Pad Thai by Area',
    areasIntro: 'Find the best noodles near you.',
    aboutTitle: 'About this project',
    aboutBody:
      'Pad Thai Pattaya is an independent, multilingual food guide. We combine public reviews (including TripAdvisor) with our own research on location, price and character. No paid placements.',
    aboutMission:
      'Mission: help travelers and locals find real Pad Thai in Pattaya — without tourist traps.',
    impressumTitle: 'Legal & Contact',
    impressumBody:
      'This project is an editorial food guide focused on Pattaya, Thailand. Restaurant details may change — please verify hours and prices on site.',
    impressumContact: 'Contact via GitHub: Freemoser/pad-thai-pattaya',
    impressumLocation: 'Reference location: Pattaya, Chonburi, Thailand (12.9236° N, 100.8825° E)',
    footerRights: 'Independent food guide · No affiliate links',
    allRestaurants: 'All restaurants',
    filterAll: 'All',
    thb: 'THB',
    stars: 'stars',
    travellersChoice: "Travellers' Choice",
    relatedArea: 'More in this area',
    ctaMaps: 'Get directions',
    homePreview: 'Top 10 preview',
    seeAll: 'See all 10',
    keywords: 'Pad Thai Pattaya, best Pad Thai Pattaya, Pattaya street food, Thai food Pattaya',
    metaHome:
      'Top 10 Pad Thai in Pattaya 2026 – independent guide with ratings, prices and Google Maps links. English, Deutsch, ไทย.',
    metaTop10:
      'Full top 10 list of the best Pad Thai restaurants and street-food stalls in Pattaya — with maps and prices.',
    metaAbout: 'About the Pad Thai Pattaya guide – independent, multilingual, SEO-optimized.',
    metaImpressum: 'Legal notice and contact – Pad Thai Pattaya food guide.',
    metaArea: 'Best Pad Thai in',
    areaNames: {
      south: 'South Pattaya',
      center: 'City Center',
      jomtien: 'Jomtien',
      naklua: 'Naklua / North Pattaya',
      'walking-street': 'Walking Street',
      pratumnak: 'Pratumnak',
    } as Record<string, string>,
    areaDescriptions: {
      south:
        'South Pattaya mixes established restaurants and everyday Thai kitchens near Beach Road and South Road.',
      center:
        'Central Pattaya is ideal for lunch stops and budget local spots between shopping and the beach.',
      jomtien:
        'Jomtien is more relaxed than the center — gems and seafood Pad Thai by the beach.',
      naklua:
        'Naklua and North Pattaya offer more authentic, less touristy Thai cooking.',
      'walking-street':
        'Around Walking Street: fast street food, late hours, loud energy.',
      pratumnak:
        'Pratumnak Hill pairs quieter beaches with select signature restaurants.',
    } as Record<string, string>,
  },
  th: {
    siteName: 'Pad Thai Pattaya',
    siteTagline: 'คู่มืออาหาร Top 10',
    navHome: 'หน้าแรก',
    navTop10: 'ท็อป 10',
    navAreas: 'ย่าน',
    navAbout: 'เกี่ยวกับ',
    navImpressum: 'ข้อมูลกฎหมาย',
    heroTitle: 'ผัดไทยที่ดีที่สุดในพัทยา',
    heroSubtitle:
      'คู่มืออิสระสู่ 10 ร้านผัดไทยยอดเยี่ยม — จากสตรีทฟู้ดถึงจานพรีเมียม ค้นคว้าและจัดอันดับแล้ว',
    heroCta: 'ดูท็อป 10',
    heroSecondary: 'ตามย่าน',
    top10Title: 'ท็อป 10 ผัดไทยในพัทยา',
    top10Intro:
      'อิงคะแนน TripAdvisor คำแนะนำคนท้องถิ่น และการค้นคว้าของเรา — จัดตามประสบการณ์โดยรวม',
    viewDetails: 'ดูรายละเอียด',
    openMaps: 'เปิดใน Google Maps',
    rating: 'คะแนน',
    reviews: 'รีวิว',
    price: 'ระดับราคา',
    padThaiPrice: 'ผัดไทยประมาณ',
    cuisine: 'ประเภทอาหาร',
    area: 'ย่าน',
    address: 'ที่อยู่',
    phone: 'โทรศัพท์',
    highlight: 'จุดเด่น',
    backToList: 'กลับไปท็อป 10',
    honorableTitle: 'ร้านแนะนำเพิ่มเติม',
    honorableIntro: 'จุดสตรีทฟู้ดที่ไม่ควรพลาด',
    areasTitle: 'ผัดไทยตามย่าน',
    areasIntro: 'หามะหมี่ที่ดีที่สุดใกล้คุณ',
    aboutTitle: 'เกี่ยวกับโปรเจกต์นี้',
    aboutBody:
      'Pad Thai Pattaya เป็นคู่มืออาหารอิสระหลายภาษา เรารวมรีวิวสาธารณะ (รวม TripAdvisor) กับการค้นคว้าเรื่องทำเล ราคา และเอกลักษณ์ ไม่มีการจ่ายเงินเพื่ออันดับ',
    aboutMission:
      'พันธกิจ: ช่วยนักท่องเที่ยวและคนท้องถิ่นหาผัดไทยแท้ในพัทยา — โดยไม่ติดกับดักนักท่องเที่ยว',
    impressumTitle: 'ข้อมูลกฎหมายและติดต่อ',
    impressumBody:
      'โปรเจกต์นี้เป็นคู่มืออาหารเชิงบรรณาธิการ โฟกัสพัทยา ประเทศไทย รายละเอียดร้านอาจเปลี่ยน — โปรดตรวจเวลาเปิดและราคาก่อนที่ร้าน',
    impressumContact: 'ติดต่อผ่าน GitHub: Freemoser/pad-thai-pattaya',
    impressumLocation: 'พิกัดอ้างอิง: พัทยา ชลบุรี ประเทศไทย (12.9236° N, 100.8825° E)',
    footerRights: 'คู่มืออาหารอิสระ · ไม่มีลิงก์แอฟฟิลิเอต',
    allRestaurants: 'ร้านทั้งหมด',
    filterAll: 'ทั้งหมด',
    thb: 'บาท',
    stars: 'ดาว',
    travellersChoice: "Travellers' Choice",
    relatedArea: 'เพิ่มเติมในย่านนี้',
    ctaMaps: 'วางแผนเส้นทาง',
    homePreview: 'ตัวอย่างท็อป 10',
    seeAll: 'ดูทั้ง 10 ร้าน',
    keywords: 'ผัดไทยพัทยา, ผัดไทยอร่อยพัทยา, สตรีทฟู้ดพัทยา, อาหารไทยพัทยา',
    metaHome:
      'ท็อป 10 ผัดไทยในพัทยา 2026 – คู่มืออิสระพร้อมคะแนน ราคา และลิงก์ Google Maps ไทย อังกฤษ เยอรมัน',
    metaTop10:
      'รายการท็อป 10 ร้านผัดไทยและแผงสตรีทฟู้ดที่ดีที่สุดในพัทยา — พร้อมแผนที่และราคา',
    metaAbout: 'เกี่ยวกับคู่มือ Pad Thai Pattaya – อิสระ หลายภาษา เหมาะ SEO',
    metaImpressum: 'ข้อมูลกฎหมายและติดต่อ – คู่มืออาหาร Pad Thai Pattaya',
    metaArea: 'ผัดไทยที่ดีที่สุดใน',
    areaNames: {
      south: 'พัทยาใต้',
      center: 'ใจกลางเมือง',
      jomtien: 'จอมเทียน',
      naklua: 'นาเกลือ / พัทยาเหนือ',
      'walking-street': 'Walking Street',
      pratumnak: 'พระตำหนัก',
    } as Record<string, string>,
    areaDescriptions: {
      south:
        'พัทยาใต้ผสมร้านดังกับครัวไทยประจำวัน ใกล้ถนนชายหาดและถนนใต้',
      center:
        'พัทยากลางเหมาะกับมื้อกลางวันและร้านท้องถิ่นราคาดี ระหว่างช้อปปิ้งกับชายหาด',
      jomtien:
        'จอมเทียนสบายกว่าใจกลางเมือง — มีร้านลับและผัดไทยซีฟู้ดริมทะเล',
      naklua:
        'นาเกลือและพัทยาเหนือให้รสไทยแท้มากขึ้น น้อยนักท่องเที่ยว',
      'walking-street':
        'รอบ Walking Street: สตรีทฟู้ดเร็ว เปิดดึก พลังงานคึกคัก',
      pratumnak:
        'เขาพระตำหนักจับคู่ชายหาดเงียบกับร้านซิกเนเจอร์คัดสรร',
    } as Record<string, string>,
  },
} as const;

export type UIStrings = (typeof ui)['de'];

export function t(lang: Lang): UIStrings {
  return ui[lang] as UIStrings;
}

export const areaSlugs = [
  'south',
  'center',
  'jomtien',
  'naklua',
  'walking-street',
  'pratumnak',
] as const;

export type AreaSlug = (typeof areaSlugs)[number];
