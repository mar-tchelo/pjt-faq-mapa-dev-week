// buscar os items da tela
const intensPerguntasERepostas = document.querySelectorAll('.item');

// Virificar qual intem foi clicado

intensPerguntasERepostas.forEach(function (item) {
    item.addEventListener('click', function (){
        // Verificar se a pergunta clicada esta com classe ativo
        const estaAtiva = item.classList.contains('ativo')

        //Eu preciso fechar todas
        intensPerguntasERepostas.forEach(function(item){
            item.classList.remove('ativo');
        });
       
        //Se a pergunta não esta ativa
       if (!estaAtiva){
            //Abrir a resposta atual
           item.classList.add('ativo');
           // se a pergunta estiver ativa
       } else {
           // remove a classe ativo
           item.classList.remove('ativo');
       }

    });
})