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

        });
    });


    //coffee arry
    const coffees = [
        { id: 1, name: "Light City", roast: "light" },
        { id: 2, name: "Half City", roast: "light" },
        { id: 3, name: "Cinnamon", roast: "light" },
        { id: 4, name: "City", roast: "medium" },
        { id: 5, name: "American", roast: "medium" },
        { id: 6, name: "Breakfast", roast: "medium" },
        { id: 7, name: "High", roast: "dark" },
        { id: 8, name: "Continental", roast: "dark" },
        { id: 9, name: "New Orleans", roast: "dark" },
        { id: 10, name: "European", roast: "dark" },
        { id: 11, name: "Espresso", roast: "dark" },
        { id: 12, name: "Viennese", roast: "dark" },
        { id: 13, name: "Italian", roast: "dark" },
        { id: 14, name: "French", roast: "dark" },
    ];




});








