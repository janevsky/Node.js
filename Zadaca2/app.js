//2. Da se iskoristat 5 array funkcii


// 1st
let buttons = ['space', 'ctrl', 'shift', 'alt'];

function firstArray() {

    console.log(Array.isArray(buttons));

};

firstArray();

// 2nd

function secondArray() {

    console.log(buttons.filter(button => button.length > 4));

};
secondArray();

// 3rd 

function thirdArray() {

    buttons.forEach(element => console.log(element));

};
thirdArray();

// 4th

function fourthArray() {

    buttons.sort();
    console.log(buttons);
}
fourthArray();

// 5th

function fifthArray() {

    buttons.push('tab');
    console.log(buttons);

};
fifthArray();