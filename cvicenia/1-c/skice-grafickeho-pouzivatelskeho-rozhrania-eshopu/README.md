# Skice grafického používateľského rozhrania eshopu

## Inicializácia semestrálneho projektu

**Vyberte si a oboznámte sa s nástrojom na vytváranie skíc** grafického používateľského rozhrania webových stránok (angl. [wireframe](https://en.wikipedia.org/wiki/Website_wireframe)). [Figma](https://www.figma.com/), odporúčam. Môžete použiť akýkoľvek iný nástroj, [zoznam ďalších nástrojov nájdete na konci stránky](#nastroje).

**Vašou úlohou je zvoliť si doménu eshopu** (napr. elektro, oblečenie, obuv, nábytok) a **vytvoriť skice** (aspoň) pre tieto stránky:

* **hlavná stránka** (angl. [homepage](https://en.wikipedia.org/wiki/Home_page), niekedy tiež [landing page](https://en.wikipedia.org/wiki/Landing_page)) 
* **zobrazenie prehľadu všetkých produktov** z vybratej kategórie, s možnosťou základného filtrovania, rozumne stránkovaných (ak je to potrebné)
* **stránka s detailom o produkte** s možnosťou vloženia produktu do nákupného košíka
* **nákupný košík** s možnosťou vytvorenia objednávky
    * pozostávajúci aspoň z troch krokov, a to: sumarizácia daných položiek v košíku, výber dopravy a platby, dodacie údaje 
* **prihlásenie a registrácia používateľa** (v prípade použitia "vyskakovacieho" panelu na prihlásenie sa používateľa je potrebné toto ilustrovať na niektorej z vytvorených stránok)

**Vytvorte skice jednotlivých stránok pre zariadenia extra large (desktop, >= 1200px)**

**Pozrite si, čo sú [responsive breakpoints](https://getbootstrap.com/docs/5.0/layout/breakpoints/)**.

**Pozrite si ukážku** [úvodnej stránky](zdroje/vsehochut-eshop-priklad.pdf). Aspoň taká by mala byť tiež úroveň abstrakcie vašich skíc.

**Pozorne si prečítajte nasledujúci text/rady.**

## Naskicujme svoju ideu/predstavu
Predtým ako začneme "patlať" niečo v Adobe Photoshop alebo v nejakom inom grafickom editore, popremýšľajme, chvíľu, ako budeme štrukturovať náš dizajn. Uchopme teda ceruzku a papier a začnime skicovať naše obrazovky...

To, čo musíme urobiť je popremýšľať nad našimi stránkami, určiť celkové usporiadanie/hierarchiu každej stránky (angl. page layout), identifikovať aké prvky potrebujeme (chceme), nájsť im miesto, experimentovať s ich veľkosťou, dôrazom/dôležitosťou.
Pri návrhu pre zákazníka je dôležité sa čo najlepšie zoznámiť s produktom. Aj k tomu sú skice vynikajúcim prostriedkom.

Skica webovej stránky (angl. web page wireframe) je zjednodušená vizuálna reprezentácia dizajnu/grafického používateľského rozhrania webovej stránky. Používa sa na odkomunikovanie týchto detailov (uvedené príklady reflektujú [tento návrh](zdroje/vsehochut-eshop-priklad.pdf)):
* **Aké funkcie má stránka obsahovať?**
  * výber produktov podľa kategórie, zobrazenie odporúčaných produktov, zobrazenie najnovších produktov, prihlásenie používateľa, zobrazenie košíka, ...
* **Čo bude zobrazené na predmetnej stránke?**
  * menu s kategóriami produktov – položky: Domov (všehochuť.sk), Počítače a elektro ...
  * výber najnovších produktov
  * niekoľko odporúčaných produktov
  * veľký reklamný banner
  * vyhľadávanie v produktoch
  * prihlásenie používateľa,
  * logo
  * ...
* **Akou formou budú informácie/komponenty zobrazené/prezentované a ako budú jednotlivé prvky/časti rozhrania rozmiestnené?**
  * menu s kategóriami bude vo vrchnej časti pod logom a vyhľadávaním, orientované horizontálne, zoznam kategórií
* **Ako budú informácie usporiadané?**
  * položky v menu budú v tomto poradí: všehochuť.sk, Počítače a elektro...
* **Ako bude používateľ interagovať s rozhraním, aká je spätná väzba a ako sa správajú jednotlivé komponenty?**
  * vyhľadávanie – používateľ klikne myšou na vstupné pole, text „Sem napíšte hľadané slovo“ zmizne, používateľ napíše hľadaný výraz, vyhľadávanie potvrdí stlačením klávesu ENTER, ak klikne mimo pola, napísaný text zostane v poli (ak chceme/potrebujeme ešte vyššiu podrobnosť, napr. kliknutím na vstupné pole sa toto rozšíri/zväčší sa jeho dĺžka)  

Pri vytváraní skice stránky skúšame rôzne vizuálne umiestnenia pre každý prvok. Sú určité návrhové úzusy/vzory (angl. user interface design patterns), ktoré je dobré dodržiavať, lebo sú na ne používatelia zvyknutí, napr. umiestnenie nákupného košíka - vpravo hore. Čo ak by sme ho umiestnili vľavo hore? ;-)

Držme sa [vzorov](http://ui-patterns.com/), prílišné experimentovanie a extravagantné prvky, najmä v (ovládacích) komponentoch rozhrania a navigácii sa nemusia oplatiť. Na určovanie hlavných trendov sú tu väčšinou iní - veľkí hráči  ([material design](https://material.io/guidelines/), [fluent design](https://www.microsoft.com/design/fluent/#/)). Samozrejme, kreativitou a inováciami sa môžeme odlíšiť a zaujať, v dnešnej dobe je to až nevýhnutnosť (spolu s dobrým marketingom ;-)), ale všetko s mierou. Pýtajme sa na názory ľudí - používateľov/zákazníkov.  

Úroveň podrobností je veľmi dôžitá (angl. fidelity levels), závisí, čo chceme odkomunikovať, a v ktorej fáze návrhu sa nachádzame. V počiatočnej fáze sú vhodné skice s nízkou úrovňou podrobností (angl. low fidelity wireframes, lo-fi). Takéto skice sú určené na to, aby boli vytvorené rýchlo a lacno, ale zároveň zachytili podstatné aspekty návrhu, vrátane funkcionality rozhrania a správania jednotlivých častí. Nemusia byť pekné. Poskytujú základné informácie o usporiadaní stránky (angl. page layout), umožňujú tiež určiť typ(y) obsahu, definovať informačnú hierarchiu.

Nemali by sme riešiť, ako budú vyzerať jednotlivé prvky z hľadiska ich grafického stvárnenia - umeleckého prevedenia, napr. či bude tlačidlo obdĺžnikové, alebo elipsovité, či bude mať červený rámik a transparentné pozadie, či použijeme plochý dizajn (angl. [flat design](https://en.wikipedia.org/wiki/Flat_design)). Snažme sa, aby boli naše skice nespútané, aby to boli dostatočne presné, ale zároveň hrubé náčrty zachytávajúce potrebné prvky, aby sme boli schopní diskutovať o návrhových rozhodnutiach/nápadoch a pružne ich meniť.

Skice s vysokou úrovňou podrobností (tiež blokové schémy, angl. high fidelity wireframes, hi-fi) sú vernejšie - približujú sa k realistickým maketám (angl. mockup). Zväčša sú to až akýsi medzi-výsledok práce grafického dizajnéra, ktorý postupne vytvára makety rozhrania z lo-fi skíc. Grafik dáva dômyselným aplikovaním [základných princípov dizajnu](https://vanseodesign.com/downloads/learn-design-fundamentals/) jednotlivým prvkom tvár, význam a dôležitosť. 

Kreslenie rozhraní treba dostať do ruky, môžeme sa inšpirovať rukou kreslenými komponentami grafického používateľského rozhrania, príp. si ich vytlačiť a postrihať a pomocou nich vytvoriť prvotné obrazovky:

* [Menus, buttons, form fields](zdroje/handdrawnUI-menus-buttons-formfields.pdf)
* [Breadcrumbs, bullets, arrows, process, UI extras](zdroje/handdrawnUI-breadcrumbs-bullets-arrows-process-uiextras.pdf)
* [Progress bars, ratings, user frames, avatars](zdroje/handdrawnUI-progressbars-ratings-userframes-avatars.pdf)
* [Tabs, login, pagination, tags](zdroje/handdrawnUI-tabs-login-pagination-tags.pdf)
* [Dividers, lines](zdroje/handdrawnUI-dividers-lines.pdf)
* [Ribbons, banners](zdroje/handdrawnUI-ribbons-banners.pdf)
* [Sliders](zdroje/handdrawnUI-sliders.pdf)
* [Tooltips, notifications](zdroje/handdrawnUI-tooltips-notifications.pdf) 

Pamätajme, prechod/tok používateľa/nášho zákazníka webom (angl. user flow) by mal byť intuitívny, a teda, aby našiel v správnom okamihu, na očakávanom mieste to, na čo práve myslí/potrebuje. Zosobnime sa s cieľovými používateľmi/zákazníkmi.

### 1. Na začiatku sa vyhnime farbám
Farba je mocný nástroj, ale vo fáze vytvárania skíc môže byť rušivá/kontrakproduktívna. Preferujme stupne šedej (angl. grayscale), šedá je neutrálna. Ak potrebujeme používať farbu, používajme ju dômyselne. V diskusii (s klientom) môže nesprávny výber farby spôsobiť, že namiesto podstaty a o návrhových rozhodnutiach budeme hovoriť a farebnej palete, ktorú preferuje klient (klient môže považovať celý návrh za zlý, a to "iba" kvôli farbám). Celé spektrum šedej nám umožňuje dávať (často dostatočne) rôznym prvkom rôznu dôležitosť/akcent (tmavo-šedá upúta skôr pozornosť ako svetlo-šedá). Tým, že zadefinujeme prvkom dôležitosť určujeme tok používateľa (jeho smerovanie pohľadu) po stránke. Tento tok by mal reflektovať naše/zákazníkové očakávania/požiadavky - biznis ciele, [konverzie](https://en.wikipedia.org/wiki/Conversion_rate_optimization). Použitie rôznych stupňov šedej nám/grafikovi tiež uľahčí vytváranie výslednej podoby dizajnu stránky.

### 2. Konzistencia
Skice sú nástrojom, ktorý nám má pomôcť proces vývoja uľahčiť. Ak budú mať podobné prvky podobný vzhľad a funkciu, potom si ľudia/používatelia ľahšie prenesú poznatky do nových kontextov a rýchlejšie sa naučia nové veci, pochopia im. Používajme rovnaký jazyk, šablóny, (zaužívané) vzory a komponenty správne. Ak budeme [konzistentní](https://uxdesign.cc/design-principle-consistency-6b0cf7e7339f), vyhneme sa aj odvracaniu pozornosti od dôležitých aspektov. Buďme konzistentní, ale nie jednotvárni a nudní. Existujúce nástroje určené na formovanie konceptov webových stránok/prototypovanie nás podporujú v konzistencii.

### 3. Reálny obsah
Ak nemáme textový obsah, napíšme/požadujme ho. Písanie [cieleného/vhodného/trefného textu](https://www.fastcodesign.com/3026463/from-google-ventures-5-rules-for-writing-great-interface-copy) si vyžaduje skúsenosti - existujú na to profesionálne agentúry, [copywriter](https://en.wikipedia.org/wiki/Copywriting) je povolanie. V začiatkoch  text nemusí byť perfektný. 

Je dôležité, aby sme vedeli odhadnúť reálnu dĺžku/rozsah textu v častiach s fixnými/ohraničenými rozmermi. Ak nebudeme uvažovať hraničné dĺžky textov, môžeme byť nemilo prekvapení, keď sa nám vizuál neskôr "rozbije", napr. text začne  "pretekať" medzi jednolivými blokmi, tlačidlo sa začne prekrývať s obsahom. Pozor však na priveľa textu, môže aj zatieniť náhľad na celkové rozloženie prvkov - môže sa to prejaviť neskôr. Ak potrebujeme, pripravme si viacero variantov, na ktorých chceme ilustrovať predmetné aspekty návrhu.    

### 4. Pýtajme sa na názor iných
Celé je to o zdielaní a prezentovaní nápadov, myšlienok. Keď umožníme, aby ich pochopili aj iní, ich potenciál sa môže znásobiť. Nie sme experti na všetko, často ani doménoví experti, nechajme ego stranou. Sme vývojári, vieme softvér navrhovať, programovať, ale nepoznáme odpovedene na všetky otázky - ako sa bude v danej situácii správať používateľ, aké má zvyky? Je potrebná spolupráca, diskusia.

### 5. Buďme selektívni a robme veci jednoduchými
Keď máme veľa nápadov mávame tendenciu ich spojiť, prepojiť, aby všetko spolupracovalo, postupne miešame prvky z jedného nápadu s druhým, vzníká "guláš", v ktorom je zrazu všetko dôležité, vzniká zmätok, začíname sa strácať. Každému nápadu dajmä svoj vlastný priestor.

### 6. Zvoľme úroveň podrobnosti aká je potreba
Skice sa radia do tzv. prototypov s obmedzenou/nízkou úrovňou podrobností (angl. [low fidelity representation vs. high fidelity representation](https://www.nngroup.com/articles/ux-prototype-hi-lo-fidelity/)). Avšak aj samotné skice môžu mať rôznu úroveň podrobnosti/abstrakcie, štýl, precíznosť prevedenia. "Low-fidelity" neznamená nerealistický. Ak chceme skice viac realistické, môžeme sa viac pohrať napr. s textom, s výberom vhodného/ideálneho písma, experimentovať s veľkosťou, silou/tučnosťou (angl. font weight), variantom (kapitálky), štýlom (kurzivá).

Pridanie textu nám umožňuje variovať s jeho veľkosťou, dôrazom a poradím. Je dobré organizovať prvky stránky do [mriežky](https://www.w3schools.com/css/css_rwd_grid.asp) (angl. grid view)). Mriežka dáva vodítka na jednoduchšie umiestnenie prvkov na stránke. Svojou podstatou však dáva celkovému vizuálu stránky ucelenú formu, prehľadnosť, prvky majú následnosť. Používateľom uľahčuje (vizuálne) vyhľadávanie a navigovanie sa. Poskytuje konzistenciu naprieč niekoľkými (pod)stránkami, prináša štrukturálnu harmóniu.            

Použitím ďalších farieb, môžeme tiež prispieť k realističnosti skíc (treba mať ale na pamäti 1. bod). Ofarbenie pozadia, tlačidla, textu môže zvýšiť dôležitosť jednotlivých prvkov, podporiť tok používateľa, zvýrazniť akcie nad rámec toho, čo môže ponúknuť odtieň šedej. Buďme ale opatrní, nepoužívajme "šialené" farby (napr. paletu kriklavých farieb). Riskujeme, že sa zníži efektivita farieb a tiež, že budeme venovať v tejto fáze neprimeráne úsilie niečomu, čo v konečnom dôsledku grafik úplne zmení. 

Realističnosť tiež môžeme podporiť obrázkami, pozadím, textúrou, avatarom, náhľadom, ikonou (napr. páčik, angl. like). Jednoduché grafické prvky, relevantné fotografie a videá sú častými "pomocníkmi" v produktoch orientovaných na obsah (angl. content-centric product). Umožňujú zaujať, robia obsah čitatelnejším, prehladnejším, platí staré známe - jeden obrázok je viac ako tisíc slov. Začlenenie grafických prvkov už v skicách môže mať svoje opodstatnenie, typ obsahu môže významne ovplyvniť celkovú štruktúru a informačnú hierarchiu. Treba ale opäť opatrne, fotografia by mal mať aj svoju hodnotu, a nie byť iba "dekoratívnym gíčom".

Návrh, reprezentovaný ako skica môže byť tiež klikateľný. Nie je to už v pravom slova zmysle skica, aj keď tak čo sa vizuálneho stvárnenia vyzerá. Mnohé nástroje umožňujú vytvoriť "interaktívne skice". Môžeme tak ilustrovať základné správanie rozhrania, napr.  vyskakovacie/modálne/dialogové okná, rozšírenie alebo zväčšenie obsahu, rôzné gestá ako kliknutie, posunutie (angl. scrolling, swiping). Nemali by sme však začínať interaktívnymi prototypmi.

Keď máme k dispozícii iba ceruzku a papier, máme k dispozícii jednu farbu a písmo, do momentu, keď sa rozhodneme siahnúť po hrubšiu ceruzku (s inou farbou). Prototypovacie nástroje tiež limitujú naše možnosti - hrúbku čiary, farby, typy písma. Zatiaľ čo [Balsamiq](https://balsamiq.com) je v tomto významne limitujúci, [Axure](https://www.axure.com/) poskytuje významne viac flexibility. Nezabúdajme, niekedy, je menej viac. Aj kvôli tomu, že mnohé nástroje umožňujú vytvárať ako skice, tak aj prototypy, a kombinovať ich, [pojmy - wireframe, mockup, prototype - sú často používané nesprávne](#vs-wireframe-mockup-prototype).

### 7. Nevytvárajme si vzťah ku skicám
Nie sú to očarujúce umelecké diela. Skicovanie je prostriedok na rýchle formovanie nápadov, protypovanie v počiatočných fázach vývoja. Musíme byť ochotní zaoberať sa zmenami vyplyvajúcimi z diskusie a požiadaviek. Buďme variabilní a otvorení zmenám.

### 8. Zariadenia, rozlíšenia obrazoviek
Rozmanitosť zariadení a rozlíšení je veľká ([štatistiky o najpoužívanejších rozlíšeniach zariadení](http://gs.statcounter.com/screen-resolution-stats)). Je potrebné vytvoriť skice pre rôzne rozlíšenia. Nie je dobré spoliehať sa, že responzívny rámec (angl. responsive design framework) za nás všetko vyrieši. Je potrebné prispôsobovať návrh - rozhranie (pridávať/odoberať) funkcie s ohľadom na technické možnosti zariadenia, komfort a potreby používateľa.

### 9. Ekosystémy a pravidlá
Aj skice už vytvárajme s ohľadom na ekosystém. Nie je dobré miešať hrušky s jablkami. Ak navrhujeme aplikáciu, napr. pre Android, riaďme sa pravidlami [Material dizajnu](https://material.io/guidelines/). Komponenty typické pre Android, navigačné prvky, nemusia byť samozrejmosťou (ani nie sú) na [zariadeniach od Appleu](https://developer.apple.com/design/), a opačne (aj keď toto platí skôr pri natívnych aplikáciach).


 ## <a name="vs-wireframe-mockup-prototype"></a>Wireframe vs. Mockup vs. Prototype
 
 ### Wireframe (skica)
 Je reprezentácia návrhu/dizajnu (používateľského rozhrania) s nízkou vernosťou podrobností (angl. low fidelity representation). Mala by jasne ukazovať:
 * ČO? - hlavný obsah/skupiny obsahu
 * KDE? - štruktúra informácií
 * AKO? - opis a základná vizualizácia interakcie používateľského rozhrania
 
 Mala by zobrazovať/ilustrovať každý dôležitý prvok konečného produktu. Mala by byť vytvorená rýchlo a čas by mal byť vyhradený/využitý prevažne na komunikáciu (v tíme, so zákazníkom).
 
 * Podrobnosť: nízka presnosť (angl. low fidelity)
 * Cena: €
 * Použitie: dokumentácia, rýchla komunikácia, názory, overenie základného toku
 * Charakteristika: náčrt, reprezentácia čierno-biela/v stupnici šedej  
  
 ### Mockup (skoro/realistická maketa dizajnu)
 Je reprezentácia návrhu/dizajnu (používateľského rozhrania) so strednou až vysokou vernosťou podrobností (angl. middle to high fidelity representation). Veľmi často je výstupom realistický - skutočný vizuálny dizajn, alebo takmer realistický vizuálny dizajnový koncept. Mal by:

 * reprezentovať štruktúru informácií, vizualizovať obsah a demonštrovať základnú funkcionalitu statickou formou (obrazovky)
 * stvárnenie všetkých prvkov by malo umožniť ľuďom posúdiť vizuálnu stránku projektu
 
 * Podrobnosť: stredná až vysoká presnosť (angl. middle to high fidelity)
 * Cena: €€
 * Použitie: na získanie názoru/spätnej väzby od zainteresovaných strán
 * Charakteristika: statická (skoro)realistická vizualizácia
  
  
  ### Prototype (interaktívny prototyp)
  Je interaktívna reprezentácia finálneho produktu (používateľského rozhrania) so strednou až vysokou vernosťou podrobností (angl. middle to high fidelity representation]). Mal by umožniť používateľovi:
  
  * "zažiť" obsah a interagovať s rozhraním
  * testovať hlavné interakcie veľmi podobne až rovnako ako v konečnom produkte
  
  * Podrobnosť: stredná až vysoká presnosť (angl. middle to high fidelity)
  * Cena: €€€
  * Použitie: testovanie používateľov - použiteľnosť, znovupoužiteľný základ rozhrania 
  * Charakteristika: interaktívny (skoro) realistický prototyp (nie je potrebná implementácia "backendu")
   
   
 ## Literatúra
 * [The Guide to Wireframing: For Designers, PMs, Engineers and Anyone Who Touches Product](zdroje/the_guide_to_wireframing.pdf)
 
 ## <a name="nastroje"></a> Nástroje
 * [Mockflow](https://mockflow.com/)
 * [Balsamiq](https://balsamiq.com/) 
 * [Axure](https://www.axure.com/)
 * [Proto.io](https://proto.io/)
 * [InVision](https://www.invisionapp.com/)
 * [UXPin](https://www.uxpin.com/)
 * [Justinmind](https://www.justinmind.com/)
 * [Adobe XD](https://www.adobe.com/products/xd.html)
 
 ## Ďalšie užitočné zdroje
 * [5 steps to planning a successful website](https://www.creativebloq.com/features/5-steps-to-planning-a-successful-website)
 * [Wirify](https://www.wirify.com/) - Wirify premení každý web na skicu
 * [Wireframe Showcase](http://wireframeshowcase.com/) - veľa príkladov skíc, bez UI vzorov
 * [Web Without Words](http://webwithoutwords.com/) - galéria populárnych webov prerobených do jednoduchých skíc
 * [Wireframes To Go](https://wireframestogo.com/) - veľa príkladov skíc, bez UI vzorov
 * [PatternTap](http://patterntap.com/patterntap) - veľa UI dizajnových vzorov
 * [UX Archive](http://uxarchive.com/) - veľa UI dizajnových vzorov, zamerané na tok
 * [UI Patterns](http://ui-patterns.com/patterns) - veľa UI dizajnových vzorov
 * [pttrns](https://pttrns.com/) - veľa UI dizajnových vzorov pre mobily
 * [John Ferris - Layout Design Patterns](http://pixelwhip.github.io/layout-design-patterns/#/title-slide)

 ## Slovník, preklad anglických pojmov
 * webpage - webová stránka, konkrétny dokument (HTML)
 * website - webové stránky, alebo web (s malým "w") - kolekcia tématicky príbuzných webových stránok
 * web application - webová aplikácia, aplikácia typu klient-server, kde klient beží vo webovom prehliadači
 * low fidelity representation (graphical user interface) - reprezentácia s nízkou vernosťou/presnosťou podrobností grafického používateľského rozhrania (nízkoúrovňová reprezentácia)
 * high fidelity representation - reprezentácia s vysokou vernosťou/presnosťou podrobností (vysokoúrovňová reprezentácia)
 * wireframe - skica používateľského rozhrania
 * mockup - realistická maketa dizajnu používateľského rozhrania
 * prototype - interaktívny prototyp používateľského rozhrania
 * frontend - prezentačná vrstva/používateľské rozhranie (na strane klienta)
 * backend - dátová, príp. logická vrstva (na strane servera)
