document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    const sections = getSections();

    loadSections(sections, main);
});

function getSections() {
    return [
        { id: 'home', file: 'sections/home.html' },
        { id: 'section_image_1', file: 'sections/section_image_1.html' },
        { id: 'about', file: 'sections/about.html' },
        { id: 'section_image_2', file: 'sections/section_image_2.html' },
        { id: 'faq', file: 'sections/faq.html' },
        { id: 'register', file: 'sections/register.html' },
        { id: 'sponsors', file: 'sections/sponsors.html' },
        { id: 'team', file: 'sections/team.html' },
        { id: 'mentor', file: 'sections/mentor.html' },
        { id: 'contact', file: 'sections/contact.html' }
    ];
}

function loadSections(sections, main) {
    sections.forEach((section, index) => {
        loadSection(section, main, index);
    });
}

function loadSection(section, main, index) {
    fetch(section.file)
        .then(response => response.text())
        .then(content => {
            const sectionElement = createSectionElement(section.id, content);
            main.appendChild(sectionElement);
        })
        .catch(error => console.error(`Error loading section ${index}:`, error));
}

function createSectionElement(id, content) {
    const sectionElement = document.createElement('section');
    sectionElement.id = id;
    sectionElement.innerHTML = content;
    return sectionElement;
}