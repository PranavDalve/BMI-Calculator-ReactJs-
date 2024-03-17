import React, { useCallback, useState } from 'react'
import './bmi.css'

export default function BMI() {

  const[weight, setWeight] = useState();
  const[height, setHeight] = useState();
  const[bmi, setBmi] = useState('');
  const[msg, setMsg] = useState('');
  const[text, setText] = useState(""); 


  let calcBmi = (event) => {
    event.preventDefault();
    if(weight === 0 || height === 0){
        alert("Please enter valid weight and height");
    }

    else{
        let bmi = (weight/(height*height));
        setBmi(bmi);
        setText("Your BMI is: ")
    }

    //for msg

    if(weight > 0 && height > 0){
        if(bmi < 25){
            setMsg('You are under weight');
        }
        else if(bmi >= 25 && bmi < 30){
            setMsg("You are Healthy Weight");
        }
        else{
            setMsg("You are Over Weight");
        }
    }
  }

  let reload =() => {
    window.location.reload();
  }


  return (
    <div className='bmiCard'>
        <h1 className='myheading'>BMI Calculator</h1>
        <div className='mycard'>
      {/* <h1>Jai Sri Ram</h1> */}
        
        <form className='myform' onSubmit={calcBmi}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Weight (kg)</label>
                <br/>
                <input placeholder='Enter your weight' value={weight} onChange={(e) => setWeight(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Height (m)</label>
                <br />
                <input placeholder='Enter your height' value={height} onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <button type="submit" class="button1">Submit</button>
            <br />
            <button type="submit" class="button2" onClick={reload}>Reset</button>

            <p>{text} {bmi}</p>
            <p className='mymsg'>{msg}</p>
        </form>

        
        </div>
    </div>
  )
}
