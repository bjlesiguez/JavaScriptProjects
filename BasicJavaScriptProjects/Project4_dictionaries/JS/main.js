
function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"Shit-Shu",
        Age:3,
        Sound:"Bark!",
        Sound:"Meow",
    };
    delete Animal.Sound; //this removes the Sound KVP from the Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}


