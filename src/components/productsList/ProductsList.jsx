import React from "react";
import axios from "axios";
import ProductRow from "../productrow/ProductRow";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/Products")
      .then((response) => {
        this.setState({ orders: response.data });
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText);
        console.log(response.headers);
        console.log(response.config);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((order, index) => (
              <ProductRow order={order} key={index} />
                )
            )}
          </tbody>
        </table>
      </>
    );
  }
}
export default ProductList;
