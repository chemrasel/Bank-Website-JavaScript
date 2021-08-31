document.getElementById('login-submit').addEventListener('click', function () {

    const userField = document.getElementById('user-email');
    const getUser = userField.value;
    const passField = document.getElementById('user-password');
    const getPassword = passField.value;
    if (getUser == 'sontan@gmail.com' && getPassword == 'abbaLogin') {
        window.location.href = 'login-form.html';
    };

});