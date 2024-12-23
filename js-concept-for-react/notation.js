const person = {
  name: 'mojahid',
  age: 45,
  3: 'summer',
  profession: 'Doctor',
  address: 'Dhaka',
}
// dot notation
const prof1 = person.profession;
console.log(prof1);

// braket notation
const prof2 = person['profession'];
console.log(prof2);
const pName = 'profession';
const prof3 = person[pName];
console.log(prof2);