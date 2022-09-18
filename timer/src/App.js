import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [seconds,setSeconds]=useState(0);
  const [minutes,setMinutes]=useState(0);
  const [change,setChange]=useState(true);
  var timer;
  useEffect(() => {
    setChange(false);

  timer=setInterval(() => {
    setChange(true);
  setSeconds(seconds+1);
  
  // from seconds to minutes
    if(seconds===59){
      setMinutes(minutes+1);
      
     
      setSeconds(0);
    }
   
  },1000)
 
  return () =>{     

    clearInterval(timer)};
  })
// Restart counter
  const restart=()=>{
      setSeconds(0);
      setMinutes(0);
  }
  
  const animation1 = change ? 'fold' : 'unfold';
  const animation2 = change ? 'fold' : 'unfold';
  return (
  
    <div>
  	<div className="timer">
    <div className='container'>
    <div className='timer-container'>
      <h1>Timer</h1>
      <h1>{minutes<10 ? "0"+minutes:minutes}:{seconds<10 ?"0"+seconds:seconds}</h1>

      <button onClick={restart}>Restart</button>

    </div>


    <div className={'flipCounter'}>
				<div className={'upperCard'}>
					<span>{seconds<10 ?"0"+seconds:seconds}</span>
				</div>
				<div className={'lowerCard'}>
					<span>{seconds<10 ?"0"+seconds:seconds}</span>
				</div>
				<div className={`flipCard first ${animation1}`}>
					<span>{seconds<10 ?"0"+seconds:seconds}</span>
				</div>
        <div className={`flipCard first ${animation2}`}>
					<span>{seconds<10 ?"0"+seconds:seconds}</span>
				</div>
			</div>


      
    </div>




    <div className={'flipCounter'}>
				<div className={'upperCard'}>
					<span>{minutes<10 ? "0"+minutes:minutes}</span>
				</div>
				<div className={'lowerCard'}>
					<span>{minutes<10 ? "0"+minutes:minutes}</span>
				</div>
				<div className={`flipCard first`}>
					<span>{minutes<10 ? "0"+minutes:minutes}</span>
				</div>
        <div className={`flipCard first `}>
					<span>{minutes<10 ? "0"+minutes:minutes}</span>
				</div>
			</div>

    </div>



    </div>
  );
}

export default App;
