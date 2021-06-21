import React, { useContext, useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/";
import ProductsList from "../../components/ProductsList";
import ProductsPagination from "../../components/ProductsPagination";
import { storeContext } from "../../contexts/StoreContext";
import MainLayout from "../../Layouts/MainLayout";
import HeroImg from "../../assets/images/barselona.aspx";
import HeroImg2 from "../../assets/images/Colosseum-Rome.jpg";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import { Button } from "../../components/Button/Button";
import "../../components/HeroSection/HeroSection.css";
import LoginPage from "../../components/LogInPage/LoginPage";
import { Link, useHistory } from "react-router-dom";
import OrderForm from "../../components/OrderForm/OrderForm";
import Footer from "../../components/Footer/Footer";
export default function MainPage() {
  const { products, fetchProducts, total } = useContext(storeContext);
  const [page, setPage] = useState(1);
  const history = useHistory();

  useEffect(() => {
    fetchProducts(page - 1);
  }, [page]);

  const heroSlider = [
    { src: HeroImg, title: "hero", text: "Barselona" },
    { src: HeroImg2, title: "hero", text: "Rome" },
  ];

  return (
    <>
      <MainLayout>
        {/* <HeroSlider slider={heroSlider} /> */}
        <div className="hero-container">
          <video src="/videos/Wingshot_1.mp4" autoPlay loop muted />
          <h1>Путешествуй</h1>
          <p>Не жди!</p>
          <div className="hero-btns">
            <button
              onClick={() => {
                history.push("/account");
              }}
              style={{
                backgroundColor: "#fff",
                width: "250px",
                height: "60px",
                color: "#005a8d",
                borderRadius: "6px",
                fontSize: "20px",
                fontWeight: "bold",
                border: "none",
                boxShadow: "0px -1px 12px 5px rgba(0,0,0,0.57)",
              }}
            >
              Зарегистрироваться
            </button>
          </div>
        </div>
        {/* <HeroVideo /> */}
        <OrderForm />
        <ProductsList products={products} />
        <ProductsPagination
          setPage={setPage}
          page={page}
          count={Math.ceil(total / 3)}
        />
      </MainLayout>
      <Footer />
    </>
  );
}
