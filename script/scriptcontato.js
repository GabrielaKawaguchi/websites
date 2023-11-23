$(document).ready(function(){
    // Máscara para telefone
    $("#telefone").mask("(00)00000-0000");

    // Validação do formulário
    $('#formulario').validate({
        rules:{
            telefone:{
                required: true,
                minlength: 14,
                maxlength: 14
            }
        },
        messages: {
            telefone: {
                required:"O Telefone é obrigatório",
                minlength:"Informe o telefone no formato (XX)XXXXX-XXXX",
                maxlength:"Informe o telefone no formato (XX)XXXXX-XXXX"
            }
        }
    });
});

function realizarBusca() {
    // Valor da palavra-chave
    var termoPesquisa = document.getElementById('pesquisa').value;

    // Validar se a palavra-chave não está vazia
    if (termoPesquisa.trim() !== '') {
        // Construir a URL de redirecionamento com base no valor
        var urlRedirecionamento = '';

        if (termoPesquisa === 'início') {
            urlRedirecionamento = '../index.html';
        } else if (termoPesquisa === 'quem somos') {
            urlRedirecionamento = 'quemsomos.html';
        }
        else if (termoPesquisa === 'planos') {
            urlRedirecionamento = 'planos.html';
        }
        else if (termoPesquisa === 'contato') {
            urlRedirecionamento = 'contato.html';
        }
        else if (termoPesquisa === 'serviços') {
            urlRedirecionamento = 'servicos.html';
        }
        else if (termoPesquisa === 'vantagens') {
            urlRedirecionamento = 'vantagens.html';
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
