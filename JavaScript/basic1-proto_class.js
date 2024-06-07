//프로토 타입과 클래스
function Animal(type,name,sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function(){
        console.log(this.sound); // 오타 수정: sount -> sound
    };
}
const dog = new Animal('개','멍멍이','멍멍');
const cat = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();

console.log("----------");

//프로토타입
//프로토타입은 객체 생성자 함수 아래에 `.prototype.[원하는키] = 코드`
function AnimalProto(type,name,sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}
Animal.prototype.say = function(){
    console.log(this.sound);
};

Animal.prototype.test=function(name){
    console.log(name);
}
Animal.prototype.sharedValue = 1;

const dog1 = new Animal('개','멍멍이','멍멍');
const cat1 = new Animal('고양이','야옹이','야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
console.log("----------------------------------")
console.log(dog1.test('개'))
console.log(cat.test('고양이'))
console.log("----------------------------------")
dog1.sharedValue += 2;
console.log(dog1.sharedValue);
console.log("----------------------------------")
console.log(typeof(dog1))


console.log("----------------------------------")


function AnimalInherit(type,name,sound){
    this.type = type;
    this.name = name;
    this.sound = sound;
}

AnimalInherit.prototype.say = function(){
    console.log(this.sound);
}
AnimalInherit.prototype.sharedValue = 1;
//상속처리
function Dog(name, sound){
    AnimalInherit.call(this,'개',name,sound); //call(this,...)this로 처리한다.
}
Dog.prototype = AnimalInherit.prototype; //prototype을 공유하기 위해서 설정한다.
//상속처리
function Cat(name,sount){
    AnimalInherit.call(this,'고양이',name,sount);  
}
Cat.prototype = AnimalInherit.prototype;

const dog2 = new Dog('멍멍이','멍멍');
const cat2 = new Cat('야옹이','야옹');            
dog2.say();
cat2.say(); 
console.log("----------------------------------")

/*
ES5 이전에는 클래스 문법이 없었기 때문에 위에서 처럼 객체 생성자 함수를 이용했고 
ES6 에서부터는 class라는 문법이 추가 되었다.
*/
class AnimalClass{
    constructor(type,name,sound){
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say(){ //prototype으로 자동 등록...
        console.log(this.sound);
    }

    say(){
        console.log(this.sound);
    };
}

const dogClass = new AnimalClass('개','멍멍이','멍멍');
const catClass = new AnimalClass('고양이','야옹이','야옹');

dogClass.say();
catClass.say();

//상속처리
class Dog extends AnimalClass{
    constructor(name,sound){
        super('개',name,sound);
    }
}
