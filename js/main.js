//recupero id list
    const listEmail= document.getElementById("email-list") 
//creo il ciclo di generazione di 10 email
    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(result => result.json())
    .then( (data) => {
       const Email=data.response;
    //sostituisco nell'html js
    listEmail.innerHTML +=`<li>${Email}</li>`;
})

}