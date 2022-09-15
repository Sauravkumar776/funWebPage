import React from "react";
import axios from "axios";

const ProductRow = ({ order, index }) => {
  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:8000/Products/${id}`, {
        headers: {
          Authorization: "Bearer my token goes here",
        },
      })
      .then((response) => console.log(response));
  };
  return (
    <tr>
      <td>{order.id}</td>
      <td>{order.name}</td>
      <td>{order.price}</td>
      <td>{order.location}</td>
      <td>
        {" "}
        <button onClick={handleDeleteUser(index)}>Edit</button>{" "}
        <button onClick={handleDeleteUser(index)}>Delete</button>{" "}
      </td>
    </tr>
  );
};

export default ProductRow;
