// ---------------------------------陣列與物件 Array,Object---------------------------------
// ---------------------------------------陣列 Array---------------------------------------
// 陣列=許多變數的集合體 , 一個班30個同學=要宣告30個變數個別宣告  造成管理與操作的困擾

let classA =['小明','小白','小華','以此類推 無長度限制']// 陣列宣告
//              console.log('轉學前:',classA);

classA.push('小黃')//在classA陣列 用push新增 字串'小黃'
//              console.log('轉學後:',classA);//此時再顯示classA陣列 會新增小黃在內
// 應用在社群軟體的照片
let igPhotos = [
    'https://xx.img.com/a1.png',
    'https://xx.img.com/a2.png',
    'https://xx.img.com/a3.png'
]
                console.log('第一張:',igPhotos[0]);//個別取出陣列內容,陣列從0開始算第一個內容0123=1234,陣列的這個index被稱為索引

//              console.log('igPhotos',igPhotos);//再從html用img src接應顯示出照片內容
//              console.log('igPhotos',igPhotos.length);//長度length 意味內容數

// --------------------------------------物件 Object---------------------------------------
// 把一個物件給一些屬性(宣告一個有屬性的物件):上面有很多不同的屬性, 像是一個名片 有名字 地址 電話等屬性
const card = {
    name:'KE名片',
    addres: '蘆洲',
    age: 1000,
}
console.log('名字',card.name);//個別取出物件內容,輸入物件(card).內容(name), 其 "." 類似中文 "的"
//card.name=>card的name


// 使用物件與陣列  組合出動態牆上的資訊
const post1 ={
    Image: 'https://xx.img.com/a1.png',
    desc: '這是一個貼文內容',
    date: '日期2022/02/08',
    comment: ['留言內容','因為很多','所以可以','使用陣列屬性']
}
const post2 ={
    Image: 'https://xx.img.com/a2.png',
    desc: '這是一個貼文內容',
    date: '日期2023/02/09',
    comment: ['留言內容','因為很多','所以可以','使用陣列屬性']
}
// 動態牆
const wall = [
    post1,
    post2,
]
console.log('wall',wall);