(function () {
    
    const screen = document.getElementById('line-wrap');
    
    
    document.getElementById('calculator').addEventListener('click', function (btn) {
        if (btn.target.className === "btn") {
            switch (btn.target.id) {
                case 'equals': calculator.equals();
                    break;
                case 'ac': calculator.problemText = '';
                    break;
                case 'divide': calculator.input('/');
                    break;
                case 'multiply': calculator.input('*');
                    break;
                case 'add': calculator.input('+');
                    break;
                case 'subtract': calculator.input('-');
                    break;
                case 'del': calculator.backspace();
                    break;
                case 'decimal': calculator.input('.');
                    break;
                case 'no0': calculator.input('0');
                    break;
                case 'no1': calculator.input('1');
                    break;
                case 'no2': calculator.input('2');
                    break;
                case 'no3': calculator.input('3');
                    break;
                case 'no4': calculator.input('4');
                    break;
                case 'no5': calculator.input('5');
                    break;
                case 'no6': calculator.input('6');
                    break;
                case 'no7': calculator.input('7');
                    break;
                case 'no8': calculator.input('8');
                    break;
                case 'no9': calculator.input('9');
                    break;
            }
        }
    })

    
    document.addEventListener("keydown", function (key) {

        function KeyTo(id) {
            document.getElementById(id).click();
        }
        
        switch (key.keyCode) {
            case 96: KeyTo('no0');
                break;
            case 97: KeyTo('no1');
                break;
            case 98: KeyTo('no2');
                break;
            case 99: KeyTo('no3');
                break;
            case 100: KeyTo('no4');
                break;
            case 101: KeyTo('no5');
                break;
            case 102: KeyTo('no6');
                break;
            case 103: KeyTo('no7');
                break;
            case 104: KeyTo('no8');
                break;
            case 105: KeyTo('no9');
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
        input: function(key) {
            this.problemText += key;
            this.output();
        },
        problemText: '',
        result: function() {
            return eval(this.problemText);
        },
        equals: function () {
            if (this.result() !== undefined) {
                screen.insertAdjacentHTML('beforeend', '<p class="line">= ' + this.result() + '</p>');
                this.problemText = '';
            }
        },
        backspace: function() {
            this.problemText = this.problemText.slice(0, -1);
            this.output();
        },
        output: function() {
            screen.lastElementChild.innerHTML = this.problemText;
        }
    }

    
})();
