prompt("Hello")

var cat = {
"legs": 3,
"name": "Harmony",
"color": "Tortoiseshell"
};
console.log(cat.legs)

var myPerson = {                                                                         
    "name" : "Lindo",
    "age": 21,
    "favoriteColor": "blue",

};

console.log(myPerson.favoriteColor);

var family = [
    {
        "relation":"mom",
        "name" :"Busi",
        "age":45
    },
    {
    "relation":"sister",
    "name" :"Mbali",
    "age":35
},
{
    "relation":"brother",
    "name" :"Thami",
    "age":37
},
{
    "relation":"dad",
    "name" :"Donald",
    "age":55
}

];

var myWholeFamily = [
    {
    "relation":"bestfriend",
    "name" :"Katlego",
    "age":30
}
]
var everyone = family.concat(myWholeFamily)
console.log(everyone)


var movies = {
"Finding Nemo": {
releaseDate: 2003,
duration: 100,
actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
format: "DVD"
},
"Star Wars: Episode VI - Return of the Jedi": {
releaseDate: 1983,
duration: 134,
actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
format: "DVD"
},
"Harry Potter and the Goblet of Fire": {
releaseDate: 2005,
duration: 157,
actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
format: "Blu-ray"
}
};
console.log(movies)