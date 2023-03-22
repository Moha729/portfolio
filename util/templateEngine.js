import fs from "fs";
import escape from "escape-html";


/* import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); */

function getHomePage(config={}){
    const homePageHtmlFile =  fs.readFileSync('./public/homepage/homepage.html')
        .toString()
        .replace('$TAB_TITLE', config.tabTitle || 'portfolio')

    return homePageHtmlFile
}

function renderPage(page){

}

function isThereConnection(){
    return "there is connection to the templateEngine module"
}

export { isThereConnection, getHomePage }
