# Cascade
Javascript 的 function 允許無回傳值，這時 function 會預設回傳 undefined，若把預設回傳的 undefined 改為回傳 this，會有不同變化。

四則運算
```js
var calNum = function(num){
  this.num = num;

  this.add = function(newNum) {
    this.num += newNum;
  };

  this.sub = function(newNum) {
    this.num -= newNum;
  };

  this.multi = function(newNum) {
    this.num *= newNum;
  };

  this.division = function(newNum){
    this.num /= newNum;
  };
};
```
透過 new 新增物件
```js
var a = new calNum(100);

console.log( a.num );       // 100
```
運算
```js
a.add(100);
console.log( a.num );   // 200

a.sub(50);
console.log( a.num );   // 150
```
上面先做加法再做減法

---
Cascade，又稱作「Fluent Interface」，新增 return this。
```js
var calNum = function(num){
  this.num = num;

  this.add = function(newNum) {
    this.num += newNum;
    return this;
  };

  this.sub = function(newNum) {
    this.num -= newNum;
    return this;
  };

  this.multi = function(newNum) {
    this.num *= newNum;
    return this;
  };

  this.division = function(newNum){
    this.num /= newNum;
    return this;
  };
};
```
```js
var a = new calNum(100);

a.add(100).sub(50);
console.log( a.num );   // 150
```
原本要分成兩次計算，先在可以一次完成。