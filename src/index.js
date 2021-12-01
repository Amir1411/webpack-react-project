import './style/index.scss';
const person = {
    name: 'John',
}
const person1 = {
    ...person,
    age: 25
}
console.log(person);
console.log(person1);