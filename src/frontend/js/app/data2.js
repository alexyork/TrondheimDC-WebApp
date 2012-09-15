if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Data === "undefined" || !TrondheimDC.Data) {
    TrondheimDC.Data = {};
}

TrondheimDC.Data.sessions = [
    {
        id: 1,
        title: "A Question of Craftsmanship",
        abstract: "Although a great deal of the enthusiasm for Agile development initially grew from software developers, much of the current focus in Agile circles has moved to on organisational aspects, product management and soft skills. Craftsmanship has long been a quality and a metaphor applied to software development, but more recently software craftsmanship has emerged as a more explicit movement and branding focused on reclaiming and re-emphasising the importance of the detail, of how to code and how to do it well. There are many different perspectives on what the craftsmanship metaphor implies and what benefits and liabilities it may have. This keynote lays out and explores the motivation, implications, pros and cons of a craftsmanship view of software development.",
        speakerIds: [1],
        tags: ["Craftsmanship", "Smidig", "Motiverende", "Utvikling"],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    }, 
    {
        id: 2,
        title: "Meldingsbasert integrasjon i skyen og i eget hus",
        abstract: "Meldinger er en fleksibel, sikker og interoperatibel måte å integrere distribuerte løsninger på. Med skyen hengende over oss trenger vi mekanismer og teknologi som fungerer på tvers av tradisjonelle og nye muligheter å sette sammen løsninger på. I dette foredraget vil vi vise hva .NET, Windows og Windows Azure har å by på i så henseende.",
        speakerIds: [10],
        tags: [ "Arkitektur", "Back-end", "Cloud", "Azure", "Integrasjon" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 3,
        title: "Eclipse – ikke bare en Java IDE",
        abstract: "Eclipse er blant verdens største åpen-kildekode-prosjekter. Nærmere to hundre store og små bedrifter, derav industriledere, bidrar med til sammen 650 aktive utviklere. Hvordan henger organisasjonen sammen og hvordan kan titalls millioner linjer kode leveres på dato - hvert år?",
        speakerIds: [17],
        tags: [ "Verktøy", "Smidig", "Team", "Organisasjon", "Java"],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 4,
        title: ".NET utenfor Windows",
        abstract: "Alle vet at .NET er en Microsoft-teknologi som kjører på Windows. Men ikke alle vet at .NET også kjører på en mengde andre plattformer! Vi snakker om MacOS, Linux, iOS, Android, spillkonsoller og embedded platformer. I dette foredraget vil jeg fortelle om de mulighetene som finnes og hva som gjør de interessante.",
        speakerIds: [16],
        tags: [ ".NET", "Mobil", "Kryss-plattform" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 5,
        title: "Hands-on with ASP.NET Web API",
        abstract: "Er du nysgjerrig på ASP.NET Web API så er dette presentasjonen for deg. Vi kommer etter en kort bakgrundspresentasjon ha en praktisk gjennomgang på hvor enkelt det er å begynne med ASP.NET Web API.",
        speakerIds: [8],
        tags: [".NET", "Web", "API", "Arkitektur"],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 6,
        title: "MV(C) i browseren med Backbone.js og REST.",
        abstract: "Webprogrammering på klientsiden har vært plaget av manglende struktur og en uheldig sammenblanding av domenemodell og presentasjonslogikk. Dette gir lite testbar kode, og dermed et smertefullt vedlikehold. Kristian presenterer backbone.js kombinert med et REST-api som en mulig vei ut av kaoset.",
        speakerIds: [5],
        tags: [ "JavaScript", "MVC", "Rest", "Backbone", "Kodekvalitet", "Klientside" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 7,
        title: "Architecture with Agility",
        abstract: "The word Agile has passed into the wider buzzwordsphere familiar to all in development. But that does not mean its concepts, culture, associated processes and practices or implications are as widely understood. Agile development involves more than a passing familiarity with Scrum terminology, more than the occasional use of an automated testing framework and more than simply rebranding either a chaotic or bureaucratic in-house process and proclaiming 'We're Agile!'' Architecture is often placed falsely in conflict with Agile approaches, and vice versa. Architecture is not something that is completed and set in stone in a design phase, caught and trapped in a document, administered and policed by a select few. Architecture defines the significant decisions that characterise a system, decisions that are discovered and made at different times during the process of development, and by different roles. This session explores the practical relationship between Agile process and Agile architecture.",
        speakerIds: [1],
        tags: [ "Lyntale", "Arkitektur", "Smidig" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 8,
        title: "Bonsai - A Graphics and Animation JS Library",
        abstract: "Developing interactive and beautiful apps and websites has been difficult and limited in the past - if you wanted to go fancy, Adobe Flash was the way to go. With Bonsai, an open-source Graphics and Animation Library built in JavaScript, you now can create stunning content similar to Adobe Flash. Bonsai’s simple API makes optimal use of different “HMTL5” technologies such as SVG, CSS3, WebWorkers and even nodejs. During this talk we will look into the unique architecture of Bonsai, including the separation of rendering and script execution and its plugin infrastructure. We will explore the rendering engine(s), such as the SVG renderer and the environment agnostic script runner (running in the window thread, WebWorker or even on nodejs).</p><p>Bonsai is also the JavaScript-Library that powers our new Flash (including ActionScript 3) to JavaScript Converter <a href='http://pixelplant.com'>http://pixelplant.com</a> and its ActionScript 3 plugin tries to preserve Flash semantics in JavaScript, giving Flash developers an easier entry point to JavaScript and HTML5.</p><p>After this talk you will have a good overview of Bonsai’s intuitive and simple JavaScript API and how we use the open web to draw interactive graphics. Find everything at <a href='http://bonsaijs.org'>http://bonsaijs.org</a>",
        speakerIds: [4],
        tags: [ "JavaScript", "Klientside", "Web", "Interaksjon" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
        {
        id: 9,
        title: "From Chaos to Self Organization",
        abstract: "Based on his upcoming book, Roy Osherove discusses the three phases software teams may exist in, and how to navigate between them. Being unaware of these phases could be one of the biggest reasons why agile adoption fails in many teams. Roy also discusses the role of the team leader in a team, and how leadership style needs to change between team phases.",
        speakerIds: [2],
        tags: ["Team", "Selvorganiserte team", "Smidig", "Teamledelse" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 10,
        title: "Deep TDD: Proxy Based vs. Profiler Based Isolation Frameworks in .NET",
        abstract: 'In this talk Roy Osherove, author of "The art of Unit Testing", discusses one of the biggest unknowns to most people doing unit testing and tdd - how isolation(mocking) frameworks work, and why do some of them have very different abilities than others. Why can some frameworks fake static calls and others can&#39;t for example. After this talk you will be better equipped to choose a framework for your next project.',
        speakerIds: [2],
        tags: [".NET", "TDD", "Enhetstesting", "Mocking", "Verktøy" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 11,
        title: "Design for vekst",
        abstract: "Arkitektur-patterns som kan være med deg fra forsiktig start til viral vekst. Systemarkitektur for web-baserte applikasjoner, fra nøktern hardware til gradvis og plutselig vekst. Praktiske eksempler i forskjellige språk vil bli presentert.",
        speakerIds: [19],
        tags: [ "Arkitektur", "Web", "Back-end"],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 12,
        title: "Scrum og iterasjoner – når er det lurt?",
        abstract: "Beskrivelse: «Erfaringsbasert presentasjon av betingelsene for at scrum og iterasjoner kan gi verdi og hvorfor det noen ganger er mindre viktig. Kjennskap til scrum er en fordel.»",
        speakerIds: [12],
        tags: [ "Lyntale",  "Iterasjoner", "Scrum", "Smidig"],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 13,
        title: "Kanban: From the U.S. Supermarket to Japanese Automobile Production",
        abstract: "Lean production can be described as both a philosophy and set of tools and techniques that aims to identify and eliminate all waste in manufacturing operations. The lean paradigm stems from the Just-in-Time (JIT) movement of the 1980s, and has its roots set firmly in the Toyota Production System (TPS). A central element of JIT and TPS is the Kanban system. Powell presents the development of the Kanban system and explains the underlying assumptions which are critical to the success of this approach.",
        speakerIds: [11],
        tags: [ "Lyntale", "Kanban", "Smidig", "Lean" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 14,
        title: "Interaksjonsdesign for utviklere",
        abstract: "Ingen lager lite brukervennlige systemer med vilje. Hvorfor hvis alle gjør sitt beste, hvorfor blir ikke systemene automatisk brukervennlig? En av grunnene er at det du synes er logisk ikke nødvendigvis er logisk for andre. I foredraget gir jeg eksempler på grunnleggende prinsipper innen interaksjonsdesign og viser eksempler fra arbeid med å sikre brukervennligheten til virksomhetskritiske it-systemer.",
        speakerIds: [6],
        tags: [ "Brukeropplevelse", "Interaksjon" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 15,
        title: "JavaScript Everything!",
        abstract: 'In this talk we will look at a real and fairly complex implementation of a "mobile application" based on open web standards. We will look at how the application is build to adopt itself to different screen sizes, how it uses modern browser API&#39;s and how it live on both a URL and can be shipped to several app stores with more or less no code adjustment.<br/> We will look at different challenges one face in the client when doing mobile development and how they have been conquer. We will look at do and do not do&#39;s and we will draw out the underlaying architecture of the whole application and what has led to the different choices. <br/>The application is written entirely in JavaScript and when designing the client it became clear it would be a huge benefit to have the same language running on the server side. We will also look at how node.js made it possible to deal with real time data in a way that benefits the mobile client.',
        speakerIds: [3],
        tags: [ "JavaScript", "Klientside", "Mobil", "Kryss-plattform"],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 16,
        title: "Psykologi og design",
        abstract: "Hvor viktig er det å kunne noe om psykologi for designere? Hvorfor er det viktig, og når kan det hjelpe? Hvilke deler av psykologien bør vi se til? Hvilke konkrete regler og prinsipper kan vi dra ut av dette? Kom og lær!",
        speakerIds: [22],
        tags: [ "Design", "Interaksjon", "Psykologi" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },  
    {
        id: 17,
        title: "Linked Open Data",
        abstract: "Storbritannia og USA har ledet an i bevegelsen for å dele strukturerte data åpent på nett i semantisk form. Denne presentasjonen ser på fordeler og ulemper med å dele data på denne måten, og hva semantikk faktisk kan gjøre for oss. Vi tar også for oss noen konkrete eksempler.",
        speakerIds: [15],
        tags: [ "Web", "API" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 18,
        title: "Definisjonen av Done ",
        abstract: "Det er på tide å kalle en spade en spade. En feature er ikke ferdig før den er i produksjon, og fungerer, og brukes. Tore forteller hvordan man blir helt ferdig, og hvem som må sørge for at det skjer.",
        speakerIds: [18],
        tags: [ "Smidig", "Organisasjon", "Lyntale" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 19,
        title: "Realtime Studio",
        abstract: "Trondheims-baserte Outracks Technologies utvikler verktøyet Realtime Studio som lover å ta interaktive og grafiske brukeropplevelser til et helt nytt nivå. Ved hjelp av et grensesprengende nytt programmeringsspråk kalt Uno og det visuelle designverktøyet Realtime Studio får du tilgang til all kraften i grafikkprosessoren (GPU'en) i enhetene rundt deg, for eksempel PCer, nettlesere, mobiltelefoner og tablets.<br/>Du kan lage interaktive programmer i 2D eller 3D, og eksportere fra en enkelt kodebase til alle mulige platformer, enten som native apps eller som HTML5-sider uten behov for plug-ins. Uno tilbyr utviklere en myk overgang fra konservativ HTML5 til å kunne leke med effekter og teknikker gjort mulig av nye teknologier som WebGL, OpenGL ES 3.0 og DirectX 11, uten å låse seg til en enkelt platform.<br/>Anders Lassen gir oss i denne showcasen en innføring i tankegangen og de tekniske gjennombruddene som gjør Realtime Studio mulig, og inviterer deltakere på TDC til å melde seg på et eksklusivt pilotprogram.",
        speakerIds: [21],
        tags: [ "Interaksjon", "Verktøy", "Klientside", "Programmeringsspråk" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 20,
        title: "Betre måtar å arbeida på",
        abstract: "Ein kort kikk på kvifor nokre ting fungerer betre, med utgangspunkt i psykologi og vitenskap i Kanban.",
        speakerIds: [20],
        tags: [ "Smidig", "Kanban", "Psykologi", "Lyntale" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },     
    {
        id: 21,
        title: "Ett team – 13 kunder. Funkar, funkar inte.",
        abstract: "Ikke alle lever og jobber i en verden som består langvarige, store prosjekter og dedikerte team. Vi deler erfaringer fra en hverdag fylt med en uforutsigbar blanding av forvaltning, nyutvikling og adhoc-oppgaver hvor vi likevel greier å bevare team-følelse, samt gjøre kundene fornøyde.",
        speakerIds: [13, 14],
        tags: [ "Lyntale", "Team", "Smidig" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 22,
        title: "Being an Anti-social Geek is harmful",
        abstract: "Developers are not known for their social skills. They're more characterized as geeks, centered around their coding and dealing with complex algorithms and problems to solve. This is not only depicted in Hollywood movies but also promoted within the community of developers itself, and those surrounding developers. Managers often say &quot;Oh he's a developers. Great at cranking out code, but you can't really talk to him&quot;.<br/> Although it seems harmless and fun at times to characterize developers in this way, it is actually a source of many problems when it comes to working on teams and dealing with customers. By somewhat justifying this kind of behavior, all we're doing is promoting it, saying &quot;it's OK&quot;.<br/> Yet my over 20 years experience in software development has shown me one thing if not anything else: lack of good communication can kill a team, can kill a product and can kill a company. Having dealt with hundreds of developers, managed many teams and started my own company, I have seen how team moral can be killed when communication is hindered. I have seen how products can fail when customers are ignored.<br/> Learning to communicate with team members, with customers, being in touch with those you are working with, with those you are working for is fundamental in being successful. Developers needs to learn how to be social. Because only then, can communication flow freely and properly.",
        speakerIds: [9],
        tags: [ "Team" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 23,
        title: "Kontinuerlig testing: Høyhastighets-TDD med bedre kvalitet",
        abstract: "Testdrevet utvikling (TDD) har blitt en foretrukket arbeidsmetode, men utvikleres verktøykasse for rask testdrevet utvikling med god kvalitet er ofte mangelfull. Håvard Stranden vil gi en generell introduksjon til kontinuerlig testing, gi en oversikt over verktøy, og vise eksempler i C#/.NET.",
        speakerIds: [23],
        tags: [ "Testing", "TDD", "Kodekvalitet", "Verktøy", "Lyntale" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },
    {
        id: 24,
        title: "Fem år med 'smidig' produktutvikling - hva har skjedd?",
        abstract: "Arnulf Krokeide, systemarkitekt og seniorutvikler hos Confirmit AS oppsummerer fem års erfaring med innføring av smidig utvikling i en produktbedrift. Hvilken effekt har smidige teknikker hatt i et firma med en stor kodebase?",
        speakerIds: [24],
        tags: [ "Smidig", "Organisasjon", "Teamledelse", "Lyntale" ],
        starts: new Date(0000, 00, 00, 00, 00, 00),
        ends: new Date(0000, 00, 00, 00, 00, 00)
    },

];

TrondheimDC.Data.speakers = [
    {
        image: "images/speakers/kevlinhenney.jpg",        
        id: "1",
        name: "Kevlin Henney",
        twitter: "kevlinhenney",
        about: 'Kevlin er en selvstendig konsulent og trainer i England. Hans interesser innen utvikling er "patterns, programming, practice and process". Han har skrevet for flere magasiner og websider, inkludert Better Software, The Register, Application Development Advisor, Java Report, og The C/C++ Users Journal. Kevlin er også en av forfatterne bak "A Pattern Language for Distributed Computing" og "On Patterns and Pattern Language", og to volum i "The Pattern-Oriented Software Architecture"-serien. Han er også redaktør for <a href="http://shop.oreilly.com/product/9780596809492.do">97 Things Every Programmer Should Know</a>.'
    }, {
        image: "images/speakers/royosherove.jpg",
        id: "2",
        name: "Roy Osherove",
        about: 'Roy Osherove jobber som Chief Scientist hos <a href="http://www.bouvet.no">Bouvet</a>, og har skrevet "The Art of Unit Testing", "From Chaos to Self Organization" og "Notes to a Software Team Leader". Du kan finne ham bloggen hans: <a href="http://www.osherove.com">osherove.com</a>, og <a href="http://www.5whys.com">5whys.com</a>.',
        twitter: "royosherove"
    }, {
        image: "images/speakers/trygvelie.jpg",
        id: "3",
        name: "Trygve Lie",
        about: "Trygve Lie er webutvikler hos A-Pressen Digitale Medier med en sterk lidenskap for åpen webteknologi. Han har utviklet webløsninger basert på HTML, CSS og JavaScript siden midten av 90-tallet og har holdt på med mobil webutvikling siden den første mobile nettleseren som kom med Nokia 7110 rundt tusenårsskifte.",
        twitter: "trygve_lie"
    }, {
        image: 'images/speakers/wolframkriesing.jpg',
        id: "4",
        name: "Wolfram Kriesing",
        about: "Allerede i 1999 da Netscape 4 og IE4 var de to regjerende nettleserene, hadde Wolfram sitt første JavaScript oppdrag. Det gikk likevel ikke opp for han før i ettertid hvor kult dette språket var. I 2008 var han med å stiftet en av de første rene JavaScript selskapene; uxebu. Nå som alle mobiltelefoner har god JavaScript-støtte, har uxebu fokus på HTML5 applikasjoner, samtidig som de prøver å tøye grensene for hva som er mulig med JavaScript. Wolfram har vært bidragsyter til Dojo, og har senere startet embedJS, et JavaScript bibliotek med fokus på mobil først metodikken.",
        twitter: 'wolframkriesing'
    }, {
        image: "images/speakers/kristianbendiksen.jpg",
        id: "5",
        name: "Kristian Bendiksen",
        about: "Kristian er systemutvikler, og glad i programmere. Han liker enkle it-systemer og god kode, men har lært seg å se sjarmen i den virkelige verdens kompleksitet. Kristian er it-konsulent hos Bouvet ASA i Trondheim, og før det skrev han fysikksimuleringssoftware og studerte kunstig intelligens ved NTNU.",
        twitter: "kriben"
    }, {
        image: "images/speakers/elitoftoyandersen.jpg",
        id: "6",
        name: "Eli Toftøy-Andersen",
        about: "Eli Toftøy-Andersen er senior rådgiver innen brukervennlighet og design i konsulentselskapet Steria. Hun har blant annet jobbet som interaksjonsdesigner i Telenor Mobil og i prosjekter for Helse Sør-Øst, Statens Pensjonskasse og Forsvaret. Hun er vant til å tale brukernes sak under utvikling og innføring av it-systemer. <br/>Eli kjørte sin første brukertest i år 2000 og har siden den gang vært en pådriver for å få gjennomført brukertesting i prosjektene hun har vært med i. Hun blogger om på <a href='http://www.brukskvalitet.no'>www.brukskvalitet.no</a>. Eli Toftøy-Andersen er medforfatter av boken Praktisk brukertesting.",
        twitter: "elitatt"
    }, {
        id: "7",
        image: "images/speakers/jimmynilsson.jpg",
        name: "Jimmy Nilsson",
        twitter: "jimmynilsson",
        about: "En av gründerne og daglig leder for <a href='http://factor10.com/'>factor10</a>. Forfattar av Applying Domain-Driven Design and Patterns og .NET Enterprise Design. Developer, samt arkitekt/utvikler i 20+ år."
    },
    {
        id: "8",
        image: "images/speakers/tomasjansson.jpg",        
        name: "Tomas Jansson",
        twitter: "TomasJansson",
        about: "Tomas Jansson jobber som manager i BEKK i Oslo og har mer enn seks års erfarenhet fra konsulentverden i både Norge og Sverige med alt fra SAP-utvikling og perl til java og .NET. Fra .NET-stacken har Tomas erfarenhet med hele spektrumet fra databas til webb og caching med AppFabric."
    },
    {
        id: "9",
        image: "images/speakers/hadihariri.jpg",        
        name: "Hadi Hariri",
        twitter: "hhariri",
        about: "Hadi Hariri is a developer, speaker and Technical Evangelist at JetBrains. His passions include software architecture and web development. Book author and frequent contributor to developer publications, Hadi has been speaking at industry events for over a decade. He is based in Spain where he lives with his wife and three sons. He is also an ASP.NET MVP and ASP.NET Insider."
    },
    {
        id: "10",
        image: "images/speakers/joaroyen.jpg",        
        name: "Joar Øyen",
        twitter: "joaroyen",
        about: "Joar Øyen har bidratt mye i utviklingsmiljøet i Trondheim siden NNUG Trondheim startet opp i 2004, og har de siste tre år fått tildelt tittelen Most Valuable Professional av Microsoft. Utover sitt arbeid i NNUG jobber han til daglig som konsulent i Acando og hjelper kunder med utfordringer innen arkitektur og integrasjon."
    },
    {
        id: "11",
        image: "images/speakers/daryllpowell.jpg",        
        name: "Daryl Powell",
        twitter: "",
        about: "Daryl Powell works for the Department of Production and Quality Engineering at the Norwegian University of Science and Technology NTNU and also for SINTEF Operations Management. He has experience from the eight-year research program “SFI Norman” which aims to develop new and multi-disciplinary research on next-generation manufacturing, and create theories, methods, models and management tools that enable Norwegian manufacturers to thrive in the global market. Daryl has an MSc in Lean Production from the University of Wales in Swansea, UK; and defends his PhD thesis entitled “Investigating ERP support for Lean Production” in September 2012. In his thesis he identifies and examines a range of support functionality offered by contemporary ERP systems in the deployment of Lean Production principles. He has published a number of articles on the subject in reputable international journals."
    },
    {
        id: "12",
        image: "images/speakers/klausstafto.jpg",        
        name: "Klaus Stafto",
        twitter: "",
        about: "Klaus Stafto er seniorkonsulent i Acando i Trondheim. Han har 13 års erfaring i bransjen fra roller som utvikler, ScrumMaster, arkitekt, endringsansvarlig, prosjektleder og gruppeleder. Han har jobbet 11 år i Oslo for oppdragsgivere som blant annet Telenor, Statsbygg, Norges Forskningsråd, Apokjeden (Apotek 1) og Statens vegvesen."
    },
    {
        id: "13",
        image: "images/speakers/jorunbremseth.jpg",        
        name: "Jorun Kristin Bremseth",
        twitter: "",
        about: "Har jobbet i Kantega siden 2000 - stort sett med nettopp denne typen hverdag. Allsidig person, allsidig bakgrunn og allsidige oppgaver. Prosjektledelse, kundeoppfølging, kurs/opplæring, funksjonell rådgivning, kravhåndterer/stiller, tester, salg, markedsretta arbeid. <br/> Foredraget holdes sammen med Sjur Kvammen."
    },
    {
        id: "14",
        image: "images/speakers/sjurkvammen.jpg",        
        name: "Sjur Kvammen",
        twitter: "sjurkvammen",
        about: "Har viklet ut systemer siden 2006, og er kanskje særlig interessert i den menneskelige faktor.<br/> Foredraget holdes sammen med Jorun Kristin Bremseth"
    },
    {
        id: "15",
        image: "images/speakers/larsmariusgarshol.jpg",        
        name: "Lars Marius Garshol",
        twitter: "larsga",
        about: "Lars Marius har jobbet med semantisk teknologi siden 1999. Han var med på å starte produktfirmaet Ontopia i 2000, og har vært redaktør for flere av ISO-standardene for emnekart. I dag er han konsulent på semantisk web i Bouvet"
    },
    {
        id: "16",
        image: "images/speakers/runegrimstad.jpg",        
        name: "Rune Grimstad",
        twitter: "runegri",
        about: "Rune er spesialist på .NET og har jobbet med platformen siden den ble lansert for 10 år siden. Til daglig jobber han som konsulent i Capgemini og fokuserer der på systemutvikling og systemarkitektur. På fritida bruker Rune mye tid på mobilutvikling og er spesielt interessert i kryss-platform mobile applikasjoner."
    },
    {
        id: "17",
        image: "images/speakers/torkildulvoyresheim.jpg",        
        name: "Torkild Ulvøy Resheim",
        twitter: "torkildr",
        about: "Torkild U. Resheim har jobbet som systemutvikler siden 1997 og er konsulent hos Itema AS. De siste syv årene har han hovedsaklig laget verktøy basert på Eclipse-plattformen; blant annet for Mertech og Atmel. Han lager nå simuleringsverktøy for marine operasjoner på oppdrag fra MARINTEK. Torkild er engasjert i åpne løsninger og er «committer» på flere Eclipse-prosjekter."
    },
    {
        id: "18",
        image: "images/speakers/torevestues.jpg",        
        name: "Tore Vestues",
        twitter: "ToreVestues",
        about: "Tore er en entusiastisk utvikler med et smidig forhold til livet, prosess og kode. Han tror at problemer løses best med tillit, ydmykhet og pragmatiske løsninger. Tore jobber som Manager i BEKK consulting."
    },
    {
        id: "19",
        image: "images/speakers/stigbakken.jpg",        
        name: "Stig Bakken",
        twitter: "stigsb",
        about: "Stig Bakken har nærmere 20 års fartstid med Unix, Internet- og web-basert software. Han har vært en av kjerneutviklerene bak (eventuelt medskyldig i) PHP, men har hovedtyngden av sin erfaring fra søkebransjen, i bedrifter som FAST, Yahoo!, Google og Zedge."
    },
    {
        id: "20",
        image: "images/speakers/ingvaldskaug.jpg",        
        name: "Ingvald Skaug",
        twitter: "ingvald",
        about: "Ingvald er ein erfaren systemutviklar og fasilitator i Bouvet. Han har erfaring frå små og store selskap, og både meir og mindre smidige måtar å jobba på."
    },
    {
        id: "21",
        image: "images/speakers/anderslassen.jpg",        
        name: "Anders Lassen",
        twitter: "",
        about: "Anders Lassen (26) er gründer og daglig leder i Outracks Technologies. Han har hatt en lidenskap for sanntidsgrafikk siden svært ung alder, og har over de siste 10 årene vært involvert i en lang rekke spill- og grafikkdemo-produksjoner. Etter 6 år som student ved NTNU og grafikkspesialist i ARM Norway startet han Outracks Technologies AS i 2011. Anders og Outracks satser nå tungt på å utvikle verktøy som gjør det enorme potensialet i moderne GPU'er enklere tilgjengelig for utviklere og artister."
    },
    {
        id: "22",
        image: "images/speakers/ninavolstad.jpg",        
        name: "Nina Volstad",
        twitter: "ninavolstad",
        about: "Sivilingeniør i Industriell Design fra NTNU, med 4 års fartstid i Bekk som interaksjonsdesigner. Elsker når ting bare funker uten hassle, og mine henvendelser til både det offentlige og private firmaer inkluderer som regel en vennlig, men bestemt gratis-ekspertevaluering-av-løsningen-din-liste! Jobber på alt fra selvbetjeningsystemer på web og desktop applikasjoner, til mobile ting og prototyper for fremtidsvisjoner. Har det siste året vært leder for Fagruppen for Interaksjon i Bekk, og er spesielt interessert i det psykologiske aspektet ved design."
    },
    {
        id: "23",
        image: "images/speakers/havardstranden.jpg",        
        name: "Håvard Stranden",
        twitter: "havardstranden",
        about: "Håvard Stranden jobber som seniorpartner i Conceptos Consulting. Han har bred erfaring fra blant annet store tjenesteorienterte arkitekturer, forretningsapplikasjoner, spesialiserte kommunikasjonsløsninger og åpen kildekode-prosjekter. Håvard er Sivilingeniør og Master of Technology fra NTNU, og bruker sin erfaring som rådgiver, teknisk prosjektleder og systemutvikler for Conceptos Consulting sine kunder. Han er dessuten en aktiv bidragsyter og deltager i faglige fora i Trondheimsområdet gjennom blant annet verv som styremedlem i NNUG og medarrangør for XP Meetup."
    },  
    {
        id: "24",
        image: "images/speakers/arnulfkrokeide.jpg",        
        name: "Arnulf Krokeide",
        twitter: "arnulfk",
        about: "Startet han som naiv entusiastisk evangelist for smidig utvikling i et firma med 100 ansatte. Fem år senere har Confirmit 350 ansatte, er litt smidigere, mange erfaringer rikere og med et mer pragmatisk syn på smidig."
    },
    {
        id: "25",
        image: "images/speakers/rolfandersstorset.jpg",        
        name: "Rolf Anders Storset",
        twitter: "rolfanders",
        about: "Rolf Anders er til daglig designer hos WTW Software i Trondheim og lidenskapelig opptatt av god design og brukervennlighet. Med fokus på mobile nettjenester og applikasjoner står han bak suksesser som AtB Mobillett og SmartPark for Trondheim Parkering."
    }    
];
