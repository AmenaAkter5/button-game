

//    double or triple value is shown on the input-box-1
// =========================================================


// onclick attribute on the two button

// btn-1 : onclick="doubleIt()" [make function call from btn-1]

// fn - 1
function doubleIt() {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
    const double = inputValue * 2;

    inputBox.value = double;
}


// btn-2 : onclick="tripleIt()" [make function call from btn-2]

// fn - 2
function tripleIt() {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
    const triple = inputValue * 3;

    inputBox.value = triple;
}



// ====================





// onclick attribute on the two button - one function

// btn-1 : onclick="doubleIt(1)" [make function call from btn-1]
// btn-2 : onclick="tripleIt(2)" [make function call from btn-2]

// fn:
function doubleOrTripleIt(ID) {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
    if ('btn-' + ID == 'btn-1') {
        const double = inputValue * 2;
        inputBox.value = double;
    }
    else {
        const triple = inputValue * 3;
        inputBox.value = triple;
    }
}










// =========================



// event handler on button

// btn-1 : double

document.getElementById('btn-1').addEventListener('click', function () {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
    const double = inputValue * 2;

    inputBox.value = double;
})


// btn-2 : triple

document.getElementById('btn-2').addEventListener('click', function () {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
    const triple = inputValue * 3;

    inputBox.value = triple;
})






// =========================


// event handler on button [function call from event handler]

// fn:
function doubleOrTripleIt(ID) {
    const inputBox = document.getElementById('input-box');
    const inputValue = inputBox.value;
    if ('btn-' + ID == 'btn-1') {
        const double = inputValue * 2;
        inputBox.value = double;
    }
    else {
        const triple = inputValue * 3;
        inputBox.value = triple;
    }
}


// btn-1 : double 

document.getElementById('btn-1').addEventListener('click', function () {
    doubleOrTripleIt(1);
})

// btn-2 : triple

document.getElementById('btn-2').addEventListener('click', function () {
    doubleOrTripleIt(2);
})









//    double or triple value is shown on the input-box-2
// =========================================================



function doubleOrTripleIt(IDnum) {
    const inputBox1 = document.getElementById('input-1');
    const inputBox2 = document.getElementById('input-2');
    const input1Value = inputBox1.value;

    // error message
    // input value jeno 'number' hoy & inputvalue jeno '0' na hoy
    // (input1Value == 0) er bodole (input1Value == '') [etao use kora jabe]

    if (isNaN(input1Value) || input1Value == 0) {
        alert('Please enter a number');
        return;
    }
    else if ('btn-' + IDnum == 'btn-1') {
        const double = input1Value * 2;
        inputBox2.value = double;
    }
    else {
        const triple = input1Value * 3;
        inputBox2.value = triple;
    }
    // clear the field
    inputBox1.value = '';
}

// btn-1 : double 

document.getElementById('btn-1').addEventListener('click', function () {
    doubleOrTripleIt(1);
})

// btn-2 : triple

document.getElementById('btn-2').addEventListener('click', function () {
    doubleOrTripleIt(2);
})


// we can set onclick attribute on button and just call function




