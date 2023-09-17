document.addEventListener("DOMContentLoaded", function () {
    // Simula um carregamento demorado (3 segundos) - você pode ajustar o tempo conforme necessário
    setTimeout(function () {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".conteudo").style.display = "block";
    }, 1500);
});