allTask = [];
let id = 0

const task = document.getElementById('task')
const addTask = function(){
    
    let template = {
        id: id,
        desc: task.value.trim(),
        status:false
    }
    
    if (task.value === '') {
        alert('No olvides escriber la tarea.')
        task.focus()
    } else {
        id++;
        allTask.push(template);
        console.log(allTask)
        renderList()
    }
    task.value = ''
}


const renderList = () => {
    const tagList = document.getElementById('list')
    const contador = document.getElementById('total')
    let cont = allTask.length
    let lista  = ''
    tagList.innerHTML = ''
    contador.innerHTML = cont;
    for (let i = 0; i < allTask.length; i++) {
        lista += `
        <tr id='tarea${allTask[i].id}'>
            <th scope='row'>${allTask[i].id}</th>
            <td>${allTask[i].desc}</td>
            <td><input type="checkbox" onClick="checkBox(${allTask[i].id}, this)"/></td>
            <td><i class="fa-solid fa-trash-can pointer" onClick="deleteTask(${allTask[i].id})"></i></td>
      </tr>`
        tagList.innerHTML = lista;
        
    }
}
const deleteTask = (id) => {
    const indexTask = allTask.findIndex((task) => task.id == id);
    allTask.splice(indexTask, 1);
    renderList();
};

const checkBox = (id, tag) => {
        const taskTag = document.getElementById('tarea'+id)
   if (tag.checked === true) {
        allTask[id].status = true;
        console.log(allTask[id].status)
        
        taskTag.style.textDecoration = 'line-through'
    
    } else {
        allTask[id].status = false;
        console.log(allTask[id].status)
        taskTag.style.textDecoration = 'none'
    }
    completeTask()
};

const completeTask = () => {
    const contador = document.getElementById('done')
    const taskDone = allTask.filter((task) => task.status == true);
    done.innerHTML = taskDone.length
    
  };
