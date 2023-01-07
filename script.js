
let showModal = document.querySelector('.menu-button-burger');
let showModalForm = document.querySelectorAll('.feedback-block');
// let formShow = document.querySelector('.form-show')
let body = document.querySelector('body');
let dFix = document.querySelector('.d-fix');
let modalMenu = document.querySelector('.modal-menu');
let modalForm = document.querySelector('.modal-form');
let sendBtn = document.querySelectorAll('.btn-mailform')
let closeBtn = document.querySelector('.close')

  showModal.addEventListener('click' , () => {
    modalMenuAct()
});

for (let elem of modalMenu.childNodes) {
  console.log(elem);
  elem.addEventListener('click' , () => {
    modalMenuAct()
  })
}

for (let elem of showModalForm) {
  elem.addEventListener('click' , () => {
    ModalAct()
  })
}

for (let el of sendBtn) {
  el.addEventListener('click', () => {
    ModalAct()
  })
}

closeBtn.addEventListener('click' , () => {
  console.log('hello');
  ModalAct()

})

const ModalAct = () => {
  modalForm.classList.toggle('hide');    
    modalForm.classList.toggle('form-show');
    body.classList.toggle('d-fix'); 
}

const modalMenuAct = () => {
  showModal.classList.toggle('rotate-burger');
  modalMenu.classList.toggle('hide');    
  modalMenu.classList.toggle('show');
  body.classList.toggle('d-fix');
}

