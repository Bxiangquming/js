/**
 * Created by qile on 2017/8/14.
 */
//基本语法回顾
var x;//变量声明 区分声明与定义（对比其他语言 JS的语言特点，动态类型、弱类型）语句
x = 23;//表达式作为语句时（赋值表达式语句）

//条件语句
if(x>22){
    x+=2;
}else{
    console.log("x 不大于 22");
}

var xx = 234;
if(234 == xx){ //为什么要反写？？？？？
    console.log("相等");
}
//防止丢失一个等号的错误发生

//思考
console.log(a);
if(true){
    var a = 2;
}
console.log(a);
//  undefined
//  2

console.log(b);
if(false){
    var b = 3;
}
console.log(b);
//  undefined
//  undefined

//循环语句
for(var i=0;i<3;i++){
    console.log("i:",i);
}
console.log(i);//是否会报错，若不报错的话此时i为多少？？？？？
//不会报错
//  i:0
//  i:1
//  i:2
//  3

//函数定义及调用   提问：函数有几种定义方式？？？？？
//三种
// function 函数名（形参）{}
// var 函数名=function（形参）{}
//var 函数名=new Function（‘形参’，‘’）
function max(x,y) {
    return x>y?x:y;
}
console.log(max(2,3));
//3