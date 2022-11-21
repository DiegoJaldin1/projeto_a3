const amqplib = require('amqplib');

const enviarMensagem = async (fila, mensagem) => {
    const conn = await amqplib.connect('amqp://localhost');

    const ch = await conn.createChannel();

    ch.sendToQueue(fila, mensagem);
    
}

module.exports = {enviarMensagem}



