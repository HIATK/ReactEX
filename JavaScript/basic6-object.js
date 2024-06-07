//객체
const dog= {
    name : '돌쇠',
    age :17
};
console.log(dog);

/*
  키에 해당하는 부분은 공백이 없어야 한다.
만약엥 공백을 사용해야 하는 경우 ''("")로 묶어 줘야한다.
//  */
// const sample = {
//     'key with space' : ture
// };
// console.log(sample);
// console.log(sample["key with space"]);
// console.log(dog[name]);

//함수에서 객체를 파라미터로 받기
const ironMan = {
    name:'토니 스타크',
    actor : '로버트 다우니 주니어',
    alias : '아이언맨'
}

const captainAmerica = {
    name:'스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
}

function print(hero){
    const text = `${hero.alias}(${hero.name})
     역할을 하는 배우는 ${hero.actor} 입니다.`;
     console.log(text);
}

print(ironMan);
print(captainAmerica);


function print2(hero){
    const{alias,name,actor} = hero;
    const text = `${alias}(${name})
    역할을 하는 배우는 ${actor} 입니다.`;
}

console.log('객체 비구조화 할당');
print2(ironMan);

function print3({alias,name,actor}){
    const text = `${alias}(${name})
    역할을 하는 배우는 ${actor} 입니다.`;
    console.log(text);
}
print3(captainAmerica);

//객체 안에 함수 넣기
const dog2 = {
    name : '멍멍이',
    sound : '멍멍!',
    say : function(){
        console.log(this.sound); //this 는 dog2를 가리킨다 dog2에 사운드가 들어간것이다.
    }
}
dog2.say();

const dog3 ={
    name  : '멍멍이',
    sound : '멍멍!',
    say : () => {
        console.log(this.sound); 
    }
};

dog3.say();

//Gette / Setter 함수
//객체 생성 후 객체 안의 값을 수정하거나 불러올 때 사용하는 함수
const numbers = {
    a : 1,
    b : 2,
    get sum(){
        console.log('sum 함수가 실행됩니다.');
        return this.a + this.b;
    }
};
console.log(numbers);
console.log(numbers.sum);
numbers.a = 5;
console.log(numbers.a);


console.log('Setter 함수')
//Setter 함수
const numbers2 = {
    _a : 1,
    _b : 2,
    sum : 3,
    calculate(){
        console.log('calculate');
        this.sum = this._a + this._b;
    }
};
console.log(numbers2._a);

const numbers3 = {
    calculate(){
        return this._a;
    
    },
    get a(){
        return this._a;
    },
    set a(value){
        console.log('a가 바뀝니다.');
        this._a = value;
        this.calculate();
    },
    set b (value){
        console.log('b가 바뀝니다.');
        this._b = value;
        this.calculate();
    }
};
console.log(numbers3.sum);
numbers3.a = 5;
numbers3.b = 7;
numbers3.a = 9;
console.log('2 : '+numbers3.sum);
console.log('3 : '+numbers3.sum);
console.log('4 : '+numbers3.sum);