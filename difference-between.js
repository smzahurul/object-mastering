//  difference between bind, call and apply

// object use bind to borrow method from another object.

const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Ali',
    salary: 250000,
    getFullName: function() {
        console.log(this.firstName, this.lastName);
    },
    teaBill: function(amount, tips, tax) {
        console.log(this)
        this.salary = this.salary - amount - tips - tax;
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

// normalPerson.teaBill.call(businessPerson, 2000, 100, 10);
// normalPerson.teaBill.call(businessPerson, 1000, 50, 5);
// console.log(businessPerson.salary);
// normalPerson.teaBill.call(vipPerson, 5000, 100, 50);
// normalPerson.teaBill.call(vipPerson, 5000, 100, 50);
// console.log(vipPerson.salary);
normalPerson.teaBill.apply(businessPerson, [1000, 200, 40]);
normalPerson.teaBill.apply(businessPerson, [2000, 200, 50]);
console.log(businessPerson.salary);