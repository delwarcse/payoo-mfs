//show the cash out form and hide add money form
document.getElementById('btn-show-cash-out').addEventListener('click',function(){
document.getElementById('cash-out-form').classList.remove('hidden');
document.getElementById('add-money-form').classList.add('hidden');
});

//show the add money  form and hide cash out  form
document.getElementById('btn-show-add-money').addEventListener('click',function(){
document.getElementById('add-money-form').classList.remove('hidden');
document.getElementById('cash-out-form').classList.add('hidden');
});