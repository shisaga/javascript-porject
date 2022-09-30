//PROMISE//  will get   2 condition  promise wil be full fill or it will break
//   fecth  method will return  one Promise
// promise will be
//data milega
//ya nhi mile ga

//90% of time  we consume the promise

//async await es8 bigest feature
//

const jokes = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");


const genratejoke =async () => {
//     const setHeader = {
//         headers: {
//           Accept : "application/json",
//         }
        
//       };
//      fetch('https://icanhazdadjoke.com',setHeader).then( (res)=>res.json()).then((data)=> jokes.innerHTML= data.joke).catch(er=>console.log(er));
// }


   
   
const setHeader = {
  headers: {
    Accept: "application/json",
  },
};
    try {
      const response = await fetch("https://icanhazdadjoke.com", setHeader);
      const data = await response.json();
      jokes.innerHTML = data.joke;
    } catch (err) {
      console.log(err);
    }
   

// 


}

jokebtn.addEventListener("click", genratejoke);
genratejoke();
