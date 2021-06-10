function logar(){

    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    const url = 'http://localhost:8080/login';

    const obj = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": email,
            "senha": senha
        })
    }

    fetch(url, obj).then(response => {
        validacao();
        if(response.status !== 200){
            const erro = document.querySelector("#mensagem-erro")
            erro.innerHTML = "Email ou senha incorreta."
            return;
        }
        localStorage.setItem("username", email);
        window.location.href = "telaRestritaHomeEmpresa.html";
        //console.log(localStorage.username);
        
    });
}

const erro = () => window.alert('Email ou senha incorreto.');

const validacao = () => {

    const email = document.querySelector('#email')
    const senha = document.querySelector('#senha')

    if(email.value == ''){
        email.classList.add("errorInput")
    }else {
        email.classList.remove("errorInput")
    }

    if(senha.value == ''){
        senha.classList.add("errorInput")
    }else {
        senha.classList.remove("errorInput")
    }

    if(email.value.indexOf("@") == -1 || email.value.indexOf('.') == -1 || (email.value.indexOf("@") - email.value.indexOf(".") == 1)){
        email.classList.add('errorInput')
    }else {
        email.classList.remove("errorInput")
    }
}

