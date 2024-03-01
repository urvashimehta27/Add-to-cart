'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements){
  containerMovements.innerHTML = "";
  movements.forEach(function(mov,i){

    const type = mov>0 ? "deposit" : "withdrawal";

    const html = `<div class="movements__row">
              <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
              
              <div class="movements__value">${mov} Rs</div>`;

          containerMovements.insertAdjacentHTML("afterbegin",html);
  });
};
  const calcDisplaySummary = function(movements){
  const incomes = movements.filter(mov => mov>0).reduce((acc,mov) => acc+mov,0);
  labelSumIn.textContent = `${incomes} Rs`;

  const out = movements.filter(mov=> mov<0).reduce((acc,mov)=> acc-mov,0);
  labelSumOut.textContent = `${out} Rs`;

}
calcDisplaySummary(account1.movements);

  const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

  let currAccount;
  btnLogin.addEventListener("click",function(e){
    e.preventDefault();
   currAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
   console.log(currAccount);
  });




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ["a","b","c","d","e"];
// console.log(arr.slice(2));
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));

// console.log(arr.splice(2));
// console.log(arr);

// arr = ["a","b","c","d","e"];
// const arr2 = ["j","i","f","g","k"];
// console.log(arr2.reverse());

// const letters = arr.concat(arr2);
// console.log(letters);

// console.log(letters.join("-"));


// const arr1 = [23,11,64];
// console.log(arr1[0]);
// console.log(arr1.at(0));
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.slice(-1)[0]);
// console.log(arr1.at(-1));

// console.log("jonas".at(0));



// for(const movement of movements){
//   if(movement > 0){
//     console.log(`you deposited.. ${movement}`);
//   }else{
//     console.log(`you withdraw ${Math.abs(movement)}`);
//   }
// }
// console.log("---------------------------")

// movements.forEach(function(movement,i,arr){
//  if(movement > 0){
//     console.log(`Movement:${i+1} : you deposited:${movement}`);
//   }else{
//     console.log(`Movement:${i+1} : you withdraw:${Math.abs(movement)}`);
//   }
// });

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function(values,key,map){
  console.log(`${key}:${values}`);
});

// const euroToUsd = 1.1;
// const movementsToUsd = movements.map(function(mov){
//   return mov*euroToUsd;
// });
// console.log(movements);
// console.log(movementsToUsd);

// const deposits = movements.filter(function(mov){
// return mov > 0;
// });
// console.log(movements);
// console.log(deposits);
// const depositeFor = [];

// for(const mov of movements) if(mov > 0) depositeFor.push(mov);

// console.log(depositeFor);

// const withdrawals = movements.filter(function(mov){
//  return mov < 0;
// });
// console.log(withdrawals);

// console.log(movements);
// const balance = movements.reduce(function(acc,cur,i,arr){
//   console.log(`iteration ${i} : ${acc}`);
//   return acc + cur
// },0);
// console.log(balance);

// const user = "Steven Thomas Williams";
// const userName = user.toLowerCase().split(" ").map(function(name){
// return name[0];
// }).join(" ");
// console.log(userName);



const calcDisplayBalance = function(movements){
  const balance = movements.reduce(function(acc,cur){
    return acc+cur;
  },0);
  labelBalance.textContent = `${balance} Rs`;
}
calcDisplayBalance(account1.movements);

// const maxValue = movements.reduce(function(acc,mov){
//   if(acc>mov){
//     return acc;
//   }else{
//     return mov;
//   }
// },movements[0]);
// console.log(maxValue);


// const totalDeposite = movements.filter(mov => mov>0).map(mov => mov+euroToUsd).reduce((acc,mov) => acc+mov,0);
// console.log(totalDeposite);

// const firstWithdrawal = movements.find(mov => mov<0)
// console.log(movements);
// console.log(firstWithdrawal);

// const account = accounts.find(acc=> acc.owner === "Jessica Davis");
// console.log(account);


displayMovements(account1.movements);















