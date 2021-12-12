//Requisições Post - Login
$(function () {
    $('#enviar').on('click', login);
    $('#sair').on('click', logout);
});

function login() {
    //recuperar dados preenchidos no form
    let dados = {
        email: $('#email').val(),
        senha: $('#senha').val()
    }

    //submissão
    $.post("././views/loginADM.pug", dados, function(data, status, req){
        
        //Se necessário, tratar dados de retorno
        alert(JSON.stringify(data));

        //Pegar token do header vindo da resposta
        let token = req.getResponseHeader("Authorization");
        setCookie("token_ned",token,30);
        alert("Cookie criado");
    }).fail(function (req, mensagemStatus, mensagemErro) {
        alert(req.status); //404
        //alert(mensagemStatus); //error
        //alert(mensagemErro); //Not Found

        //TRATAR ERRO...
    });
}

function logout(){
    document.cookie = "token_ned=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Vc saiu do NeD");
}

function setCookie(cname,cvalue,exdays){
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toGMTString();
    //path=/ é válido para todas as pastas e subpastas
    document.cookie = cname + "-" + cvalue + ":" + expires + ";path=/";
}