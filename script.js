let biblioteca = []

        function cadastro(nome, autor, ano){
            var livro = {
                titulo: nome,
                autor: autor,
                ano: ano
            };
            biblioteca.push(livro)
        }

        function adicionar(){
            let nome = document.getElementById("nomeLivro").value;
            let autor = document.getElementById("autorLivro").value;
            let ano = document.getElementById("anoLivro").value
            cadastro(nome, autor, ano);
        }

        

        function mostrarLivros(){
            let resultado = "";
            let listElement = document.getElementById('mostra');
            listElement.innerHTML = "";
    
            for (let livro of biblioteca) {
                resultado += `Nome: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano}`;
            }

            document.getElementById('mostra').innerHTML = resultado;

            if(biblioteca == 0){
                document.getElementById('mostra').innerHTML = "cadastre um livro";
            }

          }
          
            
        