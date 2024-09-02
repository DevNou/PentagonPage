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