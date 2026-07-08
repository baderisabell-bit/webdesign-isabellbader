document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('themeToggle');
    btn.textContent = document.body.classList.contains('light-mode') ? 'Hellmodus' : 'Dunkelmodus';
});


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuToggle.addEventListener('click', () => {
    // Menü ein-/ausblenden
    nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
});

// Sprache
// --- Ganz oben ---
let currentLang = localStorage.getItem('lang') || 'de';

const translations = {
    de: {
        title: "Webdesign | Isabell Bader",
        nav_home: "Home",
        nav_about: "Über mich",
        nav_services: "Leistungen",
        nav_portfolio: "Portfolio",
        nav_contact: "Kontakt",
        theme_toggle: "Dunkelmodus",
        lang_switch: "EN",
        footer_links: "Informationen",
        link_impressum: "Impressum",
        link_datenschutz: "Datenschutz",
        link_agb: "Allgemeine Geschäftsbedingungen",
        link_wiederruf: "Widerrufsbelehrung",
        footer_copyright: "© 2024 Isabell Bader. Alle Rechte vorbehalten.",
        hero_h1: "DIGITALE WERKZEUGE FÜR IHR HANDWERK.",
        hero_p: "Von der analogen Praxis ins digitale Netz: Websites, die funktionieren.",
        btn_services: "Leistungen ansehen",
        home_h1: "Digitale Präsenz für Handwerk & Kfz.",
        home_p: "Websites, die Vertrauen aufbauen und Kunden bringen.",
        btn_contact: "Projekt anfragen &rarr;",
        preview_about: "Über mich",
        preview_about_desc: "Handwerk meets Webentwicklung: Erfahre, warum meine Herkunft meine größte Stärke ist.",
        btn_more_info: "Mehr erfahren",
        preview_services: "Leistungen",
        preview_services_desc: "Technik, Design und SEO aus einer Hand – für Betriebe, die mehr als nur „hübsch“ wollen.",
        btn_view_services: "Leistungen ansehen",
        preview_portfolio: "Portfolio",
        preview_portfolio_desc: "Projekte, die wirken. Ein Einblick in meine bisherige Arbeit.",
        btn_view_portfolio: "Arbeiten zeigen",
        angebot_hero_title: "Eine Website, die Vertrauen schafft und Anfragen erleichtert",
        angebot_hero_subtitle: "Deine Website ist der erste Kontakt zwischen dir und potenziellen Kunden. Innerhalb weniger Sekunden entscheiden Besucher, ob sie Vertrauen fassen.",
        service_design_title: "Design, das Vertrauen schafft",
        service_design_description: "Ein professioneller erster Eindruck und einfache Kontaktmöglichkeiten entscheidet oft darüber, ob Besucher Kontakt aufnehmen oder weiterziehen.",
        service_list_title: "Das ist enthalten:",
        service_list_item_1: "Individuelles Design passend zu deinem Unternehmen",
        service_list_item_2: "Optimierte Darstellung auf Smartphone, Tablet und Desktop",
        service_list_item_3: "Klare und verständliche Nutzerführung",
        service_list_item_4: "Strategisch platzierte Kontaktmöglichkeiten",
        service_speed_title: "Schnell erreichbar auf jedem Gerät",
        service_speed_description: "Besucher erwarten heute kurze Ladezeiten und eine zuverlässige Nutzung, besonders unterwegs.",
        service_list_item_5: "Optimierte Bildformate für schnelle Ladezeiten",
        service_list_item_6: "Sauber und moderne technische Umsetzung",
        service_list_item_7: "Gute Auffindbarkeit bei Google",
        service_efficiency_title: "Weniger Aufwand, mehr Anfragen",
        service_efficiency_description: "Eine Website sollte nicht nur informieren, sondern dir im Alltag Arbeit abnehmen.",
        service_list_item_8: "Kontaktformulare",
        service_list_item_9: "Online Terminbuchung auf Wunsch",
        service_list_item_10: "Strukturierte Weiterleitung von Anfragen",
        service_offer_title: "Betreuung nach dem Projekt",
        service_offer_description: "Du entscheidest selbst, wie viel Unterstützung du nach der Fertigstellung möchtest.",
        service_option_a_title: "Option A: Erstellung inklusive Betreuung",
        service_option_a_description: "Ich übernehme Hosting, Updates, Backups und die technische Wartung. Du musst dich um nichts kümmern.",
        service_option_b_title: "Option B: Einmalige Erstellung",
        service_option_b_description: "Nach der Fertigstellung übernimmst du Hosting und Verwaltung selbst. Selbstverständlich erhältst du eine Einführung, damit du kleinere Änderungen eigenständig durchführen kannst.",
        about_hero_title: "Ich habe nicht in der digitalen Welt angefangen – aber genau das ist heute meine größte Stärke.",
        about_lead: "Vom Reitplatz in die digitale Welt: Warum ich heute Websites baue, die Handwerk und Kfz-Betriebe wirklich weiterbringen.",
        about_text_1: "Als selbstständige Reitlehrerin habe ich am eigenen Leib erfahren: Gute Arbeit allein reicht oft nicht aus. Wer nicht sichtbar ist, verliert gegen den, der sich besser verkauft – auch wenn die Qualität schlechter ist. Menschen müssen Vertrauen aufbauen können, bevor sie zum Telefonhörer greifen.",
        about_text_2: "Was als Lösung für meine eigene Herausforderung begann, wurde zu meiner Mission: Unternehmen dabei zu helfen, ihre Stärken klar, verständlich und professionell sichtbar zu machen.",
        about_quote: "Websites, die mehr leisten sollen als nur gut auszusehen. Sie sollen Vertrauen schaffen und Interessenten in Kunden verwandeln.",
        about_expertise_title: "Pädagogik & Soziologie trifft digitale Umsetzung",
        about_expertise_description: "Mein Studium der Pädagogik und Soziologie prägt meine Arbeitsweise maßgeblich. Es geht nicht um \"hübsches Design\", sondern um die Frage: <strong>Wie nehmen Menschen Informationen wahr?</strong>",
        about_expertise_description_2: "Ich übersetze komplexe Themen in logische Strukturen, damit Besucher sich sofort orientieren und Entscheidungen treffen können. Diese Verbindung aus praktischer Selbstständigkeit und wissenschaftlichem Strukturverständnis ist der Kern meiner Arbeit.",
        portfolio_titel: "Ausgewählte Projekte",
        portfolio_lead: "Hier zeige ich, wie ich individuelle Anforderungen in funktionale, ästhetische Webauftritte übersetze.",
        portfolio_project_1_title: "Reitunterricht Bader",
        portfolio_project_1_challenge: "Herausforderung:",
        portfolio_project_1_solution: "Lösung:",
        portfolio_project_1_cta: "Website ansehen",
        portfolio_project_2_title: "KFZ-Werkstatt Bader",
        portfolio_project_2_challenge: "Herausforderung:",
        portfolio_project_2_solution: "Lösung:",
        portfolio_project_2_cta: "Website ansehen",
        contact_hero_title: "Lass uns über dein Projekt sprechen.",
        contact_hero_subtitle: "Ich freue mich darauf, dich und dein Unternehmen kennenzulernen. Lass uns gemeinsam herausfinden, wie ich dich unterstützen kann.",
        contact_info_p: "Du hast Fragen oder möchtest erst einmal E-Mail-Kontakt? Schreib mir einfach eine Nachricht.",
        contact_info_email: "E-Mail:",
        contact_info_telefon: "Telefonnummer:",
        contact_info_hours: "Ich antworte werktags in der Regel innerhalb von 24 Stunden.",
        contact_form_h2: "Termin oder Anfrage",
        contact_form_name: "Name",
        contact_form_email: "E-Mail",
        contact_form_telefon: "Telefonnummer (optional)",
        contact_form_topic: "Anliegen",
        contact_form_topic_anfrage: "Allgemeine Anfrage / Rückrufbitte",
        contact_form_topic_termin: "Termin für Erstgespräch buchen",
        contact_form_message: "Nachricht",
        contact_form_submit: "Absenden",
        form_success: "Danke! Ich habe deine Nachricht erhalten.",
        form_error: "Ups, da gab es einen Fehler.",
    },
    en: {
    title: "Webdesign | Isabell Bader",
    nav_home: "Home",
    nav_about: "About Me",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_contact: "Contact",
    theme_toggle: "Dark Mode",
    lang_switch: "DE",
    footer_links: "Information",
    link_impressum: "Legal Notice",
    link_datenschutz: "Privacy Policy",
    link_agb: "Terms and Conditions",
    link_wiederruf: "Cancellation Policy",
    footer_copyright: "© 2024 Isabell Bader. All rights reserved.",
    hero_h1: "DIGITAL TOOLS FOR YOUR CRAFTSMANSHIP.",
    hero_p: "From analog practice to the digital web: Websites that work.",
    btn_services: "View Services",
    home_h1: "Digital Presence for Crafts & Automotive.",
    home_p: "Websites that build trust and bring in customers.",
    btn_contact: "Request Project &rarr;",
    preview_about: "About Me",
    preview_about_desc: "Craftsmanship meets web development: Learn why my background is my greatest strength.",
    btn_more_info: "Learn more",
    preview_services: "Services",
    preview_services_desc: "Technology, design, and SEO from one source – for businesses that want more than just 'pretty'.",
    btn_view_services: "View Services",
    preview_portfolio: "Portfolio",
    preview_portfolio_desc: "Projects that make an impact. A look at my previous work.",
    btn_view_portfolio: "See my work",
    angebot_hero_title: "A website that builds trust and simplifies inquiries",
    angebot_hero_subtitle: "Your website is the first point of contact between you and potential customers. Within seconds, visitors decide whether to trust you.",
    service_design_title: "Design that builds trust",
    service_design_description: "A professional first impression and easy contact options often decide whether visitors reach out or move on.",
    service_list_title: "What's included:",
    service_list_item_1: "Individual design tailored to your business",
    service_list_item_2: "Optimized for smartphones, tablets, and desktops",
    service_list_item_3: "Clear and intuitive user navigation",
    service_list_item_4: "Strategically placed contact options",
    service_speed_title: "Fast access on every device",
    service_speed_description: "Today's visitors expect fast loading times and reliable performance, especially on the go.",
    service_list_item_5: "Optimized image formats for fast loading",
    service_list_item_6: "Clean and modern technical implementation",
    service_list_item_7: "Good visibility on Google",
    service_efficiency_title: "Less effort, more inquiries",
    service_efficiency_description: "A website should not just inform; it should take work off your hands in everyday life.",
    service_list_item_8: "Contact forms with validation",
    service_list_item_9: "Online appointment booking upon request",
    service_list_item_10: "Structured inquiry forwarding",
    service_offer_title: "Post-project support",
    service_offer_description: "You decide how much support you need after completion.",
    service_option_a_title: "Option A: Creation including support",
    service_option_a_description: "I handle hosting, updates, backups, and technical maintenance. You don't have to worry about a thing.",
    service_option_b_title: "Option B: One-time creation",
    service_option_b_description: "After completion, you take over hosting and management yourself. Naturally, you receive an introduction so you can make smaller changes independently.",
    about_hero_title: "I didn't start in the digital world – but that's exactly my greatest strength today.",
    about_lead: "From the riding arena to the digital world: Why I build websites today that truly help craft and automotive businesses grow.",
    about_text_1: "As a self-employed riding instructor, I learned firsthand: good work alone is often not enough. If you aren't visible, you lose to those who market themselves better – even if their quality is lower. People need to build trust before they pick up the phone.",
    about_text_2: "What began as a solution to my own challenge became my mission: helping companies make their strengths clear, understandable, and professionally visible.",
    about_quote: "Websites that should do more than just look good. They should create trust and turn prospects into customers.",
    about_expertise_title: "Pedagogy & Sociology meet digital implementation",
    about_expertise_description: "My studies in pedagogy and sociology significantly influence my working method. It's not about \"pretty design\", but the question: <strong>How do people perceive information?</strong>",
    about_expertise_description_2: "I translate complex topics into logical structures so visitors can orient themselves immediately and make decisions. This combination of practical self-employment and academic structural understanding is the core of my work.",
    portfolio_titel: "Selected Projects",
    portfolio_lead: "Here I show how I translate individual requirements into functional, aesthetic web appearances.",
    portfolio_project_1_title: "Bader Riding Lessons",
    portfolio_project_1_challenge: "Challenge:",
    portfolio_project_1_solution: "Solution:",
    portfolio_project_1_cta: "View website",
    portfolio_project_2_title: "Bader Auto Repair",
    portfolio_project_2_challenge: "Challenge:",
    portfolio_project_2_solution: "Solution:",
    portfolio_project_2_cta: "View website",
    contact_hero_title: "Let's talk about your project.",
    contact_hero_subtitle: "I look forward to getting to know you and your business. Let's find out together how I can support you.",
    contact_info_p: "Do you have questions or would you prefer to get in touch via email? Just send me a message.",
    contact_info_email: "Email:",
    contact_info_telefon: "Phone number:",
    contact_info_hours: "I respond to inquiries on weekdays within 24 hours.",
    contact_form_h2: "Appointment or inquiry",
    contact_form_name: "Name",
    contact_form_email: "Email",
    contact_form_telefon: "Phone number (optional)",
    contact_form_topic: "Subject",
    contact_form_topic_anfrage: "General inquiry / Request for callback",
    contact_form_topic_termin: "Book appointment for initial consultation",
    contact_form_message: "Message",
    contact_form_submit: "Send",
    form_success: "Thank you! I have received your message.",
    form_error: "Oops, something went wrong.",
    }   
};

const langSwitch = document.getElementById('lang-switch');

langSwitch.addEventListener('click', () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'de' ? 'en' : 'de';
    
    document.documentElement.lang = newLang;
    langSwitch.textContent = newLang === 'de' ? 'EN' : 'DE';
    
    // Texte aktualisieren
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[newLang][key]) {
            element.innerHTML = translations[newLang][key];
        }
    });
});

// Kontaktformular
const form = document.querySelector(".contact-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.createElement("p");
  form.appendChild(status);
  
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = translations[lang].form_success;
      form.reset();
    } else {
      status.innerHTML = translations[lang].form_error;
    }
  });
}
form.addEventListener("submit", handleSubmit);