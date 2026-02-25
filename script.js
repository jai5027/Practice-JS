// let counter = 0;

// function getData(){
//     console.log("count", counter++)
// }

// function myBounce(call, d){
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         setTimeout(() => {
//           call()
//         },d)
//     }
// }
// let best = myBounce(getData, 1000)



// let count = 0

// function getData(){
//     console.log("count", count++)
// }

// function myBounce(call, d){
//        let timer;
//        return function(...args){
//         if(timer) clearTimeout(timer)
//         setTimeout(() => {
//             call()
//         }, d)
//        }

// }
// let hi = myBounce(getData, 2000)

// let users = {
//     name: "jai",
//     age: 22,
//     add: "kota"
// }

// for(let key in users){
//     console.log(`Value of ${key} is ${users[key]}`)
// }

// let arr = [1,2,3,4,5]

// let v = arr.sort(() => Math.random() - 0.5)
// console.log(v)

// let arr = [1,1,2,2,3,5,5,7,10,9,10,2,3,3,3,3,3,4,5]
// let v = arr.filter((item, index) =>  arr.indexOf(item) === index)
// console.log(v)

// let arr = [[1,[2,[3],4,5],6],[1,2,3,4,5,[4,2,3,9]]]

// let v = arr.flat(Infinity)
// console.log(v)


// let arr = "jai sharma ksp"
// let freq = {}
// arr.split('').forEach(item => {
//     freq[item] = (freq[item] || 0) + 1;
// })
// console.log(freq)


// let arr = [1,2,3,4,5]
// let str = arr.join(' ')
// console.log(str)

// let arr = [0, false, true,null,"", "hi", 2,4,5,6,]

// let arr1 = arr.filter(Boolean)
// console.log(arr1)

// let obj = [
//     {id: 1, name: "jai"},
//     {id: 2, name: "karan"},
//     {id: 3, name: "pawan"},
//     {id: 4, name: "bijo"},
// ]
// function search(obj, searchKeyword){

//     let v = obj.filter(item => {
//         return item.name.toLowerCase().includes(searchKeyword.toLowerCase())
//     })
// return v
// }
// console.log(search(obj, "P"))


// let obj = [
//     {id: 1, comment: "good"},
//     {id: 2, comment: "very good"},
//     {id: 1, comment: "nice"},
// ]

// function groupComment(obj){

//     let groupComm = {}

//     obj.forEach(item => {
//         if(groupComm.hasOwnProperty(item.id)){
//              groupComm[item.id].push(item.comment)
//         } else {
//              groupComm[item.id] = [item.comment]
//         }
//     });
//     console.log(groupComm)
// }
// groupComment(obj)


// let searchInput = document.querySelector("#search")

// function myBounce(func, delay){
//     let timer;
//     return function(...args){
//         clearTimeout(timer)
//         timer = setTimeout(()=> {
//              func(...args)
//         }, delay)
//     }
// }
// const myfunction = function (e) {
//   let data = e.target.value;
//   console.log(data)
// }

// searchInput.addEventListener
// ("input", myBounce(myfunction, 1000))



// let btn = document.querySelector(".btn")

// function throttle(func, delay){
//     let shouldCall = true
//     return function(...args){
//           if(!shouldCall)
//           return

//           func(...args)
//           shouldCall = false;

//           setTimeout(() => {
//              shouldCall = true
//           }, delay)
//     }
// }

// const buttonClick = () => {
//     console.log("clicked")
// }

// btn.addEventListener("click", throttle(buttonClick, 1000))


// let arr = [1,2,3,4,5]

// Array.prototype.extraProperty = "jai"

// for(let v in arr){
//     if(arr.hasOwnProperty(v)){
//         console.log(v)
//     }
// }


// const func = (arr, callback) => {
//     for(let i = 0; i < arr.length; i++){
//         callback(arr[i], i, arr)
//     }
// } 
// func([10,20,30], function(value){
//     console.log(value)
// })

// let a = {
//     name: "jai",
//     age: 20
// }

// let b = {
//     name: "kiya",
//     age: 22
// }

// let c = {
//     name: "lion",
//     age: 90
// }

// b.__proto__ = a

// c.__proto__ = b
// console.log(c)


// let myPromise = new Promise((resolve, reject) => {
//     reject("success")
// })

// myPromise
//        .then((data) => {
//            console.log(data)
//        })

//        .catch((error) => {
//            console.error("something wong", error)
//        })



// function getUser(){
//     return Promise.resolve("Data")
// }

// function getPost(){
//     return Promise.resolve("Post")
// }

// Promise.all([getUser(), getPost()])
//              .then((data) => {
//                 console.log("data mil gya", data)
//              })

//              .catch((error) => {
//                 console.log(error)
//              })

// function dis(discount){
//     return function(price){
//         return price - (price * discount / 100)
//     }
// }

// const d = dis(10)

// console.log(d(1000))


// function ab(a,b,c,d){
//     return a+b+c+d;
// }
// let v = ab(10,20,30,40)
// console.log(v)


// function ad(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// let res = ad(2)(2)(2)
// console.log(res)


// function ab(a){
//     return function(b){
//         if(b) return ab(a+b)
//         return a
//     }
// }
// console.log(ab(3)(7)(3)(5)())


// function trackEvent(eventName){
//     const data = { event: "Modi fest"}


// function inner(key){
//     return function(value){
//         if(key && value){
//             data[key] = value
//             return inner;
//         }
//         return data
//     }
// }
// return inner;
// }

// let res = trackEvent("button")("cover")("adobe")("system")("oop")("pop")();

// console.log(res)



// function hey(){
//     return "hey"
// }

// function hellow(){
//     return "hellow"
// }

// function res(fn, name){
//     return fn() + " " + name
// }
// let v = res(hey, "jai")
// console.log(v)


// function ab(){
//     console.log("ab")
// }

// function bc(cf){
//     return cf()
// }
// let res = bc(ab)



// let arr = [1,2,34,5,"jai","king",90]

// let v = arr.every((ele) => {
//       return typeof ele === 'number'
// })
// console.log(v)


// let arr = [1,2,34,09,13]
// let v = arr.find((ele) => {
//     return ele === 1
// })
// console.log(v)



// let arr = [1,2,3,4,5,6,7]
// let arr1 = []

// function my(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] <= 2){
//             arr1.push(arr[i])
//         }
//     }
//     return arr1
// }
// let v = my(arr)
// console.log(v)

// let  h1 = document.querySelector('.m')
// let p = document.querySelector('.p')
// // console.log(h1.tagName)
// // console.log(h1.nodeName)
// // console.log(h1.firstChild.nodeName)
// // console.log(h1.lastChild)
// console.log(h1.innerHTML)
// console.log(h1.textContent)
// h1.textContent = "mkc"
// console.log(p.textContent)
// p.textContent = "king"


// let div = document.querySelector('div')

 //let p = document.createElement("p")
// div.append(p)

// p.innerText = 'param 4'
// p.style.border = '2px solid black'
// p.style.padding = '5px'


// let v = div.children[2];
// v.remove()


// let v = document.querySelector('.selection')
// let o = v.parentNode
// o.append(p)
// p.innerHTML = "param 4"

// let p1 = document.createElement('div')
// p1.innerHTML = "hext"
// console.log(p1)



// let div = document.querySelector('div')

// let ele = document.createElement('p')
// ele.innerHTML = "New param"
// let c = div.children[1]

// div.insertBefore(ele, c)


// let v = document.querySelector('div')
// console.log(v.attributes.class.value)
// v.setAttribute('class', 'random')
// console.log(v)


// let body = document.querySelector('body')
// let p = document.createElement('p')
// p.className = "ki"
// body.append(p)
// p.innerHTML = "I am Denenias Tergerion"
// p.style.backgroundColor = "black"
// p.style.color = "green"


// let button = document.createElement('button')
// button.innerHTML = "Button"
// p.prepend(button)
// console.log(button)

 
// function change(oldNode, newNode){
// let p = document.createElement(newNode)
// p.innerHTML = oldNode.innerHTML
// for(let att of oldNode.attributes){
//     p.setAttribute(att.name, att.value)
// }
// oldNode.replaceWith(p)
// }
// let div = document.querySelector('.box')
// change(div, 'p')


// let div = document.querySelector('div')
// div.setAttribute('class', 'redBg')
// let v = div.classList.contains('redBg')
// console.log('redBg')
// console.log(v)
// let c = div.classList.toggle('redBg')
// console.log(c)


// let body = document.querySelector('body')
// let button = document.querySelector('button')
// let theme = 'light';
// button.addEventListener('click', ()=> {
//     if(theme === 'light'){
//     body.style.backgroundColor = "black"
//     body.style.color = "white"
//     theme = 'black'
//     } else {
//         body.style.backgroundColor = "white"
//         body.style.color = "black"
//         theme = 'light'    
//     }
// })


// let body = document.querySelector('body')
// let button = document.querySelector('button')

// button.addEventListener('click', () => {
//     body.classList.toggle('dark')
// })


// let inc = document.querySelector('.inc')
// let dec = document.querySelector('.dec')
// let counter = document.querySelector('.counter')
// inc.addEventListener('click', () => {
//     counter.innerText = Number(counter.innerText) + 1
// })
// dec.addEventListener('click', () => {
//     let value = Number(counter.innerText)
//     if(value <= 1){
//     return
//     }
//     counter.innerText = Number(counter.innerText) - 1
// })
 

// let name = document.querySelector('#name')
// let email = document.querySelector('#email')
// let sub = document.querySelector('.sub')
// let body = document.querySelector('body')
// sub.addEventListener('click', (e) => {
//     e.preventDefault()
//     let div = document.createElement('div')
//     div.innerHTML = `<p>${name.value}</P>
//                       <p>${email.value}</P>`
//                       body.append(div);
// })


// let obj = {
//          name: "jai",
//          age:null,
//          add: {
//               vill: "kishanganj",
//               arr: [1,2,3,4]
//           }   
// }

// let {name, age=12, add:{arr:[a,b]}} = obj
// console.log(name, age, [a,b])


// let obj = {
//     name: "jai",
//     age: 22
// }
// let v = JSON.stringify(obj)
// console.log(v)
// let t = JSON.parse(v)
// console.log(t)




// let input = document.querySelector(".input")
// let addBtn = document.querySelector(".btn")
// let ulList = document.querySelector(".ulList")


// const GetValue = () => {
//     if(input.value.trim() === ""){
//         input.value = "" 
//         return;
//     }

//     let li = document.createElement("li")
//     li.textContent = `${input.value}`
//     li.classList.add("li")

//     ulList.appendChild(li)
//     input.value = ""
    


//     let removeBtn = document.createElement("button")
//     removeBtn.textContent = "X"
//     removeBtn.classList.add("remove-btn")
//     removeBtn.onclick = () => {
//         li.remove();
//     }   

//     li.appendChild(removeBtn)
// }
// addBtn.addEventListener("click", GetValue)


// let arr = [2,3,6,3,1,2,7,8,9,0,3,4]

// let v = arr.filter((val, index) => {
//     return arr.indexOf(val) === index
// })

// console.log(v)

// let arr = [111,23]
// let max = arr[0]

// for(let i = 0; i <= arr.length; i++){
//     if(arr[i] < max){
//         console.log(max = arr[i])
//     } 
// }
// console.log(max)

// function ab(str) {
//     let str1 = str.toLowerCase()
//     let v = str.split('').reverse().join('')
//      if(v === str1){
//         console.log("pliindrome hai")
//      } else {
//         console.log("nhi hai")
//      }
// }
// ab("madam")


// function ab(a, b, c) {
// if(a > b && a > c){
//     console.log("a is big", a)
// } else if(b > c && b > a) {
//     console.log("b is big", b)
// } else console.log("c is big", c)
// } 
// ab(10, 30, 50)


// let num = 1;
// if(num > 0) {
//     console.log("pasitive")
// } else if(num < 0){
//     console.log("nagetive")
// } else {
//     console.log("Zero")
// }


// let units = 112
// let payment = 0;

// if(units < 100){
//     payment = units * 5
//     console.log(payment)
// } else if ( units <= 200){
//     payment += units * 7
//     console.log(payment)
// }


// let arr = ['a','b','c','d','e','f','g']
// let vowels = "aeiouAEIOU"
// let vowelsArr = []
// let constant = []

// for(let v of arr) {
//     if(vowels.includes(v)){
//         vowelsArr.push(v)
//     } else {
//        constant.push(v)
//     }
// }
// console.log("vowelsArr :", vowelsArr.length);
// console.log("contants :", constant.length);


// let user = Number(prompt("Enter Number"))
// let sum = 0
// for(let i = 0; i <= user; i++){
// sum += i
// }
// console.log(sum);


// let arr = [2,3,24,5,1]
// let a = arr[0]

// for(let v of arr) {
//     if(v < a){
//        a = v
//     }    
// }
// console.log(a);



// const arr = ['a','b','c','d','e','i','o']
// const vowels = 'aeiouAEIOU'
// const vow = []
// const con = []

// for(let v of arr){
//     if(vowels.includes(v)){
//     vow.push(v)
//     } else {
//         con.push(v)
//     }
// }
// console.log(vow)
// console.log(con)


// const arr = [1,1,2,3,4,5,6,5,4,3,2,1]
// const data = [...new Set(arr.filter((item, index) => arr.indexOf(item) !== index))]
// console.log(data)


// const arr = [1,1,2,3,4,5,6,5,4,3,2,1]
// const data = [...new Set(arr)]
// console.log(data)


// const arr = [[1,2],[2,5,3,5],[7,4,5]]
// const v = arr.flat(Infinity)
// const data = [...new Set(v)]
// console.log(data);


// const arr = ['uday', 'abhay', 'pawan']
// const upper = [] 
// for(let v of arr){
//     upper.push(v.charAt(0).toUpperCase() + v.slice(1))
// }
// console.log(upper)


// let computerNum = 5
// let guess = null

// while(guess !== computerNum){
//   guess = Number(prompt("Enter Something"))
//     if(guess > computerNum){
//         console.log("Number is to high"); 
//     } else if(guess < computerNum){
//         console.log("Number is to low")
//     } else {
//         console.log("Congratulations")
//     }

// }

let arr = [1,2,3,4,5]
let l = arr[0]

for(let v of arr){
    if(l < v){
        l = v
    }
}
console.log(l);



























































































