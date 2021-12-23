const ageSelector = document.getElementById("age-selector");
const genreSelector = document.getElementById("genre-selector");

const btn = document.getElementById("btn");
const suggestedMovie = document.getElementById("suggested-movie");

btn.addEventListener("click", select);

const moviesArr = [
    {
        name: "Die Hard",
        age: "18+",
        genre: "Action"
    },
    {
        name: "Love Actually",
        age: "18+",
        genre: "Romance"
    },
    {
        name: "The Polar Express",
        age: "PG",
        genre: "Action"
    },
    {
        name: "The Nightmare Before Christmas",
        age: "PG",
        genre: "Romance"
    },
    {
        name: "The Night Before",
        age: "18+",
        genre: "Comedy"
    },
    {
        name: "Home Alone",
        age: "PG",
        genre: "Comedy"
    },
    {
        name: "Carol",
        age: "18+",
        genre: "Drama"
    },
    {
        name: "The Muppet Christmas Carol",
        age: "PG",
        genre: "Drama"
    },
    {
        name: "It's a Wonderful Life",
        age: "18+",
        genre: "Classic"
    },
    {
        name: "How the Grinch Stole Christmas",
        age: "PG",
        genre: "Classic"
    },
    {
        name: "Black Christmas",
        age: "18+",
        genre: "Horror"
    },
    {
        name: "Gremlins",
        age: "PG",
        genre: "Horror"
    }
]

// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

function select() {
    selectedAge = ageSelector.value;
    selectedGenre = genreSelector.value;
    for (let i = 0; i < moviesArr.length; i++) {
        if (moviesArr[i].age === selectedAge && moviesArr[i].genre === selectedGenre) {
            suggestedMovie.innerText = moviesArr[i].name;
        }
    }
}

select();

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
document.body.addEventListener("change", select);