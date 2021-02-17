# DOM 元素新增與修改
## 新增
### document.createElement(tagName)
* 建立新元素
```js
var newDiv = document.createElement('div');
newDiv.id = "myNewDiv"; //指定屬性
```
* 建立後透過 appendChild()、insertBefore() 或 replaceChild() 等方法將新元素加入至指定的位置之後才會顯示。
---
### document.createTextNode("text")
* 建立文字節點。
* 建立後一樣要加入到指定位置。

---
### document.createDocumentFragment()
* 為一個虛擬的 document，在大量新增修改 DOM 元素時，可以先在 **Fragment** 中操作，最後再將 **Fragment** 放入 document 中。
```html
<ul id="myList"></ul>
```
```js
// 取得外層容器 myList
var ul = document.getElementById("myList");

// 建立一個 DocumentFragment，可以把它看作一個「虛擬的容器」
var fragment = document.createDocumentFragment();

for (var i = 0; i < 3; i++){
  // 生成新的 li，加入文字後置入 fragment 中。
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("Item " + (i+1)));
  fragment.appendChild(li);
}

// 最後將組合完成的 fragment 放進 ul 容器
ul.appendChild(fragment);
```
---
## 修改
### NODE.appendChild(childNode)
* 新增在最後
---
### NODE.insertBefore(newNode, refNode);
---
### NODE.replaceChild(newChildNode, oldChildNode)
---
### NODE.removeChild(childNode)
```html
<ul id="myList">
  <li>Item 01</li>
  <li>Item 02</li>
  <li>Item 03</li>
</ul>

<script>
  // 取得容器
  var myList  = document.getElementById('myList');

  // 取得 "<li>Item 02</li>" 的元素
  var removeNode = document.querySelectorAll('li')[1];

  // 將 myList 下的 removeNode 節點移除
  myList.removeChild(removeNode);
<script>
```