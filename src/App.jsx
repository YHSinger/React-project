import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.scss";
import Navbar from "./components/navbar/navbar.component";
import CreateBizCardPage from "./pages/createBizCard/CreateBizCard.page";
import DashboardPage from "./pages/dashboard/dashboard.page";
// import TkUseEffectsPage from "./pages/tkUseEffects/tkUseEffects.page";
// import FirstAjaxPage from "./pages/firstAjax/firstAjaxPage";
// import TestComponent from "./components/Test.component";
import LoginPage from "./pages/login/Login.page";
// import ReduxCounterPage from "./pages/TK_redux_counter/reduxCounter.page";
// import ReduxCounterDisplayPage from "./pages/TK_redux_counter/reduxCounterDisplay.page";
import RegisterPage from "./pages/register/Register.page";
import HomePage from "./pages/homepage/home.page";
import NotFoundPage from "./pages/nofoundpage/notfound.page";
import LogoutPage from "./pages/logout/logout.page";
import QueryParamsPage from "./pages/QueryParams/queryParams.page";
import AuthGuardRoute from "./components/AuthGuardRoute";
import useAfterLogin from "./hooks/useAfterLogin";
import AmazonItemsContainerComponent from "./components/amazonItemsContainer/amazonItemsContainer.component";
import ContactUsPage from "./pages/contactUs/contactus.page";
import AnimalsPage from "./pages/animals/animals.page";
import Footer from "./components/Footer/footer.component";
// import ProductsPage from "./pages/products/Products.page";
// import UsersPage from "./pages/users/Users.page";
// import DefenetlyRealAmazonPage from "./pages/defenetlyRealAmazon/defenetlyRealAmazon.page";

function App() {
  const afterLogin = useAfterLogin();

  useEffect(() => {
    axios
      .post("/auth/loginbytoken")
      .then((res) => {
        console.log("res", res);
        const token = localStorage.getItem("token");
        afterLogin(token);
      })
      .catch((err) => {});
  });

  return (
    <div className="container">
      <Navbar />
      <ToastContainer />
      <Footer />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <AuthGuardRoute
          path="/dashboard"
          component={DashboardPage}
        ></AuthGuardRoute>
        <AuthGuardRoute
          path="/createbizcard"
          component={CreateBizCardPage}
        ></AuthGuardRoute>
        <Route path="/logout">
          <LogoutPage />
        </Route>
        <Route path="/qparams">
          <QueryParamsPage />
        </Route>
        <Route path="/aic">
          <AmazonItemsContainerComponent />
        </Route>
        <Route path="/contactus">
          <ContactUsPage />
        </Route>
        <Route path="/animals">
          <AnimalsPage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
