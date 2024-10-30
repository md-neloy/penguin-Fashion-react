import { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import Womens from "./womens.jsx/Womens";
import Mens from "./mens.jsx/Mens";
import Footer from "./footer/Footer";

const Main = ({ togolpage }) => {
  const [womenjacket, setwomenjacket] = useState([]);
  const [menjacket, setmenjacket] = useState([]);
  useEffect(() => {
    fetch("women.json")
      .then((res) => res.json())
      .then((data) => setwomenjacket(data));
  }, []);
  useEffect(() => {
    fetch("men.json")
      .then((res) => res.json())
      .then((data) => setmenjacket(data));
  }, []);
  return (
    <div>
      <Banner />
      <Womens jackets={womenjacket} togolpage={togolpage} />
      <Mens jackets={menjacket} togolpage={togolpage} />
      <Footer />
    </div>
  );
};
export default Main;
