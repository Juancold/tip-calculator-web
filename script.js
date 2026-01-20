// ===============================================
// JAVASCRIPT DA LISTA DE TAREFAS
// ===============================================

// PARTE 1: SELECIONANDO OS ELEMENTOS PRINCIPAIS
// Como no projeto anterior, primeiro "pegamos" os elementos do HTML que vamos usar.
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


// PARTE 2: A FUNÇÃO PARA ADICIONAR UMA NOVA TAREFA
function addTask() {
    // Pega o texto do campo de input e remove espaços em branco do início e do fim.
    const taskText = taskInput.value.trim();

    // Validação: se o campo estiver vazio, não faz nada.
    if (taskText === "") {
        alert("Por favor, digite uma tarefa.");
        return; // Para a execução da função aqui.
    }

    // AQUI ESTÁ A MÁGICA: criando um novo elemento HTML (um <li>) via JavaScript.
    const li = document.createElement('li');
    li.className = 'task-item'; // Adiciona a classe CSS que já criamos.

    // Define o conteúdo HTML do nosso novo <li>.
    // Usamos template literals (crases ``) para inserir o texto da tarefa facilmente.
    li.innerHTML = `
        <span>${taskText}</span>
        <div class="task-buttons">
            <button class="complete-btn">✓</button>
            <button class="delete-btn">X</button>
        </div>
    `;

    // Adiciona o novo <li> que acabamos de criar à nossa lista <ul> no HTML.
    taskList.appendChild(li);

    // Limpa o campo de input para o usuário poder digitar uma nova tarefa.
    taskInput.value = "";
}


// PARTE 3: OUVINDO O EVENTO DE CLIQUE
// Dizemos ao botão "Adicionar" para executar a função addTask sempre que for clicado.
addTaskBtn.addEventListener('click', addTask);
// ===============================================
// PARTE 4: LIDANDO COM AS AÇÕES DE CONCLUIR E APAGAR
// ===============================================

// Usamos a técnica de "Event Delegation".
// Adicionamos um único "ouvinte" na lista inteira (o elemento "pai").
taskList.addEventListener('click', function(event) {
    // A variável "event" contém informações sobre o que aconteceu.
    // "event.target" é o elemento exato que foi clicado (o botão ✓, o botão X, etc.)
    const clickedElement = event.target;

    // VERIFICA SE O BOTÃO DE CONCLUIR (✓) FOI CLICADO
    // .classList.contains() checa se o elemento tem uma classe específica.
    if (clickedElement.classList.contains('complete-btn')) {
        
        // .closest('.task-item') encontra o elemento "pai" mais próximo com a classe 'task-item'.
        // Ou seja, encontramos o <li> inteiro a partir do botão que foi clicado.
        const taskItem = clickedElement.closest('.task-item');
        
        // .classList.toggle('completed') adiciona a classe se ela não existir,
        // e remove se ela já existir. É um "liga/desliga".
        taskItem.classList.toggle('completed');
    }

    // VERIFICA SE O BOTÃO DE APAGAR (X) FOI CLICADO
    if (clickedElement.classList.contains('delete-btn')) {
        
        const taskItem = clickedElement.closest('.task-item');
        
        // .remove() simplesmente apaga o elemento da página.
        taskItem.remove();
    }
});