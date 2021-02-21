# CallBackFunction
##　情況一
把函式當作另一個函式的參數，透過另一個函式呼叫他。
```js
window.setTimeout( function() {...}, 1000);
```
setTimeout 是一個函式，當中的第一個參數也是函式，也就是 callBackFunction

# 情況二
控制多個函式的執行順序。
```js
var funcA = function() {
    var i = Math.random() + 1;

    window.setTimeout(function() {
        console.log('function A');
    }, i * 1000);
}
var funcB = function() {
    var i = Math.random() + 1;

    window.setTimeout(function() {
        console.log('function B');
    }, i * 1000);
}

funcA();
funcB();
```
這樣無法確定哪個 fumction 會先執行。
```js
funcA(funcB);
```
這樣 funA 執行完才會執行 funcB。

## 立即被呼叫的函式
```js
for( var i = 0; i < 5; i++) {
    window.setTimeout(function() {
        console.log(i);
    }, 1000);
}
//1秒後
//5 5 5 5 5
```
!!切分變數的有效範圍是 **function**，因為是非同步語言， for 迴圈會一口氣跑完，不會等待 window.setTimeout，因此 i 已經變為 5。
```js
for( var i = 0; i < 5; i++) {
    (function(x){
        window.setTimeout(function() {
            console.log();
        }, 1000 * x);
    })(i);
}
```
立即執行函式。

```js
for( let i = 0; i < 5; i++) {
    window.setTimeout(function() {
        console.log(i);
    }, 1000);
}
```
將宣告方式改為 let ，let 的 scope 為 {}，因此在進行 for 迴圈時，都能夠保留住 i 變數，不需要再用 function() 切割。