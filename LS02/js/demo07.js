/**
 * Created by qile on 2017/8/14.
 */
//JavaScript字符串的编码方式，Unicode字符集和UTF-16编码方式，参考链接：
//http://www.ruanyifeng.com/blog/2014/12/unicode.html

//字面量
var str = "abc_def_ghi_jkl_mn";

//转义字符 \n \" \' \\
console.log("abc\ndefghi\\\n\'mn\'");
//abc
//defghi\
//'mn'
//字符串常用操作
var str = "abc_def_ghi_jkl_mn";
// str.split("_");
// str.split("_",2);
// str.concat("_opq");
// str.substr(4,7);
// str.substring(4,7);
// str.slice(2);
// str.slice(2,5);
// str.slice(-2);
// str.slice(2,-2);
/*
var str = "abc_def_ghi_jkl_mn";
s1=str.split("_");
s2=str.split("_",2);
s3=str.concat("_opq");
s4=str.substr(4,7);
s5=str.substring(4,7);
s6=str.slice(2);
s7=str.slice(2,5);
s8=str.slice(-2);
s9=str.slice(2,-2);

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
console.log(s7);
console.log(s7);
console.log(s9);

["abc", "def", "ghi", "jkl", "mn"]
["abc", "def"]
abc_def_ghi_jkl_mn_opq
def_ghi
def
c_def_ghi_jkl_mn
c_d
c_d
c_def_ghi_jkl_
*/

// str.bold();
// str.link();
// str.fontcolor("red");
// str.fontsize(50);


//模式匹配，参加后续正则表达式章节
