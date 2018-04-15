/**
 * Created by qile on 2017/9/27.
 */
//将demo12、demo13中的部分代码复制到下边，然后进行断点调试
//加深对闭包的理解
var tmp = 100;//注意：词法作用域
function foo(x) {
    var tmp = 3;//注意：词法作用域
    return function (y) {
        console.log(x + y + (++tmp));
    }
}
var fee = foo(2); // fee 形成了一个闭包
fee(10);//
fee(10);//
fee(10);//