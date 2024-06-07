//반복문
//1.for
for(let i = 0; i < 10; i++){
    console.log(i);
}

// 배열과 for문
const names = ['홍길동','이순신','강감찬','유관순'];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

//while
//while문의 특징은 조건이 참이면 계속해서 반복한다.
let i = 0;  
while (i <  10){
    console.log(i);
    i++;
}

//for of 
//배열에 관한 반복문을 돌리기 위해서 만들어진 반복문
let numbers = [10,20,30,40,50];
for (let number of numbers){
    console.log(number);
}

//객체 정보를 배열 형태로 받아 올 수 있는 함수
const doggy ={
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};
console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for(let key in doggy){
    console.log(`${key}:${doggy[key]}`)
}