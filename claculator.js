(function () {
    
    const screen = document.getElementById('line-wrap');
    
    
    document.getElementById('calculator').addEventListener('click', function (btn) {
        if (btn.target.className === "btn") {
            switch (btn.target.id) {
                case 'equals': calculator.equals(calculator.result());
                    break;
                case 'clear': calculator.clear();
                    break;
                case 'divide': calculator.input('÷');
                    break;
                case 'multiply': calculator.input('×');
                    break;
                case 'add': calculator.input('+');
                    break;
                case 'subtract': calculator.input('-');
                    break;
                case 'del': calculator.backspace();
                    break;
                case 'decimal': calculator.input('.');
                    break;
                case 'zero': calculator.input('0');
                    break;
                case 'one': calculator.input('1');
                    break;
                case 'two': calculator.input('2');
                    break;
                case 'three': calculator.input('3');
                    break;
                case 'four': calculator.input('4');
                    break;
                case 'five': calculator.input('5');
                    break;
                case 'six': calculator.input('6');
                    break;
                case 'seven': calculator.input('7');
                    break;
                case 'eight': calculator.input('8');
                    break;
                case 'nine': calculator.input('9');
                    break;
            }
        }
    })

    
    document.addEventListener("keydown", function (key) {

        function KeyTo(id) {
            document.getElementById(id).click();
        }
        
        switch (key.keyCode) {
            case 96: KeyTo('zero');
                break;
            case 97: KeyTo('one');
                break;
            case 98: KeyTo('two');
                break;
            case 99: KeyTo('three');
                break;
            case 100: KeyTo('four');
                break;
            case 101: KeyTo('five');
                break;
            case 102: KeyTo('six');
                break;
            case 103: KeyTo('seven');
                break;
            case 104: KeyTo('eight');
                break;
            case 105: KeyTo('nine');
                break;
            // =====================================================
            case 8: KeyTo('del');
                break;
            case 111: KeyTo('divide');
                break;
            case 106: KeyTo('multiply');
                break;
            case 109: KeyTo('subtract');
                break;
            case 107: KeyTo('add');
                break;
            case 110: KeyTo('decimal');
                break;
            case 13: KeyTo('equals');
                break;
        }
    });
    
    
    const calculator = {
        problemText: '',
        tempResult: '',
        
        input: function(key) {
            if (key === '÷' || key === '-' || key === '+' || key === '×') {
                this.problemText += this.tempResult;
            }
            this.problemText += key;
            this.tempResult = '';
            this.output();
        },
        
        result: function() {
            return eval(this.problemText.replace(/×/g, '*').replace(/÷/g, '/'));
        },
        
        equals: function (result) {
            if (result !== undefined) {
                this.output(true, result);
                this.tempResult = result;
                this.problemText = '';
            }
        },
        
        backspace: function() {
            if (screen.lastElementChild.innerText.indexOf('=') === -1) {
                this.problemText = this.problemText.slice(0, -1);
                this.output();
            }
        },
        
        output: function(newLine = false, output) {
            if (newLine) {
                screen.insertAdjacentHTML('beforeend', '<p class="line">= ' + output + '</p>');
            } else if (screen.lastElementChild.innerText.indexOf('=') !== -1) {
                screen.insertAdjacentHTML('beforeend', '<p class="line">' + this.problemText + '</p>');
            } else {
                screen.lastElementChild.innerHTML = this.problemText;
            }
            
            if (screen.children.length > 3) {
                screen.children[0].remove();
            }
        },
        
        clear: function () {
            this.problemText =  '';
            this.tempResult = '';
            screen.innerHTML = '<p class="line">0</p>';
        }
    }

    
})();
