document.getElementById('add').addEventListener('click', addItem)

let tasks = 0

let list = document.getElementById('list')

function addItem(){
    let addedItem = document.getElementById('task').value
    if (addedItem){
        tasks++
        let li = document.createElement('li')
        let input = document.createElement('input')
        let chore = document.createElement('span')
        li.setAttribute('class', 'listItem')
        input.setAttribute('type', 'checkbox')
        chore.setAttribute('class', 'chore')
        chore.innerText = addedItem
        li.appendChild(input)
        li.appendChild(chore)
        list.appendChild(li)
        if(tasks > 0) {
            document.querySelector('.didIt').style.display = 'block'
        }
    }
    document.getElementById('task').value = ''
}

// decrement tasks foreach qsALL on checkboxes