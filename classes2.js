var Departement = /** @class */ (function () {
    function Departement(n) {
        this.name = n;
    }
    Departement.prototype.describe = function () {
        console.log('Departemnt ', this.name);
    };
    return Departement;
}());
var accounts = new Departement('Accounting');
console.log(accounts.describe());
