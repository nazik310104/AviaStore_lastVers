import React, { useContext, useState } from "react";
import { storeContext } from "../../contexts/StoreContext";
import "./style.css";
import { notifySuccess } from "../../helpers/notifiers";
import { useHistory } from "react-router-dom";

function LoginPage(props) {
  const { email, setEmail, password, setPassword, users, handleAddUser } =
    useContext(storeContext);
  const history = useHistory();

  return (
    <>
      <h1>Sign In Form</h1>

      <div id="wrapper">
        <form
          id="signin"
          method=""
          action=""
          autocomplete="off"
          onSubmit={(e) => {
            e.preventDefault();
            handleAddUser(email, password);
            notifySuccess("Успешная регистрация!");
            history.push("/loginedAccount");
          }}
        >
          <input
            type="text"
            id="user"
            name="user"
            placeholder="username"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            id="pass"
            name="pass"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">&#xf0da;</button>
          <p>
            forgot your password? <a href="#">click here</a>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
