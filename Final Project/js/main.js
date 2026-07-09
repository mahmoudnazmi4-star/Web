$(document).ready(function(){
    $("#owl-1").owlCarousel({
        responsive : {
            0 : {
                items: 2,
            },
            480 : {
                items: 3,
            },
            // breakpoint from 768 up
            768 : {
                items: 5,
            },
            1200 : {
                items: 8,
            }
        },
        loop : true,
        margin : 20,
        autoplay : true,
    });
});
$(document).ready(function(){
    $("#owl-2").owlCarousel({
        responsive : {
            0 : {
                items: 1,
            },
            480 : {
                items: 2,
            },
            // breakpoint from 768 up
            768 : {
                items: 3,
            },
            1200 : {
                items: 5,
            }
        },
        loop : true,
        nav: true,
        navText : ['<i class="fa-solid fa-angle-left i-stlye b-l shadow position-absolute"></i>','<i class="fa-solid fa-angle-right i-stlye b-r shadow position-absolute"></i>'],
    });
});
$(document).ready(function(){
    $("#owl-3").owlCarousel({
        responsive : {
            480 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 2,
            },
            1200 : {
                items: 3,
            }
        },
        loop : true,
        nav: true,
        navText : ['<i class="fa-solid fa-angle-left i-stlye b-l shadow position-absolute"></i>','<i class="fa-solid fa-angle-right i-stlye b-r shadow position-absolute"></i>'],
        margin : 40,
    });
});
if(document.getElementById('hours')){
    let totalSeconds = 12200;
    let hor = document.getElementById('hours');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    const countdownId = setInterval(() => {
    totalSeconds--;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const pad = (num) => String(num).padStart(2, '0');
    hor.innerText= pad(hours)
    min.innerText= pad(minutes)
    sec.innerText= pad(seconds)
    if (totalSeconds <= 0) {
        myHourlyTask(); 
        totalSeconds = 7200; 
    }
    }, 1000);
}


let up =document.getElementById("up");
console.log(up)
window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        up.classList.remove('none')
        up.classList.add('scale')
    }else{
        up.classList.remove('scale')
        up.classList.add('none')
    }
})
let nav = document.getElementById('nav')
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        nav.classList.add("bg");
    } else {
        nav.classList.remove("bg");
    }
});

bar.addEventListener("click", () => {
    nav.classList.toggle("bg-toggle");
});

if(document.getElementById('years')){
    let counter = document.getElementById('years')
    let i = 0
    let set = setInterval(()=>{
        i++
        years.innerText = i
        if(i == 25) clearInterval(set)
        
    } , 50)
}
if(document.getElementById('showrrooms')){
    let counter = document.getElementById('showrrooms')
    let i = 0
    let set = setInterval(()=>{
        i++
        showrrooms.innerText = "+" + i
        if(i == 200) clearInterval(set)
        
    } , 6.25)
}
if(document.getElementById('count')){
    let counter = document.getElementById('count')
    let i = 0
    let set = setInterval(()=>{
        i++
        count.innerText = "+" + i + "M"
        if(i == 100) clearInterval(set)
        
    } , 12.5)
}
if(document.getElementById('customers')){
    let counter = document.getElementById('customers')
    let i = 0
    let set = setInterval(()=>{
        i++
        customers.innerText = i + "%"
        if(i == 99) clearInterval(set)
        
    } , 12.5)
}

let imageChange1 = () => {
    let img = document.getElementById('myImg')
    img.src = "image/download-2.png"
}

let imageChange2 = () => {
    let img = document.getElementById('myImg')
    img.src="image/download-1.png"
}
let imageChange3 = () => {
    let img = document.getElementById('myImg')
    img.src="image/download-3.png"
}
let handleCategory = (type) => {
    let category1 = document.querySelectorAll("[data-category = 'category1']")
    let category2 = document.querySelectorAll("[data-category= 'category2']")
    let divs = document.querySelectorAll("[data-category]")
    console.log(category1)
    console.log(category2)
    for (let i = 0; i < divs.length; i++) {
        divs[i].classList.add('d-none')
    }

    if (type == 'category1') {
        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.add('d-block')
            category1[i].classList.remove('d-none')
        }
    }
    else {
        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.add('d-block')
            category2[i].classList.remove('d-none')
        }
    }
}


document.getElementById('customForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('username');
    const emailInput = document.getElementById('useremail');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    let isValid = true;
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'This faild Rquerd';
        nameError.style.display = 'block';
        nameInput.classList.add('is-invalid');
        isValid = false;
    } else {
        nameError.style.display = 'none';
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
    }
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'This faild Rquerd';
        emailError.style.display = 'block';
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Nazmy@gmail.com (Exmpil)';
        emailError.style.display = 'block';
        emailInput.classList.add('is-invalid');
        isValid = false;
    } else {
        emailError.style.display = 'none';
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
    }
    if (isValid) {
    alert('Thank For Suport US');
    }
});