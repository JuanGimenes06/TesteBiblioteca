       

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
                carregar();
                AdicionarIMG();
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

        function deletarIMG(){
            
        }

        function excluirLivro() {
            if (biblioteca.length > 0) {
                biblioteca.pop();
                atualizarNumLivros();
                mostrarLivros();
                deletarIMG();
                carregar();
            }
        }

        let imgIndice = 0;
        let IMAGENS = [];
        let prevButton = document.getElementById('anterior');
        let nextButton = document.getElementById('proximo');
        const IMG = document.getElementById('carrosselImagem');

        function AdicionarIMG(){
            IMAGENS.push("imagem"+(biblioteca.length)+".png")
            carregar()
        }   

        function carregar() {
            IMG.src = IMAGENS[imgIndice];
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


       