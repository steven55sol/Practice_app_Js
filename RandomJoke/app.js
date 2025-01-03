const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector('#btn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = async function(){
    try {
        jokeContainer.classList.remove("fade");

        let data = await fetch(url);
        let result = await data.json();
        jokeContainer.textContent = `${result.joke}`;
    
        jokeContainer.classList.add("fade");   
    } catch (error) {
        console.log(`Status: ${error}`);
    }
  
}

btn.addEventListener('click', getJoke);
getJoke();