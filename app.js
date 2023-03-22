import express from 'express'
const app = express()

/* 
/home
/cv
/listofprojects
 - /thisportfolio
/aboutme
/moreaboutme 
*/

app.get('/', (req, res) => {
    res.send( {message: "insert index.html"} )
})

app.listen(8080, () => {
    console.log('running on port: 8080')
})