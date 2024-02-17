//This project is to present a family tree with some filters 
//that will provide a way to look for family members and 
//specific datas, like: gender, kinship and birthday

// setting the global variable

const familyMember = document.getElementById("member");
//let familyList = [];


//this functions divides each object from the JSON file by sex: female and male.
//I divided to put a different background color for each sex.
//as the objects are divided, it puts it in order and sets all the objects
const displayMembers = (member) => {
    member.forEach(member => {
        let sex = member.sex;
        if (sex === "female"){
            let article = document.createElement("female_article");
            let h3 = document.createElement("h3");
            h3.textContent = member.name;
            let img = document.createElement("img");
            img.src = member.image;
            img.alt = member.name;
            let kinship = document.createElement("h4");
            kinship.textContent = member.kinship.toUpperCase();
            article.appendChild(h3);
            article.appendChild(img);
            article.appendChild(kinship)
            familyMember.appendChild(article);}
        else{
        let article = document.createElement("male_article");
            let h3 = document.createElement("h3");
            h3.textContent = member.name;
            let img = document.createElement("img");
            img.src = member.image;
            img.alt = member.name;
            let kinship = document.createElement("h4");
            kinship.textContent = member.kinship.toUpperCase();
            article.appendChild(h3);
            article.appendChild(img);
            article.appendChild(kinship);
            familyMember.appendChild(article);
    }
    });

}

//This function gets the JSON file and runs it through displayMemebers functions
// after getting its onject into a list.
const getMembers = async () => {
    const response = await fetch("family_list.json");
    
    memberList = await response.json();
    
    displayMembers(memberList);
};


function reset(){
    familyMember.innerHTML = "";
};

//This function makes a filter so the user can choose what type of info he/she wants to display
function filter(member){
    reset();

    const filter = document.getElementById("filtered").value;
    //const direct_family = ["wife","daughter","father","mother"];
    
    switch (filter) {
        case "ladies":
            displayMembers(member.filter(member => member.sex.includes("female")));
            break;

        case "gentlemen":
            displayMembers(member.filter(member => member.sex.includes("man")));
            break;

        case "direct_family":
            displayMembers(member.filter(member => member.kinship.includes("wife")));
            displayMembers(member.filter(member => member.kinship.includes("daughter")));
            displayMembers(member.filter(member => member.kinship.includes("father") && !member.kinship.includes("father-in-law")));
            displayMembers(member.filter(member => member.kinship.includes("mother") && !member.kinship.includes("mother-in-law")));
            displayMembers(member.filter(member => member.kinship.includes("sister") && !member.kinship.includes("sister-in-law")));
            displayMembers(member.filter(member => member.kinship.includes("brother") && !member.kinship.includes("brother-in-law")));
            break;

        case "other_relatives":
            displayMembers(member.filter(member => member.kinship.includes("cousing")));
            displayMembers(member.filter(member => member.kinship.includes("uncle")));
            displayMembers(member.filter(member => member.kinship.includes("aunt")));
            displayMembers(member.filter(member => member.kinship.includes("in-law")));
            break;
        
        case "no_filter":
            displayMembers(member);
            break;

        default:
            break;
    }
}
    

getMembers();

//This is to set an Event. When the event happens, there is an action in response
document.querySelector("#filtered").addEventListener("change", () => {filter(memberList)});