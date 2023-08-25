document.addEventListener("DOMContentLoaded", function () {
    let readBlog = document.getElementById("readBlog")


    const urlParams = new URLSearchParams(window.location.search);
    const blogId = parseInt(urlParams.get("id"));

    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
    if (blogId >= 0 && blogId < blogs.length) {
        readBlog.innerHTML = ` <div class="blog-header">
        <div class="blog-header-left">
            <p class="blog-title">${blogs[blogId].title}</p>
            <p class="blog-des">${blogs[blogId].desc}</p>
        </div>
        <div class="blog-header-right">
            <img src="${blogs[blogId].img}" alt="">
        </div>
    </div>
    <div class="blog-detail">${blogs[blogId].detail}</div>`;
    } else {
        readBlog.innerHTML = "<p>Blog not found.</p>";
    }
});
