# HTML - Formuláre

Webové formuláre reprezentujú jeden z hlavných prvkov interakcie medzi používateľom a webovou stránkou, resp. aplikáciou. Umožňujú používateľom odosielať údaje, väčšinou sa posielajú na webový server, ale stránka ich tiež môže "odchytiť pre vlastné použitie".

Webový formulár pozostáva z jedného alebo viacerých ovládacích prvkov (angl. widgets, napr. textové pole, zaškrtávacie pole, pole výberu, tlačidlo). Vo väčšine prípadov sú tieto prvky prepojené s ich opismi - titulkami, ktoré vyjadrujú ich účel. Správny titulok stručne a jasne inštruuje používateľa o tom, čo má vložiť do formulára.

Pozrite si tiež [Extensive Guide To Web Form Usability](https://www.smashingmagazine.com/2011/11/extensive-guide-web-form-usability/).

## Prvý formulár

HTML formuláre sú zaobalené elementom `<form>`.

```html
<form action="/stranka-prijimajuca-data-formulara" method="post">
</form>
```

Tento element je akýsi "kontajner" (podobne ako `<div>`), ale naviac poskytuje atribúty, ktoré určujú spôsob správania sa formulára. Všetky atribúty sú voliteľné (angl. optional), ale je dobrým zvykom určiť aspoň tieto dva:

* `action` - určuje URL, na ktorú majú byť odoslané údaje z formulára, keď je odoslaný
* `method` - určuje, ktorá z HTTP metód sa má použiť pri odosielaní údajov, tzn. GET alebo POST.

Vložme do nášho formulára tri textové vstupné polia, každé pole s titulkom:

```html
<form action="/stranka-prijimajuca-data-formulara" method="post">
    <div>
        <label for="name">Meno:</label>
        <input type="text" id="name" name="user_name">
    </div>
    <div>
        <label for="mail">E-mail:</label>
        <input type="email" id="mail" name="user_mail">
    </div>
    <div>
        <label for="msg">Správa:</label>
        <textarea id="msg" name="user_message"></textarea>
    </div>
    <div class="button">
        <button type="submit">Odoslať správu</button>
     </div>
</form>
```

Vytvorili sme kontaktný formulár. Jednoduché textové polia sme vložili použitím elementu `<input>`, ktorého najdôležitejším atribútom je `type`. Tento atribút určuje typ textového pola. Je veľmi dôležitý, lebo určuje aj správanie vstupného pola.

V prvom prípade sme použili hodnotu "text" (pozn. prednastavená hodnota pre tento atribút). Reprezentuje základný - jednoriadkový textový vstup. V druhom prípade sme použili hodnotu "email", ktorá určuje, že ide o jednoriadkový textový vstup, ale naviac, tento vstup musí spĺňať platný formát emailovej adresy. Moderné prehliadače povyšujú význam tohto atribútu, lebo kontrolujú, či je vstup od používateľa naozaj správny - obyčajné textové pole je zrazu "inteligentné".

Element `<textarea>` je základné vstupné textové pole s viacerými riadkami. Nie je to prázdny element narozdiel od elementu `<input>`. Toto má vplyv na nastavenie prednastavenej hodnoty. Zatiaľ čo v prípade elementu `<input>` určíme prednastavenú hodnotu pomocou atribútu `value`, v elemente `<textarea>` určíme prednastavenú hodnotu samotným obsahom elementu.

```html
<input type="text" value="prednastavená hodnota">

<textarea>prednastavená hodnota</textarea>
```

Elementy `<label>` reprezentujú titulky k vstupným poliam. Použitím atribútu `for`
prepojíme daný titulok so vstupným polom. Hodnotou atribútu `for` je identifikátor predmetného vstupného pola - hodnota atribútu `id` (pozn.: kliknutím na titulok vstupného pola ho aktivujeme - získa tzv. focus)

Použitím elementov `<div>` sme v našom príklade mysleli takpovediac dopredu - na budúce jednoduchšie štruktúrovanie a štýlovanie.

Aby sme umožnili používateľovi odoslať formulár, pridali sme tlačidlo "Odoslať správu" použitím elementu `<button>`. Tlačidlu je možné nastaviť atribút `type`, ktorý môže nadobúdať tieto hodnoty:

* `submit` - prednastavená hodnota, odosiela údaje formulára na adresu definovanú atribútom `action`
* `reset` - vynuluje/resetuje všetky hodnoty ovládacích prvkov na prednastavené hodnoty
* `button` - kliknutím na tlačidlo sa nestane nič - na čo je to dobré? na vytváranie vlastných tlačidiel s JavaScriptom

Hodnota atribútu `name` v ovládacích prvkoch sa pri odoslaní formulára odosiela spolu s údajmi.

Poznámka: Tlačidlo na odoslanie formulára je možné spraviť aj použitím elementu `<input>` so zodpovedajúcim atribútom `type="submit"`. Hlavnou výhodou použitia elementu `<button>` je, že umožňuje dať ako názov/titulok HTML obsah, zatiaľ čo element `<input>` umožňuje iba jednoduchý text (angl. plain text).

Poznámka 2: Je prísne zakázané vnárať formulár do formulára. Vnorenie môže spôsobiť, že sa formuláre správaju nepredvídateľne (na základe použitého prehliadača).

Poznámka 3: Ovládací prvok je možné používať aj mimo elementu `<form>`. V takom prípade však daný prvok nemá nič s "formulárom" ako takým, je potrebné mať dôvod na takého použitie a prispôsobiť jeho správanie pomocou jazyka JavaScript. HTML5 umožňuje definovať v ovládacom prvku atribút `form`, ktorý explicitne prepojí/naviaže daný prvok s formulárom, aj keď v ňom nie je vnorený. Žiaľ, implementácia v prehliadačoch aktuálne nie je dosť dobrá, aby sa dalo na túto funkcionalitu spoľahnúť.

## Vytvorenie skupín ovladácích prvkov

Element `<fieldset>` umožňuje vytvoriť skupiny ovládacích prvkov, ktoré "zdieľajú" rovnaký účel, ako po stránke štylizácie, tak po stránke sémantiky. Skupine prvkov je možné dať titulok použitím elementu `<legend>`, ktorý vložíme za otváraciu značku `<fieldset>`. Obsah elementu `<legend>` formálne opisuje účel skupiny.

```html
<form>
  <fieldset>
    <legend>Veľkosť nádoby na ovocnú šťavu</legend>
    <p>
      <input type="radio" name="size" id="size_1" value="small">
      <label for="size_1">Malá</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_2" value="medium">
      <label for="size_2">Stredná</label>
    </p>
    <p>
      <input type="radio" name="size" id="size_3" value="large">
      <label for="size_3">Veľká</label>
    </p>
  </fieldset>
</form>
```

Čítačky obrazoviek, napr. [Jaws](http://www.freedomscientific.com/products/fs/jaws-product-page.asp) alebo [NVDA](http://www.nvda-project.org/) prečítajú zakaždým obsah v elemente `<legend>` predtým, ako prečítajú titulok každého z ovládacích prvkov. Element `<fieldset>` je jedným z kľúčových elementov pri vytváraní prístupných formulárov pre nevidiacich. Ak/keď robíme web prístupný, je dobré vypočuť si, ako jednotlivé elementy interpretuje čítačka obrazovky. Ak to znie zvláštne, treba zlepšiť texty a štruktúru formulára.

Použitie prepínačov (angl. radio buttons) si takmer vždy pýta použiť element `<fieldset>`. Tento element je tiež možné použiť v prípade dlhých formulárov na rozdelenie ovládacích prvkov do sekcií, čo môže zvýšiť čitateľnosť/prehľadnosť - celkovú použiteľnosť.

## Titulky ovládacích prvkov

Ovládací prvok môže byť vnorený v elemente `<label>`, niečo takéto je možné vidieť na Webe bežne:

```html
<label>
  Meno: <input type="text" id="name" name="user_name">
</label>
```

Aj v takomto prípade je však dobré nastaviť atribút `for`, lebo čítačka obrazovky nerozumie implicitnému vzťahu medzi titulkom a ovládacím prvkom:

```html
<label for="name">
  Meno: <input type="text" id="name" name="user_name">
</label>
```

Je tiež možné priradiť viacero titulkov k jednému ovládaciemu prvku. Nie je to však dobrá prax, pretože čítačky môžu mať problém so spracovaním:

```html
<p>Povinné polia sú označené <abbr title="povinné">*</abbr>.</p>

<div>
  <label for="username">Meno:</label>
  <input type="text" name="username">
  <label for="username"><abbr title="povinné">*</abbr></label>
</div>

<!-- lepší spôsob: -->
<div>
  <label for="username">
    <span>Meno:</span>
    <input id="username" type="text" name="username">
    <abbr title="povinné">*</abbr>
  </label>
</div>

<!-- ešte lepší spôsob: -->
<div>
  <label for="username">Meno: <abbr title="povinné">*</abbr></label>
  <input id="username" type="text" name="username">
</div>
```

## Bežná HTML štruktúra používaná vo formulároch

Bežnou praxou je zaobaliť titulok a ovládací prvok elementom `<div>` alebo `<p>`.
Na štruktúrovanie zložitých formulárov sa zvyknú používať sekcie `<section>` a nadpisy (napr. `<h2>`, `<h3>`). Zoznamy sa zvyknú používať pri viacerých zaškrtávacích poliach alebo prepínačoch. V konečnom dôsledku je dôležité zvoliť spôsob, ktorý vedie k prístupným a použiteľným formulárom.

## Validácia

Jednou z funkcií HTML5 je schopnosť overovať väčšinu vstupných údajov od používateľa bez pomocných skriptov (na strane klienta). Toto je možné použitím validačných atribútov, ktoré umožňujú definovať pravidlá. Takýmto atribútom je napr. `type`, ktorého hodnotou `email` sme zadefinovali, že vstup od používateľa musí prejsť validáciou na platný formát emailovej adresy.

Keď je element validný (platný), tak sa zhoduje s CSS pseudo-triedou `:valid`, čo môže byť použité na aplikovanie konkrétneho štýlu. Prehliadač odošle údaje/formulár za predpokladu, že ho nič iné nezastaví (napr. JavaScript).

Keď nie je element validný, tak sa zhoduje s CSS pseudo-triedou `:invalid`, čo môže byť tiež použité na aplikovanie konkrétneho štýlu reflektujúceho neplatný stav. Prehliadač zablokuje odoslanie formulára a vypíše chybovú správu.

### Atribút `required`

Týmto atribútom je možné určiť, že vstup od používateľa je povinný:

```html
<form>
  <label for="fullname">Aké je tvoje celé meno?</label>
  <input id="fullname" name="fullname" required>
  <button>Submit</button>
</form>
```

CSS štýly by mohli vyzerať takto:

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

### Atribúty ohraničujúce dĺžku/rozsah

Textové vstupné polia môžu mať definovanú minimálnu `minlength`, resp. maximálnu `maxlength` dĺžku. Prehliadače spravidla neumožnia napísať viac textu, ako je určené atribútom `maxlength`. Pri číselných vstupných poliach (`type="number"`) sa určuje rozsah atribútmi `min`, resp. `max`.

```html
<div>
  <label for="fullname">Aké je tvoje celé meno?</label>
  <input id="fullname" name="fullname" required minlength="5" maxlength="255">
</div>
<div>
    <label for="numsib">Koľko máš súrodencov?</label>
    <input type="number" id="numsib" name="numsib" min="0" max="50">
</div>
```

### Regulárny výraz
Použitím atribútu `pattern` je možné definovať vzor - regulárny výraz, ktorému musí zodpovedať vstup.

<a name="c3-formulare-priklady"></a>
## Príklady na precvičenie

### Príklad
Vytvorte platobný formulár, ktorý ilustruje nasledujúci obrázok. Vľavo je nenaštýlovaný formulár (tak ako HTML dokument vykreslil prehliadač Chrome), vpravo je [naštýlovaný formulár použitím týchto základných štýlov](zdroje/formulare-priklad1.css).

![Platobný formulár](zdroje/formulare-priklad1.jpg "Platobný formulár")


## Literatúra
Ak chcete vytvárať dobré, a teda najmä použiteľné formuláre, odporúčam túto knihu:
* [Forms that work: Designing web forms for usability](http://www.formsthatwork.com/)
