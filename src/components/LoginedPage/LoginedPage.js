import axios from "axios";
import { data } from "jquery";
import React, { useContext, useEffect } from "react";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";
function LoginedPage(props) {
  const { handlefetchInfo, lastUser } = useContext(storeContext);
  useEffect(() => {
    handlefetchInfo();
  }, []);

  return (
    <MainLayout>
      {" "}
      <h1>Hello, {lastUser.email}!</h1>
      <h2 style={{ textAlign: "center" }}>
        Now you can create your own tours, edit and delete them. Also, if you{" "}
        <br />
        click on the menu icon, you can see the tickets from the selected <br />
        airlines. In the search engine you can find the vouchers you need and{" "}
        <br />
        place an order for them.
      </h2>
    </MainLayout>
  );
}

export default LoginedPage;
