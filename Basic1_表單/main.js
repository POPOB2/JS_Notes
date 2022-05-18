// 一.抓元件result 更改文字內容

// let 宣告變數 可以變化
// const 宣告變數 不可以變化

// 1.1 result
// const設變數 ,變數名myForm ,變數內容來自網頁document的id:myForm物件,
// getElementById被作為搜尋document的id:myForm的函式,  getElementById(輸入查找的id)
// 
const myForm = document.getElementById("myForm"); 
const num1Input = document.getElementById("num1"); 
const num2Input = document.getElementById("num2"); 
const resultP = document.getElementById("result"); 

//測試F12顯示 變數的內容
console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);
// num1Input.value="測試value在F12顯示的變數內容"
// num2Input.value="測試value在F12顯示的變數內容"


//當這個myForm表單內的submit送出
//抓到 num1 num2 的value

myForm.addEventListener('submit',function(e){
    e.preventDefault();//submit不送出表單
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1=parseInt(num1Input.value);
    let num2=parseInt(num2Input.value);
    let sum=num1+num2;
    console.log(`${num1} + ${num2} = ${sum}`);
    //submit get value
})




//二.改result元件 的內容文字為 hello first change text
result.innerText = "更改為main.js的文字";

// 上面的document=網頁  該網頁資料有許多基本設定與資訊 這裡先大概了解有這東西就可以
// 可以從下列的log查看相關資訊
// console.log(document);
// console.log(window); 
// DOM  BOM