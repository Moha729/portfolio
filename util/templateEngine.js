import fs from "fs";
import escape from "escape-html";


function getPage(config={}){
    const navbar = fs.readFileSync('./public/components/navbar.html')
    .toString()
    .replace('$TAB_TITLE', config.tabTitle || 'portfolio')
    .replace('$CSS_LINK', config.cssLink || '')

    const page = fs.readFileSync(config.pagePath).toString()
    .replace('$DIV_1', config.div1)
    .replace('$DIV_2', config.div2)
    .replace('$DIV_3', config.div3)
    .replace('$DIV_4', config.div4)
    .replace('$LINK_1', config.link1)
    .replace('$LINK_2', config.link2)
    .replace('$LINK_3', config.link3)
    .replace('$LINK_4', config.link4)

    return  navbar + page
}

export { getPage }
