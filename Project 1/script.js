let addBtn = document.getElementById("addBtn")
let cutBtn = document.getElementById("cutBtn")
let addBlog = document.getElementById("addBlog")


addBtn.addEventListener("click", () => {
    addBlog.classList.add("active")
})

cutBtn.addEventListener("click", () => {
    addBlog.classList.remove("active")
})


let addImgUrl = document.getElementById("addImgUrl").value
let validateImgUrl = "[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)"
if (addImgUrl === validateImgUrl) {

    document.getElementById("addBlogBtn").addEventListener("click", (e) => {
        let addImgUrl = document.getElementById("addImgUrl").value
        let addBlogTitle = document.getElementById("addBlogTitle").value
        let addBlogDesc = document.getElementById("addBlogDesc").value
        let addBlogDetail = document.getElementById("addBlogDetail").innerHTML

        let mainSection = document.getElementById("mainSection")

        let mainContainer = document.createElement("div")
        mainContainer.classList.add("container")
        mainContainer.innerHTML = `<img src="${addImgUrl}" alt="">
    <p class="blog-title">${addBlogTitle}</p>
    <p class="blog-desc">${addBlogDesc}</p>
    <p id="warning"></p>
    <button class="read-btn" id="readBtn">Read</button>`

        mainSection.appendChild(mainContainer)

    })
}
else {
    document.getElementById("warning").innerText = "Invalid Url"
    console.log("Invalid Url")
}