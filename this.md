# this
* this 是 Javascript 的一個關鍵字。
* this 是 function 執行時，自動生成的一個內部物件。
* 隨著 function 執行場合不同，this 所指向的值，也會有所不同。
* 在大多數的情況下， this 代表的就是呼叫 function 的物件 (**Owner Object of the function** || **function 執行時所屬的物件**)。
* 決定 this 的關鍵不是踏屬於哪個物件，是 function 呼叫的時機點。
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
# 巢狀迴圈的 this
```js
var obj = {

  func1: function(){
    console.log( this === obj );  //true

    var func2 = function(){
      // 這裡的 this 跟上層不同！
      console.log( this === obj ); //false
    };

    func2();
  }
};

obj.func1();
```
func1 是藉由 obj 呼叫過來，因此 this 指向 obj。

但 func2 並沒有特別指明誰呼叫的，因此預設為 window。

若是在 SE5 的嚴格模式下，會禁止 this 自動設定為痊癒物件。

# 強制指定 this 的方式
##　bind
```js
var obj = {
  x: 123
};

var func = function () {
  console.log(this.x);
};

func();            // undefined
func.bind(obj)();  // 123
```
在 function 的後面加上 .bind()，可以將括號中的物件暫時掛載進去 function 中。

# 箭頭函式與 this
## 箭頭函式基本語法
```js
const funcA = x => {return x + 1};
const funcB = x => x + 1;
const funcC = (x, y) => x + y;
funcA(1);  //2
funcB(1); //2 沒加括號會自動生成 return
funcC(1, 2); //3 傳入參數大於 1 個要加()，若沒有傳入參數，一訂要加()
```

箭頭函式不擁有自己的 this 變數，當使用 this 時，會向外找尋 this。
```js
function Person() {
  this.age = 0;
  //setInterval 依設定的時間不斷循環執行
  setInterval(() => {
    this.age++;
  }, 1000)
}

var p = new Person();
```
箭頭函式中的 this 向外尋找，找到 p 物件的 this。

# .call() 與 .apply()
```js
function func(arg1, arg2) {
  console.log(this.val, arg1, arg2);
}

var obj = {val: 'this is val'}

func.call(obj, 1, 2);
func.apply(obj, [1, 2]);
func.bind(obj)(1, 2);
 ```

# this 綁定基本原則
* 預設綁定 (Default Binding)
* 隱含式綁定 (Implicit Binding)
* 顯式綁定 (Explicit Binding)
* 「new」關鍵字綁定
---
**預設綁定**

像是直接綁定至 window。

**隱含式綁定**
```js
function func() {
  console.log( this.a );
}

var obj = {
  a: 2,
  foo: func
};

func();       // undefined
obj.foo();    // 2
```

**顯示綁定**

.call()  .bind()  .apply()

**new 關鍵字綁定**

```js
function foo(a) {
  this.a = a;
}

var obj = new foo( 123 );
console.log( obj.a );      // 123
```
this 直接綁定至物件 obj 上面。