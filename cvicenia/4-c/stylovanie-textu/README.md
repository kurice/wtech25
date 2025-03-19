# CSS - Štýlovanie textu, zoznamov, odkazov, webové písma

CSS vlastnosti na štýlovanie textu je vo všeobecnosti možné rozdeliť do dvoch kategórií, a to tie, ktoré umožňujú definovať:
* štýl písma (veľkosť, tučné písmo, kurzivá)
* štýl bloku textu (zarovnanie textu, výška riadku, medzera medzi slovami)

## Štýl písma

### Farba
Vlastnosť `color` umožňuje nastaviť farbu písma. Rovnaká farba môže byť určená rôznymi spôsobmi. Hodnotou môže byť kľúčové slovo, napr. `red`, `green`, `blue`, `yellow`; hexadecimálna hodnota `#ff0000` (červená, skrátene tiež `#f00`), `#0f0` (zelená), `#00f` (modrá); alebo môžeme farbu určiť prostredníctvom farebného modelu `rgb(255,0,0)` (červená), príp. `hsl(0,100%,50%)` (červená). Prostredníctvom farebného modelu, resp. alfa kanála, je tiež možné určiť mieru nepriehladnosti farby (angl. opacity) v rozsahu `0 - 1`, kde `1` znamená úplne nepriehľadný, na strane druhej, `0` znamená úplne priehľadný, napr. rgba(255,0,0,0.5) je červená, s polovičnou priehľadnosťou, príp. hsla(240,100%,50%,0.5) je modrá s polovičnou priehľadnosťou.

```css
p {
    color: red;
    /*
        color: #ff000;
        color: #f00; 
        color: rgb(255,0,0);
        color: rgba(255,0,0,0.5);
    */
} 
```

Poznámka: V rôznych (grafických) nástrojoch a technológiách sa môžeme stretnúť s odlišným/opačným "pohľadom" na nastavenie miery priehľadnosti, a to *opacity*, alebo *transparency*. V prípade, že nastavujeme *opacity* (nepriehľadnosť), znamená to, že v rozsahu `0 - 1` je `1` - nepriehľadný, `0` - priehľadný. V prípade že nastavujeme *transparency*, znamená to, že v rozsahu `0 - 1` je `1` - priehľadný, `0` - nepriehľadný,  a teda naopak.  Napríklad, v grafickom nástroji Corel Draw nastavujeme *transparency*, zatiaľ čo v CSS nastavujeme *opacity*.

Poznámka 2: CSS vlastnosti definujúce štýl písma majú zvyčajne prefix `font-`, v prípade farby je to jednoducho `color`.

Poznámka 3: Výber dobrej kombinácie farieb (palety) je vo web dizajne veľmi dôležitý. Pomocou farieb dokážeme vytvoriť štýl stránky, zanechať dojem, vyvolať emóciu, alebo prinútiť človeka k akcii. Farby sú pri správnom použití veľmi mocné nástroje. Ak nechceme priveľmi experimenovať, príp. hľadáme inšpiráciu, existujú stránky/služby, ktoré obsahujú zoznamy s osvedčenými paletami farieb, napr. [Adobe Color CC](https://color.adobe.com/explore/?filter=most-used&time=month). 
Záujemcom o teóriu o farbách odporúčam zadarmo knižky [Color Theory in Web UI Design](https://www.uxpin.com/studio/ebooks/color-theory-web-ui-design-practical-principles/) a [Flat Design & Colors](https://www.uxpin.com/studio/ebooks/web-ui-design-techniques-colors-flat-design/).

### Rodina písma
Použitím vlastnosti `font-family` môžeme určiť typ písma, konkrétne písmo (angl. font-face) alebo zoznam písiem. Prehliadač aplikuje písmo, iba ak je dostupné v počítači (z ktorého pristupujeme na web). Ak nie je písmo dostupné, prehliadač aplikuje prednastavené písmo.


```css
p {
    font-family: arial;
} 
```

#### Bezpečné písma
Web dizajnéri chcú/potrebujú máť často písmo pod kontrolou, je súčasťou dizajnu, má silnú estetickú hodnotu a je výrazom určitého vkusu. Keď hovoríme o bezpečných písmach (angl. web safe fonts), tak máme namysli konkrétne písma, ktoré sú dostupné naprieč všetkými systémami (Windows, Mac, Linux, iOS, Android). Každá z platforiem má svoju kolekciu písiem a zoznam bezpečných písiem sa postupne časom mení s vývojom operačných systémov. Za bezpečné písma je možné v súčasnosti považovať tieto (aj vďaka Microsoftu, ktorý ich postupom času spopularizoval):

* *Arial* - bezpätkové písmo, populárne, ak je dostupná *Helvetica*, zvykne sa uprednostniť, považuje sa za príjemnejší  
* *Courier New* - písmo s pevnou šírkou
* *Georgia* - pätkové písmo
* *Times New Roman* - pätkové písmo, populárne 
* *Trebuchet MS* - bezpätkové písmo, ale nie je široko dostupné v mobilných operačných systémoch 
* *Verdana* - bezpätkové písmo

Aktuálny zoznam bezpečných písiem je udržiavaný napr. na stránke [CSS Font Stack](https://www.cssfontstack.com/).

Písmo je možné k webovej stránke aj pripojiť, o tom ale v samostatnej časti.

#### Prednastavené písma
CSS definuje 5 generických názvov pre písma:

* `serif` - pätkové písmo
* `sans-serif` - bezpätkové písmo
* `monospace` – znaky písmo majú rovnakú šírku
* `cursive` – písmo napodobňujúce rukopis
* `fantasy` – dekoratívne písmo

Aké konkrétne písmo (angl. font face) prehliadač použije pre daný generický názov – závisí, a to aj podľa operačného systému, na ktorom beží. Zatiaľ čo `serif`, `sans-serif` a `monospace` sú pomerne predvídateľné a prehliadač by mal byť schopný použiť pomerne rozumné písmo, pri `cursive` a `fantasy` treba byť viac opatrný. 

#### Zásobník písiem
Vlastnosť `font-family` môže mať ako hodnotu viacero písiem. Týmto zoznamom poskytneme prehliadaču alternatívy, z ktorých môže vybrať v prípade, že písmo, resp. písma nie sú dostupné. Zoznamom postupne určíme preferenciu a prehliadač vyberie prvé dostupné písmo. Dobrým zvykom je poskytnúť na konci zoznamu vhodný generický názov písma.

```css
p {
  font-family: "Trebuchet MS", Verdana, sans-serif;
}
```

Poznámka: Názvy pisiem, ktoré pozostávajú z viacerých slov musia byť v úvodzovkách. 


### Veľkosť písma
Použitím vlastnosti `font-size` môžeme nastaviť textu veľkosť. Bežnými/najpoužívanejšími jednotkami sú `px`, `em` a `rem`:

* `px` - absolútna jednotka, veľkosť písma je vyjadrená v pixeloch
* `em` - relatívna jednotka, `1em` zodpovedá veľkosti písma, ktorú má nadradený HTML element; v prednastavenom štýle prehliadača sa spravidla `1em` = `16px`
* `rem` - relatívna jednotka, veľkosť `1rem` je vždy relatívna s ohľadom na nastavenú veľkosť písma v koreňovom `<html>` elemente; v prednastavenom štýle prehliadača je v koreňovom `<html>` elemente veľkosť písma `16px`   

Veľkosť písma sa dedí, a teda použitie `em` jednotiek môže byť niekedy zložité, ak máme veľa vnorených elementov s rôznymi veľkosťami písma. Uvažujme, že nastavíme elementu `<article>` veľkosť písma `font-size: 1.5em`, čo zodpovedá `24px` (16px * 1.5). Rozhodneme sa, že chceme nastaviť vnorenemú odseku veľkosť písma na `20px`, v `em` jednotkách. Akú veľkosť písma nastavíme? 20/24 = `0.833333em`. Takéto počty môžu byť nepríjemné. Najlepšou voľbou je použitie `rem` jednotiek, počty sú jednoduché a umožňujú nám mať prehľad, a teda veľkosti pod kontrolou. 

Pri používaní relatívnych jednotiek je dobré nastaviť základnú veľkosť písma dokumentu na `10px`. Toto nám umožní jednoduché počty. Veľkosť písma v `(r)em` jednotkách potom vypočítame ako požadovanú veľkosť v `px` / 10, nie 16. Je tiež dobré zoskupiť (vo vymedzenom priestore v CSS súbore) všetky pravidlá definujúce veľkosť písma tak, že sa dajú ľahko nájsť a umožňujú dizajnérovi spraviť si rýchly prehľad.       

### Kurzíva
 
Vlastnosťou `font-style` môžeme nastaviť použitie šikmého variantu písma. Kvalitné písma majú definovaných viacerov variantov, a to ako pre normálny rez písma, tak aj pre tučné písmo a šikmý rez. Možné hodnoty vlastnosti sú:

* `normal` - použitý normálny rez/variant písma
* `italic` -  použitý šíkmý rez/variant písma, v prípade, že takýto variant písma nie je k dispozícii je šikmosť písma simulovaná 
* `oblique` -  šíkmý rez písma sa simuluje, na normálny rez písma sa aplikuje deformácia (sklopenie o 10 – 20 stupňov) 

### (Polo)tučný rez 

Vlastnosťou `font-weight` môžeme nastaviť hrúbku písma. K dispozícii je viacero hodnôt, ich použitie závisí od dostupnosti variantov, `light`, `normal`, `bold`, `extrabold`, `black`. Vo väčšine prípadov si však vystačíme s `normal` a `bold`. Ďalšími možnými hodnotami sú: 

* `lighter`, `bolder` - hrúbka písma bude o stupeň väčšia/menšia ako je hrúbka písma nadradeného HTML elementu
* `0-900` - číselné vyjadrenie hrúbky, ktoré poskytuje exaktnejšiu kontrolu nad hrúbkou písma

### Transformácia textu, kapitálky

Vlastnosťou `text-transform` môžeme nastaviť všetkým znakom textu malé/veľké písmená, príp. aby každé slovo v texte začínalo veľkým písmenom. Možné hodnoty sú:

* `none` - na text nie je aplikovaná transformácia 
* `uppercase` - celý text má veľké písmená 
* `lowercase` - celý text má malé písmená
* `capitalize` -  každé slovo v text začína veľkým písmenom
* `full-width` - simuluje sa písmo s pevnou šírkou, všetky znaky majú pevnú šírku

### Dekorácia textu - čiary

Použitím vlastnosti `text-decoration-line` je možné nastaviť podčiarknutie textu `underline`, prečiarknutie textu `line-through`, príp. čiaru nad textom `overline`.  Hodnota `none` ruší dekoráciu, zvykne sa používať na zrušenie podčiarknutia odkazov (vo všeobecnosti to však nie je dobrá prax). 

Čiarám je možné nastaviť farbu `text-decoration-color` a tiež štýl `text-decoration-style`, ktorý môže nadobúdať hodnoty `solid`, `double`, `dotted`, `dashed`, `wavy`. Dané vlastnosti je možné kombinovať. 

Vlastnosť `text-decoration` je možné použiť na skrátenie zápisu.

```css
a {
    text-decoration: underline overline wavy blue;
}
``` 

![Dekorácia textu, ilustrácia čiar a ich štýlov](zdroje/text-decoration.png "Dekorácia textu, ilustrácia čiar a ich štýlov")

### Tiene

Použitím vlastnosti `text-shadow` môžeme textu pridať tiene. Tieň sa definuje hodnotu pozostávajúcou zo štvorice: 

* horizontálne posunutie - os X - od pôvodného textu (angl. horizontal offset); kladná hodnota posúva tieň vpravo, záporná vľavo
* vertikálne posunutie od pôvodného textu - os Y (angl. vertical offset); kladná hodnota posúva tieň dole, záporná hore
* miera/polomer rozostrenia, vyššia hodnota znamená, že tieň je viac rozptýlený; prednastavená hodnota je 0, a teda žadne rozostrenie
* farba tieňa

Tento štýl:

```css 
h1 {
   text-shadow: 4px 4px 5px rgba(255,0,0,0.5);
}
```
produkuje takýto výstup:

![Dekorácia textu, ilustrácia tieňa](zdroje/text-shadow.png "Dekorácia textu, ilustrácia tieňa")

Na text je možné aplikovať viacnásobný tieň:


```css 
h1 {
   text-shadow: 4px 4px 5px rgba(255,0,0,0.5),
                4px -4px 5px rgba(0,255,0,0.5),
               -4px 4px 5px rgba(0,0,255,0.5),
               -4px -4px 5px rgba(255,255,0,0.5)
}
```

Výstupom je:

![Dekorácia textu, ilustrácia viacnásobného tieňa](zdroje/text-shadow-multi.png "Dekorácia textu, ilustrácia viacnásobného tieňa")


## Štýl bloku textu

### Zarovnanie textu
Vlastnosťou `text-align` môžeme nastaviť zarovnanie - "tvar" - textu vo vnútri bloku. Možné hodnoty sú vľavo `left`, vpravo `right`, na stred `center`, do tvaru bloku `justify`. 

Transformáciu textu do tvaru bloku treba používať uvážene. Aby bolo možné z textu vytvoriť tvar bloku, vykresľovací aparát prehliadača musí pridať medzi slová medzery. Týmto zásahom však výstup môže v niektorých prípadoch vyzerať strašne, najmä ak sa v odseku vyskytuje veľa dlhých slov. V takom prípade je dobré použiť *mäkké delenie slov*. To je možné spraviť, tak, že na miesto, na ktorom chceme indikovať, že môže dôjsť ku zlomu, vložíme znakovú entitu `&shy`. Táto znaková entita reprezentuje pomlčku a prehliadač ju automaticky doplní na dané miesto, keď dôjde k rozdeleniu slova. Porovnajte:

```css
p { 
    width: 70px;
    background-color: #eee;
}
```

```html
<p>Toto je od&shy;sek.</p>
<p>Toto je odsek.</p>
```
![Ilustrácia mäkkého delenia slov](zdroje/word-hyph.png "Ilustrácia mäkkého delenia slov")

### Výška riadku

Vlastnosť `line-height` umožňuje nastaviť výšku riadku. Text všeobecne vyzerá lepšie a je ľahšie čitateľný, keď sú riadky na pohľaď oddelené. Častokrát odporúčaná výška riadku je 1,2 - 1,5 násobku veľkosti písma. Hodnota tejto vlastnosti môže byť absolútna, napr. v `px`, ale tiež môžeme použiť tzv. násobič veľkosti písma. Ak teda chceme, aby výška riadku bola 1,25 násobku aktuálnej veľkosti písma, použijeme násobič:

```css
 p {
    line-height: 1.25;
 }
```      

### Medzera medzi znakmi a slovami
Vlastnosti `letter-spacing` a `word-spacing` umožňujú nastaviť veľkosť medzery medzi znakmi, resp. slovami. Nie sú to často používané vlastnosti, ich praktický zmysel sa zvýši, keď použijeme písmo s veľkou hustotou znakov - ktoré sú doslova na sebe natlačené - a chceli by sme (direktívne) pridať znakom trochu "vzduchu". 

### Ďalšie pomerne často používané vlastnosti

* `text-overflow` - ako sa má indikovať, že text preteká (text presahuje veľkosť bloku a je orezaný); napr. hodnota `ellipsis` určuje, že sa na koniec orezaného textu pridajú tri bodky `...` indikujúce, že text pokračuje, ale nie je zobrazený pre nedostatok priestoru 
* `white-space` - ako sa majú vykreslovať biele znaky; napr. hodnota `pre` určuje, že všetky biele znaky sú zachované, riadok bude zalomený, ak je zalomený v zdrojovom texte, alebo sa tam vyskytuje element `<br>`; hodnota `nowrap` určuje spojenie viacerých medzier do jednej a potláča zlomy riadkov, `<br>` rešpektuje
* `word-break` - určuje, či môže byť slovo rozdelené, ak by malo dôjsť k jeho pretečeniu; napr. hodnota `break-word` určuje, že slovo môže byť rozdelené na ľubovoľnom mieste, ak nie sú v riadku iné, akceptovateľné body zlomu
* `hyphens` - určuje, či môžu byť slová rozdelované, ak áno, či sa majú rozdelovať automaticky (hodnota `auto`) podľa nastaveného jazyka (atribút `lang` v elemente `<html>`), alebo iba na miestach, kde je potenciálne rozdelenie slova explicitne indikované prostredníctvom tvrdej/mäkkej medzery (hodnota `manual`)
* `text-indent` - určuje veľkosť odsadenia prvého riadku (veľkosť medzery pred textom na prvom riadku)


## Štýlovanie zoznamov

Elementy reprezentujúze zoznamy majú tieto prednastavené vlastnosti:
* elementy `<ul>` a `<ol>` majú `margin-top: 16px`, `margin-bottom: 16px` a `padding-left: 40px`.
* element `<li>` nemá prednastavené vlastnosti 
* element `<dl>` má `margin-top: 16px`, `margin-bottom: 16px`
* element `<dd>` má `margin-left: 40px`

Vlastnosť `list-style-type` určuje typ/reprezentáciu odrážky, možné hodnoty sú  napr. `square` (štvorec), `disc` (kruh), `circle` (kružnica). Vlastnosť sa nastavuje elementu `<ul>` alebo `<ol>`.  V prípade usporiadaného zoznamu, môže byť hodnota napr. `upper-roman` (Rímska číslica). CSS definuje veľa ďalších možností/typov.  
 
Vlastnosť `list-style-position` určuje, či odrážka bude vo vnútri položky zoznamu - teda jej "súčasťou" (hodnota `inside`), alebo bude pred položkou zoznamu (hodnota `outside`). Vizuálny rozdiel spočíva v tom, že zalomený text bude začínať v prvom prípade pod odrážkou, zatiaľ čo v druhom prípade bude text odsadený o priestor, ktorý odrážka zaberá. Prednastavená hodnota je `outside`.

Použitím vlastnosti `list-style-image` je možné nastaviť vlastný obrázok, ktorý bude reprezentovať odrážku.   

```css
ul {
  list-style-image: url(bullet-star.svg);
}
```

Zkrátený zápis použitím vlastnosti `list-style``:
```css
ul {
  list-style: square url(bullet-star.svg) inside;
}
```
Typ `square` je použítý v prípade, že sa z nejakého dôvodu nepodarí načítať obrázok. Je to tzv. *fallback*. 


## Štýlovanie odkazov
Na štýlovanie odkazov používame tieto pseudo-triedy:
 * `:link` - predvolený stav odkazu, je to stav, v ktorom je odkaz, ak nie je v žiadnom z ďalších stavov  
 * `:visited` - odkaz je v tomto stave, ak bol navštívený (o návšteve odkazu existuje záznam v histórii prehliadača), pozn. nezáleží na texte odkazu, ale na URL, a teda každý odkaz na stránke s rovnakou navštívenou URL bude v tomto stave
 * `:hover` - odkaz je v tomto stave, ak je kurzor myši presunutý ponad odkaz
 * `:focus` - odkaz je v tomto stave, ak sa naň používateľ presunul použitím klávesu [TAB], príp. bol focus vyvolaný programovo (`HTMLElement.focus()`)
 * `:active` - odkaz je v tomto stave, ak bol aktivovaný - napr. kliknutím na odkaz
 
 Prednastavené štýly odkazov sú:
* odkazy sú podčiarknuté
* nenavštívené odkazy sú modrou farbou
* navštívené odkazy sú fialovou farbou
* keď sa kurzor myši nachádza nad odkazom, zmení sa na ruku s vystrčeným ukazovákom 
* odkaz v stave `:focus` má okolo odkazu `outline`
* aktívny odkaz je červený (vyskúšajte podržať ľavé tlačidlo myši nad odkazom)

Zaujímavosťou je, že tieto predvolené štýly sú v prehliadačoch takmer rovnaké, aké boli v polovici 90tych rokov. Preto, lebo používatelia si na ne postupne zvykli, poznajú ich a očakávajú rokmi zaužívané správanie. To neznamená, že by sme nemali odkazy štýlovať, treba však s rozvahou a priveľmi sa nevzdialovať od očakávabého správania:

* ponechajme odkazy podčiarknuté, ak je dôvod vypnúť počiarknutie, je dôležité zvýrazniť ich iným spôsobom
* dostatočne odlíšme jednotlivé stavy, zadefinujme rôzne štýly pre jednotlivé stavy

Pri definovaní pravidiel pre jednotlivé stavy je dôležité dodržať toto poradie:
```css
a {
}

a:link {
}

a:visited {
}

a:focus {
}

a:hover {
}

a:active {
}
``` 
Poradie je dôležité, lebo štýly odkazov na seba nadväzujú. Štyly definované v prvom pravidle budú aplikované na všetky ostatné stavy, `:active` nadväzuje na `:hover`,  `:hover` nadväzuje na `:link` a `:visited`. Ak budú pravidlá v inom poradí, štýly nemusia fungovať podľa očakávania. Na zapamätania poradia odporúčam vymyslieť si mnemotechnickú pomôcku.

### Ikony v odkazoch
Dobrým zvykom je zahrnúť ikony v odkazoch, ktoré indikujú viac informácii o odkaze. Napríklad, pomerne často je možné vidieť pri odkaze ikonku, ktoré indikuje externý odkaz. Táto ikonka zvyčajne vyzerá ako [šípka ukazujúca von z krabice](https://fontawesome.com/v4.7.0/icon/external-link/), alebo šípka ukazujúca do pravého horného rohu . 

![Ilustrácia ikonky indikujúcej externý odkaz z dennikn.sk minúta po minúte](zdroje/external-link-icon.png "Ilustrácia ikonky indikujúcej externý odkaz z dennikn.sk minúta po minúte")

Ako jednoducho vložiť rôzne ikonky do stránky si ukážeme v časti Webové písma.

### Odkazy ako tlačidlá
Odkazy je niekedy potrebné naštýlovať tak, aby vyzerali ako tlačidlá. Typickým príkladom je navigačné menu stránky, ktoré často pozostáva zo zoznamu odkazov. Takýto zoznam je potrebné prerobiť pomocou štýlov tak, aby vyzeral ako množina tlačídiel, príp. kariet, ktoré umožňujú nasmerovať na iné časti stránky. Toto je možné vidieť, napr. v [Bootstrap kartách](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior), ktoré vyzerajú ako tlačidlá, ale sú to odkazy. 

## Webové písma
Použitím vlastnosti `font-family` definujemeť písmo, ktoré chceme použiť na stránke. Tradičné písma môžu byť pre web dizajnérov a grafikov obmedzujúce. Použitím pravidla `@font-face` na začiatku CSS môžeme určiť písmo, príp. písma, ktoré má prehliadač stiahnúť. 

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.ttf");
}
```

Stiahnuté písmo je možné následne aplikovať na HTML obsah použitím vlastnosti `font-family`:

```css
html {
  font-family: "myFont", "Times New Roman", serif;
}
```

Prehliadače podporujú rôzne formáty písma. Moderné prehliadače podporujú WOFF/WOFF2 (Web Open Font Format, vo verzii 1 a 2). Staršie verzie INternet Explorera podporujú EOT formát (Embedded Open Type), pre staršie verzie Android a iPhone prehliadačov je potrebný SVG formát. Aby sme mali istotu, že želané písmo bude použité, je potrebné poskytnúť viacero formátov súčasne.    

Ikony sú populárnym doplnkom webu, často nie je jednoduché nájsť ikony zdarma, ktoré majú správnu veľkosť a hodia sa do dizajnu webu. Písmo [Font Awesome](https://fontawesome.com/) obsahuje stovky ikon vhodných pre web. Do stránky je možné vložiť vektorové ikony, ktorým je možné nastaviť veľkosť, farbu, tieň, a ďalšie CSS vlastnosti. [Spôsob použitia Font Awesome písma vo webovej stránke nájdete na tomto odkaze](https://fontawesome.com/get-started).

Pri výbere ikon je dôležité držať sa zvyklostí. Zabehnuté zvyklosti určujú, ktoré ikony používatelia poznajú. Pokiaľ si nie sme istí, je dobré inšpirovať sa najčastejším použitím ikon v iných aplikáciách. Mnohé názvy ikon vo Font Awesome indikujú, v akom význame sa používajú (napr. už spomenutá ikona na externý odkaz). Zlým výberom ikony môžeme ľahko zmiasť používateľa, a teda spravíme viac škody ako úžitku. Odporúčam článok [Small Elements, Big Impact: Types and Functions of UI Icons]( https://uxplanet.org/small-elements-big-impact-types-and-functions-of-ui-icons-87c6a74d366e).  

Tiež je dôležité zvážiť, či vybraté ikony majú zmysel v konkrétnom kontexte. Niektoré ikony môžu mať zmysel len v spojitosti s inými ikonami rovnakého typu. Napríklad, ikona "stop" je obyčajný štvorec, v prípade použitia  (v prehrávači) spolu s ikonami "play", príp. "pause" je jej význam jasný, v inom kontexte však nemusí byť použvateľom rozpoznaná ako "stop". Podobne, ikona "mínus", často používaná na odobratie prvku zo zoznamu. Vizuálne je veľmi abstraktná a nemusí byť používateľom pochopená bez príslušnej ikony "plus" (na pridanie prvku do zoznamu).          

## Kde získať písma?
Písma je možné získať (stiahnúť) z platených stránok (napr. [Linotype](https://www.linotype.com/), [Monotype](http://www.monotype.com/)), zadarmo (napr. [Font Squirrel](https://www.fontsquirrel.com/), [dafont](http://www.dafont.com/), [Everything fonts](https://everythingfonts.com/)), alebo z online služieb, kde poskytované písma je možné použiť bez potreby ich sťahovania, a to jednoducho, vložením vygenerovaného prepojenia do svojej stránky na hostované písmo. 

Jednou z takýchto služieb je [Google Fonts](https://fonts.google.com/), ktorá je zadarmo. Na stránke je zoznam písiem, medzi ktorými je možné vyhľadávať. Želané písmo, príp. písma si vyberieme kliknutím na tlačidlo (+). Na spodu viewportu prehliadača je lišta s názom *[Number] Families selected*, kde *[Number]* predstavuje počet vybratých písiem. Kliknutím na lištu sa rozbalí panel, v ktorom sú inštrukcie, čo treba skopírovať a vložiť do stránky, aky bolo možné vybraté písmo/písma použiť. Ide o `<link>`, ktorý odkazuje na zdroj písma/písiem a vlastnosť `font-family`, ktorú je potrebné pridať do CSS súboru.

 ### Bulletproof @font-face syntax
Ako sme spomenuli, prehliadače (tie staršie) podporujú rôzne formáty písma. Aby sme mali istotu, že želané písmo bude použité aj v starších prehliadačoch, je potrebné poskytnúť viacero formátov súčasne. *Font Squirrel* vygeneruje takéto *at-pravidlo*:

```css
@font-face {
    font-family: 'ciclefina';
    src: url('fonts/cicle_fina-webfont.eot');
    src: url('fonts/cicle_fina-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/cicle_fina-webfont.woff2') format('woff2'),
         url('fonts/cicle_fina-webfont.woff') format('woff'),
         url('fonts/cicle_fina-webfont.ttf') format('truetype'),
         url('fonts/cicle_fina-webfont.svg#ciclefina') format('svg');
    font-weight: normal;
    font-style: normal;
}
```
Toto sa označuje ako [Bulletproof @font-face syntax](https://www.paulirish.com/2009/bulletproof-font-face-implementation-syntax/). 

<a name="c4-stylovanie-textu-priklady"></a>
# Príklady na precvičenie

## Príklad 1 
Naštýlujte tieto odkazy tak, aby vyzerali ako tlačidlá, ktoré ilustruje predloha. Farba tlačidla bude žltá, aj v prípade, že už bol odkaz navštívený. Keď je kurzor myši nad tlačídlom, zmení sa jeho farba na oranžovú. Keď na tlačidlo klikneme, bude červené.

```html
<ul>
    <li><a href="#">Media</a></li>
    <li><a href="#">Pages</a></li>
    <li><a href="#">Comments</a></li>
    <li><a href="#">Appearance</a></li>
</ul>
```

![Ilustrácia menu z odkazov](zdroje/odkazy.png "Ilustrácia menu z odkazov")

## Príklad 2
Pridajte do stránky k vytvoreným tlačidlám písmo *Font Awesome*. K jednotlivým položkám menu pridajte ikony, ktoré reflektujú jednotlivé položky, príp. sa inšpirujte nasledujúcou predlohou.

![Ilustrácia menu z odkazov s ikonami](zdroje/odkazy-fa.png "Ilustrácia menu z odkazov s ikonami")
  

