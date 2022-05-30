var cinema={
    name:"Grand Teatret",
    languajes:["english", "spanish"],
    address:"Copenhagen",
    movies:[
        {
            name:"todo sobre mi madre",
            imdb:7.8,
        },

        {
            name:"volver",
            imdb:7.6
        },
        {
            name:"matchpoint",
            imdb:7.6
        }

    ]
}

let text=""
for (var i =0; i<cinema.length; i++){
    text=cinema[i] + "<br>";
}
document.getElementById("demo").innerHTML=text