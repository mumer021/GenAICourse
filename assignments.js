/*task#2
var person="Harry"
console.log("Hello ",person," would you like to learn some python today?")*/
//task#3//
var person = "Harry potter";
var split_word = person.split;
var title_case= [];
for (var i = 0; i < split_word.length; i++) {
    title_case[i] = split_word[i].toUpperCase;
}
title_case.join();
console.log("Lowercase: ".concat(person.toLowerCase, "\nUppercase: ").concat(person.toUpperCase, "\nTitlecase: ").concat(title_case));
