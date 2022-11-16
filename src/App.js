import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import "./App.css";
import { useState } from "react";
import AddUser from "./utils/functions"

const initialValues={
  username:"",
  phoneNumber:"",
  gender:""
}

const App=()=>{
  const[info,setInfo]=useState(initialValues)

  const handleSubmit=(e)=>{
// console.log("App js handleSubmitted")
e.preventDefault();
if(info.id){
  console.log("update user")
}else{
AddUser(info)

}
  }

  return (<div className="App">
<FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit}/>
<Contacts/>

  </div>)
}

export default App;