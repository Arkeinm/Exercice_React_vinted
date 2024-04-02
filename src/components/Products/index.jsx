import "./products.css";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  return (
    <div className="main__products">
      {data.map((item) => {
        return (
          <article key={item._id} className="product-container">
            <div className="product__username">
              {item.owner.account.avatar && (
                <img
                  src={item.owner.account.avatar.secure_url}
                  alt={item.owner.account.username}
                />
              )}
              <span>{item.owner.account.username} </span>
            </div>
            <Link key={item._id} to={`/offers/${item._id}`}>
              <div className="product__informations">
                <img src={item.product_image.secure_url} alt="product" />
                <div className="product__details">
                  <span>{item.product_price}€</span>
                  <span>{item.product_details[1].TAILLE}</span>
                  <span>{item.product_details[0].MARQUE}</span>
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Products;
