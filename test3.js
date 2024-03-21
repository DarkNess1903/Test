const members = [
    { name: 'a', money: 500},
    { name: 'b', money: 400},
    { name: 'c', money: 5200},
    { name: 'd', money: 1200},
];
const isMoney1000 = members.find((member) => {
    return member.money > 1000;
});

const member = members.map((element) => {return element.name});

function isNameMember(){
    console.log(isMoney1000.name);
    console.log(member);
}
isNameMember();