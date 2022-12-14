import FormComponent from "./components/form/FormComponent";
import Contacts from "./components/contacts/Contacts";
import "./App.css";
import { useState } from "react";
import AddUser from "./utils/functions";
import { UpdateUser } from "./utils/functions";
import { ToastContainer } from 'react-toastify';

const initialValues = {
  username: "",
  phoneNumber: "",
  gender: "",
};

const App = () => {
  const [info, setInfo] = useState(initialValues);
  const[isAdd,setIsAdd]=useState("ADD")

  const handleSubmit = (e) => {
    // console.log("App js handleSubmitted")
    e.preventDefault();
    if (info.id) {
      UpdateUser(info);
    } else {
      AddUser(info);
    }
    setInfo(initialValues);
    setIsAdd("ADD")
  };

  const editUser = (id, username, phoneNumber, gender) => {
    setIsAdd("UPDATE")
    setInfo({ id, username, phoneNumber, gender });
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit} isAdd={isAdd}
      />
      <Contacts editUser={editUser} />
      <ToastContainer/>
    </div>
  );
};

export default App;
