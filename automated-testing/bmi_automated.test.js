const bmiCalculator = require("./bmi_calculator");

test("Check if 100/(2^2) equals to 25", ()=>{
    expect(bmiCalculator(100,2)).toEqual(25);
});




