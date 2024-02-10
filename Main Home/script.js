document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".b1"); // Selecting the existing search button
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.classList.add('suggestions');
    searchBar.after(suggestionsContainer); // Adding suggestions container after the search button

    const suggestions = [
        "Carpainter",
        "Automobile Mechanic",
        "Wall Painters",
        "Construction Worker",
        "Farmer Labour",
        "Plumbers",
        "Electrician"
    ];

    // Function to display suggestions based on user input
    function displaySuggestions(input) {
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().includes(input.toLowerCase())
        );

        const html = filteredSuggestions.map(suggestion =>
            `<div class="suggestion">${suggestion}</div>`
        ).join('');

        suggestionsContainer.innerHTML = html;
    }

    // Event listener for input in the search bar
    searchBar.addEventListener("input", function () {
        const userInput = this.textContent;
        if (userInput.trim() !== '') {
            suggestionsContainer.style.display = "block";
            displaySuggestions(userInput);
        } else {
            suggestionsContainer.style.display = "none";
        }
    });

    // Hide suggestions when user clicks outside the search bar
    document.addEventListener("click", function (event) {
        if (!searchBar.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.style.display = "none";
        }
    });

    // Event listener for clicking on a suggestion
    suggestionsContainer.addEventListener("click", function (event) {
        if (event.target.classList.contains("suggestion")) {
            searchBar.textContent = event.target.textContent;
            suggestionsContainer.style.display = "none";
        }
    });
});
