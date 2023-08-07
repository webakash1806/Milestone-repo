let addBtn = document.getElementById("addBtn")
let cutBtn = document.getElementById("cutBtn")
let addBlog = document.getElementById("addBlog")


addBtn.addEventListener("click", () => {
    addBlog.classList.add("active")
})

cutBtn.addEventListener("click", () => {
    addBlog.classList.remove("active")
})