# this
* this 是 Javascript 的一個關鍵字。
* this 是 function 執行時，自動生成的一個內部物件。
* 隨著 function 執行場合不同，this 所指向的值，也會有所不同。
* 在大多數的情況下， this 代表的就是呼叫 function 的物件 (**Owner Object of the function** || **function 執行時所屬的物件**)。
---
```js
var getGender = function(){
  return this.gender;
};

var people1 = {
  gender: 'female',
  getGender: getGender
};

var people2 = {
  gender: 'male',
  getGender: getGender
};

console.log( people1.getGender() );  // 'female'
console.log( people2.getGender() );  // 'male'
```
function 執行時所屬的物件是 **people1** or **people2**

---
```js
var foo = function() {
  this.count++;
};

foo.count = 0;

for( var i = 0; i < 5; i++ ) {
  foo();
}

console.log(foo.count);  //0
```
function 執行時所屬的物件是 window。
foo 本身是一個全域變數，當 for 迴圈再跑的時候，this.count++ 都是在對 window.count 操作，而 window.count 會是一個 NaN，foo.count 依舊是 0。

---
```js
var bar = function() {
  console.log( this.a );
};

var foo = function() {
  var a = 123;
  this.bar();
};

foo();  //undefined
```
1. foo 中的 this.bar() 可以抓到變數 bar，因為 this 指向 window。

2. bar 中的 this.a 無法抓到變數 a，因為 this 指向 window，而變數 a 不存在 global。

---
