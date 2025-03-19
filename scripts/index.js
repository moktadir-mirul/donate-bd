const donationArea = document.getElementById('donation-area');
const historyContainer = document.getElementById('history-container');
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