import './App.css';
import Checkheadertext from './checkheadertext';

function Durations() {
  const durationStyle = {
    fontFamily: 'papyrus',
    fontSize: '40px',
    whiteSpace: 'nowrap' // Prevent text from wrapping inside spans
  };

  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Duration: "></Checkheadertext>
        <div className='imgscontainer'>
            <div className='imgs'>
                <span style={durationStyle} className='imgs'>1-2</span>
                <br></br>
                <span style={durationStyle} className='imgs'>2-4</span>
                <br></br>
                <span style={durationStyle} className='imgs'>6+</span>
            </div>
        </div>
    </div>
  );
}

export default Durations;