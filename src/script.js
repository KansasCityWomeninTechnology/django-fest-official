async function getSections() {
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

async function loadSections(sections, main) {
    for (let index = 0; index < sections.length; index++) {
        await loadSection(sections[index], main, index);
    }
}

async function loadSection(section, main, index) {
    try {
        const response = await fetch(section.file);
        const content = await response.text();
        const sectionElement = createSectionElement(section.id, content);
        main.appendChild(sectionElement);
    } catch (error) {
        console.error(`Error loading section ${index}:`, error);
    }
}

function createSectionElement(id, content) {
    const sectionElement = document.createElement('section');
    sectionElement.id = id;
    sectionElement.innerHTML = content;
    return sectionElement;
}

const main = document.querySelector('main');
getSections().then(sections => loadSections(sections, main));

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links a');

    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});