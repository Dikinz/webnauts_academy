let pop_Up = document.querySelector(".pop-up");
let pop_UpBtn =  document.querySelector(".btn-pop-up");
let pop_UpClose = pop_Up.querySelector(".pop-up-close");
console.log(document)

function showPop_UponClick(){
    pop_Up.classList.add('.pop-up-show');
}

pop_UpBtn.addEventListener('click', showPop_UponClick);


pop_UpClose.addEventListener('click', function(){
    pop_Up.classList.remove('.pop-up-show');
});