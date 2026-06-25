const nav = document.getElementById("nav");
const bar = document.getElementById("bar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        nav.classList.add("bg");
    } else {
        nav.classList.remove("bg");
    }
});

bar.addEventListener("click", () => {
    nav.classList.toggle("bg-toggle");
});



// JS
// var firstName = "Mahmoud";
// var lastName = "Namzy";
// console.log(firstName + lastName);
// var p = prompt(name , )
// console.log(p)
// var x = 10 ;
// var m = 11;
// (x<m) ? console.log(true) : console.log(false)
