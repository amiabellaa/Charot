import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { Link } from 'react-router-dom';
import "./AddEdit.css";
import fireDb from "../firebase";
import { toast } from "react-toastify";
import { isValidName, isValidNumber } from "../utils";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, email, phone } = state;

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });
    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }
    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);
  
  
  const handleInputChange = (e) => {
  
    const { name, value, } = e.target;
    if (name === 'name') {
      if (!isValidName(value)) {
        return;
      }
    }
    if (name === 'phone') {
      if (!isValidNumber(value)) {
        return
      }
    }
    
      setState({ ...state, [name]: value });
    
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
// if(name.trim() === ""){
//   return(
// toast.error("Please provide value in each input field"))
// }
if(phone < 0){
  return(
toast.warning("Invalid Phone Number"))
}

    if (name.trim() ==="" || !name || !email || !phone) {
      toast.error("Please provide value in each input field");
    } else {
      if (!id) {
        fireDb.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
           toast.success("Contact Added Successfully");
          }
        });
      } else {
        fireDb.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Contact Updated Successfully");
          }
        });
      }

      setTimeout(() => history.push("/"), 100);
    }
  };
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
        // pattern="[A-Za-z]"
        // oninvalid="setCustomValidity('Enter your name.')"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email || ""}
          onChange={handleInputChange}
        />
        <label htmlFor="phone">Phone No.</label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Your Phone No. ..."
          value={phone || "" }
          onChange={handleInputChange}
        />
        <input type="submit" value={id ? "Update" : "Save"} />
      </form>
      <Link to="/">
                      <button className="btn btn-edit">Back</button>
                  </Link>
    </div>
  );
};

export default AddEdit;
