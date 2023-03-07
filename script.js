var btnPs = document.querySelectorAll('.btnPlus')
var btnMs = document.querySelectorAll('.btnMoins') 

for(let i = 0;i < btnPs.length; i++){
    btnPs[i].addEventListener('click',function(){
        btnPs[i].previousElementSibling.innerText++
        SommeTotal()

    })
}


for(let i = 0;i<btnMs.length;i++){
    btnMs[i].addEventListener('click',function(){
        if(btnMs[i].nextElementSibling.innerHTML>0){
            btnMs[i].nextElementSibling.innerHTML--
            SommeTotal()
        }
        
    })
}



// TESTFOR

let myImage = document.querySelectorAll('.heart')

for(let i = 0;i<myImage.length;i++){

myImage[i].onclick = function(){
    let mySrc = myImage[i].getAttribute('src')
    if (mySrc=='./images/heart.svg') {
        myImage[i].setAttribute('src', './images/heart-red.svg')
}
else {
    myImage[i].setAttribute('src', './images/heart.svg')

}}}




// main.remove()


// let lik = document.querySelector('.trush')
// let cont2=document.querySelector('.container_2')

// lik.addEventListener("click", function(){ 
//     cont2.remove()})


//Test_For
let lik = document.querySelectorAll('.trush')
let cont2=document.querySelector('container_2')

for(let i = 0;i<lik.length;i++){

    lik[i].addEventListener("click", function(){ 
    lik[i].parentElement.parentElement.remove()
    SommeTotal()
})}


function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var priT = document.querySelector('#total')
    var sum = 0

    for(let i =0; i<price.length;i++){
        sum = sum + price[i].innerHTML * qte[i].innerHTML
    }

    priT.innerHTML = sum
}






























var sub = document.querySelector(".sub")
sub.onclick=function () {
    alert('Félicitation!')
    
}


// var prices = document.querySelector(".price1")

// console.log(typeof(prices))