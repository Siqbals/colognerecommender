import './App.css';

function Textbox({ onInputChange }) {
  const handleChange = (event) => {
    if (onInputChange) {
      onInputChange(event.target.value); // Pass the input value to the parent
    }
  };

  return (
    <div>
      <input 
        className="textbox"
        type="text"
        id="textbox"
        onChange={handleChange}
      />
    </div>
  );
}

export default Textbox;
