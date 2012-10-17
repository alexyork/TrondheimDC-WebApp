if (typeof TrondheimDC === "undefined" || !TrondheimDC) {
    TrondheimDC = {};
}
if (typeof TrondheimDC.Data === "undefined" || !TrondheimDC.Data) {
    TrondheimDC.Data = {};
}

TrondheimDC.Data.timeslots = [
    {
        starts: new Date(2012, 09, 29, 08, 45, 00),
        ends: new Date(2012, 09, 29, 09, 00, 00),
        title: "Introduksjon"
    },
    {
        starts: new Date(2012, 09, 29, 09, 00, 00),
        ends: new Date(2012, 09, 29, 09, 55, 00)
    },
    {
        starts: new Date(2012, 09, 29, 10, 05, 00),
        ends: new Date(2012, 09, 29, 11, 00, 00)
    },
    {
        starts: new Date(2012, 09, 29, 11, 10, 00),
        ends: new Date(2012, 09, 29, 11, 30, 00),
        title: "Pause"
    },
    {
        starts: new Date(2012, 09, 29, 11, 30, 00),
        ends: new Date(2012, 09, 29, 12, 00, 00)
    },
    {
        starts: new Date(2012, 09, 29, 12, 00, 00),
        ends: new Date(2012, 09, 29, 12, 30, 00)
    },
    {
        starts: new Date(2012, 09, 29, 12, 30, 00),
        ends: new Date(2012, 09, 29, 13, 00, 00)
    },
    {
        starts: new Date(2012, 09, 29, 13, 00, 00),
        ends: new Date(2012, 09, 29, 14, 00, 00),
        title: "Lunsj"
    },
    {
        starts: new Date(2012, 09, 29, 14, 00, 00),
        ends: new Date(2012, 09, 29, 14, 30, 00)
    },
    {
        starts: new Date(2012, 09, 29, 14, 30, 00),
        ends: new Date(2012, 09, 29, 15, 00, 00)
    },
    {
        starts: new Date(2012, 09, 29, 15, 00, 00),
        ends: new Date(2012, 09, 29, 15, 15, 00),
        title: "Pause"
    },
    {
        starts: new Date(2012, 09, 29, 15, 15, 00),
        ends: new Date(2012, 09, 29, 15, 45, 00)
    },
    {
        starts: new Date(2012, 09, 29, 15, 45, 00),
        ends: new Date(2012, 09, 29, 16, 15, 00)
    },
    {
        starts: new Date(2012, 09, 29, 16, 15, 00),
        ends: new Date(2012, 09, 29, 16, 45, 00)
    },
    {
        starts: new Date(2012, 09, 29, 16, 45, 00),
        ends: new Date(2012, 09, 29, 17, 00, 00),
        title: "Pause"
    },
    {
        starts: new Date(2012, 09, 29, 17, 00, 00),
        ends: new Date(2012, 09, 29, 17, 55, 00)
    },
]

TrondheimDC.Data.sessions = [
    {
        id: 1,
        title: "A Question of Craftsmanship",
        abstract: "Although a great deal of the enthusiasm for Agile development initially grew from software developers, much of the current focus in Agile circles has moved to on organisational aspects, product management and soft skills. Craftsmanship has long been a quality and a metaphor applied to software development, but more recently software craftsmanship has emerged as a more explicit movement and branding focused on reclaiming and re-emphasising the importance of the detail, of how to code and how to do it well. There are many different perspectives on what the craftsmanship metaphor implies and what benefits and liabilities it may have. This keynote lays out and explores the motivation, implications, pros and cons of a craftsmanship view of software development.",
        speakerIds: [1],
        tags: ["Craftsmanship", "Smidig", "Motiverende", "Utvikling"],
        starts: new Date(2012, 09, 29, 09, 00, 00),
        ends: new Date(2012, 09, 29, 09, 55, 00),
        track: 1
    }, 
    {
        id: 2,
        title: "Meldingsbasert integrasjon i skyen og i eget hus",
        abstract: "Meldinger er en fleksibel, sikker og interoperatibel mÃ¥te Ã¥ integrere distribuerte lÃ¸sninger pÃ¥. Med skyen hengende over oss trenger vi mekanismer og teknologi som fungerer pÃ¥ tvers av tradisjonelle og nye muligheter Ã¥ sette sammen lÃ¸sninger pÃ¥. I dette foredraget vil vi vise hva .NET, Windows og Windows Azure har Ã¥ by pÃ¥ i sÃ¥ henseende.",
        speakerIds: [10],
        tags: [ "Arkitektur", "Back-end", "Cloud", "Azure", "Integrasjon" ],
        starts: new Date(2012, 09, 29, 11, 30, 00),
        ends: new Date(2012, 09, 29, 12, 00, 00),
        track: 1
    },
    {
        id: 3,
        title: "Eclipse â€“ ikke bare en Java IDE",
        abstract: "Eclipse er blant verdens stÃ¸rste Ã¥pen-kildekode-prosjekter. NÃ¦rmere to hundre store og smÃ¥ bedrifter, derav industriledere, bidrar med til sammen 650 aktive utviklere. Hvordan henger organisasjonen sammen og hvordan kan titalls millioner linjer kode leveres pÃ¥ dato - hvert Ã¥r?",
        speakerIds: [17],
        tags: [ "VerktÃ¸y", "Smidig", "Team", "Organisasjon", "Java"],
        starts: new Date(2012, 09, 29, 14, 00, 00),
        ends: new Date(2012, 09, 29, 14, 30, 00),
        track: 1
    },
    {
        id: 4,
        title: ".NET utenfor Windows",
        abstract: "Alle vet at .NET er en Microsoft-teknologi som kjÃ¸rer pÃ¥ Windows. Men ikke alle vet at .NET ogsÃ¥ kjÃ¸rer pÃ¥ en mengde andre plattformer! Vi snakker om MacOS, Linux, iOS, Android, spillkonsoller og embedded platformer. I dette foredraget vil jeg fortelle om de mulighetene som finnes og hva som gjÃ¸r de interessante.",
        speakerIds: [16],
        tags: [ ".NET", "Mobil", "Kryss-plattform" ],
        starts: new Date(2012, 09, 29, 14, 30, 00),
        ends: new Date(2012, 09, 29, 15, 00, 00),
        track: 1
    },
    {
        id: 5,
        title: "Hands-on with ASP.NET Web API",
        abstract: "Er du nysgjerrig pÃ¥ ASP.NET Web API sÃ¥ er dette presentasjonen for deg. Vi kommer etter en kort bakgrundspresentasjon ha en praktisk gjennomgang pÃ¥ hvor enkelt det er Ã¥ begynne med ASP.NET Web API.",
        speakerIds: [8],
        tags: [".NET", "Web", "API", "Arkitektur"],
        starts: new Date(2012, 09, 29, 12, 30, 00),
        ends: new Date(2012, 09, 29, 13, 00, 00),
        track: 1
    },
    {
        id: 6,
        title: "MV(C) i browseren med Backbone.js og REST.",
        abstract: "Webprogrammering pÃ¥ klientsiden har vÃ¦rt plaget av manglende struktur og en uheldig sammenblanding av domenemodell og presentasjonslogikk. Dette gir lite testbar kode, og dermed et smertefullt vedlikehold. Kristian presenterer backbone.js kombinert med et REST-api som en mulig vei ut av kaoset.",
        speakerIds: [5],
        tags: [ "JavaScript", "MVC", "Rest", "Backbone", "Kodekvalitet", "Klientside" ],
        starts: new Date(2012, 09, 29, 15, 15, 00),
        ends: new Date(2012, 09, 29, 15, 45, 00),
        track: 1
    },
    {
        id: 7,
        title: "Architecture with Agility",
        abstract: "The word Agile has passed into the wider buzzwordsphere familiar to all in development. But that does not mean its concepts, culture, associated processes and practices or implications are as widely understood. Agile development involves more than a passing familiarity with Scrum terminology, more than the occasional use of an automated testing framework and more than simply rebranding either a chaotic or bureaucratic in-house process and proclaiming 'We're Agile!'' Architecture is often placed falsely in conflict with Agile approaches, and vice versa. Architecture is not something that is completed and set in stone in a design phase, caught and trapped in a document, administered and policed by a select few. Architecture defines the significant decisions that characterise a system, decisions that are discovered and made at different times during the process of development, and by different roles. This session explores the practical relationship between Agile process and Agile architecture.",
        speakerIds: [1],
        tags: [ "Lyntale", "Arkitektur", "Smidig" ],
        starts: new Date(2012, 09, 29, 15, 15, 00),
        ends: new Date(2012, 09, 29, 15, 45, 00),
        track: 2
    },
    {
        id: 8,
        title: "Bonsai - A Graphics and Animation JS Library",
        abstract: "Developing interactive and beautiful apps and websites has been difficult and limited in the past - if you wanted to go fancy, Adobe Flash was the way to go. With Bonsai, an open-source Graphics and Animation Library built in JavaScript, you now can create stunning content similar to Adobe Flash. Bonsaiâ€™s simple API makes optimal use of different â€œHMTL5â€ technologies such as SVG, CSS3, WebWorkers and even nodejs. During this talk we will look into the unique architecture of Bonsai, including the separation of rendering and script execution and its plugin infrastructure. We will explore the rendering engine(s), such as the SVG renderer and the environment agnostic script runner (running in the window thread, WebWorker or even on nodejs).</p><p>Bonsai is also the JavaScript-Library that powers our new Flash (including ActionScript 3) to JavaScript Converter <a href='http://pixelplant.com'>http://pixelplant.com</a> and its ActionScript 3 plugin tries to preserve Flash semantics in JavaScript, giving Flash developers an easier entry point to JavaScript and HTML5.</p><p>After this talk you will have a good overview of Bonsaiâ€™s intuitive and simple JavaScript API and how we use the open web to draw interactive graphics. Find everything at <a href='http://bonsaijs.org'>http://bonsaijs.org</a>",
        speakerIds: [4],
        tags: [ "JavaScript", "Klientside", "Web", "Interaksjon" ],
        starts: new Date(2012, 09, 29, 15, 15, 00),
        ends: new Date(2012, 09, 29, 15, 45, 00),
        track: 3
    },
        {
        id: 9,
        title: "Growing Effective Teams - From Survival Mode to Self Organization",
        abstract: "Based on his upcoming book, Roy Osherove discusses the three phases software teams may exist in, and how to navigate between them. Being unaware of these phases could be one of the biggest reasons why agile adoption fails in many teams. Roy also discusses the role of the team leader in a team, and how leadership style needs to change between team phases.",
        speakerIds: [2],
        tags: ["Team", "Selvorganiserte team", "Smidig", "Teamledelse" ],
        starts: new Date(2012, 09, 29, 12, 30, 00),
        ends: new Date(2012, 09, 29, 13, 00, 00),
        track: 2
    },
    {
        id: 10,
        title: "Deep TDD: Proxy Based vs. Profiler Based Isolation Frameworks in .NET",
        abstract: 'In this talk Roy Osherove, author of "The art of Unit Testing", discusses one of the biggest unknowns to most people doing unit testing and tdd - how isolation(mocking) frameworks work, and why do some of them have very different abilities than others. Why can some frameworks fake static calls and others can&#39;t for example. After this talk you will be better equipped to choose a framework for your next project.',
        speakerIds: [2],
        tags: [".NET", "TDD", "Enhetstesting", "Mocking", "VerktÃ¸y" ],
        starts: new Date(2012, 09, 29, 16, 15, 00),
        ends: new Date(2012, 09, 29, 16, 45, 00),
        track: 2
    },
    {
        id: 11,
        title: "Design for vekst",
        abstract: "Arkitektur-patterns som kan vÃ¦re med deg fra forsiktig start til viral vekst. Systemarkitektur for web-baserte applikasjoner, fra nÃ¸ktern hardware til gradvis og plutselig vekst. Praktiske eksempler i forskjellige sprÃ¥k vil bli presentert.",
        speakerIds: [19],
        tags: [ "Arkitektur", "Web", "Back-end"],
        starts: new Date(2012, 09, 29, 11, 30, 00),
        ends: new Date(2012, 09, 29, 12, 00, 00),
        track: 4
    },
    {
        id: 12,
        title: "Scrum og iterasjoner â€“ nÃ¥r er det lurt?",
        abstract: "Beskrivelse: Â«Erfaringsbasert presentasjon av betingelsene for at scrum og iterasjoner kan gi verdi og hvorfor det noen ganger er mindre viktig. Kjennskap til scrum er en fordel.Â»",
        speakerIds: [12],
        tags: [ "Lyntale",  "Iterasjoner", "Scrum", "Smidig"],
        starts: new Date(2012, 09, 29, 12, 00, 00),
        ends: new Date(2012, 09, 29, 12, 15, 00),
        track: 2
    },
    {
        id: 13,
        title: "Kanban: From the U.S. Supermarket to Japanese Automobile Production",
        abstract: "Lean production can be described as both a philosophy and set of tools and techniques that aims to identify and eliminate all waste in manufacturing operations. The lean paradigm stems from the Just-in-Time (JIT) movement of the 1980s, and has its roots set firmly in the Toyota Production System (TPS). A central element of JIT and TPS is the Kanban system. Powell presents the development of the Kanban system and explains the underlying assumptions which are critical to the success of this approach.",
        speakerIds: [11],
        tags: [ "Lyntale", "Kanban", "Smidig", "Lean" ],
        starts: new Date(2012, 09, 29, 12, 15, 00),
        ends: new Date(2012, 09, 29, 12, 30, 00),
        track: 2
    },
    {
        id: 14,
        title: "Interaksjonsdesign for utviklere",
        abstract: "Ingen lager lite brukervennlige systemer med vilje. Hvorfor hvis alle gjÃ¸r sitt beste, hvorfor blir ikke systemene automatisk brukervennlig? En av grunnene er at det du synes er logisk ikke nÃ¸dvendigvis er logisk for andre. I foredraget gir jeg eksempler pÃ¥ grunnleggende prinsipper innen interaksjonsdesign og viser eksempler fra arbeid med Ã¥ sikre brukervennligheten til virksomhetskritiske it-systemer.",
        speakerIds: [6],
        tags: [ "Brukeropplevelse", "Interaksjon" ],
        starts: new Date(2012, 09, 29, 12, 30, 00),
        ends: new Date(2012, 09, 29, 13, 00, 00),
        track: 3
    },
    {
        id: 15,
        title: "JavaScript Everything!",
        abstract: 'In this talk we will look at a real and fairly complex implementation of a "mobile application" based on open web standards. We will look at how the application is build to adopt itself to different screen sizes, how it uses modern browser API&#39;s and how it live on both a URL and can be shipped to several app stores with more or less no code adjustment.<br/> We will look at different challenges one face in the client when doing mobile development and how they have been conquer. We will look at do and do not do&#39;s and we will draw out the underlaying architecture of the whole application and what has led to the different choices. <br/>The application is written entirely in JavaScript and when designing the client it became clear it would be a huge benefit to have the same language running on the server side. We will also look at how node.js made it possible to deal with real time data in a way that benefits the mobile client.',
        speakerIds: [3],
        tags: [ "JavaScript", "Klientside", "Mobil", "Kryss-plattform"],
        starts: new Date(2012, 09, 29, 12, 00, 00),
        ends: new Date(2012, 09, 29, 12, 30, 00),
        track: 3
    },
    {
        id: 16,
        title: "Psykologi og design",
        abstract: "Hvor viktig er det Ã¥ kunne noe om psykologi for designere? Hvorfor er det viktig, og nÃ¥r kan det hjelpe? Hvilke deler av psykologien bÃ¸r vi se til? Hvilke konkrete regler og prinsipper kan vi dra ut av dette? Kom og lÃ¦r!",
        speakerIds: [22],
        tags: [ "Design", "Interaksjon", "Psykologi" ],
        starts: new Date(2012, 09, 29, 14, 30, 00),
        ends: new Date(2012, 09, 29, 15, 00, 00),
        track: 3
    },  
    {
        id: 17,
        title: "Linked Open Data",
        abstract: "Storbritannia og USA har ledet an i bevegelsen for Ã¥ dele strukturerte data Ã¥pent pÃ¥ nett i semantisk form. Denne presentasjonen ser pÃ¥ fordeler og ulemper med Ã¥ dele data pÃ¥ denne mÃ¥ten, og hva semantikk faktisk kan gjÃ¸re for oss. Vi tar ogsÃ¥ for oss noen konkrete eksempler.",
        speakerIds: [15],
        tags: [ "Web", "API" ],
        starts: new Date(2012, 09, 29, 15, 45, 00),
        ends: new Date(2012, 09, 29, 16, 15, 00),
        track: 1
    },
    {
        id: 18,
        title: "Definisjonen av Done ",
        abstract: "Det er pÃ¥ tide Ã¥ kalle en spade en spade. En feature er ikke ferdig fÃ¸r den er i produksjon, og fungerer, og brukes. Tore forteller hvordan man blir helt ferdig, og hvem som mÃ¥ sÃ¸rge for at det skjer.",
        speakerIds: [18],
        tags: [ "Smidig", "Organisasjon", "Lyntale" ],
        starts: new Date(2012, 09, 29, 14, 15, 00),
        ends: new Date(2012, 09, 29, 14, 30, 00),
        track: 2
    },
    {
        id: 19,
        title: "Realtime Studio",
        abstract: "Trondheims-baserte Outracks Technologies utvikler verktÃ¸yet Realtime Studio som lover Ã¥ ta interaktive og grafiske brukeropplevelser til et helt nytt nivÃ¥. Ved hjelp av et grensesprengende nytt programmeringssprÃ¥k kalt Uno og det visuelle designverktÃ¸yet Realtime Studio fÃ¥r du tilgang til all kraften i grafikkprosessoren (GPU'en) i enhetene rundt deg, for eksempel PCer, nettlesere, mobiltelefoner og tablets.<br/>Du kan lage interaktive programmer i 2D eller 3D, og eksportere fra en enkelt kodebase til alle mulige platformer, enten som native apps eller som HTML5-sider uten behov for plug-ins. Uno tilbyr utviklere en myk overgang fra konservativ HTML5 til Ã¥ kunne leke med effekter og teknikker gjort mulig av nye teknologier som WebGL, OpenGL ES 3.0 og DirectX 11, uten Ã¥ lÃ¥se seg til en enkelt platform.<br/>Anders Lassen gir oss i denne showcasen en innfÃ¸ring i tankegangen og de tekniske gjennombruddene som gjÃ¸r Realtime Studio mulig, og inviterer deltakere pÃ¥ TDC til Ã¥ melde seg pÃ¥ et eksklusivt pilotprogram.",
        speakerIds: [21],
        tags: [ "Interaksjon", "VerktÃ¸y", "Klientside", "ProgrammeringssprÃ¥k" ],
        starts: new Date(2012, 09, 29, 14, 00, 00),
        ends: new Date(2012, 09, 29, 14, 30, 00),
        track: 4
    },
    {
        id: 20,
        title: "Betre mÃ¥tar Ã¥ arbeida pÃ¥",
        abstract: "Ein kort kikk pÃ¥ kvifor nokre ting fungerer betre, med utgangspunkt i psykologi og vitenskap i Kanban.",
        speakerIds: [20],
        tags: [ "Smidig", "Kanban", "Psykologi", "Lyntale" ],
        starts: new Date(2012, 09, 29, 11, 45, 00),
        ends: new Date(2012, 09, 29, 12, 00, 00),
        track: 2
    },     
    {
        id: 21,
        title: "Ett team â€“ 13 kunder. Funkar, funkar inte.",
        abstract: "Ikke alle lever og jobber i en verden som bestÃ¥r langvarige, store prosjekter og dedikerte team. Vi deler erfaringer fra en hverdag fylt med en uforutsigbar blanding av forvaltning, nyutvikling og adhoc-oppgaver hvor vi likevel greier Ã¥ bevare team-fÃ¸lelse, samt gjÃ¸re kundene fornÃ¸yde.",
        speakerIds: [13, 14],
        tags: [ "Lyntale", "Team", "Smidig" ],
        starts: new Date(2012, 09, 29, 11, 30, 00),
        ends: new Date(2012, 09, 29, 11, 45, 00),
        track: 2
    },
    {
        id: 22,
        title: "Being an Anti-social Geek is harmful",
        abstract: "Developers are not known for their social skills. They're more characterized as geeks, centered around their coding and dealing with complex algorithms and problems to solve. This is not only depicted in Hollywood movies but also promoted within the community of developers itself, and those surrounding developers. Managers often say &quot;Oh he's a developers. Great at cranking out code, but you can't really talk to him&quot;.<br/> Although it seems harmless and fun at times to characterize developers in this way, it is actually a source of many problems when it comes to working on teams and dealing with customers. By somewhat justifying this kind of behavior, all we're doing is promoting it, saying &quot;it's OK&quot;.<br/> Yet my over 20 years experience in software development has shown me one thing if not anything else: lack of good communication can kill a team, can kill a product and can kill a company. Having dealt with hundreds of developers, managed many teams and started my own company, I have seen how team moral can be killed when communication is hindered. I have seen how products can fail when customers are ignored.<br/> Learning to communicate with team members, with customers, being in touch with those you are working with, with those you are working for is fundamental in being successful. Developers needs to learn how to be social. Because only then, can communication flow freely and properly.",
        speakerIds: [9],
        tags: [ "Team" ],
        starts: new Date(2012, 09, 29, 17, 00, 00),
        ends: new Date(2012, 09, 29, 17, 55, 00),
        track: 1
    },
    {
        id: 23,
        title: "Kontinuerlig testing: HÃ¸yhastighets-TDD med bedre kvalitet",
        abstract: "Testdrevet utvikling (TDD) har blitt en foretrukket arbeidsmetode, men utvikleres verktÃ¸ykasse for rask testdrevet utvikling med god kvalitet er ofte mangelfull. HÃ¥vard Stranden vil gi en generell introduksjon til kontinuerlig testing, gi en oversikt over verktÃ¸y, og vise eksempler i C#/.NET.",
        speakerIds: [23],
        tags: [ "Testing", "TDD", "Kodekvalitet", "VerktÃ¸y", "Lyntale" ],
        starts: new Date(2012, 09, 29, 14, 00, 00),
        ends: new Date(2012, 09, 29, 14, 15, 00),
        track: 2
    },
    {
        id: 24,
        title: "Fem Ã¥r med 'smidig' produktutvikling - hva har skjedd?",
        abstract: "Arnulf Krokeide, systemarkitekt og seniorutvikler hos Confirmit AS oppsummerer fem Ã¥rs erfaring med innfÃ¸ring av smidig utvikling i en produktbedrift. Hvilken effekt har smidige teknikker hatt i et firma med en stor kodebase?",
        speakerIds: [24],
        tags: [ "Smidig", "Organisasjon", "Teamledelse", "Lyntale" ],
        starts: new Date(2012, 09, 29, 14, 45, 00),
        ends: new Date(2012, 09, 29, 15, 00, 00),
        track: 2
    },
    {
        id: 25,
        title: "Sikkerhet i single page web applications",
        abstract: "Webapplikasjoner basert pÃ¥ moderne javascript-rammeverk som backbone, sammy, mustache o.l. har en ganske annerledes struktur enn tradisjonelle webapplikasjoner. Hva mÃ¥ vi gjÃ¸re for Ã¥ sikre disse?",
        speakerIds: [29],
        tags: [ "Sikkerhet", "JavaScript", "Klientside" ],
        starts: new Date(2012, 09, 29, 16, 15, 00),
        ends: new Date(2012, 09, 29, 16, 45, 00),
        track: 3
    },
    {
        id: 26,
        title: "Fra null til Ã©n million pÃ¥ under ett Ã¥r",
        abstract: "I september i Ã¥r passerte AtB Ã©n million solgte bussbilletter via mobil pÃ¥ bare 10 mÃ¥neder. Omtrent pÃ¥ samme tid ble fire parkeringer i minuttet betalt via mobil i Trondheim. <br/>Mobile nettjenester og Â«AppsÂ» er i vinden som aldri fÃ¸r og endelig kan man faktisk tjene penger pÃ¥ dem! Her vil se nÃ¦rmere pÃ¥ design og utvikling av AtB Mobillett og Trondheim Parkerings SmartPark og videre filosofere rundt hva som gjÃ¸r at folk velger Ã¥ bruke en App eller mobil nettjeneste.",
        speakerIds: [25],
        tags: [ "mobil", "motiverende", "utvikling", "interaksjon", "brukeropplevelse", "design" ],
        starts: new Date(2012, 09, 29, 15, 15, 00),
        ends: new Date(2012, 09, 29, 15, 45, 00),
        track: 4
    },
    {
        id: 26,
        title: "Kontroll pÃ¥ leveranser av komplekse lÃ¸sninger",
        abstract: "Med komplekse lÃ¸sninger kan leveranseprosessen ofte virke svÃ¦rt omfattende. Men hvor vanskelig er det egentlig? Per Harald presenterer hvordan Powel gjÃ¸r kompliserte produkter til enkle leveranser.",
        speakerIds: [26],
        tags: [ "team", "lyntal", "smidig" ],
        starts: new Date(2012, 09, 29, 14, 45, 00),
        ends: new Date(2012, 09, 29, 15, 00, 00),
        track: 2
    },        
    {
        id: 27,
        title: "Smarte byggeklosser for maskin-til-maskin applikasjoner og tingenes internett",
        abstract: "Verden rundt deg blir smartere. Antall maskiner rundt oss som snakker sammen og hjelper oss vil Ã¸ke dramatisk de neste Ã¥rene, takket vÃ¦re mindre og billigere maskinvare, bedre dekning via trÃ¥dlÃ¸se nettverk og modne standarder og protokoller. Men Ã¥ programmere slike applikasjoner innebÃ¦rer en del utfordringer. Applikasjoner mÃ¥ holde styr pÃ¥ mange kommunikasjonsforbindelser samtidig, reagere raskt, klare seg uten tilsyn, og ikke minst mÃ¥ de vÃ¦re sikre og robuste.<br/> La oss derfor prÃ¸ve noe nytt: Mens utviklingen skjer ved hjelp av objekt-orientert programmering i Java, supplerer vi koden med tett integrerte, grafiske flytdiagrammer som holder kontroll pÃ¥ nÃ¥r metoder bli brukt. Funksjonalitet blir samlet i byggeklosser, som kan testes og analyseres hver for seg. Og siden byggeklossene har et smart grensesnitt er det mulig Ã¥ analysere hvordan applikasjonen vil fungere. Dette gjÃ¸r utviklingen raskere, og ikke minst siden vi slipper Ã¥ skrive den delen av koden som er kjedelig og rutinepreget, blir det morsommere Ã¥ utvikle slike applikasjoner.",
        speakerIds: [28],
        tags: [ "" ],
        starts: new Date(2012, 09, 29, 15, 45, 00),
        ends: new Date(2012, 09, 29, 16, 15, 00),
        track: 2
    },
    {
        id: 28,
        title: "Modularisering av CSS",
        abstract: "Hvordan skriver man skalerbar og vedlikeholdbar CSS? FÃ¥ et innblikk i preprosessore som LESS og SASS, samt hvilke patterns og prinsipper som kan hjelpe deg pÃ¥ veien.",
        speakerIds: [30],
        tags: [ "klientside", "kodekvalitet" ],
        starts: new Date(2012, 09, 29, 15, 45, 00),
        ends: new Date(2012, 09, 29, 16, 15, 00),
        track: 3
    },
    {
        id: 29,
        title: "Metro/Windows 8 - n00b til l33t pÃ¥ en mÃ¥ned",
        abstract: "Kan man starte fra scratch og publisere en Metro app pÃ¥ Windows Store pÃ¥ en mÃ¥ned? Dette er sesjonen for deg som gÃ¥r med en killer app i magen men trenger en kickstart for Ã¥ komme i gang. Lanseringsvinduet for Windows 8 er *nÃ¥*, og slike sjanser er sjeldne. MÃ¸t opp og hÃ¸r om erfaringer, teknologivalg, oppturer og nedturer, tips og tricks.",
        speakerIds: [31],
        tags: [ "verktÃ¸y", "programmeringssprÃ¥k", "mobil" ],
        starts: new Date(2012, 09, 29, 14, 30, 00),
        ends: new Date(2012, 09, 29, 15, 00, 00),
        track: 4
    },
    {
        id: 30,
        title: "Self-observing systems: closing the software control loop",
        abstract: "Skal snakke om programvaresystemer som er i stand til Ã¥ observere hendelser og tilstander fra Â«innsidenÂ», ogsÃ¥ kalt  selv-observerende systemer.",
        speakerIds: [32],
        tags: [ "Arkitektur" ],
        starts: new Date(2012, 09, 29, 12, 00, 00),
        ends: new Date(2012, 09, 29, 12, 30, 00),
        track: 1
    },
    {
        id: 31,
        title: "Why are Scandinavians such good developers?",
        abstract: "Saying this might be a bit of a tease, but I do believe there is some truth to it. Scandinavians have a great reputation in developer communities. How come? Is it â€œjustâ€ because of Scandinavian Design or is there more to it? <br/> In this presentation I will discuss some key factors I think makes a difference in becoming a great developer in general and provide examples that show that Scandinavians have something in the water which provide a very good starting point in becoming great.",
        speakerIds: [7],
        tags: [ "Motiverende"],
        starts: new Date(2012, 09, 29, 10, 05, 00),
        ends: new Date(2012, 09, 29, 11, 00, 00),
        track: 1
    },
    {
        id: 32,
        title: "Ablemagic et historieselskap",
        abstract: "Vi liker Ã¥ fortelle historier, vi liker Ã¥ skape opplevelser, vi liker Ã¥ lage spill. Hva er vÃ¥r historie og hva legger vi vekt pÃ¥ nÃ¥r vi skaper et produkt. Hvorfor er historiefortelling sÃ¥ viktig, og hva er nÃ¸kkel elementer i en god historie.",
        speakerIds: [33],
        tags: [ "Motiverende", "Interaksjon" ],
        starts: new Date(2012, 09, 29, 12, 00, 00),
        ends: new Date(2012, 09, 29, 12, 30, 00),
        track: 4
    }, 
    {
        id: 33,
        title: "TBA",
        abstract: "",
        speakerIds: [],
        tags: [ "" ],
        starts: new Date(2012, 09, 29, 11, 30, 00),
        ends: new Date(2012, 09, 29, 12, 00, 00),
        track: 3
    },
    {
        id: 34,
        title: "TBA",
        abstract: "",
        speakerIds: [],
        tags: [ "" ],
        starts: new Date(2012, 09, 29, 12, 30, 00),
        ends: new Date(2012, 09, 29, 13, 00, 00),
        track: 4
    },
    {
        id: 35,
        title: "SÃ¸k med ElasticSearch",
        abstract: "SÃ¸kemotorer kan lÃ¸se fler utfordringer enn en sÃ¸keboks gir. Du har kanskje et sÃ¸keproblem uten Ã¥ vÃ¦re klar over det? Foredraget gir en oversikt over hva sÃ¸kemotorer er gode pÃ¥, problemer du kan komme over og introduserer ElasticSearch â€“ en open source sÃ¸kemotor.",
        speakerIds: [34],
        tags: [ "utvikling", "integrasjon" ],
        starts: new Date(2012, 09, 29, 15, 45, 00),
        ends: new Date(2012, 09, 29, 16, 15, 00),
        track: 4
    },
    {
        id: 36,
        title: "Fra grÃ¼nderliv til internasjonal suksess",
        abstract: "Viking Venture og partner Jostein Vik har vÃ¦rt med Ã¥ utvikle selskaper  fra grÃ¼ndervirksomheter til internasjonale suksesser innen bÃ¥de hardware og software. ",
        speakerIds: [35],
        tags: [ "motivasjon", "utvikling" ],
        starts: new Date(2012, 09, 29, 16, 15, 00),
        ends: new Date(2012, 09, 29, 16, 45, 00),
        track: 4
    },
    {
        id: 37,
        title: "TBA",
        abstract: "",
        speakerIds: [],
        tags: [ "" ],
        starts: new Date(2012, 09, 29, 16, 15, 00),
        ends: new Date(2012, 09, 29, 16, 45, 00),
        track: 1
    },
    {
        id: 38,
        title: "Krav, kodekvalitet og arkitektur",
        abstract: "I denne sesjonen skal vi se pÃ¥ tre ting som er essensielt for et godt sluttresultat i et prosjekt; krav, kode og arkitektur. Alle tema er sett fra en utviklers Ã¸yne og basert pÃ¥ egene erfaringer.<br/> Vi glemmer ofte at vi mÃ¥ forstÃ¥ hva vi skal lage FÃ˜R vi begynner Ã¥ kode. Det er lett Ã¥ gjemme seg bak at vi jobber smidig og at vi kan korrigere retningen gjennom prosjektet. Dette er kostbart og veldig demotiverende for utvikleren. NÃ¥r man har kravene pÃ¥ plass er man klar for Ã¥ tenke pÃ¥ arkitekturen. Hvordan kan man bygge en arkitektur som fremmer gode praksiser og er klar for vekst dersom man har behov for det? Noen stikkord for dette er kÃ¸-systemer, enkle kommandoer og oppgavebaserte brukergrensesnitt.",
        speakerIds: [27],
        tags: [ "kodekvalitet", "arkitektur", "team" ],
        starts: new Date(2012, 09, 29, 14, 00, 00),
        ends: new Date(2012, 09, 29, 14, 30, 00),
        track: 3
    },
];

TrondheimDC.Data.speakers = [
    {
        image: "images/speakers/kevlinhenney.jpg",        
        id: "1",
        name: "Kevlin Henney",
        twitter: "kevlinhenney",
        about: 'Kevlin er en selvstendig konsulent og trainer i England. Hans interesser innen utvikling er "patterns, programming, practice and process". Han har skrevet for flere magasiner og websider, inkludert Better Software, The Register, Application Development Advisor, Java Report, og The C/C++ Users Journal. Kevlin er ogsÃ¥ en av forfatterne bak "A Pattern Language for Distributed Computing" og "On Patterns and Pattern Language", og to volum i "The Pattern-Oriented Software Architecture"-serien. Han er ogsÃ¥ redaktÃ¸r for <a href="http://shop.oreilly.com/product/9780596809492.do">97 Things Every Programmer Should Know</a>.'
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
        about: "Trygve Lie er webutvikler hos A-Pressen Digitale Medier med en sterk lidenskap for Ã¥pen webteknologi. Han har utviklet weblÃ¸sninger basert pÃ¥ HTML, CSS og JavaScript siden midten av 90-tallet og har holdt pÃ¥ med mobil webutvikling siden den fÃ¸rste mobile nettleseren som kom med Nokia 7110 rundt tusenÃ¥rsskifte.",
        twitter: "trygve_lie"
    }, {
        image: 'images/speakers/wolframkriesing.jpg',
        id: "4",
        name: "Wolfram Kriesing",
        about: "Allerede i 1999 da Netscape 4 og IE4 var de to regjerende nettleserene, hadde Wolfram sitt fÃ¸rste JavaScript oppdrag. Det gikk likevel ikke opp for han fÃ¸r i ettertid hvor kult dette sprÃ¥ket var. I 2008 var han med Ã¥ stiftet en av de fÃ¸rste rene JavaScript selskapene; uxebu. NÃ¥ som alle mobiltelefoner har god JavaScript-stÃ¸tte, har uxebu fokus pÃ¥ HTML5 applikasjoner, samtidig som de prÃ¸ver Ã¥ tÃ¸ye grensene for hva som er mulig med JavaScript. Wolfram har vÃ¦rt bidragsyter til Dojo, og har senere startet embedJS, et JavaScript bibliotek med fokus pÃ¥ mobil fÃ¸rst metodikken.",
        twitter: 'wolframkriesing'
    }, {
        image: "images/speakers/kristianbendiksen.jpg",
        id: "5",
        name: "Kristian Bendiksen",
        about: "Kristian er systemutvikler, og glad i programmere. Han liker enkle it-systemer og god kode, men har lÃ¦rt seg Ã¥ se sjarmen i den virkelige verdens kompleksitet. Kristian er it-konsulent hos Bouvet ASA i Trondheim, og fÃ¸r det skrev han fysikksimuleringssoftware og studerte kunstig intelligens ved NTNU.",
        twitter: "kriben"
    }, {
        image: "images/speakers/elitoftoyandersen.jpg",
        id: "6",
        name: "Eli ToftÃ¸y-Andersen",
        about: "Eli ToftÃ¸y-Andersen er senior rÃ¥dgiver innen brukervennlighet og design i konsulentselskapet Steria. Hun har blant annet jobbet som interaksjonsdesigner i Telenor Mobil og i prosjekter for Helse SÃ¸r-Ã˜st, Statens Pensjonskasse og Forsvaret. Hun er vant til Ã¥ tale brukernes sak under utvikling og innfÃ¸ring av it-systemer. <br/>Eli kjÃ¸rte sin fÃ¸rste brukertest i Ã¥r 2000 og har siden den gang vÃ¦rt en pÃ¥driver for Ã¥ fÃ¥ gjennomfÃ¸rt brukertesting i prosjektene hun har vÃ¦rt med i. Hun blogger om pÃ¥ <a href='http://www.brukskvalitet.no'>www.brukskvalitet.no</a>. Eli ToftÃ¸y-Andersen er medforfatter av boken Praktisk brukertesting.",
        twitter: "elitatt"
    }, {
        id: "7",
        image: "images/speakers/jimmynilsson.jpg",
        name: "Jimmy Nilsson",
        twitter: "jimmynilsson",
        about: "En av grÃ¼nderne og daglig leder for <a href='http://factor10.com/'>factor10</a>. Forfattar av Applying Domain-Driven Design and Patterns og .NET Enterprise Design. Developer, samt arkitekt/utvikler i 20+ Ã¥r."
    },
    {
        id: "8",
        image: "images/speakers/tomasjansson.jpg",        
        name: "Tomas Jansson",
        twitter: "TomasJansson",
        about: "Tomas Jansson jobber som manager i BEKK i Oslo og har mer enn seks Ã¥rs erfarenhet fra konsulentverden i bÃ¥de Norge og Sverige med alt fra SAP-utvikling og perl til java og .NET. Fra .NET-stacken har Tomas erfarenhet med hele spektrumet fra databas til webb og caching med AppFabric."
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
        name: "Joar Ã˜yen",
        twitter: "joaroyen",
        about: "Joar Ã˜yen har bidratt mye i utviklingsmiljÃ¸et i Trondheim siden NNUG Trondheim startet opp i 2004, og har de siste tre Ã¥r fÃ¥tt tildelt tittelen Most Valuable Professional av Microsoft. Utover sitt arbeid i NNUG jobber han til daglig som konsulent i Acando og hjelper kunder med utfordringer innen arkitektur og integrasjon."
    },
    {
        id: "11",
        image: "images/speakers/daryllpowell.jpg",        
        name: "Daryl Powell",
        twitter: "",
        about: "Daryl Powell works for the Department of Production and Quality Engineering at the Norwegian University of Science and Technology NTNU and also for SINTEF Operations Management. He has experience from the eight-year research program â€œSFI Normanâ€ which aims to develop new and multi-disciplinary research on next-generation manufacturing, and create theories, methods, models and management tools that enable Norwegian manufacturers to thrive in the global market. Daryl has an MSc in Lean Production from the University of Wales in Swansea, UK; and defends his PhD thesis entitled â€œInvestigating ERP support for Lean Productionâ€ in September 2012. In his thesis he identifies and examines a range of support functionality offered by contemporary ERP systems in the deployment of Lean Production principles. He has published a number of articles on the subject in reputable international journals."
    },
    {
        id: "12",
        image: "images/speakers/klausstafto.jpg",        
        name: "Klaus Stafto",
        twitter: "",
        about: "Klaus Stafto er seniorkonsulent i Acando i Trondheim. Han har 13 Ã¥rs erfaring i bransjen fra roller som utvikler, ScrumMaster, arkitekt, endringsansvarlig, prosjektleder og gruppeleder. Han har jobbet 11 Ã¥r i Oslo for oppdragsgivere som blant annet Telenor, Statsbygg, Norges ForskningsrÃ¥d, Apokjeden (Apotek 1) og Statens vegvesen."
    },
    {
        id: "13",
        image: "images/speakers/jorunbremseth.jpg",        
        name: "Jorun Kristin Bremseth",
        twitter: "",
        about: "Har jobbet i Kantega siden 2000 - stort sett med nettopp denne typen hverdag. Allsidig person, allsidig bakgrunn og allsidige oppgaver. Prosjektledelse, kundeoppfÃ¸lging, kurs/opplÃ¦ring, funksjonell rÃ¥dgivning, kravhÃ¥ndterer/stiller, tester, salg, markedsretta arbeid."
    },
    {
        id: "14",
        image: "images/speakers/sjurkvammen.jpg",        
        name: "Sjur Kvammen",
        twitter: "sjurkvammen",
        about: "Har viklet ut systemer siden 2006, og er kanskje sÃ¦rlig interessert i den menneskelige faktor."
    },
    {
        id: "15",
        image: "images/speakers/larsmariusgarshol.jpg",        
        name: "Lars Marius Garshol",
        twitter: "larsga",
        about: "Lars Marius har jobbet med semantisk teknologi siden 1999. Han var med pÃ¥ Ã¥ starte produktfirmaet Ontopia i 2000, og har vÃ¦rt redaktÃ¸r for flere av ISO-standardene for emnekart. I dag er han konsulent pÃ¥ semantisk web i Bouvet"
    },
    {
        id: "16",
        image: "images/speakers/runegrimstad.jpg",        
        name: "Rune Grimstad",
        twitter: "runegri",
        about: "Rune er spesialist pÃ¥ .NET og har jobbet med platformen siden den ble lansert for 10 Ã¥r siden. Til daglig jobber han som konsulent i Capgemini og fokuserer der pÃ¥ systemutvikling og systemarkitektur. PÃ¥ fritida bruker Rune mye tid pÃ¥ mobilutvikling og er spesielt interessert i kryss-platform mobile applikasjoner."
    },
    {
        id: "17",
        image: "images/speakers/torkildulvoyresheim.jpg",        
        name: "Torkild UlvÃ¸y Resheim",
        twitter: "torkildr",
        about: "Torkild U. Resheim har jobbet som systemutvikler siden 1997 og er konsulent hos Itema AS. De siste syv Ã¥rene har han hovedsaklig laget verktÃ¸y basert pÃ¥ Eclipse-plattformen; blant annet for Mertech og Atmel. Han lager nÃ¥ simuleringsverktÃ¸y for marine operasjoner pÃ¥ oppdrag fra MARINTEK. Torkild er engasjert i Ã¥pne lÃ¸sninger og er Â«committerÂ» pÃ¥ flere Eclipse-prosjekter."
    },
    {
        id: "18",
        image: "images/speakers/torevestues.jpg",        
        name: "Tore Vestues",
        twitter: "ToreVestues",
        about: "Tore er en entusiastisk utvikler med et smidig forhold til livet, prosess og kode. Han tror at problemer lÃ¸ses best med tillit, ydmykhet og pragmatiske lÃ¸sninger. Tore jobber som Manager i BEKK consulting."
    },
    {
        id: "19",
        image: "images/speakers/stigbakken.jpg",        
        name: "Stig Bakken",
        twitter: "stigsb",
        about: "Stig Bakken har nÃ¦rmere 20 Ã¥rs fartstid med Unix, Internet- og web-basert software. Han har vÃ¦rt en av kjerneutviklerene bak (eventuelt medskyldig i) PHP, men har hovedtyngden av sin erfaring fra sÃ¸kebransjen, i bedrifter som FAST, Yahoo!, Google og Zedge."
    },
    {
        id: "20",
        image: "images/speakers/ingvaldskaug.jpg",        
        name: "Ingvald Skaug",
        twitter: "ingvald",
        about: "Ingvald er ein erfaren systemutviklar og fasilitator i Bouvet. Han har erfaring frÃ¥ smÃ¥ og store selskap, og bÃ¥de meir og mindre smidige mÃ¥tar Ã¥ jobba pÃ¥."
    },
    {
        id: "21",
        image: "images/speakers/anderslassen.jpg",        
        name: "Anders Lassen",
        twitter: "",
        about: "Anders Lassen (26) er grÃ¼nder og daglig leder i Outracks Technologies. Han har hatt en lidenskap for sanntidsgrafikk siden svÃ¦rt ung alder, og har over de siste 10 Ã¥rene vÃ¦rt involvert i en lang rekke spill- og grafikkdemo-produksjoner. Etter 6 Ã¥r som student ved NTNU og grafikkspesialist i ARM Norway startet han Outracks Technologies AS i 2011. Anders og Outracks satser nÃ¥ tungt pÃ¥ Ã¥ utvikle verktÃ¸y som gjÃ¸r det enorme potensialet i moderne GPU'er enklere tilgjengelig for utviklere og artister."
    },
    {
        id: "22",
        image: "images/speakers/ninavolstad.jpg",        
        name: "Nina Volstad",
        twitter: "ninavolstad",
        about: "SivilingeniÃ¸r i Industriell Design fra NTNU, med 4 Ã¥rs fartstid i Bekk som interaksjonsdesigner. Elsker nÃ¥r ting bare funker uten hassle, og mine henvendelser til bÃ¥de det offentlige og private firmaer inkluderer som regel en vennlig, men bestemt gratis-ekspertevaluering-av-lÃ¸sningen-din-liste! Jobber pÃ¥ alt fra selvbetjeningsystemer pÃ¥ web og desktop applikasjoner, til mobile ting og prototyper for fremtidsvisjoner. Har det siste Ã¥ret vÃ¦rt leder for Fagruppen for Interaksjon i Bekk, og er spesielt interessert i det psykologiske aspektet ved design."
    },
    {
        id: "23",
        image: "images/speakers/havardstranden.jpg",        
        name: "HÃ¥vard Stranden",
        twitter: "havardstranden",
        about: "HÃ¥vard Stranden jobber som seniorpartner i Conceptos Consulting. Han har bred erfaring fra blant annet store tjenesteorienterte arkitekturer, forretningsapplikasjoner, spesialiserte kommunikasjonslÃ¸sninger og Ã¥pen kildekode-prosjekter. HÃ¥vard er SivilingeniÃ¸r og Master of Technology fra NTNU, og bruker sin erfaring som rÃ¥dgiver, teknisk prosjektleder og systemutvikler for Conceptos Consulting sine kunder. Han er dessuten en aktiv bidragsyter og deltager i faglige fora i TrondheimsomrÃ¥det gjennom blant annet verv som styremedlem i NNUG og medarrangÃ¸r for XP Meetup."
    },  
    {
        id: "24",
        image: "images/speakers/arnulfkrokeide.jpg",        
        name: "Arnulf Krokeide",
        twitter: "arnulfk",
        about: "Startet han som naiv entusiastisk evangelist for smidig utvikling i et firma med 100 ansatte. Fem Ã¥r senere har Confirmit 350 ansatte, er litt smidigere, mange erfaringer rikere og med et mer pragmatisk syn pÃ¥ smidig."
    },
    {
        id: "25",
        image: "images/speakers/rolfandersstorset.jpg",        
        name: "Rolf Anders Storset",
        twitter: "rolfanders",
        about: "Rolf Anders er designer hos WTW Software i Trondheim og lidenskapelig opptatt av god design og brukervennlighet. I sitt daglige virke jobber han for det meste med mobile nettjenester og Â«appsÂ». Rolf Anders stÃ¥r bak designet av Gulltaggen-vinneren AtB Mobillett og SmartPark for Trondheim Parkering."
    },
    {
        id: "26",
        image: "images/speakers/perharaldkristensen.jpg",        
        name: "Per Harald Kristensen",
        twitter: "",
        about: "Per Harald har jobbet med systemlÃ¸sninger for energibransjen siden 1992 og er systemutvikler/testkonsulent hos Powel AS. Han har de siste Ã¥rene engasjert seg i automatisert testing og forbedring av utrullingsprosesser. Per Harald liker utfordringer og mener at alt lar seg lÃ¸se."
    },
    {
        id: "27",
        image: "images/speakers/palfossmo.jpg",        
        name: "PÃ¥l Fossmo",
        twitter: "",
        about: "PÃ¥l Fossmo bruker til daglig sin 12 Ã¥rs lange erfaring til Ã¥ hjelpe kunder med systemarkitektur, systemutvikling og teknisk prosjektledelse. <br/>I 2012 bestemte han seg for Ã¥ fÃ¸lge sin drÃ¸m om Ã¥ starte eget foretak, og driver i dag som selvstendig konsulent.<br /> De fire siste Ã¥rene har han fÃ¥tt utmerkelsen Microsoft Most Valuable Professional i programmeringssprÃ¥ket C#.<br /> PÃ¥l elsker Ã¥ jobbe med arkitektur, ny teknologi og mennesker. Han har et pragmatisk syn pÃ¥ teknologi og prosjektgjennomfÃ¸ring. Det siste Ã¥ret har han fokusert mye pÃ¥ Javascript, HTML5, MonoTouch, Objective C/C og Ruby. <br/> I tillegg til det tekniske aspektet i et prosjekt, er han opptatt av de smÃ¥ tingen som fÃ¥r et prosjektteam til Ã¥ fungere godt sammen.<br/> Han er et aktivt medlem av, og bidragsyter til, det norske utviklermiljÃ¸et og liker Ã¥ dele sine erfaringer bÃ¥de i lokale brukergrupper og pÃ¥ stÃ¸rre konferanser som MSDN Live, XP2010, Norwegian Developer Conference og MVP Live 2012. Han har fÃ¥tt gode tilbakemeldinger pÃ¥ alle foredrag han har holdt. PÃ¥l er styremedlem i Norwegian .NET User Group, Trondheim"
    },
    {
        id: "28",
        image: "images/speakers/frankalexanderkraemer.jpg",        
        name: "Frank Alexander Kraemer",
        twitter: "fralkr",
        about: "Frank er medgrÃ¼nder og teknologisjef i Bitreactive AS. Bedriften er en startup fra NTNU og spesialist i rask utvikling av M2M applikasjoner. Frank har sin bakgrunn i systemutvikling gjennom en doktorgrad i telematikk, og erfaring med verktÃ¸yutvikling i Eclipse, startet hos IBM."
    },
    {
        id: "29",
        image: "images/speakers/erlendoftedal.jpg",        
        name: "Erlend Oftedal",
        twitter: "webtonull",
        about: "Erlend Oftedal har jobbet i BEKK siden 2004, og har vÃ¦rt faggruppeleder for sikkerhetsgruppa i flere Ã¥r. Er i tillegg leder av OWASP Norway og har holdt foredrag pÃ¥ norske og utenlandske konferanser. Jobber til daglig som utvikler, men med sikkerhetshatten pÃ¥. GjÃ¸r i tillegg til utvikling, kodegjennomgang og sikkerhetstesting for andre prosjekter i BEKK."
    },     
    {
        id: "30",
        image: "images/speakers/madsmobaek.jpg",        
        name: "Mads MobÃ¦k",
        twitter: "madsmobaek",
        about: "Mads er en allsidig front-end utvikler hos BEKK Consulting og jobber til daglig med mobilutvikling. Han har jobbet med web de siste 10 Ã¥rene og har i tillegg god kjennskap til iOS og backendutvikling med Java og Ruby, samt automatisering og testing."
    },
    {
        id: "31",
        image: "images/speakers/mortenmoen.jpg",        
        name: "Morten Moen",
        twitter: "LocoMortis",
        about: "Morten har jobbet som arkitekt/utvikler/scrum master i Itema i to Ã¥r. Har drÃ¸yt 15 Ã¥rs fartstid som utvikler, hovedsakelig pÃ¥ Microsoft plattform. Har vÃ¦rt borti det meste siden VB 4.0 men trives best med C# i kombinasjon med WPF/MVVM eller ASP.NET MVC."
    }, 
    {
        id: "32",
        image: "images/speakers/kennethguldbrandsoy.jpg",        
        name: "Kenneth GulbrandsÃ¸y",
        twitter: "",
        about: "Kenneth GulbrandsÃ¸y er utdannet M.Sc. i teknisk kybernetikk og har jobbet med instrumenterings- og kontrollsystemer pÃ¥ produksjons- og organisasjonsnivÃ¥. Hans nÃ¥vÃ¦rende stilling er forskingsleder i One Voice AS der han forsker pÃ¥ intelligente kontrollsystem for krise og beredskap. Ved siden av sin daglige jobb holder han pÃ¥ med en doktorgrad innen modelldrevet beslutningstÃ¸tte for sÃ¸k og redning, samt er faglig leder i ressursgruppe ettersÃ¸kning i Norges RÃ¸de Kors Hjelpekorps."
    },
    {
        id: "33",
        image: "images/speakers/janerikwold.jpg",        
        name: "Jan Erik Wold",
        twitter: "",
        about: "Jobbet med C, C++ og java utvikling som konsulent og utvikler siden 1998.  De siste Ã¥rene mest som teknisk prosjektleder for Telenor sine mobile applikasjoner.<br/> 2 Ã¥r som partner og konsulent i ConsultIT 12 Ã¥r i Telenor som: produktuviklter, innovasjon, teknsik prosjektleder, innovasjon og investering strategi. Fokus pÃ¥ applikasjoner og tjenester mot sluttbruker. <br/> Schizofren teknolog med en dragning mot det kreative. <br/> Lidenskapelig opphengt i teknologi, med en kanskje alt for sterkt Ã¸nske om Ã¥ skape lÃ¸sninger som berÃ¸rer og vil oppleves. Men det er greit om det ogsÃ¥ bare forenkler hverdagen. Ã˜nsker at ting skal virke, og at teknologien skal vÃ¦re et virkemiddel som brukeren aldri skal ha noe forhold til. Det er opplevelse som selger, ikke teknologien. Produkter kan skape fÃ¸lelser og et Ã¸nske om mere."
    },
    {
        id: "34",
        image: "images/speakers/alexbratsetvik.jpg",        
        name: "Alex Brasetvik",
        twitter: "alexbrasetvik",
        about: "Med fordypning i sÃ¸kemotorer pÃ¥ NTNU og en business angel som har tillatt mye eksperimentering, sÃ¥ har Alex og Found IT prÃ¸vd ut mye sÃ¸kerelatert teknologi. NÃ¥ fokuserer de pÃ¥ en ElasticSearch-tjeneste, bygd pÃ¥ Amazon sin plattform."
    },
    {
        id: "35",
        image: "images/speakers/josteinvik.jpg",        
        name: "Jostein Vik",
        twitter: "josteinvik",
        about: "Jostein Vik har utviklet teknologibedrifter til kommersielle suksesser. Jostein har utviklet og solgt selskaper til Samsung, Bacouz Dalloz (Honeywell), Hexagon,  Defa med mer."
    },
];