const sockert = io();

const message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    output = document.getElementById('output');
    button = document.getElementById('button');

    button.addEventListener('click', () => {
        socket.emit('userMessage', {
            handle: handle.nodeValue,
            message: message.nodeValue
        })
    })




    socket.on("userMessage", (data) => {
        
        output.innerHTML += '<p> <strong>' + data.handle + ': </strong>' + data.message + '</p>'
    })

    
