function applyForVisa(documents) {
    console.log(documents)
    console.log('обработка заявления')
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            Math.random() > 0 ? resolve([]) : reject('в визе отказано')
        }, 2000)
    })
    return promise
}
function bookHotel(visa) {
    console.log(visa)
    console.warn('бронь')
}
function buyTickets() {
    console.warn('покупаем билеты')
}

// function getVisa(visa) {
//     return new Promise(function(res, rej){
//         setTimeout(() => {
//             res(visa)
//         }, 2000)
//     })
// }
applyForVisa({})
    .then((res)=> {
        console.log(res)
        return res
    })
    .then(bookHotel)
    .then(buyTickets)
    .catch(reason => console.error(reason))
console.log('hi')