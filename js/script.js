document.getElementById('logo').addEventListener('click', function(event) {
    event.preventDefault(); 
    location.reload(); 
});

//togle search bar 
function toggleSearch(){
    const search = document.querySelector('.search')
    search.classList.toggle('active');
}

// 3d flipping

function toggleFlip(){
    const imgBox = document.querySelector('.imgBox');
    const btn = document.querySelector('.btn');
    imgBox.classList.toggle('active');
    btn.classList.toggle('active');
}

// swap

function changeImg(img){
    const backpackImg = document.querySelector('.backpack-img');
    backpackImg.src = `../images/${img}`;
}

function toggleMenu() {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile');
    menu.classList.toggle('active');
    navMobile.classList.toggle('active');
}