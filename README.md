# SpeelZelf+

SpeelZelf+ is een statische single-page application voor welzijnsmedewerkers in woonzorgcentra. De tool helpt om een bestaand beweegspel stap voor stap aan te passen zodat bewoners het ook zonder begeleiding kunnen spelen.

## Flow

1. Vul de naam van het bestaande spel in.
2. Laat bewoners het spel eerst proberen zoals het nu is.
3. Beantwoord 10 korte observatievragen met `Ja`, `Nee` of `Niet getest`.
4. Doorloop daarna alle 10 **speelpunten**. De observatie bepaalt niet welke speelpunten je ziet; ieder speelpunt blijft zichtbaar.
5. Bekijk mogelijke aanpassingen, kies één of meer oplossingen of voeg een eigen oplossing toe.
6. Selecteer per gekozen aanpassing wie eventueel kan helpen.
7. SpeelZelf+ maakt automatisch een uitvoerbaar **SpeelZelf+ plan**.
8. Bewaar het plan via de browser als PDF of print het uit.
9. Na uitvoering kunnen de testvakjes op het plan worden gebruikt om het aangepaste spel opnieuw te beoordelen.

## Bestanden

- `index.html` — startpagina van GitHub Pages
- `speelzelfplus.css` — vormgeving
- `speelzelfplus.js` — inhoud, speelpunten, oplossingen en applicatielogica
- `assets/images/` — eigen foto's en illustraties

`index.html` blijft bewust zo heten omdat GitHub Pages dit standaard als startbestand gebruikt.

## Afbeeldingen toevoegen

Iedere oplossing in `speelzelfplus.js` bevat bijvoorbeeld:

```js
image: "assets/images/opvangrand-tafel.jpg"
```

Zet een afbeelding met die bestandsnaam in `assets/images/`. Je kunt de naam ook wijzigen zolang het pad in `speelzelfplus.js` hetzelfde wordt aangepast.

Afbeeldingen mogen verschillende verhoudingen en afmetingen hebben. De app gebruikt `object-fit: contain`, waardoor een afbeelding niet wordt uitgerekt of hard wordt afgesneden.

Als een afbeelding nog ontbreekt, verschijnt een rustige placeholder met de verwachte bestandsnaam. De technische alt-tekst van een ontbrekende afbeelding wordt niet in de kaart getoond.

## Inhoud aanpassen

Zoek in `speelzelfplus.js` naar:

```js
const principles = [
```

Daar staat alle inhoud per speelpunt bij elkaar:

- titel;
- korte toelichting;
- testcriterium;
- observatietip;
- oplossingen;
- materialen;
- waar materialen te vinden zijn;
- stap-voor-stap uitvoering;
- mogelijke hulp;
- afbeeldingspad.

De uitvoeringsteksten zijn als genummerde stappen geschreven. De interface zet deze automatisch om in een leesbare stappenlijst.

## Opslag

De voortgang wordt alleen lokaal in de browser opgeslagen met `localStorage`. Er is geen account, database of server nodig.

## Lokaal testen

Vanuit deze map:

```bash
python -m http.server 8000
```

Open daarna `http://localhost:8000`.

## GitHub Pages

De map kan rechtstreeks in de GitHub-repository voor SpeelZelf+ worden geplaatst. Publiceer daarna de repository via GitHub Pages.


## Interactie in deze versie

Wanneer een voorbeeldoplossing wordt geselecteerd, klapt **Zo maak je dit** automatisch open. De kaart wordt daarbij lokaal bijgewerkt; de volledige pagina wordt niet opnieuw opgebouwd. Dit maakt de interface merkbaar lichter, zeker wanneer meerdere oplossingen worden bekeken.


Versie v5: startpagina en speelpunten visueel rustiger gemaakt, met een bredere hoofdtitel, minder achtergrondvormen en een eenvoudiger voortgangsbalk.

Versie v6: startpagina visueel rustiger gemaakt, met één subtiele achtergrondvorm minder en een opgeschoonde responsive CSS-sectie.

Versie v7: logo vergroot en lichter gemaakt, bovenbalk gekoppeld aan dezelfde drie logokleuren, paginatitels verkleind, ondertitels groen gemaakt en speelpuntnummer boven de titel geplaatst voor een rustigere linker uitlijning. Het groene SpeelZelf+-label boven het plan is verwijderd.


Versie v8: speelpunttitels en cijfers weer horizontaal uitgelijnd; logo- en accentgroen aangepast naar #4F7468.
