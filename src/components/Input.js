import React from 'react';
import './Input.css';

const Input = ({ inps, fn, rowType }) => {
  // handle input change
  const handleInputChange = (e, idx) => {
    const list = [...inps];
    list[idx] = e.target.value;
    fn(list);
  };

  //handle remove button
  const handleRemoveClick = (idx) => {
    const list = [...inps];
    list.splice(idx, 1);
    fn(list);
  };

  // handle add button
  const handleAddClick = (e) => {
    e.preventDefault();
    fn([...inps, '']);
  };
  return (
    <div className="row">
      <label htmlFor={rowType}>
        <p>{`${rowType}:`}</p>
      </label>
      {inps.map((inp, idx) => (
        <div className="input-row">
          <span>{idx + 1}.</span>
          <input
            className="recipe-input"
            type="text"
            name={`${rowType}-${idx}`}
            id={`${rowType}-${idx}`}
            value={inp}
            required
            onChange={(e) => handleInputChange(e, idx)}
          />
          <div className="btns">
            {inps.length !== 1 && (
              <button onClick={() => handleRemoveClick(idx)}>
                <p>&minus;</p>
              </button>
            )}
            {inps.length - 1 === idx && (
              <button onClick={handleAddClick}>
                <p>&#43;</p>
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Input;
