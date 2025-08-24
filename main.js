document.getElementById('add-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('select-f').value;
    const accountNo = document.getElementById('acc-input').value;
    const pinNo = document.getElementById('pinNo-input').value;
    const addMoney = parseInt(document.getElementById('tk-input').value);
    const balance = parseInt(document.getElementById('balance').innerText);
    if(accountNo.length === 11){
        const totalBalance = balance + addMoney;
        document.getElementById('balance').innerText = totalBalance;
    }
    else{
        alert('Please, provide a valid acc no')
    }
})
document.getElementById('out-btn').addEventListener('click', function(e){
    e.preventDefault();
    const agentNo = document.getElementById('agent-no').value;
    const pinNo = document.getElementById('pinNo-out').value;
    const outMoney = parseInt(document.getElementById('tk-out').value);
    const balance = parseInt(document.getElementById('balance').innerText);
    if(agentNo.length === 11){
        const totalBalance = balance - outMoney;
        document.getElementById('balance').innerText = totalBalance;
    }
    else{
        alert('Please, provide a valid acc no')
    }
})

document.getElementById('addSection-btn').addEventListener('click', function(){
    document.getElementById('money-out').style.display='none';
    document.getElementById('money-add').style.display='block';
    
})
document.getElementById('outSection-btn').addEventListener('click', function(){
    document.getElementById('money-add').style.display='none';
    document.getElementById('money-out').style.display='block';
})
document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href = "./index.html"
})