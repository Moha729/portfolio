const express = require('express')
const getPage = require('./util/templateEngine.js')
const readFile = require('./util/fileReader.js')

const app = express()

app.use(express.static("public"));

const cv_elements = []

const array = readFile('./public/cv/assets/cv_config.json', 'json')



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
        cssLink: `<link rel="stylesheet" href="./cv.css">`,
        jsFile: `<script src="../cv/cv.js" defer></script>`,
        myfullname: 'Mohammad Fadhil Abdul-Mahdi',
        myresidence: '2720 Vanløse',
        myemail: 'moha729@stud.kea.dk',
        mybirthyear: '1990',
        jsondataarray: array
    })
    res.send(cvPageHtmlFile)
})

app.get('/listofprojects', (req, res) => {
    const listofprojectsPageHtmlFile = getPage({
        pagePath: './public/listofprojects/listofprojects.html',
        tabTitle: "Portfolio | Projects",
        cssLink: `<link rel="stylesheet" href="./listofprojects.css">`,
        div1: 'Simple NodeJS',
        link1: 'listofprojects/simplenode',
        div2: 'Home',
        div3: 'Home',
        div4: 'Home',
        link2: '',
        link3: '',
        link4: ''
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

app.get('/listofprojects/simplenode', (req, res) => {
    const simpleNodePageHtmlFile = getPage({
        pagePath: './public/listofprojects/01_SimpelNode/simpelnode.html',
        tabTitle: "Project | Simple NodeJS"
    })
    res.send(simpleNodePageHtmlFile)
})

const port = process.env.PORT || 8080

const server = app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })

  
module.exports =  { app, server };