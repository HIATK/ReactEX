//자바 스크립트 scope

//1.Global 전역 Scope: 코드의 모든 범위에서 사용이 가능
//2.Function 함수 : 함수 안에서만 사용이 가능
//3.Block 블록 : if, for, while, try catch에서 사용이 가능

const value = 'hello!'; //Global Scope

function myFunction(){
    console.log('myFunction: ');
    console.log(value); //Global Scope   전역변수
}

function otherFunction(){
    console.log('otherFunction: ');
    const value = 'bye!'; //Function Scope 함수 밖에서는 사용활 수 없다.
    console.log(value);
}
function max(){
    return ;
}

const resultQuiz = max (1,2,3,4,10,5,6,7);
console.log(resultQuiz);
function  myFunction2() {
    const value = 'bye!'; //Function Scope
    const anotherValue = 'world!'; //Function Scope
    function functionInside() {
        console.log('functionInside: ');
        console.log(value);
        console.log(anotherValue);

    }fuctionalInside();
}

myFunction();
otherFunction();

console.log('global scope: ');
console.log(value);
//console.log(anotherValue); //Function Scope 에러 발생

function myFunction3(){
    const value = 'bye!';
    if (true){
        const value = 'world!';
        console.log('block scope: ');
        console.log(value);
    }
    console.log('function scope: ');
    console.log(value);
}
console.log('-----------');
myFunction2()
console.log('-----------');
myFunction3();