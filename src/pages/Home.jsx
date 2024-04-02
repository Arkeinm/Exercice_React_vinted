import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const requestAxios = async () => {
      const response = await axios.get(`${import.meta.env.VITE_HOME_LINK}`);
      setData(response.data);
      setIsLoading(false);
    };
    requestAxios();
  }, []);
  return (
    <main>
      {isLoading ? (
        <h1>Chargement...</h1>
      ) : (
        <>
          <Hero />
          <Products data={data} />
        </>
      )}
    </main>
  );
};

export default Home;
