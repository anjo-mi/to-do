document.getElementById('add').addEventListener('click', addItem)

document.getElementById('clear').addEventListener('click', clearDone)

let tasks = 0

let list = document.getElementById('list')

function addItem(){
    let addedItem = ' ' + document.getElementById('task').value
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

function clearDone(){
    let checks = document.querySelectorAll('input[type = checkbox]')
    checks.forEach(item => {
        if (item.checked === true){
            item.parentElement.remove()
            tasks--
        }
    if (tasks === 0){
        document.querySelector('.didIt').style.display = 'none'
    }
    })
    
    console.log(checks)
}
