(function () {
    const display = document.getElementById('display');
    document.getElementById('calculator').addEventListener('click', function (btn) {
        if (btn.target.className === "btn") {
            switch (btn.target.id) {
                case 'equals':
                    calculator.equals(calculator.result());
                    break;
                case 'clear':
                    calculator.clear();
                    break;
                case 'divide':
                    calculator.input('÷');
                    break;
                case 'multiply':
                    calculator.input('×');
                    break;
                case 'add':
                    calculator.input('+');
                    break;
                case 'subtract':
                    calculator.input('-');
                    break;
                case 'del':
                    calculator.backspace();
                    break;
                case 'decimal':
                    calculator.input('.');
                    break;
                case 'zero':
                    calculator.input('0');
                    break;
                case 'one':
                    calculator.input('1');
                    break;
                case 'two':
                    calculator.input('2');
                    break;
                case 'three':
                    calculator.input('3');
                    break;
                case 'four':
                    calculator.input('4');
                    break;
                case 'five':
                    calculator.input('5');
                    break;
                case 'six':
                    calculator.input('6');
                    break;
                case 'seven':
                    calculator.input('7');
                    break;
                case 'eight':
                    calculator.input('8');
                    break;
                case 'nine':
                    calculator.input('9');
                    break
            }
        }
    })
    document.addEventListener("keydown", function (key) {
        function KeyTo(id) {
            document.getElementById(id).click()
        }
        switch (key.keyCode) {
            case 96: case 48:
                KeyTo('zero');
                break;
            case 97: case 49:
                KeyTo('one');
                break;
            case 98: case 50:
                KeyTo('two');
                break;
            case 99: case 51:
                KeyTo('three');
                break;
            case 100: case 52:
                KeyTo('four');
                break;
            case 101: case 53:
                KeyTo('five');
                break;
            case 102: case 54:
                KeyTo('six');
                break;
            case 103: case 55:
                KeyTo('seven');
                break;
            case 104: case 56:
                KeyTo('eight');
                break;
            case 105: case 57:
                KeyTo('nine');
                break;
            case 8: case 46:
                KeyTo('del');
                break;
            case 111:
                KeyTo('divide');
                break;
            case 106:
                KeyTo('multiply');
                break;
            case 109:
                KeyTo('subtract');
                break;
            case 107:
                KeyTo('add');
                break;
            case 110:
                KeyTo('decimal');
                break;
            case 13:
                KeyTo('equals');
                break
        }
    });
    const calculator = {
        side: '',
        problemText: '',
        tempResult: '',
        input: function (key) {
            if (key === '÷' || key === '-' || key === '+' || key === '×') {
                if (this.side === '') {
                    if (/[-+×÷]$/.test(this.problemText)) {
                        this.problemText = this.problemText.slice(0, -1)
                    }
                    if (this.problemText === '') {
                        if (this.tempResult === '') {
                            return null;
                        } else {
                            this.problemText = this.tempResult;
                            this.tempResult = ''
                        }
                    }
                } else {
                    this.problemText += this.side;
                    this.side = ''
                }
                this.problemText += key
            } else if (key === '.') {
                this.tempResult = '';
                if (this.side === '' || this.side === '0') {
                    this.side = '0'
                }
                if (this.side.includes('.')) {
                    return null
                }
                this.side += key
            } else {
                this.tempResult = '';
                if (this.side === '0' && key === '0') {
                    return null
                }
                if (this.side === '0') {
                    this.side = ''
                }
                this.side += key
            }
            this.output(this.problemText + this.side)
        },
        result: function () {
            this.problemText += this.side;
            this.side = '';
            return eval(this.problemText.replace(/×/g, '*').replace(/÷/g, '/'))
        },
        equals: function (result) {
            if (result !== undefined) {
                if (result % 1 != 0) {
                    let resultStr = result.toString();
                    let decimals = resultStr.substring(resultStr.indexOf('.'));
                    if (decimals.length > 7) {
                        if (+decimals < .000001) {
                            result = Math.floor(result);
                        } else {
                            result = result.toFixed(6);
                        }
                    }
                }
                display.innerHTML = result;
                this.tempResult = result;
                this.problemText = ''
            }
        },
        backspace: function () {
            if (this.side.length > 0) {
                this.side = this.side.slice(0, -1);
                this.output(this.problemText + this.side)
            } else if (this.problemText.length > 0) {
                this.problemText = this.problemText.slice(0, -1);
                this.output(this.problemText)
            }
        },
        output: function () {
            display.innerHTML = this.problemText + this.side
        },
        clear: function () {
            this.side = '';
            this.problemText = '';
            this.tempResult = '';
            display.innerHTML = '0'
        }
    }
})()