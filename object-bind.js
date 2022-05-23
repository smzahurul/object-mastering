// object use bind to borrow method from another object.

const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Ali',
    salary: 250000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    teaBill: function(amount) {
        console.log(this)
        this.salary = this.salary - amount;
        return this.salary;

    }
};
const businessPerson = {
    firstName: "Abdul",
    lastName: "Jabbir",
    salary: 25000
}
const vipPerson = {
    firstName: "Lamya",
    lastName: "Islam",
    salary: 20000
}

const businessChargeBill = normalPerson.teaBill.bind(businessPerson);
businessChargeBill(3000);
businessChargeBill(7000);
console.log(businessPerson.salary);
console.log(normalPerson.salary);

const vipChargeBill = normalPerson.teaBill.bind(vipPerson);
vipChargeBill(1000);
vipChargeBill(2000);
console.log(vipPerson.salary);
console.log(normalPerson.salary);