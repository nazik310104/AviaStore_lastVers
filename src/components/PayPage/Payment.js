import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { storeContext } from "../../contexts/StoreContext";
import classes from "./payment.module.css";
import { notifySuccess } from "../../helpers/notifiers";

export default function Payment() {
  useEffect(() => {
    getCart();
  }, []);
  const history = useHistory();
  const { getCart } = useContext(storeContext);

  return (
    <form
      action=""
      className={classes.uiform}
      onSubmit={(e) => {
        e.preventDefault();
        // setIsPaydedConst(true);
        history.push("/");
        notifySuccess("Успешно оплачено!");
      }}
    >
      <h3>Form of Payment </h3>
      <div className={classes.formrow}>
        <label>Card Number</label>
        <input type="text" id="email" required autocomplete="off" />
      </div>
      <div className={classes.formrow}>
        <input type="password" id="password" required autocomplete="off" />
        <label>Cardholder Name </label>
      </div>
      <div className={classes.formrow}>
        <input type="password" id="password" required autocomplete="off" />
        <label>Expiry date </label>
      </div>
      <div className={classes.formrow}>
        <input type="password" id="password" required autocomplete="off" />
        <label>Security Number </label>
      </div>
      <div className={classes.formrow}>
        <input type="text" placeholder="Card Number" />
      </div>
      <div className={classes.formrow}>
        <select>
          <option>Visa</option>
          <option>Master Card</option>
          <option>UnionPay</option>
          <option>American Express</option>
          <option>JCB</option>
        </select>
      </div>
      <input type="submit" value="Оплатить" />
    </form>
  );
}
