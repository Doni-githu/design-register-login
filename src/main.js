const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const button = document.getElementById('button');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', function(){
    wrapper.classList.add('active')
})

loginLink.addEventListener('click', function(){
    wrapper.classList.remove('active')
})

button.addEventListener('click', () => {
    wrapper.classList.add('active-popup')
})


iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup')
})



