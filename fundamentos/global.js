let a = 3;

global.b = 3;

this.c = 4563;
this.d = false;
this.e = 'Test';

//module.exports = { e: 456, f: false, g: 'teste'};

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//sem var, sem let - adição no objeto local - não fazer
abs = 3;
console.log(global.abs);

