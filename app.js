// Renders index.html from content.js in the current language (window.LANG, window.t).
(() => {
  const S = window.SITE, $ = id => document.getElementById(id);
  const cvFile = l => `cv/Daniel-Plaikner-CV-${l}.pdf`;
  const langName = { en: "English", de: "Deutsch", it: "Italiano" };
  const chips = items => (items ? `<div class="chips">${items.map(i => `<span class="chip mono">${i}</span>`).join("")}</div>` : "");

  const entry = e => `
    <div class="entry">
      <div>
        <div class="title">${t(e.title)}</div>
        <div class="sub">${[t(e.org), t(e.place), e.grade && `${t(S.ui.grade)} ${e.grade}`].filter(Boolean).join(" · ")}</div>
        ${e.thesis ? `<p class="thesis">${t(S.ui.thesis)}: <em>${e.thesis}</em></p>` : ""}
        ${e.text ? `<p>${t(e.text)}</p>` : ""}
        ${e.url ? `<a class="pill mono" href="${e.url}" target="_blank" rel="noopener">${t(S.ui.credential)} ↗</a>` : ""}
        ${chips(e.tags)}
      </div>
      <div class="side mono">${t(e.when)}</div>
    </div>`;

  const links = () => [
    S.links.email && [S.links.email, `mailto:${S.links.email}`],
    S.links.linkedin && ["LinkedIn", S.links.linkedin],
    S.links.github && ["GitHub", S.links.github],
  ].filter(Boolean).map(([label, href]) => `<a href="${href}"${href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${label}</a>`);

  // id, file name shown in the tab, heading, body
  const sections = () => [
    ["about", "about.md", S.ui.about, S.about.map(p => `<p>${t(p)}</p>`).join("")],
    ["experience", "experience.yaml", S.ui.experience, S.experience.map(entry).join("")],
    ["education", "education.yaml", S.ui.education, S.education.map(entry).join("")],
    ["skills", "skills.json", S.ui.skills,
      `<div class="skills">${S.skills.map(g => `<div><h3 class="mono">${t(g.group)}</h3>${chips(g.items)}</div>`).join("")}</div>
       <h3 class="mono">${t(S.ui.languages)}</h3>
       <div class="langs">${S.languages.map(l => `<span><b>${t(l.name)}</b> <span class="muted">${t(l.level)}</span></span>`).join("")}</div>`],
    ["certifications", "certifications.yaml", S.ui.certifications, S.certifications.map(entry).join("")],
    ["events", "events.log", S.ui.events,
      `<ul class="log">${S.events.map(e => `<li><span class="when mono">${e.year}</span><span>${t(e.text)}</span></li>`).join("")}</ul>`],
    ["contact", "contact.txt", S.ui.contact,
      `<p>${t(S.ui.contactLead)}</p>
       <p class="contact-links">${links().join(" · ")}</p>
       <p class="muted">${t(S.ui.cvLangs)} ${LANGS.map(l => `<a href="${cvFile(l)}" download>${langName[l]}</a>`).join(" · ")}</p>`],
  ];

  function render() {
    document.documentElement.lang = LANG;
    document.querySelector('meta[name="description"]').content = t(S.ui.desc);
    $("name").textContent = S.name;
    $("role").textContent = t(S.role);
    $("facts").innerHTML = `<dt>${t(S.ui.location)}</dt><dd>${t(S.location)}</dd>`;
    $("cv-btn").href = cvFile(LANG);
    $("cv-label").textContent = `${t(S.ui.downloadCv)} (PDF)`;
    $("social").innerHTML = links().join("");
    $("expand-label").textContent = t(S.ui.showProfile);
    $("rights").textContent = t(S.ui.rights);
    $("year").textContent = new Date().getFullYear();

    const secs = sections();
    $("nav-links").innerHTML = secs.map(([id, , title]) => `<a href="#${id}">${t(id === "certifications" ? S.ui.certShort : title)}</a>`).join("");
    $("sections").innerHTML = secs.map(([id, file, title, body]) => `
      <section id="${id}" class="file">
        <div class="tab"><span class="ic mono">##</span><h2>${t(title)}</h2><span class="path mono">${file}</span></div>
        <div class="body">${body}</div>
      </section>`).join("");
    $("lang").innerHTML = LANGS.map(l => `<button type="button" data-lang="${l}" aria-pressed="${l === LANG}">${l.toUpperCase()}</button>`).join("");
  }

  $("lang").addEventListener("click", e => {
    const l = e.target.dataset.lang;
    if (!l || l === LANG) return;
    window.LANG = l;
    try { localStorage.setItem("lang", l); } catch (err) {}
    history.replaceState(null, "", `?lang=${l}${location.hash}`);
    render();
  });

  // Theme: dark by default, the button switches and remembers the choice.
  $("theme").addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (err) {}
    dispatchEvent(new Event("themechange")); // bg.js re-reads its colours
  });

  // Landing: only the card until "Show full profile" is pressed. A link to a section (#experience) skips it.
  if (location.hash.length > 1) document.body.classList.remove("landing");
  $("expand").addEventListener("click", () => {
    document.body.classList.replace("landing", "opening");
    $("sections").focus({ preventScroll: true });
    $("sections").scrollIntoView();
  });

  render();
})();
