//  taste of java script;
// var myName= 'shiv sagar';
// console.log(myName);
// var my_age = '45';
// console.log(my_age);

// nameing practice


// var name= "ehllo"; __ this is valide  variable name
// var _my_name= "hello"; this  is the valid  variable name
// var name f = " hello"; this  is the invalid variable  name
// var  1hyy = " this "; this is  the invalid variable name
// var @indg = " i dont kknow"; this is the invalide name


//  ther are two type of data type in java script first is primitive  and second is non primitive
//  primitive_datatype are following

// Undefined: tyep of instnce ==="undefine"
// Boolean : type of instance ==="boolean"
// Number : type  of instance ==="number"
// string :type of instance ==="string"
// BigInt:Tyoe of instance ==="bigint"
// symbol:Type of instance ==="symbol"

//  var myName = "vinod thapa";// this is the string 
//   console.log(myName);
// // if you want to check the type of oprator  then you can use type of method
//  console.log(typeof(myName))
//   var myNum = 34;// this  number data type
//   console.log(typeof(myNum))
//    var my_Name = true; // this is  boolean data type
//    console.log(typeof(my_Name))


// /challange 2
//  console.log(9 + "20"); // This will do concatnation of  9 with 20 wich will give 920 result
//  console.log(9-"20"); // This will give you  subtraction of two no.  which  is javascrip bug
//  console.log(" hello"+" ji ") // This  will do  concate two string  resul in " hello ji"
//  console.log('string' -"string")// this will give  ressult (NAN) which say this  is Not a Number


//  //interview question l
//  what is the  differance b/w null and undefined;
 
//  null example
//  var my_name = null ;//this mean im not storing an thing into this variable

//  undefined example 
//  var myname; // this say that  i declare var but  i havn't defined any a vlue to  it

//  //to check data type use typeof() method

// increament and decreament oprator
// Operator: x++ or ++x  or x-- or  --x

// if we used postfix, with opreator fter operand( fro  example, X++)
// // the increment operator increment and returns  the value  before increament.


//  var  num  = 15;
//  var newNum = num++ ;
//   console.log( num);
//   console.log(newNum);

// // if  we used prefix , with opreator after operand (eg ++x);
// //  the expression is evalutaied  using the new value of the variable
//  var  num = 12;
//  var  newnum  =++num;
//   console.log(num);
// //   console.log(newnum);



// // comparison opreator
// var num = 1;
// var num2 = 2;
// console.log(num==num2)


// var num = 1;
// var num2 = 4;
// console.log(num != num2);
// // less  & greater than opreator
//  var a = 1;
//  var b = 3;
// console.log( a > b);
// console.log(a < b);
//  console.log(b >=b);
//   console.log( b <= a);



// console.log(3**3);
// console.log( 9 + "788");

// //  write a program to swap 2 no.

// var a = 1;
// var b = 4;

// var temp ;
// temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);
// // without using third var
// a= a+b;
// b= a - b;
// a = a - b;

//  hear we are using  === shing to compare   both value and data type of that  variable
// and == will only check value of that variable

//  var n = 8;
//  var b = "8";

//  console.log(n===b)

// // conditional opreator
 
// n = 2000;
// if( n % 4 == 0   && n % 400 == 0 ){
//     console.log("its leap year");
// }
// else if( n % 4 == 0 ){
//     console.log("its leap year");
    
// }
// else if(n%  100 == 0){
//      console.log("its  not a leap year");
// }




// //  java script have total 5  false value  0, "",undefined,null ,NAN, false  and rest all are true for java script

//  if( 0){
//      console.log("hello")
//  }
//  else{
//     console.log("byy")

//  }



 // ternary opreator 

//  The conditinal  (ternary ) operator is the only javascript  operator
//  That take three operands


//  combinataion of opreand and  opreator is Expression

// example of ternary opreat
// var name_of_the_variable  =  condition ? "if condition is true  thia message will show" :"if message is not true then this condistion will show"


// area of the triangle 

// switch(n){
//     case ("circel"):
//         console.log("this is the circle");
//         break;
//     case("triangle"):
//         console.log("this is the triangle");
//         break;
//     case("hell"):
//          console.log('this is the consol');
//          break;
//     default:
//         console.log("chle be")

       
// }


// while loop 


// var num = 0;
// while(num <= 100){
//     console.log(num);
//     num++;
// }


//  do while loop

// do{
//    console.log(num);
// }while(num<100);


// for loop 

//  forloop Syntax   for(intializer; condition ;iteration){ ...logic...}

//  for(var i=0; i<100;i++){
//     console.log("this is my no." + " " + i);
//  }

//  for (var i = 0 ; i<100;i++){

//     console.log( 8 * i );

//  }




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function is the block of the code 
//  before we use a function , we need to define it ;
 
//  A function definatio ( also called a funtion declaration , or function statement)
//   consiste of the function keyword , followed by ;

// the name of the  function ;
// A list of the parametrs to the function enclosed in parenthese and seprated by commas
// the javascript statment that defin the function , enclosed in curly brackets,{}

// syntax
//  function name_of_the_function(paremeter){
//     // logic or code
//  }


// function sum(){// declaring function  sum
//      var a = 76;
//      var b =09;
//      var total = a+b;
        //  console.log(total)


// }
// console.log(sum())//calling  function sum



// what is the diff between function parameter and argument

// parameter
// function sum (a,b,d,c){ // a,b,c,d are parameter of the function
//   console.log(a+b+c+d)
// }


// sum(3,4,5,56);// 3,4,5,56 thes are the value of the parameter  a,b,c,d and this is called argument




// what is the fuction Expression
//Function expressiom simply means
// // creat a function and put it into the  variable
// function sum(a,b){
//     var total = a+b;
//     console.log(total);
// }


// var funexp = sum(20,32);



// @@return keyword

// function sum (a, b){
//     return total = a+b;
// }

// var funexp  = sum(5,5);

//  console.log('the value in the funtion is $funexp adfaf',funexp);


// //anomynos function//
// A function  expressin is similar to and has  the same syntax as function
//  as a funtino declaration one can  define "name" 
//  function expressins( where the name of the expressin might be used in the call stack for example)
// //  or anomynous function are those who have no name to it


// var funexp = function(a,b){
//     return total = a+b;

// }
// console.log(funexp(7,4));



// Ecmascript


// let ,var ,const; thes were introduece int es6
//   funtion scope
// let , const =  scop  bolck



// // tamplet literal (template strings){
//     // output: 8*2= 16
//     //        8*3 =24
//     //        8*4 = 32

// // }

// // syntax of  tamplet liteeral

// // for (let num =1 ; num <= 10; num++){
// //     let tableof = 12;
// //     console.log(`${tableof} * ${num} = ${tableof * num}`); //hear we are using expreation symbol 
// // }
 



// // // default argument

// // function multi(a,b =4){// this is  if we forgot to pass any argument then this function will go for defult argument  which is 5 assing to b  it dosn't matter if we pass  defult aargument to both or not  even if we pass it to  single prameter then and then also  both the parameter will have same defualt value

// //     return a*b;
// // }

// // console.log(multi())



//  //  fat arrow function

// //  function sum(){
// //     let a= 5; b = 45;
// //     let sum = a+b;
// //     return sum;
// //  }

// //  const sum =() =>{
// //     let  a= 5; b=6;
// //     let  sum = a+b ;
// //     return `${sum}` ;

// //  }

// //   console.log(sum());
// //  const sum_2 =() => `this fat arrow function also alow you to write code in  strig with need to pute this code into  pranthisi `


// //  console.log(sum_2())


// // section 7 Array in javaScript

// // when we feel like stoing multple  values in one  varibale
// // instead of var , we will use  an array.
// // .. in javascritp , we have an Array.
// //arrays are the prototype of this class.

// // var friend1 = 'ramesh';
// // var friend2 = 'arjun';
// // var friend3 = 'vishal';

// // var my_friends =['ramesh','arjun','visal'];
// // //  in diferent programing language  we can only store single datatype value or homogenus element 

// // //  but in case of javascript u can  store any type of vlaue or any data type vale
// //  var mydata= [2,3,4,"hello","byy",true];

// //  way to creat array 

// // In java scrpit , we have an  array class, and 
// // array are the protype of this  class

// // var myfriends = new Array;// this is optional u don't need to write this 
// // var  myfriend = ['ramesh',22,male,arjun, 20,male,'vishal',true,52];


// // Array traverla 
// // its mean how u can nevigate in array data 
// //  var my = ['vinod',2,"hello","shiv"];
// //  console.log(my[0])

// // //  if we want to chek lengh of the data  by useing  array_name.lenght

// // console.log(my.length);

// //forloop in array
 
// // ther two typ of for loop in array  and these are the part of esc script 

// // for in loop
// // for of loop
// // for each loop

// //  we can also use  traditional foor loop for this

// //   for(var i= 0 ; i<my.length; i++){
// //      console.log(my[i]);

// //   }

// // var my = ['vinod',2,"hello","shiv"];

// // for( let ele in my){
// //     console.log(my[ele]); // the only differnce b/w  for in loop and for of  is that   "in for in  you u have to specipy array like that to travers  eg arr[element]  or it will return  index value"  / but in case of for loop we can  acess element dirctly by putting avlue 


// // }
// // for(let ele of my){
// //     console.log(ele)
// // }
// // // Array.prototype.forEach() 
// // // calls a functio for each element in the array 
// //  my.forEach((ele,index,array)=>{
// //   console.log(ele+"index:" +" " + index +"  "+ array);
// //  });



// //  remeber //   we can't use this keyword in the  fat arrow funtion 
// //    but we can use this keyword in taratidtional funtion



// // >>>>>serching  and fileter in an array 


// // Array.prototype.indexOf()
// // return the first (least ) index of an elemnet within the array equal
// // to an element, or -1 if none is found. It search the element frm the 
// //0th index number


// var my = ['hell','hello','byy','youknow'];

// // console.log(my.indexOf('hell'));
// // console.log(my.indexOf('hello'));
// // console.log(my.indexOf('byy'));
// // console.log(my.indexOf('youknow'));


// // console.log(my.indexOf(0));
// // console.log(my.indexOf(1));

// // // 2nd mmethod of 
// // Array.prototype.lastIndexOf()
// //  it will go  backword where as indexOF will go forward search
// // console.log(my.lastIndexOf('hell'));

// // console.log(my.lastIndexOf('hello'));
// // console.log(my.lastIndexOf('byy'));
// // console.log(my.lastIndexOf());
// var my = ['hell','hello','byy','youknow'];

// // 3rd method 
// let my2 = [1,2,3,4,5,5,6];
// let m= my.concat(my2)



// // include method in java script()  

// console.log(my.includes('hell'));
// //it determin that this array inclued that value or not by tell true or false





// var my_ara= [23,3,4,23,23,24,32,324];

// my_ara.forEach((item,index,arr)=> 
// {
//  console.log(item,index,arr);
// });

// var sum = 0;
// my_ara.forEach((it)=>{
//   sum=sum + it;
//   console.log(sum);
// });

// my_ara.forEach(item=>{
//     if(count[item]){
//         count[itme]++;
//     }
//     else{
//         count[itme]=1;
//     }
// })


// const number  = [1,3,4,5];

// const numberd= number.map(double);
// function double(value,index,arr){
//     return value *2;
// }
// console.log(numberd);



//  map ing in araay
// const num = ["2","2","4","7"]

// const numbere = num.map((item) => {
//     return Number(item);
// });
// console.log(numbere);


// this is fileter method
//  const number =[2,3,4,5,6,3]
//  const evern = number.filter((item)=>{
//     if(item %2 === 0){
//        console.log(item)
        
//     }
//     else{
//         console.log("none")
//     }
//  })


// push function in the Array



//  Array.of(7);

// var my = Array.of(7);// this creat  the array of  singel element 
//  var my3 = Array(7);// this will creat array of lenght  7  every solot empty
// console.log(my);



// my = Array.of(7,4,3,2,2);
// console.log(my);
//  console.log(my3);
//  console.log(Array.from("shivsagar"));// this  function help to creat array  by  given argument 
// //  [
// //     's', 'h', 'i',
// //     'v', 's', 'a',
// //     'g', 'a', 'r'
// //   ]

//  console.log(Array.from("shivsagar", (element) => {
//   return element + "1";
// }));


// Array.at(index)

// Unshift
// var my = Array.of(3,4,4,5,3,23)
// my.unshift("chiken ","chiki","pinki");
//  console.log(my)// ushift add element in from the forward dirction

// my.push("this","is ","push ")// push method help to add elemen at the end of the array and it return the lenght of new array


// // const mynumber = [1,2,3,4,5]
// // mynumber.unshift(0,4,7,5);
// // console.log(mynumber)
// // mynumber.sort();
// // console.log(mynumber)


// var my =Array.from("myakljsdfl")
// console.log(my)
// my.pop()
// console.log(my)// this pop function remove the last itme  from and return the array and this method changes the lenght of the array

// my.shift()// this function help to remove element from the first of array

// console.log(my)

// //  challeng()

// add dec at the end of an Array

// var my = Array.from("shiv sagar")
// my.push("DEC????")
// console.log(my);

// my.splice(3,0,"lemmon","kill","me")// syntax array.splice(index from wher you want o add element , how many item to remove, element that need to add)

// console.log(my);


// //  const  my =['jan','march','00','june'];


// // // my.splice(my.length,0,"dec");
// // // console.log(my);

// // // what is the retunr value of splice method 
// // // splice return how many element is deleted in from of new Array

// // my.splice(my.indexOf("march"),my.indexOf("march"),"november");
// // console.log(my);
// // const  indexofmonth = my.indexOf("jan");
// // if( indexofmonth !=-1){
// //      my.splice(indexofmonth,indexofmonth,"hello buddy");
// //     console.log(my);

// // }else{
// //     console.log(my);
// // }


// // var my = Array.from("1234456788");
// // var newmy =my.map((item)=>{
     
// //      ele = Number(item);
// //      return Math.sqrt(ele);
// // });
// // console.log(newmy);

// // let new_array = my.map((curr,index,arr)=>{
// //     return `this return new array without muthing  old array`
// // });
// //what is the differacn b/w map and foreach array

// // map return new array but in caser of  foreach it return undefine

// // map method is chainable but foreach is not



// let my = Array.from("123456789");
// let new_array = my.map((curr,index,ar)=>{
//       var ele =Number(curr);
//       return  ele**2;
// })

// let sqr= my.map((item)=>{
//     return Math.sqrt(item);
// });
//  console.log(new_array);

//  console.log(sqr);




 // chainng method



//  let  arr = [1,2,3,4,5,6,7];
//  let neware= arr.map(item =>{
//      return item*2; }).filter(iem =>{  return iem > 10  
//        });//filter is used to fileter the array according to the particualr  requir ment


// console.log(neware)



//Reduce method

//flatten an array means to coenvert array in singel dimention from 3d to 2d array

 //the reduce() method  executes a reducer function ( that provied ) on each element of the array, resulting in single output value

 //the reducer function tacke four  arguments;

 //Accumlator
 //current value
 //current index
 //source array


//  let arr = [5,6,7];
//  let sum = arr.reduce((accmulator,currele,index,arr)=>{
//      return accmulator = accmulator + currele;
//  },6);/// woriking of reduce syntax
// //  reduce take 4 argurment 
// // which is  accmulator, currentValue,  index, array and one initaliz value which is of  accmulator
// // now when we intiliz some thing or take above example
// //  when program run it first initializ value with  intitial vaule if passed then it wil be that or else defual  value as 0
// //  now accumlator will have  0  rt now after and  curele will have first element of Array whichis 5
// //  and then after first itration value 5 will be stored in accmulator which is 5  according to the expression 
// //  and then  again  same process  happen  again vaule  new vaule in accumlator will be  5  and next  curele is  6
// //   then after  excuting expression that value also get store in accmulator which is 12  according to the expression 
// //    then  new value is stored in  curele which is 7 and then  all happen again  and  new value is loaded in accumlator
// //     then it will return the value after completing all  excution 

//  hear  
//  //console.log(sum)


//  let sume= arr.map(item =>{ return item*2 }).filter( ele => {return ele > 8}).reduce((accumulator,item)=>{ return accumulator = accumulator + item });
//  console.log(sume)

// // how to flaten an array
//  const arr =[
//     ["name"],
//     ['hello'],
//     ["people"],
//     ["babes"],

//  ]

//  let new_flat_arr = arr.reduce((accum,ele)=>{ return accum.concat(ele)});
// console.log(new_flat_arr)



// *****Section 7 string in javascript ***/

// A javascirpt string is zero or more storing  and manipulating test
// you can use single or double quotes
// // string can be created as primitives
// // from string literal, or objects, using the sting() Constructor


// let myName = 'vinod Thapa';
// let myChannelName = 'vinod Thapa';
// let ytName = new String("vinod Thapa");
// console.log(myName);
// console.log(ytName);


// // //string method 

// // let my_name= "shivsagar"
// // console.log("lenght of  my name is ",my_name.length);

// // //escapte  Character 

// // let esc="my name is shivsagar \"shivsagar\""
// // console.log(esc)
// // // or to elemenat this sort of problem
// // let esc2 = 'my name is "shivsagar"'
// // //and
// // let esc3= "myname is 'shivsagar'"


// // //find a string in a string 

// // console.log(esc.indexOf("shivsagar",17));

// // let stringet= " this is test string  that im testing "
// // console.log(stringet.indexOf("testing"));
// // console.log(stringet.indexOf("that",20));
// // console.log(stringet[22,]);


// //  searhing for a stirng in stirng 
// //syntax sting_var_name.prototype.search(regexp);
// //search( )method searches a string  for  a specified
// //value  and return the position of the match 


// //const mybiodata = 'I am  the thapa Technical';


// // let my = " my name is shiv sagar"

// // console.log(my.search("shiv"))


// // the search method cannot take a second start postion argument


// // extracting string method 

// //  there are three differnt method to extract string 
// // slice(start,end)
// // substing(strat,end)
// // substr(start,length)


// // the slice() Method
// // slice extarct a pat of a string and returns the sextrated part

// // this method take two position starting postin and  the ending postion (inclued)
// // //
// // let my = " i have the applel but it got spoiled within a da"

// // console.log(my.slice(3,7))


// // let mytweet = "hii budy how could you be  ass hole"
// // let my =mytweet.slice(0,mytweet.length)
// // console.log(my)

// //substring method in java script
// // substing( is simeilar to slice)

// //  the difference is that subseting( ) cannot accept 
// //  negative indexes

// // var str = "Apple, Bannana,kiwi"
// //  let res = str.substring(5,-1);

// //  console.log(res)

// // sub str method is similar to the slicing
// // syntax  substr( star , lenght);

// //  if the star is the greate than the index then the substr return "" empty string;




// // there is one more interesting method which is for replaceing string from content
// //syntax sring.portotype.replace(searchFor,replaceWith)
// // replace take two argument  serching value and replacing value
// //

// // ???????????????????????????????????????????
// //  revision
//  const mybiodata = "I am the Thapa technical";
// //   console.log(mybiodata.indexOf("Thapa",5))
// // //  in indexof("stirng",starting position)


// // console.log(mybiodata.lastIndexOf("tech"))

// // //serarch()
// // console.log(mybiodata.search("thapa"))

// // //it can take only one argument
// // let arr= Array.from("shivsagar")
// // console.log(arr.slice(4,8))// it also works for an array

// // console.log(mybiodata.slice(0,4))
// // console.log(mybiodata.slice(4,-2))


// //replace() methood

// // let rep= mybiodata.replace('am',"AM");
// //  console.log(rep)// it only replae first ocrance of  that string and its is case senstive 


// //  how to enxtract string char

// // there are three method to acess charter 
// // Charat(postion)
// // charCodeAt(postion)
// // property access [ ]

// // charAt() method :- it return charcter from spesific index postion in a string
// // 
// // let mysh= "hello world"
// // console.log(mysh.charAt(0))
// // console.log(mysh.charAt(5))


// // //charcodeat() method : it  return utf-16 code (an integer btween 0 and  65535).

// // console.log(mysh.charCodeAt(0))


// //  ecma script
// // in new javascript updated in 2009 
// // let my = "hello world"
// // console.log(my[0]);// so in neew ecma script we can also access elemnet using new ecma script

// // let my_name = "shive sagar"
// // console.log(my_name.toUpperCase());
// // console.log(my_name.toLowerCase());


// //  string concatnation 
// //  string.


// // trim method  in string
// // let my_name = "    shivsagar "
// // console.log(my_name.trim())// it  help to remove space  from  sttaring and ending of the string


// //converting string into array
// // A string can be converted to an array with the split()
// // // 
// // var  str = " my name is the shiv"
// // //  var  st= Array.from(str);
// // // //  console.log(st)
// // // // console.log(str.split(" "));//split is use to split stiring from given  paramenter and then return an array

// // // // // [ '', 'my', 'name', 'is', 'the', 'shiv' ] // out put




// // // // //  date time objet in the  java script
// // // // : date methods ( get and set )
// // // // : time methods( get and set);


// // // // ++++ section 8  
// // // // javascript 8 date and tiem in javascript  
// // // //  platform  independet  formate .date  object contain a NUmber
// // // // That  represent  milliseconds since 1 jannvaery
// // // //  creating  date object model
// // // //  new Date();// this is the construtor of date object

// // // // new Date(year,month, day, hours, mintes, seconds ,milliseconds);
// // // // new Date(milliseconds);
// // // // new Date(date );

// // // // let cur = new Date()
// // // // console.log(cur)

// // // // let date = new Date()
// // // // console.log(date.toLocaleString());// it will give only n date and time 

// // // // console.log(date.toString());// but this will give whole date, time ,day , gmt

// // // let date= new Date();
// // // // console.log(Date.now())//The static Date.now() method returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC.
// // // //

// // // //new Date(year,month,...)
// // // //7 number speify year, month , day ,hour, min, second
// // // //and millisecond(in that  order)
// // // // note:javascript counts mounths from 0 to 11
// // // var d = new Date(2013,0,24,10,33,30,1)//if i explain this  its says  yearis 2018 ,month is jan which index is 0, date which is 24,then hour is 10, min 33, sec 30 , mili is 1;

// // // console.log(d.toLocaleString());

// // // // in this atleast u need to pass month and year in the argument in date object
// // // //new Date( date string)// creat new date using date string
// // //  var dt = new Date("October 13, 2021 11:13:00");

// // // console.log(dt.toLocaleDateString())

// // // let datem=  new Date(2000000000000)

// // //  console.log(datem.toString())
// //  // method of date

// // // let m_date=  new Date()
// // // console.log(m_date.toLocaleString);
// // // // get type method of date 
// // // console.log(m_date.getDate());
// // // console.log(m_date.getFullYear());
// // // console.log(m_date.getMonth());
// // // console.log(m_date.getDate());
// // // console.log(m_date.getDay());

// // // //set type funtion fo date
// // // console.log(m_date.setDate(2,3,2022).toString())
// // // console.log(m_date.setFullYear(2022))
// // // console.log(m_date.setHours(10,10,10))
// // // console.log(m_date.setMonth(10));


// // // let time = new Date();
// // // console.log(time.getTime());
// // // console.log(time.getHours());
// // // console.log(time.getMilliseconds());
// // // console.log(time.getTimezoneOffset());


// // // // set time set method
// // // // console.log(time.setTime());
// // // console.log(time.setHours(9));
// // // console.log(time.setMinutes(5));
// // // console.log((time.setSeconds(34)));


// // let date = new Date().toLocaleDateString();// if you want only date

// // let date_2=new Date().toLocaleTimeString();// if you want only time

// // let date_3 = new Date().toLocaleString();//if you want  both  tim and date

// // console.log(date)
// // console.log(date_2)



// // // math object in java script

// // // ++++section  9
// // // math class


// // // console.log(Math.PI)
// // // let num = 10.255;
// // // console.log(Math.round(num))// its round  it to its nearst inteager
// // // console.log(Math.pow(2,3))
// // // console.log(2**5)
// // // console.log(Math.sqrt(25));
// // // console.log(Math.sqrt(49));// this will give the sqrt root
// // // console.log(Math.abs(-9));//it will alway give positive of any no.
// // // console.log(Math.ceil(3.4));
// // // console.log(Math.floor(9.3));
// // // console.log(Math.min(34,3,43,4,11,23,23,10));
// // // console.log(Math.max(34,32,2,2,1,1,2,121212));
// // // // console.log(Math.floor(Math.randord()*10));// random value give value btween 0-1  whichis in point  so to find random no. b/w  1-10 we need to multi ply it by 10 and to get it int formate then we used floor method hear  we can even use floor
// // // // console.log(Math.trunc(3.4))// it will return only return intger part no.  mean it will not includ  no. after point
// // // console.log(Math.trunc(-555.90980));

// // +++ dom vs bom

//  //dom is the docoment object model which deal with  html document  element 
//  // bom is broweser object model it is use to nevigate browser  related component



// //
// // add event listner 
// //fortway.addEventListener('click',()=>{alert(''i love this way fo writing)})


// // what is event object 
// //mouse event




// // window object allows excution of code at specif  number 

// // const ste = ()=>{
// //         console.log("loding")
// //         clearTimeout(    setTimeout(()=>{
// //                 console.log("shivsagar")
// //         }

// //         ,1000))
// // }
// // var i=0;
// //  var   my = setInterval(() => {
       
// //         i++
// //         if(i<10){
// //                 ste()
// //         }
// //         else{
// //                 clearInterval(my)
// //         }
        
// // },1000);

// // console.log(my)


// // object  in java script

// //  object  litrle is simple  a key:value pair data structure
// // storing variavle and function together in one container
// // we can refer this as an objects
// // it help in storing  both array and object in vaiable 


// let biodata ={
//         myName:'thapatechnical',
//         myage : 25,
//         getData: function(){
//                 console.log(`my name is ${biodata.myName} and my age is ${biodata.myage}`);
//         }
//         ,
//         getData2(){

//                 console.log('myname is shivsagar')
//         },


// }
// console.log(biodata.getData(),biodata.getData2())

// //what is this obejct
// // defination this  its refer to current context and that is window global oject

// // // ex2
// function myname(){
//         console.log(this)// hear this key word referance  a  windo


// }

// var ob= {
//         getdata()
//         {
//                 console.log(this.name)
//         }
//         ,name:"shiv sagar"
// }

// ob.getdata()


// array destructuring is ES6

// the destruturnig assingment syntax is a java script expression 
// that makes it possibble to unpack value form arrays,
// //or properties form object , into distinct variable.

// // Array destructuring 

// const mydata=['shiv sagar','34','bca']
// // let myFname = mydata[0];
// // let myage = mydata[1];
// // let mydep = mydata[2];
// // now using array destructuring
// // let [myn,mya,myd] =mydata// in array desturction postion matter lots


// // we can also add vlaue 

// let [myn,mya,myd,my="hello"] =mydata
// console.log(my)

//same we can do in object 
//  const mydata={
//         myname:"shiv sagar",
//         myage:"34",
//         mydep:"bca",
//  }

//  // this is without desturcturting
// //  let myname = mydata.myage;
// //  let myage= mydata.myname;
// //  console.log(myage)

//  // with destructuring

//  let {myname,yourage,youlive}=mydata; // in case of object destructuring uneed  to to pute name of data same as key name in object
// console.log(yourage,myname)


// object propety
 

//dynamic properti
// let we can now use Dynamic  properties
// let myname ="data is shivsagar"
// const myBio ={
//         [myname]:'hello bro',
//         [20 + 6] : "is my age"

// }
// console.log(myBio)

// // no need to write key and value, if both are
// let myname = "shivsagar"
// let myAge = "20"
// let my= {
//         myname:myname,
//         myAge:myAge,


// }
// console.log(my)


// //using sprad oprestor


// let my =['hello ','hyy','shiv','byyy']
// let my2= ['hyy',...my,'hehh',"hladjkf"];
// console.log(my2)// sreard oprator used to add data in the middle  of any array  or in insid the array  it use (...) tripel dot to  denote and the name of the operator

// // using rest opreator


// var sum= function(a,b){
//  console.log(a+b) 

// }


// var sum_rest= function(...inputs){// rest  parameter is an improved way to handle  function parameter, allowing us to  more easily handle varios input as para meters in a funtion. The rest para menter syntax allows
//         console.log(inputs)// it take inpute inform of indefinate array 
//         var sum = 0
//         for (ele of inputs){
//          sum =sum + ele;


//         }
//         console.log(sum)
// }

// sum_rest(1,2,3,4,5,6);





///wahht is event propergation 
// its mean in which order  elemnet recive the order
// there are two phase in  event bubbling and captiring
//  

//  The  capture phase       The target phase          The bubble phase

//   goid from the widow      it is the target phase   from the event Target
//  the  event target                                   target parent back
//  pahase                                              to the window




//  whta is event bubblin
// whith event bubbling , the event id first capture and handled by the innermost element  and then propagated to outer element



//what is event captureing
//  with  Event capturing , the event is first captured by the outer most element  and propagated to the inner
// Element
//  capturing is also called 'trickling', which helps remember the propagation order 


// by defult its stae event bubbling



//  what is  hosting in javasciript
//  we have  creation  phaser and execution pahase 
//  hosting in javascript  is a mechnisum  where varinablel and function 
// declarton are move to the top of  their scope before the eode excution 
// for example 








// syncronous javascript
//  it folow the flow mean it will first  complet first code then it move the  the next line 
// its mean one ata time


//Asyncronus  javascript
//its  excute morthan two process  prallely
// it dos'nt wait for the program it move  to the next
// method for asyncronus 
//settimout()
// 

//currying
//function curring
//sum(6)(5)(6)// in this we are not passing three argument but we are insitaing three funtion

//sum(2,3,4)// in this we are passing three argument  both of these are  totali diffrent


// function  sum (num1){
//         console.log(num1)
//         return function (num2){
//                 console.log(num1,num2)
//                 return function (num3){
//                         console.log(num1,num2,num3)
//                 }
//         }

// }


// const sum = (num1)=>(num2)=>(num3)=> console.log(num1 + num2 + num3);
// sum(5)(1)(2)
//
//JSON is to communicate with server or shardata from one device to another
//json is also called as javascript object notaion 
var my_object = {key_1:"some text",key_2:true,key_3:5}
// json stroe data in string formate 
// we use jsno.stringfy(my_object);
// typeof(object_as_string);
//string

//jsno.parse turns a string of json text into object