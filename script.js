       

        let biblioteca = [];

        function adicionarLivro() {
            var nome = document.getElementById('nomeLivro').value;
            var autor = document.getElementById('autorLivro').value;
            var ano = document.getElementById('anoLivro').value;

            if (nome && autor && ano) {
                cadastrarLivro(nome, autor, ano);
                limparCampos();
                exibirMensagem("");
                atualizarNumLivros();
                fadeIn();
                carregar();
            } else {
                exibirMensagem("Cadastre um livro");
        }}

        function cadastrarLivro(nome, autor, ano) {
            let livro = {
                titulo: nome,
                autor: autor,
                ano: ano,
                imagem: IMAGENS[imgIndice]
            };
            biblioteca.push(livro);
        }

        function mostrarLivros() {
            var listaLivros = document.getElementById("listaLivros");
            listaLivros.innerHTML = "";

            biblioteca.forEach((livro, index) => {
                const listItem = document.createElement("li");
                listItem.textContent = `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`;
                listaLivros.appendChild(listItem);
            });
        }

        function limparCampos() {
            document.getElementById('nomeLivro').value = "";
            document.getElementById('autorLivro').value = "";
            document.getElementById('anoLivro').value = "";
        }

        function exibirMensagem(mensagem) {
            let elementoMensagem = document.getElementById("mensagem");
            elementoMensagem.textContent = mensagem;
        }

        function atualizarNumLivros() {
            var numLivrosElemento = document.getElementById("numLivros");
            var numLivros = biblioteca.length;
            numLivrosElemento.textContent = `Número de livros cadastrados: ${numLivros}`;
        }

        function excluirLivro() {
            if (biblioteca.length > 0) {
                biblioteca.pop();
                atualizarNumLivros();
                mostrarLivros();
                carregar();
            }
        }

        let imgIndice = 0;
        const IMAGENS = ['Imagem1.png', 'Imagem2.png', 'Imagem3.png', 'Imagem4.png'];
        let prevButton = document.getElementById('anterior');
        let nextButton = document.getElementById('proximo');
        const IMG = document.getElementById('carrosselImagem');

        function carregar() {
            IMG.style.opacity = 0;
            fadeIn();
            IMG.src = biblioteca[biblioteca.length - 1].imagem;
            }

        function fadeIn() {
    let opacidade = 0;

    const fadeInterval = setInterval(() => {
        opacidade += 0.03;
        IMG.style.opacity = opacidade;

        if (opacidade >= 1) {
            clearInterval(fadeInterval);
        }
    }, 20);
        }

        prevButton.addEventListener('click', () => {
        if (imgIndice > 0) {
            --imgIndice;
        carregar();
    }
        });

        nextButton.addEventListener('click', () => {
        const limite = IMAGENS.length - 1;
        if (imgIndice < limite) {
        ++imgIndice;
        carregar();
        }
        });

        



        carregar();
       