const fibonacci = function(countArg) {
/* declaring a constant variable and creating a function
withinit with a parameter called "countArg" */

let count
if(typeof countArg!=='number'){
    /* typeof is an inbuilt JavaScript method that spits out what
    data type we are using in the variable */
    count=parseInt(countArg)
}
else{
    count=countArg
}

let oneStepBack=1;
let twoStepBack=0;

if (count<0) return "OOPS";
if (count==0) return 0;
/* the sliding window method is used here */

for (let i=2; i<=count; i++){
let current = twoStepBack+oneStepBack;
twoStepBack = oneStepBack;
oneStepBack = current;
}
return oneStepBack;
}
// Do not edit below this line
module.exports = fibonacci;
