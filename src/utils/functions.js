import {
  getDatabase,
  push,
  set,
  ref,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase";
import Toastify from "./toastify";

// ADD
const AddUser = (info) => {
  const db = getDatabase(firebase);
  const userRef = ref(db, "user/");
  const newUserRef = push(userRef);

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  Toastify("Added Successfully")
};
export default AddUser;

//READ

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [contactList, setContactList] = useState();

  useEffect(() => {
    const db = getDatabase(firebase);
    const userRef = ref(db, "user/");

    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      //  console.log(userArray)
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);

  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  remove(ref(db, "user/" + id));
  Toastify("Deleted Successfully");
};

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  const updates = {};
  updates["user/" + info.id] = info;
Toastify("Updated Successfully")
  return update(ref(db), updates);
};
