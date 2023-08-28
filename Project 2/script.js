let searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener("click", () => {
    let movieTitle = document.getElementById("searchMovie").value
    let movieMainContainer = document.getElementById("movieMainContainer")
    let movieUrl = `https://www.omdbapi.com/?s=${movieTitle}&apikey=dde1d56d`

    if (movieTitle == "") {
        movieMainContainer.innerHTML = `<h1 class="error-message">OOPS! Search Box is Empty</h1>`
    }
    else {
        async function fetchData() {
            try {
                const response = await fetch(movieUrl)
                const data = await response.json()
                // console.table(data.Search)

                let movieData = data.Search.map((movie) => {
                    return `<div class="movie-container" id="movieContainer">
            <img src="${movie.Poster}"
                alt="">
            <p class="title" id="movieTitle">${movie.Title}</p>
            <button>Watch Now</button>
        </div>`
                });
                movieMainContainer.innerHTML = movieData.join('')
                // console.log(movieMainContainer)
            }
            catch (err) {
                movieMainContainer.innerHTML = `<h1 class="error-message">OOPS! Nothing is here</h1>`
                console.log(err)
            }
        }
        fetchData()
    }
})

