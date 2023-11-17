let coffeeAdded = [];
const coffees = [
    { id: 1, name: "Light City", roast: "Light", price:"25"},
    { id: 2, name: "Half City", roast: "Light", price:"30"},
    { id: 3, name: "Cinnamon", roast: "Light", price:"15"},
    { id: 4, name: "City", roast: "Medium", price:"7"},
    { id: 5, name: "American", roast: "Medium", price:"1"},
    { id: 6, name: "Breakfast", roast: "Medium", price:"10"},
    { id: 7, name: "High", roast: "Dark", price:"15"},
    { id: 8, name: "Continental", roast: "Dark", price:"10"},
    { id: 9, name: "New Orleans", roast: "Dark", price:"40"},
    { id: 10, name: "European", roast: "Dark", price:"45"},
    { id: 11, name: "Espresso", roast: "Dark", price:"2000"},
    { id: 12, name: "Viennese", roast: "Dark", price:"15"},
    { id: 13, name: "Italian", roast: "Dark", price:"25"},
    { id: 14, name: "French", roast: "Dark", price:"25"},
];




const checkOut = document.querySelector('.added')
const hrDisplay = document.querySelector('.toggle')
// coffee card element
const createCoffeeElement = (coffee) => {
    let coffeeElement = document.createElement("div");
    coffeeElement.classList.add("card");
    coffeeElement.innerHTML = `
        <img src="img/A-Comprehensive-Guide-to-Ethiopian-Coffee-Peach-Coffee-Roasters-22427854.webp" class="card-img-top" alt="...">
        <div>${coffee.name}</div>
        <hr class="cardhr">
        <div>${coffee.roast} Roast</div>
        <hr class="cardhr">
        <div>$${coffee.price}</div>
        <hr class="cardhr">
        <br>
        <button class="addBtn"><em>Add me</em></button>
    `;

    // add event listener here
    const addBtn = coffeeElement.querySelector('.addBtn');
    addBtn.addEventListener('click', e=>{
        createFavCoffeeElement(coffee);
        hrDisplay.classList.remove('toggle')
    })
    return coffeeElement;
};

const renderCoffees = (coffees, target) => {
    // Clear container before inserting new coffee cards
    target.innerHTML = "";
    for (let i = 0; i < coffees.length; i++) {
        const coffeeElement = createCoffeeElement(coffees[i]);
        target.appendChild(coffeeElement);
    }
};

//search input for coffees
const updateCoffees = (coffees, roastValue) =>{
    const searchValue = searchInput.value.toLowerCase();
    const coffeeContainer = document.querySelector('#coffeeContainer');
    coffeeContainer.innerHTML = ''; // Clear previous results
    // Filter coffees array based on the search input
    const filteredCoffees = coffees.filter( coffee => {
        if (!searchValue) {
            return true;
        }
        return coffee.name.toLowerCase().includes(searchValue) || coffee.roast.toLowerCase().includes(searchValue)
    }).filter(coffee => {
        if(!roastValue) {
            return true;
        }
        return coffee.roast.toLowerCase() === roastValue.toLowerCase();
    });
    // Display singular coffee card
    renderCoffees(filteredCoffees, coffeeContainer);
}

const createFavCoffeeElement = (coffee) => {
    const favCoffeeElement = document.createElement('div');
    favCoffeeElement.classList.add('card');
    favCoffeeElement.innerHTML = `
        <img src="img/A-Comprehensive-Guide-to-Ethiopian-Coffee-Peach-Coffee-Roasters-22427854.webp" class="card-img-top" alt="...">
        <div>${coffee.name}</div>
        <hr class="cardhr">
        <div>${coffee.roast} Roast</div>
        <hr class="cardhr">
        <div>$${coffee.price}</div>
        <hr class="cardhr">    
        <br>
        <a href="#" class="remove-link"><em>Remove</em></a>
    `;
    const favCoffeesContainer = document.querySelector('.added');
    favCoffeesContainer.appendChild(favCoffeeElement);
    const removeLink = favCoffeeElement.querySelector('.remove-link');

    removeLink.addEventListener('click',  (event) => {
        // Handle the removal logic here
        event.preventDefault(); // Prevent the default behavior of the anchor element
        // Handle the removal logic here
        favCoffeeElement.remove();
        hrDisplay.classList.add('toggle')
    });
}
console.log(coffeeAdded.length)
window.addEventListener('scroll', function() {
    var inputElement = document.getElementById('searchInput');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 75) {
        inputElement.classList.add('fixed');
    } else {
        inputElement.classList.remove('fixed');
    }
});

(()=>{
    updateCoffees(coffees);
    const dropdown = document.querySelector('.custom-dropdown');
    dropdown.addEventListener('click',  () => {
        dropdown.classList.toggle('open');
    });
    const options = document.querySelectorAll('.options li');
    options.forEach(function (option) {
        option.addEventListener('click',  () => {
            const selectedOption = option.textContent;
            document.querySelector('.selected-option').textContent = selectedOption;
            dropdown.classList.remove('open');
            const dropdown1 = document.querySelector(".dropdown")
            const changemypiclight = document.querySelector("#light")
            const changemypicmedium = document.querySelector("#medium")
            const changemypicdark = document.querySelector("#dark")

            if (option === changemypiclight) {
                // Set the background image of the dropdown
                dropdown1.style.backgroundImage = 'url("/img/6DFF66DF-8D4B-4616-BBB9-820D26FE16A4_27b13bc2-7e35-4951-a350-4b2579129b5a.webp")'; // Replace with your image path
                dropdown1.style.backgroundSize = "cover";
                dropdown1.style.backgroundRepeat = 'no-repeat';
                dropdown1.style.color = "#FCE8C6"

            }
            else if (option === changemypicmedium){
                dropdown1.style.backgroundImage = 'url("/img/Roasted-coffee-beans.jpg")'; // Replace with your image path
                dropdown1.style.backgroundSize = "cover";
                dropdown1.style.backgroundRepeat = 'no-repeat';
                dropdown1.style.color = "#FCE8C6"
            }
            else if (option === changemypicdark) {
                dropdown1.style.backgroundImage = 'url("/img/dark-roast-coffee.jpg")'; // Replace with your image path
                dropdown1.style.backgroundSize = "cover";
                dropdown1.style.backgroundRepeat = 'no-repeat';
                dropdown1.style.color = "#FCE8C6"
            }
            else {
                // Reset background image for other options
                dropdownq.style.backgroundImage = 'none';
            }
            updateCoffees(coffees, selectedOption);
        });
    });
    // anchor is being pulling from innerhtml on line 81
    const addMe = document.querySelectorAll('a')
    const searchInput = document.querySelector("#searchInput");
    const coffeeContainer = document.querySelector('#coffeeContainer');

    searchInput.addEventListener("input", e => {
        updateCoffees(coffees);
    });
})();