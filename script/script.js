(function () {

    const firstName = document.querySelector('#firts-name');
    const lastName = document.querySelector('#second-name');
    const inputEmail = document.querySelector('#email');
    const inputPassword = document.querySelector('#password');

    const form = document.querySelector('.form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = firstName.value;
        const sobrenome = lastName.value;
        const email = inputEmail.value;
        const password = inputPassword.value;

        if (nome !== 0) {
            firstName.classList.remove('empty');
            const alert = document.querySelector('#alert-1')
            alert.style.display = 'none'
        }
        if (!nome) {
            firstName.classList.add('empty');
            const alert = document.querySelector('#alert-1')
            alert.style.display = 'block'
        }
        if (sobrenome !== 0) {
            lastName.classList.remove('empty');
            const alert = document.querySelector('#alert-2')
            alert.style.display = 'none'
        }
        if (!sobrenome) {
            lastName.classList.add('empty');
            const alert = document.querySelector('#alert-2')
            alert.style.display = 'block'
        }
        if (email !== 0) {
            inputEmail.classList.remove('empty');
            const alert = document.querySelector('#alert-3')
            alert.style.display = 'none'
        }
        if (!email) {
            inputEmail.classList.add('empty');
            const alert = document.querySelector('#alert-3')
            alert.style.display = 'block'
        }
        if (password !== 0) {
            inputPassword.classList.remove('empty');
            const alert = document.querySelector('#alert-4')
            alert.style.display = 'none'
        }
        if (!password) {
            inputPassword.classList.add('empty');
            const alert = document.querySelector('#alert-4')
            alert.style.display = 'block'
        }
        if (nome && sobrenome && email && password) {
            alert('Formulário enviado com sucesso !')
            firstName.value = ''
            lastName.value = ''
            inputEmail.value = ''
            inputPassword.value = ''
        }
    })
})()
