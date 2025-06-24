let menuicon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let container = document.querySelector(".container");
let shorts = document.querySelector(".shorts");



let menu = document.querySelector(".menu-icon").addEventListener('click'  ,
    function(){
        sidebar.classList.toggle("small-sidebar");
        container.classList.toggle("large-container");
        shorts.classList.toggle("large-shorts");
    
    }
)