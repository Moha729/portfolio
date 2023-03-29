import express from 'express'
const app = express()

app.use(express.static("public"));


import { getPage} from './util/templateEngine.js';


/* 
/home
/cv
/listofprojects
 -/simple_node
 - /thisportfolio
/aboutme
/moreaboutme 
*/

app.get('/', (req, res) => {
const homePageHtmlFile =  getPage({
    pagePath: './public/homepage/homepage.html',
    tabTitle: "Portfolio | Home",
    cssLink: `<link rel="stylesheet" href="./homepage/homepage.css">`,
    div1: 'CV',
    div2: 'Projects',
    div3: 'About me',
    div4: 'contact',
    link1: 'cv',
    link2: 'listofprojects',
    link3: 'aboutme',
    link4: ''
})
    res.send(homePageHtmlFile)
})

app.get('/cv', (req, res) => {
    const cvPageHtmlFile = getPage({
        pagePath: './public/cv/cv.html', 
        tabTitle: "Portfolio | CV",
        cssLink: `<link rel="stylesheet" href="./cv.css">`
    })
    res.send(cvPageHtmlFile)
})

app.get('/listofprojects', (req, res) => {
    const listofprojectsPageHtmlFile = getPage({
        pagePath: './public/listofprojects/listofprojects.html',
        tabTitle: "Portfolio | Projects",
        cssLink: `<link rel="stylesheet" href="./listofprojects.css">`,
        div1: 'Simple NodeJS',
        link1: 'listofprojects/simplenode'
    })
    res.send(listofprojectsPageHtmlFile)
})

app.get('/aboutme', (req, res) =>   {
    const aboutmePageHtmlFile = getPage({
        pagePath: './public/aboutme/aboutme.html', 
        tabTitle: "Portfolio | About me"
    })
    res.send(aboutmePageHtmlFile)
})

//PROJECTS
app.get('/listofprojects/simplenode', (req, res) => {
    const simpleNodePageHtmlFile = getPage({
        pagePath: './public/listofprojects/01_SimpelNode/simpelnode.html',
        tabTitle: "Project | Simple NodeJS"
    })
    res.send(simpleNodePageHtmlFile)
})


app.listen(8080, () => {
    console.log('running on port: 8080')
})