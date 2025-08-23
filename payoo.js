document.getElementById('login-btn').addEventListener('click', function(e){
    e.preventDefault()
    const defultNum = 1234567890;
    const defultpin = 1234;
    const mobileNumber = parseInt(document.getElementById('num-input').value);
    const pinNumber = parseInt(document.getElementById('pin-input').value);
    if(mobileNumber === defultNum && pinNumber === defultpin){
        window.location.href = "./main.html"
    }
    else{
        alert('Invalid Input')
    }
    
})


