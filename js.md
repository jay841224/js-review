## js
# 變數
#### js的變數有三種宣告方法，分別是
|        | var | let | const |
|--------|-----|-----|-------|
|重複宣告 |  Y  |  N  |  N    |
|切割    | function | {} | {} |
|拉伸   | Y     | 不合法 | 不合法 |

#### scope
1. var變數的 scope 為 function
2. 寫在函式內沒有用 var 宣告的變數會變成全域變數
3. 全域變數為全域物件(頂層物件 wimdow)的屬性
```js
var a = 10;
console.log(window.a);  //10
```
4. 若沒有使用 var 宣告變數
```js
var a = 10;
b;  //在這就會報錯 b is not defined
if(a === 10) {
    b = 2;
}

console.log('a=' + a,'b=' + b);
```
此例會報錯的原因是，當沒有使用 var 宣告變數時，此變數要向外層去找值，但找不到，因此報錯
### 物件
在javascript中，不屬於基本型別的都是物件
#### 新增物件之方法
```js
var person = new Person();

person.name = 'jay';
person.sayName = function() {
    alert(this.name);
}
```
```js
var person = {
    name: 'jay',
    sayName: function() {
        alert(this.name);
    }
}

//存取方法
person.name;
person.sayName();

person["name"];
person["sayName"]();
```
 
 ### 屬性新增刪除
```js
var obj = {};
 //新增
 obj.name = 'Object';

//刪除
delete obj.name;
obj.name    //undefined
 ```

 ## 陣列Array
 ### 陣列建立
 ```js
 var a = new Array();
 var b = [];

 a[0] = 'a';
 a[1] = 'b';

 a.length;  //2
 ```
 ### 陣列新增元素
 ```js
var array = [];
//新增在陣列尾
array.push(1);
 ```

 ## typeOf
 ### 可檢測出之型別
- boolean  string  number  object undefined funtion
- NaN 屬於 number (NaN 不等於任何值，包括自己)
- null 屬於 object (簡單來說是個bug)
#### 如何判斷是否為陣列
當陣列使用typeOf做判斷時，會回傳"Object"的結果，所以要確認為陣列須用下列方法
```js
Array.isArray('要判斷之物件');
```

## 傳值 傳址
### 基本型別
```js
var a = 1;
var b = 1;
console.log(a === b);  //true
```

#### 變數更新與傳遞
```js
var a = 1;
var b = a;

a = 100;
console.log(a);  //100
console.log(b);  //1
```

### 物件型別
```js
var coin1 = {value: 10};
var coin2 = {value: 10};
console.log(coin1 === coin2);  //false

//新增屬性
coin1.cross = true;

//coin2 不會有此屬性
console.log(coin2.cross);  //undefined
```
 
 #### 物件型別更新與傳遞
 ```js
var coin1 = {value: 10};
var coin2 = coin1;

coin1.value = 100;
console.log(coin1.value);  //100
console.log(coin2.value);  //100

console.log(coin1 === coin2)  //true
 ```
 - 以上證明，物件型態是利用引用的方式傳遞資料，在我們建立coin2並用=指向coin1時，就是指向coin1的位置，兩者視為同一物件
#### Pass by sharing
如果是重新賦值，並不會改變，但若直接改屬性，則會變動。
```js
var coin1 = { value: 10 };

function changeValue(obj) {
  obj = { value: 123 };
}

changeValue(coin1);
console.log(coin1);   // 此時 coin1 仍是 { value: 10 }
```
```js
var coin1 = { value: 10 };

function changeValue(obj) {
  // 僅更新 obj.value，並未重新賦值
  obj.value = 123;
}

changeValue(coin1);
console.log(coin1);   // 此時 coin1 則會變成 { value: 123 }
```

# function
## 一般函式 vs 一級函式
一級函式會優先被宣告
```js
//一般函式
//沒有名子的函式，若要為函式命名，該函數名只能在內部使用
var func1 = function() {
    console.log('noemal funtcion');
}

var func = function func2() {
    console.log(typeof func2);  //funtion
}
console.log(typeof func2);  //undefined

//一級函式

```
 ## function的執行
 funtion執行有兩種方式
 1. 使用new
 ```js
var func = new function () {
    console.log('func run');
};

//func run

 ```
2. 使用()
 ```js
var func = function () {
    console.log('func run');
};

func();
 ```

 ## 運算子
 ```js
//當數字與 undefined 相加時，undefined 會被嘗試轉為數字，也就是NaN

123 + undefined  //NaN
'abc' + undefined  // abcundefined

//當 null 與數字相加時，null會被嘗試轉為數字，也就是 0

123 + null  //123

'123' + null  //123null


//另外 false 會轉為 0

//true 會轉為 1
 ```
