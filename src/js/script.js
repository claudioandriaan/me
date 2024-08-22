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
        document.getElementById("navbar").style.top = "-80px";
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
