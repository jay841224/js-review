/*javascript起初是為了使瀏覽器可以和網頁互動而設計出來的，負責開發這門新語言的工程師認為不需要設計太複雜，那當時正處於
物件導向最盛行的時期，javascript幾乎所有數據類型都是物件，跟java相當類似，所以就面對到一個難題，要不要設計繼承。

若是一般簡單的腳本語言，是不需要繼承機制的，但因為javascript裡面幾乎都是物件，需要一種機制將物件串聯起來。

java在創建新物件時，都會呼叫構造函數，因為javascript沒有class，於是就決定直接在new後面加入構造函數
*/

function CathayBk(department, number) {
    this.department = department;
    this.number = number;
    
    this.toString = function() {
        console.log(this.department + 'Number of departments: ' + this.number);
    };
}

var sysDev = new CathayBk('System Department', 100);
var digBank = new CathayBk('Digital Bank', 120);

//那 toString 這個 function，在兩個變數中都是做一樣的事，但卻佔用了兩個空間，也就是無法共享屬性，於是就要利用 prototype

function CathayBk(department, number) {
    this.department = department;
    this.number = number;
}

CathayBk.prototype.toString = function() {
    console.toString(this.department + 'Number of departments: ' + this.number);
};

var sysDev = new CathayBk('System Department', 100);
sysDev.toString();

var digBank = new CathayBk('Digital Bank', 120);
digBank.toString();

console.toString(sysDev.toString === digBank.toString); //true

/*將 toString 方法加在 CathayBk 的 prototype 屬性上，在使用 new 建造物件時，此物件會將 __proto__ 隱藏屬性指向 CathayBk.prototype
於是新物件就擁有了 toString 方法。
*/

console.toString(sysDev.__proto__ === CathayBk.prototype);  //true
console.toString(digBank.__proto__ === CathayBk.prototype);  //true

//那如果在 Cathay.prototype 中找不到 toString 方法

function CathayBk(department, number) {
    this.department = department;
    this.number = number;
}

var sysDev = new CathayBk('System Department', 100);
sysDev.toString(); //[Object Object]

var digBank = new CathayBk('Digital Bank', 120);
digBank.toString();  //[Object Object]

//明明我們沒有定義 toString 方法，javascript 是從哪裡拿到這方法呢
Object.prototype.toString();

console.log(sysDev.__proto__ === CathayBk.prototype);  //true
console.log(sysDev.__proto__.__proto__ === Object.prototype);  //true

//由此可知，會在 Object.prototype 找到 toString 方法，這樣的串聯就是 javascript 原型鏈的概念，Object.prototype 是所有物件的起源。