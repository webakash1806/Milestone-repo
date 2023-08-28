let searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener("click", () => {
    let movieTitle = document.getElementById("searchMovie").value
    // console.log(movieTitle)

    let movieUrl = `https://www.omdbapi.com/?s=${movieTitle}&apikey=dde1d56d`

    async function fetchData() {
        try {
            const response = await fetch(movieUrl)
            const data = await response.json()
            // console.table(data.Search)
            let movieMainContainer = document.getElementById("movieMainContainer")

            movieMainContainer.innerHTML = data.Search.map((movie) => {
                return `<div class="movie-container" id="movieContainer">
            <img src="${movie.Poster}"
                alt="">
            <p class="title" id="movieTitle">${movie.Title}</p>
            <button>Watch Now</button>
        </div>`
            });

            console.log(movieMainContainer)




        }
        catch (err) {
            console.log(err)
        }
    }

    fetchData()
})

