import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUsers,deleteUser } from "../actions/userActions";



const TableComponent = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const deleteUserData = async (id) => {
      dispatch(deleteUser(id));
  };

  const deleteAllUsers = async () => {
    const usersIdarray = users.map((user) =>  user.id);
    usersIdarray.forEach((id) => dispatch(deleteUser(id)));
  };

  

  return (
    <>
      <Button
        color="error"
        variant="contained"
        onClick={async () => await deleteAllUsers()}
        style={{ marginTop: 100, marginLeft: 50 }}
      >
        DELETE ALL
      </Button>
      <Link to="/addUser" style={{ textDecoration: "none" }}>
        <Button
          color="success"
          variant="contained"
          style={{ marginTop: 100, marginLeft: 1000 }}
        >
          ADD USER
        </Button>
      </Link>
      <TableContainer
        sx={{ maxHeight: "300px" }}
        component={Paper}
        style={{ marginTop: 100 }}
      >
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Email Address</TableCell>
              <TableCell align="center">Contact Number</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.contactNumber}</TableCell>
                <TableCell align="center">
                  <Button
                    color="error"
                    onClick={async () => await deleteUserData(row.id)}
                  >
                    <FaTimes className="cross"></FaTimes>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default connect(null, { fetchUsers })(TableComponent);
// function connect(mapStateToProps, mapDispatchToProps,)
