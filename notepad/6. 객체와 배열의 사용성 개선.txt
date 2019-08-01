
//[1. 단축 속성명]
const name = 'mike';
const obj ={
    age: 21,
    name,   //name: name을 name으로 처리가능
    getName(){ return this.name};
}

//[2. 계산된 속성명]
function makObj1(key,value){
    //as-is
    /*
        const obj ={};
        obj[key]=value;
        return obj;
    */
    return {[key]:value};
}

//2-1. state 응용
handleClick = (key,value)=>{
    /*
        const key = `count${idx}`
        const value = this.state[key];
        this.setState({
            [key]: value + 1
        })
    */
    this.setState({
        [key]: value
    })
}

//[3. 전개 연산자]
const numbers=[1,3,5,7,9];
Math.max(...numbers);
// => Math.max(1,3,5,7,9)

//3-1. 전개 연산자를 이용한 배열객체 복사
const arr1 = [1,2,3];
const arr2 = [...arr1]; //arr1을 deepcopy함

const obj1 = {age:21, name:'mike'};
const obj2 = {hobby: 'game'};
const obj3 = {...obj1, ...obj2};
//{age:21, name:'mike', hobby:'game'}

//[4. 배열 비구조화]
//4-0.항목매핑
const arr = [1,2,3];
let [a,,c] = arr; //a:1,C:3

//4-1.비어있으면 초기값
const arr =[1];
const [a=10,b=20]=arr; // a:1,b:20

//4-2.context switching
let a = 1;
let b = 2;
[a,b] = [b,a]; //a:2,b:1

//4-3. 나머지 값 별도 배열만들기
const arr =[1,2,3];
const [first,...rest1]=arr;
console.log(first);
console.log(rest1);
const [a,b,c,...rest2] =arr;
console.log(rest2)

//[5. 객체 비구조화]
const obj={
    age: 21,
    name: mike
};
const {age, name} = obj;
//별칭사용
const {age :theAge} = obj;

//기본값 설정
const obj={age:undefined, name:null,grade:'A'};
const {age=0,name='mike',grade='F'}=obj;//age=0, name=null, grade='A'

//나버지 속성 별도 객체로 생성
const obj={age:21, name:'mike', grade:'A'};
const {age,...rest}=obj;

//for문에서 활용
const people =[{age:21, name:'mike'},{age:51,name:'sarah'}]
for(const{age,name} of people){

}