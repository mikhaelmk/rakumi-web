/* =========================================================
   Rakumi — script.js

   Este arquivo só faz uma coisa: trocar o idioma das páginas
   entre inglês e português.

   Os textos ficam em `translations`. No HTML, cada elemento
   aponta para uma chave com um atributo:

     data-i18n="chave"             -> texto do elemento
     data-i18n-alt="chave"         -> atributo alt
     data-i18n-aria-label="chave"  -> atributo aria-label
     <body data-i18n-title / data-i18n-description>
                                   -> título e descrição da página

   Tudo é escrito com textContent / setAttribute, nunca como
   HTML, então nenhum texto daqui vira código na página.

   nocturne.js usa translate() e currentLanguage daqui, por
   isso este arquivo precisa ser carregado antes dele.
   ========================================================= */


/* ---------- 1. Textos ---------- */

const translations = {
  en: {
    // Página principal
    "meta.title": "Rakumi — Code, stories & other obsessions",
    "meta.description": "Rakumi — a personal archive for code, fiction and experiments.",
    "nav.aria": "Primary navigation",
    "nav.home": "Rakumi home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.building": "Now",
    "language.aria": "Language",

    "hero.eyebrow": "PERSONAL ARCHIVE · CODE · FICTION",
    "hero.titleLine1": "Code, stories",
    "hero.titleLine2": "and other obsessions",
    "hero.text": "Rakumi is where I keep the things I code, write and invent when an idea refuses to leave me alone.",
    "hero.explore": "See what's here",
    "hero.alt": "Pixel-art emblem: my character in headphones coding next to the raccoon under a full moon",

    "about.eyebrow": "01 — OBSERVER",
    "about.title": "Mikael",
    "about.text": "I study Computer Science and use Rakumi as an archive for the things I build, learn, write and obsess over.",
    "about.studyLabel": "Studying",
    "about.study": "Computer Science",
    "about.practiceLabel": "Practicing",
    "about.practice": "C++ · object-oriented programming · data structures",
    "about.interestsLabel": "Interests",
    "about.interests": "systems · cybersecurity · writing · games",
    "about.languagesLabel": "Languages",
    "about.interestsNote": "Interest, not expertise: I am still learning most of this.",

    "projects.eyebrow": "02 — PROJECTS",
    "projects.title": "On my radar right now",
    "projects.ordo.status": "In Development",
    "projects.ordo.kind": "CODE / 01",
    "projects.ordo.description": "A local task manager I am using to practice C++ and object-oriented programming outside college exercises.",
    "projects.ordo.link": "Open GitHub →",
    "projects.fragments.status": "Writing",
    "projects.fragments.kind": "FRAGMENT / 02",
    "projects.fragments.title": "Fragmentos",
    "projects.fragments.description": "A station, a moon far too large, and people who seem to have arrived there for the wrong reason. I would rather not explain the rest yet.",
    "projects.fragments.note": "private draft",
    "projects.channel.status": "Preparing",
    "projects.channel.kind": "CHANNEL / 03",
    "projects.channel.title": "M!KHAEL",
    "projects.channel.description": "My channel for games, projects, ideas and anything I get obsessed with enough to turn into a video.",
    "projects.channel.link": "Visit Channel →",

    "other.eyebrow": "03 — OTHER AREAS",
    "other.title": "Also around here",
    "nocturne.status": "Released",
    "nocturne.kind": "THEME / 04",
    "nocturne.description": "A celestial Vencord theme built around deep navy surfaces, lunar blue and restrained gold.",
    "nocturne.view": "View theme →",
    "nocturne.downloadLink": "Download .theme.css →",
    "projects.train.status": "Completed",
    "projects.train.kind": "CODE / 05",
    "projects.train.title": "Train Cargo System",
    "projects.train.description": "An academic C++ project developed with Malu to practice queues, stacks, CSV file handling and data structures through a turn-based train cargo distribution system.",
    "projects.train.link": "Open GitHub →",
    "projects.rakumi.kind": "SITE / 06",
    "projects.rakumi.status": "Always changing",
    "projects.rakumi.description": "This site. It is also where I practice HTML, CSS and JavaScript, without pretending I have mastered web development.",
    "projects.rakumi.link": "Source on GitHub →",

    "building.eyebrow": "04 — NOW",
    "building.title": "What is open on my desk",
    "building.project": "Project",
    "building.statusLabel": "Status",
    "building.status": "studying / testing",
    "building.nextMilestone": "Next milestone",
    "building.milestone": "v0.1 — create & list tasks",

    "footer.tagline": "Code, fiction and a few obsessions",

    // Página do Nocturne
    "nocturne.metaTitle": "Nocturne — Rakumi",
    "nocturne.metaDescription": "Nocturne — a celestial Vencord theme built with deep navy, lunar blue and restrained gold.",
    "nocturne.back": "← Back",
    "nocturne.subtitle": "A quieter orbit for Vencord.",
    "nocturne.download": "Download .theme.css",
    "nocturne.copy": "Copy online theme URL",
    "nocturne.urlLabel": "Online theme URL",
    "nocturne.copied": "Theme URL copied.",
    "nocturne.copyFailed": "Could not copy automatically. Select and copy the URL below.",
    "nocturne.palette": "Palette",
    "nocturne.preview": "Theme preview",
    "nocturne.previewNote": "An HTML/CSS palette study of the theme’s surfaces and accents.",
    "nocturne.channels": "Channels",
    "nocturne.general": "general",
    "nocturne.projects": "projects",
    "nocturne.message": "Deep navy surfaces. Lunar blue details. A little gold.",
    "nocturne.reply": "A quiet space for the next idea.",
    "nocturne.composer": "Message #general",
    "nocturne.installation": "Installation",
    "nocturne.online": "Online",
    "nocturne.onlinePath": "Settings → Vencord → Themes → Online Themes",
    "nocturne.onlineInstructions": "Paste the theme URL below and enable Nocturne.",
    "nocturne.local": "Local",
    "nocturne.localPath": "Settings → Vencord → Themes → Local Themes → Open Themes Folder",
    "nocturne.localInstructions": "Download Nocturne.theme.css, place it in the themes folder and enable it."
  },

  pt: {
    // Página principal
    "meta.title": "Rakumi — código, histórias e outras obsessões",
    "meta.description": "Rakumi — um arquivo pessoal de código, ficção e experimentos.",
    "nav.aria": "Navegação principal",
    "nav.home": "Início do Rakumi",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.building": "Agora",
    "language.aria": "Idioma",

    "hero.eyebrow": "ARQUIVO PESSOAL · CÓDIGO · FICÇÃO",
    "hero.titleLine1": "Código, histórias",
    "hero.titleLine2": "e outras obsessões",
    "hero.text": "Rakumi é onde eu guardo o que programo, escrevo e invento quando uma ideia resolve não me deixar em paz.",
    "hero.explore": "Ver o que tem aqui",
    "hero.alt": "Emblema em pixel art: meu personagem de fones programando ao lado do guaxinim sob a lua cheia",

    "about.eyebrow": "01 — OBSERVADOR",
    "about.title": "Mikael",
    "about.text": "Estudo Ciência da Computação e uso o Rakumi como um arquivo para as coisas que construo, aprendo, escrevo e pelas quais fico obcecado.",
    "about.studyLabel": "Estudo",
    "about.study": "Ciência da Computação",
    "about.practiceLabel": "Praticando",
    "about.practice": "C++ · orientação a objetos · estruturas de dados",
    "about.interestsLabel": "Interesses",
    "about.interests": "sistemas · cybersecurity · escrita · jogos",
    "about.languagesLabel": "Idiomas",
    "about.interestsNote": "Interesse não é domínio: a maior parte disso eu ainda estou aprendendo.",

    "projects.eyebrow": "02 — PROJETOS",
    "projects.title": "No meu radar agora",
    "projects.ordo.status": "Em desenvolvimento",
    "projects.ordo.kind": "CÓDIGO / 01",
    "projects.ordo.description": "Um gerenciador local de tarefas que estou usando para praticar C++ e POO fora dos exercícios da faculdade.",
    "projects.ordo.link": "Abrir GitHub →",
    "projects.fragments.status": "Escrevendo",
    "projects.fragments.kind": "FRAGMENTO / 02",
    "projects.fragments.title": "Fragmentos",
    "projects.fragments.description": "Uma estação, uma lua grande demais e pessoas que parecem ter chegado ali pela razão errada. O resto eu prefiro não explicar ainda.",
    "projects.fragments.note": "rascunho privado",
    "projects.channel.status": "Preparando",
    "projects.channel.kind": "CANAL / 03",
    "projects.channel.title": "M!KHAEL",
    "projects.channel.description": "Meu canal para falar de jogos, projetos, ideias e qualquer assunto que eu fique obcecado o bastante para transformar em vídeo.",
    "projects.channel.link": "Visitar canal →",

    "other.eyebrow": "03 — OUTRAS ÁREAS",
    "other.title": "Também por aqui",
    "nocturne.status": "Lançado",
    "nocturne.kind": "TEMA / 04",
    "nocturne.description": "Um tema celestial para Vencord com superfícies em azul-marinho profundo, azul lunar e dourado discreto.",
    "nocturne.view": "Ver tema →",
    "nocturne.downloadLink": "Baixar .theme.css →",
    "projects.train.status": "Concluído",
    "projects.train.kind": "CÓDIGO / 05",
    "projects.train.title": "Sistema de Cargas Ferroviárias",
    "projects.train.description": "Um projeto acadêmico em C++ desenvolvido com a Malu para praticar filas, pilhas, leitura de arquivos CSV e estruturas de dados por meio de um sistema de distribuição de cargas ferroviárias por turnos.",
    "projects.train.link": "Abrir GitHub →",
    "projects.rakumi.kind": "SITE / 06",
    "projects.rakumi.status": "Sempre mudando",
    "projects.rakumi.description": "Este site. Também é onde eu pratico HTML, CSS e JavaScript, sem fingir que domino desenvolvimento web.",
    "projects.rakumi.link": "Código no GitHub →",

    "building.eyebrow": "04 — AGORA",
    "building.title": "O que está aberto na minha mesa",
    "building.project": "Projeto",
    "building.statusLabel": "Status",
    "building.status": "estudando / testando",
    "building.nextMilestone": "Próximo marco",
    "building.milestone": "v0.1 — criar e listar tarefas",

    "footer.tagline": "Código, ficção e algumas obsessões",

    // Página do Nocturne
    "nocturne.metaTitle": "Nocturne — Rakumi",
    "nocturne.metaDescription": "Nocturne — um tema celestial para Vencord em azul-marinho profundo, azul lunar e dourado discreto.",
    "nocturne.back": "← Voltar",
    "nocturne.subtitle": "Uma órbita mais tranquila para o Vencord.",
    "nocturne.download": "Baixar .theme.css",
    "nocturne.copy": "Copiar URL do tema online",
    "nocturne.urlLabel": "URL do tema online",
    "nocturne.copied": "URL do tema copiada.",
    "nocturne.copyFailed": "Não foi possível copiar automaticamente. Selecione e copie a URL abaixo.",
    "nocturne.palette": "Paleta",
    "nocturne.preview": "Prévia do tema",
    "nocturne.previewNote": "Um estudo em HTML/CSS das superfícies e cores de destaque do tema.",
    "nocturne.channels": "Canais",
    "nocturne.general": "geral",
    "nocturne.projects": "projetos",
    "nocturne.message": "Superfícies em azul-marinho. Detalhes em azul lunar. Um pouco de dourado.",
    "nocturne.reply": "Um espaço tranquilo para a próxima ideia.",
    "nocturne.composer": "Mensagem em #geral",
    "nocturne.installation": "Instalação",
    "nocturne.online": "Online",
    "nocturne.onlinePath": "Configurações → Vencord → Temas → Temas online",
    "nocturne.onlineInstructions": "Cole a URL do tema abaixo e ative o Nocturne.",
    "nocturne.local": "Local",
    "nocturne.localPath": "Configurações → Vencord → Temas → Temas locais → Abrir pasta de temas",
    "nocturne.localInstructions": "Baixe Nocturne.theme.css, coloque-o na pasta de temas e ative-o."
  }
};


/* ---------- 2. Troca de idioma ---------- */

const SUPPORTED_LANGUAGES = ["en", "pt"];
const LANGUAGE_STORAGE_KEY = "rakumi-language";
const languageButtons = document.querySelectorAll("[data-lang]");
const metaDescription = document.querySelector('meta[name="description"]');

let currentLanguage = "en";

// Se faltar uma tradução, usa o inglês; se faltar no inglês,
// mostra a própria chave (assim o erro aparece na página).
function translate(language, key) {
  return translations[language]?.[key] ?? translations.en[key] ?? key;
}

function applyLanguage(language, { persist = true } = {}) {
  currentLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "en";

  document.documentElement.lang = currentLanguage === "pt" ? "pt-BR" : "en";
  document.title = translate(currentLanguage, document.body.dataset.i18nTitle || "meta.title");

  if (metaDescription) {
    metaDescription.content = translate(currentLanguage, document.body.dataset.i18nDescription || "meta.description");
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(currentLanguage, element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", translate(currentLanguage, element.dataset.i18nAlt));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(currentLanguage, element.dataset.i18nAriaLabel));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (persist) saveLanguage(currentLanguage);
}


/* ---------- 3. Lembrar a escolha ---------- */

// O localStorage pode lançar erro (cookies bloqueados, alguns
// modos privados). Lembrar o idioma é só conveniência, então
// uma falha aqui é ignorada.
function readStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Sem armazenamento a página funciona igual; só não lembra a escolha.
  }
}


/* ---------- 4. Início ---------- */

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

// Primeira visita: segue o idioma do navegador e não salva nada.
// Depois de um clique em EN/PT, a escolha passa a ser lembrada.
const storedLanguage = readStoredLanguage();
const browserLanguage = navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
applyLanguage(storedLanguage || browserLanguage, { persist: Boolean(storedLanguage) });
