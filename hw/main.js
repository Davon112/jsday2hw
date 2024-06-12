// Task 1

let loggedIn = false;

if (loggedIn !== true) {
    console.log("Login to add to cart")
};

// Task 2 

let products = ['strawberries', 'raspberries', 'orange', 'mango'];

for (let i in products) {
    console.log(`Product: ${products[i]}, index: ${i}`)
};

const customerCart = [];

let customerAddProduct = prompt("Add to Cart");
customerCart.push(customerAddProduct);
console.log(`Cart: ${customerCart}`)


// Problem 2

let balance = 0;

function deposit(depositAmount) {
    if (depositAmount <= 0){
        return "Not enough bucko";
    }
    else balance += depositAmount;
    return `New Balance: ${balance}`;
}

function withdrawal(withdrawalAmount){
    if (withdrawalAmount > balance){
        return "You don't got the funds for that";
    }
    else balance -= withdrawalAmount;
    return `New Balance: ${balance}`;
}

function currentBalance(balance) {
    console.log(currentBalance()())
}



