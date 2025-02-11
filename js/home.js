//add money to the account

//step 1 - add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();

        //step 2 - get money to be added to the account   
        const inputMoney = document.getElementById('input-add-money').value;
        // console.log(inputMoney);
        const inputMoneyNumber = parseFloat(inputMoney);
        const inputPin = document.getElementById('input-pin').value;
        console.log(inputPin);

        //step 3 - pin Varify(temporal)
        if (inputPin === "123") {
            console.log('money add');
            //step 4 - get the current balance
            const currentBalance = document.getElementById('ac-balance').innerText;
            // console.log(currentBalance);
            const balanceMoneyNumber = parseFloat(currentBalance);

            //stef 5 - add  inputMoney with balance
            const newBalance = inputMoneyNumber + balanceMoneyNumber;
            console.log(newBalance);

            //step 6 - update the balance in the UI/DOM
            document.getElementById('ac-balance').innerText = newBalance;
        }
        else {
            alert('Failed to add money');
        }


    });