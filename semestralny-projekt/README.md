# Semestrálny projekt - elektronický obchod

## Zadanie

Vytvorte webovú aplikáciu - eshop, ktorá komplexne rieši nižšie definované prípady použitia vo vami zvolenej doméne (napr. elektro, oblečenie, obuv, nábytok). Presný rozsah a konkretizáciu prípadov použitia si dohodnete s vašim vyučujúcim.

## Tím

Projekt vypracovávate vo dvojici. Každý z dvojice sa musí podieľať na
projekte významným dielom (rovnomerné rozdelenie práce). Vypracovanie (takmer) celého projektu len jedným členom tímu je neprípustné. Je potrebné, aby boli obaja členovia tímu oboznámení s celým projektom, vrátane častí, na ktorých sám študent nepracoval. Členovia tímu sú hodnotení rovnakým získaným počtom bodov. Bodové hodnotenie sa viaže na celý tím (každý člen tímu dostane rovnaký počet bodov).

## Github repozitár

Projekt musí mať vytvorený github repozitár. Každý člen tímu odovzdáva príspevok (kód) do projektu do vytvoreného repozitára. Odovzdania kódu v repozitári musia byť rovnomerne rozložené, a teda plnia funkciu "dôkazu", kto a akým podielom prispel do projektu. Je v záujme každého študenta, aby jeho príspevok v projekte reflektovali odovzdania kódu do repozitára. Nízky príspevok do projektu môže byť dôvod na zníženie bodového hodnotenia jednotlivca (až na nulu).

## Autorstvo

Je zakázané používať programy alebo časti projektov od iných študentov, alebo z minulých rokov. Všetky použité materiály z odbornej literatúry alebo z internetu musia byť citované. Ak použijete cudzí materiál a neuvediete zdroj, práca môže byť považovaná za plagiát. Ak použijete fragmenty kódu z internetu, do komentára stačí uviesť (URL) adresu na zdroj. Projekt nesmie byť kompilátom cudzích zdrojových kódov, musí obsahovať značnú časť kódu vytvoreného (tvorivou činnosťou) členmi tímu.

## Termíny odovzdania

- **Odovzdanie 1. fázy projektu: koniec 6. týždňa - 30.3. do 23:59 v AIS, 24 bodov,**
  - vytvorenie skíc jednotlivých stránok pre zariadenia extra large (desktop), odporúčaný nástroj Figma (max. 6 bodov)
  - vytvorenie responzívnych šablón (max. 15 bodov)
  - návrh fyzického dátového modelu reprezentovaný UML class diagramom (3 body)
- **Odovzdanie 2. fázy projektu: koniec 12. týždňa - 11.5. do 23:59 v AIS, 24 bodov**
  - implementácia klientskej časti eshopu so zostavením na serveri (server-side rendering) s využitím PHP rámca (odporúčaný Laravel) (max. 14 bodov)
  - implementácia administrátorského panela/admin zóny so zostavením na serveri (server-side rendering) s využitím PHP rámca (odporúčaný Laravel) (max. 7 bodov)
  - finálna dokumentácia (max. 3 body)

## Konzultácie k projektu

Cvičenia majú konzultačný charakter. Konzultácie k projektu budú prebiehať na cvičeniach.

## Termíny prezentovania

V čase cvičení tím predvedie na svojom počítači svoje riešenie (fázy projektu), a to:

- **Prezentovanie 1. fázy projektu, na cvičení: 7. týždeň**
- **Prezentovanie 2. fázy projektu, na cvičení: 13. týždeň**
  Na prezentácii musia byť všetci členovia tímu.

## Aplikácia - eshop

**Aplikácia musí realizovať tieto prípady použitia:**

**Klientská časť**

- zobrazenie prehľadu všetkých produktov z vybratej kategórie používateľom
  - základné filtrovanie (aspoň podľa 3 atribútov, napr. rozsah cena od-do, značka, farba)
  - stránkovanie
  - preusporiadanie produktov (napr. podľa ceny vzostupne/zostupne)
- zobrazenie konkrétneho produktu - detail produktu
  - pridanie produktu do košíka (ľubovolné množstvo)
- plnotextové vyhľadávanie nad katalógom produktov
- zobrazenie nákupného košíka
  - zmena množstva pre daný produkt
  - odobratie produktu
  - výber dopravy
  - výber platby
  - zadanie dodacích údajov
  - dokončenie objednávky
  - umožnenie nákupu bez prihlásenia
  - prenositeľnosť nákupného košíka v prípade prihláseného používateľa
- registrácia používateľa/zákazníka
- prihlásenie používateľa/zákazníka
- odhlásenie zákazníka

**Administrátorská časť**

- prihlásenie administrátora do administrátorského rozhrania eshopu
- odhlásenie administrátora z administrátorského rozhrania
- vytvorenie nového produktu administrátorom cez administrátorské rozhranie
  - produkt musí obsahovať minimálne názov, opis, aspoň 2 fotografie
- upravenie/vymazanie existujúceho produktu administrátorom cez administrátorské rozhranie

## Dátový model

V 1. fáze projektu sa odovzdáva (JPEG, PNG) obrázok fyzického dátového modelu reprezentovaného UML class diagramom.

V 2. fáze projektu, sa databáza odovzdáva kompletná (dáta aj schéma, resp. DDL).

## Spôsob odovzdávania

Výstupy všetkých fáz projektu sa odovzdávajú do AISu. Odovzdáva iba jeden zo študentov v tíme. Dohodnite sa vopred, aby sa nestalo, že neodovzdá ani jeden.

Odovzdávajú sa všetky zdrojové kódy aplikácie, okrem samotných rámcov a knižníc z manažéra balíkov (composer, npm). V prípade, že študent modifikoval používanú knižnicu, je potrebné pribaliť aj zmenené knižnicu a uviesť zmenu s odôvodnením v dokumentácii.

Odovzdáva sa ZIP alebo RAR archív.

## Oneskorenie odovzdania

Odovzdanie v 1. alebo 2. fáze projektu sa môže oneskoriť maximálne o 3 dni.

Za každý deň oneskoreného odovzdania je tímu odobratých 25% bodov z pôvodného maxima (deň po termíne tím získa 3/4 bodov, dva dni po termíne 1/2, atď.)

Neskoršie odovzdanie nie je možné. Neodovzdanie niektorej časti projektu znamená nesplnenie podmienok absolvovania predmetu.

## Kontrolná fáza progresu implementácie (4 body)

V kontrolnej fáze - v 9. týždni - sa očakáva implementovaná klientská časť aplikácie. Fáza je hodnotená 4 bodmi, a to binárne. Tím letmo predvedie cvičiacemu funkčnosť klientskej aplikácie s ohľadom na požadované prípady použitia. Ak aplikácia umožňuje realizovať všetky prípady použitia (klientskej časti), každý študent z tímu získa 4 body. Kontrolný bod nie je povinný, neodovzdáva sa do AIS. Tieto body sú zahrnuté v celkovom hodnotení (max. 100 bodov z kurzu).

- **Kontrolný bod: 9. týždeň, na cvičení - 15.4. a 16.4, binárne hodnotenie 0/4 body** implementácia klientskej časti eshopu so zostavením na serveri (server-side rendering) s využitím PHP rámca (odporúčaný Laravel) - so všetkými funkciami podľa požiadaviek v stave na predvedenie

## Implementačné prostredie

### Povinné technológie:

- SSR Backend - Laravel rámec

### Odporúčané technológie:

- PostgreSQL relačný databázový systém

## Dokumentácia

Dokumentácia musí obsahovať minimálne tieto časti:

- zadanie
- diagram fyzického dátového modelu, v prípade zmien z 2. fázy, zdôvodniť zmenu
- návrhové rozhodnutia (pridanie externej knižnice - zdôvodenie, rolu sme riešili takto, nepoužili sme oprávnenia, lebo...)
- prog. prostredie (ak iné, ako odporúčané)
- strunčný opis implementácie vybraných prípadov použitia (zmena množstva pre daný produkt, prihlásenie, vyhľadávanie, pridanie produktu do košíka, stránkovanie, základné filtrovanie)
- snímky obrazoviek (angl. screenshot, snapshot) - detail produktu, prihlásenie, homepage, nákupný košík s vloženým produktom

## Spôsob hodnotenia

### 1. fáza projektu (max. 24 bodov)

- skice všetkých obrazoviek používateľského rozhrania pre dané prípady použitia (max. 6 bodov)
- šablóny vytvorené pre všetky požadované prípady použitia (max. 5b)
- responzívny dizajn (max. 5b)
- správne použitie HTML5 elementov (max. 4b)
- formátovanie a logická štruktúra zdrojového kódu,
  konzistencia/jednotná konvencia pri názvosloví identifikátorov (max. 2b)
- UML diagram fyzického dátového modelu (max. 2b)

### 2. fáza projektu

#### Klientská časť (max. 14 bodov)

- zoznam produktov - 2 body
  - filter
  - preusporiadanie /order/
  - stránkovanie
- detail produktu - 2 body
  - pridanie/odobratie z košíka
- plnotextové vyhľadávanie nad katalógom produktov - 2 body
- košík - 4 body
  - zoznam produktov
  - zmena množstva
  - odobratie
  - doprava/platba
  - údaje (s validáciou)
- prenositeľnosť košíka - 3 body
- zákazník - 1 bod
  - registrácia, prihlásenie, odhlásenie

#### Admin časť (max. 7 bodov)

- prihlásenie/odhlásenie (prihlásiť sa môžu používatelia s rolou ADMIN) - 1 bod
- zoznam produktov - 1 bod
- pridanie produktu - 2 body
  - s nahrávaním obrázkov
  - aspoň jeden číselník (viem si zo select-u vybrať napr. farbu)
- odobratie produktu - 1 bod
  - fyzické vymazanie obrázku
- úprava produktu - 2 body
  - s nahrávaním obrázkov
  - zoznam obrázkov s možnosťou odobratia obrázku

#### Dokumentácia (max. 3 body)

- zadanie
- diagram fyzického dátového modelu, v prípade zmien z 2. fázy, zdôvodniť zmenu - 1 bod
- návrhové rozhodnutia (pridanie externej knižnice - zdôvodenie, rolu sme riešili takto, nepoužili sme oprávnenia, lebo...) - 1 bod
- uviesť prog. prostredie (ak iné, ako odporúčané)
- strunčný opis implementácie vybraných prípadov použitia (zmena množstva pre daný produkt, prihlásenie, vyhľadávanie, pridanie produktu do košíka, stránkovanie, základné filtrovanie) - 2 body
- snímky obrazoviek (angl. screenshot, snapshot) - detail produktu, prihlásenie, homepage, nákupný košík s vloženým produktom d

**Každý študent musí vedieť vysvetliť ktorúkoľvek časť (kód) riešenia svojho tímu.**
