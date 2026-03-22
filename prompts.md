# Prompts – historie komunikace

---

## 2026-03-11 – Inicializace projektu

**Shrnutí požadavku:**
Vytvořit celý mini travel web o cestě do Vietnamu pro 2 osoby (6.–20. 4. 2025, Hanoi → Ho Chi Minh City).
Požadavky: itinerář na 15 dní, jednoduché HTML/CSS bez frameworků, čitelné offline, vše v češtině.

**Data cesty:**
- 2 cestující
- Přílet Hanoi 6. 4. 11:55
- Odlet Ho Chi Minh City 20. 4. 05:10
- Zájmy: příroda, historie, jídlo
- Tempo: aktivní, ale ne uspěchané
- V Hanoji první 3 dny

**Změněné soubory:**
- `index.html` – hlavní stránka, infoboxy, přehledová tabulka, navigace
- `itinerary.html` – 15 day-cards s popisem, TAG štítky, kotvy po místech
- `transport.html` – timeline letů, tabulka přesunů, grid karet, tipy na aplikace
- `food.html` – sever/střed/jih sekce, kartičky jídel, pravidla street foodu, káva
- `tips.html` – peníze, SIM, zdraví, bezpečnost, kultura, klima tabulka, vietnamské fráze
- `style.css` – kompletní design (barvy, karty, timeline, hero, responzivita, dark nav)
- `script.js` – hamburger menu, aktivní odkaz v nav, odpočítávání do příjezdu
- `memory.md` – fakta o cestě, termíny, preference, potvrzená rozhodnutí, rozpočet
- `summary.md` – přehledová tabulka itineráře, stav webu
- `prompts.md` – tento soubor

---

## 2026-03-11 – Fáze 3: Detailní denní stránky + rozpočet

**Shrnutí požadavku:**
Rozšíření itinerary.html o detailní denní stránky s programem, Google Maps embedem a navigací.
Vytvoření nové stránky budget.html s rozpisem nákladů v Kč.

**Co bylo vytvořeno / změněno:**

- `style.css` – přidány CSS třídy: `.map-wrap`, `.schedule-block` (.morning/.afternoon/.evening), `.sched-time/title/desc/cost`, `.day-nav`, `.budget-total`, `.progress-bar-wrap`
- `budget.html` – doprava ~9 100 Kč, ubytování ~10 800 Kč, jídlo ~15 000 Kč, vstupy ~3 740 Kč; celkem BEZ letenek: **~47 980 Kč**
- `itinerary.html` – přidány odkaz "🔍 Detail dne →" ke každé z 15 day-cards + nav odkaz Rozpočet
- Všechny HTML soubory – přidán nav odkaz "Rozpočet"
- `itinerary1.html` – Den 1: Přílet Hanoi, Hoan Kiem, Bia Hoi Corner
- `itinerary2.html` – Den 2: Mausoleum, Temple of Literature, Ethnology Museum
- `itinerary3.html` – Den 3: West Lake, Tran Quoc Pagoda, Dong Xuan trh
- `itinerary4.html` – Den 4: Ninh Binh, plavba Trang An (UNESCO), Hoa Lu
- `itinerary5.html` – Den 5: Mua Cave, Bich Dong, noční vlak do Hue
- `itinerary6.html` – Den 6: Hue Citadela UNESCO, Dragon Boat na Perfume River
- `itinerary7.html` – Den 7: Hrobky Hue (Minh Mang, Tu Duc, Khai Dinh), minibus do Hội An
- `itinerary8.html` – Den 8: Hải Vân Pass, Hội An Old Town UNESCO
- `itinerary9.html` – Den 9: Hội An – krejčí, cooking class, noční trh
- `itinerary10.html` – Den 10: My Son UNESCO, let Da Nang → Da Lat
- `itinerary11.html` – Den 11: Crazy House, Xuan Huong Lake, Da Lat Night Market
- `itinerary12.html` – Den 12: Kávová plantáž K'Ho, Datanla Falls, let Da Lat → HCMC
- `itinerary13.html` – Den 13: Reunification Palace, Ben Thanh, War Remnants Museum, Bui Vien
- `itinerary14.html` – Den 14: Cu Chi Tunnels, Jade Emperor Pagoda, Cholon, rozlučková večeře
- `itinerary15.html` – Den 15: Poslední káva, transfer SGN, odlet domů

