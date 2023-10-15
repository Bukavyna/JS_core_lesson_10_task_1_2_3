"use strict";



//////////Завдання 10_1!
///Напишіть функцию arrCopy(arr), яка копією всі значення з переданого масиву і повертає новий масив не змінюючи оригінал arr.
/*
function arrCopy(arr) {
	return arr.slice();
}

const arr1 = arrCopy([1,2,3]);
console.log(JSON.stringify(arr1));
const arr2 = arrCopy([1, 2, 3, [10, 20]]);
console.log(JSON.stringify(arr2));
*/

//////////Завдання 10_2!!
//Напишіть функцію arrToString(arr), яка приймає масив arr з чисел і повертає вже масив з стрічками:

/*
function arrToString(arr) {
return  arr.map(String);
}
const arr1 = arrToString([1,2,3]);
console.log(arr1);
const arr2 = arrToString([10,200,3333]);
console.log((arr2));
*/

//////////Завдання 10_3!!!
//Напишіть функцію getLength(arr), яка приймає масив arr з стрічок і повертає новий масив з довжиною елементів тих стрічок:

/*
function getLength(arr) {
	return arr.map(abc => abc.length);
}
const arr1 = getLength([`Ivan`,`Pavlo`,`Ira`]);
console.log(arr1);
const arr2 = getLength([`Oleksiy`,`Andriana`]);
console.log(arr2);
*/

//////////Завдання 10_4!!!!
//Напишіть функцію removeDuplicates(arr), яка приймає масив arr з стрічок і повертає новий масив де виключені елементи, що повторюються з масиву arr(ігнорувати чутливість до регістру):

/*
function removeDuplicates(arr) {
	return [...new Set(arr)];
}

const arr1 = removeDuplicates([`html`,`css`,`html`,`js`]);
console.log(arr1);
const arr2 = removeDuplicates([`html`,`css`,`js`,`html`,`js`,`python`,`js`,`scss`])
console.log(arr2);
*/