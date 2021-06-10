(function () {

    const email = localStorage.username;

    const nome = document.querySelector('.nome');

    const url = `http://localhost:8080/api/empresa/find/${email}`;

    fetch(url)
        .then(response => response.json())
        .then((data) => {
            nome.innerHTML = primeiroNome(JSON.stringify(data.razaoSocial).replace(/^"(.*)"$/, '$1'));
        });

})();

function primeiroNome(nome){
    const arr = nome.split(' ');
    arr[0][0].toUpperCase();
    return arr[0];
}