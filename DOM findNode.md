# DOM 查找 API
### Node.childNodes
* 可能會回傳的有，HTML 元素節點 (element nodes)、文字節點 (text nodes)，包含空白、註解節點 (comment nodes)
* 回傳的型態為 NodeList
---
### Node.firstChild
---
### Node.lastChild
---
### Node.parentNode
---
### Node.previousSibling
* 取得同一層的前一個節點
---
### Node.nextSibling
* 取得同一層的下一個節點
---
### document.getElementsBy**
* 回傳 HTMLCollection，只包含 HTML element 節點。
---
### document.querySelector
---
### document.querySelectorAll
* 回傳 NodeList，除了 HTML element 節點，也包含文字節點、屬性節點等。
---
## 重點
1. 通常 **HTMLCollection** 和 **NodeList** 都是動態即時更新的，但是用querySelector 和 querySelectorAll所生成的為靜態。
2. **HTMLCollection** 和 **NodeList** 其實是類似的實作規格，只是蒐集的內容不同，皆不能用 Array 的方法。
