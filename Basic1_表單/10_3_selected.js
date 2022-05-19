// 一.抓元件result 更改文字內容

// 1.1 result
// const設變數 ,變數名myForm ,變數內容來自網頁document的id:myForm物件,
// getElementById被作為搜尋document的id:myForm的函式,  getElementById(輸入查找的id)
const myForm = document.getElementById("myForm"); 
const num1Input = document.getElementById("num1"); 
const num2Input = document.getElementById("num2"); 
const optionInput = document.getElementById("option"); //從這獲取html的selectID:option 
const resultP = document.getElementById("result"); 

// 將變數的內容 用F12顯示測試結果
console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

//----------------------------------------------獲取 num1 num2 資料----------------------------------------------
// 當這個myForm表單內的submit送出
// 獲得 num1 num2 資料的value
    myForm.addEventListener('submit',function(e){
    e.preventDefault();//submit不送出表單
    console.log(e);
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1=parseInt(num1Input.value);
    let num2=parseInt(num2Input.value);


    let option = optionInput.value;//將變數option設value

    let resultNum = 0; //設變數resultNum為0, 用於在switch內計算時產生的結果

    switch (option) { //名為option的自訂工具的公式, case用於感知輸入的符號內容
        case "+":
            resultNum = num1 + num2 ;//變數resultNum為 num1+num2 以下以此類推
            break;
        case "-":
            resultNum = num1 - num2 ;
            break;
        case "*":
            resultNum = num1 * num2 ;
            break;
        case "/":
            resultNum = num1 / num2 ;
            break;
    }
    console.log(resultNum);
    myString1 = `${num1} ${option} ${num2} = ${resultNum}`; //新增一個名為option的自訂工具用於在此計算
    resultP.innerText = myString1;
    })
    //submit get value

//二.改result元件 的內容文字為 hello first change text
result.innerText = "更改為main.js的文字";