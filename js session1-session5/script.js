//! session 1

//todo basics of language javascript

//? display a normal msg in the console tab
// console.log('welcome')
// console.error('welcome')
// console.warn('welcome')
//  var name= 'Manel kharbout';
//  console.log(name)

//? strings

//  let email='manel@gmail.com'
//  let nom='manel kh'
//  console.log(email,nom)

//? strings concatenation

// let FirstName='Manel'
// let LastName='kharbout'
// let FullName= FirstName + ' ' + LastName
// console.log(FullName)

//? getting characters

// console.log(fullname[2])

//? string length
// console.log(firstname.length)

//? string methods
// console.log(firstname.toUpperCase())
// console.log(firstname.toLowerCase())
// let position=email.indexOf('g')
// console.log(position)

// let email ='kharbout2017@gmail.com'
// let result = email.lastIndexOf('a')
// console.log(result)

// let email ='kharbout2017@gmail.com'
// let result = email.slice(1-8)
// console.log(result)

// let email ='kharbout2017@gmail.com'
// let result = email.substr(4-8)
// console.log(result)

// let email ='kharbout2017@gmail.com'
// let result = email.replace('a', 'z')
// console.log(result)

// let likes=100;
// console.log('you have:' + likes + 'likes')

//? template strings

// let course = 'learn js from scratch';
// let instructor = 'samar ayadi';
// let students = 10;

//? concatenate string

// let result=(`course name:${course} by ${instructor} has ${students} students`)
// console.log(result)

//? HTML templates

// let content=`
// <h1>${course}</h1>
// <p>instructor:${instructor}</p>
// <em>students:${students}</em>
// `
// let strippedString = content.replace(/(<([^>]+)>)/gi, "");
// console.log(strippedString)

//! session 2

//? array methods

// let course=['angular' , 'reactjs' , 'spring']
// course[1]='java'       //todo replace reactjs with java :overRide
// console.log(course)
// console.log(course[1]) //todo get java:the position :pointer

// let random=['angular' , 10 , true ]
// console.log(random)

// let result= course.join('-')
// console.log(result)

// let result= course.indexOf('spring')
// console.log(result)

// let result=course.push('vuejs')   //? add un element from end
// course.pop()                      //? remove from end
// course.unshift('laravel')         //? add un element from start
// course.shift()                    //? remove from start
// console.log(course)

//? methods returns booleans

// let email='pingucoder@gmail.com'
// let result=email.includes('@')       //? retrieve a letter if available or not
// console.log(result)

//? comparison operators

//! =:affectation
//! ==:equal

// let age=21
// console.log(age==25) //affiche result false

// let age=21
// console.log( age + 5)

// let age='25'
// age=Number(age)   //? convert string to number
// console.log( age + 12 ,typeof age)

//  age=String(age)
//  console.log(typeof age)

//! = is used to assign values ​​to a variable in JavaScript.

//! == is used for comparison between two variables regardless of the type of the variable.

//! === is used for a strict comparison between two variables

//! that is, it will check the type and value of both variables,which means it will check the type and compare the two values

//! seance 3

//? control structure

//? conditionals
// var x = 9;
// if( x >= 10)
// {
//     document.write("GOOD. YOU SUCCESS")
// }
// else if( x <= 9)
// {
//     document.write("OOPS. YOU unSUCCESSful")
// }

//? boucle for

// for( let i=0 ; i<5 ; i++ ) {
//   console.log(`iteration: ${i}`)
// }
// console.log("final iteration")

//? tableau

// let names=['amani' , 'pingucoder', 'samar']
// for (let i=0 ; i<names.length ; i++){
//     console.log(`name ${i+1} : ${names[i]}`)
// }

//? boucle while

// let i=0;
// while( i<5){
//     console.log(`iteration: ${i}`);
//     i++;
// }
// console.log('final')
//tableau
// let i=0;
// let names=['amani' , 'pingucoder', 'samar']
// while( i <names.length) {
//     console.log(`name ${i+1} : ${names[i]}`)
//     i++;
// }

//? boucle do while

// let i=0;
//  do{
//     console.log(`value of i is: ${i}`)
//     i++
// }
// while (i<4)

//? if condition : if ,else if ,else
//? switch condition : switch , case

// let note=15;
// if (note<=15){
//     console.log('excellent')
// }
// let password="hgnbvkmf";

// if ( password.length >= 8 ) {
//    console.error(" password should be great than 8 characters! ")
//  }

// else{
//     console.log(" valid password ")
// }

// let note=20;
// if (note == 20){
//     console.log('excellent')
// }
// else if (note >=15){
//     console.log('good')
// }

// else if (note >=12){
//     console.log('quite good ')
// }

// else if (note <=10){
//     console.warn('you are not able')
// }

//? operators logical

// let password='b@hkk';
// // ou || et && not !
// if ( password.length < 8 || !password.includes('@')) {
//       console.error(" invalid password  ")
//     }

//    else{
//        console.log(" valid password ")
//    }

//? negation

// let user=false;
// if (user){
//     console.log('user is false')
// }
// else{
//     console.log('user is true')
// }
// console.log(!true);
// console.log(!false);

//? Break & condition in loop
// let numbers=[ 10, 82, 25, 0, 35, 100, 54, 50, 12];
// for (let i = 0 ; i< numbers.length ; i++){
//     if (numbers[i] ==100){
//         console.log('congrats')
//         break; //! stop until 100
//     }
// console.log(`score: ${numbers[i]}`);

// }
// let numbers=[ 10, 82, 25, 0, 35, 100, 54, 50, 12];
// for (let i = 0 ; i< numbers.length ; i++){
//     if (numbers[i] ==0){
//         continue; //n'affiche pas le 0 et continue
//     }
//     console.log(`score: ${numbers[i]}`);
// }

//! switch case control: switch to multiple cases: display all cases

// let typeDeSang = 'A';
// switch(typeDeSang){
//     case 'O':
//         console.log('type de sang est O')
//     case 'A':
//         console.log('type de sang est A')
//         break; //? we put break to display just A
//     case 'AB':
//         console.log('type de sang est AB')
//     default:
//         console.log('type de sang est non valid!')
// }

//! session 4
//? search ternary condition on mdn web docs

//todo The ternary operator is a simplified conditional operator like if / else.
//todo Syntax: condition ? <expression if true> : <expression if false></expression>

// let age=19;
// let result;
// if (age>=18){
//     result='major'
// }
// else{
//     result='minor'
// }
// console.log(result)

//? ternary condition

// let age = 19;
// let result = (age >= 18)? "major" : "minor";
// console.log(result)

//? functions declaration

// function someThing() {
//     console.log('Hello devops');

// }
// someThing()

//? function expression

// const speak = function () {
//     console.log('Im a developer')
// }
// speak ()

//? arguments and parameter

// const speak = function(name , gender){
//     console.log(`I am ${gender} ${name}`)
// }
// speak('yahya' , 'Mr')

//? or with default

// const speak = function(name = 'arwa' , gender='Mlle'){
// console.log(`I am ${gender} ${name}`)
// }
// speak()

// const surfaceCercle = function(rayon){
//     let surface = 3.14 * rayon **2;
//     console.log(surface)
// }
// surfaceCercle(20);

//? other method

// const surfaceCercle = function(rayon){
//     return  3.14 * rayon **2;

// }
// let surface=surfaceCercle(20);
// console.log(surface)

//? surface triangle

// const surfaceRectangle = function(width ,length){
//     return width  * length
// }
// let surface = surfaceRectangle(20 , 30)
//  console .log(surface)

//? Return

// const yell = "I will end you".toUpperCase()
// yell;
// console.log(yell)

// const idx = [ 'a' , 'b' , 'c'].indexOf('b')
// idx;
// console.log(idx)

//? Arrow function

//  const surfaceCercle = rayon => //! we replace function with arrow and we neglect the parentheses, curly braces and return because we have only one parameter and instruction
//    3.14 * rayon **2 ;
// let surface = surfaceCercle (20);
//     console.log(surface);

//? closure CallBacks - forEach

// let names=['dhia' , 'manel' , 'yahya' , 'yakout' , 'amin']
// names.forEach(function(name) { //? forEach is a method to execute for each iteration
//     console.log(name)
// })

//? with arrow function

// let names=['dhia' , 'manel' , 'yahya' , 'yakout' , 'amin']

// names.forEach(name => {
//     console.log(name)
// })

// let names=['dhia' , 'manel' , 'yahya' , 'yakout' , 'amin']

// let html=`` ;

// const persons=(name , index) =>{
//    html += `<li> ${name} </li>`
//  }

// names.forEach(persons)
// let myElement = document.querySelector('.persons') //! my element contains ul and querySelector selects the contents of ul
// myElement.innerHTML = html;

//? literal objects

//todo create a js object
//An object is a structure in which we can group several pieces of information of different types in its place.

//? get method
// let user = {
//     firstName: "carlo" ,
//     lastName: "Gambino" ,
//     age: 40,
//     email: "carlogambino@gmail.com",
//     active: true,
//     courses: ["Angular" , "ReactJs" , "VueJs"]
// }
// console.log(user.age) //! age is the attribute name=key, user is the object name

//? set method
// console.log(user['age']) //! the user becomes like a table
// user['age'] = 45 //modification
// console.log(user)

//todo add methods in an object

// let user = {
//         firstName: "carlo" ,
//         lastName: "Gambino" ,
//         age: 40,
//         email: "carlogambino@gmail.com",
//         active: true,
//         courses: ["Angular" , "ReactJs" , "VueJs"],
//         login: function() {
//             console.log('log with this user.')
//         }
//     }
//     console.log(user.login()) //! or we delete function and replace with arrow function

//? 'this'

// let user = {
//     firstName: "carlo" ,
//     lastName: "Gambino" ,
//     age: 40,
//     email: "carlogambino@gmail.com",
//     active: true,
//     Courses: ["Angular" , "ReactJs" , "VueJs"],
//     logout: function ()  {
//         console.log('log out with this user.' , this)
//     },

//     login: () => {
//         console.log('log with this user' , this)
//     },

//     showCourses: function () {
//         this.Courses.forEach(course => console.log(course))
//     } //! loop in method
// }
// console.log(user.showCourses())
// console.log(user.login())
// console.log(user.logout())

//? create objects in an array

// let user = {
//         firstName: "carlo" ,
//         lastName: "Gambino" ,
//         age: 40,
//         email: "carlogambino@gmail.com",
//         active: true,
//         Courses: [
//             { title: "Angular" , price: 23},
//             { title: "ReactJS" , price: 45 },
//             { title: "VueJS" ,  price: 46},
//         ], // objet dans un tableau dans un objet
//         logout: function ()  {
//             console.log('log out with this user.' , this)
//         },

//         login: () => {
//             console.log('log with this user' , this)
//         },

//         showCourses: function () {
//             this.Courses.forEach(course => console.log(course.title ,course.price))
//         } 
// }
// console.log(user.showCourses())
// console.log(user.login())
// console.log(user.logout())

//? or other method
// const myCourses = [
//     {title: "Angular" , price: 23}
//     { title: "ReactJS" , price: 45 },
//     { title: "VueJS" ,  price: 46},
// ] //!declare before let user
// courses: myCourses

//!session 5
//todo interact with the HTML DOM
//todo change and add content to the page
//todo document is part of a window = in window
//todo the Query selector: method to retrieve or select

// const header = document.querySelector('h1')
// console.log(header) //? get h1

// const header = document.querySelector('.primary')
// console.log(header) //? get para

// const paras = document.querySelectorAll('.success')

// !retrieve multiple paras with same class: querySelectorAll
// console.log(header)

// const paras = document.querySelectorAll('.success')
// paras.forEach(para => console.log(para))

// const paras = document.querySelectorAll('div.myContent > h2');
// paras.forEach(para => console.log(para))

// const paras = document.querySelectorAll('div.success');
// paras.forEach(para => console.log(para))

// const paras = document.querySelectorAll('.success');
// paras.forEach(para => console.log(para))

//? other method to interact with DOM:
//? get element by id , class , by Tag

//? get element by Id
// const header = document.getElementById('title');
// const header = document.querySelector('#title');
// console.log(header)

//? get element by Class
// const divisions = document.getElementsByClassName('content')
// console.log(divisions)

//? get element by Tag
// const paragraphs = document.getElementsByTagName('p')
// paragraphs.forEach(para => console.log(para))
// console.log(paragraphs)

//? foreach used in tab no for func

//! change and add content to the page

// const header = document.querySelector('#title');
// console.log(header.innerText)
// header.innerHTML = "javascript in pingucoder"
// header.innerText = header.innerText + "javascript in pingucoder"
//? or
//   header.innerText += "javascript in pingucoder"

// const headers = document.querySelectorAll('h2');

// headers.forEach((header , index) => {
//     header.innerText = "mon titre" + (index+1)
// })

// const division = document.querySelector('.myContent')
// console.log(division.innerHTML)
// division.innerHTML += "<a href='https://www.amazon.com/'>Amazon</a>"
//todo change the tag with :innertext
//todo point to an element as html content: innerhtml

//? retrieve and modify the attribute of a DOM

// const anchor = document.querySelector('a');
// console.log(anchor.innerText)

// const anchor = document.querySelector('a');
// console.log(anchor.getAttribute('href')) //todo get content href

// anchor.setAttribute('href', 'http://facebook.com')
// anchor.innerText='facebook'

//? change style css

// const para = document.querySelector('p');
// para.setAttribute('class' , 'error') //todo change class with error
// para.setAttribute('style' , 'color:red') //todo add style

// const header = document.querySelector('h1');
// header.setAttribute('style' , 'margin:50px') //todo take except the margin and snow the green color

// console.log(header.style.color)
//? or directly to apply the margin and the color we type

// header.style.margin= '100px'
// header.style.color= 'red'
// header.style.fontSize= '80px'
