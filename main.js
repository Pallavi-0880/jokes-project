let clickBtn = document.querySelector(".btn");
let text = document.querySelector(".text")
clickBtn.addEventListener("click", () => {
    let url = "https://v2.jokeapi.dev/joke/Any"
    let fetchApi = fetch(url);
    console.log(fetchApi)
    fetchApi
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((jokes) => {
            if (jokes.type === "single") {
                text.innerHTML = jokes.joke
            }
            else {
                text.innerHTML = jokes.delivery + jokes.setup
            }
        }
        )

})