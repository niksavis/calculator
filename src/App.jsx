/* eslint-disable no-eval */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-console */
import React, { useState } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackspace } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState(0);

  const display = (symbol) => {
    let s = symbol;
    setExpression((prev) => {
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
        setExpression(current);
      } else {
        const last = `${prev}`.split(/[-+*/]/g).at(-1);
        if (!Number.isNaN(last) && /[.]/.test(last) && symbol === '.') {
          console.log('symbol = empty');
          s = '';
        }

        setExpression((prev + s).replace(/^0/g, '').replace(/\.+/g, '.'));
      }
    });

    setAnswer((prev) => (prev + s).replace(/^0/g, '').replace(/\.+/g, '.'));
  };

  const calculate = () => {
    try {
      const result = eval(expression);
      setAnswer(result);
      setExpression(result);
    } catch (error) {
      console.error(`Invalid expression: ${expression}`);
    }
  };

  const clear = () => {
    setExpression('');
    setAnswer(0);
  };
  const backspace = () => {
    setExpression((prev) => `${prev}`.slice(0, -1));
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="display">
          <div id="expression" className="expression">
            {expression}
          </div>
          <div id="display" className="answer">
            {answer}
          </div>
        </div>
        <div
          id="clear"
          role="button"
          tabIndex="0"
          onClick={clear}
          onKeyPress={clear}
          className="padButton clear red button"
        >
          C
        </div>
        <div
          id="backspace"
          role="button"
          tabIndex="0"
          onClick={backspace}
          onKeyPress={backspace}
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
          onKeyPress={display}
          className="padButton divide green button"
        >
          /
        </div>
        <div
          id="multiply"
          role="button"
          tabIndex="0"
          onClick={() => display('*')}
          onKeyPress={display}
          className="padButton multiply green button"
        >
          *
        </div>
        <div
          id="seven"
          role="button"
          tabIndex="0"
          onClick={() => display('7')}
          onKeyPress={display}
          className="padButton seven dark-grey button"
        >
          7
        </div>
        <div
          id="eight"
          role="button"
          tabIndex="0"
          onClick={() => display('8')}
          onKeyPress={display}
          className="padButton eight dark-grey button"
        >
          8
        </div>
        <div
          id="nine"
          role="button"
          tabIndex="0"
          onClick={() => display('9')}
          onKeyPress={display}
          className="padButton nine dark-grey button"
        >
          9
        </div>
        <div
          id="subtract"
          role="button"
          tabIndex="0"
          onClick={() => display('-')}
          onKeyPress={display}
          className="padButton subtract green button"
        >
          -
        </div>
        <div
          id="four"
          role="button"
          tabIndex="0"
          onClick={() => display('4')}
          onKeyPress={display}
          className="padButton four dark-grey button"
        >
          4
        </div>
        <div
          id="five"
          role="button"
          tabIndex="0"
          onClick={() => display('5')}
          onKeyPress={display}
          className="padButton five dark-grey button"
        >
          5
        </div>
        <div
          id="six"
          role="button"
          tabIndex="0"
          onClick={() => display('6')}
          onKeyPress={display}
          className="padButton six dark-grey button"
        >
          6
        </div>
        <div
          id="add"
          role="button"
          tabIndex="0"
          onClick={() => display('+')}
          onKeyPress={display}
          className="padButton add green button"
        >
          +
        </div>
        <div
          id="one"
          role="button"
          tabIndex="0"
          onClick={() => display('1')}
          onKeyPress={display}
          className="padButton one dark-grey button"
        >
          1
        </div>
        <div
          id="two"
          role="button"
          tabIndex="0"
          onClick={() => display('2')}
          onKeyPress={display}
          className="padButton two dark-grey button"
        >
          2
        </div>
        <div
          id="three"
          role="button"
          tabIndex="0"
          onClick={() => display('3')}
          onKeyPress={display}
          className="padButton three dark-grey button"
        >
          3
        </div>
        <div
          id="equals"
          role="button"
          tabIndex="0"
          onClick={calculate}
          onKeyPress={calculate}
          className="padButton equals blue button"
        >
          =
        </div>
        <div
          id="zero"
          role="button"
          tabIndex="0"
          onClick={() => display('0')}
          onKeyPress={display}
          className="padButton zero dark-grey button"
        >
          0
        </div>
        <div
          id="decimal"
          role="button"
          tabIndex="0"
          onClick={() => display('.')}
          onKeyPress={display}
          className="padButton decimal dark-grey button"
        >
          .
        </div>
      </div>
    </div>
  );
}

export default App;
