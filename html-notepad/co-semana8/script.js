const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const taskText = taskInput.value.trim();
  if(taskText !== ''){

    const newItem = document.createElement('li');

    newItem.innerHTML = `<span>${taskText}</span> 
    <button onclick="editar(this)">Editar</button>
    <button onclick="delet(this)">Remover</button>
    <button onclick="completar(this)">Feito</button>`;

    taskList.appendChild(newItem);
    taskInput.value = '';
    }
}

function editar(botao){

    const li = botao.parentElement;

    const span = li.querySelector('span');

    const newText = prompt('Editar tarefa:', span.innerText);

    if(newText !== null && newText.trim() !== '') {
        span.innerText = newText;
    }
}

function delet(botao){

    const li = botao.parentElement;
    
    li.remove();
}
function completar(botao){

    const li = botao.parentElement;

    li.classList.toggle('completed');
}