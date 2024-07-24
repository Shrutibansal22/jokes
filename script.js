//{/* <div id="joke" class="joke">Wait next joke is coming.....</div>
        //<button id="jokeBtn" class="btn">Next Joke</button> */}

// PROMISES
// contains then,then,then etc
// 2cond=>succ=>fail

// fetch(https://restcountries.com/v3/all)
// milega => sahi hai
// nahi milega => internet error.server error;

// fulfilled
// reject

//(90% promise is consumed na ki create)
// fetch()
// fulfilled
// reject
// ongoing(like ek saal ka kaam hai toh voh chal raha abhi abhi hamein nahi ki voh fulfill hoga ya reject)

//async await biggest feature of es8
//GET https://icanhazdadjoke.com/

const jokes=document.querySelector('#joke');
const jokeBtn=document.querySelector('#jokeBtn');

// //with the help of promises
// const generateJokes=()=>{
//     const setHeader={
//         headers:{
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com',setHeader)
//     .then((res) => res.json())
//     .then((data)=>{
//         jokes.innerHTML=data.joke;
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }

//now with the help of async await

// //agar normal function rehta
//function generateJokes(){}
// //so to convert it into async
// async function generateJokes(){}

const generateJokes= async ()=>{
    try{
    const setHeader={
        headers:{
            Accept : "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com',setHeader);
    const data= await res.json();
    jokes.innerHTML=data.joke;
}catch(error){
    console.log(`the error is ${error}`);
}

}


jokeBtn.addEventListener('click',generateJokes);
generateJokes();





