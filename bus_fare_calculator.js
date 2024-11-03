/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 59; 
const price = 800;
const isStudent = false; 

if (age < 10) {
    console.log('Children under 10 are free') 
} else if (isStudent >= true) {
    //  Students get a 50% discount
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
} else if (age >= 60) {
    // Senior citizens get a 15% discount
    const discount = price * 15 /100;
    const payAmount = price - discount;
    console.log(payAmount);
} else {
    console.log(price);
}



