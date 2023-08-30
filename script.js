import people from './data.js';

// select all the needed areas
const image = document.querySelector('.image');
const name = document.querySelector('.name');
const job = document.querySelector('.job');
const text = document.querySelector('.text');

//select the buttons for sliding and add functions
document.querySelector('.prev-btn').addEventListener('click', showPreviousPerson);
document.querySelector('.next-btn').addEventListener('click', showNextPerson);

//target current Person
let currentPerson = 0;

//show the people on the Dom
displayPerson();

// Function to display a person based on the current index
function displayPerson() {
    const person = people[currentPerson];
    image.src = person.img;
    name.textContent = person.name;
    job.textContent = person.job;
    text.textContent = person.text;
}

//function for previous person
function showPreviousPerson(){
currentPerson --;
if(currentPerson < 0){
    currentPerson = people.length - 1;
}

displayPerson()
}

//function for next person
function showNextPerson(){
    currentPerson ++;
    if(currentPerson === people.length){
        currentPerson = 0;
    }
    displayPerson()
    }



