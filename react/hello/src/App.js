 import React, { useEffect, useState } from 'react'
 
 const App = () => {
  const [first,update_first]= useState(0);// usestate willl alway return  2 vlaue    which creunt value and updte vlaue which is use to update our current value

  const decrementCount=()=>{
    return update_first(first -1)
  }
  const incrementCount=()=>{
    return update_first(first +1)
  }

 return (<>
 <button onClick={decrementCount}></button>
 <button>{first}</button>
 <button onClick={incrementCount}></button>
 </>); // you can only use hook  inside the funcitonal componet
 //alway stay at the top level we cant use  hook in if conditon and loop 

  
 }
 
 export default App
 


  // //hooks always stay at the top of the component
  // useEffect(()=>{
  //   console.log("useeffect insilize")
  // },[])//use effect will only  work when  page is loded  or  if we pass any array of that spcifec variable it will insilize every time when any chage or any effect been ocur in use state
  //  return (
   
  //    <div>
  //      <button onClick={()=>update_first('posts')}>posts</button>
  //      <button onClick={()=>update_first('update')}>Update</button>
  //      <button onClick={()=>update_first('hello')}>update</button>
  //      <h1>{first}</h1>
  //    </div>
     





























// import React ,{useState}from 'react';

// let count = 1
// function IncNum() {

//   count++;
  
 
// }
// function App() {

//   const [currnet, update_value] =useState(0);
//   function IncNum() {

//     count++;
//     update_value(count)

   
//   }
  

// //  use state is holding nothing inside it
// // still current value is undefine if i pass any argument like 5, inside it  then its current value be  5



// //usesate an funnction which return array of two item
// //[state_object or current_data , updated _data]

//   return (<>
//   <div id ="con">
//   <h1>
//       {currnet}
//     </h1>
//     <button onClick={IncNum}> click me</button>
//   </div>
 
//   </>);
// };

// // hook can only be called inside the body of the functional component

// export default App;
