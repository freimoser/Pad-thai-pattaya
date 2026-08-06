# PROJEKT: Pad Thai Pattaya – Top 10 Food Guide 🍜

## ROLLE
Du bist Grok (xAI) via OpenRouter. Du bist ein Full-Stack Developer & SEO-Experte.
Deine Aufgabe: Erstelle eine komplette, moderne, mehrsprachige statische Website über die Top 10 Pad Thai in Pattaya.

## TECHNISCHE ANFORDERUNGEN

### Stack (wähle selbst, sei modern):
- Static Site Generator (Astro, Hugo, Next.js static export — was immer am besten passt)
- Kein Node-Server, nur statisches HTML
- Modernes CSS (Tailwind oder Pure CSS — entscheide)
- Mobile-first, responsive
- Keine JS-Frameworks im Browser (minimal vanilla JS wo nötig)
- SEO-optimiert (Open Graph, Schema.org/LocalBusiness, Sitemap, Robots.txt)

### Ziel-Ordner: `/data/pad-thai-pattaya/`
Das Projekt wird später auf GitHub Pages deployed unter `Freemoser.github.io/pad-thai-pattaya/`
→ Verwende `site: "https://Freemoser.github.io"` und `base: "/pad-thai-pattaya/"` in der Config

### Deployment:
- GitHub Actions Workflow für Build & Deploy auf Pages (`.github/workflows/deploy.yml`)
- `CNAME` oder `base`-Konfiguration für Subpfad-Deployment

## DESIGN

- **Theme:** Warm, einladend, Food-Vibe. Orange/Rot/Gold Akzente (Pad Thai Farben)
- **Dark Mode optional** aber helle Variante priorisiert
- Hero mit appetitlichem Pad Thai Bild (kann emoji/illustration sein, kein externes Bild nötig)
- Jeder Eintrag soll eine **Google Maps Embed** oder Link haben
- Sterne-Bewertung visuell (⭐)
- Preis-Indikator ($ bis $$$)
- Tags wie "Street Food", "Restaurant", "Lokal", "Vegetarisch"

## CONTENT — TOP 10 PAD THAI IN PATTAYA

Nutze MEINE Recherche + recherchiere selbst die fehlenden Google Maps Links!

### Die Top 10 Liste (recherchiere Google Maps Links selbst!):

1. **Mai Thai Cuisine** ⭐4.6 (809 Reviews)
   - Asian, Thai | $$-$$$
   - Umgebung: Süd-Pattaya
   - Besonderheit: "TOP Qualität, zuvorkommender Service"
   - Google Maps: RECHERCHE selbst

2. **MAYs Pattaya** ⭐4.6 (671 Reviews)
   - Asian, Thai | $$-$$$
   - Umgebung: Zentrum
   - Besonderheit: "Ein Kleinod in Pattaya"
   - Google Maps: RECHERCHE selbst

3. **Jasmin's Cafe Pattaya** 🏆 Travellers' Choice ⭐4.5 (811 Reviews)
   - Cafe, Asian | $ (günstig)
   - Besonderheit: "Pattaya Geheimtipp"
   - Google Maps: RECHERCHE selbst

4. **Five Star J Vegetarian Restaurant** ⭐4.7 (843 Reviews)
   - Vegan/Vegetarisch, International | $$-$$$
   - Besonderheit: Höchste Bewertung!
   - Google Maps: RECHERCHE selbst

5. **Mae Sri Ruen Thai Food** ⭐4.2 (57 Reviews)
   - Thai | $$-$$$
   - Umgebung: Nord-Pattaya/Naklua
   - Google Maps: RECHERCHE selbst

6. **Kiss Food & Drinks** ⭐3.7 (805 Reviews)
   - Thai, günstig | $
   - Umgebung: Walking Street Nähe
   - Google Maps: RECHERCHE selbst

7. **Mae Sri Reun** ⭐4.1 (92 Reviews)
   - Thai, günstig | $
   - Besonderheit: "Bestes Thai Lunch"
   - Google Maps: RECHERCHE selbst

8. **Pad Lay Pattaya**
   - "Signature-flavor from the gulf of Thailand"
   - Homemade Pad Thai mit lokalen Zutaten
   - Tel: +66 64 575 0860
   - Google Maps: RECHERCHE selbst

9. **PJ Tavern**
   - Authentic Thai Restaurant & Fresh Seafood
   - Spezialität: River Prawn Pad Thai
   - Google Maps: RECHERCHE selbst

10. **Tai Thai Restaurant**
    - Facebook-Empfehlung: "Easily one of the best places for Thai food in Pattaya"
    - Google Maps: RECHERCHE selbst

### Zusätzliche Platzhalter/Honorable Mentions:
- Jomtien Night Market (Street Food Pad Thai)
- Walking Street Food Stalls

## SPRACHE (MULTILINGUAL — ERSTMALIG!)

Die Website muss DREI SPRACHEN unterstützen:

1. **🇩🇪 Deutsch** (Standard)
2. **🇬🇧 English**
3. **🇹🇭 ไทย (Thai)**

Implementierung:
- Jede Sprache eigene URL: `/de/`, `/en/`, `/th/`
- Sprachwechsler in der Navigation (Flaggen-Icons oder Kürzel)
- Alle Inhalte vollständig in ALLEN drei Sprachen übersetzt
- Für Thai: Verwende Google Translate oder echte Thai-Übersetzung — wichtig: Lokalisierung, nicht nur Maschinenübersetzung
- hreflang-Tags im `<head>` für SEO
- Structured Data (Schema.org) in Englisch als default

## SEO-ANFORDERUNGEN (WICHTIG!)

- **Sitemap.xml** mit allen URLs in allen Sprachen
- **Robots.txt**
- **Open Graph Tags** (og:title, og:description, og:image, og:locale)
- **Schema.org/LocalBusiness** für jedes Restaurant
- **Geo-Tags** für Pattaya:
  - Latitude: 12.9236
  - Longitude: 100.8825
- **Keywords**: Pad Thai Pattaya, beste Pad Thai Pattaya, Pattaya Street Food, Thai Food Pattaya, Pad Thai Jomtien, günstig essen Pattaya
- **hreflang** Tags für de/en/th
- **Meta Descriptions** pro Seite und Sprache
- **Google Maps Links** für jedes Restaurant (mach ich separat — aber du KANNST selbst recherchieren!)

## SEITENSTRUKTUR

1. **Home** (`/`) — Hero + Top 10 Vorschau + CTA
2. **Top 10 Liste** (`/[lang]/top-10`) — Vollständige Liste mit Karten
3. **Restaurant Detail** (`/[lang]/restaurant/[slug]`) — Einzelseite pro Restaurant
4. **Geo/Area Guide** (`/[lang]/areas/jomtien`, `/[lang]/areas/naklua`, `/[lang]/areas/walking-street`) — Nach Stadtteilen
5. **Über das Projekt** (`/[lang]/about`)
6. **Impressum/Kontakt** → Pattaya-basiert

ODER alternativ: Einseitige App mit Sektionen. Entscheide selbst was besser performt.

## WAS DU TUN SOLLST (Schritt für Schritt)

1. Erstelle das Projekt in `/data/pad-thai-pattaya/`
2. Initialisiere Git (`git init`)
3. Wähle deinen Stack und konfiguriere alles
4. Erstelle alle Dateien — Design, Content, SEO, Multilingual
5. Google Maps Links: **RECHERCHE SELBST via Web-Suche** für jedes Restaurant
6. Baue mit `npm run build` (oder entsprechendem Befehl)
7. Der Build MUSS fehlerfrei sein (exit 0)
8. Erstelle `.github/workflows/deploy.yml` für GitHub Pages

## WICHTIGE REGELN
- **KEINE lokalen Dev-Server starten** — nur Build
- **KEINE echten API-Keys** hinterlegen
- KEINE Paywall, KEIN Tracking (ausgenommen minimales GA4 optional)
- Alle Restaurant-Bewertungen faktenbasiert aus TripAdvisor Daten
- Google Maps Links MÜSSEN echt und funktional sein — recherchiere sie
- **BAUE SELBSTSTÄNDIG** — lies das gesamte Briefing, dann führe es aus
- **BUILD FEHLERFREI** — prüfe den Build-Exit-Code

## ZUSÄTZLICHE FEATURES (nice to have)
- "Auf Google Maps öffnen" Button pro Restaurant
- Preisvergleichs-Anzeige (Pad Thai Preis in THB)
- Öffnungszeiten (wenn recherchierbar)
- Lazy Loading für Performance
- Print-CSS für Speisekarten-Optik
- "Near Me" / Bereichsfilter (Walking Street, Jomtien, Naklua, Zentrum, Pratumnak)

---

**Los geht's! 🍜🔥**
