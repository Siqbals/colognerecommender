import './App.css';
import datenight from './datenight.png'
import everyday from './everyday.png'
import special from './special.png'
import nightout from './nightout.png'
import work from './work.png'
import gym from './gym.png'


import Checkheadertext from './checkheadertext';

function Occasions() {
  return (
    <div className='checkcontainer'>
        <Checkheadertext text="Occasions: "></Checkheadertext>
        <div className='imgscontainer'>
            <img src={datenight} className='imgs'></img>
            <img src={everyday} className='imgs'></img>
            <img src={special} className='imgs'></img>
            <img src={nightout} className='imgs'></img>
            <img src={work} className='imgs'></img>
            <img src={gym} className='imgs'></img>
        </div>

    </div>
  );
}

export default Occasions;
