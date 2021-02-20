# Scope chain 範圍鏈
* 切分變數的最小單位是 **function**。
* 範圍鏈是在函式被定義的當下決定的，不是被呼叫的時候。
* 範圍鏈就是，宣告的變數從自己的層級一層一層向外找的行為。
```js
function outer() {

  // 在 outer 這層拿不到變數 c
  // 但可以向外找到變數 a
  var b = a * 2;

  function inner(c) {
    // 由於範圍鍊的關係，雖然只有對 c 定義，
    // 但可以像上一層一層取得 a, b, c
    console.log(a, b, c);
  }

  inner(b * 3);
}

// 在 global 這層只有 a, 不認得 b 與 c
var a = 1;
outer(a);
```
console.log(a, b, c) 當中的 a, b, c 就會向外尋找值。
# Closure 閉包
```js
var msg = "global."
function outer() {
  var msg = "local."

  function inner() {
    return msg;
  }

  return inner;
}

var in = outer();
console.log(in());  // "local."
```
呼叫函式 outer() 以前，範圍鏈已被建立，透過 return inner() 方法，使我們可以在外部透過範圍鏈取得內部的變數 msg。

* 閉包使我們可以像 java 的 class 一樣鎖住變數。
---
## 計數器
### 無使用閉包
```js
var count = 0;

function counter(){
  return ++count;
}

console.log( counter() );   // 1
console.log( counter() );   // 2
console.log( counter() );   // 3
```
在不使用閉包的情況下，我們必須建造一個全域變數來記憶 count 的次數。
* 全域變數有可能造成不可預期的錯誤或是變數衝突。
### 使用閉包
```js
function counter() {
    var count = 0;
    function innerCount() {
        return ++count;
    }
    return innerCount;
}

var countFunc = counter();

console.log(countFunc());  //1
console.log(countFunc());  //2
console.log(countFunc());  //3
```
把 count 封裝在 counter() 中之後，變數 count 就不會暴露在 global 環境中。

* ES6 寫法
```js
var counter = () => {
  var count = 0;
  return () => ++count;
}
```