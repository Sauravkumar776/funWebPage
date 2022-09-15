import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "./orderTrackingCard.scss";

const OrderTrackingCard = () => {
  const [trackInput, setTrackInput] = useState("");

  const navigate = useNavigate();

  const handleTrackInput = (e) => {
      setTrackInput(e.target.value);
      console.log(trackInput);
  };

  const handleTrackingUpdates = (e) => {
        e.preventDefault();
        localStorage.setItem('referenceID',trackInput);
        navigate('/tracking-page');
  }

  return (
    <>
      <div className="containers">
        <div
          className="tracking-container"
          id="tracking-container"
          data-testid="tracking-container"
        >
          <h2 className="track-order-status-text">Track Your Order</h2>
          <div className="track-form-wrapper">
            <label
              className="radio-container"
              id="mobileRadio"
              for="phonenumber"
            >
              Mobile Number
              <input
                type="radio"
                name="radio"
                className="trackradio"
                value="phonenumber"
                placeholder="Mobile Number"
                defaultChecked
                id="phonenumber"
              />
              <span className="checkmark radiotextsty"></span>
            </label>
            <label className="radio-container" id="mobileRadio" for="waybillId">
              Tracking ID
              <input
                type="radio"
                name="radio"
                className="trackradio"
                value="waybillId"
                placeholder="Mobile Number"
                id="waybillId"
              />
              <span className="checkmark radiotextsty"></span>
            </label>
            <label className="radio-container" id="mobileRadio" for="orderId">
              OrderID/RefID
              <input
                type="radio"
                name="radio"
                className="trackradio"
                value="orderId"
                placeholder="Mobile Number"
                id="orderId"
              />
              <span className="checkmark radiotextsty"></span>
            </label>
            <label className="radio-container" id="mobileRadio" for="lrnumber">
              LTL Shipment (LRN)
              <input
                type="radio"
                name="radio"
                className="trackradio"
                value="lrnumber"
                placeholder="Mobile Number"
                id="lrnumber"
              />
              <span className="checkmark radiotextsty"></span>
            </label>
          </div>
          <div className="input-field-wrapper" id="mobileBx">
            <input
              type="text"
              className="track-input-field tracktext"
              id="track_text"
              placeholder="Order ID / Ref ID"
              // onkeypress="return AvoidSpace(event)"
              // onkeyup="return remove_err_msg()"
              onChange={handleTrackInput}
            />
            <button type="button" className="default-btn radius" id="radiusid" onClick={handleTrackingUpdates}>
              <div id="loader_div" className=""></div>Track
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderTrackingCard;
