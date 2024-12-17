let navIcon = document.getElementById("nav-icon");
let navIconDropdown = document.getElementById("nav-icon-dropdown");
let commentToggle = document.getElementById("comment-toggle");
let commentSection = document.getElementById("comment-section");

navIcon.onclick = function() {
    navIconDropdown.classList.toggle('navIconDropdown-toggle');
}
commentToggle.onclick = function() {
    commentSection.classList.toggle('comment-show');
}
