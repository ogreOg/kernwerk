(() => {
  const html = document.documentElement;

  const englishMap = {
    "Leistungen": "Services",
    "Arbeitsweise": "Approach",
    "Cases": "Cases",
    "Kontakt": "Contact",
    "Sprache": "Language",
    "Erscheinungsbild": "Appearance",
    "Hell": "Light",
    "Dunkel": "Dark",
    "Menü öffnen": "Open menu",
    "Menü schließen": "Close menu",
    "Komplexes": "Make complexity",
    "klar machen.": "clear.",
    "Wir bauen digitale Systeme für Unternehmen, die nicht stillstehen. Von der ersten Idee bis zum verlässlichen Betrieb.": "We build digital systems for companies that keep moving. From the first idea to reliable operation.",
    "Projekt starten": "Start a project",
    "Leistungen ansehen": "Explore services",
    "Moderne Produktionshalle mit präziser Stahlkonstruktion": "Modern production hall with precise steel construction",
    "02 / Haltung": "02 / Position",
    "Nicht mehr Software.": "Not more software.",
    "Mehr Sicherheit": "More certainty",
    "im nächsten Schritt.": "for the next step.",
    "KERNWERK DIGITAL ist ein Engineering Studio für die digitale Realität. Wir verbinden Strategie, Gestaltung und Technologie — mit der Genauigkeit eines guten Systems.": "KERNWERK DIGITAL is an engineering studio for digital reality. We connect strategy, design and technology — with the precision of a sound system.",
    "Kein Showroom. Kein Buzzword-Bingo. Sondern Lösungen, die im Maschinenraum genauso funktionieren wie im Boardroom.": "No showroom. No buzzword bingo. Just solutions that work on the shop floor as well as in the boardroom.",
    "03 / Was wir verbinden": "03 / What we connect",
    "Technologie, die": "Technology that",
    "weiterhilft.": "moves work forward.",
    "Die besten digitalen Produkte sind keine Inseln. Sie verbinden Daten, Menschen und Abläufe zu einem System, das im Alltag trägt.": "The best digital products are not islands. They connect data, people and processes into a system that holds up in daily work.",
    "IoT & Edge": "IoT & edge",
    "Wir bringen Sensorik, Maschinen und Cloud zusammen — mit klaren Datenwegen, sicheren Schnittstellen und Zuständen, die man versteht.": "We connect sensors, machines and cloud — with clear data paths, secure interfaces and states that are easy to understand.",
    "Web-Plattformen": "Web platforms",
    "Portale, Dashboards und interne Werkzeuge, die Informationen dorthin bringen, wo Entscheidungen getroffen werden.": "Portals, dashboards and internal tools that bring information to the place decisions are made.",
    "Apps im Feld": "Apps in the field",
    "Mobile Anwendungen für Teams, die nicht am Schreibtisch sitzen: schnell, robust und auf den echten Ablauf abgestimmt.": "Mobile products for teams away from the desk: fast, resilient and shaped around the real workflow.",
    "3D & Simulation": "3D & simulation",
    "Räumliche Modelle, digitale Prototypen und visuelle Szenarien, die komplexe Zusammenhänge früh sichtbar machen.": "Spatial models, digital prototypes and visual scenarios that make complex relationships visible early.",
    "03 / Leistungen": "03 / Services",
    "Das ganze": "The whole",
    "System.": "system.",
    "Von der kleinsten Schnittstelle bis zur gesamten digitalen Infrastruktur. Ein Team, ein Anspruch.": "From the smallest interface to the complete digital infrastructure. One team, one standard.",
    "IoT development": "IoT development",
    "Sensorik, Edge und Plattformen, die Maschinenzustände in klare Entscheidungen übersetzen.": "Sensors, edge and platforms that turn machine states into clear decisions.",
    "Web & hosting": "Web & hosting",
    "Robuste digitale Plattformen, gebaut für Last, Sicherheit und den nächsten Produktionszyklus.": "Robust digital platforms, built for load, security and the next production cycle.",
    "App development": "App development",
    "Native und hybride Produkte, die sich in reale Abläufe einfügen — nicht umgekehrt.": "Native and hybrid products that fit real workflows — not the other way around.",
    "UI / UX design": "UI / UX design",
    "Interfaces mit Haltung: verständlich für Menschen, präzise für komplexe Systeme.": "Interfaces with intent: clear for people, precise for complex systems.",
    "3D modeling": "3D modeling",
    "Räumliche Modelle für Produkte, Prozesse und Entscheidungen, bevor sie teuer werden.": "Spatial models for products, processes and decisions, before they become expensive.",
    "04 / Arbeitsweise": "04 / Approach",
    "Gründlich ist unser schnellster Weg.": "Thorough is our fastest route.",
    "Erst verstehen.": "Understand first.",
    "Dann bauen.": "Then build.",
    "Verstehen": "Understand",
    "Wir gehen dorthin, wo die Arbeit passiert. In die Halle, ins Lager, an den Tisch.": "We go where the work happens. Into the hall, the warehouse, to the table.",
    "Schärfen": "Sharpen",
    "Wir machen aus vielen Anforderungen eine belastbare Richtung — und sichtbar, was nicht nötig ist.": "We turn many requirements into a resilient direction — and make visible what is not necessary.",
    "Verankern": "Embed",
    "Wir übergeben kein schwarzes Kästchen. Wir bauen Wissen und Systeme, die Ihr Team weiterträgt.": "We do not hand over a black box. We build knowledge and systems your team can carry forward.",
    "05 / Sichtbar machen": "05 / Make visible",
    "Bevor es": "Before it",
    "real wird.": "becomes real.",
    "Gute Entscheidungen brauchen ein Bild. Wir modellieren Produkte und Prozesse so, dass alle dasselbe sehen.": "Good decisions need a picture. We model products and processes so everyone sees the same thing.",
    "Präzises 3D-Modell eines technischen Bauteils": "Precise 3D model of a technical component",
    "Gedanken bekommen": "Ideas gain",
    "eine Oberfläche.": "a surface.",
    "06 / Einblicke": "06 / Selected work",
    "Was daraus": "What it",
    "entsteht.": "becomes.",
    "Vom Messwert": "From measurement",
    "zur Bewegung.": "to movement.",
    "Ingenieur arbeitet an einem industriellen Sensor": "Engineer working on an industrial sensor",
    "Eine Edge-to-Cloud-Plattform für einen schwäbischen Maschinenbauer. Weniger Stillstand, bessere Entscheidungen.": "An edge-to-cloud platform for a Swabian machine builder. Less downtime, better decisions.",
    "IMPACT / AUSZUG": "IMPACT / EXCERPT",
    "weniger ungeplante": "fewer unplanned",
    "Anlagenstillstände": "machine stoppages",
    "Ausgangslage": "Starting point",
    "Viele Signale, mehrere Systeme und zu wenig Zeit für die richtige Entscheidung im laufenden Betrieb.": "Many signals, several systems and too little time to make the right decision while operating.",
    "Unser Beitrag": "Our contribution",
    "Edge-Gateways, eine klare Datenplattform und ein Dashboard, das Zustände statt Rohdaten zeigt.": "Edge gateways, a clear data platform and a dashboard that shows states instead of raw data.",
    "Im Alltag": "In daily work",
    "Schichtteams erkennen Abweichungen früher, priorisieren Maßnahmen und geben Wissen direkt zurück ins System.": "Shift teams spot deviations earlier, prioritize actions and feed knowledge directly back into the system.",
    "17,4 % weniger ungeplante Anlagenstillstände": "17.4% fewer unplanned machine stoppages",
    "Case besprechen": "Discuss this case",
    "Systemnotizen / 05": "System notes / 05",
    "Technologie muss im Alltag verschwinden.": "Technology should disappear into the day.",
    "Die besten digitalen Produkte machen ihre Komplexität unsichtbar. Sie geben Teams Orientierung, Maschinen Kontext und Entscheidungen einen klaren nächsten Schritt.": "The best digital products make their complexity invisible. They give teams orientation, machines context and decisions a clear next step.",
    "Klarheit statt zusätzlicher Tools": "Clarity instead of more tools",
    "Verlässlichkeit statt schöner Demos": "Reliability instead of polished demos",
    "Fortschritt, der im Betrieb ankommt": "Progress that reaches operations",
    "Leistungen / 01": "Services / 01",
    "Digitale Werkzeuge": "Digital tools",
    "für echte Arbeit.": "for real work.",
    "Wir begleiten Unternehmen von der ersten Systemskizze bis zum stabilen Betrieb — pragmatisch, messbar und nah am Prozess.": "We support companies from the first system sketch to reliable operation — pragmatic, measurable and close to the process.",
    "Ein Ansprechpartner für das ganze System.": "One partner for the whole system.",
    "Was Sie von uns bekommen": "What you get from us",
    "Nicht nur ein fertiges Interface, sondern ein System, das Ihr Team verstehen, erweitern und sicher betreiben kann.": "Not just a finished interface, but a system your team can understand, extend and operate safely.",
    "Klarer technischer Rahmen": "A clear technical frame",
    "Prototypen mit direktem Feedback": "Prototypes with direct feedback",
    "Übergabe ohne Black Box": "A handover without a black box",
    "Arbeitsweise / 02": "Approach / 02",
    "Wir starten nicht mit einer Technologie. Wir starten mit dem Ort, an dem Wert entsteht: Ihrem Team, Ihrem Prozess, Ihrer Maschine.": "We do not start with a technology. We start where value is created: your team, your process, your machine.",
    "Technisches 3D-Modell in einer digitalen Konstruktionsumgebung": "Technical 3D model in a digital design environment",
    "Jede Entscheidung wird sichtbar, bevor sie teuer wird.": "Every decision becomes visible before it becomes expensive.",
    "Gemeinsam vom Problem zur Richtung": "From problem to direction, together",
    "Kurze Schleifen, sichtbare Zwischenstände und Entscheidungen, die sich auf echte Beobachtungen stützen.": "Short loops, visible intermediate states and decisions grounded in real observations.",
    "Vor Ort beobachten": "Observe on site",
    "Gemeinsam priorisieren": "Prioritize together",
    "In kleinen Schritten beweisen": "Prove in small steps",
    "Ein Industrial-IoT-System für einen schwäbischen Maschinenbauer. Ein Beispiel dafür, wie aus verteilten Daten ein handlungsfähiger Ablauf wird.": "An industrial IoT system for a Swabian machine builder. An example of how distributed data becomes an actionable workflow.",
    "Was sich dadurch verändert": "What changes because of it",
    "Gute Systeme bleiben nicht auf dem Bildschirm. Sie verändern die Qualität von Entscheidungen genau dort, wo Arbeit passiert.": "Good systems do not stay on the screen. They change the quality of decisions exactly where work happens.",
    "Früher sehen": "See earlier",
    "Besser entscheiden": "Decide better",
    "Ruhiger betreiben": "Operate calmer",
    "Kontakt / 04": "Contact / 04",
    "Sprechen wir": "Let’s talk",
    "über Ihr System.": "about your system.",
    "Geben Sie uns ein paar Eckdaten. Wir melden uns mit einer ersten Einschätzung und den richtigen nächsten Fragen.": "Give us a few starting points. We will come back with an initial perspective and the right next questions.",
    "Projekt kurz einordnen": "Scope the project",
    "Name / Unternehmen": "Name / company",
    "E-Mail": "Email",
    "Worum geht es?": "What is it about?",
    "Bitte auswählen": "Please choose",
    "Web & Hosting": "Web & hosting",
    "App-Entwicklung": "App development",
    "UI / UX Design": "UI / UX design",
    "3D-Modellierung": "3D modeling",
    "Noch nicht sicher": "Not sure yet",
    "Projektphase": "Project stage",
    "Erste Idee": "Early idea",
    "Bestehendes System": "Existing system",
    "Optimierung": "Optimization",
    "Kurzbeschreibung": "Short description",
    "Was soll klarer, schneller oder verlässlicher werden?": "What should become clearer, faster or more reliable?",
    "Anfrage senden": "Send enquiry",
    "Danke — Ihre Anfrage ist vorgemerkt. Wir melden uns persönlich.": "Thank you — your enquiry is noted. We will get back to you personally.",
    "Direktkontakt": "Direct contact",
    "Was danach passiert": "What happens next",
    "Wir sortieren Ihre Anfrage nicht nach einem Standardprozess, sondern nach dem tatsächlichen Bedarf.": "We do not route your enquiry through a generic process. We start with the actual need.",
    "Wir lesen Ihre Eckdaten": "We read your starting points",
    "Wir melden uns mit relevanten Fragen": "We return with relevant questions",
    "Wir schlagen einen passenden ersten Schritt vor": "We suggest the right first step",
    "Rechtliches / 05": "Legal / 05",
    "Allgemeine": "General",
    "Geschäftsbedingungen.": "Terms & Conditions.",
    "Stand: September 2026": "Status: September 2026",
    "Diese Allgemeinen Geschäftsbedingungen bilden die Grundlage für Leistungen von KERNWERK DIGITAL. Sie gelten gegenüber Unternehmen, juristischen Personen des öffentlichen Rechts und öffentlichen Einrichtungen, soweit nicht Abweichendes vereinbart wurde.": "These general terms and conditions form the basis for services provided by KERNWERK DIGITAL. They apply to companies, legal entities under public law and public institutions unless otherwise agreed.",
    "01 — 08 / Bedingungen": "01 — 08 / Terms",
    "Geltungsbereich": "Scope",
    "Diese Bedingungen gelten für alle Angebote, Verträge und Leistungen von KERNWERK DIGITAL, soweit im jeweiligen Angebot oder Vertrag nichts Abweichendes vereinbart wurde. Entgegenstehende AGB oder andere Bedingungen des Kunden werden nicht Vertragsbestandteil, soweit sie nicht ausdrücklich schriftlich akzeptiert wurden.": "These conditions apply to all offers, contracts and services of KERNWERK DIGITAL unless otherwise agreed in the relevant offer or contract. Counterterms or other conditions of the customer do not become part of the contract unless explicitly accepted in writing.",
    "Vertragsschluss": "Conclusion of contract",
    "Ein Vertrag kommt durch die schriftliche Annahme eines Angebots, die Beauftragung in Textform oder durch den Beginn der Leistungserbringung zustande. Leistungsumfang, Zeitplan und Vergütung werden im Angebot oder in der Beauftragung verbindlich festgelegt.": "A contract is concluded by written acceptance of an offer, assignment in text form or by commencing performance. Scope, schedule and remuneration are definitively set in the offer or assignment.",
    "Leistungen und Änderungen": "Services and changes",
    "KERNWERK DIGITAL erbringt die vereinbarten Beratungs-, Design-, Entwicklungs- und Betriebsleistungen nach dem anerkannten Stand der Technik. Änderungswünsche oder zusätzliche Leistungen werden gesondert beauftragt und nach Vereinbarung vergütet.": "KERNWERK DIGITAL provides the agreed consulting, design, development and operational services according to the accepted state of the art. Change requests or additional services are commissioned separately and billed by agreement.",
    "Mitwirkung des Kunden": "Customer cooperation",
    "Der Kunde stellt benötigte Informationen, Zugänge, Inhalte, Ansprechpartner und Entscheidungen rechtzeitig bereit. Verzögerungen durch fehlende oder verspätete Mitwirkung können vereinbartes Vorgehen und Termine beeinflussen.": "The customer provides the required information, access, content, contact persons and decisions in a timely manner. Delays caused by missing or late cooperation may affect agreed steps and deadlines.",
    "Vergütung und Zahlung": "Fees and payment",
    "Alle Preise verstehen sich zuzüglich der gesetzlichen Umsatzsteuer, sofern diese anfällt. Rechnungen sind innerhalb der im Angebot genannten Frist ohne Abzug zahlbar. Laufende Hosting-, Wartungs- und Betriebsleistungen werden in der vereinbarten Regelung berechnet.": "All prices are exclusive of statutory VAT where applicable. Invoices are due within the period stated in the offer without deduction. Ongoing hosting, maintenance and operational services are billed in the agreed arrangement.",
    "Nutzungsrechte": "Usage rights",
    "Nach vollständiger Zahlung erhält der Kunde die im Angebot vereinbarten Nutzungsrechte an den individuell erstellten Ergebnissen. Vorbestehende Werkzeuge, Bibliotheken, Konzepte und Rechte Dritter bleiben hiervon unberührt.": "After full payment, the customer receives the usage rights agreed in the offer for the individually created results. Existing tools, libraries, concepts and third-party rights remain unaffected.",
    "Haftung": "Liability",
    "KERNWERK DIGITAL haftet nach den gesetzlichen Vorschriften. Für leichte Fahrlässigkeit haftet KERNWERK DIGITAL nur bei Verletzung wesentlicher Vertragspflichten und begrenzt auf den typischerweise vorhersehbaren Schaden.": "KERNWERK DIGITAL is liable in accordance with the statutory provisions. For slight negligence, KERNWERK DIGITAL is liable only for breach of essential contractual obligations and limited to the typically foreseeable damage.",
    "Schlussbestimmungen": "Final provisions",
    "Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Ist der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist der Gerichtsstand am Sitz von KERNWERK DIGITAL.": "German law applies, excluding the UN Convention on Contracts for the International Sale of Goods. If the customer is a merchant, legal entity under public law or special fund under public law, the place of jurisdiction is the registered office of KERNWERK DIGITAL.",
    "Rechtliche Hinweise": "Legal notice",
    "Diese Vorlage sollte vor der Veröffentlichung von einer für deutsches Vertragsrecht qualifizierten Person geprüft und an das konkrete Geschäftsmodell angepasst werden.": "This template should be reviewed before publication by a person qualified in German contract law and adapted to the specific business model.",
    "Frage zu einem Projekt": "Question about a project",
    "Lassen Sie uns": "Let’s",
    "sprechen.": "talk.",
    "Ein Projekt, eine Frage oder ein System, das klarer werden soll? Schreiben Sie uns.": "A project, a question or a system that should become clearer? Write to us.",
    "Stuttgart · Deutschland · Europa": "Stuttgart · Germany · Europe",
    "Rechtliches": "Legal",
    "Impressum": "Imprint",
    "Datenschutz": "Privacy",
    "AGB": "Terms & Conditions",
    "Rechtliche Hinweise werden auf Anfrage bereitgestellt.": "Legal information is available on request.",
    "Built with care in the Südwesten": "Built with care in the Southwest"
  };

  const originalText = new WeakMap();

  function textNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName) || !node.nodeValue.trim()) {
          return NodeFilter.FILTER_REJECT;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  function replaceLogoBlock() {
    document.querySelectorAll('[data-testid="button-logo"]').forEach((logoLink) => {
      logoLink.className = 'group flex items-center gap-1 text-left';

      const img = logoLink.querySelector('img[src="kernwerk.png"]') || document.createElement('img');
      img.src = 'kernwerk.png';
      img.alt = 'KERNWERK DIGITAL';
      img.loading = 'eager';
      img.className = 'h-14 w-14 shrink-0 object-contain md:h-16 md:w-16';

      if (!img.parentElement) {
        const wordmark = document.createElement('span');
        wordmark.className = 'kw-display text-[15px] font-semibold leading-[.9] tracking-[-.02em]';
        wordmark.innerHTML = 'KERNWERK<br><span class="text-[#a7c7ce]">DIGITAL</span>';
        logoLink.innerHTML = '';
        logoLink.appendChild(img);
        logoLink.appendChild(wordmark);
      } else {
        img.className = 'h-14 w-14 shrink-0 object-contain md:h-16 md:w-16';
      }
    });
  }

  function applyLanguage() {
    textNodes().forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      const trimmed = original.trim();
      const translated = language === 'en' && englishMap[trimmed] ? englishMap[trimmed] : trimmed;
      node.nodeValue = original.replace(trimmed, translated);
    });
    document.documentElement.lang = language;
    document.querySelectorAll('[data-testid="button-language-de"]').forEach((button) => {
      button.classList.toggle('kw-control-active', language === 'de');
      button.setAttribute('aria-pressed', language === 'de' ? 'true' : 'false');
    });
    document.querySelectorAll('[data-testid="button-language-en"]').forEach((button) => {
      button.classList.toggle('kw-control-active', language === 'en');
      button.setAttribute('aria-pressed', language === 'en' ? 'true' : 'false');
    });
    localStorage.setItem('kernwerk-language', language);
  }

  function applyTheme() {
    html.classList.toggle('dark', theme === 'dark');
    document.querySelectorAll('[data-testid="button-theme"]').forEach((button) => {
      button.setAttribute('aria-label', language === 'de'
        ? (theme === 'dark' ? 'Erscheinungsbild: Hell' : 'Erscheinungsbild: Dunkel')
        : (theme === 'dark' ? 'Appearance: Light' : 'Appearance: Dark'));
    });
    localStorage.setItem('kernwerk-theme', theme);
  }

  let language = localStorage.getItem('kernwerk-language') || 'en';
  let theme = localStorage.getItem('kernwerk-theme') || 'light';

  function addTermsLink() {
    document.querySelectorAll('[data-testid="button-privacy"]').forEach((privacyLink) => {
      if (privacyLink.parentElement.querySelector('[data-testid="link-terms"]')) return;
      const termsLink = document.createElement('a');
      termsLink.href = 'terms.html';
      termsLink.className = privacyLink.className;
      termsLink.dataset.testid = 'link-terms';
      termsLink.textContent = 'AGB';
      privacyLink.insertAdjacentElement('afterend', termsLink);
    });
  }

  addTermsLink();
  replaceLogoBlock();

  document.querySelectorAll('[data-testid="button-language-de"]').forEach((button) => {
    button.addEventListener('click', () => { language = 'de'; applyLanguage(); replaceLogoBlock(); });
  });
  document.querySelectorAll('[data-testid="button-language-en"]').forEach((button) => {
    button.addEventListener('click', () => { language = 'en'; applyLanguage(); replaceLogoBlock(); });
  });
  document.querySelectorAll('[data-testid="button-theme"]').forEach((button) => {
    button.addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(); });
  });

  document.querySelectorAll('[data-testid="button-menu"]').forEach((button) => button.addEventListener('click', () => {
    const nav = document.querySelector('header nav[aria-label="Main navigation"]');
    if (!nav) return;
    nav.classList.toggle('kw-mobile-nav-open');
    button.setAttribute('aria-expanded', nav.classList.contains('kw-mobile-nav-open') ? 'true' : 'false');
  }));

  document.querySelectorAll('header nav a').forEach((link) => link.addEventListener('click', () => {
    document.querySelector('header nav')?.classList.remove('kw-mobile-nav-open');
  }));

  document.querySelectorAll('[data-testid="button-start-project"], [data-testid="button-case-contact"]').forEach((button) => {
    button.addEventListener('click', () => {
      const contact = document.getElementById('contact');
      if (contact) contact.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = 'contact.html';
    });
  });

  document.querySelectorAll('[data-testid="button-explore-services"]').forEach((button) => {
    button.addEventListener('click', () => {
      const services = document.getElementById('services');
      if (services) services.scrollIntoView({ behavior: 'smooth' });
      else window.location.href = 'services.html';
    });
  });

  document.querySelectorAll('form').forEach((form) => form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.createElement('div');
    message.className = 'kw-form-success';
    message.textContent = language === 'de'
      ? 'Danke — Ihre Anfrage ist vorbereitet.'
      : 'Thank you — your enquiry is ready.';
    form.appendChild(message);
    form.reset();
  }));

  document.querySelectorAll('[data-testid="button-imprint"], [data-testid="button-privacy"]').forEach((button) => {
    button.addEventListener('click', () => alert(language === 'de'
      ? 'Rechtliche Informationen werden ergänzt.'
      : 'Legal information will be added.'));
  });

  const progress = document.querySelector('.kw-progress');
  const updateProgress = () => {
    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    }
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
  applyLanguage();
  applyTheme();
})();
