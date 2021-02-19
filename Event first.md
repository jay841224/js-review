# javascript "事件"
## 事件冒泡(Event Bubbling)
* 從啟動事件的元素節點開始，逐層往上傳遞，直到整個網頁的根節點。
## 事件捕獲(Event Capture)
* 跟事件冒泡相反，由上往下傳遞。
---
1. 當事件發生時，兩種機制都會執行。
2. 會先執行事件捕獲再執行事件冒泡。
```js
<div>
  <div id="parent">
    父元素
    <div id="child">子元素</div>
  </div>
</div>
```
```js
// 父元素
var parent = document.getElementById('parent');
// 子元素
var child = document.getElementById('child');

// 透過 addEventListener 指定事件的綁定
// 第三個參數 true / false 分別代表捕獲/ 冒泡 機制

parent.addEventListener('click', function () {
  console.log('Parent Capturing');
}, true);

parent.addEventListener('click', function () {
  console.log('Parent Bubbling');
}, false);


child.addEventListener('click', function () {
  console.log('Child Capturing');
}, true);

child.addEventListener('click', function () {
  console.log('Child Bubbling');
}, false);
```
點擊子元素
```js
"Parent Capturing"
"Child Capturing"
"Child Bubbling"
"Parent Bubbling"
```
點擊父元素
```js
"Parent Capturing"
"Parent Bubbling"
```
在點擊子元素時，先觸發的一定是 Parent Capturing，最後觸發的一定是 Parent Bubbling，子元素的 Capturing 和 Bubbling 觸發先後是看捕捉的順序。

---
## 事件註冊及綁定
### addEventListener
* 有三個參數，事件名稱(ex:click)、事件的處理器(function)、Boolean值(決定事件是以「捕獲」或「冒泡」機制執行，若不指定則預設為「冒泡」)。
---
### removeEventListener
*  解除事件的時候，第二個參數的 handler 必須要與先前在 addEventListener() 綁定的 handler 是同一個「實體」。
下面為失敗例子
```js
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  console.log('HI');
}, false);

// 移除事件，但是沒用
btn.removeEventListener('click', function(){
  console.log('HI');
}, false);
```
應更改為
```js
var btn = document.getElementById('btn');

// 把 event handler 拉出來
var clickHandler = function(){
  console.log('HI');
};

btn.addEventListener('click', clickHandler, false);

// 移除 clickHandler， ok!
btn.removeEventListener('click', clickHandler, false);
```
---
### on-event 處理器(HTML屬性)
* 只要html元素支援某事件觸發，可以透過 on+事件名來註冊事件
```html
<button id="btn" onclick="console.log('HI');">Click</button>
```
不建議用這方式註冊，不易維護

---
### on-event 處理器(非HTML屬性)
```html
<button id="btn">Click</button>
```
```js
var btn = document.getElementById('btn');

btn.onclick = function(){
  console.log('HI');
};
```
移除事件
```js
btn.onclick = null;
```