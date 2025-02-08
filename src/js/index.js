/*
Objetivo 1 - quando o usuario clicar no botao de "Mostrar Mais", deve abrir os projetos que estao escondidos no html:

        Passo 1 - pegar o botao "Mostrar Mais" no JS para poder verificar quando o usuario clicar em cima dele.

        Passo 2 - Identificar o clique do botao.

        Passo 3 - adicionar a classe: "Ativo" nos projetos escondidos.

Objetivo 2 - esconder o botao de "mostrar Mais":

        Passo 1 - pegar o botao e esconder ele.

*/

//Objetivo 1:
//Passo 1:

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos'); //representacao do botao no JS/ QuerySeletor busca apenas 1 elemento que tem esse ID/classe
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)'); //Query Selector ALL, busca todos os elementos




//Passo 2:
botaoMostrarProjetos.addEventListener("click", () => { //bloco de execucao da funcao - dispara a acao
    //Passo 3: dentro do Passo 2
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    })
})