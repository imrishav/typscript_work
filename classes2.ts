class Departement {
  name: string;
  employee: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Departement) {
    console.log('Departemnt ', this.name);
  }

  addEmp(employee: string) {
    this.employee.push(employee);
  }

  printEmployee() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

const accounts = new Departement('Accounting');
console.log(accounts.describe());
