//Constrói a URL depois que o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    //conteúdo que será compartilhado: Título da página + URL
    var conteudo = encodeURIComponent(document.title + " " + window.location.href);
    //altera a URL do botão
    document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
}, false);

document.addEventListener("DOMContentLoaded", function () {
    var url = encodeURIComponent(window.location.href);
    var titulo = encodeURIComponent(document.title);
    //var via = encodeURIComponent("usuario-twitter"); //nome de usuário do twitter do seu site
    //altera a URL do botão
    document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url=" + url + "&text=" + titulo;

    //se for usar o atributo via, utilize a seguinte url
    //document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo+"&via="+via;
}, false);


document.addEventListener("DOMContentLoaded", function () {
    //altera a URL do botão
    document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
}, false);
