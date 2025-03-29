let x = {
    firstName:"Duc",
    lastName: "Hoang",
    occho : "khong",
    khongoc:"khong 2",
    get fullName() {
        return `${this.occho} ${this.khongoc}`;
    },
   set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
   }

};
console.log(x.fullName);
x.fullName = "nhu con cac";
console.log(x.occho);
console.log(x.khongoc);