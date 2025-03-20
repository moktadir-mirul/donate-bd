const donationArea = document.getElementById('donation-area');
const historyContainer = document.getElementById('history-container');
const mainBalance = document.getElementById('main-balance');
const noakhaliDefault = document.getElementById('noa-default');
const feniDefault = document.getElementById('feni-default');
const quotaDefault = document.getElementById('quota-default');
// const donateDetails = document.getElementById('donateDetails');
const feniInput = Number(document.getElementById('feni-input').value);
const quotaInput = Number(document.getElementById('quota-input').value);
const donateDetails = document.getElementById('donate_details');



function removeActive () {
    let btns = document.querySelectorAll('.active');
    for(let i = 0; i< btns.length; i++) { 
        btns[i].classList.remove('active');
    }
}

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

document.getElementById('noakhali-donate').addEventListener('click', function(event) {
    event.preventDefault();
    
    const noaInput = Number(document.getElementById('noa-input').value);
    let totalDonation = Number(noakhaliDefault.innerText);
    if(noaInput && !isNaN(noaInput)) {
        if(noaInput < Number(mainBalance.innerText)) {
            donateDetails.showModal();
            let result = noaInput + totalDonation;
            noakhaliDefault.innerHTML= result;
            let restAmount = Number(mainBalance.innerText) - noaInput;
            mainBalance.innerHTML = restAmount;  
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
