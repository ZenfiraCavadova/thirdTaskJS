// ============FIRST PROBLEM=================
//While 1 - dən 5-ə qədər ədədləri göstər (While)
// let number = 1;
// while (number < 5) {
//   number++;
//   console.log(number);
// }

// ============SECOND PROBLEM=================
//Istifadəçidən mənfi ədəd alana qədər ədəd al və həmin ədədlərin cəmini tap(While)
let number = +prompt("please enter a negative number");
sum = 0;
while (true) {
  if (number < 0) {
    sum = sum + number;
  } else {
    break;
  }
}
console.log(`sum of negative numbers: ${sum} `);

// ============THIRD PROBLEM=================
//İstifadçidən ədəd al . ədəd 1-lə 10 arasında olarsa dövr dayansın (Do While)
// let num1;
// do {
//   num1 = +prompt("if you  enter numbers between 1 and 10, cycle is stopped");
// } while (num1 < 1 || num1 > 10);
// alert(num1);

// ============FOURTH PROBLEM=================
//1-dən 100 - ə qədər 5 artımlar ədədləri sırala
let eded = 1;
while (eded <= 100) {
  eded++;
  if (eded % 5 == 0) {
    console.log(eded);
  }
}

// ============FIFTH PROBLEM=================
//10! faktorialı hesabla
// let num;
// for (num = 1; num <= 10; num++) {
//   let factorial;
//   factorial *= num;
//   console.log(`factorial of 10 = ${factorial}`);
// }
//===============SIXTH PROBLEM===================
//1-100 qədər 3 və 6 bölünən ədədlərin cəmini tapın
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 || i % 6 == 0) {
    sum = sum + i;
  }
}
console.log(`sum of between 1 and 100 which are divided to 3 and 6: ${sum} `);

//===============SEVENTH PROBLEM===================
//50-70 qədər 3 bölünən ədədlərin hasilin tapın
let multiplication = 1;
for (let index = 50; index <= 70; index++) {
  if (index % 3 == 0) {
    multiplication = multiplication * index;
  }
}
console.log(
  `multiple of numbers between 50 and 70 which are divided to 3: ${multiplication}`
);

//===============EIGHTH PROBLEM===================
//-10 -dan 30-a qədər cüt ədədlərin sayını tapın
let count = 0;
for (let num = -10; num <= 30; num++) {
  if (num % 2 == 0) {
    count++;
  }
}
console.log(`number of between -10 and 30 which are even: ${count}`);
