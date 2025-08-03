const checkParity = num => {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        console.log(`${num} not is number`);
        return;
    }
    if (num % 2 === 0) {
        console.log(`${num} is an even number`);
    } else {
        console.log(`${num} is odd`);
    }
};

checkParity("a");
checkParity(10);
checkParity(7);
