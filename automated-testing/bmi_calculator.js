function bmiCalculator (weight, height){
    return (weight/(height**2))
}
function bmiResult(bmiCalculator){
    if(bmiCalculator < 18.5){
        console.log('Underweight')
    }else if (bmiCalculator == 18.5 || bmiCalculator<25){
        console.log('Normal')
    }else if (bmiCalculator == 25 || bmiCalculator<30){
        console.log('Overweight')
    }else{
        console.log('Very Overweight')
    }
};


module.exports = bmiCalculator
