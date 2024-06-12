document.getElementById('add').addEventListener('click', addItem)

document.getElementById('clear').addEventListener('click', clearDone)

let tasks = 0

let list = document.getElementById('list')

function startTimer(date){
    setInterval(() =>{
        let time = date - Date.now()
        let days = Math.floor((time / (1000*60*60*24)))
        let hours = Math.floor(time % (1000*60*60*24) / (1000*60*60))
        let minutes = Math.floor(time % (1000*60*60) / (1000*60))
        let seconds = Math.floor(time % (1000*60) / 1000)
        document.querySelector('.timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`
    },1000)

}

function addItem(){
    let addedItem = '  ' + document.getElementById('task').value
    let doneBy = +new Date(document.querySelector('input[type = "datetime-local"]').value)
    if (addedItem !== '  '){
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
        if(doneBy){
            let timer = document.createElement('span')
            timer.setAttribute('class', 'timer')
            li.appendChild(timer)
            startTimer(doneBy)
        }
    }
    document.getElementById('task').value = ''
}

function clearDone(){
    let checks = document.querySelectorAll('input[type = "checkbox"]')
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
