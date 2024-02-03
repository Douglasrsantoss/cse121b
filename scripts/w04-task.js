/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Douglas R. Santos",
    photo: "images/us.jpeg",
    favoriteFood: [
        "French Fries",
        "Sweet Rice",
        "Barbecue",
        "Guacamole"
    ],
    hobbies: [
        "Play guitar",
        "Watch movies",
        "Read",
        "Play with my daughter"
    ],
    placesLived: [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Ponta Porã - MS",
        length: "8 years",

    }
);

myProfile.placesLived.push(
    {
        place: "Campo Grande - MS",
        length: "10 years",
        
    }
);

myProfile.placesLived.push(
    {
        place: "São Paulo - SP",
        length: "2 years",
        
    }
);

myProfile.placesLived.push(
    {
        place: "São José dos Campos - SP",
        length: "5 years",
        
    }
);

myProfile.placesLived.push(
    {
        place: "AgReserves - Unaí - MG",
        length: "2.5 years",
        
    }
);


/* DOM Manipulation - Output */

/* Name */

document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */

document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", "Douglas & family");


/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})


/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let ul = document.createElement("li");
    ul.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(ul);
})


/* Places Lived DataList */
    
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived").append(dt);
    document.querySelector("#places-lived").append(dd);
})








