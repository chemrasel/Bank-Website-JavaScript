// generate deposit button
document.getElementById('deposit-button').addEventListener('click', function () {
    //getting deposit input
    const getInput = document.getElementById('deposit-input');
    const getInputValue = getInput.value;
    const depositValue = parseFloat(getInputValue);
    // deposit field
    const depoField = document.getElementById('deposit-total');
    const getText = depoField.innerText;
    const count = parseFloat(getText);
    const result = count + depositValue;
    depoField.innerText = result;
    getInput.value = '';
    // generate and update main balence
    const prevBalence = document.getElementById('balance-total');
    const balenceText = prevBalence.innerText;
    const getBalence = parseFloat(balenceText);
    const balenceResult = getBalence + depositValue;
    prevBalence.innerText = balenceResult;
});
// generate withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    //generate withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const inputText = withdrawInput.value;
    const float = parseFloat(inputText);
    // generate input field
    const withField = document.getElementById('withdraw-total');
    const withText = withField.innerText;
    const withFloat = parseFloat(withText);
    const getWithdraw = withFloat + float;
    withField.innerText = getWithdraw;
    withdrawInput.value = '';
    // update main balene and reduce withdraw
    const getMain = document.getElementById('balance-total');
    const getUpdateText = getMain.innerText;
    const floating = parseFloat(getUpdateText);
    const result = floating - float;
    getMain.innerText = result;
})


