// All content of the site and of the CV one-pager lives here.
// Every text that differs per language is written as L("English", "Deutsch", "Italiano").
// After changing this file, run build-cv.ps1 to regenerate the three CV PDFs in cv/.

const L = (en, de, it) => ({ en, de, it });

window.SITE = {
  name: "Daniel Plaikner",
  role: L("Data Scientist · Konverto LAB", "Data Scientist · Konverto LAB", "Data Scientist · Konverto LAB"),
  location: L("Brixen, South Tyrol, Italy", "Brixen, Südtirol, Italien", "Bressanone, Alto Adige, Italia"),
  site: "daniel-plaikner.github.io",

  // Leave a value empty ("") to hide it on both the page and the CV.
  links: {
    github: "https://github.com/Daniel-Plaikner",
    linkedin: "",
    email: "",
    phone: "",
  },

  about: [
    L(
      "I'm a data scientist in the Konverto LAB department at KONVERTO in Bolzano, South Tyrol. Since 2021 I have been building data and AI solutions on Azure and Databricks: data pipelines with Apache Spark, machine learning models and LLM-based agents that support everyday business decisions.",
      "Ich bin Data Scientist in der Abteilung Konverto LAB bei KONVERTO in Bozen, Südtirol. Seit 2021 entwickle ich Daten- und KI-Lösungen auf Azure und Databricks: Datenpipelines mit Apache Spark, Machine-Learning-Modelle und LLM-basierte Agenten, die alltägliche Geschäftsentscheidungen unterstützen.",
      "Sono data scientist nel reparto Konverto LAB di KONVERTO a Bolzano, in Alto Adige. Dal 2021 sviluppo soluzioni di dati e intelligenza artificiale su Azure e Databricks: pipeline di dati con Apache Spark, modelli di machine learning e agenti basati su LLM a supporto delle decisioni aziendali di ogni giorno."
    ),
    L(
      "I hold a Master's degree in Computational Data Science and a Bachelor's in Computer Science and Engineering, both from the Free University of Bozen-Bolzano. In my Master's thesis I extended the virtual knowledge graph system Ontop so that it answers continuous queries over real-time data streams.",
      "Ich habe einen Master in Computational Data Science und einen Bachelor in Informatik (Computer Science and Engineering), beide von der Freien Universität Bozen. In meiner Masterarbeit habe ich das Virtual-Knowledge-Graph-System Ontop so erweitert, dass es kontinuierliche Abfragen über Echtzeit-Datenströme beantwortet.",
      "Ho conseguito la laurea magistrale in Computational Data Science e la laurea triennale in Informatica (Computer Science and Engineering), entrambe alla Libera Università di Bolzano. Nella tesi magistrale ho esteso il sistema di virtual knowledge graph Ontop per rispondere a interrogazioni continue su flussi di dati in tempo reale."
    ),
    L(
      "I like to explore new things and tinker with them. At home that means a smart home on Home Assistant with many self-written automations; besides that, multiplayer games and fantasy novels. I speak German natively, fluent English and good Italian.",
      "Ich probiere gern Neues aus und tüftle daran. Zu Hause heißt das: ein Smart Home mit Home Assistant und vielen selbst geschriebenen Automatisierungen, daneben Multiplayer-Spiele und Fantasy-Romane. Deutsch ist meine Muttersprache, dazu spreche ich fließend Englisch und gut Italienisch.",
      "Mi piace esplorare cose nuove e metterci le mani. A casa significa una smart home con Home Assistant e molte automazioni scritte da me; poi videogiochi multiplayer e romanzi fantasy. Sono di madrelingua tedesca, parlo inglese fluente e un buon italiano."
    ),
  ],

  // Short version of "about" for the CV.
  profile: L(
    "Data scientist with a Master's in Computational Data Science and five years of experience building data and AI solutions on Azure and Databricks: Spark data pipelines, machine learning models and LLM-based agents, from prototype to monitored service.",
    "Data Scientist mit Master in Computational Data Science und fünf Jahren Erfahrung in der Entwicklung von Daten- und KI-Lösungen auf Azure und Databricks: Spark-Datenpipelines, Machine-Learning-Modelle und LLM-basierte Agenten, vom Prototyp bis zum überwachten Dienst.",
    "Data scientist con laurea magistrale in Computational Data Science e cinque anni di esperienza nello sviluppo di soluzioni di dati e IA su Azure e Databricks: pipeline di dati con Spark, modelli di machine learning e agenti basati su LLM, dal prototipo al servizio monitorato."
  ),

  experience: [
    {
      title: L("Data Scientist", "Data Scientist", "Data Scientist"),
      org: "KONVERTO · Konverto LAB",
      place: L("Bolzano", "Bozen", "Bolzano"),
      when: L("Oct 2021 – present", "Okt. 2021 – heute", "ott 2021 – oggi"),
      text: L(
        "Data science, machine learning and AI projects for business customers. I build data pipelines and models on Azure and Databricks with Python and Apache Spark, and LLM-based agents that support operational decisions, from the first prototype to the deployed and monitored service.",
        "Data-Science-, Machine-Learning- und KI-Projekte für Unternehmenskunden. Ich entwickle Datenpipelines und Modelle auf Azure und Databricks mit Python und Apache Spark sowie LLM-basierte Agenten, die operative Entscheidungen unterstützen, vom ersten Prototyp bis zum ausgerollten und überwachten Dienst.",
        "Progetti di data science, machine learning e IA per clienti aziendali. Sviluppo pipeline di dati e modelli su Azure e Databricks con Python e Apache Spark, e agenti basati su LLM a supporto delle decisioni operative, dal primo prototipo al servizio in produzione e monitorato."
      ),
      tags: ["Python", "PySpark", "Databricks", "Azure", "SQL", "MLflow", "LLM agents"],
    },
    {
      title: L("Software Developer", "Softwareentwickler", "Sviluppatore software"),
      org: "Durst Group AG",
      place: L("Brixen", "Brixen", "Bressanone"),
      when: L("Summers 2018 & 2019", "Sommer 2018 & 2019", "Estati 2018 e 2019"),
      text: L(
        "Maintained legacy code and developed and implemented software extensions.",
        "Wartung von Bestandscode sowie Entwicklung und Umsetzung von Software-Erweiterungen.",
        "Manutenzione di codice legacy, sviluppo e implementazione di estensioni software."
      ),
    },
    {
      title: L("Internship, IT Department", "Praktikum, IT-Abteilung", "Tirocinio, reparto IT"),
      org: L("Bezirksgemeinschaft Eisacktal (district community)", "Bezirksgemeinschaft Eisacktal", "Comunità comprensoriale Valle Isarco"),
      place: L("Brixen", "Brixen", "Bressanone"),
      when: L("Jul – Sep 2017", "Juli – Sept. 2017", "lug – set 2017"),
    },
    {
      title: L("Internship, Motorization Department", "Praktikum, Abteilung Motorisierung", "Tirocinio, reparto motorizzazione"),
      org: L("Bolzano Professional Fire Brigade", "Berufsfeuerwehr Bozen", "Corpo permanente dei vigili del fuoco di Bolzano"),
      place: L("Bolzano", "Bozen", "Bolzano"),
      when: L("Jul – Sep 2015", "Juli – Sept. 2015", "lug – set 2015"),
    },
    {
      title: L("Internship week, Software Development", "Praktikumswoche, Softwareentwicklung", "Settimana di tirocinio, sviluppo software"),
      org: "DEMACLENKO",
      place: L("Selva Val Gardena", "Wolkenstein", "Selva di Val Gardena"),
      when: L("Sep 2014", "Sept. 2014", "set 2014"),
    },
  ],

  education: [
    {
      title: L("M.Sc. Computational Data Science · Data Management", "M.Sc. Computational Data Science · Data Management", "Laurea magistrale in Computational Data Science · Data Management"),
      org: L("Free University of Bozen-Bolzano", "Freie Universität Bozen", "Libera Università di Bolzano"),
      grade: "105/110",
      when: "2019 – 2021",
      thesis: "Virtual Knowledge Graphs over Real-Time Stream Processing Systems – A Preliminary Study",
      text: L(
        "Built Ontop-Stream, a prototype that extends the Ontop virtual knowledge graph system to streaming data: it rewrites RSP-QL queries into continuous queries evaluated by Apache Spark Structured Streaming, and works with Apache Flink and Kafka.",
        "Entwicklung von Ontop-Stream, einem Prototyp, der das Virtual-Knowledge-Graph-System Ontop auf Datenströme erweitert: RSP-QL-Abfragen werden in kontinuierliche Abfragen umgeschrieben, die Apache Spark Structured Streaming auswertet; unterstützt auch Apache Flink und Kafka.",
        "Sviluppo di Ontop-Stream, un prototipo che estende il sistema di virtual knowledge graph Ontop ai dati in streaming: riscrive le query RSP-QL in query continue valutate da Apache Spark Structured Streaming e funziona con Apache Flink e Kafka."
      ),
    },
    {
      title: L("B.Sc. Computer Science and Engineering", "B.Sc. Informatik (Computer Science and Engineering)", "Laurea triennale in Informatica (Computer Science and Engineering)"),
      org: L("Free University of Bozen-Bolzano", "Freie Universität Bozen", "Libera Università di Bolzano"),
      when: "2015 – 2019",
      thesis: "A Web Infrastructure for Evaluating Recommendation Algorithms",
      text: L(
        "Web application for evaluating recommendation algorithms (most-popular baseline, matrix factorisation, item-based nearest neighbour) on more than 15,000 movies and 550,000 ratings, tested with 20 users.",
        "Webanwendung zur Bewertung von Empfehlungsalgorithmen (Most-Popular-Baseline, Matrixfaktorisierung, Item-basierter Nearest Neighbour) mit über 15.000 Filmen und 550.000 Bewertungen, getestet mit 20 Nutzern.",
        "Applicazione web per valutare algoritmi di raccomandazione (baseline most-popular, fattorizzazione di matrici, nearest neighbour item-based) su oltre 15.000 film e 550.000 valutazioni, testata con 20 utenti."
      ),
    },
    {
      title: L("Technical high school diploma, Computer Science", "Matura, Fachrichtung Informatik", "Diploma di maturità tecnica, indirizzo informatica"),
      org: L("Technologische Fachoberschule „J. Ph. Fallmerayer“, Brixen", "Technologische Fachoberschule „J. Ph. Fallmerayer“, Brixen", "Istituto tecnologico „J. Ph. Fallmerayer“, Bressanone"),
      when: "2010 – 2015",
    },
  ],

  skills: [
    {
      group: L("Data & AI", "Daten & KI", "Dati e IA"),
      items: ["Python", "PySpark", "SQL", "Machine Learning", "LLM agents", "MLflow", "Data Modelling", "Data Visualization"],
    },
    {
      group: L("Data platforms", "Datenplattformen", "Piattaforme dati"),
      items: ["Databricks", "Apache Spark", "Azure", "Unity Catalog", "Delta Lake", "Lakeflow Pipelines", "Kafka", "Flink"],
    },
    {
      group: L("Programming", "Programmierung", "Programmazione"),
      items: ["Python", "SQL", "Java", "JavaScript", "HTML / CSS", "PHP", "C#", "Bash", "R"],
    },
    {
      group: L("Tools & more", "Werkzeuge & mehr", "Strumenti e altro"),
      items: ["Git", "Docker", "Linux", "VS Code", "Jupyter", "Semantic Web / Ontop", "Home Assistant"],
    },
  ],

  certifications: [
    {
      title: "Advanced Data Engineering with Databricks",
      org: "Databricks Academy",
      when: L("May 2026", "Mai 2026", "mag 2026"),
      text: L(
        "Lakeflow Spark Declarative Pipelines, automated deployment with Declarative Automation Bundles, data privacy and performance optimization.",
        "Lakeflow Spark Declarative Pipelines, automatisiertes Deployment mit Declarative Automation Bundles, Datenschutz und Performance-Optimierung.",
        "Lakeflow Spark Declarative Pipelines, deployment automatizzato con Declarative Automation Bundles, privacy dei dati e ottimizzazione delle prestazioni."
      ),
    },
    {
      title: "Microsoft Certified: Azure Data Scientist Associate (DP-100)",
      org: "Microsoft",
      when: L("Mar 2023 – Mar 2026", "März 2023 – März 2026", "mar 2023 – mar 2026"),
      url: "https://learn.microsoft.com/api/credentials/share/en-us/Daniel-5186/20C1834F9A0D4DD?sharingId=BFF212D3D5CD4CFB",
    },
    {
      title: "Monitoring and Optimizing Apache Spark Workloads on Databricks",
      org: L("Databricks training", "Databricks-Schulung", "Corso Databricks"),
      when: "",
    },
    {
      title: "Stream Processing and Analysis with Apache Spark",
      org: L("Databricks training", "Databricks-Schulung", "Corso Databricks"),
      when: "",
    },
    {
      title: L("Italian B2", "Italienisch B2", "Italiano B2"),
      org: L("Free University of Bozen-Bolzano", "Freie Universität Bozen", "Libera Università di Bolzano"),
      when: L("Jun 2021", "Juni 2021", "giu 2021"),
      url: "https://bestr.it/award/show/4aPSvzkuSHSbzpTkTfrjKw",
    },
  ],

  // Newest first.
  events: [
    { year: "2026", text: L("SFSCON, Bolzano", "SFSCON, Bozen", "SFSCON, Bolzano") },
    { year: "2025", text: L("Industrial AI Challenge, as a mentor", "Industrial AI Challenge, als Mentor", "Industrial AI Challenge, come mentor") },
    { year: "2025", text: L("data2day, Karlsruhe", "data2day, Karlsruhe", "data2day, Karlsruhe") },
    { year: "2024", text: L("WeAreDevelopers World Congress, Berlin", "WeAreDevelopers World Congress, Berlin", "WeAreDevelopers World Congress, Berlino") },
    { year: "2022", text: L("World Summit AI, Amsterdam", "World Summit AI, Amsterdam", "World Summit AI, Amsterdam") },
    { year: "2022", text: L("Open Data Hub Day, Bolzano", "Open Data Hub Day, Bozen", "Open Data Hub Day, Bolzano") },
    { year: "2022", text: L("Design Thinking Workshop", "Design-Thinking-Workshop", "Workshop di Design Thinking") },
  ],

  languages: [
    { name: L("German", "Deutsch", "Tedesco"), level: L("native", "Muttersprache", "madrelingua"), dots: 5 },
    { name: L("English", "Englisch", "Inglese"), level: L("fluent", "fließend", "fluente"), dots: 4 },
    { name: L("Italian", "Italienisch", "Italiano"), level: L("B2, certified", "B2, zertifiziert", "B2, certificato"), dots: 3 },
  ],

  ui: {
    about: L("About", "Über mich", "Chi sono"),
    experience: L("Experience", "Berufserfahrung", "Esperienza"),
    education: L("Education", "Ausbildung", "Formazione"),
    skills: L("Skills", "Kenntnisse", "Competenze"),
    certifications: L("Certifications & training", "Zertifikate & Weiterbildung", "Certificazioni e formazione"),
    certShort: L("Certifications", "Zertifikate", "Certificazioni"),
    events: L("Conferences & events", "Konferenzen & Events", "Conferenze ed eventi"),
    languages: L("Languages", "Sprachen", "Lingue"),
    contact: L("Contact", "Kontakt", "Contatti"),
    profile: L("Profile", "Profil", "Profilo"),
    thesis: L("Thesis", "Abschlussarbeit", "Tesi"),
    grade: L("Grade", "Note", "Voto"),
    credential: L("show credential", "Nachweis anzeigen", "mostra credenziale"),
    showProfile: L("Show full profile", "Ganzes Profil anzeigen", "Mostra il profilo completo"),
    downloadCv: L("Download CV", "Lebenslauf herunterladen", "Scarica il CV"),
    cvLangs: L("CV as PDF in", "Lebenslauf als PDF auf", "CV in PDF in"),
    contactLead: L(
      "Want to talk about a data, ML or AI project? Get in touch.",
      "Lust, über ein Daten-, ML- oder KI-Projekt zu sprechen? Melden Sie sich gern.",
      "Vuole parlare di un progetto di dati, ML o IA? Mi contatti pure."
    ),
    location: L("Location", "Ort", "Luogo"),
    rights: L("All rights reserved.", "Alle Rechte vorbehalten.", "Tutti i diritti riservati."),
    desc: L(
      "Daniel Plaikner, data scientist in the Konverto LAB department at KONVERTO, Bolzano. Databricks, Azure, Apache Spark, Python, LLM agents.",
      "Daniel Plaikner, Data Scientist in der Abteilung Konverto LAB bei KONVERTO, Bozen. Databricks, Azure, Apache Spark, Python, LLM-Agenten.",
      "Daniel Plaikner, data scientist nel reparto Konverto LAB di KONVERTO, Bolzano. Databricks, Azure, Apache Spark, Python, agenti LLM."
    ),
  },
};

// Language: ?lang=xx in the URL, then the last choice, then the browser language, else English.
(() => {
  const langs = ["en", "de", "it"];
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const want = [new URLSearchParams(location.search).get("lang"), saved, (navigator.language || "").slice(0, 2)];
  window.LANGS = langs;
  window.LANG = want.find(l => langs.includes(l)) || "en";
  // t(x): picks the current language from an L(...) value; plain strings pass through.
  window.t = v => (v && typeof v === "object" ? v[window.LANG] ?? v.en : v ?? "");
})();
