import fs from "fs";
import escape from "escape-html";


/* import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); */

function getHomePage(config={}){
    const homePageHtmlFile =  fs.readFileSync('./public/homepage/homepage.html')
        .toString()
        //.replace('$TAB_TITLE', config.tabTitle || 'portfolio')

    const navbar = getNavbar({tabTitle: config.tabTitle})

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

    return navbar
}

function isThereConnection(){
    return "there is connection to the templateEngine module"
}

export { isThereConnection, getHomePage, getCvPage, getListofprojectsPage, getAboutmePage }
