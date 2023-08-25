let addBtn = document.getElementById("addBtn")
let cutBtn = document.getElementById("cutBtn")
let addBlog = document.getElementById("addBlog")



addBtn.addEventListener("click", () => {
    addBlog.classList.add("active")
})

cutBtn.addEventListener("click", () => {
    addBlog.classList.remove("active")
})


document.addEventListener("DOMContentLoaded", function () {

    let addImgUrl = document.getElementById("addImgUrl")
    let addBlogTitle = document.getElementById("addBlogTitle")
    let addBlogDesc = document.getElementById("addBlogDesc")
    let addBlogDetail = document.getElementById("addBlogDetail")

    document.getElementById("addBlogBtn").addEventListener("click", (e) => {
        let img = addImgUrl.value
        let title = addBlogTitle.value
        let desc = addBlogDesc.value
        let detail = addBlogDetail.value

        // let urlRegex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
        // let addImgUrlRegex = img.match(urlRegex)
        // console.log(addImgUrlRegex)

        // if (addImgUrlRegex) {
        //     alert("Invalid")
        // }

        if (img && title && desc && detail) {
            const blog = { img, title, desc, detail }
            console.log(blog)
            addBlogToLocal(blog)
            displayBlogList()
            addBlog.classList.remove("active")
        }
        else {
            alert("Fill all of the Boxes!")
        }
    })


    function addBlogToLocal(blog) {
        let blogs = JSON.parse(localStorage.getItem("blogs")) || []
        blogs.push(blog)
        localStorage.setItem("blogs", JSON.stringify(blogs))
    }

    function displayBlogList() {

        let blogs = JSON.parse(localStorage.getItem("blogs")) || []
        let mainSection = document.getElementById("mainSection")


        blogs.forEach((blog, index) => {

            let mainContainer = document.createElement("div")
            mainContainer.classList.add("container")
            mainContainer.innerHTML = `<img src="${blog.img}" alt="">
            <p class="blog-title">${blog.title}</p>
            <p class="blog-desc">${blog.desc}</p>
            <a href="./readBlogPage/blogPage.html?id=${index}" class="read-btn" id="readBtn">Read</a>`

            mainSection.appendChild(mainContainer)

        });

    }

    displayBlogList()

})