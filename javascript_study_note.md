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
---
## 事件註冊及綁定
### addEventListener
---
### on-event 處理器(HTML屬性)
* 只要html元素支援某事件觸發，可以透過 on+事件名來註冊事件
```html
<button id="btn" onclick="console.log('HI');">Click</button>
```
不建議用這方式註冊，不易維護

---
### on-event 處理器(非HTML屬性)
* __window__ 或 __document__ 