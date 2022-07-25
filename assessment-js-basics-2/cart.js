///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(acc, current){
  return acc + current.price;
}, 0)
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/
let tax = .06
let couponValue = 2

 function calcFinalPrice(summedPrice, couponValue, tax){
    let taxprice = summedprice * tax;
    let cartTotal = taxprice - couponValue
    return cartTotal

console.log(cartTotal)
 }

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    1st would be a food allergy, which would either be false for none or have a sring with their allergy
    2nd would be bolean for whether they can legally drink or not
    3rd would be a string with their favorite menu item
    4th would be a number with their average tip %

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
 
let Ryan = {
    allergy: 'Lactose Intolerant', 
    CanDrink: false,
    Favorite: 'Escargo',
    tip: .15

}
