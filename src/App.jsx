/* eslint-disable no-eval */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [answer, setAnswer] = useState('0');

  const display = (symbol) => {
    console.log('in display');
    let s = symbol;
    const maxLength = 20;
    if (answer.length > maxLength) {
      const prevAnswer = answer;
      setAnswer('DIGIT LIMIT MET');
      setTimeout(() => setAnswer(prevAnswer), 1000);
    } else {
      setAnswer((prev) => {
        if (/[-+*/]/.test(s) && /[-+*/]/.test(prev[prev.length - 1])) {
          let current;
          if (/[-]/.test(s)) {
            current = prev.slice().concat(s);
          } else {
            let count = 0;
            for (let i = 0; i < prev.length; i += 1) {
              if (Number.isNaN(+prev[i])) {
                count += 1;
              } else {
                count = 0;
              }
            }
            current = prev.slice(0, -count).concat(s);
          }
          setAnswer(current);
        } else {
          const last = `${prev}`.split(/[-+*/]/g).at(-1);
          if (!Number.isNaN(last) && /[.]/.test(last) && symbol === '.') {
            console.log('symbol = empty');
            s = '';
          }
          setAnswer((prev + s).replace(/^0/g, '').replace(/\.+/g, '.'));
        }
      });
    }
    // clear focus because of function firing 2x onKeyDown after onClick
    document.activeElement.blur();
  };

  const calculate = () => {
    try {
      setAnswer(eval(answer));
    } catch (error) {
      console.error(`Invalid expression: ${answer}`);
    }
    // clear focus because of function firing 2x onKeyDown after onClick
    document.activeElement.blur();
  };

  const clear = () => {
    setAnswer(0);

    // clear focus because of function firing 2x onKeyDown after onClick
    document.activeElement.blur();
  };

  const backspace = () => {
    setAnswer((prev) => `${prev}`.slice(0, -1));

    // clear focus because of function firing 2x onKeyDown after onClick
    document.activeElement.blur();
  };

  const handleKeyDown = (e) => {
    switch (e.keyCode) {
      case 48: // 0
      case 96: // num0
        display('0');
        break;
      case 49: // 1
      case 97: // num1
        display('1');
        break;
      case 50: // 2
      case 98: // num2
        display('2');
        break;
      case 51: // 3
      case 99: // num3
        display('3');
        break;
      case 52: // 4
      case 100: // num4
        display('4');
        break;
      case 53: // 5
      case 101: // num5
        display('5');
        break;
      case 54: // 6
      case 102: // num6
        display('6');
        break;
      case 55: // 7
      case 103: // num7
        display('7');
        break;
      case 56: // 8
      case 104: // num8
        display('8');
        break;
      case 57: // 9
      case 105: // num9
        display('9');
        break;
      case 106: // num*
        display('*');
        break;
      case 171: // +
      case 107: // num+
        display('+');
        break;
      case 173: // -
      case 109: // num-
        display('-');
        break;
      case 111: // num/
        display('/');
        break;
      case 190: // .
      case 188: // ,
      case 110: // num, decimal point
        display('.');
        break;
      case 13: // enter
        calculate();
        break;
      case 8: // backspace
        backspace();
        break;
      case 46: // delete
      case 67: // c
        clear();
        break;
      default:
      // do nothing
    }

    if (e.shiftKey) {
      console.log('shift pressed');
      switch (e.keyCode) {
        case 171: // shift + 171: *
          display('*');
          break;
        case 55: // shift + 55: /
          display('/');
          break;
        case 48: // shift + 48: =
          calculate();
          break;
        default:
        // do nothing
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="container">
      <div className="grid">
        <div className="display">
          <div id="display" className="answer">
            {answer}
          </div>
        </div>
        <div
          id="clear"
          role="button"
          tabIndex="0"
          onClick={clear}
          onKeyDown={handleKeyDown}
          className="padButton clear red button"
        >
          C
        </div>
        <div
          id="backspace"
          role="button"
          tabIndex="0"
          onClick={backspace}
          onKeyDown={handleKeyDown}
          className="padButton backspace red button"
        >
          <span id="backspace-icon">
            <FontAwesomeIcon icon={faBackspace} />
          </span>
        </div>
        <div
          id="divide"
          role="button"
          tabIndex="0"
          onClick={() => display('/')}
          onKeyDown={handleKeyDown}
          className="padButton divide green button"
        >
          /
        </div>
        <div
          id="multiply"
          role="button"
          tabIndex="0"
          onClick={() => display('*')}
          onKeyDown={handleKeyDown}
          className="padButton multiply green button"
        >
          *
        </div>
        <div
          id="seven"
          role="button"
          tabIndex="0"
          onClick={() => display('7')}
          onKeyDown={handleKeyDown}
          className="padButton seven dark-grey button"
        >
          7
        </div>
        <div
          id="eight"
          role="button"
          tabIndex="0"
          onClick={() => display('8')}
          onKeyDown={handleKeyDown}
          className="padButton eight dark-grey button"
        >
          8
        </div>
        <div
          id="nine"
          role="button"
          tabIndex="0"
          onClick={() => display('9')}
          onKeyDown={handleKeyDown}
          className="padButton nine dark-grey button"
        >
          9
        </div>
        <div
          id="subtract"
          role="button"
          tabIndex="0"
          onClick={() => display('-')}
          onKeyDown={handleKeyDown}
          className="padButton subtract green button"
        >
          -
        </div>
        <div
          id="four"
          role="button"
          tabIndex="0"
          onClick={() => display('4')}
          onKeyDown={handleKeyDown}
          className="padButton four dark-grey button"
        >
          4
        </div>
        <div
          id="five"
          role="button"
          tabIndex="0"
          onClick={() => display('5')}
          onKeyDown={handleKeyDown}
          className="padButton five dark-grey button"
        >
          5
        </div>
        <div
          id="six"
          role="button"
          tabIndex="0"
          onClick={() => display('6')}
          onKeyDown={handleKeyDown}
          className="padButton six dark-grey button"
        >
          6
        </div>
        <div
          id="add"
          role="button"
          tabIndex="0"
          onClick={() => display('+')}
          onKeyDown={handleKeyDown}
          className="padButton add green button"
        >
          +
        </div>
        <div
          id="one"
          role="button"
          tabIndex="0"
          onClick={() => display('1')}
          onKeyDown={handleKeyDown}
          className="padButton one dark-grey button"
        >
          1
        </div>
        <div
          id="two"
          role="button"
          tabIndex="0"
          onClick={() => display('2')}
          onKeyDown={handleKeyDown}
          className="padButton two dark-grey button"
        >
          2
        </div>
        <div
          id="three"
          role="button"
          tabIndex="0"
          onClick={() => display('3')}
          onKeyDown={handleKeyDown}
          className="padButton three dark-grey button"
        >
          3
        </div>
        <div
          id="equals"
          role="button"
          tabIndex="0"
          onClick={calculate}
          onKeyDown={handleKeyDown}
          className="padButton equals blue button"
        >
          =
        </div>
        <div
          id="zero"
          role="button"
          tabIndex="0"
          onClick={() => display('0')}
          onKeyDown={handleKeyDown}
          className="padButton zero dark-grey button"
        >
          0
        </div>
        <div
          id="decimal"
          role="button"
          tabIndex="0"
          onClick={() => display('.')}
          onKeyDown={handleKeyDown}
          className="padButton decimal dark-grey button"
        >
          .
        </div>
      </div>
    </div>
  );
}

export default App;
