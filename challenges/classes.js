// 1. Copy and paste your prototype in here and refactor into class syntax.

console.log("**************  CLASSES ****************");

class CuboidMakerClass{
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
      }
}

const cuboidClass = new CuboidMakerClass(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("***** Cuboid Volume *****");
console.log(cuboidClass.volume()); // 100

console.log("***** Cuboid Surface Area *****");
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
console.log("**************  CLASSES STRETCH ****************");

class CubeMaker extends CuboidMakerClass{
    constructor(length, width, height){
        super(length, width, height);
    }
}

const cube = new CubeMaker(7, 6, 4);

console.log("**** CUBE CHILD OBJECT *****");
console.log(cube);

console.log("***** Cube Volume *****");
console.log(cube.volume());

console.log("***** Cube Surface Area *****");
console.log(cube.surfaceArea());