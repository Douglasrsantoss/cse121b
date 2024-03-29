/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = `Douglas R. Santos`;
let currentYear = 2024;
let profilePicture = ("images/us.png");


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`
imageElement.setAttribute('src', `${profilePicture}`);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let food = ['Hamburger', 'Pizza', 'Salad', 'Rice and Beans'];
foodElement.innerHTML = food;

let anotherFood = 'Ice Cream';
food.push(anotherFood);
foodElement.innerHTML += `<br>${food}`;

food.shift();
foodElement.innerHTML += `<br>${food}`;

food.pop();
foodElement.innerHTML += `<br>${food}`;





