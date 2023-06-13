/*
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
console.log(first);

function doubleIt(num) {
    const result = num * 2;
    return result;
}
console.log(doubleIt(6));
console.log(doubleIt(7));
*/

function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const value = input.value;
    input.value = '';
    return value;
}

document.getElementById('deposit-btn').addEventListener('click', function () {
    /*
    // const depositInput = document.getElementById('deposit-input');
    // const depositValue = depositInput.value;
    // console.log(depositValue);
    */
    const depositValue = getInputValue('deposit-input');
    //get current deposit

    const depositTotal = document.getElementById('total-deposit');
    const depositTotalText = depositTotal.innerText;

    depositTotal.innerText = parseFloat(depositTotalText) + parseFloat(depositValue);

    // console.log(depositTotalText);


    //Total
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;

    totalBalance.innerText = parseFloat(totalBalanceText) + parseFloat(depositValue);

})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    /*
// const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputValue = withdrawInput.value;
    // // console.log(withdrawInputValue);
    */

    const withdrawInputValue = getInputValue('withdraw-input');
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawText = totalWithdraw.innerText;

    totalWithdraw.innerText = parseFloat(withdrawInputValue) + parseFloat(totalWithdrawText);

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;

    totalBalance.innerText = parseFloat(totalBalanceText) - parseFloat(withdrawInputValue);

})