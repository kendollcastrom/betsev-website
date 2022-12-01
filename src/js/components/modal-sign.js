export const loginIcon = document.querySelector('.login__icon');
console.log(loginIcon);
const openPop = document.querySelector('.pop-up');
console.log(openPop);
const modal = document.querySelector('.pop-up__container');
constmodal=document.getElementsByClassName('.pop-up__container');

function openModal() {
	openPop.classList.add('show');
	modal.classList.add('show');
	console.log(openPop);	
}

function closeModal() {
	openPop.classList.remove('show');
    modal.classList.remove('show');
}

openPop.addEventListener('click', e => {
	e.preventDefault();
	closeModal();
})

loginIcon.addEventListener('click', e => {
	e.preventDefault();
	openModal();
})
console.log(openModal);
