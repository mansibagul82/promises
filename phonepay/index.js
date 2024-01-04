function payment (){

    return new Promise((resolve,reject) => {
        setTimeout (()=> {
            const isSuccess = Math.random() < 0.5 ;
            if (isSuccess){
                resolve();
            }
            else{
                reject();
            }
        },2000);

    })
}

function startPayment(){
    const paymentscreen = document.querySelector('#payment_screen');
    paymentscreen.innerHTML =`<div class ="processing"> Processing...</div>`;

    payment()
    .then(()=>{
        paymentscreen.innerHTML = `<div style = "color: green; text-align: center;  font-size: 28px;"> Payment Successful !</div> 
        <!-- Add UI Elements Similar To Phonepe App Here -->`;

    })
    .catch(()=>{
        paymentscreen.innerHTML = `<div style = "color: red; text-align: center;  font-size: 28px;"> Payment Failed !</div> 
        <!-- Add UI Elements Similar To Phonepe App Here -->`
    })
}