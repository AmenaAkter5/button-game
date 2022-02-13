

function doubleOrTripleIt(IDnum) {
    const inputBox1 = document.getElementById('input-1');
    const inputBox2 = document.getElementById('input-2');
    const input1Value = inputBox1.value;
    if ('btn-' + IDnum == 'btn-1') {
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

