(function () {
    document.getElementById('calculator').addEventListener('click', function (btn) {
        if (btn.target.className === "btn") {
            switch (btn.target.id) {
                case 'equals':
                    console.log(eval(equation));
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
                case 'subtract':
                    logger('-');
                    break;
                case 'del':
                    equation = equation.slice(0, -1);
                    break;
                default:
                    logger(btn.target.innerHTML);
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

    let equation = '';

    function logger(key) {
        equation += key;
        console.log(equation);
    }
})();