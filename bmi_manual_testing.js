function computeBMI (weight, height){
    return (weight/(height**2))
}

function testBMI(){
    const result = computeBMI(70,1.71);
    const expected = 23.938989774631512;

    console.assert(
        result === expected,
        `The result ${result} doesn't match the expected value ${expected}`
    )
}

testBMI()