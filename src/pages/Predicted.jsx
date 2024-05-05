import React from "react";
import { useState } from "react";
import Form from "./Form";
const Predicted = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform actions like sending form data to a server
    console.log("Form submitted:", { name, email, message });
  };
  
   const[ diabetes , setdiabetes] = useState(true);
   const[ heart , setheart] = useState(false);
   const[ park , setpark] = useState(false);
  return (
    <div  >
      <div>  
        <ul className="cursor-pointer">
           <li 
           onClick={()=>{
                setdiabetes(true);
                setheart(false);
                setpark(false);

           }} >Diabetes</li>
           <li   
           onClick={()=>{
            setdiabetes(false);
            setheart(true);
            setpark(false);

       }}>Heart Disease</li>
           <li  onClick={()=>{
                setdiabetes(false);
                setheart(false);
                setpark(true);

           }}
           >Parkinson</li>
          </ul>  </div>
      <div className={`${diabetes? "block":"hidden"}`} >
        <Form  
          name={"Diabetes"}
          arr={[
            "Number of Pregnancies",
            "Glucose Level",
            "Blood Pressure Value",
            "Skin Thickness Value",
            "Insulin Level",
            "BMI Value",
            "diabetes Value",
            "Age",
          ]}
        />
      </div>
      <div className={`${heart? "block":"hidden"}`} >
        <Form 
          name={"Heart Disease"}
          arr={[
            "Age",
            "Sex",
            "Chest Pain types",
            "Resting Blood Pressure",
            "Cholestrol level",
            "Fasting Bloood Sugar",
            "Resting ElectrocardioGraphic Results",
            "Maximum Heart Rate Achieved",
            "Exercise induces Angina",
            "ST depression induced by exrecise",
            "Slope of the peak exercise ST segment",
            "Major vessels colored by flouroscopy",
            "that:0 = normal; 1 = fixed defect; 2 = reversible defect",
          ]}
        />
      </div>
      <div className={`${park? "block":"hidden"}`}>
        <Form 
          name={"Parkinson"}
          arr={[
            "MDVP.Fo(Hz)",
            "MDVP.Fhi(Hz)",
            "MDVP.Fho(Hz)",
            "MDVP.Jitter(%)",
            "MDVP.Jitter(Abs)",
            "MDVP.RAP",
            "Jitter:DDP",
            "MDVP.Shimmer",
            "MDVP.Shimmer(db)",
            "Shimmer.APQ3",
            "Shimmer.APQ5",
            "MDVP.APQ",
            "Shimmer.DDA",
            "NHR",
            "HNR",
            "RPDE",
            "DFA",
            "spread1",
            "spread2",
            "D2",
            "PPE",
          ]}
        />
      </div>
    </div>
  );
};

export default Predicted;
