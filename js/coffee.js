let coffeeAdded = [];
const coffees = [
    { id: 1, name: "Light City", roast: "Light" },
    { id: 2, name: "Half City", roast: "Light" },
    { id: 3, name: "Cinnamon", roast: "Light" },
    { id: 4, name: "City", roast: "Medium" },
    { id: 5, name: "American", roast: "Medium" },
    { id: 6, name: "Breakfast", roast: "Medium" },
    { id: 7, name: "High", roast: "Dark" },
    { id: 8, name: "Continental", roast: "Dark" },
    { id: 9, name: "New Orleans", roast: "Dark" },
    { id: 10, name: "European", roast: "Dark" },
    { id: 11, name: "Espresso", roast: "Dark" },
    { id: 12, name: "Viennese", roast: "Dark" },
    { id: 13, name: "Italian", roast: "Dark" },
    { id: 14, name: "French", roast: "Dark" },
];


const searchInput = document.querySelector("#searchInput");
const coffeeContainer = document.querySelector('#coffeeContainer');

const createCoffeeElement = (coffee) => {
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
        <img src="img/A-Comprehensive-Guide-to-Ethiopian-Coffee-Peach-Coffee-Roasters-22427854.webp" class="card-img-top" alt="...">
        <div>${coffee.name}</div>
        <hr class="cardhr">
        <div>${coffee.roast} Roast</div>
        <hr class="cardhr">
        <a href="#" class="add"><em>Add me</em></a>
    `;
    return div;
};

const renderCoffees = (coffees, target) => {
    // Clear container before inserting new coffee cards
    target.innerHTML = "";
    for (let i = coffees.length - 1; i >= 0; i--) {
        const coffeeElement = createCoffeeElement(coffees[i]);
        target.appendChild(coffeeElement);
    }
};

const searchCoffee = () =>{
    const searchValue = searchInput.value.toLowerCase();
    coffeeContainer.innerHTML = ''; // Clear previous results

    // Filter coffees array based on the search input
    const filteredCoffee = coffees.filter( coffee =>
        coffee.name.toLowerCase().includes(searchValue) ||
        coffee.roast.toLowerCase().includes(searchValue)
    );

    // Display coffee cards
    filteredCoffee.forEach(coffee => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
         <img src="img/A-Comprehensive-Guide-to-Ethiopian-Coffee-Peach-Coffee-Roasters-22427854.webp" class="card-img-top" alt="...">
        <div>${coffee.name}</div>
        <hr class="cardhr">
        <div>${coffee.roast} Roast</div>
        <hr class="cardhr">
        <a href="#" class="add"><em>Add me</em></a>
        `;
        coffeeContainer.appendChild(card);
    });
}

searchInput.addEventListener("input", searchCoffee);

// Initial display without any search
renderCoffees(coffees, coffeeContainer);




























window.addEventListener('scroll', function() {
    var inputElement = document.getElementById('searchInput');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 75) {
        inputElement.classList.add('fixed');
    } else {
        inputElement.classList.remove('fixed');
    }
});





document.addEventListener('DOMContentLoaded', function () {
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
            } else if (option === changemypicmedium){
                dropdown1.style.backgroundImage = 'url("/img/Roasted-coffee-beans.jpg")'; // Replace with your image path
                dropdown1.style.backgroundSize = "cover";
                dropdown1.style.backgroundRepeat = 'no-repeat';
                dropdown1.style.color = "#FCE8C6"

            } else if (option === changemypicdark) {
                dropdown1.style.backgroundImage = 'url("/img/dark-roast-coffee.jpg")'; // Replace with your image path
                dropdown1.style.backgroundSize = "cover";
                dropdown1.style.backgroundRepeat = 'no-repeat';
                dropdown1.style.color = "#FCE8C6"
            } else {
                // Reset background image for other options
                dropdownq.style.backgroundImage = 'none';
            }
        });
    });
});








