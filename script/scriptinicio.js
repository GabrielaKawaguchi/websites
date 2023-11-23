let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function realizarBusca() {
    // Valor da palavra-chave
    var termoPesquisa = document.getElementById('pesquisa').value;

    // Validar se a palavra-chave não está vazia
    if (termoPesquisa.trim() !== '') {
        // Construir a URL de redirecionamento com base no valor
        var urlRedirecionamento = '';

        if (termoPesquisa === 'início') {
            urlRedirecionamento = 'index.html';
        } else if (termoPesquisa === 'quem somos') {
            urlRedirecionamento = 'pages/quemsomos.html';
        }
        else if (termoPesquisa === 'planos') {
            urlRedirecionamento = 'pages/planos.html';
        }
        else if (termoPesquisa === 'contato') {
            urlRedirecionamento = 'pages/contato.html';
        }
        else if (termoPesquisa === 'serviços') {
            urlRedirecionamento = 'pages/servicos.html';
        }
        else if (termoPesquisa === 'vantagens') {
            urlRedirecionamento = 'pages/vantagens.html';
        } else {
            // Adicione outras condições se necessário
            alert('Palavra-chave não reconhecida.');
            return;
        }

        // Redirecionar para a página correspondente
        window.location.href = urlRedirecionamento;
    } else {
        alert('Por favor, insira uma palavra-chave.');
    }
}

function verificarEnter(event) {
    // Verificar se a tecla pressionada é Enter
    if (event.key === 'Enter') {
        realizarBusca();
    }
}
