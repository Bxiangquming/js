/**
 * Created by qile on 2017/8/14.
 */
//类型检测 typeof 一般用于值类型检测
console.log(typeof 123);//number
console.log(typeof true);//boolean
console.log(typeof "abc");//string
console.log(typeof null);//object
console.log(typeof undefined);//undefind
console.log(typeof {name:"Mike",age:20});//oject

/*
//课外思考
console.log(typeof Array);
console.log(typeof Function);
console.log(typeof Date);
console.log(typeof Number);//String、Boolean
function
console.log(typeof Math);
console.log(typeof JSON);
object
*/

//类型检测 instanceof （左侧操作数为对象，右侧操作数为原型链中的一个类型时，返回为true）
var a = {name:"Mike",age:20};
console.log(a instanceof Object);
//true
var b = [12,34,{},""];
console.log(b instanceof Array);//思考console.log(b instanceof Object); true
//true
var Person = function(){
    //...
};
var p1 = new Person();
console.log(p1 instanceof Person);//思考console.log(p1 instanceof Object); true
//true
