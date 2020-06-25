import React, { useState } from 'react';

const Test = () => {
  const [values, setValues] = useState(['']);

  const createUI = () => {
    return values.map((el, i) => (
      <div key={i}>
        <input type="text" value={el || ''} onChange={handleChange} />
        <input type="button" value="remove" onClick={removeClick} />
      </div>
    ));
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const addClick = () => {
    setValues([...values, '']);
  };

  const removeClick = (i) => {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + values.join(', '));
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {createUI()}
      <input type="button" value="add more" onClick={addClick} />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Test;
