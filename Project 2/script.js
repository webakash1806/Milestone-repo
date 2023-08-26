let movieUrl = "https://www.omdbapi.com/?i=tt3896198&apikey=dde1d56d"

async function fetchData() {
    try {
        const response = await fetch(movieUrl)
        const data = await response.json()
        console.log(data)
    }
    catch (err) {
        console.log(err)
    }
}

fetchData()