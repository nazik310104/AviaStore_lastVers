import React, { useContext } from "react";
import LoginPage from "../../components/LogInPage/LoginPage";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";
import LoginedPage from "../../components/LoginedPage/LoginedPage.js";

import { useHistory } from "react-router-dom";

function AccountPage(props) {
  const { users } = useContext(storeContext);
  const history = useHistory();
  return (
    <MainLayout>
      {users.length !== 0 ? <LoginedPage /> : <LoginPage />}
    </MainLayout>
  );
}

export default AccountPage;
