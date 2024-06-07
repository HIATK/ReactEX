// splice
const numbers4 = [10, 20, 30, 40];
const indexNumber = numbers4.indexOf(30);
numbers4.splice(indexNumber,1) // splice(시작 인덱스, 지울 개수)
console.log(numbers4); // [10, 20, 40]

//slice 배열을 잘라낼 때 사용 중요포인트는 기존 배열을 수정하지는 않는다.
const sliced = numbers4.slice(0,2)//0부터 2전까지 자른다.
console.log(sliced); // [10, 20]
console.log(numbers4); // [10, 20, 40]
/*shift는 첫번째 원소를 배열에서 추출
pop은 배열의 마지막 원소를 추출한다.*/
const numbers5 = [10,20,30,40,50];
const value = numbers5.shift();
console.log(value); //10
console.log(numbers5); // [20, 30, 40, 50]


const valuePop = numbers5.pop();
console.log(valuePop); //50
console.log(numbers5); // [20, 30, 40]

//unshift : shift의 반대 shift의 반대 배열의 맨 앞에 새 원소를 추가한다.
numbers5.unshift(5);
console.log(numbers5); // [5, 20, 30, 40]

/////

const arr1 = [10,20,30];
const arr2 = [40,50,60];
const concated = arr1.concat(arr2);
console.log(concated); // [10, 20, 30, 40, 50, 60]

// join : 배열 안의 값들을 문자열로 합쳐준다.
const array =[1,2,3,4,5];
const arrayJoin = ' ';
console.log(array.join()); //1,2,3,4,5
console.log(array.join(arrayJoin)); //1 2 3 4 5
console.log(typeof array.join()); //string
//split : 문자열을 특정 기호를 기준으로 배열로 만들어 준다.
console.log(array.join().split(',')); //["1", "2", "3", "4", "5"]

/////

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
 
numbers.forEach(n => {
    sum += n;
});
console.log(sum); //15
// -> reduce사용
sum = numbers.reduce((pre, current) => pre + current, 0);
console.log(sum); //15

const numbers7 = [10,20,30,40,50,60,70];
sum = numbers7.reduce((previous,current,index,array)=>{
    if(index === array.length -1){
        return(previous + current) / array.length;  
    }
    return previous + current;
},0);

console.log(sum); //35