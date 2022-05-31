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



document.getElementById("demo1").innerHTML= "name:"+"  " +cinema.name
document.getElementById("demo2").innerHTML= "languaje:" +"  "+cinema.languajes
document.getElementById("demo3").innerHTML= "address:"+"  "+cinema.address

for(var i=0; i<cinema.movies.length; i++)
    document.write( "movie:"+"  "+cinema.movies[i].name +"</br>"+ "imdb:"+"  "+cinema.movies[i].imdb + "</br>")

// for(var i=0; i<cinema.movies.length; i++){
// document.getElementById("demo4").innerHTML=cinema.movies[i].name + cinema.movies[i].imdb}
