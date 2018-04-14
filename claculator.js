    
    const last = document.getElementById('line-wrap');
    
(function () {
    
    let equation = '';

    function logger(key) {
        equation += key;
        last.lastElementChild.innerHTML = equation;
//        console.log(equation);
    }
    document.getElementById('calculator').addEventListener('click', function (btn) {
        if (btn.target.className === "btn") {
            switch (btn.target.id) {
                case 'equals':
                    console.log(eval(equation));
                    last.insertAdjacentHTML('beforeend', '<p class="line">= ' + eval(equation) + '</p>');
                    equation = '';
                    break;
                case 'ac':
                    equation = '';
                    break;
                case 'divide':
                    logger('/');
                    break;
                case 'multiply':
                    logger('*');
                    break;
                case 'add':
                    logger('+');
                    break;
                case 'subtract':
                    logger('-');
                    break;
                case 'del':
                    equation = equation.slice(0, -1);
                    last.lastElementChild.innerHTML = equation;
                    break;
                case 'decimal':
                    logger('.');
                    break;
                case 'no0':
                    logger('0');
                    break;
                case 'no1':
                    logger('1');
                    break;
                case 'no2':
                    logger('2');
                    break;
                case 'no3':
                    logger('3');
                    break;
                case 'no4':
                    logger('4');
                    break;
                case 'no5':
                    logger('5');
                    break;
                case 'no6':
                    logger('6');
                    break;
                case 'no7':
                    logger('7');
                    break;
                case 'no8':
                    logger('8');
                    break;
                case 'no9':
                    logger('9');
                    break;
            }
        }
    })

    document.addEventListener("keydown", function (key) {
        switch (key.keyCode) {
            case 96:
                document.getElementById('no0').click();
                break;
            case 97:
                document.getElementById('no1').click();
                break;
            case 98:
                document.getElementById('no2').click();
                break;
            case 99:
                document.getElementById('no3').click();
                break;
            case 100:
                document.getElementById('no4').click();
                break;
            case 101:
                document.getElementById('no5').click();
                break;
            case 102:
                document.getElementById('no6').click();
                break;
            case 103:
                document.getElementById('no7').click();
                break;
            case 104:
                document.getElementById('no8').click();
                break;
            case 105:
                document.getElementById('no9').click();
                break;
            // =====================================================
            case 8:
                document.getElementById('del').click();
                break;
            case 111:
                document.getElementById('divide').click();
                break;
            case 106:
                document.getElementById('multiply').click();
                break;
            case 109:
                document.getElementById('subtract').click();
                break;
            case 107:
                document.getElementById('add').click();
                break;
            case 110:
                document.getElementById('decimal').click();
                break;
            case 13:
                document.getElementById('equals').click();
                break;
        }
    })

})();



