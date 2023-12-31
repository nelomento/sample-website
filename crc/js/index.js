const page_container = document.getElementById('page-container')
const task_container = document.getElementById('all-task')

let start_id = 1

let selected_page = 0

let app_data = [
    {
        name: "Untitled",
        task:[
             {name:"Task1",is_completed:false, id:1},
             //{name:"task2",is_completed:false, id:2},
        ],
    }    
    ]

app_data[0].task[0].name = "New Name"

const change_task_name = id =>{
    const pos = id - 1
    const task_input = document.getElementById("task_"+id)

    app_data[selected_page].task[pos].name = task_input.value
}

const change_page = (id) =>{
    selected_page = id - 1
    let name = ""

    if(app_data[selected_page].name !== "Untitled"){
        name = app_data[selected_page].name
    }

    document.getElementById('page_name').value = name
    set_page()
    set_task()
}

const set_page = () =>{
    let content = ''

    for(let index = 0; index < app_data.length; index++) {
        const element = app_data[index];
        const className = element.id-1 == selected_page ? "page active" : "page"
        content += `
            <div onclick= "change_page(${element.id})" class="${className}" id="page_${element.id}">
            ${element.name}
            </div>
        `
    }

    page_container.innerHTML = content
}

const set_task = () => {
    let = all_task = ''

    for (let index = 0; index < app_data[selected_page].task.length; index++) {
        const element = app_data[selected_page].task[index];

        const input_value = element.name ==="Task Name" ? "" : element.name

        all_task +=`
           <div class="task">
              <input class="my-checkbox" type="checkbox">
              <input oninput="change_task_name(${element.id})"class="task-name" id="task_${element.id} value="${input_value}" placeholder="Task Name">
           </div>
   
        `

    }

    task_container.innerHTML = all_task
}

const add_task = () =>{
    const task_lenght = app_data[selected_page].task.length
    const last_id = app_data[selected_page].task[task_lenght-1].id

    app_data[selected_page].task.push({name:"Task Name",is_completed:false, id:last_id+1})
    console.log(app_data);
    set_task()
}

const add_page =() => {
   start_id = start_id + 1
   app_data.push({name:"Untitled",task:[{name:"Task Name",is_completed:false, id:1},],id:start_id})

   console.log(app_data)
   set_page()
}

const update_page_name = ()=>{
    const page_name = document.getElementById("page_name").value

    app_data[selected_page].name = page_name
    set_page()
}

set_page()
set_task()




