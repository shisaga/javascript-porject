// const date = new Date();
// const  days= ["monday","tusday","wednesday","thursday","friday","saturday","Sunday"];
// console.log(date.toLocaleString())
// const  day =Number(date.getDay());
// console.log(day)

// console.log(days[day-1])

// const  date = new Date();
// console.log(date.getDate())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a = 5; 
// let b = 6; 
// let c = 7;

// let semi = (a+b+c )/2;

// let area = Math.sqrt(semi*(semi-a)*(semi - b)* (semi -c));

// console.log(Math.round(area))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let str = "w3school"
// let rev = Array.from(str);
// let newarr= rev.reverse();
// console.log(newarr);
// let arr =  newarr.reduce((acc, ele, index, arr)=>{
//     return  acc.concat(ele)
// })
// console.log(arr);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let  year= [2000,2001,2002,2003,2004,2005,2006,2007];
// let data = year.filter((ele)=>{
//     if(ele%400 === 0 || ele % 4 === 0){
//          return ele
//     }
   
// })

// // console.log(data)

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function check( a){
//     let date = new Date()
//     if(date.getDay())
    
// }

// let year = ()=>{
//     for(let i = 2014; i<= 2050; i++){
//         if(check(i))
//     }

// }\


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Write a JavaScript program where the program takes a random integer 
// between 1 to 10, the user is then prompted to input a guess number.
//  If the user input matches with guess number, the program will display a message 
// "Good Work" otherwise display a message "Not matched".
// function game(){
// let no = prompt("Enter any no. in b/w 1 to 10");
// let rand = Math.random()*10;
// if( no === rand){
//     alert("Good work");

// }
// else{
//     let value = confirm("NO. did'nt match want to try  agian you'r luck");
//     if(value == 1){
//         game();
//     }
//     else{
//         alert("Hello we don't need it")
//     }

// }
// }

// game()


///////////////////////////////////////////////////////////////////////////////////////

// Write a JavaScript program to calculate days left until next Christmas
//
//
// let date = new Date();
// let today = date.toLocaleDateString();
// // console.log(today)
// let check_year_month = date.getMonth();
// let check_month_date = date.getDate();
// // let d = 11 - (date.getMonth())
// if(check_year_month < 11 ){
//     let month_left = 11 - date.getMonth();
//     console.log(`${month_left - 1} and 24 days are left for next crishmas` );
// }
// if(check_year_month === 11){
//     if(check_month_date < 25){
//         console.log( 25 - check_month_date);
//     }
//     if(check_month_date ===  25){
//         console.log("happy crishmax");   
//     }
//     if(check_month_date > 25){
//         let day_left_in_month = ()=>{
//             let total_days= 31;
//             let left = total_days - check_month_date;
//             return left;
//         }
//          let next_cri_time = day_left_in_month + "days and 11 month and 25 days are left " ;
//         console.log(next_cri_time);
//     }  
// }
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//


// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

let tour = {name:"shiv",
            id:"200",
            class:"C"
            }

            

let letss=  tour.id 
letss=  {...tour}

console.log(letss)








