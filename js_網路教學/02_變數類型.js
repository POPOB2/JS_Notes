//------------------- 基本變數類型 : 字串  數字  布林  undefined  null-------------------

let myName= 'ke' // string 字串 
let age= '我的年齡:999歲' // 相連
let word = myName + age // 只要系統判斷左右是字串 +符號 會被用於連接

let score = 100 // number 數字
// + - * / %
console.log(score + 200) //系統判斷score為 數字類型 +變成四則運算的+ 以此類推+-*/%
// % 取於數的應用   判斷基數或偶數

let isFake = true // boolean布林 用於判斷


let bag = undefined // 空值 和null些許不同 擇一使用


let bag2 = null // 空值
//---------------------------------------變數常數---------------------------------------

let a1 = "aaa"// 變數 var let 可修改 , let可以用於取代var
console.log(a1)
a1 = "bbb"// 修改a1的內容 程式由上往下執行 這樣會顯示 aaa 與 bbb
console.log(a1)

const b1 = "ccc"// 常數 const 不可修改 , 保證該變數永遠不被修改 是一個絕對的值 在編寫程式碼上具有穩定性
console.log(a1)
b1 = "ddd"// 宣告b1被正常執行顯示ccc, 修改b1為ddd顯示錯誤訊息
console.log(a1)

