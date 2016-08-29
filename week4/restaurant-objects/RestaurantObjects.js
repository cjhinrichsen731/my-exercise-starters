//--------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------PART 1---------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------




class menuItems{
constructor (name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree; 
    
    this.stringify = function(name, calories, vegan, glutenFree, citrusFree){
        if (this.vegan) {
            var veganString = "vegan friendly";
        } else {
            var veganString = "not vegan friendly";
        }
         if (this.glutenFree) {
            var glutenString = "gluten friendly";
        } else {
            var glutenString = "not gluten friendly"
        }
        if (this.citrusFree) {
            var citrusString = "citrus friendly";
        } else {
            var citrusString = "not citrus friendly"
        }
        
        console.log("This " + this.name + " food item has " + this.calories + " calories and is " + veganString + 
        " and " + glutenString + " and " + citrusString);
    }
}
};

var burger = new menuItems ("burger" , 340, false, false, true);
burger.stringify();
var pizzaSlice = new menuItems ("cheese", 129, false, false, true);
pizzaSlice.stringify();
var juicer = new menuItems ("lemons, 98, true, true, false");
juicer.stringify();













//------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------  PART II ----------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------------




class drink {
    constructor (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    
    console.log('The name of this drink is the ' + this.name + '.  It is ' +this.description + ', and it costs ' +this.price+ 
    ' dollars.  The ingredients are ' + this.ingredients[0] + ' and ' + this.ingredients[1]);
}

}
var drink0=new drink ('Bacon margaritta', 'illegal in 12 different countries', 8, ['raw bacon', 'gasoline'])
var drink1= new drink ('Sweaty Mexican Lumberjack', 'a drunken dare', 2, ['Habanero extract','Bathtub Gin'])
var drink2= new drink ('Whiskey Uppercut', 'going to be a really good time', 4, ['150 proof whiskey','knife fights'])




class plate {
constructor (name, description, price, ingredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    
    console.log('This plate is named ' + this.name + '.  It is ' +this.description + ', and it costs ' +this.price+ 
    ' dollars.  The plate is composed of ' + this.ingredients[0] +' , ' + this.ingredients[1] + ', and ' + this.ingredients[2])
}

}


var plate1= new plate ('The Cold King Buritto', 'not to be consumed sober', 12, ['marshmellows','pepperoni','sauerkraut.']);
var plate2= new plate ('The Guacamole Super-Dooper', 'probably safe', 9, ['guacamole','mayonnaise','ketchup.']);
var plate3= new plate ('The Crazy Creation', 'very dangerous', 15, ['possum','raccoon','whatever else was on the road.']);





class order {
    constructor (plate1) {
        this.plate1 = plate1;

        console.log('Your order is ' + this.plate1[0] +', ' + this.plate1[1] + ", and " + this.plate1[2] );
}
}

var order1 = new order (['The Cold King Burrito', 'The Guacamole Super-Dooper', 'The Sweaty Mexican Lumberjack'])





class menu {
    constructor (drink1, plate1) {
        this.drink1 = drink1
        this.plate1 = plate1
        
        console.log('Our drink menu for the evening is ' + this.drink1[0] + ', '+this.drink1[1], ', and ' + this.drink1[2] +  '.  Our food menu is ' + this.plate1[0] +', '+this.plate1[1]+', and ' +this.plate1[2])
        
    }
}

var menu1 = new menu (['The Bacon Margarita', 'The Sweaty Mexican Lumberjack', 'The Whiskey Uppercut'], ['The Cold King Burrito', 'The Guacamole Super-Dooper', 'The Crazy Creation'])




