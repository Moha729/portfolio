function handleObjects(data){
    // Assume that the data is an array of objects with title and lessons properties
data.forEach((item) => {
// Clone the template
const template = document.getElementById("rubric_template");
const rubric = template.content.cloneNode(true);

// Set the title
const titleElement = rubric.querySelector(".rubric_title");
titleElement.textContent = item.title;

// Set the year
const yearElement = rubric.querySelector(".rubric_year")
yearElement.textContent = item.years

// Set the lessons
const lessonList = rubric.querySelector(".lesson_list");
item.lessons.forEach((lesson) => {
const lessonItem = document.createElement("p");
lessonItem.textContent = lesson;
lessonList.appendChild(lessonItem);
});

// Append the rubric to the container
const container = document.getElementById(item.category);
container.appendChild(rubric);

});

}

/* function readFile () {
    let data = $CV_JSON_DATA_ARRAY

    handleObjects(data)
}

readFile() 



async function main () {

    let data = await readAssetFile('./assets/cv_config.json')

    const objects = Object.values(data) //converted it to array

    handleObjects(objects)
}

//main()

async function readAssetFile (path) {

const response = await fetch(path)
const data = await response.json()
return data
}*/