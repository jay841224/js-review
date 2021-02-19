# Event
### event.preventDefault()
* 取消預設行為
```html
<a id="link" href="https://www.google.com">Google</a>
```
```js
var link = document.querySelector('#link');

link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Google!');
}, false);
```
原本```<a>```的預設行為是連接到外部網頁，event.preventDefault() 使原本預設動作取消了。

用 return false (放在事件的最後)可以達到相通效果。

---
### event.stopPropagation()
* 阻擋事件向上冒泡傳遞
---
### this vs event.target
* this 代表觸發事件的**目標**元素
* event.target 代表觸發事件的元素
```html
<label class="lbl">
  Label <input type="checkbox" name="chkbox" id="chkbox">
</label>
```
```js
// label
var lbl = document.querySelector('.lbl');
// chkbox
var chkbox = document.querySelector('#chkbox');

// 為了區分在後面加上了 1 & 2

lbl.addEventListener('click', function (e) {
  console.log(e.target.tagName, 1);
  console.log(this.tagName, 1);
}, false);


chkbox.addEventListener('click', function (e) {
  console.log(e.target.tagName, 2);
  console.log(this.tagName, 2);
}, false);
```
```js
"LABEL 1"
"LABEL 1"
"INPUT 2"
"INPUT 2"

"INPUT 1"
"LABEL 1"
```
在點擊 checkBox 物件後，**label** 和 **checkBox** 會各自觸發 **click** 事件，此時觸發與目標元素相同。

在第二次觸發 **label** 的 **click** 時，由於是由 input 發起的冒泡事件，因此 e.target 會指向 input，this 會指向 label。

---
### 事件指派
```html
<ul id="myList">
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ul>
```
若是要監聽 li 的 click 事件，需要用迴圈新增監聽，但若是有新增 li，新的 li 物件就回沒有被監聽。
#### 處理方式
1. 每次新增物件都新增監聽，但很麻煩。
2. 改成監聽父元素，並利用冒泡機制，用 event.target 指向觸發元素。
```js
// 取得容器
var myList = document.getElementById('myList');

// 改讓外層 myList 來監聽 click 事件
myList.addEventListener('click', function(e){

  // 判斷目標元素若是 li 則執行 console.log
  if( e.target.tagName.toLowerCase() === 'li' ){
    console.log(e.target.textContent);
  }

}, false);
```