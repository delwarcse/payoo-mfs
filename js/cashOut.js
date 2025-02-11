document.getElementById('btn-cash-out').addEventListener('click',function(event){
event.preventDefault();

const cashOut = document.getElementById('input-cash-out').value;
const cashOutNumber = parseFloat(cashOut);
const cashOutPin = document.getElementById('cash-out-pin').value;

if(cashOutPin === '123'){
    const balance =document.getElementById('ac-balance').innerText;
    const balanceNumber= parseFloat(balance);
    const availableBalance=balanceNumber - cashOutNumber;
    document.getElementById('ac-balance').innerText=availableBalance;
}
else{
    console.log('Wrong Pin Delwar')
}

});