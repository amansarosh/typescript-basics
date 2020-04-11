var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function hello() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'world';
    });
}
const person = {
    first: 'Aman',
    last: 'Sarosh'
};
const person1 = {
    first: 'Person1FN',
    last: 'Person1LN',
    fast: true
};
function pow(x, y) {
    return Math.pow(x, y);
}
console.log(pow(3, 3));
const arr = [];
arr.push(1);
