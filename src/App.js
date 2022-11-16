import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import "./App.css";
import { useState } from "react";

const initialValues={
  username:"",
  phoneNumber:"",
  gender:""
}

const App=()=>{
  const[info,setInfo]=useState(initialValues)

  const handleSubmit=()=>{

  }

  return (<div className="App">
<FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit}/>
<Contacts/>

  </div>)
}

export default App;