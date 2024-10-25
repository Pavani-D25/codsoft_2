// 'use strict';

// // element toggle function
// const elementToggleFunc = function (elem) { 
//     elem.classList.toggle("active"); 
// }

// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { 
//     elementToggleFunc(sidebar); 
// });

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");


// // modal toggle function
// const testimonialsModalFunc = function () {
//     modalContainer.classList.toggle("active");
//     overlay.classList.toggle("active");
// }

// // Select testimonial items
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]"); // Ensure your HTML has elements with this attribute

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {
//     testimonialsItem[i].addEventListener("click", function () {
//         modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//         modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//         modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//         modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//         testimonialsModalFunc();
//     });
// }



// // Check if overlay is not null before adding event listener


// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-select-value]"); // Fixed typo: 'data-selecct-value'
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { 
//     elementToggleFunc(this); 
// });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//     selectItems[i].addEventListener("click", function () {
//         let selectedValue = this.innerText.toLowerCase();
//         selectValue.innerText = this.innerText;
//         elementToggleFunc(select);
//         filterFunc(selectedValue);
//     });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {
//     for (let i = 0; i < filterItems.length; i++) {
//         if (selectedValue === "all") {
//             filterItems[i].classList.add("active");
//         } else if (selectedValue === filterItems[i].dataset.category) {
//             filterItems[i].classList.add("active");
//         } else {
//             filterItems[i].classList.remove("active");
//         }
//     }
// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {
//     filterBtn[i].addEventListener("click", function () {
//         let selectedValue = this.innerText.toLowerCase();
//         selectValue.innerText = this.innerText;
//         filterFunc(selectedValue);

//         lastClickedBtn.classList.remove("active");
//         this.classList.add("active");
//         lastClickedBtn = this;
//     });
// }

// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input fields
// for (let i = 0; i < formInputs.length; i++) {
//     formInputs[i].addEventListener("input", function () {
//         // check form validation
//         if (form.checkValidity()) {
//             formBtn.removeAttribute("disabled");
//         } else {
//             formBtn.setAttribute("disabled", "");
//         }
//     });
// }

// // page navigation variables
// const navigationLinks = document.querySelectorAll("[data-nav-link]");
// const pages = document.querySelectorAll("[data-page]");

// // add event to all nav links
// for (let i = 0; i < navigationLinks.length; i++) {
//     navigationLinks[i].addEventListener("click", function () {
//         for (let j = 0; j < pages.length; j++) {
//             if (this.textContent.trim().toLowerCase() === pages[j].dataset.page) {
//                 pages[j].classList.add("active");
//                 navigationLinks[i].classList.add("active");
//                 window.scrollTo(0, 0);
//             } else {
//                 pages[j].classList.remove("active");
//                 navigationLinks[j].classList.remove("active");
//             }
//         }
//     });
// }









'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
}

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality
sidebarBtn.addEventListener("click", () => {
    elementToggleFunc(sidebar);
});

// Navbar variables
const navLinks = document.querySelectorAll("[data-nav-link]");
const articles = document.querySelectorAll("article[data-page]");

// Function to handle navigation link click
const handleNavLinkClick = (event) => {
    // Remove active class from all nav links and articles
    navLinks.forEach(link => link.classList.remove("active"));
    articles.forEach(article => article.classList.remove("active"));

    // Add active class to the clicked link
    event.currentTarget.classList.add("active");

    // Get the data-page attribute of the clicked link
    const targetPage = event.currentTarget.innerText.toLowerCase();

    // Find the corresponding article and add the active class
    const targetArticle = document.querySelector(`article[data-page="${targetPage}"]`);
    if (targetArticle) {
        targetArticle.classList.add("active");
    }
};

// Attach event listeners to each nav link
navLinks.forEach(link => {
    link.addEventListener("click", handleNavLinkClick);
});
