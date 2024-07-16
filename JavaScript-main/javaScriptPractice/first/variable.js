/*
We can declare variables using three ways....

1) let = block scope provide krta hai. for example if 
2) const = value fixed
3) var = scope globle or function , not block level scope, it allow same name variable declaration.

*/

let message;
message="hey, how are you?";
console.log(message);
let a,b,c;
a=10;
b=20;
c=30;
console.log(a);
console.log(b);
console.log(c);
let x=1,y=2;
console.log(x);
console.log(y);
let l=1,
m=2,
n=3;
console.log(l);
console.log(m);
console.log(n);

const pi = 3.14;
console.log(pi);
// pi=3.00;
// console.log(pi);


var a1=10;
var b1=10;
var a1=20;//same name variable chalega using var

//var variable can be declare after use
d=30;
console.log(d);
var d;


//rules for variables....
/*
1. start with letters can't start with digits
2. variables name must contains letters, digit, or $ and _
3. keywords can't be used as variable name
4. case sensitive example:- let Let = 10; 
*/