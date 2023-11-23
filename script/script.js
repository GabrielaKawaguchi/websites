function filtrarTabela() {
    var input, filtro, tabela, tr, td, i, txtValue;
    input = document.getElementById("filtro");
    filtro = input.value.toUpperCase();
    tabela = document.getElementById("tabela");
    tr = tabela.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
const filtro = document.getElementById('filtro');
filtro.addEventListener('keyup', (event) => {
    let termo = filtro.value.toLowerCase();
    let totalRegistros = document.getElementsByClassName('titulo').length; //length - propriedade que pega a quantidade de uma coisa - nesse caso pega a quantidade de titulos
    for (let i = 0; i < totalRegistros; i++) {
        //pega o título da tabela na linha atual
        let titulo = document.getElementsByClassName('titulo')[i];
        if (titulo.innerHTML.toLowerCase().indexOf(termo) > - 1) {
            titulo.parentNode.style.display = '';
        } else {
            titulo.parentNode.style.display = 'none';
        }
    }
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

