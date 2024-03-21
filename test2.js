const members = [
    { name: 'a', money: 500},
    { name: 'b', money: 400},
    { name: 'c', money: 5200},
    { name: 'd', money: 1200},
];
const result = members.filter((member) => member.money > 450);
const name1 = result.map((element) => {return element.name});

console.log(name1);