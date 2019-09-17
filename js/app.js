(function() {
  const display = document.getElementById('display');
  // Close modal upon clicking the dark background
  document.querySelector('.modal__container').addEventListener('click', event => {
    if (event.target.className === 'modal__container') {
      document.getElementById('modal-toggle-input').click();
    }
  });

  const calculator = {
    // Add one side of the problem at a time to prevent more than one '.'
    side: '',
    problemText: '',
    tempResult: '',
    // eslint-disable-next-line consistent-return
    input(key) {
      if (key === '÷' || key === '-' || key === '+' || key === '×') {
        if (this.side === '') {
          // Change operation to the latest
          if (/[-+×÷]$/.test(this.problemText)) {
            if (!this.problemText.endsWith('-') && key === '-') {
              // DON't remove /[+×÷]/
            } else {
              do {
                this.problemText = this.problemText.slice(0, -1);
              } while (/[-+×÷]$/.test(this.problemText));
            }
          }
          if (this.problemText === '') {
            // Prevent starting with operation sign
            if (this.tempResult === '') {
              return null;
            }
            this.problemText = this.tempResult;
            this.tempResult = '';
          }
        } else {
          this.problemText += this.side;
          this.side = '';
        }
        this.problemText += key;
      } else if (key === '.') {
        this.tempResult = '';
        // Add '0' before '.' when starting with '.'
        if (this.side === '' || this.side === '0') {
          this.side = '0';
        }
        // Prevent more than one '.'
        if (this.side.includes('.')) {
          return null;
        }
        this.side += key;
      } else {
        this.tempResult = '';
        // Prevent starting with zeros
        if (this.side === '0' && key === '0') {
          return null;
        }
        if (this.side === '0') {
          this.side = '';
        }
        this.side += key;
      }
      this.output(this.problemText + this.side);
    },
    result() {
      // Evaluation of the problem string
      this.problemText += this.side;
      this.side = '';
      // eslint-disable-next-line no-eval
      return eval(this.problemText.replace(/×/g, '*').replace(/÷/g, '/'));
    },
    equals(result) {
      let rawResult = result;
      if (rawResult !== undefined) {
        // Check if result contains floats
        if (rawResult % 1 !== 0) {
          const resultStr = rawResult.toString();
          const decimals = resultStr.substring(resultStr.indexOf('.'));
          // Handle results with more than 6 decimals with one millionth precision
          if (decimals.length > 7) {
            if (+decimals < 0.000001) {
              rawResult = Math.floor(rawResult);
            } else {
              rawResult = rawResult.toFixed(6);
            }
          }
        }
        display.textContent = rawResult;
        this.tempResult = rawResult;
        this.problemText = '';
      }
    },
    backspace() {
      // Remove last character on screen
      if (this.side.length > 0) {
        this.side = this.side.slice(0, -1);
        this.output(this.problemText + this.side);
      } else if (this.problemText.length > 0) {
        this.problemText = this.problemText.slice(0, -1);
        this.output(this.problemText);
      }
    },
    output() {
      display.textContent = this.problemText + this.side;
    },
    clear() {
      this.side = '';
      this.problemText = '';
      this.tempResult = '';
      display.textContent = '0';
    },
  };

  // Listen to mouse clicks from screen calculator
  document.getElementById('calculator').addEventListener('click', function(btn) {
    if (btn.target.className === 'btn') {
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
          break;
        default:
        // do nothing
      }
    }
  });

  // Listen to keyboard strokes
  document.addEventListener('keydown', function(key) {
    function KeyTo(id) {
      document.getElementById(id).click();
    }
    // Filter number and operations keys
    switch (key.keyCode) {
      case 96:
      case 48:
        KeyTo('zero');
        break;
      case 97:
      case 49:
        KeyTo('one');
        break;
      case 98:
      case 50:
        KeyTo('two');
        break;
      case 99:
      case 51:
        KeyTo('three');
        break;
      case 100:
      case 52:
        KeyTo('four');
        break;
      case 101:
      case 53:
        KeyTo('five');
        break;
      case 102:
      case 54:
        KeyTo('six');
        break;
      case 103:
      case 55:
        KeyTo('seven');
        break;
      case 104:
      case 56:
        KeyTo('eight');
        break;
      case 105:
      case 57:
        KeyTo('nine');
        break;
      case 8:
      case 46:
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
        break;
      default:
      // do nothing
    }
  });
})();
