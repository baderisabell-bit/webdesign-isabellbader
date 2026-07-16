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
        link_wiederruf: "Zahlung und Versand",
        footer_copyright: "© 2024 Isabell Bader. Alle Rechte vorbehalten.",
        hero_h1: "AUS LEIDENSCHAFT FÜR GUTES HANDWERK",
        hero_p: "Webdesign für Betriebe, die online genauso professionell auftreten möchten wie bei ihrer täglichen Arbeit.",
        btn_services: "Leistungen ansehen",
        home_h1: "Digitale Präsenz für DEINE Leidenschaft",
        home_p: "Authentizität, die Vertrauen aufbauen und die Menschen anspricht, die deine Leidenschaft teilen.",
        btn_contact: "Projekt anfragen &rarr;",
        preview_about: "Mehr als Webdesign",
        preview_about_desc: "Meine Wurzeln im Handwerk machen den Unterschied.",
        btn_more_info: "Mehr erfahren",
        preview_services: "Leistungen",
        preview_services_desc: "Professionelles Webdesign, das deinen Betrieb in der Region sichtbar macht.",
        btn_view_services: "Leistungen ansehen",
        preview_portfolio: "Portfolio",
        preview_portfolio_desc: "Projekte, die wirken. Ein Einblick in meine bisherige Arbeit.",
        btn_view_portfolio: "Arbeiten zeigen",
        angebot_hero_title: "Eine Website, die Vertrauen schafft und Anfragen erleichtert",
        angebot_hero_subtitle: "Deine Website ist oft der erste Kontakt zwischen deinem Unternehmen und potenziellen Kunden. Innerhalb weniger Sekunden entscheiden Besucher, ob sie Vertrauen aufbauen und ob sie den nächsten Schritt gehen.",
        angebot_hero_subtitle_1: "Ich entwickle professionelle Websites für Unternehmen, Selbstständige und lokale Betriebe, die ihre Stärken sichtbar machen, professionell auftreten und ihren Kunden die Kontaktaufnahme erleichtern möchten.",
        service_design_title: "Professionelles Design, das dein Unternehmen widerspiegelt",
        service_design_description: "Eine erfolgreiche Website sieht nicht nur gut aus. Sie zeigt, wofür dein Unternehmen steht, vermittelt Vertrauen und schafft einen professionellen ersten Eindruck.",
        service_list_title: "Das ist enthalten:",
        service_list_item_1: "Individuelles Design passend zu deinem Unternehmen",
        service_list_item_2: "Klare Struktur und intuitive Nutzerführung",
        service_list_item_3: "Optimale Darstellung auf Smartphone, Tablet und Desktop",
        service_list_item_4: "Strategisch platzierte Kontaktmöglichkeiten",
        service_speed_title: "Eine schnelle und zuverlässige Website-Erfahrung",
        service_speed_description: "Besucher erwarten heute Websites, die schnell laden und zuverlässig funktionieren, besonders unterwegs auf dem Smartphone.",
        service_list_item_5: "Optimierte Bildformate für schnelle Ladezeiten",
        service_list_item_6: "Saubere und moderne technische Umsetzung",
        service_list_item_7: "Technische Grundlage für bessere Auffindbarkeit bei Google",
        service_efficiency_title: "Eine Website, die deinen Alltag unterstützt",
        service_efficiency_description: "Deine Website sollte nicht nur informieren. Sie soll deinen Kunden den Kontakt erleichtern und dir im Arbeitsalltag Zeit sparen.",
        service_list_item_8: "Kontaktformulare",
        service_list_item_9: "Online Terminbuchung auf Wunsch",
        service_list_item_10: "Strukturierte Weiterleitung von Anfragen",
        service_list_item_11: "Individuelle Lösungen passend zu deinen Anforderungen",
        service_offer_title: "Unterstützung über den Website-Start hinaus",
        service_offer_description: "Du entscheidest selbst, wie viel Unterstützung du nach der Fertigstellung möchtest.",
        service_option_a_title: "Option A: Erstellung inklusive Betreuung",
        service_option_a_description: "Ich übernehme Hosting, Updates, Backups und die technische Wartung. Du kannst dich auf dein Unternehmen konzentrieren, während ich mich um die Technik kümmere.",
        service_option_b_title: "Option B: Einmalige Erstellung",
        service_option_b_description: "Nach der Fertigstellung verwaltest du deine Website selbst.",
        about_hero_title: "AUS DER PRAXIS. MIT VERSTÄNDNIS FÜR DIGITALE LÖSUNGEN.",
        about_lead: "Vom Reitplatz in die digitale Welt: Warum ich heute Websites baue, die Handwerk und Kfz-Betriebe wirklich weiterbringen.",
        about_text_1: "Vom Reitplatz zur Webentwicklung: Mein Weg hat mir gezeigt, dass gute Arbeit allein nicht immer ausreicht. Auch die besten Leistungen bleiben unsichtbar, wenn Menschen sie online nicht finden oder nicht auf Anhieb Vertrauen aufbauen können.",
        about_text_2: "Als selbstständige Reitlehrerin habe ich selbst erlebt, wie entscheidend Sichtbarkeit und eine klare Kommunikation sind. Nicht derjenige mit der besten Arbeit wird automatisch gewählt – sondern oft der, der sein Angebot verständlich und überzeugend präsentiert.",
        about_text_3: "Was zunächst eine Lösung für meine eigene Herausforderung war, wurde zu meiner Aufgabe: Unternehmen dabei zu unterstützen, ihre Stärken sichtbar zu machen – mit Websites, die Vertrauen schaffen und echte Anfragen generieren.",
        about_quote: "Websites sollen nicht nur gut aussehen. Sie sollen zeigen, wofür ein Unternehmen steht, Orientierung geben und den ersten Schritt zum Kunden erleichtern.",
        about_expertise_title: "Pädagogik & Soziologie trifft digitale Umsetzung",
        about_expertise_description: "Mein Studium der Pädagogik und Soziologie beeinflusst meine Arbeit bis heute. Bei gutem Webdesign geht es nicht nur um Farben, Schriften und moderne Optik – sondern vor allem darum, wie Menschen Informationen aufnehmen und Entscheidungen treffen.",
        about_expertise_description_2: "Ich entwickle Strukturen, die komplexe Inhalte verständlich machen und Besucher gezielt durch eine Website führen. Die Verbindung aus praktischer Selbstständigkeit, psychologischem Verständnis und digitaler Umsetzung bildet die Grundlage meiner Arbeit.",
        portfolio_titel: "Ausgewählte Projekte",
        portfolio_lead: "Jede Website entsteht mit einem klaren Ziel: Unternehmen professionell sichtbar zu machen, Vertrauen aufzubauen und Besuchern die Kontaktaufnahme so einfach wie möglich zu machen.",
        portfolio_project_1_title: "Website für Reitunterricht",
        portfolio_project_1_description: "Von der eigenen Herausforderung zur digitalen Lösung",
        portfolio_project_1_challenge: "Die Herausforderung: </strong> Eine persönliche Website, die Vertrauen schafft, die Atmosphäre des Reitunterrichts widerspiegelt und Interessenten schnell die wichtigsten Informationen vermittelt.",
        portfolio_project_1_solution: "Die Lösung: </strong> Ein harmonisches Design, das Persönlichkeit und Klarheit verbindet. Übersichtlich strukturierte Inhalte, einfache Kontaktmöglichkeiten und eine benutzerfreundliche Terminorganisation unterstützen den gesamten Ablauf.",
        portfolio_project_1_cta: "Website ansehen",
        portfolio_project_2_title: "Website für eine KFZ-Werkstatt",
        portfolio_project_2_description: "Konzeptprojekt – Beispielwebsite für einen KFZ-Betrieb",
        portfolio_project_2_challenge: "Die Herausforderung: </strong> Eine übersichtliche und zuverlässige Website, die Kompetenz vermittelt und Kunden schnell zu den wichtigsten Informationen führt.",
        portfolio_project_2_solution: "Die Lösung: </strong> Eine klare Struktur mit Fokus auf Nutzerfreundlichkeit: Leistungen, Kontaktmöglichkeiten, Öffnungszeiten und wichtige Informationen sind schnell erreichbar, auch unterwegs über das Smartphone.",
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

        legal_impressum: "Impressum",
        legal_provider: "Gesetzliche Anbieterkennung",
        legal_phone: "Telefon",
        legal_email: "E-Mail",
        legal_whatsapp: "WhatsApp",

        legal_datenschutz: "Datenschutzerklärung",
        legal_datenschutz_text1: "Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch für einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorgängen keine anderweitige Angabe gemacht wird.",
        legal_datenschutz_text2: "\"Personenbezogene Daten\" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",
        legal_server_logfiles: "Server-Logfiles",
        legal_server_logfiles_text1: "Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen.",
        legal_server_logfiles_text2: "Bei jedem Zugriff auf unsere Website werden an uns oder unseren Webhoster / IT-Dienstleister Nutzungsdaten durch Ihren Internet Browser übermittelt und in Protokolldaten (sog. Server-Logfiles) gespeichert.",
        legal_server_logfiles_text3: "Zu diesen gespeicherten Daten gehören z.B. der Name der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, die IP-Adresse, die übertragene Datenmenge und der anfragende Provider.",
        legal_server_logfiles_text4: "Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Gewährleistung eines störungsfreien Betriebs unserer Website sowie zur Verbesserung unseres Angebotes.",
        legal_contact: "Kontakt",
        legal_responsible: "Verantwortlicher",
        legal_responsible_text: "Kontaktieren Sie uns auf Wunsch. Verantwortlicher für die Datenverarbeitung ist:",
        legal_phone: "Telefon",
        legal_email: "E-Mail",
        legal_initiative: "Initiativ-Kontaktaufnahme des Kunden per E-Mail",
        legal_initiative_text: "Wenn Sie per E-Mail initiativ mit uns in Geschäftskontakt treten, erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage.",
        legal_initiative_text2: "Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_initiative_text3: "Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage.",
        legal_initiative_text4: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_contact_form: "Erhebung und Verarbeitung bei Nutzung des Kontaktformulars",
        legal_contact_form_text: "Bei der Nutzung des Kontaktformulars erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient dem Zweck der Kontaktaufnahme.",
        legal_contact_form_text2: "Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_contact_form_text3: "Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage.",
        legal_contact_form_text4: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_revocation: "Erhebung und Verarbeitung bei Nutzung des Widerrufsbuttons",
        legal_revocation_text1: "Wenn Sie einen Vertrag über unsere Onlinepräsenz abgeschlossen haben, stellen wir Ihnen eine Widerrufsfunktion (Widerrufsbutton) zur Verfügung, über welche Sie Ihre Widerrufserklärung unmittelbar abgeben können.",
        legal_revocation_text2: "Bei der Nutzung der Widerrufsfunktion erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Angabe zur Identifizierung des Vertrages oder Vertragsteils, den Sie widerrufen möchten sowie den Zeitpunkt (Datum und Uhrzeit) der Absendung der Widerrufserklärung) nur in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_revocation_text3: "Die Datenverarbeitung dient dem Zweck, Ihnen die gesetzlich vorgeschriebene Möglichkeit zum Widerruf Ihres Vertrages zur Verfügung zu stellen sowie der ordnungsgemäßen Bearbeitung Ihres Widerrufes.",
        legal_revocation_text4: "Wenn die Kontaktaufnahme einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_revocation_text5: "Ansonsten erfolgt die Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO, zur Erfüllung einer rechtlichen Verpflichtung Ihnen eine Widerrufsfunktion auf unserer Onlinepräsenz zur Verfügung zu stellen.",
        legal_revocation_text6: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Widerrufserklärung. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_revocation_text7: "Die Verarbeitung Ihrer personenbezogenen Daten dient dem Zweck, die gesetzlichen Anforderungen an die Gestaltung der Widerrufsfunktion rechtssicher zu erfüllen und erfolgt auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO.",
        legal_revocation_text8: "Diese Datenverarbeitung erfolgt außerdem auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse Ihnen eine benutzerfreundliche Widerrufsmöglichkeit zur Verfügung stellen zu können.",
        legal_termination: "Erhebung und Verarbeitung bei Nutzung des Kündigungsbuttons",
        legal_termination_text1: "Wenn Sie einen über unsere Onlinepräsenz abgeschlossenen Abonnement-Vertrag über die gesetzlich vorgeschriebene Kündigungsschaltfläche („Kündigungsbutton“) kündigen, verarbeiten wir dabei die von Ihnen in der Bestätigungsmaske eingegebenen Daten.",
        legal_termination_text2: "Bei der Nutzung der Kündigungsschaltfläche erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, gegebenenfalls Ihre Telefonnummer, Angaben zur Identifizierung des Vertrages, den Sie kündigen möchten sowie den Zeitpunkt (Datum und Uhrzeit) der Absendung der Kündigungserklärung) nur in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_termination_text3: "Die Datenverarbeitung dient dem Zweck, Ihnen die gesetzlich vorgeschriebene Möglichkeit zur Kündigung Ihres Dauerschuldverhältnisses zur Verfügung zu stellen sowie der ordnungsgemäßen Bearbeitung Ihrer Kündigung.",
        legal_termination_text4: "Wenn die Kontaktaufnahme einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_termination_text5: "Ansonsten erfolgt die Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. c DSGVO, da wir gesetzlich dazu verpflichtet sind, Ihnen eine Kündigungsschaltfläche auf unserer Onlinepräsenz zur Verfügung zu stellen.",
        legal_termination_text6: "Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Kündigungserklärung. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_images: "Erhebung und Verarbeitung bei Zusendung von Bildern per E-Mail",
        legal_images_text1: "Sie haben die Möglichkeit, uns Bilder per E-Mail zukommen zu lassen im Zusammenhang mit der Bestellung eines personalisierten Produktes.",
        legal_images_text2: "Mit Übermittlung Ihrer Bilder erheben wir ggf. Ihre personenbezogenen Daten (Abbildung einer identifizierbarer Personen) nur in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_images_text3: "Die Datenverarbeitung dient dem Zweck personalisierte Produkte zu erstellen. Das übersandte Bild dient hierbei als Vorlage für das Produkt und wird dafür verwendet (bspw. T-Shirt Druck).",
        legal_images_text4: "Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO und ist für die Erfüllung eines Vertrags mit Ihnen erforderlich.",
        legal_images_text5: "Eine Weitergabe Ihrer Daten erfolgt nicht.",
        legal_images_text6: "Das von Ihnen übersandte Bild nutzen wir nur im Rahmen der Leistungserbringung. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_whatsapp: "WhatsApp Business",
        legal_whatsapp_text1: "Wenn Sie per WhatsApp mit uns in Geschäftskontakt treten, nutzen wir hierfür die Version WhatsApp Business der WhatsApp Ireland Limited (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland; “WhatsApp”).",
        legal_whatsapp_text2: "Soweit Sie Ihren Aufenthalt außerhalb des Europäischen Wirtschaftsraumes haben, wird dieser Dienst durch die WhatsApp Inc. (1601 Willow Road, Menlo Park, CA 94025, USA) bereitgestellt.",
        legal_whatsapp_text3: "Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage.",
        legal_whatsapp_text4: "Zu diesem Zweck erheben und verarbeiten wir Ihre bei WhatsApp hinterlegte Mobilfunknummer, falls bereitgestellt Ihren Namen sowie weitere Daten in dem von Ihnen zur Verfügung gestellten Umfang.",
        legal_whatsapp_continuation: "WhatsApp Business (Fortsetzung)",
        legal_whatsapp_continuation_text1: "Wir verwenden für den Dienst ein mobiles Endgerät, in dessen Adressbuch ausschließlich Daten von Nutzern gespeichert sind, die uns über WhatsApp kontaktiert haben. Eine Weitergabe personenbezogener Daten an WhatsApp, ohne dass Sie hierin bereits gegenüber WhatsApp eingewilligt haben, erfolgt damit nicht.",
        legal_whatsapp_continuation_text2: "Ihre Daten werden von WhatsApp an Server der Meta Platforms Inc. in den USA übermittelt. Für die USA ist ein Angemessenheitsbeschluss der EU-Kommission vorhanden, das Trans-Atlantic Data Privacy Framework (TADPF).",
        legal_whatsapp_continuation_text3: "Meta Platforms Inc. hat sich nach dem TADPF zertifiziert und damit verpflichtet, europäische Datenschutzgrundsätze einzuhalten.",
        legal_whatsapp_continuation_text4: "Wenn die Kontaktaufnahme der Durchführung vorvertraglicher Maßnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO.",
        legal_whatsapp_continuation_text5: "Erfolgt die Kontaktaufnahme aus anderen Gründen, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse am Bereitstellen einer schnellen und einfachen Kontaktaufnahme sowie an der Beantwortung Ihrer Anfrage.",
        legal_whatsapp_continuation_text6: "Ihre personenbezogenen Daten nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschließend unter Beachtung gesetzlicher Aufbewahrungsfristen gelöscht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.",
        legal_whatsapp_continuation_text7: "Nähere Informationen zu Nutzungsbedingungen und Datenschutz bei Nutzung von WhatsApp finden Sie unter:"
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
    link_wiederruf: "Payment and Shipping",
    footer_copyright: "© 2024 Isabell Bader. All rights reserved.",
    hero_h1: "CRAFTED WITH PASSION. DESIGNED FOR YOUR SUCCESS.",
    hero_p: "Web design for businesses that want to stand out online with authenticity, professionalism, and purpose.",
    btn_services: "View Services",
    home_h1: "Digital Presence for YOUR Passion",
    home_p: "Authenticity that builds trust and reaches people who share your passion.",
    btn_contact: "Request Project &rarr;",
    preview_about: "More than just web design",
    preview_about_desc: "My roots in craftsmanship make the difference.",
    btn_more_info: "Learn more",
    preview_services: "Services",
    preview_services_desc: "Professional web design that makes your business visible in your local area.",
    btn_view_services: "View Services",
    preview_portfolio: "Portfolio",
    preview_portfolio_desc: "Projects that make an impact. A look at my previous work.",
    btn_view_portfolio: "See my work",
    angebot_hero_title: "A website that builds trust and simplifies inquiries",
    angebot_hero_subtitle: "Your website is often the first point of contact between your business and potential customers. Within just a few seconds, visitors decide whether they trust your company and whether they want to take the next step.",
    angebot_hero_subtitle_1: "I create professional websites for businesses, self-employed professionals, and local companies that want to present themselves clearly, build trust, and make it easier for customers to get in touch.",
    service_design_title: "Professional design that reflects your business",
    service_design_description: "A successful website does more than look good. It communicates your values, showcases your strengths, and creates a professional first impression.",
    service_list_title: "What's included:",
    service_list_item_1: "Individual design tailored to your business",
    service_list_item_2: "Clear structure and intuitive user experience",
    service_list_item_3: "Optimised display on smartphones, tablets, and desktops",
    service_list_item_4: "Strategically placed contact options",
    service_speed_title: "A fast and reliable website experience",
    service_speed_description: "Visitors expect websites to load quickly and work smoothly, especially when browsing on mobile devices.",
    service_list_item_5: "Optimised images for faster loading times",
    service_list_item_6: "Clean and modern technical implementation",
    service_list_item_7: "A strong technical foundation for search engine visibility",
    service_efficiency_title: "A website that supports your everyday business",
    service_efficiency_description: "Your website should do more than provide information. It should make it easier for potential customers to contact you and reduce unnecessary effort in your daily work.",
    service_list_item_8: "Contact forms",
    service_list_item_9: "Online appointment booking if required",
    service_list_item_10: "Clear organisation of customer enquiries",
    service_list_item_11: "Individual solutions tailored to your requirements",
    service_offer_title: "Support beyond the launch",
    service_offer_description: "You decide how much support you would like after your website is completed.",
    service_option_a_title: "Option A: Website creation with ongoing support",
    service_option_a_description: "I take care of hosting, updates, backups, and technical maintenance. You can focus on your business while I handle the technical side.",
    service_option_b_title: "Option B: One-time website creation",
    service_option_b_description: "After completion, you manage your website independently.",
    about_hero_title: "ROOTED IN PRACTICE. DRIVEN BY DIGITAL SOLUTIONS.",
    about_lead: "From the riding arena to the digital world: Why I build websites today that truly help craft and automotive businesses grow.",
    about_text_1: "From the riding arena to web development: my journey has taught me that great work alone is not always enough. Even the best services can remain unseen if people cannot find them online or do not immediately feel trust.",
    about_text_2: "As a self-employed riding instructor, I experienced this challenge myself. Quality matters, but visibility and clear communication often determine who gets chosen. People need to understand a business and build confidence before they decide to get in touch.",
    about_text_3: "What started as a solution to my own challenge became my mission: helping businesses showcase their strengths with websites that build trust, communicate value, and attract the right customers.",
    about_quote: "Websites should do more than simply look good. They should reflect what a business stands for, guide visitors clearly, and make the first step towards becoming a customer easier.",
    about_expertise_title: "Education & Sociology meets Digital Implementation",
    about_expertise_description: "My studies in Education and Sociology have a strong influence on the way I work. Great web design is not only about colours, fonts, and aesthetics. It is about understanding how people perceive information and make decisions.",
    about_expertise_description_2: "I transform complex topics into clear structures that help visitors quickly find their way and understand a business. The combination of hands-on entrepreneurial experience, a deep understanding of people, and digital implementation is at the heart of my work.",
    portfolio_titel: "Selected Projects",
    portfolio_lead: "Here I show how I translate individual requirements into functional, aesthetic web appearances.",
    portfolio_project_1_title: "Website for Riding Lessons",
    portfolio_project_1_description: "A personal challenge turned into a digital solution",
    portfolio_project_1_challenge: "The challenge: </strong> Creating a personal website that builds trust, reflects the atmosphere of the riding lessons, and provides potential customers with all important information at a glance.",
    portfolio_project_1_solution: "The solution: </strong> A welcoming design that combines personality and structure. Clearly organised content, simple contact options, and user-friendly appointment management support both customers and daily operations.",
    portfolio_project_1_cta: "View website",
    portfolio_project_2_title: "Website for an Automotive Workshop",
    portfolio_project_2_description: "Concept project – example website for an automotive workshop",
    portfolio_project_2_challenge: "The challenge: </strong> Creating a clear and reliable website that communicates professionalism and helps customers quickly find the information they need.",
    portfolio_project_2_solution: "The solution: <strong> A user-focused structure where services, contact details, opening hours, and important information are easy to access, especially on mobile devices.",
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

    legal_impressum: "Impressum",
    legal_provider: "Gesetzliche Anbieterkennung",
    legal_phone: "Telefon",
    legal_email: "E-Mail",
    legal_whatsapp: "WhatsApp"
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