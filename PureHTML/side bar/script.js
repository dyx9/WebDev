const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");

function toggleMenu() {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        
        // adds the sidebar (hamburger) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    }
    else {
        sidebar.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
    }
}

toggle.addEventListener("click", toggleMenu, false);