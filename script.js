const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.SignUp-link');
const signInLink = document.querySelector('.SignIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});