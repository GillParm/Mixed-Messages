//Random message generator using arrays
const messageSet1 = ['banana', 'apple', 'pear', 'orange', 'lemon'];
const messageSet2 = ['cake', 'pie', 'muffin', 'tart', 'fruit', 'cookie'];

const messageGenerator = () =>{
    let x = messageSet1[Math.floor(Math.random()*5)];
    let y = messageSet2[Math.floor(Math.random()*6)];
    return console.log(`Knock Knock! Who's There?\n${x}.\n${x} who?\n${x} ${y}!`);
};
messageGenerator();
