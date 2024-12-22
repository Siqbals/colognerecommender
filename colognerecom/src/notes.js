import './App.css';
import sweet from './sweet.png'
import spicy from './spicy.png'
import gourmand from './gourmand.png'
import floral from './floral.png'


import Checkheadertext from './checkheadertext';

function Notes() {
  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Notes: "></Checkheadertext>
        <div className='imgscontainer'>
            <img src={sweet}className='imgs'></img>
            <img src={spicy}className='imgs'></img>
            <img src={gourmand} className='imgs'></img>
            <img src={floral} className='imgs'></img>
        </div>

    </div>
  );
}

export default Notes;
