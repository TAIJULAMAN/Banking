// DEPOSIT
// <input id="deposit-field" placeholder="deposit Amount">
//  <button id="btn-deposit">Deposit</button>

// WITHDRAW
// <input id="withdraw-field" placeholder="withdraw Amount">
// <button id="btn-withdraw">Withdraw</button>

// TOTAL
//<h2 class="text-5xl">$<span id="deposit-total">00</span></h2>
//<h2 class="text-5xl">$<span id="withdraw-total">00</span></h2>
//<h2 class="text-5xl">$<span id="balance-total">100000</span></h2>

// calling and add event in  button
document.getElementById('btn-withdraw').addEventListener('click',function(){
    // console.log(clicking for taka);
// calling withdraw input
const withdrawAmount =document.getElementById('withdraw-field');
const withdrawAmountValue =withdrawAmount.value ;
const newWithdrawAmountValue =parseFloat(withdrawAmountValue);
// calling total withdraw field and add money
const withdrawTotal =document.getElementById('withdraw-total');
const oldWithdrawTotalText = withdrawTotal.innerText;
const oldWithdrawTotalValue = parseFloat(oldWithdrawTotalText);
// add old and new deposit value
const newTotalWithdraw = oldWithdrawTotalValue + newWithdrawAmountValue ;
withdrawTotal.innerText = newTotalWithdraw;
//  call total amount and add  new deposit with total money
const totalBalance = document.getElementById('balance-total');
const oldTotalBalanceText = totalBalance.innerText;
const oldTotalBalanceValue = parseFloat(oldTotalBalanceText);
const newTotalBalanceValue = oldTotalBalanceValue - newWithdrawAmountValue ;
totalBalance.innerText =newTotalBalanceValue;
// now empty the depositAmount
withdrawAmount.value ='';
})