class Usuario{
    constructor(nome="", email="", telefone=0){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    validarNome(){
        const regexNome = /^[A-Za-z ]{3,50}$/
        return regexNome.test(this.nome);
    }

    validarEmail(){
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        return regexEmail.test(this.email);
    }

    validarTelefone(){
        const regexTelefone = /^[0-9]{9,19}$/
        return regexTelefone.test(this.telefone);
    }
}

function imprimir(){
    let nomeUsuario = document.getElementById("nome").value;
    let emailUsuario = document.getElementById("email").value;
    let telefoneUsuario = eval(document.getElementById("telefone").value);

    document.getElementById("dados").innerHTML = "Nome: " + nomeUsuario + ", E-mail: " + emailUsuario + ", Telefone: " + telefoneUsuario;
    clear();
}

function validaImprime(){
    let vnome = document.getElementById("nome").value;
    let vemail = document.getElementById("email").value;
    let vtelefone = eval(document.getElementById("telefone").value);

    const usuario = new Usuario(vnome, vemail, vtelefone);

    const saidaNome = usuario.validarNome();
    const saidaEmail = usuario.validarEmail();
    const saidaTelefone = usuario.validarTelefone();

    if(!saidaNome){
        document.getElementById("dados").innerHTML = "ERRO! Preencha o nome corretamente.";
    } else if(!saidaEmail){
        document.getElementById("dados").innerHTML = "ERRO! Preencha o email corretamente.";
    } else if(!saidaTelefone){
        document.getElementById("dados").innerHTML = "ERRO! Preencha o telefone corretamente.";
    } else {
        document.getElementById("dados").innerHTML = "Nome: " + vnome + ", E-mail: " + vemail + ", Telefone: " + vtelefone;
    }
    clear();
}

function imprimeLista(){
    let lista = [];
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = eval(document.getElementById("telefone").value);
    
    lista = {nome, email, telefone};

    document.getElementById("dados").innerHTML = JSON.stringify(lista);
    clear();
}

function clear(){
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("mensagem").value = "";
}
