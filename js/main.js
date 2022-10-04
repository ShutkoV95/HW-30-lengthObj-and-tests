//----------------function length(obj)----------------
/*
let student = {
    name: 'Kolya',
    age: 15,
    spotr: true,
};
 
length(student);

function length(obj) {
    for (let key in obj) {
        lengthObj = Object.keys(obj).length;
        return console.log(lengthObj);
    }
    return console.log(0);
}
*/

//----------------TESTS----------------

let tests = [];

console.log(tests, typeof tests);


while (true) {
    let choice = prompt('1. Ввод условий теста; 2. Пройти тест; 3. Выход.'); 
    if (choice == '1') {
        fillTestArr();
    } else if (choice == '2') {
        oneTest();
    } else if (choice == '3') {
        userExit();
        break;
    }
}

console.log(tests, typeof tests);


//-------function---------
function fillTestArr() {
    while (true) {
        let enterAgain = confirm('Еще вопрос?');
        if (!enterAgain) {
            break;
        }
        tests.push(createQuestion());
    }
}

function createQuestion() {
    let qstArr = [];
    qstArr.qst = prompt('Вопрос:');
    qstArr.answ = confirm('TRUE/FALSE');
    return qstArr;
}

function oneTest() {
    let correctAnswerCount = 0;
    for (let i = 0; i < tests.length; i++ ) {
        let qst = tests[i].qst + ' ?';
        let answ = tests[i].answ;
    
        let userAnsw = confirm(qst);
    
        if (answ == userAnsw) {
            console.log('Правильно');
            correctAnswerCount ++;
        } else {
            console.log('Неправильно');
        }
    }
    alert(`Результаты тестов: ${correctAnswerCount} / ${tests.length}`);
}

function userExit() {
    alert('Выход');
}
