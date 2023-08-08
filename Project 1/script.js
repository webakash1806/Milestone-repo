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



        if (img && title && desc && detail) {
            const blog = { img, title, desc, detail }
            console.log(blog)
            addBlogToLocal(blog)
            displayBlog()
            addBlog.classList.remove("active")
        }
    })


    function addBlogToLocal(blog) {
        let blogs = JSON.parse(localStorage.getItem("blogs")) || []
        blogs.push(blog)
        localStorage.setItem("blogs", JSON.stringify(blogs))
    }

    function displayBlog() {

        let blogs = JSON.parse(localStorage.getItem("blogs")) || []
        let mainSection = document.getElementById("mainSection")


        blogs.forEach((blog, index) => {

            let mainContainer = document.createElement("div")
            mainContainer.classList.add("container")
            mainContainer.innerHTML = `<img src="${blog.img}" alt="">
            <p class="blog-title">${blog.title}</p>
            <p class="blog-desc">${blog.desc}</p>
            <button class="read-btn" id="readBtn">Read</button>`

            mainSection.appendChild(mainContainer)
        });
    }



    // document.getElementById("readBtn").addEventListener("click",(e)=>{

    // })

    displayBlog()
})