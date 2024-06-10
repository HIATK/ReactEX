//함수의 기본 파라미터
function  calcualteCirrcleArea(r){
    const radius = r || 1; //ES5 이전
    return Math.PI * r * r * radius;
}

const area = calcualteCirrcleArea(4);
console.log(area); // 50.26548245743669

//ES6 이후에서 처리법
function  calcualteCirrcleArea2(r =1 ){
    return Math.PI * r * r;
}
const area2 = calcualteCirrcleArea2();
console.log(area2); // 3.141592653589793
const calculateCirrcleArea3 = (r =1) => Math.PI * r * r;
const area3 = calculateCirrcleArea3();
console.log(area3); // 3.141592653589793
console.log(calculateCirrcleArea3(4)); // 50.26548245743669