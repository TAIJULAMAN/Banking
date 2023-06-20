//<input id="mail-field" placeholder="your mail address">
//<input id="passward-field" placeholder="your passward">
//<button id="submit-button">SUBMIT</button>

// calling and add event in button
document.getElementById('submit-button').addEventListener('click',function(){
// console.log('button is here')

// calling mail field and add value.
const mailField = document.getElementById('mail-field');
const mailFieldValue = mailField.value ;

//calling passward field and add value.
const passwardField = document.getElementById('passward-field');
const passwardFieldValue = passwardField.value ;

// condition to complete the submit form without error
if(mailFieldValue =='aman@gmail.com' && passwardFieldValue =='paisaRpaisa')
{window.location.href = 'bank.html'}
})