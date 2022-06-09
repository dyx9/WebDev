const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    }
    else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
    }
}

toggle.addEventListener("click", toggleMenu, false);


 

// /* Close Menu From Anywhere */
// function closeMenu(e) {
//     if (menu.classList.contains("active")) {
//         let isClickInside = menu.contains(e.target);
//         console.log(isClickInside);

//         if (!isClickInside && menu.classList.contains("active")) {
//             menu.classList.remove("active");
//             toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
//         }
//     }
// }
   
// /* Event listener */
// document.addEventListener("click", closeMenu, false);