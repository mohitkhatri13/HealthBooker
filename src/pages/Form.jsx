import React from "react";
import { useState } from "react";
import axios from 'axios';
const Form = ({ name,arr}) => {
  
    const [formData, setFormData] = useState({
      Pregnancies: '',
      Glucose: '',
      BloodPressure: '',
      SkinThickness:'',
      Insulin:'',
      BMI:'',
      DiabetesPedigreeFunction:'',
      Age:''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("FormData:", formData);
        
        try {     
          const result  =  await axios.post('http://127.0.0.1:8000/predict', formData);
                
                // const responseData = JSON.parse(result.config.data);
                // console.log(responseData.glucose); // This will log '50'
                

            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form.');
        }
    };

  
  return (
    <div className=" flex flex-col items-center    m-10   ">
         <h1 className=" text-3xl font-semibold mb-15"> Enter your Details for {name} </h1>
          <form  onSubmit={handleSubmit} className=" flex flex-col items-center    m-10  ">

      {arr.map((item, ind) => (
         <div className="m-10" key={ind}>
          <label  className=" border-neutral-900 m-5 ">
            {item} 
            <input onChange={handleChange} 
            className="border border-black" 
            type="number" 
            name={item.toLowerCase().replace(/\s/g, "")}/>
          </label>
        </div>
      ))}
       <button className=" bg-white w-[100px] h-[30px] rounded-md"  >Submit</button>
       </form>
    </div>
  );
};

export default Form;