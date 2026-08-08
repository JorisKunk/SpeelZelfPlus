/*
  SpeelZelf+
  =============
  Alle inhoud staat hieronder centraal bij `principles`.

  AFBEELDINGEN TOEVOEGEN
  ----------------------
  1. Zet je afbeelding in assets/images/
  2. Vul bij de gewenste oplossing de bestandsnaam in bij `image:`
     Bijvoorbeeld: image: "assets/images/opvangrand-tafel.jpg"

  Verschillende beeldformaten zijn toegestaan. De CSS behoudt de verhouding
  automatisch met object-fit: contain. Ontbreekt een afbeelding nog, dan toont
  de app een duidelijke placeholder met de verwachte bestandsnaam.
*/

const principles = [
  {
    id: "bekend",
    number: 1,
    title: "Houd het spel herkenbaar en duidelijk",
    short: "Zorg dat bewoners het spel herkennen en de basisregels snel kunnen terugvinden.",
    question: "Kunnen bewoners zonder nieuwe uitgebreide uitleg begrijpen wat de bedoeling is?",
    criterion: "Bewoners herkennen het spel en begrijpen de basisregels zonder mondelinge begeleiding.",
    observeTip: "Laat bewoners eerst zelf vertellen of voordoen wat de bedoeling is. Vul pas aan als dat nodig is.",
    observationKey: "rules",
    solutions: [
      {
        id: "instructie-a3",
        title: "Maak een groot instructieblad in enkele stappen",
        summary: "Gebruik korte zinnen en één duidelijke foto, illustratie of icoon per stap.",
        materials: ["A3-papier", "printer", "eventueel insteekhoes of lamineerhoes", "foto's of eenvoudige illustraties"],
        source: "Gebruik bij voorkeur materialen die al op de afdeling aanwezig zijn. Papier, hoezen en eenvoudige houders zijn ook bij kantoor- en huishoudwinkels te vinden.",
        how: "1. Schrijf alleen de handelingen op die bewoners nodig hebben om zelfstandig te beginnen en door te spelen. 2. Beperk de instructie bij voorkeur tot drie tot vijf korte stappen. 3. Maak per stap één foto of eenvoudige illustratie van de echte handeling. 4. Zet de tekst groot naast of onder het beeld. 5. Print het blad op A3 en plaats het direct bij het spel. 6. Laat een bewoner het blad gebruiken zonder extra uitleg en pas onduidelijke stappen aan.",
        help: "Niet nodig. Laat eventueel bewoners of een collega controleren of de stappen zonder mondelinge uitleg duidelijk zijn.",
        image: "assets/images/instructieblad-a3.jpg",
        imageAlt: "Voorbeeld van een eenvoudig A3-instructieblad voor een beweegspel"
      },
    ]
  },
  {
    id: "starten",
    number: 2,
    title: "Maak het spel makkelijk om zelf te starten",
    short: "Zorg dat bewoners het spel kunnen vinden, pakken en beginnen zonder dat iemand het eerst hoeft klaar te zetten.",
    question: "Kunnen bewoners het spel beginnen zonder dat een medewerker eerst materialen moet pakken, verplaatsen of klaarzetten?",
    criterion: "Bewoners kunnen het spel zelf vinden, pakken waar nodig en beginnen met spelen.",
    observeTip: "Zet het spel neer zoals het normaal beschikbaar is en kijk of bewoners zelf kunnen pakken wat nodig is en weten waar te beginnen.",
    observationKey: "start",
    solutions: [
      {
        id: "vaste-plek",
        title: "Geef het spel een vaste, zichtbare plek",
        summary: "Een spel dat al klaarstaat vraagt minder organisatie voordat iemand kan beginnen.",
        materials: ["vrije plek in de gezamenlijke ruimte", "eventueel een kleine tafel of verrijdbare tafel", "eenvoudig label of bordje"],
        source: "Gebruik bij voorkeur meubels en materialen die al aanwezig zijn.",
        how: "1. Kies in de gezamenlijke ruimte een plek waar bewoners het spel regelmatig zien. 2. Controleer of rolstoelen er goed bij kunnen en of loop-, rij- en zorgroutes vrij blijven. 3. Zet het spel op die plek in de opstelling waarin bewoners kunnen beginnen. 4. Laat alleen de materialen klaarstaan die echt nodig zijn. 5. Laat een bewoner proberen of de plek en opstelling werken voordat je de plek definitief maakt.",
        help: "Stem de plek af met collega's. Vraag de technische dienst alleen als iets stevig gemonteerd of aangepast moet worden.",
        image: "assets/images/vaste-plek-spel.jpg",
        imageAlt: "Beweegspel op een vaste zichtbare plek in een gezamenlijke ruimte"
      },
      {
        id: "open-mand",
        title: "Leg alle startmaterialen bij elkaar en binnen bereik",
        summary: "Een open mand of bak naast het spel voorkomt zoeken en bukken.",
        materials: ["open mand, bak of schaal", "eventueel antislipmat", "label met naam van het spel"],
        source: "Kijk eerst op de afdeling. Eenvoudige bakken en manden zijn vaak te vinden bij winkels zoals Action, Wibra of HEMA.",
        how: "1. Verzamel alle materialen die nodig zijn om te beginnen. 2. Leg ze in één open, ondiepe mand, bak of schaal. 3. Zet deze naast het spel op een hoogte waar bewoners vanuit hun (rol)stoel gemakkelijk bij kunnen. 4. Leg eventueel een antislipmat onder de bak. 5. Laat een bewoner zelf de materialen pakken en verplaats de bak als reiken of draaien nog lastig is.",
        help: "Niet nodig, tenzij een vaste houder moet worden bevestigd.",
        image: "assets/images/open-mand-materialen.jpg",
        imageAlt: "Open mand met spelmaterialen binnen bereik"
      },
      {
        id: "eerste-stap",
        title: "Maak de eerste handeling meteen zichtbaar",
        summary: "Laat aan het spel zelf zien wat iemand als eerste moet doen.",
        materials: ["klein kaartje of A4-blad", "houder, tape of klem"],
        source: "Gebruik materiaal dat al aanwezig is.",
        how: "1. Bepaal wat de allereerste handeling is waarmee het spel begint. 2. Schrijf die in één korte zin, bijvoorbeeld 'Pak drie ringen en gooi vanaf de lijn'. 3. Zet de zin groot op een kaartje en voeg eventueel één foto of illustratie toe. 4. Plaats het kaartje precies waar bewoners starten. 5. Controleer of iemand zonder mondelinge uitleg weet wat de eerste stap is.",
        help: "Niet nodig.",
        image: "assets/images/eerste-stap-kaart.jpg",
        imageAlt: "Korte startinstructie direct naast een beweegspel"
      }
    ]
  },
  {
    id: "bereik",
    number: 3,
    title: "Zorg dat bewoners overal goed bij kunnen",
    short: "Alle spelhandelingen moeten vanuit een (rol)stoel comfortabel uitgevoerd kunnen worden, zonder bukken of ver voorover leunen.",
    question: "Kunnen bewoners vanuit hun (rol)stoel alle noodzakelijke spelhandelingen uitvoeren binnen een comfortabele reikafstand?",
    criterion: "Bewoners kunnen alle spelhandelingen vanuit hun (rol)stoel uitvoeren zonder te bukken of ver voorover te leunen.",
    observeTip: "Ga zelf op een stoel zitten en kijk daarna naar bewoners: waar moeten zij reiken, draaien of naar voren bewegen?",
    observationKey: "reach",
    solutions: [
      {
        id: "spel-op-tafel",
        title: "Breng een vloerspel omhoog naar een comfortabele speelhoogte",
        summary: "Plaats bijvoorbeeld ringwerpen op een stevige tafel zodat bewoners het vanuit hun (rol)stoel kunnen spelen.",
        materials: ["stevige tafel", "antislipmat", "eventueel tape om een speelvlak te markeren"],
        source: "Gebruik bij voorkeur een geschikte tafel die al in het woonzorgcentrum staat.",
        how: "1. Kies een stevige tafel waar een rolstoel goed onder of dicht bij kan staan. 2. Plaats het spel los op de tafel en leg er zo nodig een antislipmat onder. 3. Laat een bewoner vanuit de eigen (rol)stoel proberen of alle belangrijke onderdelen bereikbaar zijn. 4. Schuif het spel dichterbij of verander de positie totdat bukken en ver voorover leunen niet nodig zijn. 5. Markeer de beste plek eventueel met tape en maak de opstelling pas daarna definitief.",
        help: "Vraag een collega of fysiotherapeut mee te kijken wanneer houding in de (rol)stoel en reikafstand lastig te beoordelen zijn.",
        image: "assets/images/vloerspel-op-tafel.jpg",
        imageAlt: "Ringwerpspel dat op een tafel is geplaatst voor gebruik vanuit een (rol)stoel"
      },
      {
        id: "opvangrand",
        title: "Maak een zachte opvangrand rond een tafel",
        summary: "Voorkom dat ringen, ballen of andere materialen na een misser op de grond terechtkomen.",
        materials: ["poolnoodle, opgerolde handdoek of stevig karton", "schilderstape voor een eerste test", "eventueel klittenband voor een steviger bevestiging"],
        source: "Kijk eerst wat al aanwezig is. Poolnoodles, tape en klittenband zijn vaak te vinden bij discount-, hobby- of huishoudwinkels.",
        how: "1. Leg het spel op de plek waar het gebruikt gaat worden. 2. Maak met een poolnoodle, opgerolde handdoek of stevig karton een lage rand langs de achterzijde en zijkanten van de tafel. 3. Zet de rand voor de eerste test vast met schilderstape of klittenband. 4. Gooi of rol meerdere keren expres naast het doel. 5. Controleer of het materiaal op tafel blijft én of bewoners nog overal goed bij kunnen. 6. Kies pas daarna een stevigere bevestiging als dat nodig is.",
        help: "Voor de eerste test meestal niet nodig. Vraag de technische dienst mee te denken als de rand permanent en stevig bevestigd moet worden.",
        image: "assets/images/opvangrand-tafel.jpg",
        imageAlt: "Tafel met zachte opvangrand zodat spelmateriaal niet op de grond valt"
      },
      {
        id: "wandspel-rolstoelhoogte",
        title: "Hang een wandspel op een comfortabele hoogte",
        summary: "Hang bijvoorbeeld klittenband darten rond schouder- of ooghoogte van bewoners in een (rol)stoel.",
        materials: ["meetlint", "stoel", "geschikte ophanging", "eventueel tijdelijke schilderstape om hoogte te markeren"],
        source: "Gebruik bestaande bevestigingsmaterialen waar mogelijk.",
        how: "1. Laat een bewoner met de (rol)stoel op de verwachte speelplek staan. 2. Houd het wandspel eerst los tegen de muur en bepaal samen een hoogte waarop midden en randen goed zichtbaar zijn. 3. Controleer of de benodigde armbeweging comfortabel is en niemand ver voorover hoeft te bewegen. 4. Markeer de gekozen hoogte met schilderstape. 5. Test enkele worpen. 6. Laat de technische dienst het bord pas daarna stevig bevestigen.",
        help: "Vraag de technische dienst om hulp bij boren of definitief ophangen.",
        image: "assets/images/wandspel-rolstoelhoogte.jpg",
        imageAlt: "Wandspel op comfortabele hoogte voor iemand in een rolstoel"
      }
    ]
  },
  {
    id: "volgende-beurt",
    number: 4,
    title: "Maak de volgende beurt zelfstandig mogelijk",
    short: "Zorg dat bewoners gebruikte materialen zelf kunnen verzamelen en het spel weer klaar kunnen maken.",
    question: "Kunnen bewoners na een beurt zelf de materialen verzamelen en het spel klaarzetten voor de volgende beurt?",
    criterion: "Bewoners kunnen na een beurt de materialen zelf verzamelen en het spel klaarmaken voor de volgende beurt.",
    observeTip: "Wacht na een beurt bewust even en kijk wat bewoners zelf doen voordat je materialen teruggeeft of opnieuw klaarzet.",
    observationKey: "reset",
    solutions: [
      {
        id: "niet-rollend",
        title: "Vervang rollend materiaal door iets dat blijft liggen",
        summary: "Gebruik bijvoorbeeld werpzakjes in plaats van ballen wanneer rollen vooral het probleem veroorzaakt.",
        materials: ["werpzakjes of zachte niet-rollende alternatieven"],
        source: "Kijk eerst bij bestaand beweegmateriaal. Eenvoudige werpzakjes zijn vaak verkrijgbaar bij speelgoed- of sportwinkels.",
        how: "1. Kies een zacht materiaal dat niet wegrolt, bijvoorbeeld werpzakjes. 2. Probeer eerst met hetzelfde aantal worpen en dezelfde afstand als bij het oorspronkelijke spel. 3. Controleer of het spel herkenbaar blijft en of de spelactie nog voldoende beweging vraagt. 4. Kijk of bewoners het materiaal na de beurt gemakkelijker zelf kunnen verzamelen. 5. Pas afstand of doel alleen aan als dat daarna nog nodig is.",
        help: "Niet nodig. Laat bewoners meebepalen of de aangepaste spelvorm nog prettig speelt.",
        image: "assets/images/werpzakjes-in-plaats-van-ballen.jpg",
        imageAlt: "Werpzakjes als niet-rollend alternatief voor ballen"
      },
      {
        id: "terughaalstok",
        title: "Maak een eenvoudige terughaalstok",
        summary: "Een lichte stok met haak of klittenband kan ringen of zachte ballen naar de speler toe halen.",
        materials: ["lichte houten steel of pvc-buis", "afgeronde haak of zelfklevend klittenband", "tape of stevige bevestiging", "eventueel fietshandvat voor extra grip"],
        source: "Veel onderdelen zijn mogelijk al aanwezig. Eenvoudige stelen, pvc-buis en tape zijn vaak te vinden bij huishoud- of hobbywinkels; vraag voor pvc-buis eventueel eerst de technische dienst of facilitaire dienst.",
        how: "1. Kies een lichte houten steel of pvc-buis die bewoners goed kunnen vasthouden. 2. Bepaal welke kop nodig is: een afgeronde haak voor ringen of klittenband voor zachte klittenbandballen. 3. Maak de kop eerst tijdelijk vast met stevige tape. 4. Werk alle scherpe randen af. 5. Laat een bewoner vanuit de eigen (rol)stoel materiaal naar zich toe halen zonder ver voorover te bewegen. 6. Laat de verbinding pas daarna steviger afwerken als de vorm en lengte goed blijken te werken.",
        help: "Vraag de technische dienst of een vrijwilliger om mee te helpen wanneer een stevige, duurzame bevestiging nodig is.",
        image: "assets/images/terughaalstok.jpg",
        imageAlt: "Eenvoudige stok waarmee spelmateriaal naar de speler toe kan worden gehaald"
      },
      {
        id: "opstelhulp",
        title: "Maak duidelijk waar materialen terug moeten komen",
        summary: "Markeringen of een eenvoudige mal maken opnieuw klaarzetten makkelijker.",
        materials: ["gekleurde tape, stift of eenvoudige kartonnen mal"],
        source: "Gebruik materialen die al aanwezig zijn.",
        how: "1. Zet het spel één keer precies in de gewenste beginopstelling. 2. Markeer met gekleurde tape waar onderdelen zoals blikken, pionnen of doelen moeten staan. 3. Gebruik bij meerdere onderdelen eventueel een eenvoudige kartonnen mal met uitsparingen. 4. Laat een bewoner na een beurt zelf opnieuw opstellen aan de hand van de markeringen. 5. Vergroot of vereenvoudig de markeringen als nog uitleg nodig is.",
        help: "Niet nodig.",
        image: "assets/images/opstelmarkering.jpg",
        imageAlt: "Markeringen op tafel die laten zien waar spelmaterialen teruggezet worden"
      }
    ]
  },
  {
    id: "score",
    number: 5,
    title: "Maak score zien en bijhouden eenvoudig",
    short: "Maak puntwaarden goed zichtbaar en houd tellen, onthouden en noteren zo eenvoudig mogelijk.",
    question: "Kunnen bewoners zelf zien hoeveel punten een spelactie waard is en hun score voldoende eenvoudig bijhouden?",
    criterion: "Bewoners kunnen de puntwaarden goed zien en hun score zonder hulp tellen en bijhouden.",
    observeTip: "Kijk niet alleen of iemand kan optellen. Let ook op kleine cijfers, slecht contrast, cijfers die door spelmateriaal worden afgedekt en het onthouden van tussenscores.",
    observationKey: "score",
    solutions: [
      {
        id: "kleurcodering-score",
        title: "Gebruik duidelijke kleurcodering voor punten",
        summary: "Grote kleurvlakken kunnen kleine of slecht zichtbare cijfers vervangen of ondersteunen.",
        materials: ["gekleurde tape, stickers of verf", "eenvoudige legenda op A4 of A3"],
        source: "Tape en stickers zijn vaak al aanwezig of eenvoudig verkrijgbaar bij huishoud- en hobbywinkels.",
        how: "1. Kies maximaal drie of vier duidelijke kleuren en koppel iedere kleur aan één puntwaarde. 2. Breng de kleur groot aan rond het bijbehorende scoregebied, bijvoorbeeld met tape, stickers of verf. 3. Maak daarnaast een eenvoudig overzicht waarop kleur en puntwaarde naast elkaar staan. 4. Plaats dit overzicht binnen het gezichtsveld van bewoners. 5. Controleer vanuit een (rol)stoel of kleuren en puntwaarden ook op afstand goed te zien zijn.",
        help: "Niet nodig. Vraag bewoners welke kleuren en grootte het duidelijkst zijn.",
        image: "assets/images/kleurcodering-score.jpg",
        imageAlt: "Spel met grote kleurcodering en eenvoudig puntenoverzicht"
      },
      {
        id: "score-cheatsheet",
        title: "Maak een scorekaart of spiekkaart",
        summary: "Een foto of tekening van het speelveld kan laten zien welke punten achter materiaal verborgen zitten.",
        materials: ["foto of eenvoudige tekening van het spel", "A4-papier", "insteekhoes of laminering"],
        source: "Maak de afbeelding zelf met een telefoon of gebruik een eenvoudige tekening.",
        how: "1. Maak een foto van het lege speelveld waarop alle puntwaarden zichtbaar zijn. 2. Vergroot de foto op A4 of A3. 3. Maak kleine cijfers waar nodig groter of zet de puntwaarden opnieuw duidelijk naast het beeld. 4. Plaats de kaart direct naast het spel en binnen het gezichtsveld van bewoners. 5. Laat bewoners tijdens het tellen de kaart gebruiken en controleer of afgedekte scores daarmee zelfstandig terug te vinden zijn.",
        help: "Niet nodig.",
        image: "assets/images/score-spiekkaart.jpg",
        imageAlt: "Grote scorekaart met afbeelding van het speelveld en puntwaarden"
      },
      {
        id: "eenvoudiger-tellen",
        title: "Maak het optellen eenvoudiger",
        summary: "Werk met lagere waarden, tel het aantal treffers of leg een eenvoudige rekenhulp klaar.",
        materials: ["eventueel eenvoudige rekenmachine", "scorekaart", "whiteboardstift en klein scorebord"],
        source: "Gebruik waar mogelijk aanwezige materialen. Eenvoudige rekenmachines en whiteboards zijn breed verkrijgbaar.",
        how: "1. Kijk waar het tellen lastig wordt: kleine cijfers, veel verschillende waarden, optellen of tussenscores onthouden. 2. Kies één vereenvoudiging, bijvoorbeeld alleen treffers tellen, lagere puntwaarden gebruiken of een eenvoudige rekenmachine klaarleggen. 3. Maak de gekozen telregel zichtbaar op het scoreblad. 4. Laat bewoners een volledige ronde zelf tellen. 5. Houd de oorspronkelijke puntentelling alleen als die zelfstandig goed blijft werken.",
        help: "Bespreek met bewoners welke manier van tellen duidelijk én leuk blijft.",
        image: "assets/images/eenvoudig-score-bijhouden.jpg",
        imageAlt: "Eenvoudige hulpmiddelen voor het bijhouden van een spelscore"
      }
    ]
  },
  {
    id: "succes",
    number: 6,
    title: "Stem de moeilijkheid af op de bewoners",
    short: "Het spel moet regelmatig lukken en tegelijk voldoende uitdaging blijven bieden.",
    question: "Lukt er tijdens het spelen regelmatig iets, zonder dat het spel voor iedereen te makkelijk wordt?",
    criterion: "Het spel lukt regelmatig en blijft tegelijk voldoende uitdagend voor de bewoners.",
    observeTip: "Let op herhaalde missers, frustratie of juist verveling. Kijk vooral naar verschillen tussen bewoners.",
    observationKey: "success",
    solutions: [
      {
        id: "meerdere-afstanden",
        title: "Maak meerdere speelafstanden met gekleurde tape",
        summary: "Bewoners kunnen een afstand kiezen die past bij hun eigen mogelijkheden.",
        materials: ["gekleurde vloertape of schilderstape"],
        source: "Tape is vaak aanwezig of eenvoudig verkrijgbaar bij huishoud- en hobbywinkels.",
        how: "1. Bepaal samen met bewoners een afstand waarop het spel regelmatig lukt. 2. Markeer die plek met een duidelijke strook gekleurde tape. 3. Maak eventueel een tweede lijn verder weg voor extra uitdaging. 4. Gebruik verschillende kleuren en geef de lijnen eenvoudige namen, bijvoorbeeld 'dichtbij' en 'extra uitdaging'. 5. Controleer dat rolstoelen veilig bij iedere lijn kunnen komen en dat niemand hoeft te manoeuvreren in een smalle doorgang.",
        help: "Niet nodig. Laat bewoners helpen bepalen welke afstanden prettig zijn.",
        image: "assets/images/meerdere-werpafstanden.jpg",
        imageAlt: "Twee gekleurde werplijnen op de vloer voor verschillende moeilijkheidsniveaus"
      },
      {
        id: "groter-doel",
        title: "Maak het doel tijdelijk groter of dichterbij",
        summary: "Vergroot de kans op een succesvolle poging zonder de basis van het spel te veranderen.",
        materials: ["karton, tape, grotere mand of groter doelvlak, afhankelijk van het spel"],
        source: "Gebruik eerst materialen die al aanwezig zijn.",
        how: "1. Kies één aanpassing: maak het doel groter, plaats het dichterbij of verlaag de benodigde werpkracht. 2. Maak de verandering eerst met eenvoudig materiaal, bijvoorbeeld karton, een grotere mand of een tijdelijke markering. 3. Laat bewoners meerdere pogingen doen. 4. Kijk of er vaker succes is zonder dat vrijwel iedere poging automatisch lukt. 5. Pas daarna formaat of afstand verder aan.",
        help: "Bij twijfel over fysieke belasting kan een bewegingsagoog of fysiotherapeut meekijken.",
        image: "assets/images/groter-doel.jpg",
        imageAlt: "Voorbeeld van een groter of dichterbij geplaatst mikdoel"
      }
    ]
  },
  {
    id: "feedback",
    number: 7,
    title: "Geef direct duidelijke, positieve spelfeedback",
    short: "Directe feedback maakt duidelijk wat een poging oplevert en kan motiveren om verder te spelen.",
    question: "Kunnen bewoners direct zien, horen of voelen of een poging raak of gelukt is?",
    criterion: "Bewoners merken direct wat een poging oplevert zonder dat iemand dit steeds hoeft te vertellen.",
    observeTip: "Kijk of bewoners na een worp, rol of andere poging zelf reageren op het resultaat, zonder dat iemand eerst vertelt wat er is gebeurd.",
    observationKey: "feedback",
    solutions: [
      {
        id: "belletje",
        title: "Voeg een eenvoudig geluid toe bij een treffer",
        summary: "Een klein belletje kan zonder elektronica hoorbare feedback geven.",
        materials: ["klein belletje", "touwtje, tape of eenvoudige bevestiging"],
        source: "Belletjes zijn vaak te vinden bij hobby-, cadeau- of huishoudwinkels.",
        how: "1. Kies een klein belletje met een duidelijk maar rustig geluid. 2. Zoek een plek waar een treffer of beweging van het doel het belletje kan laten rinkelen. 3. Bevestig het eerst tijdelijk met touw of tape. 4. Test meerdere treffers en missers om te controleren dat het belletje alleen op het juiste moment klinkt. 5. Vraag bewoners of het geluid prettig en duidelijk is. 6. Maak de bevestiging daarna pas steviger.",
        help: "Niet nodig, tenzij een stevige bevestiging nodig is.",
        image: "assets/images/belletje-spelfeedback.jpg",
        imageAlt: "Klein belletje dat geluid geeft wanneer een speldoel wordt geraakt"
      },
      {
        id: "zichtbare-reactie",
        title: "Maak een treffer zichtbaar door beweging of kleur",
        summary: "Gebruik bijvoorbeeld een licht klepje, lint of doelonderdeel dat zichtbaar beweegt.",
        materials: ["lint, licht klepje, karton, contrasterende tape"],
        source: "Gebruik eenvoudige hobby- of restmaterialen.",
        how: "1. Kies één licht onderdeel dat zichtbaar kan bewegen, bijvoorbeeld een lint, klepje of kaartje. 2. Plaats het zo dat een treffer het onderdeel in beweging brengt of van positie laat veranderen. 3. Zorg voor duidelijk contrast met de achtergrond. 4. Test vanuit de gebruikelijke speelpositie of bewoners de reactie goed zien. 5. Controleer dat het extra onderdeel de worp of het terughalen van materiaal niet belemmert.",
        help: "Niet nodig.",
        image: "assets/images/zichtbare-spelfeedback.jpg",
        imageAlt: "Speldoel met een zichtbaar bewegend onderdeel als directe feedback"
      },
      {
        id: "feedback-uitgebreid",
        title: "Alleen als extra: licht of geluid met elektronica",
        summary: "Gebruik dit pas wanneer een eenvoudige oplossing niet voldoende is en technische ondersteuning beschikbaar is.",
        materials: ["afhankelijk van oplossing: eenvoudige sensor, lamp of speaker"],
        source: "Niet nodig voor de basisversie van SpeelZelf+. Zie dit als een uitgebreide optie.",
        how: "1. Bepaal eerst welke feedback bewoners nu missen. 2. Controleer of kleur, beweging of een eenvoudig geluid dit al kan oplossen. 3. Kies alleen voor elektronica wanneer die eenvoudige opties niet voldoende zijn. 4. Bespreek met technische dienst of innovatieteam welke sensor, lamp of speaker geschikt en veilig is. 5. Bouw eerst één eenvoudige functie en test die met bewoners voordat extra effecten worden toegevoegd.",
        help: "Betrek hierbij een innovatieteam, technische dienst of iemand met technische ervaring.",
        image: "assets/images/japans-biljart-plus-feedback.jpg",
        imageAlt: "Uitgebreid voorbeeld van spelfeedback met licht of geluid"
      }
    ]
  },
  {
    id: "sociaal",
    number: 8,
    title: "Stimuleer samen spelen, meekijken en aanmoedigen",
    short: "Sociale interactie vergroot betrokkenheid. Maak samen spelen, meekijken en aanmoedigen gemakkelijk.",
    question: "Ontstaat er bij dit spel vanzelf ruimte om samen te spelen, naar elkaar te kijken of elkaar aan te moedigen?",
    criterion: "Het spel maakt samen spelen, meekijken of aanmoedigen gemakkelijk.",
    observeTip: "Kijk of andere bewoners aansluiten, reageren of op hun beurt wachten wanneer iemand speelt.",
    observationKey: "social",
    solutions: [
      {
        id: "duomodus",
        title: "Voeg een eenvoudige duomodus toe",
        summary: "Twee bewoners spelen samen voor één score of wisselen elkaar af.",
        materials: ["scorebord of scorekaart", "eventueel twee kleuren spelmateriaal"],
        source: "Gebruik bestaand spelmateriaal waar mogelijk.",
        how: "1. Kies een eenvoudige manier waarop twee bewoners samen spelen, bijvoorbeeld ieder één worp per beurt. 2. Maak op het scorebord één apart vak voor duo's. 3. Schrijf alleen de gezamenlijke score op; voeg geen extra ingewikkelde regels toe. 4. Laat twee bewoners een ronde proberen. 5. Kijk of de beurtwisseling vanzelf duidelijk blijft.",
        help: "Niet nodig. Laat bewoners zelf duo's vormen als dat past.",
        image: "assets/images/duomodus-scorebord.jpg",
        imageAlt: "Scorebord met apart vak voor duo's"
      },
      {
        id: "twee-kleuren",
        title: "Gebruik twee kleuren spelmateriaal voor beurtelings spelen",
        summary: "Verschillende kleuren maken meteen duidelijk wie welke worp heeft gedaan.",
        materials: ["twee kleuren ringen, ballen of zakjes"],
        source: "Kijk eerst of bestaand materiaal al in meerdere kleuren aanwezig is.",
        how: "1. Kies twee duidelijk verschillende kleuren ringen, ballen of werpzakjes. 2. Geef iedere speler één kleur. 3. Laat spelers om de beurt één of meerdere pogingen doen. 4. Laat de materialen liggen tot beide spelers klaar zijn wanneer dat bij het spel kan. 5. Gebruik de kleuren daarna om eenvoudig te zien welke poging van wie was.",
        help: "Niet nodig.",
        image: "assets/images/twee-kleuren-spelmateriaal.jpg",
        imageAlt: "Spelmateriaal in twee kleuren voor beurtelings samenspelen"
      },
      {
        id: "sociale-plek",
        title: "Plaats het spel waar anderen kunnen aansluiten",
        summary: "Een goede plek maakt meekijken en spontaan meedoen makkelijker.",
        materials: ["geschikte plek in de gezamenlijke ruimte"],
        source: "Geen extra materiaal nodig.",
        how: "1. Kies een plek in de gezamenlijke ruimte waar iemand kan spelen zonder een doorgang te blokkeren. 2. Zorg naast de speelpositie voor ruimte waar één of twee andere bewoners kunnen kijken of wachten. 3. Zet het spel zichtbaar vanuit de gebruikelijke zitplekken. 4. Probeer de opstelling tijdens een normaal moment op de afdeling. 5. Verplaats het spel als meekijken of aansluiten onhandig blijkt.",
        help: "Stem de plek af met collega's.",
        image: "assets/images/sociale-plek-spel.jpg",
        imageAlt: "Spelopstelling in een gezamenlijke ruimte met ruimte om mee te kijken"
      }
    ]
  },
  {
    id: "uitdagen",
    number: 9,
    title: "Maak competitie uitnodigend en positief",
    short: "Maak het aantrekkelijk om een eigen score of die van anderen te verbeteren, zonder dat winnen het enige doel wordt.",
    question: "Nodigt het spel bewoners uit om hun eigen score of die van anderen te verbeteren?",
    criterion: "Bewoners kunnen op een positieve manier hun eigen score of die van anderen proberen te verbeteren.",
    observeTip: "Let op opmerkingen als 'nog een keer', vergelijken van scores of interesse in wat een ander heeft gehaald.",
    observationKey: "competition",
    solutions: [
      {
        id: "leaderboard",
        title: "Maak een eenvoudig scorebord",
        summary: "Bewoners kunnen hun naam en score opschrijven en later hun eigen score of die van anderen proberen te verbeteren.",
        materials: ["klein whiteboard of gelamineerd scoreblad", "whiteboardstift", "houder of standaard"],
        source: "Whiteboards en stiften zijn vaak aanwezig of eenvoudig verkrijgbaar bij kantoor- en huishoudwinkels.",
        how: "1. Gebruik een klein whiteboard of gelamineerd scoreblad. 2. Maak maximaal drie duidelijke kolommen: naam, score en eventueel datum. 3. Schrijf groot en plaats het bord binnen bereik van bewoners. 4. Zet eventueel alvast een haalbare score van een welzijnsmedewerker, zorgmedewerker, familielid of bewoner op het bord als uitnodiging om die te verbeteren. 5. Wis oude scores regelmatig zodat het bord overzichtelijk blijft.",
        help: "Een collega, familielid of bewoner kan af en toe een haalbare score op het bord zetten als extra uitdaging.",
        image: "assets/images/leaderboard-eenvoudig.jpg",
        imageAlt: "Eenvoudig scorebord met naam, score en datum"
      },
      {
        id: "prijs-of-keuze",
        title: "Koppel een kleine prijs of keuze aan deelname of prestatie",
        summary: "Een kleine beloning of keuze kan extra motiveren, zonder dat alleen de hoogste score telt.",
        materials: ["kleine foto of kaartje", "eventueel kleine traktatie passend binnen voedings- en zorgafspraken", "scorebord of weekkaart"],
        source: "Gebruik iets dat past bij de afdeling en het bestaande activiteitenbeleid.",
        how: "1. Kies vooraf waarvoor iemand een kleine prijs of keuze kan krijgen, bijvoorbeeld hoogste score, persoonlijk record, meest gespeeld of duo van de week. 2. Kies iets kleins dat bij de afdeling past: een foto op het scorebord als 'speler van de week', keuze voor de volgende activiteit, keuze voor muziek tijdens een gezamenlijk moment, keuze voor een gerecht of tussendoortje wanneer dit binnen voedingsafspraken past, of een kleine traktatie wanneer dit binnen voedings- en zorgafspraken past. 3. Schrijf op het scorebord wanneer de nieuwe winnaar of deelnemer wordt gekozen. 4. Wissel de categorie af zodat niet steeds dezelfde bewoner kans maakt. 5. Houd de beloning ondersteunend aan het spelplezier en niet als verplichting om mee te doen.",
        help: "Stem dit af met het welzijnsteam.",
        image: "assets/images/kleine-prijs-of-keuze.jpg",
        imageAlt: "Eenvoudig voorbeeld van een kleine prijs of keuze bij deelname of prestatie"
      }
    ]
  },
  {
    id: "aantrekken",
    number: 10,
    title: "Laat het spel uitnodigen om te beginnen",
    short: "Maak het spel zichtbaar en aantrekkelijk genoeg om bewoners eraan te herinneren dat ze zelf kunnen spelen.",
    question: "Valt het spel voldoende op en geeft het bewoners een begrijpelijke aanleiding om ermee te beginnen?",
    criterion: "Het spel trekt aandacht en maakt duidelijk dat bewoners zelf kunnen beginnen.",
    observeTip: "Laat het spel een periode zichtbaar staan en kijk of bewoners ernaar kijken, erover praten of zelf dichterbij komen.",
    observationKey: "trigger",
    solutions: [
      {
        id: "speel-poster",
        title: "Maak een eenvoudige speelposter",
        summary: "Eén foto en een korte uitnodiging kunnen genoeg zijn om het spel onder de aandacht te brengen.",
        materials: ["A4- of A3-papier", "foto van het spel of iemand die speelt", "eventueel insteekhoes"],
        source: "Gebruik een eigen foto en printmateriaal van de afdeling.",
        how: "1. Maak één duidelijke foto van het spel of van iemand die het speelt. 2. Zet de naam van het spel groot bovenaan. 3. Voeg één korte uitnodiging toe, bijvoorbeeld 'Speel een ronde ringwerpen' of 'Probeer de score te verbeteren'. 4. Print op A4 of A3. 5. Hang de poster direct bij het spel en controleer vanuit de gezamenlijke ruimte of hij goed zichtbaar is.",
        help: "Niet nodig.",
        image: "assets/images/speel-poster.jpg",
        imageAlt: "Eenvoudige poster die bewoners uitnodigt een beweegspel te spelen"
      },
      {
        id: "zichtbaar-startklaar",
        title: "Laat het spel zichtbaar en herkenbaar startklaar staan",
        summary: "Een duidelijke opstelling kan op zichzelf al een uitnodiging zijn.",
        materials: ["vaste plek", "open bak met materialen", "eventueel scorebord"],
        source: "Gebruik bestaande materialen.",
        how: "1. Kies een vaste plek waar het spel zichtbaar mag blijven staan. 2. Zet alleen de eerste benodigde materialen klaar; berg reserveonderdelen apart op. 3. Plaats een korte startinstructie en eventueel het scorebord direct erbij. 4. Bekijk de opstelling vanaf de gebruikelijke plekken van bewoners. 5. Haal losse of drukke elementen weg als niet meteen duidelijk is waarmee iemand kan beginnen.",
        help: "Stem de vaste plek af met collega's.",
        image: "assets/images/zichtbaar-startklaar.jpg",
        imageAlt: "Spel dat zichtbaar en startklaar in de gezamenlijke ruimte staat"
      },
      {
        id: "subtiele-trigger",
        title: "Gebruik alleen indien passend een subtiele aandachtstrekker",
        summary: "Een klein lampje, rustige muziek of beweging kan helpen, maar moet niet onrustig of storend worden.",
        materials: ["bijvoorbeeld led-kaars, eenvoudig bewegingslampje of bestaande bluetoothspeaker"],
        source: "Gebruik bij voorkeur wat al aanwezig is. Eenvoudige lampjes zijn breed verkrijgbaar bij huishoudwinkels.",
        how: "1. Kies maximaal één rustige aandachtstrekker, bijvoorbeeld een led-kaars, bewegingslampje of herkenbare muziek op een laag volume. 2. Zet deze direct bij het spel. 3. Probeer hem eerst tijdens een rustig moment. 4. Kijk of bewoners nieuwsgierig reageren zonder dat andere activiteiten of bewoners worden gestoord. 5. Gebruik de trigger alleen wanneer deze daadwerkelijk helpt om het spel op te merken.",
        help: "Bespreek gebruik van geluid of licht met collega's en bewoners.",
        image: "assets/images/subtiele-trigger.jpg",
        imageAlt: "Rustige aandachtstrekker naast een beweegspel"
      }
    ]
  }
];

const observationItems = [
  { key: "rules", question: "Begrijpen bewoners hoe het spel werkt en wat de basisregels zijn?" },
  { key: "start", question: "Kunnen bewoners het spel zelf pakken en beginnen met spelen?" },
  { key: "reach", question: "Kunnen bewoners vanuit hun (rol)stoel overal goed bij?" },
  { key: "reset", question: "Kunnen bewoners na een beurt de materialen zelf verzamelen en het spel klaarmaken voor de volgende beurt?" },
  { key: "score", question: "Kunnen bewoners de puntwaarden goed zien en hun score zelf bijhouden?" },
  { key: "success", question: "Past de moeilijkheid bij de bewoners: niet te moeilijk en niet te makkelijk?" },
  { key: "feedback", question: "Is voor bewoners direct duidelijk of een poging raak of gelukt is?" },
  { key: "social", question: "Ontstaat er gemakkelijk samen spelen, meekijken of aanmoedigen?" },
  { key: "competition", question: "Willen bewoners hun eigen score of die van anderen proberen te verbeteren?" },
  { key: "trigger", question: "Trekt het spel aandacht wanneer het zichtbaar in de gezamenlijke ruimte staat?" }
];

const helperOptions = [
  { id: "collega", label: "Collega welzijn / activiteitenbegeleiding" },
  { id: "bewoners", label: "Bewoners" },
  { id: "familie", label: "Familie / bezoeker" },
  { id: "vrijwilliger", label: "Vrijwilliger" },
  { id: "techniek", label: "Technische dienst" },
  { id: "facilitair", label: "Facilitaire dienst" },
  { id: "innovatie", label: "Innovatieteam" },
  { id: "bewegen", label: "Bewegingsagoog / fysiotherapeut" }
];

const STORAGE_KEY = "speelzelfplus-state-v3";

const defaultState = {
  screen: "start",
  gameName: "",
  observation: {},
  observationNote: "",
  principleIndex: 0,
  principleAnswers: {}
};

let state = loadState();
const app = document.getElementById("app");
const resetButton = document.getElementById("resetButton");
const brandButton = document.getElementById("brandButton");

brandButton.addEventListener("click", () => {
  state.screen = "start";
  saveState();
  render();
  window.scrollTo({ top: 0 });
});

resetButton.addEventListener("click", () => {
  const ok = confirm("Wil je alle ingevulde gegevens en gekozen aanpassingen verwijderen en opnieuw beginnen?");
  if (!ok) return;
  state = cloneDefaultState();
  saveState();
  render();
  window.scrollTo({ top: 0 });
});

function cloneDefaultState() {
  return JSON.parse(JSON.stringify(defaultState));
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return cloneDefaultState();
    return { ...cloneDefaultState(), ...JSON.parse(saved) };
  } catch {
    return cloneDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setScreen(screen) {
  state.screen = screen;
  saveState();
  render();
  window.scrollTo({ top: 0, behavior: "auto" });
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function topBackMarkup(label = "Terug") {
  return `
    <div class="top-actions">
      <button class="back-button" id="topBackButton" type="button" aria-label="${escapeHtml(label)}">
        <span aria-hidden="true">←</span> ${escapeHtml(label)}
      </button>
    </div>`;
}

function bindTopBack(handler) {
  const button = document.getElementById("topBackButton");
  if (button) button.addEventListener("click", handler);
}

function principleProgress(index) {
  const pct = ((index + 1) / principles.length) * 100;
  return `
    <div class="principle-progress" aria-label="Speelpunt ${index + 1} van ${principles.length}">
      <div class="principle-progress__meta">
        <span>Speelpunt ${index + 1} van ${principles.length}</span>
      </div>
      <div class="progress-track" aria-hidden="true">
        <div class="progress-bar" style="width:${pct}%"></div>
      </div>
    </div>`;
}

function render() {
  resetButton.hidden = state.screen === "start";

  if (state.screen === "start") renderStart();
  if (state.screen === "observe") renderObservation();
  if (state.screen === "principle") renderPrinciple();
  if (state.screen === "plan") renderPlan();

  setTimeout(() => app.focus({ preventScroll: true }), 0);
}

function renderStart() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-game-motifs" aria-hidden="true">
        <span class="motif motif--ball"></span>
      </div>

      <h1 class="hero-title">Van bestaand beweegspel<br>naar <span class="title-accent">zelfstandig speelbaar</span>.</h1>
      <p class="lead">SpeelZelf+ helpt je stap voor stap om een bestaand beweegspel aan te passen, zodat bewoners het ook zonder begeleiding kunnen spelen.</p>

      <div class="hero-card">
        <div class="hero-card__accent" aria-hidden="true"><span></span><span></span><span></span></div>
        <label class="field-label field-label--large" for="gameName">Welk spel wil je aanpassen?</label>
        <input
          class="text-input"
          id="gameName"
          type="text"
          autocomplete="off"
          value="${escapeHtml(state.gameName)}"
          placeholder="Bijvoorbeeld: ringwerpen, blikgooien, sjoelen, klittenband darten…"
        >
        <div class="button-row">
          <button class="primary-button primary-button--accent" id="startButton" type="button">
            Start met dit spel <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>`;

  const input = document.getElementById("gameName");
  const startButton = document.getElementById("startButton");
  startButton.disabled = !input.value.trim();

  input.addEventListener("input", () => {
    state.gameName = input.value;
    saveState();
    startButton.disabled = !input.value.trim();
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter" && input.value.trim()) startObservation();
  });

  startButton.addEventListener("click", startObservation);

  function startObservation() {
    state.gameName = input.value.trim();
    setScreen("observe");
  }
}

function renderObservation() {
  const rows = observationItems.map((item, index) => {
    const current = state.observation[item.key] || "";
    return `
      <div class="observation-item">
        <div class="observation-item__number">${index + 1}</div>
        <div class="observation-item__content">
          <p>${escapeHtml(item.question)}</p>
          <div class="segmented" role="radiogroup" aria-label="${escapeHtml(item.question)}">
            ${observationChoice(item.key, "yes", "Ja", current)}
            ${observationChoice(item.key, "no", "Nee", current)}
            ${observationChoice(item.key, "not_tested", "Niet getest", current)}
          </div>
        </div>
      </div>`;
  }).join("");

  app.innerHTML = `
    ${topBackMarkup("Terug naar start")}
    <section class="content-card content-card--stage observation-stage">
      <div class="stage-chip">Eerste test</div>
      <h1 class="stage-title">Eerst observeren</h1>
      <p class="stage-lead">Laat bewoners ${escapeHtml(state.gameName)} proberen zoals het nu is, zonder tijdens het spelen automatisch te helpen.</p>
      <p class="section-intro">Beantwoord wat je kunt zien. Kies <strong>Niet getest</strong> als iets tijdens deze eerste poging nog niet duidelijk wordt.</p>

      <div class="observation-list">${rows}</div>

      <details class="observation-note">
        <summary>Iets anders opgevallen? <span>(optioneel)</span></summary>
        <div class="observation-note__body">
          <textarea class="textarea textarea--compact" id="observationNote">${escapeHtml(state.observationNote)}</textarea>
        </div>
      </details>

      <div class="bottom-action">
        <button class="primary-button" id="observeNext" type="button">
          Naar de 10 speelpunten <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>`;

  bindTopBack(() => setScreen("start"));

  document.querySelectorAll('input[name^="obs-"]').forEach(input => {
    input.addEventListener("change", () => {
      const key = input.name.replace("obs-", "");
      state.observation[key] = input.value;
      saveState();
    });
  });

  const note = document.getElementById("observationNote");
  if (note) {
    note.addEventListener("input", event => {
      state.observationNote = event.target.value;
      saveState();
    });
  }

  document.getElementById("observeNext").addEventListener("click", () => {
    state.principleIndex = 0;
    setScreen("principle");
  });
}

function observationChoice(key, value, label, current) {
  return `
    <label>
      <input type="radio" name="obs-${key}" value="${value}" ${current === value ? "checked" : ""}>
      <span>${escapeHtml(label)}</span>
    </label>`;
}

function getPrincipleState(id) {
  if (!state.principleAnswers[id]) {
    state.principleAnswers[id] = {
      selectedSolutions: [],
      noChange: false,
      helpers: {},
      helperNotes: {},
      customSolution: "",
      customMaterials: "",
      customSource: "",
      customHow: "",
      customHelpers: [],
      customHelperNote: ""
    };
  }

  const answer = state.principleAnswers[id];
  answer.selectedSolutions ||= [];
  answer.helpers ||= {};
  answer.helperNotes ||= {};
  answer.customHelpers ||= [];
  answer.noChange = Boolean(answer.noChange);
  return answer;
}

function renderPrinciple() {
  const p = principles[state.principleIndex];
  const answer = getPrincipleState(p.id);
  const observed = state.observation[p.observationKey] || "";

  const observationMemory = {
    yes: "Ja",
    no: "Nee",
    not_tested: "Niet getest"
  }[observed];

  app.innerHTML = `
    ${topBackMarkup(state.principleIndex === 0 ? "Terug naar observatie" : "Vorig speelpunt")}
    ${principleProgress(state.principleIndex)}

    <section class="content-card principle-card principle-${((p.number - 1) % 5) + 1}">
      <div class="principle-heading">
        <div class="principle-number" aria-hidden="true">${p.number}</div>
        <div>
          <h1 class="principle-title">${escapeHtml(p.title)}</h1>
          <p class="principle-intro">${escapeHtml(p.short)}</p>
        </div>
      </div>

      ${observationMemory ? `
        <div class="observation-memory">
          <span>Eerste test</span>
          <strong>${observationMemory}</strong>
        </div>` : ""}

      <div class="inspiration-heading">
        <h2>Mogelijke aanpassingen</h2>
      </div>

      <div class="solution-list">
        ${p.solutions.map((solution, index) => solutionCard(p, solution, answer, index)).join("")}
      </div>

      ${customSolutionMarkup(p, answer)}

      <label class="no-change-option">
        <input id="noChange" type="checkbox" ${answer.noChange ? "checked" : ""}>
        <span>
          <strong>Geen aanpassing nodig bij dit speelpunt</strong>
          <small>Ga verder als het huidige spel hier al goed genoeg op aansluit.</small>
        </span>
      </label>

      <div class="bottom-action">
        <button class="primary-button" id="nextButton" type="button">
          ${state.principleIndex === principles.length - 1 ? "Maak het SpeelZelf+ plan" : "Volgend speelpunt"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </section>`;

  activateImageFallbacks(app);
  syncNextButton(answer);

  bindTopBack(() => {
    if (state.principleIndex === 0) {
      setScreen("observe");
      return;
    }
    state.principleIndex -= 1;
    saveState();
    render();
    window.scrollTo({ top: 0 });
  });

  bindSolutionControls(p, answer);

  document.getElementById("noChange").addEventListener("change", event => {
    answer.noChange = event.target.checked;

    if (answer.noChange) {
      answer.selectedSolutions = [];
      answer.customSolution = "";
      answer.customMaterials = "";
      answer.customSource = "";
      answer.customHow = "";
      answer.customHelpers = [];
      answer.customHelperNote = "";

      document.querySelectorAll('input[data-solution-id]').forEach(input => {
        input.checked = false;
        const card = input.closest(".solution-card");
        card?.classList.remove("is-selected");
        const details = card?.querySelector(".solution-details");
        if (details) details.open = false;
        const picker = card?.querySelector(`[data-helper-picker="${input.dataset.solutionId}"]`);
        if (picker) picker.hidden = true;
      });

      const customSolution = document.getElementById("customSolution");
      const customMaterials = document.getElementById("customMaterials");
      const customSource = document.getElementById("customSource");
      const customHow = document.getElementById("customHow");
      if (customSolution) customSolution.value = "";
      if (customMaterials) customMaterials.value = "";
      if (customSource) customSource.value = "";
      if (customHow) customHow.value = "";
      document.querySelectorAll('input[data-helper-solution^="custom-"]').forEach(input => { input.checked = false; });
      const customNote = document.querySelector('input[data-helper-note^="custom-"]');
      if (customNote) customNote.value = "";
    }

    saveState();
    syncNextButton(answer);
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    if (!canContinuePrinciple(answer)) return;

    if (state.principleIndex === principles.length - 1) {
      setScreen("plan");
      return;
    }

    state.principleIndex += 1;
    saveState();
    render();
    window.scrollTo({ top: 0 });
  });
}

function solutionCard(p, solution, answer, index) {
  const selected = answer.selectedSolutions.includes(solution.id);

  return `
    <article class="solution-card ${selected ? "is-selected" : ""}" data-tone="${(index % 4) + 1}">
      <div class="solution-card__topline"></div>

      <label class="solution-select">
        <input type="checkbox" data-solution-id="${solution.id}" ${selected ? "checked" : ""}>
        <span class="solution-select__text">
          <strong>${escapeHtml(solution.title)}</strong>
          <small>${escapeHtml(solution.summary)}</small>
        </span>
      </label>

      ${imageMarkup(solution)}

      <details class="solution-details" ${selected ? "open" : ""}>
        <summary>Zo maak je dit</summary>
        <div class="solution-details__body">
          <div class="solution-grid">
            <div class="detail-row">
              <strong>Materialen</strong>
              <p>${escapeHtml(solution.materials.join(", "))}</p>
            </div>
            <div class="detail-row">
              <strong>Waar te vinden</strong>
              <p>${escapeHtml(solution.source)}</p>
            </div>
            <div class="detail-row">
              <strong>Stap voor stap</strong>
              ${stepsMarkup(solution.how)}
            </div>
            <div class="detail-row detail-row--tip">
              <strong>Hulp kan handig zijn</strong>
              <p>${escapeHtml(solution.help)}</p>
            </div>
          </div>
        </div>
      </details>

      <div class="helper-picker-wrap" data-helper-picker="${solution.id}" ${selected ? "" : "hidden"}>
        ${helperPickerMarkup(solution.id, answer.helpers[solution.id] || [], answer.helperNotes[solution.id] || "")}
      </div>
    </article>`;
}

function stepsMarkup(text) {
  const steps = String(text)
    .split(/\s+(?=\d+\.\s)/)
    .map(step => step.replace(/^\d+\.\s*/, "").trim())
    .filter(Boolean);

  if (steps.length <= 1) return `<p>${escapeHtml(text)}</p>`;
  return `<ol class="steps-list">${steps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`;
}

function helperPickerMarkup(solutionId, selectedHelpers, note) {
  return `
    <div class="helper-picker">
      <p class="helper-picker__title">Wie helpt hierbij? <span>(optioneel)</span></p>
      <div class="helper-chips">
        ${helperOptions.map(helper => `
          <label>
            <input
              type="checkbox"
              data-helper-solution="${solutionId}"
              value="${helper.id}"
              ${selectedHelpers.includes(helper.id) ? "checked" : ""}
            >
            <span>${escapeHtml(helper.label)}</span>
          </label>`).join("")}
      </div>
      <input
        class="text-input text-input--small"
        data-helper-note="${solutionId}"
        value="${escapeHtml(note)}"
        placeholder="Wat moet deze persoon helpen doen?"
      >
    </div>`;
}

function customSolutionMarkup(p, answer) {
  const active = Boolean(answer.customSolution.trim());

  return `
    <details class="custom-solution" ${active ? "open" : ""}>
      <summary>Eigen oplossing toevoegen</summary>
      <div class="custom-solution__body">
        <label class="field-label" for="customSolution">Wat wil je aanpassen?</label>
        <textarea class="textarea" id="customSolution" placeholder="Beschrijf kort de oplossing die je wilt uitvoeren.">${escapeHtml(answer.customSolution)}</textarea>

        <div class="custom-fields ${active ? "" : "is-muted"}">
          <label class="field-label" for="customMaterials">Materialen <span class="muted">(optioneel)</span></label>
          <input class="text-input" id="customMaterials" value="${escapeHtml(answer.customMaterials)}" placeholder="Bijvoorbeeld: poolnoodle, klittenband, tape">

          <label class="field-label" for="customSource">Waar te vinden <span class="muted">(optioneel)</span></label>
          <input class="text-input" id="customSource" value="${escapeHtml(answer.customSource)}" placeholder="Bijvoorbeeld: al aanwezig, Action, Wibra, HEMA">

          <label class="field-label" for="customHow">Hoe voer je dit uit? <span class="muted">(optioneel)</span></label>
          <textarea class="textarea textarea--compact" id="customHow" placeholder="Schrijf de stappen op die nodig zijn.">${escapeHtml(answer.customHow)}</textarea>

          ${helperPickerMarkup(`custom-${p.id}`, answer.customHelpers || [], answer.customHelperNote || "")}
        </div>
      </div>
    </details>`;
}

function bindSolutionControls(p, answer) {
  document.querySelectorAll('input[data-solution-id]').forEach(input => {
    input.addEventListener("change", () => {
      const id = input.dataset.solutionId;
      const card = input.closest(".solution-card");
      const details = card?.querySelector(".solution-details");
      const helperPicker = card?.querySelector(`[data-helper-picker="${id}"]`);

      if (input.checked) {
        if (!answer.selectedSolutions.includes(id)) answer.selectedSolutions.push(id);
        answer.noChange = false;
        const noChange = document.getElementById("noChange");
        if (noChange) noChange.checked = false;
      } else {
        answer.selectedSolutions = answer.selectedSolutions.filter(item => item !== id);
      }

      card?.classList.toggle("is-selected", input.checked);
      if (details) details.open = input.checked;
      if (helperPicker) helperPicker.hidden = !input.checked;

      saveState();
      syncNextButton(answer);
    });
  });

  document.querySelectorAll('input[data-helper-solution]').forEach(input => {
    input.addEventListener("change", () => {
      const solutionId = input.dataset.helperSolution;
      const isCustom = solutionId.startsWith("custom-");
      const target = isCustom ? answer.customHelpers : (answer.helpers[solutionId] ||= []);

      if (input.checked && !target.includes(input.value)) target.push(input.value);

      if (!input.checked) {
        if (isCustom) answer.customHelpers = target.filter(value => value !== input.value);
        else answer.helpers[solutionId] = target.filter(value => value !== input.value);
      }

      saveState();
    });
  });

  document.querySelectorAll('input[data-helper-note]').forEach(input => {
    input.addEventListener("input", () => {
      const solutionId = input.dataset.helperNote;
      if (solutionId.startsWith("custom-")) answer.customHelperNote = input.value;
      else answer.helperNotes[solutionId] = input.value;
      saveState();
    });
  });

  const customSolution = document.getElementById("customSolution");
  if (customSolution) {
    customSolution.addEventListener("input", event => {
      answer.customSolution = event.target.value;
      if (event.target.value.trim()) {
        answer.noChange = false;
        const noChange = document.getElementById("noChange");
        if (noChange) noChange.checked = false;
      }
      saveState();
      syncNextButton(answer);
    });
  }

  const customMaterials = document.getElementById("customMaterials");
  if (customMaterials) {
    customMaterials.addEventListener("input", event => {
      answer.customMaterials = event.target.value;
      saveState();
    });
  }

  const customSource = document.getElementById("customSource");
  if (customSource) {
    customSource.addEventListener("input", event => {
      answer.customSource = event.target.value;
      saveState();
    });
  }

  const customHow = document.getElementById("customHow");
  if (customHow) {
    customHow.addEventListener("input", event => {
      answer.customHow = event.target.value;
      saveState();
    });
  }
}

function canContinuePrinciple(answer) {
  return Boolean(answer.noChange || answer.selectedSolutions.length || answer.customSolution.trim());
}

function syncNextButton(answer) {
  const button = document.getElementById("nextButton");
  if (button) button.disabled = !canContinuePrinciple(answer);
}

function imageMarkup(solution, plan = false) {
  const wrapClass = plan ? "plan-image-wrap" : "solution-image-wrap";
  const imageClass = plan ? "plan-image" : "solution-image";

  return `
    <div class="${wrapClass}" aria-hidden="true">
      <img class="${imageClass}" src="${escapeHtml(solution.image)}" alt="">
      <div class="image-placeholder" hidden>
        <span>Illustratie toevoegen</span>
        <code>${escapeHtml(solution.image)}</code>
      </div>
    </div>`;
}

function activateImageFallbacks(root = document) {
  root.querySelectorAll(".solution-image, .plan-image").forEach(image => {
    const wrapper = image.parentElement;
    const placeholder = wrapper.querySelector(".image-placeholder");

    const fail = () => {
      image.hidden = true;
      if (placeholder) placeholder.hidden = false;
    };

    image.addEventListener("error", fail, { once: true });
    if (image.complete && image.naturalWidth === 0) fail();
  });
}

function helperLabels(ids = []) {
  return ids
    .map(id => helperOptions.find(helper => helper.id === id)?.label)
    .filter(Boolean);
}

function chosenPlanItems() {
  const items = [];

  principles.forEach(principle => {
    const answer = getPrincipleState(principle.id);

    answer.selectedSolutions.forEach(solutionId => {
      const solution = principle.solutions.find(item => item.id === solutionId);
      if (!solution) return;

      items.push({
        principle,
        type: "library",
        solution,
        helpers: helperLabels(answer.helpers[solutionId] || []),
        helperNote: answer.helperNotes[solutionId] || ""
      });
    });

    if (answer.customSolution.trim()) {
      items.push({
        principle,
        type: "custom",
        solution: {
          id: `custom-${principle.id}`,
          title: "Eigen oplossing",
          summary: answer.customSolution.trim(),
          materials: answer.customMaterials.trim()
            ? answer.customMaterials.split(",").map(item => item.trim()).filter(Boolean)
            : [],
          source: answer.customSource.trim() || "Nog bepalen.",
          how: answer.customHow.trim() || answer.customSolution.trim(),
          help: "",
          image: "",
          imageAlt: ""
        },
        helpers: helperLabels(answer.customHelpers || []),
        helperNote: answer.customHelperNote || ""
      });
    }
  });

  return items;
}

function renderPlan() {
  const items = chosenPlanItems();

  app.innerHTML = `
    ${topBackMarkup("Aanpassingen wijzigen")}

    <section class="content-card plan-shell">
      <div class="plan-header">
        <h1 class="stage-title plan-title"><span class="brand-speel">Speel</span><span class="brand-zelf">Zelf</span><span class="brand-plus">+</span> <span class="plan-title__word">plan</span></h1>
        <p class="plan-game">${escapeHtml(state.gameName)}</p>
        <p class="plan-intro">Voer de gekozen aanpassingen één voor één uit en probeer ze tussendoor met bewoners voordat je iets definitief maakt.</p>
      </div>

      <section class="plan-section">
        <h2>Dit ga je aanpassen</h2>
        ${items.length
          ? items.map(item => planItemMarkup(item)).join("")
          : `<div class="plan-empty">Je hebt geen aanpassingen gekozen.</div>`}
      </section>

      ${items.length ? materialOverviewMarkup(items) : ""}

      <section class="plan-section test-section">
        <div class="test-section__intro">
          <span class="stage-chip stage-chip--test">Na uitvoering</span>
          <h2>Test het aangepaste spel opnieuw</h2>
          <p>Laat bewoners opnieuw spelen zonder automatisch te helpen. Gebruik de vakjes hieronder pas nadat de aanpassingen zijn uitgevoerd.</p>
        </div>

        <div class="test-grid">
          ${principles.map(testCriterionMarkup).join("")}
        </div>
      </section>

      <div class="plan-export no-print">
        <div>
          <h2>Bewaar het plan als PDF</h2>
          <p>De printweergave bevat de gekozen aanpassingen, materialen, illustraties en testvakjes.</p>
        </div>
        <button class="primary-button primary-button--accent" id="printPlan" type="button">
          Afdrukken / opslaan als PDF
        </button>
      </div>
    </section>`;

  activateImageFallbacks(app);

  bindTopBack(() => {
    state.principleIndex = principles.length - 1;
    setScreen("principle");
  });

  document.getElementById("printPlan").addEventListener("click", () => window.print());

  document.querySelectorAll("[data-edit-principle]").forEach(button => {
    button.addEventListener("click", () => {
      const index = principles.findIndex(principle => principle.id === button.dataset.editPrinciple);
      if (index < 0) return;
      state.principleIndex = index;
      setScreen("principle");
    });
  });
}

function planItemMarkup(item) {
  const solution = item.solution;
  const helperText = item.helpers.length ? item.helpers.join(", ") : "Geen extra hulp gekozen.";

  return `
    <article class="plan-card">
      <div class="plan-card__header">
        <h3>${escapeHtml(solution.title)}</h3>
        <p>${escapeHtml(item.principle.title)}</p>
      </div>

      <div class="plan-card__body">
        ${solution.image ? imageMarkup(solution, true) : ""}

        <div class="plan-detail-grid">
          <div class="detail-row">
            <strong>Aanpassing</strong>
            <p>${escapeHtml(solution.summary)}</p>
          </div>

          <div class="detail-row">
            <strong>Materialen</strong>
            <p>${solution.materials.length ? escapeHtml(solution.materials.join(", ")) : "Nog bepalen."}</p>
          </div>

          <div class="detail-row">
            <strong>Waar te vinden</strong>
            <p>${escapeHtml(solution.source || "Nog bepalen.")}</p>
          </div>

          <div class="detail-row detail-row--wide">
            <strong>Stap voor stap</strong>
            ${stepsMarkup(solution.how)}
          </div>

          <div class="detail-row detail-row--wide">
            <strong>Hulp bij deze aanpassing</strong>
            <p>${escapeHtml(helperText)}${item.helperNote ? ` — ${escapeHtml(item.helperNote)}` : ""}</p>
          </div>
        </div>

        <div class="plan-card__actions no-print">
          <button type="button" data-edit-principle="${item.principle.id}">Deze aanpassing wijzigen</button>
        </div>
      </div>
    </article>`;
}

function materialOverviewMarkup(items) {
  return `
    <section class="plan-section material-overview">
      <h2>Materialen per aanpassing</h2>

      <div class="material-groups">
        ${items.map(item => `
          <div class="material-group">
            <h3>${escapeHtml(item.solution.title)}</h3>
            ${item.solution.materials.length
              ? `<ul>${item.solution.materials.map(material => `<li>${escapeHtml(material)}</li>`).join("")}</ul>`
              : `<p>Nog bepalen.</p>`}
            <p><strong>Waar:</strong> ${escapeHtml(item.solution.source || "Nog bepalen.")}</p>
          </div>`).join("")}
      </div>
    </section>`;
}

function testCriterionMarkup(principle) {
  return `
    <div class="test-card">
      <h3>${escapeHtml(principle.title)}</h3>
      <p>${escapeHtml(principle.criterion)}</p>
      <div class="paper-checks" aria-label="Na uitvoering invullen">
        <span>□ Werkt goed</span>
        <span>□ Nog aanpassen</span>
      </div>
    </div>`;
}

render();
