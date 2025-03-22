const donationArea = document.getElementById('donation-area');
const historyContainer = document.getElementById('history-container');
const mainBalance = document.getElementById('main-balance');
const noakhaliDefault = document.getElementById('noa-default');
const feniDefault = document.getElementById('feni-default');
const quotaDefault = document.getElementById('quota-default');
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
            const dateNow = new Date();  
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="w-4/5 mx-auto p-4 border border-gray-200 rounded-lg">
                <h1 class="text-xl font-bold text-black">
                    ${noaInput} Taka is donated for flood relief in Noakhali
                </h1>
                <p class="text-gray-500 text-lg font-light">
                    Date: ${dateNow}
                </p>
            </div>
            `
            historyContainer.appendChild(div);
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

document.getElementById('feni-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const feniInput = Number(document.getElementById('feni-input').value);
    let totalDonation = Number(feniDefault.innerText);
    if(feniInput && !isNaN(feniInput)) {
        if(feniInput < Number(mainBalance.innerText)) {
            donateDetails.showModal();
            let result = feniInput + totalDonation;
            feniDefault.innerHTML= result;
            let restAmount = Number(mainBalance.innerText) - feniInput;
            mainBalance.innerHTML = restAmount;
            const dateNow = new Date();  
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="w-4/5 mx-auto p-4 border border-gray-200 rounded-lg">
                <h1 class="text-xl font-bold text-black">
                    ${feniInput} Taka is donated for flood relief in Feni
                </h1>
                <p class="text-gray-500 text-lg font-light">
                    Date: ${dateNow}
                </p>
            </div>
            `
            historyContainer.appendChild(div);
        }
        else {
            alert("You don't have sufficient balance!")
        }
    }
    else {
        alert('Please input a valid amount to donate')
    }
    document.getElementById('feni-input').value = '';
})

document.getElementById('quota-donate').addEventListener('click', function(event) {
    event.preventDefault();
    const quotaInput = Number(document.getElementById('quota-input').value);
    let totalDonation = Number(quotaDefault.innerText);
    if(quotaInput && !isNaN(quotaInput)) {
        if(quotaInput < Number(mainBalance.innerText)) {
            donateDetails.showModal();
            let result = quotaInput + totalDonation;
            quotaDefault.innerHTML= result;
            let restAmount = Number(mainBalance.innerText) - quotaInput;
            mainBalance.innerHTML = restAmount;
            const dateNow = new Date();  
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="w-4/5 mx-auto p-4 border border-gray-200 rounded-lg">
                <h1 class="text-xl font-bold text-black">
                    ${quotaInput} Taka is donated for aid for injured in quota movement in Dhaka, Bangladesh
                </h1>
                <p class="text-gray-500 text-lg font-light">
                    Date: ${dateNow}
                </p>
            </div>
            `
            historyContainer.appendChild(div);
        }
        else {
            alert("You don't have sufficient balance!")
        }
    }
    else {
        alert('Please input a valid amount to donate')
    }
    document.getElementById('quota-input').value = '';
})

