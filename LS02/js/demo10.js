/**
 * Created by qile on 2017/8/14.
 */
//包装对象
var a = 123;
var b = new Number(a);

console.log(a == b);//true
console.log(a === b);//true or false 为什么  fase 类型不同

//临时包装对象
var str = "abcde";
console.log(str.length);//临时包装成了String对象  5
str.length = 1;
console.log(str.length,str);//临时包装对象并不影响原始值  5 “abcde"
