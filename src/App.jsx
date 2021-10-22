import React, { useState } from 'react';
import './App.scss';

function App() {
  const [expression, setExpression] = useState('');
  const [answer, setAnswer] = useState(0);

  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] === '=') {
      if (/[0-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    // eslint-disable-next-line no-eval
    setAnswer(eval(expression));
    setExpression((prev) => `${prev}=`);
  };

  const allClear = () => {
    setExpression('');
    setAnswer(0);
  };
  const clear = () => {
    setExpression((prev) => prev
      .split('')
      .slice(0, prev.length - 1)
      .join(''));
    setAnswer(0);
  };

  return (
    <div className="container">
      <div className="grid">
        <div className="dis">
          <input type="text" value={expression} placeholder="0" disabled />
          <div className="total">{answer}</div>
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={allClear}
          onKeyPress={allClear}
          className="padButton AC red"
        >
          AC
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={clear}
          onKeyPress={clear}
          className="padButton C red"
        >
          C
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('/')}
          onKeyPress={display}
          className="padButton div"
        >
          /
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('*')}
          onKeyPress={display}
          className="padButton times"
        >
          *
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('7')}
          onKeyPress={display}
          className="padButton seven dark-grey"
        >
          7
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('8')}
          onKeyPress={display}
          className="padButton eight dark-grey"
        >
          8
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('9')}
          onKeyPress={display}
          className="padButton nine dark-grey"
        >
          9
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('-')}
          onKeyPress={display}
          className="padButton minus"
        >
          -
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('4')}
          onKeyPress={display}
          className="padButton four dark-grey"
        >
          4
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('5')}
          onKeyPress={display}
          className="padButton five dark-grey"
        >
          5
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('6')}
          onKeyPress={display}
          className="padButton six dark-grey"
        >
          6
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('+')}
          onKeyPress={display}
          className="padButton plus"
        >
          +
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('1')}
          onKeyPress={display}
          className="padButton one dark-grey"
        >
          1
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('2')}
          onKeyPress={display}
          className="padButton two dark-grey"
        >
          2
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('3')}
          onKeyPress={display}
          className="padButton three dark-grey"
        >
          3
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={calculate}
          onKeyPress={calculate}
          className="padButton equal blue"
        >
          =
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('0')}
          onKeyPress={display}
          className="padButton zero dark-grey"
        >
          0
        </div>
        <div
          role="button"
          tabIndex="0"
          onClick={() => display('.')}
          onKeyPress={display}
          className="padButton dot dark-grey"
        >
          .
        </div>
      </div>
    </div>
  );
}

export default App;
