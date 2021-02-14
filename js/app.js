const lineBreak = document.createElement('br');
const breaks = document.createDocumentFragment();
breaks.appendChild(lineBreak);
breaks.appendChild(lineBreak);

// navigation menu
const navItems = ['HOME', 'INTRODUCTION', 'DESCRIPTIVE STATISTICS', 'INFERENTIAL STATISTICS', 'PROGRAMMING', 'SOFTWARE TOOLS'];
const hrefs = ['#', '#section1', '#section2', '#section3', '#section4', '#section5'];
const navList = document.createDocumentFragment();
for (let i = 0; i < navItems.length; i++) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', hrefs[i]);
    anchor.textContent = navItems[i];
    const item = document.createElement('li');
    item.appendChild(anchor);
    navList.appendChild(item);
}
document.getElementById('navbar').appendChild(navList);
document.getElementById('navbar').appendChild(breaks);

// heading
const introductoryText = document.createElement('p');
introductoryText.textContent = 'Welcome To';
const mainHeading = document.createElement('h1');
mainHeading.textContent = 'All About Data';
document.getElementById('heading').appendChild(introductoryText);
document.getElementById('heading').appendChild(mainHeading);
document.getElementById('heading').appendChild(breaks);

// section 1 
const heading = document.createElement('h3');
heading.textContent = 'Introduction';
const intro = document.createElement('p');
intro.textContent = 'Data has become a crucial factor for building knowledge amid the rapid advancements in technology which characterizes the world nowadays. In order to make sense of data one has to understand the patterns and insights hidden within the data. This is where data analysis comes in! Data analysis is an integral part of every successful business and the basis of data science. This website aims to provide helpful materials to aspiring data analysts.';
document.getElementById('section1').appendChild(heading);
document.getElementById('section1').appendChild(intro);
document.getElementById('section1').appendChild(lineBreak);

// section 2
const fragment = document.createDocumentFragment();
const desStats = document.createElement('h3');
desStats.textContent = 'Descriptive Statistics';
const desStatsExp = document.createElement('p');
desStatsExp.textContent = 'To describe data, one has to grasp basic concepts, such as measures of spread! Below is a link explaining multiple concepts related to descriptive statistics:';
const desStatsLink = document.createElement('a');
desStatsLink.setAttribute('href', 'https://conjointly.com/kb/descriptive-statistics/');
desStatsLink.setAttribute('target', '_blank');
desStatsLink.textContent = 'How to describe data?';
fragment.appendChild(desStats);
fragment.appendChild(desStatsExp);
fragment.appendChild(desStatsLink);
document.getElementById('section2').appendChild(fragment);
document.getElementById('section2').appendChild(lineBreak);

// section 3
const fragment2 = document.createDocumentFragment();
const infStats = document.createElement('h3');
infStats.textContent = 'Inferential Statistics';
const infStatsExp = document.createElement('p');
infStatsExp.textContent = 'By learning about inferential statistics, one could master hypothesis testing and other advanced techniques to start making decisions based on data. Below is a link explaining multiple concepts related to inferential statistics:';
const infStatsLink = document.createElement('a');
infStatsLink.setAttribute('href', 'https://conjointly.com/kb/inferential-statistics/');
infStatsLink.setAttribute('target', '_blank');
infStatsLink.textContent = 'How to make inferences based on data?';
fragment2.appendChild(infStats);
fragment2.appendChild(infStatsExp);
fragment2.appendChild(infStatsLink);
document.getElementById('section3').appendChild(fragment2);
document.getElementById('section3').appendChild(lineBreak);

// section 4
const fragment3 = document.createDocumentFragment();
const programming = document.createElement('h3');
programming.textContent = 'Programming';
const programmingExp = document.createElement('p');
programmingExp.textContent = 'Knowing how to analyze data on paper is definitely a major accomplishment, but being able to programmatically analyze larger and more complex datasets will definitely lead to better decision-making. Below are some links to Python and R tutorials:';
const programmingList = document.createElement('ul');
const tutorials = ['Python for data analysis', 'R for data science'];
const tutLinks = ['https://pythonprogramming.net/data-analysis-tutorials/', 'https://r4ds.had.co.nz/'];
for (let i = 0; i < tutLinks.length; i++) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', tutLinks[i]);
    anchor.setAttribute('target', '_blank');
    anchor.textContent = tutorials[i];
    const item = document.createElement('li');
    item.appendChild(anchor);
    programmingList.appendChild(item);
}
fragment3.appendChild(programming);
fragment3.appendChild(programmingExp);
fragment3.appendChild(programmingList);
document.getElementById('section4').appendChild(fragment3);
document.getElementById('section4').appendChild(lineBreak);

// section 5
const fragment4 = document.createDocumentFragment();
const tools = document.createElement('h3');
tools.textContent = 'Software Tools';
const toolsExp = document.createElement('p');
toolsExp.textContent = 'To become a proficient data analyst, you would have to master some of the following tools:';
const toolsLinks = ['https://www.excel-easy.com/', 'https://docs.microsoft.com/en-us/learn/powerplatform/power-bi', 'https://www.tableau.com/learn/training/20203', 'https://www.dataquest.io/blog/jupyter-notebook-tutorial/']
const toolsNames = ['Excel', 'Power Bi', 'Tableau', 'Jupyter Notebook'];
const list = document.createElement('ul');
for (let i = 0; i < toolsLinks.length; i++) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', toolsLinks[i]);
    anchor.setAttribute('target', '_blank');
    anchor.textContent = toolsNames[i];
    const item = document.createElement('li');
    item.appendChild(anchor);
    list.appendChild(item);
}
fragment4.appendChild(tools);
fragment4.appendChild(toolsExp);
fragment4.appendChild(list);
document.getElementById('section5').appendChild(fragment4);
document.getElementById('section5').appendChild(breaks);

// event listeners
function appear(event) {
    event.target.style.borderWidth = "0.2em";
}
function disappear(event) {
    event.target.style.borderWidth = "0.1em";
}
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.addEventListener('mouseenter', appear);
    section.addEventListener('mouseleave', disappear);
});
function clicked(event) {
    event.target.style.color = "#666";
}
function endClick(event) {
    event.target.style.color = "#333";
}
const sectionAnchors = document.querySelectorAll('.section a');
sectionAnchors.forEach(anchor => {
    anchor.addEventListener('mousedown', clicked);
    anchor.addEventListener('mouseup', endClick);
});
function clear(name) {
    const navs = document.querySelectorAll('#navbar a');
    navs.forEach(nav => {
        if (nav.textContent !== name) {
            nav.style.color = '#d2d2d2';
        }
    });
}
function scrollTo(event) {
    event.preventDefault();
    event.target.style.color = 'black';
    switch (event.target.textContent) {
        case 'HOME': document.getElementById('navbar').scrollIntoView({ behavior: 'smooth' , block: 'center'}); clear(event.target.textContent); break;
        case 'INTRODUCTION': document.getElementById('section1').scrollIntoView({ behavior: 'smooth' , block: 'center'}); clear(event.target.textContent); break;
        case 'DESCRIPTIVE STATISTICS': document.getElementById('section2').scrollIntoView({ behavior: 'smooth' , block: 'center'}); clear(event.target.textContent); break;
        case 'INFERENTIAL STATISTICS': document.getElementById('section3').scrollIntoView({ behavior: 'smooth' , block: 'center'}); clear(event.target.textContent); break;
        case 'PROGRAMMING': document.getElementById('section4').scrollIntoView({ behavior: 'smooth' , block: 'center'}); clear(event.target.textContent); break;
        case 'SOFTWARE TOOLS': document.getElementById('section5').scrollIntoView({ behavior: 'smooth' , block: 'center'}); clear(event.target.textContent);
    }
}
const navAnchors = document.querySelectorAll('#navbar a');
navAnchors.forEach(anchor => {
    anchor.addEventListener('click', scrollTo);
});
function isInViewport(component) {
    const bounds = component.getBoundingClientRect();
    if (bounds.x >= 0 && bounds.y >= 0
        && bounds.right <= (window.innerWidth || document.documentElement.clientWidth)
        && bounds.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        return true
    }
    return false;
}
function onScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.style.borderWidth = "0.2em";
            const navs = document.querySelectorAll('#navbar a');
            let found = false;
            if (!found) {
                for (let i = 0; i < navs.length; i++) {
                    const heading = section.querySelector('h3');
                    if (navs[i].textContent === 'INTRODUCTION' && heading == null) {
                        navs[i].style.color = 'black';
                        found = true;
                    }
                    if (heading && navs[i].textContent === heading.textContent.toUpperCase()) {
                        navs[i].style.color = 'black';
                        found = true;
                    } else {
                        navs[i].style.color = '#d2d2d2';
                    }
                }
            }
        } else {
            section.style.borderWidth = "0.1em";
        }
    });
}
window.onscroll = onScroll;