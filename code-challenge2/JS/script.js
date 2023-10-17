//calling event listener function
document.addEventListener("DOMContentLoaded", function () {
    fetchAndListAnimals();
});

let votes = 0;//initializing votes to 0

const fetchAndListAnimals = () => {
    //url fetch list
    fetch("http://localhost:3000/characters")
    //retrieval of data
        .then((response) => response.json())
        .then((data) => {
              //mapping through array
            const animals = data.map((animal) => animal.name);

            const element = document.getElementById("list");
            //creating html list with animal name
            let listHtml = "";

            for (const animal of animals) {
                listHtml += `<li id="${animal}">${animal}</li>`;
            }
            element.innerHTML = listHtml;
            //event listener
            for (const animal of animals) {
                document.getElementById(animal).addEventListener("click", function () {
                    fetchAndListAnimal(animal)
                });
                
            
             }
        })//incase of uncaught errror
        .catch((error) => console.log(error));
};

const fetchAndListAnimal = (input) => {
    fetch("http://localhost:3000/characters")
        .then((response) => response.json())
        .then((data) => {//finds animal matching user input
            const animal = data.find((animal) => animal.name === input);
            console.log(animal)
            document.getElementById("image").src = animal.image;//displays animal image
            document.getElementById("votes").innerHTML = animal.votes;//display number of animal votes

        })
        .catch((error) => console.log(error));
};
// vote event listener
document.getElementById("voteButton").addEventListener("click", function() {
    votes += 1;
    document.getElementById("votes").innerHTML = votes;
});


//resetting votes
document.getElementById("resetButton").addEventListener("click", function() {
    votes = 0;
    document.getElementById("votes").innerHTML = "0";
});


document.getElementById("add-animal-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const animalName = document.getElementById("animalName").value;//name value stored in variable animalName
    const animalImage = document.getElementById("animalImage").value;////image value stored in variable animalImage

    addAnimal(animalName, animalImage);
      
      document.getElementById("animal-name").value = "";
      document.getElementById("animal-image").value = "";//redirects for a new input from user
  });
  
   

  
  //define javascript adding function
 function addAnimal(name, image) {
     const animal = {
         name: name,
         image: image,
         votes: 0
     };
     //fetching
     fetch("http://localhost:3000/characters", {
         method: "POST",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(animal)
     })
         .then(response => response.json())
         .then(data => {
             fetchAndListAnimals();
         })
         .catch(error => console.log(error));
 }
