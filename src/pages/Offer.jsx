import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Product from "../components/Product";

const Offer = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const requestAxios = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_OFFER_LINK}/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    requestAxios();
  }, [id]);
  return (
    <main>{isLoading ? <h1>Chargement...</h1> : <Product item={data} />}</main>
  );
};

export default Offer;
