//function
//서브 프로그램, 값을 계산할때
//하나의 함수는 한가지의 일만 하도록 만들어야함
//함수는 동사형태로 지정해야함 (이름)

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('heello2');
log(1234);

//2. parameters   
function changeName(obj) {
    obj.name = 'coder'  //이름을 무조건 coder로 변경하는 함수
}
const ellie = { name : 'ellie'};
changeName(ellie);
console.log(ellie);

//3 Default parameters (added in ES6)
function showMessage(message, from ) {  //이렇게 하면 from에 undefined가 뜸  이렇게 안뜨기 위해서는 from = 'nuknown' 를 작성하면 됨
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4  Rest parameters (added in ES6)  ...이건 배열 형태로 정리됨
function printAll(...args) { 
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args) { //위에를 간단하게 만듬
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); //배열로 아주 쉽게 만듬
}
printAll('dream', 'coding', 'ellie');

//5 Local scope   밖에서는 안을 볼 수 없고 안에서는 밖을 볼 수 있다
let globalMessage = 'global';
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
}
printMessage();

//6 Return a value
function sum(a,b) {
    return a+b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1, 2)}`);

//7 Early return, early exit
//bad
function upgradeUser(uesr) {
    if(uesr.point > 10) {
        //long upgrade logic ...
    }
}
//good
function upgradeUser(uesr) {
    if(uesr.point <= 10) {
        return;
        //long upgrade logic ...
    }
}

// first-class function
const print = function() {  //이름없는 함수 필요한 부분만 변수에 할당
    console.log('print');
};
print();
const printAging = print;
printAging();
const sumAging = sum;
console.log(sumAging(1, 3));

//2  call back
function randomQuiz(answer, printYes, printNo) {
    if(answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
}
//이름없는 함수
const printYes = function () { 
    console.log('yes!');
};
//이름있는 함수 디버깅할때
const printNo = function print() {  
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// const simplePrint = function() {
//     console.log('simplePrint!');
// };
// simplePrint();
//간결하게 만드는 arrow function
const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    return a * b ;
}

// IIFE    바로 함수를 실행하고 싶을때 앞에  부르는것 처럼 하면됨
(function hello() {
    console.log('IIFE');
})();