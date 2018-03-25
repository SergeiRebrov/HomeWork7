
var Car = {
constructor: function(name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
    return this;
   },
run: function() {
    console.log('On the road run'+ this.name);
   }
};


var car1, car2, car3, car4, car5;
car1 = Object.create(Car).constructor("Porsche", "911", "red");
car2 = Object.create(Car).constructor("Audi", "A6", "black");
car3 = Object.create(Car).constructor("VW", "Beetle", "yellow");
car4 = Object.create(Car).constructor("Opel", "Vectra", "blue");
car5 = Object.create(Car).constructor("VAZ", "2110", "green");












