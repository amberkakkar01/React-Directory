import React, { useState } from "react";
import { Button, Paper, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import { createNewUser } from "../actions/userActions";
import { useDispatch } from "react-redux";


const FormComponent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onContactNumberChange = (e) => setContactNumber(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(createNewUser({ name, email, contactNumber}));
    handleReset();
    navigate('/');
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setContactNumber("");
  };

  return (
    <Paper
      style={{
        margin: "100px 500px 100px 500px",
        padding: "100px",
        display: "grid",
      }}
    >
      <h2>Enter Your Information</h2>
      <TextField
        value={name}
        label={"Name"}
        onChange={onNameChange}
        style={{
          margin: 10,
        }}
      />
      <TextField
        value={email}
        label={"Email Address"}
        onChange={onEmailChange}
        style={{
          margin: 10,
        }}
      />
      <TextField
        value={contactNumber}
        label={"Contact Number"}
        onChange={onContactNumberChange}
        style={{
          margin: 10,
        }}
      />

      <Button
        onClick={async (e) => await handleSubmit(e)}
        variant="contained"
        style={{
          margin: 10,
        }}
      >
          Submit
      </Button>

      <Button
        onClick={handleReset}
        style={{
          margin: 10,
        }}
        variant="contained"
        color="error"
      >
        Reset
      </Button>
    </Paper>
  );
};

export default FormComponent;
