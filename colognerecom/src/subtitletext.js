import './App.css';

function Subtitletext() {
  return (
    <div className='subtitlecontainer'>
        <h1 className='subtitletext'
        style={{ marginTop: '-3px'}}
        >Powered by ChatGPT</h1>
        <h1 
        className='subtitletext'
        style={{ fontSize: '17px', marginTop: '-10px'}}
        >
          Type in a cologne, press ENTER to get its information
        </h1>
    </div>
  );
}

export default Subtitletext;