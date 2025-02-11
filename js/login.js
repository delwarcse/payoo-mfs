//step 1 - set event  handler
document.getElementById('button-login')
    .addEventListener('click', function (event) {
        //step 2 - prevent default behaviour (prevent reloading Browser)
        event.preventDefault();
        // console.log('Login Button Clicked');

        //step 3 - get the phone number & pin number
        const phoneNumber = document.getElementById('phone-number').value;
        const pinNumber = document.getElementById('pin-number').value;
        // console.log(phoneNumber, pinNumber);

        //step 4 - validte phone & pin
        //the temporary way for matching
        if (phoneNumber === '29' && pinNumber === '123') {
            console.log('you are Logged In');
            //step 5 - allow user to use the website
            window.location.href= '/home.html';

        }
        else {
            alert('wrong input!')
        }

    });