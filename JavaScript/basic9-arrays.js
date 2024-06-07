//배열 내장함수
//배열을 다룰 때 알고 있으면 너무나 유용한 내장 함수...

//forEach : 가장 쉬운 배열 내장함수. for문을 대체한다.
const superheros = ['thor', 'ironman', 'captain america']
for(let i = 0 ; i < superheros.length; i++){
    console.log(superheros[i]);
}
//이걸 forEach로 바꾸면...

superheros.forEach(hero => {
    console.log(hero);
});

//map : 배열 안의 각 원소를 변환할 때 사용.
const array = [1,2,3,4,5,6,7,8];
//해당 배열 안의 모든 숫자를 제곱해서 새로운 배열로 만들고 싶다면? 
const squared = [];
for(number of array){
    squared.push(number * number);
}
console.log(squared);

//=>

const squared1 = [];
for(number of array){
    squared.push(number * number);
}

const squared2 = [];
array.forEach(n => {
    squared2.push(n * n);
});
console.log(squared2);

// map ->
const square = n => n * n; //화살함수
const squared3 = array.map(square);
//const squared3 = array.map(n => n * n); //위의 두 줄을 한 줄로 줄인 것
console.log(squared3);  // [1, 4, 9, 16, 25, 36, 49, 64]

// indexOf 원하는 항목이 몇 번째 원소인지 찾아주는 함수...
const superheros1 = ['thor', 'ironman', 'captain america', 'thor'];
const index = superheros1.indexOf('thor');
console.log(index); //0

// 배열 안에 값이 기본 자료형이면 indexOf를 사용하여 값을 찾을 수 있음.
// 만약에 배열 안에 있는 값이 객체이거나, 배열이라면? indexOf로 찾을수 없다.

const todo =[
    {
        id : 1,
        text : '자바스크립트 입문',
        done : true
    },
    {
        id : 2,
        text : '자바 입문',
        done : true
    },
    {
        id : 3,
        text : '함수와 메서드',
        done : true
    },
    {
        id : 4,
        text : '객체와 배열의 내장함수',
        done : true
    },
    {
        id : 5,
        text : '자바스크립트',
        done : true
    }
];
//객체 배열에서 객체의 맴버 값 중에 id가 3인 객체가 몇번째 인지 알려면 어떻게 해야 할까?
const objectIndex = todo.findIndex(todo => todo.id === 3);
console.log(objectIndex); //3