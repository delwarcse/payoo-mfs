document.getElementById('btn-add-money').addEventListener('click',function(event){
event.preventDefault();
const inputAmount=document.getElementById('input-add-money').value;
const amountNumber= parseFloat(inputAmount);
const pin=document.getElementById('input-pin').value;
if(pin === '123'){
    const currentBalanc=document.getElementById('ac-balance').innerText;
    const balancNumber=parseFloat(currentBalanc);
    const newBalanche=amountNumber + balancNumber;
    document.getElementById('ac-balance').innerText=newBalanche;
}
else{
    console.log('False Pin')
}

});