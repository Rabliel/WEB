document.querySelectorAll('.collapse__button').forEach(button =>{
    button.addEventListener('click',()=>{
        button.classList.toggle('collapse__button--active');
    });
});