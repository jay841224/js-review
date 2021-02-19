# 瀏覽器的 Javascript
## BOM
* 瀏覽器功能的核心，無關網頁內容。
*  HTML5 的標準。
* 主要屬性為 __window__
### window
* __window__ 提供的主要屬性為 __document__、location、navigator、screen、history、frames
* ECMAScript 標準裡的「全域物件」
* JavaScript 用來與瀏覽器溝通的窗口

JavaScript 用來與瀏覽器溝通的窗口在全域範圍內宣告的變數會成為全域變數(不能用delete刪除)
```js
var a = 10;
console.log(window.a);  //10

delete window.a;  //false
console.log(window.a);  //10
```
但若是直接透過指定 window 物件的屬性則可以直接刪除

__delete__ 用來刪除屬性，不能刪除變數，但若是以 window 的屬性建立，即可刪除。
``` JavaScript
window.a = 10;
console.log( window.a );    // 10

delete window.a;            // true
console.log( window.a );    // undefined
```
JavaScript 用來與瀏覽器溝通的窗口
* alert()

alert()原本的語法為
```js
widow.alert(message);
```
window 可以省略，這就是瀏覽器環境的 BOM 提供給 JavaScript 控制的功能之一。

另外還有 __window.confirm()__、__window.prompt()__ 等等。

---
## DOM
* HTML 文件以樹狀結構來表示，稱為 DOM Tree
```html
<html>
  <head>
    <title>一個簡單的網頁</title>
  </head>

  <body>
    <h1>這是標題</h1>
    <p>這是一個<i>簡單</i>的網頁</p>
  </body>

</html>
```
最根部的地方，就是 __document__

DOM API定義可以讓 JavaScript 可以存取、改變 HTML 架構、樣式和內容的方法，包刮綁定事件。
## 差別
* BOM: JavaScript 與「瀏覽器」溝通的窗口，不涉及網頁內容。
* DOM: JavaScript 用來控制「網頁」的節點與內容的標準。
---
## DOM API
```js
document.querySelector('id').textContent = 'Hello World!';
```
---
## DOM 介面
### Node vs Element
* Node 為 DOM 中任一元素。
* Element 為 Node 中一個特定的類型 (Node.ELEMENT_NODE, Node.TEXT_NODE, Node.COMMENT_NODE 等等)
* 因為 Node 被多種類型繼承，因此可以透過 Node 操作多個型別。
### NodeList
* __NodeList__ 可藉由 Node.childNodes 屬性以及 document.querySelectorAll() 方法取得。
* **NodeList** 不是 Array，不可適用 Array 方法，但可以使用 **forEach()** 迭代。

**Node.childNodes** 為一個動態集合
```js
var parent = document.getElementById('parent');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // should output "3"
```
#### attr :
1. NodeList.length
#### method :
1. NodeList.item()
2. NodeList.entries()
3. NodeList.forEach()
4. NodeList.keys()
5. NodeList.values()