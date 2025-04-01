console.log('index.js')

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
    newBalance.innerText = mainBalance - donateAmountNoakhali;
    newBalanceNoakhali.innerText = noakhaliBalace + donateAmountNoakhali;
    document.getElementById('donate-amount-noakhali').value = '';
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
    newBalance.innerText = mainBalance - donateAmountFeni;
    newBalancefeni.innerText = feniBalace + donateAmountFeni;
    document.getElementById('donate-amount-feni').value = '';
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
    newBalance.innerText = mainBalance - donateAmountQuota;
    newBalanceQuota.innerText = QuotaBalace + donateAmountQuota;
    document.getElementById('donate-quota-amount').value = '';
});

