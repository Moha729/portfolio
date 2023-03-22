import express from 'express'
const app = express()

app.use(express.static("public"));


//import templateEngine from '/Users/Dell 7480/Desktop/Portfolio/portfolio/portfolio/public/util/templateEngine.js';
//const templateEngine = require('/public/util/templateEngine.js')
import { isThereConnection, getHomePage } from './util/templateEngine.js';

console.log(isThereConnection());


/* 
/home
/cv
/listofprojects
 - /thisportfolio
/aboutme
/moreaboutme 
*/

app.get('/', (req, res) => {
    //const homePageHtmlFile =  (__dirname + '/public/homepage/homepage.html')
//I want to render the page just.
const homePageHtmlFile =  getHomePage({
    tabTitle: "Portfolio | Home"
})
    res.send(homePageHtmlFile) //{message: "insert index.html"} 
})

app.listen(8080, () => {
    console.log('running on port: 8080')
})