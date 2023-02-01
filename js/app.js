console.log('work')

const PRICE_KM = 0.21
console.log('PRICE_KM')
const discount = 0



let button = document.getElementById('printTicket')
button.addEventListener('click', function () {
    let inputKm = document.getElementById('km').value
    console.log(inputKm)    

    let ageElementSelect = document.getElementById('age').value
    console.log(ageElementSelect)

    let totalPrice = inputKm * PRICE_KM
    

    if (ageElementSelect === "minorenne") {
        discount = totalPrice * 0.2 
        let discountPrice = totalPrice - discount 
        discount = discount.toFixed(2)
        console.log('il prezzo totale scontato del 20% è di €', discountPrice)
    }
    else if (ageElementSelect === "over 65") {
        discount = totalPrice * 0.4
        let discountPrice = totalPrice - discount
        discount = discount.toFixed(2)
        console.log('il prezzo totale scontato del 40% è di €', discountPrice)
    }
    

}

    // switch (ageElementSelect) {
    //     case 'minorenne':
    //         discount = totalPrice * 0.2 
    //         let discountPrice = totalPrice - discount 
    //         discount = discount.toFixed(2)
    //         console.log('il prezzo totale scontato del 20% è di €', discountPrice)
    //         break;
    //     case 'over 65':
    //         discount = totalPrice * 0.4
    //         let discountPrice = totalPrice - discount
    //         discount = discount.toFixed(2)
    //         console.log('il prezzo totale scontato del 20% è di €', discountPrice)
    //         break;

    // }









)



