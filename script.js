let url = "https://official-joke-api.appspot.com/random_joke";
let jokes1 = document.querySelector(".joke");
let punchLine = document.querySelector(".punchline");


async function jokes(){
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);


    jokes1.innerHTML = data.setup;
    punchLine.innerHTML = data.punchline;
}

document.querySelector(".btn").onclick=()=>{
    jokes();
    // let div = document.createElement("button");
    // div.className = "btn2";
    // div.textContent = "why?";
    // document.body.append(div);
}


