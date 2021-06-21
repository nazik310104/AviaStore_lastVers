import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { storeContext } from "../../contexts/StoreContext";
import classes from "./orderForm.module.css";
import { notifySuccess } from "../../helpers/notifiers";

function OrderForm(props) {
  const [ticketName, setTicketName] = useState("");
  const [duration, setDuration] = useState("");
  const [country, setCountry] = useState("");
  const [airline, setAirline] = useState("");
  const { fetchProducts, products, addProductToCart } =
    useContext(storeContext);
  useEffect(() => {
    fetchProducts();
  }, []);
  const history = useHistory();
  const handleSubmit = () => {
    products.forEach((product) => {
      if (
        product.title === ticketName &&
        product.duration === duration &&
        product.country === country
      ) {
        history.push(`/products/${product.id}`);
        addProductToCart(product);
        notifySuccess("Заказ успешно оформлен! Проверьте корзину.");
      }

      // history.push("/");
      // notifyError("Такой путевки нет!");
    });
  };
  return (
    <form className={classes.decor} onSubmit={handleSubmit}>
      <div className={classes.formleftdecoration}></div>
      <div className={classes.formrightdecoration}></div>
      <div className={classes.circle}></div>
      <div className={classes.forminner}>
        <h3>Форма заказа</h3>
        <input
          type="text"
          placeholder="Название путевки"
          onChange={(e) => {
            setTicketName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Длительность"
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Страна"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <label for="airline">Выберите авиакомпанию</label>
        <select
          id="airline"
          form="form"
          onChange={(e) => {
            setAirline(e.target.value);
          }}
        >
          <option>Turkish Airlines</option>
          <option>Air Bishkek</option>
          <option>Aeroflot</option>
          <option>Fly Dubai</option>
          <option>Qatar Airlines</option>
          <option>Air Manas</option>
        </select>

        <input type="submit" value="Найти и оформить" />
      </div>
    </form>
  );
}

export default OrderForm;
