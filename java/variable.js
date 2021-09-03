// 1. Use strict
//added in ES 5
//use this for valina Javascript
'use strict';

// 2. Variable
//let (added in ES6)
// {}블럭임
let globalName = 'globalName';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisthing (변수를 아무곳이나 써도 선언이 된다.)
// has no block scope 블럭을 무시함
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constants   값을 선언한 후 절대로 값을 변경할수 없음
// favor immutable data type always for a few reasons
// - security 보안
// - thread safety 값이 변하지않는
// - reduce human mistakes 
const dayInWeek = 7;
const maxNumber = 5;


// 4. Variable types
// primitive, single item;, number(숫자), string. boolean, null, undefiedn, symbol
// object, box container
// function, first-class function
const count = 17; //정수integer
const size = 17.1; //소수점decimal number
console.log(`value:${count}, type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);

//number - speicla numeric valuse: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456798013245679801234567890n; // over (-2*53 ~ 2*53 )    bigInt - 크롬에서 지원
console.log(`value: ${bigInt}, type: ${typeof bigInt}`); 
Number.MAX_SAFE_INTEGER;


// string
const char = 'c';
const brenden = 'brendan';
const greeting = 'hello' + brenden;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenden}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);   // ``를 이용하면 간편하게 만들 수 있다. + 등등 문자열에 상관없이 가능

// boolen
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); //
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);  //출력할때 .description 사용해야함

// object, real-life object, data structure
const ellie = {name: 'ellie', age: 20 }; //정해짐
ellie.age = 21; //이렇게 바꾸면됨


// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);