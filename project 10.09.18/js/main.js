function orderCredit(clientDocs) {
    console.log("Order in processing");
    let promise = new Promise(function(resolve, reject){ 
        setTimeout(function(){
            let result = Math.random() > .5;
            if (result) {                                //resolve - true; reject - false
                resolve(clientDocs);
            } else {
                reject("Order rejected");
            }
        }, 3000)
    })
    return promise;
}
let clientDocs = {
    name: 'Luck',
    surname: 'Skywaker',
    passport: 'Ws3K45',
    prison: false,
    religion: 'Djehad',
    clientHistory: 'Good'
}

orderCredit(clientDocs)
.then(UBKI) //then always work if true (return resolve == true)
.then(prison)
.catch(err => console.log(err)); //catch always work if false

function UBKI(clientDocs) {
    console.log('UBKI is working');
    return new Promise(function(resolve, reject) {
        if(clientDocs.clientHistory == 'Good') {
            console.log('UBKI accepted')
            resolve(clientDocs);
        } else {
            reject('UBKI rejected');
        }
    })
}
function prison(clientDocs) {
    console.log('Prison is working');
    return new Promise(function(resolve, reject){
        if (clientDocs.prison == true){
            reject("prison rejected")
        } else {
            console.log('prison accepted')
            resolve(clientDocs);
        }
    })
}