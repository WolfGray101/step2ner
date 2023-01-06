
let showModal = document.querySelector('.menu-button-burger');
let body = document.querySelector('body');
let dFix = document.querySelector('.d-fix');

let modalMenu = document.querySelector('.modal-menu');
// let selectMenu = document.querySelectorAll('.modal-menu');

// for (let listElem of selectMenu) {
//   listElem.onclick = function () {
//     body.classList.toggle('d-fix');
//     showAll.classList.toggle('rotate-burger');
//     for (let elem of cardItems) {
//       elem.classList.toggle('modal-menu');
//       elem.classList.toggle('show');
//     }
//   };  
// }


console.log(modalMenu.childNodes);


  showModal.addEventListener('click' , () => {
  showModal.classList.toggle('rotate-burger');
  modalMenu.classList.toggle('hide');

  modalMenu.classList.toggle('show');
  body.classList.toggle('d-fix');

});


for (let elem of modalMenu.childNodes) {
  console.log(elem);
  elem.addEventListener('click' , () => {
    showModal.classList.toggle('rotate-burger');
    modalMenu.classList.toggle('hide');    
    modalMenu.classList.toggle('show');
    body.classList.toggle('d-fix');
  })

}

// let card = document.querySelector('.scheme-card');

// let cardsFront = card.querySelector('.front');
// let cardsBack = card.querySelector('.back');

// card.addEventListener( 'click', () => {
//  cardsFront.classList.toggle('scheme-card-rotate-front');
//  cardsBack.classList.toggle('scheme-card-rotate-back');
// }
// )


