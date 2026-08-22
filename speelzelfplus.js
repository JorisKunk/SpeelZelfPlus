/*
  SpeelZelf+
  =============
  Alle inhoud staat hieronder centraal bij `principles`.

  AFBEELDINGEN TOEVOEGEN
  ----------------------
  1. Zet je afbeelding in assets/images/
  2. Vul bij de gewenste oplossing alleen de bestandsnaam in bij `image:`
     Bijvoorbeeld: image: "Instructieblad spellen.png"

  Verschillende beeldformaten zijn toegestaan. De CSS behoudt de verhouding
  automatisch met object-fit: contain. Ontbreekt een afbeelding, dan wordt
  op die plek geen afbeeldingsvak getoond.
*/

const principles = [
  {
    id: "bekend",
    number: 1,
    title: "Bouw voort op een herkenbare spelvorm",
    short: "Een spel hoeft niet letterlijk bekend te zijn, maar de spelvorm, handelingen en bedoeling moeten voldoende herkenbaar zijn om zonder veel uitleg te kunnen beginnen.",
    question: "Herkennen bewoners de spelvorm of belangrijkste handelingen en begrijpen ze wat de bedoeling is?",
    criterion: "Bewoners herkennen de belangrijkste spelhandelingen en begrijpen de basisregels met hooguit incidentele ondersteuning.",
    observeTip: "Laat bewoners eerst zelf vertellen of voordoen wat de bedoeling is. Vul pas aan als dat nodig is.",
    observationKey: "rules",
    solutions: [
      {
        id: "instructie-a3",
        title: "Maak een instructieblad met duidelijke stappen",
        summary: "Een korte visuele uitleg helpt bewoners de spelregels terug te vinden zonder steeds om hulp te vragen.",
        materials: ["A3-papier", "printer", "eventueel lamineerhoes of insteekhoes", "foto's of eenvoudige icoontjes"],
        source: "A3-papier is verkrijgbaar bij kantoor- en printwinkels; A3-karton en lamineerhoezen zijn bijvoorbeeld verkrijgbaar bij Action. Gebruik voor het printen een beschikbare printer op locatie.",
        how: "1. Schrijf alleen de handelingen op die bewoners nodig hebben om zelfstandig te beginnen en door te spelen. 2. Beperk de instructie bij voorkeur tot drie tot vijf korte stappen. 3. Zet bij elke stap één foto van de handeling of zoek een passend icoontje op internet. 4. Zet de tekst groot naast of onder het beeld. 5. Print het blad op A3 en plaats het direct bij het spel.",
        help: "Test met een bewoner of het instructieblad duidelijk is.",
        image: "Instructieblad spellen.png",
        imageAlt: "Voorbeeld van een A3-instructieblad met duidelijke stappen voor een beweegspel"
      },
      {
        id: "behoud-kernhandeling",
        title: "Behoud de herkenbare kernhandeling",
        summary: "Verander zo min mogelijk aan de handeling die bewoners al begrijpen, bijvoorbeeld rollen, werpen of schuiven. Pas vooral de ondersteuning eromheen aan.",
        materials: ["het bestaande spel", "eventueel tape of losse hulpmiddelen voor een tijdelijke test"],
        source: "Gebruik eerst het bestaande materiaal. Voeg alleen iets toe wanneer een concrete drempel daarom vraagt.",
        how: "1. Benoem wat de centrale spelhandeling is, bijvoorbeeld een bal rollen of een ring werpen. 2. Laat bewoners deze handeling uitvoeren met het oorspronkelijke spel. 3. Houd deze handeling en de basisregels zoveel mogelijk gelijk. 4. Pas eerst onderdelen eromheen aan, zoals bereikbaarheid, score, uitleg of het terughalen van materiaal. 5. Controleer met bewoners of het spel nog herkenbaar aanvoelt.",
        help: "Laat bewoners aangeven welke onderdelen voor hen bij het spel horen en welke aanpassingen de herkenbaarheid juist zouden verstoren.",
        image: "",
        imageAlt: ""
      }
    ]
  },
  {
    id: "starten",
    number: 2,
    title: "Zorg dat bewoners zelf kunnen beginnen met spelen",
    short: "Zet het spel zichtbaar, compleet en startklaar neer, zodat bewoners vanuit hun rolstoel kunnen beginnen zonder dat een medewerker eerst iets hoeft te pakken of klaar te zetten.",
    question: "Kunnen bewoners beginnen met spelen zonder dat een medewerker het spel eerst hoeft klaar te zetten?",
    criterion: "Bewoners kunnen beginnen met spelen zonder dat een medewerker het spel eerst hoeft klaar te zetten.",
    observeTip: "Zet het spel neer zoals het normaal beschikbaar is en kijk of bewoners zonder hulp kunnen beginnen.",
    observationKey: "start",
    solutions: [
      {
        id: "vaste-plek",
        title: "Geef het spel een vaste, zichtbare plek",
        summary: "Als het spel een vaste plek in de ruimte heeft, kunnen bewoners zelf beginnen met spelen wanneer ze willen.",
        materials: ["vrije plek in de gezamenlijke ruimte", "eventueel een kleine of verrijdbare tafel", "eventueel een label of bordje"],
        source: "Gebruik een geschikte tafel of plek in de gezamenlijke ruimte. Een eenvoudige tafel of standaard kan zo nodig via de facilitaire dienst worden geregeld.",
        how: "1. Kies in de gezamenlijke ruimte een plek waar bewoners het spel regelmatig zien. 2. Controleer of rolstoelen er goed bij kunnen en of loop-, rij- en zorgroutes vrij blijven. 3. Zet het spel op die plek in de opstelling waarin bewoners direct kunnen beginnen. 4. Laat alleen de materialen klaarstaan die echt nodig zijn. 5. Laat een bewoner proberen of de plek en opstelling werken voordat je de plek definitief maakt.",
        help: "Stem de vaste plek af met collega's. Vraag de technische of facilitaire dienst om hulp als iets stevig gemonteerd of aangepast moet worden.",
        image: "Vaste plek.png",
        imageAlt: "Beweegspel op een vaste, zichtbare en startklare plek"
      },
      {
        id: "open-mand",
        title: "Leg alle spelmaterialen bij elkaar en binnen bereik",
        summary: "Een open mand of bak naast het spel zorgt dat de benodigde materialen klaarstaan en binnen handbereik liggen.",
        materials: ["open, ondiepe mand, bak of schaal", "eventueel antislipmat", "eventueel label met de naam van het spel"],
        source: "Open manden en bakken zijn bijvoorbeeld verkrijgbaar bij Hema. Antislipmateriaal is verkrijgbaar bij huishoud- en bouwmarkten.",
        how: "1. Verzamel alle materialen die nodig zijn om te spelen. 2. Leg ze in één open, ondiepe mand, bak of schaal. 3. Zet deze naast het spel op een hoogte waar bewoners vanuit hun rolstoel gemakkelijk bij kunnen. 4. Leg eventueel een antislipmat onder de bak. 5. Laat een bewoner proberen of alle materialen vanuit de speelpositie goed bereikbaar zijn.",
        help: "",
        image: "assets/images/Gespeeld spel.png",
        imageAlt: "Open mand met spelmaterialen binnen bereik"
      }
    ]
  },
  {
    id: "bereik",
    number: 3,
    title: "Zorg dat bewoners overal goed bij kunnen",
    short: "Alle spelhandelingen moeten vanuit een rolstoel comfortabel uitgevoerd kunnen worden, zonder te bukken of ver voorover te leunen.",
    question: "Kunnen bewoners vanuit hun rolstoel alle noodzakelijke spelhandelingen uitvoeren binnen een comfortabele reikafstand?",
    criterion: "Bewoners kunnen alle spelhandelingen vanuit hun rolstoel uitvoeren zonder te bukken of ver voorover te leunen.",
    observeTip: "Ga zelf op een stoel zitten en kijk daarna naar bewoners: waar moeten zij reiken, draaien of naar voren bewegen?",
    observationKey: "reach",
    solutions: [
      {
        id: "spel-op-tafel",
        title: "Breng een vloerspel omhoog naar een comfortabele speelhoogte",
        summary: "Plaats bijvoorbeeld ringwerpen op een stevige tafel zodat bewoners het vanuit hun rolstoel kunnen spelen.",
        materials: ["stevige tafel", "antislipmat", "eventueel tape om de beste positie te markeren"],
        source: "Gebruik een tafel die geschikt is voor rolstoelgebruik. Antislipmatten zijn verkrijgbaar bij huishoudwinkels. Tape is bijvoorbeeld verkrijgbaar bij Action of Gamma.",
        how: "1. Kies een stevige tafel waar een rolstoel goed onder of dicht bij kan staan. 2. Plaats het spel los op de tafel en leg er zo nodig een antislipmat onder. 3. Laat een bewoner vanuit de eigen rolstoel proberen of alle belangrijke onderdelen bereikbaar zijn. 4. Schuif het spel dichterbij of verander de positie totdat bukken en ver voorover leunen niet nodig zijn. 5. Markeer de beste plek eventueel met tape en maak de opstelling pas daarna definitief.",
        help: "Vraag een collega of fysiotherapeut mee te kijken wanneer houding en reikafstand lastig te beoordelen zijn.",
        image: "Gespeeld spel.png",
        imageAlt: "Ringwerpspel op een tafel op een comfortabele speelhoogte"
      },
      {
        id: "opvangrand",
        title: "Maak een opstaande opvangrand rond de tafel",
        summary: "Een lage rand langs de open zijden voorkomt dat ringen, ballen of andere materialen na een misser op de grond terechtkomen.",
        materials: ["poolnoodle of stevig karton voor een eerste test", "schilderstape of klittenband voor bevestiging", "eventueel een glad afgewerkte houten lat voor een definitieve rand"],
        source: "Poolnoodles zijn bijvoorbeeld verkrijgbaar bij Decathlon, schilderstape bij Action of Gamma, zelfklevend klittenband bij Hema en houten latten bij Gamma.",
        how: "1. Leg het spel op de plek waar het gebruikt gaat worden. 2. Maak langs alle open zijden van de tafel een lage opstaande rand. 3. Zet de rand voor de eerste test tijdelijk vast met schilderstape of klittenband. 4. Gooi of rol meerdere keren expres naast het doel. 5. Controleer of het materiaal op tafel blijft en of bewoners nog overal goed bij kunnen. 6. Kies pas daarna een stevigere bevestiging of een glad afgewerkte houten lat als dat nodig is.",
        help: "Vraag de technische dienst mee te denken als de rand permanent en stevig bevestigd moet worden.",
        image: "Rand om tafel.png",
        imageAlt: "Tafel met een opstaande opvangrand zodat spelmateriaal niet op de grond valt"
      },
      {
        id: "wandspel-rolstoelhoogte",
        title: "Hang een wandspel op een comfortabele hoogte",
        summary: "Hang bijvoorbeeld klittenbanddart op een hoogte waarop bewoners vanuit hun rolstoel het hele doel goed kunnen zien en bereiken.",
        materials: ["meetlint", "schilderstape om de hoogte tijdelijk te markeren", "schroeven en pluggen die passen bij de muur"],
        source: "Schilderstape is bijvoorbeeld verkrijgbaar bij Action of Gamma. Schroeven, pluggen en ander bevestigingsmateriaal zijn verkrijgbaar bij een bouwmarkt, bijvoorbeeld Gamma.",
        how: "1. Laat een bewoner met de rolstoel op de verwachte speelplek staan. 2. Houd het wandspel eerst los tegen de muur en bepaal samen een hoogte waarop midden en randen goed zichtbaar zijn. 3. Controleer of de benodigde armbeweging comfortabel is en niemand ver voorover hoeft te bewegen. 4. Markeer de gekozen hoogte met schilderstape. 5. Test enkele worpen. 6. Laat het bord pas daarna stevig bevestigen.",
        help: "Vraag de technische dienst om hulp bij boren of definitief ophangen.",
        image: "Vaste plek.png",
        imageAlt: "Wandspel op comfortabele hoogte voor iemand in een rolstoel"
      }
    ]
  },
  {
    id: "volgende-beurt",
    number: 4,
    title: "Maak de volgende beurt zelfstandig mogelijk",
    short: "Zorg dat bewoners gebruikte materialen zelf kunnen verzamelen en het spel weer klaar kunnen maken voor de volgende beurt.",
    question: "Kunnen bewoners na een beurt zelf de materialen verzamelen en het spel klaarzetten voor de volgende beurt?",
    criterion: "Bewoners kunnen na een beurt de materialen zelf verzamelen en het spel klaarmaken voor de volgende beurt.",
    observeTip: "Wacht na een beurt bewust even en kijk wat bewoners zelf doen voordat je materialen teruggeeft of opnieuw klaarzet.",
    observationKey: "reset",
    solutions: [
      {
        id: "niet-rollend",
        title: "Vervang rollend materiaal door iets dat blijft liggen",
        summary: "Gebruik bijvoorbeeld werpzakjes in plaats van ballen wanneer wegrollen het zelfstandig doorspelen belemmert.",
        materials: ["werpzakjes of andere zachte, niet-rollende spelmaterialen"],
        source: "Werpzakjes en vergelijkbare zachte werpmaterialen zijn bijvoorbeeld verkrijgbaar bij Decathlon en andere sport- of speelgoedwinkels.",
        how: "1. Kies een zacht materiaal dat niet wegrolt, bijvoorbeeld werpzakjes. 2. Probeer eerst met hetzelfde aantal worpen en dezelfde afstand als bij het oorspronkelijke spel. 3. Controleer of het spel herkenbaar en prettig speelbaar blijft. 4. Kijk of het materiaal na de poging niet wegrolt en binnen bereik blijft. 5. Pas afstand of doel alleen aan als dat daarna nog nodig is.",
        help: "Laat bewoners meebepalen of de aangepaste spelvorm nog prettig speelt.",
        image: "Zakjes ipv balletjes.png",
        imageAlt: "Werpzakjes als niet-rollend alternatief voor ballen"
      },
      {
        id: "terughaalstok",
        title: "Maak een eenvoudige terughaalhulp",
        summary: "Met een terughaalhulp met een zachte lus, dwarsbalk of klevend materiaal kunnen bewoners spelmateriaal naar zich toe halen zonder ver te hoeven reiken.",
        materials: ["lichte houten steel of pvc-buis", "zacht koord voor een lus, zachte dwarsbalk of klittenband", "stevige tape", "eventueel zacht handvat voor extra grip"],
        source: "Houten latten, stelen, pvc-buis en tape zijn verkrijgbaar bij een bouwmarkt, bijvoorbeeld Gamma. Zelfklevend klittenband is bijvoorbeeld verkrijgbaar bij Hema.",
        how: "1. Kies een lichte steel of pvc-buis die bewoners goed kunnen vasthouden. 2. Kies een zachte terughaalvorm die past bij het materiaal: bijvoorbeeld een lus voor ringen, een zachte dwarsbalk om materiaal naar je toe te schuiven of klittenband voor geschikte zachte ballen. 3. Maak het uiteinde eerst tijdelijk vast met stevige tape. 4. Werk harde of scherpe randen af. 5. Laat een bewoner vanuit de eigen rolstoel materiaal naar zich toe halen zonder ver voorover te bewegen. 6. Laat de verbinding pas daarna steviger afwerken als vorm en lengte goed blijken te werken.",
        help: "Vraag de technische dienst of een vrijwilliger om mee te helpen wanneer een stevige, duurzame bevestiging nodig is.",
        image: "Ballenstok.png",
        imageAlt: "Zachte terughaalhulp waarmee spelmateriaal naar de speler toe kan worden gehaald"
      },
      {
        id: "opstelhulp",
        title: "Maak duidelijk waar materialen terug moeten komen",
        summary: "Markeringen of een eenvoudige mal helpen bewoners het spel na een beurt weer in de beginopstelling te zetten.",
        materials: ["gekleurde tape", "stift", "eventueel stevig karton voor een mal"],
        source: "Gekleurde tape, stiften en karton zijn bijvoorbeeld verkrijgbaar bij Action. Steviger materiaal kan zo nodig bij een hobbywinkel worden gehaald.",
        how: "1. Zet het spel één keer precies in de gewenste beginopstelling. 2. Markeer met gekleurde tape waar onderdelen zoals blikken, pionnen of doelen moeten staan. 3. Gebruik bij meerdere onderdelen eventueel een kartonnen mal met uitsparingen. 4. Laat een bewoner na een beurt zelf opnieuw opstellen aan de hand van de markeringen.",
        help: "",
        image: "Mal voor spel reset.png",
        imageAlt: "Markeringen op tafel die laten zien waar spelmaterialen teruggezet worden"
      }
    ]
  },
  {
    id: "score",
    number: 5,
    title: "Maak score en spelverloop begrijpelijk",
    short: "Maak duidelijk hoe een beurt verloopt, wat de puntwaarden betekenen en hoe bewoners de score kunnen volgen zonder dat een medewerker dit steeds hoeft over te nemen.",
    question: "Kunnen bewoners het spelverloop volgen, de puntwaarden goed zien en hun score zelf bijhouden?",
    criterion: "Bewoners kunnen het spelverloop volgen, de puntwaarden waarnemen en hun score met hooguit incidentele ondersteuning bijhouden.",
    observeTip: "Let niet alleen op het optellen. Kijk ook naar kleine cijfers, weinig contrast, cijfers die door spelmateriaal worden afgedekt en het onthouden van tussenscores.",
    observationKey: "score",
    solutions: [
      {
        id: "kleurcodering-score",
        title: "Gebruik kleuren en grote cijfers om puntwaarden goed zichtbaar te maken",
        summary: "Een vaste kleur per puntwaarde en grotere cijfers maken scores makkelijker te herkennen en af te lezen.",
        materials: ["gekleurde tape, stickers of verf", "grote cijferstickers of geprinte cijfers", "eventueel een legenda op A4 of A3"],
        source: "Gekleurde tape, stickers en stiften zijn bijvoorbeeld verkrijgbaar bij Action. Voor verf en duurzamer markeringsmateriaal kun je ook bij een hobby- of bouwmarkt terecht.",
        how: "1. Geef iedere puntwaarde een vaste kleur en zorg dat de cijfers groot en contrastrijk zijn. 2. Breng de kleur duidelijk aan rond of naast het bijbehorende scoregebied. 3. Maak indien nodig een overzicht waarop kleur en puntwaarde naast elkaar staan. 4. Plaats dit overzicht binnen het gezichtsveld van bewoners. 5. Controleer vanuit een rolstoel of kleuren en puntwaarden ook vanaf de speelpositie goed te zien zijn.",
        help: "Vraag bewoners welke kleuren en cijfergrootte voor hen het duidelijkst zijn.",
        image: "Kleurcodering.png",
        imageAlt: "Spel met kleurcodering en grote cijfers voor verschillende puntwaarden"
      },
      {
        id: "score-cheatsheet",
        title: "Maak een scorekaart of spiekkaart",
        summary: "Een duidelijke kaart met het speelveld en de puntwaarden helpt wanneer cijfers tijdens het spelen moeilijk te zien of afgedekt zijn.",
        materials: ["foto van het spel of digitaal ontwerp van het speelveld", "A4- of A3-papier", "eventueel lamineerhoes of insteekhoes"],
        source: "Maak de scorekaart bijvoorbeeld in Word, PowerPoint of Canva. Papier en lamineerhoezen zijn onder andere verkrijgbaar bij Action.",
        how: "1. Maak een foto van het lege speelveld waarop alle puntwaarden zichtbaar zijn, of maak een eenvoudig digitaal ontwerp van het speelveld. 2. Vergroot de afbeelding op A4 of A3. 3. Maak kleine cijfers waar nodig groter of zet de puntwaarden opnieuw duidelijk naast het beeld. 4. Plaats de kaart direct naast het spel en binnen het gezichtsveld van bewoners. 5. Controleer of bewoners met behulp van de scorekaart na een beurt zelf hun punten kunnen tellen.",
        help: "",
        image: "Spiekkaart.png",
        imageAlt: "Scorekaart met afbeelding van het speelveld en goed zichtbare puntwaarden"
      },
      {
        id: "eenvoudiger-tellen",
        title: "Vereenvoudig de puntentelling",
        summary: "Gebruik lagere en makkelijker op te tellen puntwaarden zodat bewoners hun totaalscore zelf kunnen berekenen.",
        materials: ["grote geprinte cijfers of cijferstickers", "papier of kaart", "tape of andere tijdelijke bevestiging"],
        source: "Papier, stickers, stiften en tape zijn bijvoorbeeld verkrijgbaar bij Action. Gebruik voor een eerste test bij voorkeur een tijdelijke bevestiging.",
        how: "1. Kijk of hoge of uiteenlopende puntwaarden het optellen lastig maken. 2. Vervang de puntwaarden tijdelijk door lagere waarden die makkelijker op te tellen zijn. 3. Maak de nieuwe puntwaarden groot en duidelijk zichtbaar op het spel. 4. Laat bewoners een volledige ronde spelen en de score zelf optellen. 5. Pas de puntwaarden verder aan als het tellen nog te lastig of juist te weinig uitdagend is.",
        help: "Bespreek met bewoners welke puntentelling duidelijk en leuk blijft.",
        image: "Lagere puntwaarden.png",
        imageAlt: "Voor en na van een spel met vereenvoudigde, lagere puntwaarden"
      },
      {
        id: "stappenkaart-spelverloop",
        title: "Maak de volgorde van een beurt zichtbaar",
        summary: "Een korte stappenkaart helpt wanneer bewoners wel begrijpen wat de spelhandeling is, maar niet goed weten wat daarna komt.",
        materials: ["A4- of A3-papier", "grote letters", "foto's of eenvoudige pictogrammen", "eventueel lamineerhoes"],
        source: "Gebruik een printer op locatie en eenvoudige materialen die al aanwezig zijn of bijvoorbeeld bij Action verkrijgbaar zijn.",
        how: "1. Kijk tijdens een beurt bij welke overgang bewoners om hulp vragen, bijvoorbeeld na het gooien, tellen of terughalen van materiaal. 2. Schrijf alleen die opeenvolgende stappen op die nodig zijn om zelfstandig door te gaan. 3. Gebruik korte werkwoorden, bijvoorbeeld: spelen, tellen, opschrijven, terughalen. 4. Zet bij iedere stap een foto of eenvoudig beeld. 5. Plaats de kaart binnen het gezichtsveld en test of bewoners de volgende stap ermee kunnen vinden.",
        help: "Laat een bewoner de stappenkaart doorlopen zonder dat je de volgorde mondeling voorzegt.",
        image: "",
        imageAlt: ""
      }
    ]
  },
  {
    id: "succes",
    number: 6,
    title: "Stem de moeilijkheid af op de bewoners",
    short: "Pas het spel indien mogelijk aan zodat bewoners regelmatig succes ervaren, maar voorkom dat het te makkelijk wordt.",
    question: "Past de moeilijkheid bij de bewoners: lukt het regelmatig zonder dat het te makkelijk wordt?",
    criterion: "Bewoners ervaren regelmatig succes, terwijl het spel voldoende uitdaging blijft bieden.",
    observeTip: "Let op herhaalde missers, frustratie of juist verveling. Kijk vooral naar verschillen tussen bewoners.",
    observationKey: "success",
    solutions: [
      {
        id: "meerdere-afstanden",
        title: "Maak meerdere speelafstanden met gekleurde tape",
        summary: "Bewoners kunnen een afstand kiezen die past bij hun eigen mogelijkheden.",
        materials: ["gekleurde vloer- of schilderstape"],
        source: "Gekleurde tape en schilderstape zijn bijvoorbeeld verkrijgbaar bij Action of Gamma.",
        how: "1. Bepaal samen met bewoners een afstand waarop het spel regelmatig lukt. 2. Markeer die plek met een duidelijke strook gekleurde tape. 3. Maak eventueel een tweede lijn verder weg voor extra uitdaging. 4. Gebruik verschillende kleuren en geef de lijnen duidelijke namen, bijvoorbeeld 'dichtbij' en 'extra uitdaging'. 5. Controleer dat rolstoelen veilig bij iedere lijn kunnen komen en dat niemand hoeft te manoeuvreren in een smalle doorgang.",
        help: "Laat bewoners helpen bepalen welke afstanden prettig zijn.",
        image: "Lijnen moeilijkheid.png",
        imageAlt: "Meerdere gekleurde speelafstanden voor verschillende moeilijkheidsniveaus"
      },
      {
        id: "lichter-spelmateriaal",
        title: "Gebruik spelmateriaal dat past bij de mogelijkheden van bewoners",
        summary: "Gebruik bij voorkeur lichter spelmateriaal zodat bewoners met minder kracht kunnen spelen.",
        materials: ["lichtere doelen of onderdelen, bijvoorbeeld schuimblikken in plaats van metalen blikken", "eventueel zachte of lichtere ballen"],
        source: "Zachte schuimballen en ander licht sportmateriaal zijn bijvoorbeeld verkrijgbaar bij Decathlon. Lichte spelmaterialen zijn ook te vinden bij speelgoed- en sportwinkels.",
        how: "1. Kijk welk onderdeel van het spel veel kracht vraagt om te verplaatsen, om te gooien of omver te krijgen. 2. Vervang dat onderdeel tijdelijk door een lichtere variant, bijvoorbeeld schuimblikken in plaats van metalen blikken. 3. Houd de spelregels en speelafstand eerst hetzelfde. 4. Laat bewoners meerdere pogingen doen en kijk of het materiaal nu met minder kracht reageert. 5. Controleer of het spel nog voldoende uitdaging biedt en pas het materiaal zo nodig verder aan.",
        help: "Vraag een bewegingsagoog of fysiotherapeut mee te kijken als je twijfelt welke belasting passend is.",
        image: "assets/images/Licht materiaal.png",
        imageAlt: "Blikgooien met lichte schuimblikken als makkelijker te raken spelmateriaal"
      }
    ]
  },
  {
    id: "feedback",
    number: 7,
    title: "Maak duidelijk wat er na een poging gebeurt",
    short: "Kijk eerst welke informatie ontbreekt: moet duidelijk worden dat een handeling is uitgevoerd, wat het resultaat is, of hoeveel punten dat oplevert? Voeg alleen extra feedback toe als bewoners dit anders niet goed kunnen waarnemen.",
    question: "Is voor bewoners duidelijk dat een poging is uitgevoerd en wat het directe resultaat daarvan is?",
    criterion: "Bewoners kunnen waarnemen dat een spelhandeling is uitgevoerd en begrijpen het directe resultaat daarvan, zonder continue uitleg van een medewerker.",
    observeTip: "Kijk afzonderlijk naar drie dingen: merken bewoners dat de handeling is uitgevoerd, begrijpen zij het resultaat, en kunnen zij de eventuele score bepalen? Voeg alleen feedback toe waar informatie ontbreekt.",
    observationKey: "feedback",
    solutions: [
      {
        id: "belletje",
        title: "Voeg een hoorbaar signaal toe bij een treffer",
        summary: "Een belletje of kort geluid kan een treffer extra duidelijk maken als het resultaat anders moeilijk merkbaar is.",
        materials: ["klein belletje", "zacht koord, tape of klittenband voor tijdelijke bevestiging", "optioneel een kleine bluetooth- of mp3-speaker wanneer een kort geluid eenvoudig kan worden afgespeeld"],
        source: "Belletjes zijn verkrijgbaar bij hobby- en cadeauwinkels. Tape is bijvoorbeeld verkrijgbaar bij Action, zelfklevend klittenband bij Hema en kleine bluetoothspeakers onder andere bij Action.",
        how: "1. Controleer eerst of extra geluid echt nodig is om een treffer duidelijker te maken. 2. Kies bij voorkeur een mechanische oplossing, bijvoorbeeld een klein belletje dat door de beweging van het doel gaat rinkelen. 3. Bevestig het belletje eerst tijdelijk met zacht koord, tape of klittenband. 4. Test meerdere treffers en missers en controleer of het geluid op het juiste moment klinkt. 5. Vraag bewoners of het geluid duidelijk en prettig is. 6. Gebruik een speaker alleen als het geluid zonder ingewikkelde bediening op het juiste moment kan worden afgespeeld.",
        help: "Vraag de technische dienst om hulp als een stevige bevestiging of koppeling nodig is.",
        image: "assets/images/Geluid toevoegen.png",
        imageAlt: "Belletje dat bij een treffer hoorbare feedback geeft"
      },
      {
        id: "feedback-licht",
        title: "Laat een treffer een lampje activeren",
        summary: "Een kant-en-klaar led-druklampje kan een zichtbaar lichtsignaal geven wanneer een treffer een doelvlak indrukt of beweegt.",
        materials: ["led-druklampje op batterijen", "licht doelvlak van karton of foam", "tape of klittenband", "batterijen"],
        source: "Led-druklampjes en tape zijn bijvoorbeeld verkrijgbaar bij Action. Zelfklevend klittenband is onder andere verkrijgbaar bij Hema.",
        how: "1. Kies alleen een spel waarbij een treffer een licht doelvlak of onderdeel kan indrukken of bewegen. 2. Plaats een led-druklampje achter dat doelvlak zodat een duidelijke treffer het lampje indrukt. 3. Bevestig het lampje en doelvlak eerst tijdelijk met tape of klittenband. 4. Test met zacht spelmateriaal of het licht betrouwbaar aangaat bij een treffer en niet bij een misser. 5. Controleer dat bewoners geen harde of scherpe onderdelen kunnen raken. 6. Gebruik deze oplossing alleen als zij zonder ingewikkelde elektronica betrouwbaar werkt.",
        help: "Vraag de technische dienst of het innovatieteam mee te denken als de bevestiging of werking niet eenvoudig en veilig te maken is.",
        image: "assets/images/Licht.png",
        imageAlt: "Led-druklampje dat zichtbaar licht geeft wanneer een doel wordt geraakt"
      }
    ]
  },
  {
    id: "sociaal",
    number: 8,
    title: "Maak samen spelen, meekijken en aanmoedigen mogelijk",
    short: "Maak ruimte voor samen spelen, meekijken, tips geven en aanmoedigen, zonder dat samenspelen verplicht wordt.",
    question: "Nodigt het spel uit om samen te spelen, mee te kijken of elkaar aan te moedigen?",
    criterion: "Het spel maakt samen spelen, meekijken en elkaar aanmoedigen gemakkelijk.",
    observeTip: "Kijk of andere bewoners aansluiten, reageren of op hun beurt wachten wanneer iemand speelt.",
    observationKey: "social",
    solutions: [
      {
        id: "duomodus",
        title: "Maak een teammodus",
        summary: "Laat twee of meer bewoners samen één score proberen neer te zetten of elkaar afwisselen binnen dezelfde ronde.",
        materials: ["scorebord of scorekaart", "eventueel spelmateriaal in meerdere kleuren"],
        source: "Een klein whiteboard en whiteboardstiften zijn bijvoorbeeld verkrijgbaar bij Action. Gebruik verder het spelmateriaal dat bij het spel past.",
        how: "1. Kies een manier waarop twee of meer bewoners samen spelen, bijvoorbeeld ieder één worp per beurt. 2. Maak op het scorebord een apart vak voor teams. 3. Schrijf alleen de gezamenlijke score op en voeg geen extra ingewikkelde regels toe. 4. Laat een groep bewoners een ronde proberen. 5. Kijk of de beurtwisseling en gezamenlijke score voor iedereen duidelijk blijven.",
        help: "",
        image: "assets/images/Duos.png",
        imageAlt: "Scorebord met een teammodus voor meerdere bewoners"
      },
      {
        id: "twee-kleuren",
        title: "Gebruik verschillende kleuren spelmateriaal voor beurtelings spelen",
        summary: "Verschillende kleuren maken zichtbaar welke worpen of pogingen bij welke speler horen.",
        materials: ["ringen, ballen of werpzakjes in duidelijk verschillende kleuren"],
        source: "Gekleurd spelmateriaal is verkrijgbaar bij sport- en speelgoedwinkels. Zachte ballen en werpzakjes zijn bijvoorbeeld te vinden bij Decathlon.",
        how: "1. Kies voor iedere speler of ieder team een duidelijk herkenbare kleur. 2. Verdeel de ringen, ballen of werpzakjes per kleur. 3. Laat spelers om de beurt één of meerdere pogingen doen. 4. Laat de materialen liggen tot de ronde is afgelopen wanneer dat bij het spel kan. 5. Gebruik de kleuren om eenvoudig te zien welke poging bij welke speler of welk team hoort.",
        help: "",
        image: "assets/images/Twee kleuren.png",
        imageAlt: "Spelmateriaal in verschillende kleuren voor beurtelings samenspelen"
      },
      {
        id: "sociale-plek",
        title: "Plaats het spel waar anderen kunnen aansluiten",
        summary: "Een goede plek maakt meekijken, aanmoedigen en spontaan meedoen makkelijker.",
        materials: ["geschikte plek in de gezamenlijke ruimte"],
        source: "Kies hiervoor een geschikte plek in de gezamenlijke ruimte; er hoeft niets gekocht te worden.",
        how: "1. Kies een plek in de gezamenlijke ruimte waar iemand kan spelen zonder een doorgang te blokkeren. 2. Zorg naast de speelpositie voor voldoende ruimte waar andere bewoners kunnen kijken, wachten of aansluiten. 3. Zet het spel zichtbaar vanuit de gebruikelijke zitplekken. 4. Verplaats het spel als meekijken of aansluiten onhandig blijkt.",
        help: "Stem de plek af met collega's.",
        image: "Vaste plek.png",
        imageAlt: "Spelopstelling in een gezamenlijke ruimte met ruimte om aan te sluiten"
      }
    ]
  },
  {
    id: "uitdagen",
    number: 9,
    title: "Maak positieve competitie mogelijk",
    short: "Laat bewoners hun eigen score of die van anderen terugzien en proberen te verbeteren, zonder dat alleen winnen centraal staat.",
    question: "Proberen bewoners hun eigen score of die van een ander te verbeteren?",
    criterion: "Bewoners kunnen hun eigen score of die van anderen terugzien en op een positieve manier proberen te verbeteren.",
    observeTip: "Let op opmerkingen als 'nog een keer', het vergelijken van scores of interesse in wat een ander heeft gehaald.",
    observationKey: "competition",
    solutions: [
      {
        id: "leaderboard",
        title: "Maak een scorebord",
        summary: "Bewoners kunnen hun naam en score opschrijven en later hun eigen score of die van anderen proberen te verbeteren.",
        materials: ["klein whiteboard of gelamineerd scoreblad", "whiteboardstift", "houder of standaard"],
        source: "Whiteboards en whiteboardstiften zijn bijvoorbeeld verkrijgbaar bij Action. Een gelamineerd scoreblad kun je zelf printen en in een houder zetten.",
        how: "1. Gebruik een klein whiteboard of gelamineerd scoreblad. 2. Maak maximaal drie duidelijke kolommen: naam, score en eventueel datum. 3. Schrijf groot en plaats het bord binnen bereik van bewoners. 4. Zet eventueel alvast een haalbare score van een welzijnsmedewerker, zorgmedewerker, familielid of bewoner op het bord als uitnodiging om die te verbeteren. 5. Wis oude scores regelmatig zodat het bord overzichtelijk blijft.",
        help: "Een collega, familielid of bewoner kan af en toe een haalbare score op het bord zetten als extra uitdaging.",
        image: "Duos.png",
        imageAlt: "Scorebord met naam, score en datum"
      },
      {
        id: "persoonlijk-record",
        title: "Maak persoonlijke vooruitgang zichtbaar",
        summary: "Laat bewoners een eigen eerdere score proberen te verbeteren, zodat competitie niet alleen draait om winnen van anderen.",
        materials: ["klein whiteboard of gelamineerd scoreblad", "whiteboardstift", "eventueel kolom voor persoonlijke beste score"],
        source: "Whiteboards en whiteboardstiften zijn bijvoorbeeld verkrijgbaar bij Action. Een eenvoudig scoreblad kan op locatie worden geprint en gelamineerd.",
        how: "1. Maak op het scorebord ruimte voor naam en beste score. 2. Schrijf een nieuwe score alleen over als iemand zichzelf verbetert, of noteer meerdere pogingen wanneer bewoners dat leuk vinden. 3. Gebruik grote, goed leesbare cijfers. 4. Laat bewoners zelf kiezen of zij hun score met anderen willen vergelijken. 5. Houd de nadruk op opnieuw proberen en plezier in plaats van alleen op de hoogste score.",
        help: "Een collega of medebewoner kan helpen bij het noteren als schrijven lastig is, zonder de scoreberekening automatisch over te nemen.",
        image: "Beloning.png",
        imageAlt: "Scorebord waarop een bewoner een persoonlijke beste score kan bijhouden"
      }
    ]
  },
  {
    id: "aantrekken",
    number: 10,
    title: "Laat het spel opvallen en passen in de dagelijkse omgeving",
    short: "Zorg dat bewoners het spel kunnen opmerken en begrijpen dat zij mogen beginnen, op een plek en in een opstelling die past bij het dagelijks gebruik van de ruimte.",
    question: "Merken bewoners het spel op, begrijpen ze dat ze zelf mogen beginnen en blijft de opstelling bruikbaar in de dagelijkse omgeving?",
    criterion: "Het spel is zichtbaar en uitnodigend, bewoners begrijpen dat zij zelf mogen beginnen en de opstelling past in de dagelijkse leefomgeving.",
    observeTip: "Laat het spel op meerdere gewone momenten zichtbaar en startklaar staan. Kijk of bewoners het opmerken of zelf beginnen en noteer ook of de plek, stroomvoorziening of andere dagelijkse routines het gebruik beïnvloeden.",
    observationKey: "trigger",
    solutions: [
      {
        id: "speel-poster",
        title: "Maak een speelposter",
        summary: "Een grote spelnaam, herkenbaar beeld en korte uitnodiging kunnen bewoners op het spel attenderen.",
        materials: ["A4- of A3-papier", "foto of illustratie van het spel", "eventueel lamineerhoes of insteekhoes"],
        source: "Papier en lamineerhoezen zijn bijvoorbeeld verkrijgbaar bij Action. Maak de poster in Word, PowerPoint, Canva of een ander programma dat je al gebruikt.",
        how: "1. Zet bovenaan een korte uitnodiging met de naam van het spel, bijvoorbeeld 'Speel mee met ringwerpen'. 2. Plaats in het midden één grote, duidelijke foto of illustratie van het spel. 3. Voeg onderaan één korte activerende zin toe, bijvoorbeeld 'Pak de ringen en begin'. 4. Print de poster op A4 of A3. 5. Plaats de poster direct bij het spel en controleer vanuit de gebruikelijke zitplekken of hij goed zichtbaar is.",
        help: "Laat een bewoner beoordelen of de poster in één oogopslag duidelijk maakt welk spel klaarstaat.",
        image: "assets/images/Speel mee.png",
        imageAlt: "Speelposter die bewoners uitnodigt om een beweegspel te spelen"
      },
      {
        id: "zichtbaar-startklaar",
        title: "Laat het spel zichtbaar en startklaar staan",
        summary: "Een overzichtelijke, direct speelbare opstelling kan op zichzelf al uitnodigen om te beginnen.",
        materials: ["vaste plek", "open bak met materialen", "eventueel scorebord of instructieblad"],
        source: "Gebruik de materialen die bij de gekozen opstelling horen. Open manden of bakken zijn bijvoorbeeld verkrijgbaar bij Hema en whiteboards bij Action.",
        how: "1. Kies een vaste plek waar het spel zichtbaar mag blijven staan. 2. Zet de benodigde spelmaterialen binnen bereik klaar. 3. Plaats indien nodig het instructieblad of scorebord direct bij het spel. 4. Bekijk de opstelling vanaf de gebruikelijke zitplekken van bewoners. 5. Haal losse of drukke elementen weg als niet meteen duidelijk is waarmee iemand kan beginnen.",
        help: "Stem de vaste plek af met collega's.",
        image: "assets/images/Rand om tafel.png",
        imageAlt: "Spel dat zichtbaar en startklaar in de gezamenlijke ruimte staat"
      },
      {
        id: "dagelijkse-plek",
        title: "Kies een plek die in het dagelijks gebruik beschikbaar kan blijven",
        summary: "Een spel kan alleen zelfstandig gebruikt worden als de plek niet voortdurend voor iets anders nodig is en de opstelling in de dagelijkse routine kan blijven functioneren.",
        materials: ["bestaande tafel of vaste plek", "eventueel markering voor de opstelling", "indien nodig een eenvoudige stroomvoorziening zonder losse kabels"],
        source: "Gebruik bij voorkeur een bestaande plek en materialen op de afdeling. Stem praktische aanpassingen af met collega's of de facilitaire dienst.",
        how: "1. Kies een plek die bewoners regelmatig zien. 2. Kijk gedurende meerdere gewone momenten of de plek nodig is voor eten, koffie, zorg of andere activiteiten. 3. Controleer of loop- en rijroutes vrij blijven. 4. Controleer of materialen, kabels of hulpmiddelen op hun plek blijven wanneer niemand het spel begeleidt. 5. Pas de plek of opstelling aan als het spel regelmatig moet worden verplaatst of opgeborgen. 6. Laat het spel daarna opnieuw een aantal momenten beschikbaar staan en kijk wat er gebeurt.",
        help: "Bespreek met collega's welke plekken en momenten in de gezamenlijke ruimte werkelijk beschikbaar zijn.",
        image: "Vaste plek.png",
        imageAlt: "Beweegspel op een plek die past binnen het dagelijkse gebruik van de gezamenlijke ruimte"
      },
      {
        id: "subtiele-trigger",
        title: "Voeg een rustige aandachtstrekker toe",
        summary: "Een rustig lampje, herkenbare muziek of een klein bewegend element kan helpen om het spel op te laten vallen.",
        materials: ["bijvoorbeeld led-kaars of klein lampje", "kleine bluetooth- of mp3-speaker voor herkenbare muziek", "eventueel een licht lint of klein mobiel dat rustig beweegt"],
        source: "Ledlampjes en kleine bluetoothspeakers zijn bijvoorbeeld verkrijgbaar bij Action. Gebruik voor muziek bij voorkeur een apparaat dat na het instellen zo weinig mogelijk bediening vraagt.",
        how: "1. Kies een aandachtstrekker die past bij de ruimte en het spel. 2. Gebruik voor licht een klein rustig lampje direct bij het spel; vermijd snel knipperende of felle effecten. 3. Gebruik voor muziek een korte afspeellijst met herkenbare muziek en zet het volume laag genoeg om anderen niet te storen. 4. Een bewegend element kan bijvoorbeeld een licht lint of klein mobiel bij de poster zijn dat rustig beweegt. 5. Probeer de aandachtstrekker tijdens een normaal moment en kijk of bewoners het spel vaker opmerken. 6. Pas de oplossing aan of haal haar weg als bewoners of andere activiteiten er hinder van hebben.",
        help: "Bespreek het gebruik van licht, muziek of beweging met collega's en bewoners als het invloed kan hebben op de gezamenlijke ruimte.",
        image: "assets/images/Licht.png",
        imageAlt: "Rustige aandachtstrekker naast een beweegspel"
      }
    ]
  }
];

const observationItems = [
  { key: "rules", question: "Herkennen bewoners de spelvorm of belangrijkste handelingen en begrijpen ze de bedoeling?" },
  { key: "start", question: "Kunnen bewoners beginnen zonder dat een medewerker het spel eerst hoeft klaar te zetten?" },
  { key: "reach", question: "Kunnen bewoners de noodzakelijke handelingen comfortabel en veilig uitvoeren vanuit hun eigen positie?" },
  { key: "reset", question: "Kunnen bewoners na een beurt de materialen verzamelen en het spel klaarmaken voor de volgende beurt?" },
  { key: "score", question: "Kunnen bewoners het spelverloop volgen, de puntwaarden zien en hun score bijhouden?" },
  { key: "success", question: "Past de moeilijkheid bij de bewoners: lukt het regelmatig zonder dat het te makkelijk wordt?" },
  { key: "feedback", question: "Is duidelijk dat een poging is uitgevoerd en wat het directe resultaat daarvan is?" },
  { key: "social", question: "Maakt het spel samen spelen, meekijken en aanmoedigen mogelijk?" },
  { key: "competition", question: "Willen bewoners hun eigen score of die van een ander proberen te verbeteren?" },
  { key: "trigger", question: "Merken bewoners het spel op, begrijpen ze dat zij mogen beginnen en past de opstelling in het dagelijks gebruik van de ruimte?" }
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

const STORAGE_KEY = "speelzelfplus-state-final-v1";

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
    <div class="principle-progress" aria-label="Ontwerpdoel ${index + 1} van ${principles.length}">
      <div class="principle-progress__meta">
        <span>Ontwerpdoel ${index + 1} van ${principles.length}</span>
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

      <h1 class="hero-title">Maak een bestaand beweegspel<br><span class="title-accent">zelfstandig speelbaar</span>.</h1>
      <p class="lead">SpeelZelf+ helpt je stap voor stap om een bestaand beweegspel aan te passen, zodat bewoners het zonder continue begeleiding van een medewerker kunnen starten en spelen.</p>

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
      <p class="stage-lead">Laat bewoners ${escapeHtml(state.gameName)} proberen zoals het nu is. Geef niet automatisch hulp, maar grijp uiteraard wel in wanneer dat nodig is voor veiligheid of welzijn.</p>
      <p class="section-intro">Beantwoord wat je kunt zien. Kies <strong>Niet getest</strong> als iets tijdens deze eerste poging nog niet duidelijk wordt.</p>

      <div class="observation-list">${rows}</div>

      <div class="observation-note observation-note--open">
        <label class="observation-note__label" for="observationNote">Iets anders opgevallen? <span>(optioneel)</span></label>
        <div class="observation-note__body">
          <textarea class="textarea textarea--compact" id="observationNote" placeholder="Schrijf hier andere dingen op die je tijdens het spelen zag.">${escapeHtml(state.observationNote)}</textarea>
        </div>
      </div>

      <div class="bottom-action">
        <button class="primary-button" id="observeNext" type="button">
          Naar de 10 ontwerpdoelen <span aria-hidden="true">→</span>
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
      defer: false,
      helpers: {},
      helperNotes: {},
      customEnabled: false,
      customSolution: "",
      customMaterials: "",
      customSource: "",
      customHow: "",
      customHelpers: [],
      customHelperNote: ""
    };
  }

  const answer = state.principleAnswers[id];
  if (answer.customEnabled === undefined) answer.customEnabled = Boolean((answer.customSolution || "").trim());
  answer.selectedSolutions ||= [];
  const currentPrinciple = principles.find(principle => principle.id === id);
  const validSolutionIds = new Set((currentPrinciple?.solutions || []).map(solution => solution.id));
  answer.selectedSolutions = answer.selectedSolutions.filter(solutionId => validSolutionIds.has(solutionId));
  answer.helpers ||= {};
  answer.helperNotes ||= {};
  answer.customHelpers ||= [];
  answer.noChange = Boolean(answer.noChange);
  answer.defer = Boolean(answer.defer);
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
    ${topBackMarkup(state.principleIndex === 0 ? "Terug naar observatie" : "Vorig ontwerpdoel")}
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
        ${customSolutionMarkup(p, answer)}
      </div>

      <label class="no-change-option">
        <input id="noChange" type="checkbox" ${answer.noChange ? "checked" : ""}>
        <span>
          <strong>Geen aanpassing nodig bij dit ontwerpdoel</strong>
          <small>Ga verder als het huidige spel hier al goed genoeg op aansluit.</small>
        </span>
      </label>

      <label class="no-change-option">
        <input id="deferDecision" type="checkbox" ${answer.defer ? "checked" : ""}>
        <span>
          <strong>Nog beoordelen met bewoners</strong>
          <small>Kies dit als je eerst nog wilt observeren voordat je een aanpassing kiest.</small>
        </span>
      </label>

      <div class="bottom-action">
        <button class="primary-button" id="nextButton" type="button">
          ${state.principleIndex === principles.length - 1 ? "Maak het SpeelZelf+ plan" : "Volgend ontwerpdoel"}
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
      answer.defer = false;
      const deferDecision = document.getElementById("deferDecision");
      if (deferDecision) deferDecision.checked = false;
      answer.selectedSolutions = [];
      answer.customEnabled = false;
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

      const customToggle = document.getElementById("customSolutionToggle");
      if (customToggle) customToggle.checked = false;
      const customCard = customToggle?.closest(".custom-solution-card");
      customCard?.classList.remove("is-selected");
      const customBody = customCard?.querySelector(".custom-solution__body");
      if (customBody) customBody.hidden = true;

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

  document.getElementById("deferDecision").addEventListener("change", event => {
    answer.defer = event.target.checked;
    if (answer.defer) {
      answer.noChange = false;
      const noChange = document.getElementById("noChange");
      if (noChange) noChange.checked = false;
      answer.selectedSolutions = [];
      answer.customEnabled = false;
      answer.customSolution = "";
      document.querySelectorAll('input[data-solution-id]').forEach(input => { input.checked = false; input.closest(".solution-card")?.classList.remove("is-selected"); });
      const customToggle = document.getElementById("customSolutionToggle");
      if (customToggle) customToggle.checked = false;
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

      ${imageMarkup(solution, false, solution.id)}

      <details class="solution-details">
        <summary>Zo maak je dit</summary>
        <div class="solution-details__body">
          <div class="solution-grid">
            <div class="detail-row">
              <strong>Materialen</strong>
              <p>${escapeHtml(solution.materials.join(", "))}</p>
            </div>
            <div class="detail-row">
              <strong>Waar kun je dit krijgen?</strong>
              <p>${escapeHtml(solution.source)}</p>
            </div>
            <div class="detail-row">
              <strong>Stap voor stap</strong>
              ${stepsMarkup(solution.how)}
            </div>
            ${solution.help ? `
            <div class="detail-row detail-row--tip">
              <strong>Extra tip</strong>
              <p>${escapeHtml(solution.help)}</p>
            </div>` : ""}
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
      <p class="helper-picker__title">Wie kan helpen bij deze aanpassing? <span>(optioneel)</span></p>
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
  const active = Boolean(answer.customEnabled);

  return `
    <article class="solution-card custom-solution-card ${active ? "is-selected" : ""}">
      <div class="solution-card__topline"></div>
      <label class="solution-select">
        <input id="customSolutionToggle" type="checkbox" ${active ? "checked" : ""}>
        <span class="solution-select__text">
          <strong>Eigen oplossing toevoegen</strong>
          <small>Heb je een andere aanpassing in gedachten? Werk die hier op dezelfde manier uit.</small>
        </span>
      </label>

      <div class="custom-solution__body" ${active ? "" : "hidden"}>
        <label class="field-label" for="customSolution">Wat wil je aanpassen?</label>
        <textarea class="textarea" id="customSolution" placeholder="Beschrijf kort de oplossing die je wilt uitvoeren.">${escapeHtml(answer.customSolution)}</textarea>

        <div class="custom-fields">
          <label class="field-label" for="customMaterials">Materialen <span class="muted">(optioneel)</span></label>
          <input class="text-input" id="customMaterials" value="${escapeHtml(answer.customMaterials)}" placeholder="Bijvoorbeeld: poolnoodle, klittenband, tape">

          <label class="field-label" for="customSource">Waar kun je dit krijgen? <span class="muted">(optioneel)</span></label>
          <input class="text-input" id="customSource" value="${escapeHtml(answer.customSource)}" placeholder="Bijvoorbeeld: Action, Hema, Decathlon of een bouwmarkt">

          <label class="field-label" for="customHow">Hoe voer je dit uit? <span class="muted">(optioneel)</span></label>
          <textarea class="textarea textarea--compact" id="customHow" placeholder="Schrijf de stappen op die nodig zijn.">${escapeHtml(answer.customHow)}</textarea>

          ${helperPickerMarkup(`custom-${p.id}`, answer.customHelpers || [], answer.customHelperNote || "")}
        </div>
      </div>
    </article>`;
}

function bindSolutionControls(p, answer) {
  document.querySelectorAll('input[data-solution-id]').forEach(input => {
    input.addEventListener("change", () => {
      const id = input.dataset.solutionId;
      const card = input.closest(".solution-card");
      const helperPicker = card?.querySelector(`[data-helper-picker="${id}"]`);

      if (input.checked) {
        if (!answer.selectedSolutions.includes(id)) answer.selectedSolutions.push(id);
        answer.noChange = false;
        answer.defer = false;
        const deferDecision = document.getElementById("deferDecision");
        if (deferDecision) deferDecision.checked = false;
        const noChange = document.getElementById("noChange");
        if (noChange) noChange.checked = false;
      } else {
        answer.selectedSolutions = answer.selectedSolutions.filter(item => item !== id);
      }

      card?.classList.toggle("is-selected", input.checked);
      if (helperPicker) helperPicker.hidden = !input.checked;

      saveState();
      syncNextButton(answer);
    });
  });


  document.querySelectorAll('[data-select-solution]').forEach(button => {
    button.addEventListener("click", () => {
      const input = Array.from(document.querySelectorAll('input[data-solution-id]'))
        .find(item => item.dataset.solutionId === button.dataset.selectSolution);
      if (!input) return;
      input.checked = !input.checked;
      input.dispatchEvent(new Event("change", { bubbles: true }));
    });
  });

  const customToggle = document.getElementById("customSolutionToggle");
  if (customToggle) {
    customToggle.addEventListener("change", () => {
      answer.customEnabled = customToggle.checked;
      const card = customToggle.closest(".custom-solution-card");
      const body = card?.querySelector(".custom-solution__body");
      card?.classList.toggle("is-selected", customToggle.checked);
      if (body) body.hidden = !customToggle.checked;

      if (customToggle.checked) {
        answer.noChange = false;
        answer.defer = false;
        const deferDecision = document.getElementById("deferDecision");
        if (deferDecision) deferDecision.checked = false;
        const noChange = document.getElementById("noChange");
        if (noChange) noChange.checked = false;
      }

      saveState();
      syncNextButton(answer);
    });
  }

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
        answer.defer = false;
        const deferDecision = document.getElementById("deferDecision");
        if (deferDecision) deferDecision.checked = false;
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
  return Boolean(answer.noChange || answer.defer || answer.selectedSolutions.length || (answer.customEnabled && answer.customSolution.trim()));
}

function syncNextButton(answer) {
  const button = document.getElementById("nextButton");
  if (button) button.disabled = !canContinuePrinciple(answer);
}

function resolveImagePath(filename) {
  const value = String(filename || "").trim();
  if (!value) return "";

  // Volledige of al bestaande paden laten we ongemoeid.
  if (/^(?:https?:|data:|blob:|\/|\.\/|\.\.\/)/i.test(value) || value.startsWith("assets/")) {
    return value;
  }

  // Als in de content alleen een bestandsnaam staat, zoeken we automatisch hier.
  return `assets/images/${value}`;
}

function imageMarkup(solution, plan = false, selectableId = "") {
  const src = resolveImagePath(solution.image);
  if (!src) return "";

  const wrapClass = plan ? "plan-image-wrap" : "solution-image-wrap";
  const imageClass = plan ? "plan-image" : "solution-image";
  const alt = solution.imageAlt || "";

  if (!plan && selectableId) {
    return `
      <button class="${wrapClass} solution-image-select" type="button" data-select-solution="${escapeHtml(selectableId)}" aria-label="Selecteer ${escapeHtml(solution.title)}">
        <img class="${imageClass}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">
      </button>`;
  }

  return `
    <div class="${wrapClass}">
      <img class="${imageClass}" src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" decoding="async">
    </div>`;
}

function activateImageFallbacks(root = document) {
  root.querySelectorAll(".solution-image, .plan-image").forEach(image => {
    const wrapper = image.parentElement;

    const fail = () => {
      // Nog geen afbeelding toegevoegd of verkeerde bestandsnaam:
      // toon dan geen leeg vlak of placeholder.
      wrapper?.remove();
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

    if (answer.customEnabled && answer.customSolution.trim()) {
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

function deferredPrinciples() {
  return principles.filter(principle => getPrincipleState(principle.id).defer);
}

function renderPlan() {
  const items = chosenPlanItems();
  const deferred = deferredPrinciples();

  app.innerHTML = `
    ${topBackMarkup("Aanpassingen wijzigen")}

    <section class="content-card plan-shell">
      <div class="plan-header">
        <h1 class="stage-title plan-title"><span class="brand-speel">Speel</span><span class="brand-zelf">Zelf</span><span class="brand-plus">+</span> <span class="plan-title__word">plan</span></h1>
        <div class="plan-game"><span>Spel</span><strong>${escapeHtml(state.gameName)}</strong></div>
        <p class="plan-intro">Je kunt nu aan de slag. Voer de gekozen aanpassingen uit en probeer ze met bewoners voordat je ze definitief maakt.</p>
      </div>

      <section class="plan-section">
        <h2>Dit ga je aanpassen</h2>
        ${items.length
          ? items.map(item => planItemMarkup(item)).join("")
          : `<div class="plan-empty">Je hebt geen aanpassingen gekozen.</div>`}
      </section>

      ${items.length ? materialOverviewMarkup(items) : ""}

      ${deferred.length ? `
        <section class="plan-section">
          <h2>Nog beoordelen met bewoners</h2>
          <p>Voor deze ontwerpdoelen is nog geen keuze gemaakt. Bekijk ze eerst opnieuw tijdens het spelen voordat je een oplossing vastlegt.</p>
          <ul>
            ${deferred.map(principle => `<li><strong>${escapeHtml(principle.title)}</strong> — ${escapeHtml(principle.observeTip)}</li>`).join("")}
          </ul>
        </section>` : ""}

      <section class="plan-section test-section">
        <div class="test-section__intro">
          <h2>Na uitvoering: test het aangepaste spel opnieuw</h2>
          <p><strong>1. Directe speelsessie.</strong> Laat bewoners opnieuw spelen zonder automatisch hulp over te nemen. Geef alleen incidentele ondersteuning wanneer dat nodig is en ga aan de hand van de punten hieronder na wat nu zelfstandig lukt.</p>
        </div>

        <div class="test-grid">
          ${principles.map(testCriterionMarkup).join("")}
        </div>

        <div class="test-section__intro daily-practice-intro">
          <h2>2. Probeer het daarna in de dagelijkse omgeving</h2>
          <p>Laat het spel op meerdere gewone momenten zichtbaar en startklaar staan. Kijk niet alleen of bewoners <em>kunnen</em> spelen, maar ook of zij zelf tot spelen komen en of de opstelling in de dagelijkse praktijk bruikbaar blijft.</p>
        </div>
        <div class="test-grid">
          ${dailyPracticeTestMarkup()}
        </div>
      </section>

      <div class="plan-export no-print">
        <div>
          <h2>Bewaar of deel het plan</h2>
          <p>De printweergave bevat de gekozen aanpassingen, materialen, illustraties, open aandachtspunten en testvakjes.</p>
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
            <strong>Waar kun je dit krijgen?</strong>
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
            <p><strong>Waar te krijgen:</strong> ${escapeHtml(item.solution.source || "Nog bepalen.")}</p>
          </div>`).join("")}
      </div>
    </section>`;
}

function dailyPracticeTestMarkup() {
  const items = [
    ["Opmerken en initiatief", "Bewoners merken het spel op of beginnen er zelf over, zonder dat een medewerker het gebruik steeds initieert."],
    ["Startklaar blijven", "Spel en materialen blijven beschikbaar en op hun plek wanneer er geen activiteit wordt begeleid."],
    ["Passen in de ruimte", "De opstelling belemmert geen loop-, rij- of zorgroutes en hoeft niet voortdurend voor andere dagelijkse activiteiten te worden weggehaald."],
    ["Ondersteuning in de praktijk", "Noteer welke incidentele hulp nog nodig is en of medebewoners elkaar spontaan ondersteunen."],
    ["Onverwachte omstandigheden", "Noteer praktische factoren die het gebruik beïnvloeden, bijvoorbeeld licht, geluid, stroomvoorziening, verplaatsen van materiaal of een andere activiteit in dezelfde ruimte."]
  ];
  return items.map(([title, text]) => `
    <div class="test-card">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(text)}</p>
      <div class="paper-checks" aria-label="In de dagelijkse omgeving invullen">
        <span>□ Werkt goed</span>
        <span>□ Nog aanpassen</span>
        <span>□ Niet waargenomen</span>
      </div>
    </div>`).join("");
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
