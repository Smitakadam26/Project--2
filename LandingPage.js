function toggle(){
    const toggle = document.querySelector(".toggle");
    const banner = document.querySelector(".banner");
    toggle.classList.toggle("active");
    banner.classList.toggle("active");
}
let a = document.querySelectorAll("li");
a[5].style.color = "blue";