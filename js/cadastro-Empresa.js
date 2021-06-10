const cadastrarEmpresa = () => {

    razaoSocial = document.querySelector('#razaoSocial').value,

    cnpj = document.querySelector('#cnpj').value,

    inscricaoEstadual = document.querySelector('#inscricaoEstadual').value,

    inscricaoMunicipal = document.querySelector('#inscricaoMunicipal').value,

    email = document.querySelector('#email').value,

    senha = document.querySelector('#senha').value,

    rua = document.querySelector('#rua').value,

    bairro = document.querySelector('#bairro').value,

    cep = document.querySelector('#cep').value,

    municipio = document.querySelector('#municipio').value,

    uf = document.querySelector('#uf').value,

    complemento = document.querySelector('#complemento').value

    url = 'http://localhost:8080/api/empresa'

    if(validar() != true){
        return;
    }

    obj = {
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'razaoSocial': razaoSocial,
            'cnpj': cnpj,
            'inscricaoEstadual': inscricaoEstadual,
            'inscricaoMunicipal': inscricaoMunicipal,
            'username': email,
            'senha': senha,
            'rua': rua,
            'bairro': bairro,
            'cep': cep,
            'municipio': municipio,
            'uf': uf,
            'complemento': complemento
        })
    }

    fetch(url, obj)
    .then(response => {    
        if(response.status == 200){
            window.alert('cadastro feito com sucesso!');
            window.location.href = "acesso.html";
        }
    });

    // var mensagem = document.querySelector('#mensagem-sucesso');
    // mensagem.innerHTML = "Cadastro feito com sucesso!";

    // window.alert('Cadastro feito com sucesso!')
}

//validacao de dados

const validar = () => {

    const a = true;

    const razaoSocial = document.querySelector('#razaoSocial');

    const cnpj = document.querySelector('#cnpj');
    
    const email = document.querySelector('#email');

    const senha = document.querySelector('#senha');

    const rua = document.querySelector('#rua');

    const bairro = document.querySelector('#bairro');

    const cep = document.querySelector('#cep');

    const municipio = document.querySelector('#municipio');

    const uf = document.querySelector('#uf');

    if(razaoSocial.value === ''){
        razaoSocial.classList.add("errorInput")
         a = false;
    }else {
        razaoSocial.classList.remove("errorInput")
    }

    if(email.value === ''){
        email.classList.add("errorInput")
        a = false;
    }else {
        email.classList.remove('errorInput')
    }

    if(senha.value === ''){
        senha.classList.add('errorInput')
        a = false;
    }else {
        senha.classList.remove('errorInput')
    }

    if(cnpj.value === ''){
        cnpj.classList.add("errorInput")
        a = false;
    }else {
        cnpj.classList.remove('errorInput')
    }

    if(cep.value === ''){
        cep.classList.add('errorInput')
        a = false;
    }else {
        cep.classList.remove('errorInput')
    }

    if(rua.value === ''){
        rua.classList.add('errorInput')
        a = false;
    }else {
        rua.classList.remove('errorInput')
    }

    if(bairro.value === ''){
        bairro.classList.add('errorInput')
        a = false;
    }else {
        bairro.classList.remove('errorInput')
    }

    if(municipio.value === ''){
        municipio.classList.add('errorInput')
        a = false;
    }else {
        municipio.classList.remove('errorInput')
    }

    if(uf.value === ''){
        uf.classList.add('errorInput')
        a = false;
    }else {
        uf.classList.remove('errorInput')
    }
    return a;
}

//auto preenchimento cep

const limparFormulario = (endereco) =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('municipio').value = '';
    document.getElementById('uf').value = '';
}


const preencherFormulario = (endereco) =>{
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('municipio').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    limparFormulario();
    
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('rua').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('rua').value = 'CEP incorreto!';
    }
     
}

document.getElementById('cep')
        .addEventListener('focusout',pesquisarCep);