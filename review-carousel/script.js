let reviews = [
  {
    id: 1,
    name: "Joey",
    job: "Web Developer",
    img: "./images/image1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecatexcepturi commodi vero vitae. Assumenda laudantium commodi quasi eiupariatur",
  },
  {
    id: 2,
    name: "Amy",
    job: "Mobile Developer",
    img: "./images/image2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecatexcepturi commodi vero vitae. Assumenda laudantium commodi quasi eiupariatur",
  },
  {
    id: 3,
    name: "Raj",
    job: "UI Designer",
    img: "./images/image3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecatexcepturi commodi vero vitae. Assumenda laudantium commodi quasi eiupariatur",
  },
  {
    id: 4,
    name: "Alex",
    job: "Web Developer",
    img: "./images/image4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic obcaecatexcepturi commodi vero vitae. Assumenda laudantium commodi quasi eiupariatur",
  },
];

const img = document.getElementById("emp-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const preBtn = document.getElementById("preBtn");
const nextBtn = document.getElementById("nextBtn");

//set items
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

//show details
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//next emp details when click next button
nextBtn.addEventListener("click", () => {
  currentItem++;
  showPerson(currentItem);
});

//previous emp details when click pre button
preBtn.addEventListener("click", () => {
  currentItem--;
  showPerson(currentItem);
});
