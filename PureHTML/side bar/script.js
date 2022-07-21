const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
const content = document.querySelector(".content");
const cover = document.querySelector(".cover")

function toggleMenu() {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        cover.classList.remove("active");
        content.classList.remove("push");
        
        // adds the sidebar (hamburger) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    }
    else {
        sidebar.classList.add("active");
        content.classList.add("push");
        cover.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
    }

}

toggle.addEventListener("click", toggleMenu, false);