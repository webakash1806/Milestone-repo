let movieUrl = "https://www.omdbapi.com/?s=action&apikey=dde1d56d"

async function fetchData() {
    try {
        const response = await fetch(movieUrl)
        const data = await response.json()
        console.table(data.Search)
    }
    catch (err) {
        console.log(err)
    }
}

fetchData()