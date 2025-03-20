const donationArea = document.getElementById('donation-area');
const historyContainer = document.getElementById('history-container');
const mainBalance = (document.getElementById('main-balance').innerText);
const noakhaliDefault = document.getElementById('noa-default').innerText;
const feniDefault = document.getElementById('feni-default');
const quotaDefault = document.getElementById('quota-default');
const donateDetails = document.getElementById('donateDetails');
const feniInput = Number(document.getElementById('feni-input').value);
const quotaInput = Number(document.getElementById('quota-input').value);

let btns = document.querySelectorAll('.active');

function removeActive () {
    for(let i = 0; i< btns.length; i++) { 
        btns[i].classList.remove('active');
    }
}
removeActive();
document.getElementById('donate-btn').addEventListener('click', function() {
    removeActive();
    document.getElementById('donate-btn').classList.add('active');
    document.getElementById('footer').classList.remove('fixed');
    donationArea.classList.remove('hidden');
    historyContainer.classList.add('hidden');
})
document.getElementById('history-btn').addEventListener('click', function() {
    removeActive();
    document.getElementById('history-btn').classList.add('active');
    document.getElementById('footer').classList.add('fixed');
    donationArea.classList.add('hidden');
    historyContainer.classList.remove('hidden');
})

document.getElementById('noakhali-donate').addEventListener('click', function() {
    const noaInput = Number(document.getElementById('noa-input').value);
    console.log(mainBalance);
    console.log(typeof noakhaliDefault);
    let totalDonation = Number(noakhaliDefault);
    if(noaInput && !isNaN(noaInput)) {
        if(noaInput < mainBalance) {
            console.log(noaInput, typeof noaInput);
            console.log(totalDonation, typeof totalDonation);
            
            
            let result = noaInput + totalDonation;
            console.log(result);
            
            noakhaliDefault.innerText= result;
            let restAmount = mainBalance - noaInput;
            mainBalance.innerHTML = restAmount;
            // donateDetails.showModal();
        }
        else {
            alert("You don't have sufficient balance!")
        }
    }
    else {
        alert('Please input a valid amount to donate')
    }
    document.getElementById('noa-input').value = '';
    
})