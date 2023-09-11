let navbar = document.querySelector('.navbar')
let login = document.querySelector('.login')







// SCRIPT HOVER PRODUCT
let allHoverImages = document.querySelectorAll('.hover-container div img');
let imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover', () =>{
        imgContainer.querySelector('img').src = image.src;
        resetActiveImg();
        image.parentElement.classList.add('active'); 
    });
});

function resetActiveImg(){
    allHoverImages.forEach((img) => {
        img.parentElement.classList.remove('active');
    });
}


// let mars = document.querySelectorAll('.hover-container div img');
// let hovering = document.querySelector('.img-hover');

// window.addEventListener('DOMContentloaded' , () => {
//     mars[0].parentElement.classList.add('active');
// });

// mars.forEach((image) => {
//     image.addEventListener('mouseover' , () => {
//         hovering.querySelector('img').src = image.src;
//     })
// })


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
     login.classList.remove('active');
 
}


let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
     login.classList.remove('active');
 
}


document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');

}






