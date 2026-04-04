# AI Project Context

Tento projekt je mini travel web plánující cestu do Vietnamu.
AI asistent (Copilot) má pomáhat s plánováním itineráře a údržbou webu.

Veškeré texty generuj v češtině.

---

# Základní informace o cestě

Počet cestujících:
2 dospělí muži

Přílet:
Hanoj (HAN)
6. dubna 2026 v 11:55

Odlet:
Ho Či Minovo Město (SGN)
20. dubna 2026 v 05:10

Směr cesty:
sever → jih

Tempo cestování:
aktivní, ale ne uspěchané

Zájmy:
- příroda
- historie
- jídlo
- moře

Speciální požadavek:
- v Hanoji zůstat první 3 dny
- v průběhu cesty strávit 3 dny u moře
- na část přesunu použít lůžkový vlak v nějaké opravdu krásné části cesty 

---

# Cíl projektu

Vytvořit jednoduchý mini travel web obsahující:

- itinerář po dnech
- logistiku přesunů
- doporučená jídla
- praktické tipy
- odhad rozpočtu Vietnamese đồng a v českých korunách

Web musí být:

- přehledný
- jednoduchý
- čitelný i offline (nahraný do mobilu)

---

# Struktura projektu

index.html  
hlavní stránka s navigací

itinerary.html  
plán cesty po dnech

itinerary{{pořadové číslo dne}}.html  
podrobný rozpis na každý den 

transport.html  
přesuny mezi městy

food.html  
doporučená jídla a restaurace

tips.html  
praktické rady pro cestování

budget.html  
odhad nákladů

style.css  
styly webu

script.js  
jednoduchá interaktivita

---

# Kontextové soubory

memory.md  
obsahuje fakta o cestě a potvrzená rozhodnutí

summary.md  
stručné shrnutí aktuálního itineráře

prompts.md  
historie požadavků uživatele

ideas.md  
nápady na zlepšení itineráře

AI by měla tyto soubory průběžně aktualizovat.

---

# Pravidla práce AI

Při každém větším požadavku:

1. přečti soubory  
   memory.md  
   summary.md  
   prompts.md

2. analyzuj aktuální itinerář

3. pokud existuje lepší řešení logistiky nebo programu, navrhni jej

4. uprav relevantní HTML stránky

5. aktualizuj:

- summary.md
- prompts.md

6. pokud vznikne nový nápad nebo alternativa, zapiš ji do ideas.md

---

# HTML pravidla

Používej:

- čisté HTML
- jednoduché CSS
- responzivní layout
- sémantické tagy

například:

<header>
<nav>
<main>
<section>
<article>
<footer>

Nepoužívej složité frameworky.

---

# Obsah itineráře

Každý konkrétní den by měl obsahovat:

- lokalitu
- hlavní aktivity
- doporučené jídlo
- způsob dopravy
- orientační cenu
- google mapu s vyznačenými cíly 
- odkaz do goole navigace pro každý cíl

---

# Autonomní chování

Pokud AI zjistí:

- zbytečně dlouhý přesun
- turistickou past
- zajímavé místo poblíž

může navrhnout zlepšení itineráře.

Návrhy zapisuj do ideas.md.

---

# Styl textu

Texty musí být:

- informativní
- stručné
- praktické
- vhodné pro cestovní plánování