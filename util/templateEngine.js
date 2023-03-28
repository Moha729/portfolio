import fs from "fs";
import escape from "escape-html";


/* import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); */

function getHomePage(config={}){
    const cssLink = `<link rel="stylesheet" href="./homepage/homepage.css">`


    const homePageHtmlFile =  fs.readFileSync('./public/homepage/homepage.html')
        .toString()
        .replace('$DIV_1', 'CV').replace('$LINK_1', 'cv')
        .replace('$DIV_2', 'Projects').replace('$LINK_2', 'listofprojects')
        .replace('$DIV_3', 'About me').replace('$LINK_3', 'aboutme')
        .replace('$DIV_4', 'Contact').replace('$LINK_4', '')
        //.replace('$TAB_TITLE', config.tabTitle || 'portfolio')

    const navbar = getNavbar({tabTitle: config.tabTitle, cssLink: cssLink})

    return navbar + homePageHtmlFile
}

function getCvPage(config={}){
    const cvPageHtmlFile = fs.readFileSync('./public/cv/cv.html').toString()
    const navbar = getNavbar({tabTitle: config.tabTitle})
    return navbar + cvPageHtmlFile
}

function getListofprojectsPage(config={}){
    const listofprojectsPageHtmlFile = fs.readFileSync('./public/listofprojects/listofprojects.html').toString()
    const navbar = getNavbar({tabTitle: config.tabTitle})
    return navbar + listofprojectsPageHtmlFile
}

function getAboutmePage(config={}){
    const aboutmePageHtmlFile = fs.readFileSync('./public/aboutme/aboutme.html').toString()
    const navbar = getNavbar({tabTitle: config.tabTitle})
    return navbar + aboutmePageHtmlFile
}

function getNavbar(config={}){
    const navbar = fs.readFileSync('./public/components/navbar.html')
    .toString()
    .replace('$TAB_TITLE', config.tabTitle || 'portfolio')
    .replace('$CSS_LINK', config.cssLink || '')

    return navbar
}

function isThereConnection(){
    return "there is connection to the templateEngine module"
}

export { isThereConnection, getHomePage, getCvPage, getListofprojectsPage, getAboutmePage }
