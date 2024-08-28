function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.blur();
    menu.classList.toggle('show');
}
function closeMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.remove('show');
}

// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-80px";
//     }
// }

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
}


// Experience
function showDescription(element) {
    // Hide all descriptions
    const descriptions = document.querySelectorAll('.description');
    descriptions.forEach(desc => desc.classList.remove('active'));

    // Show the clicked description
    const descriptionId = element.getAttribute('data-description');
    document.getElementById(descriptionId).classList.add('active');

}

document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const showLessBtn = document.getElementById("showLessBtn");
    const sectionPage = document.getElementById("work");
  
    if (showMoreBtn && showLessBtn) {
        showMoreBtn.addEventListener("click", function() {
            const hiddenItems = document.querySelectorAll(".project-card.hidden");
            hiddenItems.forEach(item => {
                item.classList.remove("hidden");
            });
            sectionPage.style.height = "auto"; // Adjust height if necessary
            showMoreBtn.classList.add("hidden"); // Hide "Show More" button
            showLessBtn.classList.remove("hidden"); // Show "Show Less" button
        });

        showLessBtn.addEventListener("click", function() {
            const allItems = document.querySelectorAll(".project-card");
            allItems.forEach((item, index) => {
                if (index >= 3) { // Hide items beyond the initial 3
                    item.classList.add("hidden");
                }
            });
            sectionPage.style.height = ""; // Reset height if necessary
            showLessBtn.classList.add("hidden"); // Hide "Show Less" button
            showMoreBtn.classList.remove("hidden"); // Show "Show More" button
        });
    }
});

