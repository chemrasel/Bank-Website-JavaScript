
function inputField() {
    const depoInput = document.getElementById('deposit-input');
    const inputValue = depoInput.value;
    const inputFloat = parseFloat(inputValue);
    depoInput.value = '';

    return inputFloat;
}
// // getting deposite
document.getElementById('deposit-button').addEventListener('click', function () {
    const inputFloat = inputField('deposit-input');
    // updating deposit total
    const depoTotal = document.getElementById('deposit-total');
    const depoText = depoTotal.innerText;
    const getDepoText = parseFloat(depoText);
    const gepositTotal = inputFloat + getDepoText;
    depoTotal.innerText = gepositTotal;
    // update balence Info:
    const prevBalence = document.getElementById('balance-total');
    const getBalenceText = prevBalence.innerText;
    const balenceFloat = parseFloat(getBalenceText);
    const getBalence = inputFloat + balenceFloat;
    prevBalence.innerText = getBalence;
});

// getting withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // getting withdraw unit
    // const getId = document.getElementById('withdraw-input');
    // const getValue = getId.value;
    // const floating = parseFloat(getValue);
    const floating = inputField('withdraw-input');
    // update withdraw calculation
    const withdrawTotal = document.getElementById('withdraw-total');
    const getWithdrawText = withdrawTotal.innerText;
    const getWithdrawTotal = parseFloat(getWithdrawText);
    const getTotal = convertToFloat + getWithdrawTotal;
    withdrawTotal.innerText = getTotal;

    // update balence Calculation
    const GetPrevBalence = document.getElementById('balance-total');
    const getTextBalence = GetPrevBalence.innerText;
    const getFloat = parseFloat(getTextBalence);
    const subTotalBalence = getFloat - convertToFloat;
    GetPrevBalence.innerText = subTotalBalence;

});