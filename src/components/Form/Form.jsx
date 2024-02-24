import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';
import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSabmit = e => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form className={style.form} onSubmit={handleSabmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        value={input}
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        onChange={handleChange}
      />
    </form>
  );
};
