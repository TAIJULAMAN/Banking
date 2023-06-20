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


// calling and add event in deposit button
document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log(clicking for taka);
// calling deposit input
const depositAmount =document.getElementById('deposit-field');
const depositAmountValue =depositAmount.value ;
const newDepositAmountValue =parseFloat(depositAmountValue);
// calling total deposit field and add money
const depositTotal =document.getElementById('deposit-total');
// const depositTotalValue = depositTotal.innerText;
const oldDepositTotalText = depositTotal.innerText;
const oldDepositTotalValue = parseFloat(oldDepositTotalText);
// add old and new deposit value
const newTotalDiposit = oldDepositTotalValue + newDepositAmountValue ;
depositTotal.innerText = newTotalDiposit;
//  call total amount and add  new deposit with total money
const totalBalance = document.getElementById('balance-total');
const oldTotalBalanceText = totalBalance.innerText;
const oldTotalBalancevalue = parseFloat(oldTotalBalanceText);
const newTotalBalanceValue = oldTotalBalancevalue + newDepositAmountValue ;
totalBalance.innerText =newTotalBalanceValue;
// now empty the depositAmount
depositAmount.value ='';
})

