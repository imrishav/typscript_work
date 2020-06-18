interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const cruz = {
  name: 'cruz',
  year: 2015,
  broken: true,
  dasdL: false,
  picka: 'dada',
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`Broken : ${vehicle.broken}`);
};

printVehicle(cruz);
