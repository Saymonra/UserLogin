let dados = [
    {
        email: "saymon@gmail.com",
        senha: "123456"
    },
   
    {
        email: "fernando@gmail.com",
        senha: "Senhav"
    }

]

let teste = localStorage.getItem("logado")

if (teste != undefined) {
   
    let botaoVerificar=document.querySelector('#verificar')
    botaoVerificar.addEventListener("click", testarUsuario)
     let botcadastrar=document.querySelector('#criaruser')
    botcadastrar.addEventListener("click", criaruser1)
    let lista = document.querySelector("#listar")
    lista.addEventListener("click", listar)

    let butdelete = document.querySelector('#delete')
    butdelete.addEventListener("click", montarform)
    var limpar = document.querySelector("#limpar")
    limpar.addEventListener("click", clear)

    let bottroca=document.querySelector('#trocardados')
    bottroca.addEventListener("click", trocardados)



    let butlogoff = document.querySelector('#logoff')
    butlogoff.addEventListener("click", sair)
    window.addEventListener("beforeunload", function () {
        localStorage.removeItem("logado")
    }
    )
} 
else {
    //window.location.href=`./index.html`
    let butpagL = document.querySelector("#login")
    butpagL.addEventListener("click", login)
}

function testarUsuario() {
    let divpag2 = document.querySelector('div.inf')

    divpag2.innerHTML = "<h1>Valide seu usuário</h1><br>"

    divpag2.innerHTML += `
    <input id="identificaremail" placeholder ="Digite seu email" class="testandoEmail" type="email"><br>
    <input id="senhacadastrada" placeholder = "Digite sua senha" class="testandoSenha" type="password"><br>
    <input value="Validar" class="botaoDeValidacao" type="button">`

   
    
    
    let botaoDeVerificar = document.querySelector('input.botaoDeValidacao')
    botaoDeVerificar.addEventListener("click", testar)
}

function testar () {

    let usercadastrado=document.querySelector( '#identificaremail').value
    let senhacadastrada=document.querySelector('#senhacadastrada').value

    let Verificaremail=dados.find(dados=>dados.email===usercadastrado)
     let identificar=dados.findIndex(dados=>dados.email===usercadastrado)
    let Verificarsenha=dados.find(dados=>dados.senha===senhacadastrada)
    identifica=identificar
    if (Verificaremail) {
        if(Verificarsenha) {
            alert("Usuário está cadastrado")
        } else {
            alert("A senha digitada está incorreta")
        }
    } else {
        alert("O email digitado está incorreto")
    }
       

}






function trocardados(){
  clear()
    let divpag2 = document.querySelector('div.inf')
    divpag2.innerHTML = "<h1>Alterar dados de usuário</h1><br>"

divpag2.innerHTML+=`<br><input class="EmailDeTroca" type="email" placeholder="Digite seu usuario" id="identificaremail"><br>
<input class="senhaDeTroca" type="password" placeholder="Digite sua senha atual" id="senhacadastrada"><br>

<input class="botaoCriar" type="button" value="Verificar" id="trocardados1"></input>`
let bottroca1=document.querySelector('#trocardados1')
bottroca1.addEventListener("click", trocardados1)
    
}
let identifica=-1
function trocardados1(){
    
let usercadastrado=document.querySelector( '#identificaremail').value
let senhacadastrada=document.querySelector('#senhacadastrada').value



let divpag2=document.querySelector('div.inf')

let Verificaremail=dados.find(dados=>dados.email===usercadastrado)
 let identificar=dados.findIndex(dados=>dados.email===usercadastrado)
let Verificarsenha=dados.find(dados=>dados.senha===senhacadastrada)
identifica=identificar
   
    
if(Verificaremail&&Verificarsenha){
divpag2.innerHTML=`<h1>Novos Dados</h1><input class="but" type="text" id="novoemail" placeholder="Digite seu novo email"><br>
<input type="password" id="novasenha"  placeholder="Digite sua nova senha"><br>
<input type="password" id="confirmarsenha" class="but15" placeholder="Confirme sua senha"><br>
<input type="button" class="but15 botaoCriar" id="AlterarDados" value="Comfirmar"><br>`

let bottrocar=document.querySelector('#AlterarDados')
bottrocar.addEventListener("click", trocar)
}
else
{
alert("usuario nao encontrado")
}

}
function trocar(){
    let novoemail=document.querySelector('#novoemail').value
    let novasenha=document.querySelector('#novasenha').value
    let confirmasenha=document.querySelector('#confirmarsenha').value
    if(novasenha==confirmasenha){
        dados[identifica].email=novoemail
        dados[identifica].senha=novasenha
        listar()
         }else{
            alert("As senhas devem ser iguais")
         }
    
        
        
    
}




function listar() {
  
    let divpag2 = document.querySelector('div.inf')
    divpag2.innerHTML = "<br><h1>Lista de Usuários</h1>"
        for (let index = 0; index < dados.length; index++) {
            divpag2.innerHTML += `<br><label>${index}-${dados[index].email}</label>`
           
        }
    let div3 = document.querySelector('div.bot3')
    div3.innerHTML=""
}
function clear() {
    let divpag2 = document.querySelector('div.inf')
    divpag2.innerHTML = ``
    let div3 = document.querySelector('div.bot3')
    div3.innerHTML=""

}


function sair() {
    localStorage.removeItem("logado")
    window.location.href = `/index.html`
}
function login() {
    alert("oala")
    let user = document.querySelector('input.Email').value
    let pass = document.querySelector('input.Senha').value
    let div = document.querySelector('div.inf')


    for (let index = 0; index < dados.length; index++) {
        if ((user == dados[index].email) && (pass == dados[index].senha)) {


            index = dados.length
            localStorage.setItem("logado", "ola")
            window.location.href = "pg2.html"


        }

        else {
            div.innerHTML = `Dados não encontrados`
            div.style.color = `red`
            // index=dados.length-1
        }


    }
}

function montarform() {

    clear()
        
        let div3 = document.querySelector('div.bot3')
        let div = document.querySelector('div.inf')
        clear()
      
       div.innerHTML = `<br><h1>Deletar Usuários</h1>`
        
        for (let index = 0; index < dados.length; index++) {
            div.innerHTML += `<br><input type="checkbox" id="${index}">
            <label>${index}-${dados[index].email}</label>`
        }
div3.innerHTML=  `<input type="button" value="apagar usuario" id="botapagar"> `


let botapagar=document.querySelector('#botapagar')
botapagar.addEventListener("click", deletar)

}

function deletar(){
  
let vetorapagar=[""]
for (let index = 0; index < dados.length; index++) {
    let checkbox=document.getElementById(`${index}`)
    if(checkbox.checked==true){
        vetorapagar[index]=1
       
    }
    else{
        vetorapagar[index]=0
    }
   
}
for (let index = vetorapagar.length-1; index >=0; index--) {
   if(vetorapagar[index]==1){
    dados.splice(index, 1)
   }
    
}


montarform()

}

function criaruser1(){
    clear()
    let divpag2 = document.querySelector('div.inf')
    divpag2.innerHTML = "<h1>Criar um novo usuário</h1><br>"
    divpag2.innerHTML+=`<input class="inputsCriar" type="email" placeholder="Email" id="emailcriar" ><br>
    <input class="inputsDeCriar" type="password" placeholder="Senha" id="senhacriar"><br>
    <input class="inputsDeCriar" type="password" placeholder="Confirme sua senha" id="confirmarsenha"><br>
    <input class="botaoCriar" type="button" value="Cadastrar" id="botaocadastrar">
    <div class="aqui"></div>`
    let botaocadastrar=document.querySelector('#botaocadastrar')
    botaocadastrar.addEventListener("click", criaruser2)


}
function criaruser2(){
    let emailnovo=document.querySelector('#emailcriar').value
    let senhanova=document.querySelector('#senhacriar').value
    let Confirme=document.querySelector('#confirmarsenha').value
    let divpag2 = document.querySelector('div.inf')


    

    let usuarioexistente=dados.find(dados=>dados.email===emailnovo)
    
    if(usuarioexistente)
    {
      
        divpag2.innerHTML=`<br><p class="textojacadastrado">Usuario já CADASTRADO</p>`
        
        
    }
    else if(senhanova==Confirme)
    {
      
        dados.push({email:`${emailnovo}`,senha:senhanova})
        listar()
    }
    else{
        divpag2.innerHTML=`<p class="textojacadastrado">As senhas devem ser iguais</p>`
    }
    
    
}


/*<input type="email" placeholder="Digite seu usuario"><br>
<input type="password" placeholder="Digite sua senha atual" id="confirmasenha1"><br>
<input type="password" placeholder="Confirme sua senha" id="confirmasenha"><br>
<input type="button" value="Alterar dados"></input>*/