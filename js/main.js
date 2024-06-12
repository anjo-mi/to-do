document.getElementById('add').addEventListener('click', addItem)


let list = document.getElementById('list')

function addItem(){
    let addedItem = document.getElementById('task').value
    if (addedItem){
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
    }
    document.getElementById('task').value = ''
}