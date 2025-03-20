const donationArea = document.getElementById('donation-area');
const historyContainer = document.getElementById('history-container');
const mainBalance = document.getElementById('main-balance');
const noakhaliDefault = document.getElementById('noa-default');
const feniDefault = document.getElementById('feni-default');
const quotaDefault = document.getElementById('quota-default');
const noaInput = document.getElementById('noa-input').value;
const feniInput = document.getElementById('feni-input').value;
const quotaInput = document.getElementById('quota-input').value;
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
    console.log('click hoise');
    
}
)