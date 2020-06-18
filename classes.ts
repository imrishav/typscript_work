class Vehicles {
  drive(): void {
    console.log('drive....');
  }

  honK(): void {
    console.log('Beep....');
  }
}

class Car extends Vehicles {
  drive(): void {
    console.log('vroomm');
  }
}

const vehicle = new Vehicles();
const vehicle2 = new Car();
// vehicle2.

vehicle2.drive();
vehicle2.honK();
