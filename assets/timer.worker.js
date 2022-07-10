// const ctx = self;

// ctx.addEventListener('message', async event => {
//     console.log('Workerだよ！受信したよ →', event.data);
//     ctx.postMessage('Workerからのデータです');
// });

onmessage = ()=>{
    console.log("get messages");
    postMessage(null);
}