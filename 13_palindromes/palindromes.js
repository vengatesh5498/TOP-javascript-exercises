const palindromes = function (string) {

//declaring a constant variable to use as a net to filter within the function call
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const filteredString = string
    .toLowerCase()//converts all the alphabets to lower case
    .split('')//splits the strings to array so array methods can be used on a sting
    .filter((characters)=>alphanumerical.includes(characters))//filters all the entered characters with the alphanumerical constant variable that's been declared
    .join();//joins all the array alphabets/numbers to a string

//creating string reversal a.k.a palindrome
const reversedString = filteredString.split('').reverse().join('');
return filteredString === reversedString;//returns if the palindrome is true or false
};

// Do not edit below this line
module.exports = palindromes;
