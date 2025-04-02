console.log('index.js')

// donation button and hide history section
document.getElementById('donation-btn').addEventListener('click', function () {
    // const showDonatinSection = document.getElementById('show-donation-section');
    const historyBtn = document.getElementById('history-btn');
    const donationBtn = document.getElementById('donation-btn');
    historyBtn.style.backgroundColor = '';
    donationBtn.classList.remove('bg-gray-300');
    const donationSection = document.getElementById('donation-section');
    donationSection.classList.remove('hidden');
    document.getElementById("history-section").setAttribute("hidden");
});
// history button and hide donation section
document.getElementById('history-btn').addEventListener('click', function () {
    // const hideDonatinSection = document.getElementById('show-donation-section');
    // hideDonatinSection.classList.add(hidden);
    const donationBtn = document.getElementById('donation-btn');
    const historyBtn = document.getElementById('history-btn');
    donationBtn.classList.add('bg-gray-300');
    historyBtn.style.backgroundColor = '#B4F461';
    const donationSection = document.getElementById('donation-section');
    donationSection.classList.add('hidden');
    document.getElementById("history-section").removeAttribute("hidden");

});

// Donate for Noakhali
document.getElementById('donate-noakhali-btn').addEventListener('click', function () {
    const mainBalance = convertStringToNumber('main-balance');
    const donateAmountNoakhali = getInputValue('donate-amount-noakhali');
    const newBalance = document.getElementById('main-balance');
    const noakhaliBalace = convertStringToNumber('noakhali-balance');
    const newBalanceNoakhali = document.getElementById('noakhali-balance');
    if (isNaN(donateAmountNoakhali) || donateAmountNoakhali <= 0) {
        alert('Please enter a valid number')
        return;
    }
    else if (donateAmountNoakhali > mainBalance) {
        alert(`You don't have enough money`);
        return;

    }
    newBalance.innerText = mainBalance - donateAmountNoakhali;
    newBalanceNoakhali.innerText = noakhaliBalace + donateAmountNoakhali;
    // add to history section
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class="text-xl font-bold">${donateAmountNoakhali} Taka is Donated for Flood at Noakhali, Bangladesh</h1>
    <p class="text-gray-400 pt-3">${new Date().toString()}</p>
    `
    div.classList.add("border", "border-gray-300", "p-4", "rounded-lg", "mt-4");
    document.getElementById('history-section').appendChild(div);
    document.getElementById('donate-amount-noakhali').value = '';
    my_modal_1.showModal();
});
// Donate for Feni
document.getElementById('donate-feni-btn').addEventListener('click', function () {
    const mainBalance = convertStringToNumber('main-balance');
    const donateAmountFeni = getInputValue('donate-amount-feni');
    const newBalance = document.getElementById('main-balance');
    const feniBalace = convertStringToNumber('feni-balance');
    const newBalancefeni = document.getElementById('feni-balance');
    if (isNaN(donateAmountFeni) || donateAmountFeni <= 0) {
        alert('Please enter a valid number')
        return;
    }
    else if (donateAmountFeni > mainBalance) {
        alert(`You don't have enough money`);
        return;

    }
    newBalance.innerText = mainBalance - donateAmountFeni;
    newBalancefeni.innerText = feniBalace + donateAmountFeni;
    // add to history section
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class="text-xl font-bold">${donateAmountFeni} Taka is Donated for Flood Relief at Feni, Bangladesh</h1>
    <p class="text-gray-400 pt-3">${new Date().toString()}</p>
    `
    div.classList.add("border", "border-gray-300", "p-4", "rounded-lg", "mt-4");
    document.getElementById('history-section').appendChild(div);
    document.getElementById('donate-amount-feni').value = '';
    my_modal_2.showModal();
});
// Donate for injured in quota movement
document.getElementById('donate-quota-btn').addEventListener('click', function () {
    const mainBalance = convertStringToNumber('main-balance');
    const donateAmountQuota = getInputValue('donate-quota-amount');
    const newBalance = document.getElementById('main-balance');
    const QuotaBalace = convertStringToNumber('quota-balance');
    const newBalanceQuota = document.getElementById('quota-balance');
    if (isNaN(donateAmountQuota) || donateAmountQuota <= 0) {
        alert('Please enter a valid number')
        return;
    }
    else if (donateAmountQuota > mainBalance) {
        alert(`You don't have enough money`);
        return;

    }
    newBalance.innerText = mainBalance - donateAmountQuota;
    newBalanceQuota.innerText = QuotaBalace + donateAmountQuota;
    // add to history section
    const div = document.createElement('div');
    div.innerHTML = `
    <h1 class="text-xl font-bold">${donateAmountQuota} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
    <p class="text-gray-400 pt-3">${new Date().toString()}</p>
    `
    div.classList.add("border", "border-gray-300", "p-4", "rounded-lg", "mt-4");
    document.getElementById('history-section').appendChild(div);
    document.getElementById('donate-quota-amount').value = '';
    my_modal_3.showModal();
});

