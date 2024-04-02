import "./product.css";

const Product = ({ item }) => {
  return (
    <div className="offer-body">
      <article className="offer-container">
        <div className="offer__image">
          <img
            src={item.product_image.secure_url}
            alt={item.product_description}
          />
        </div>
        <div className="offer__informations">
          <div>
            <span className="informations__price">{item.product_price}€ </span>
            <ul className="informations__list">
              {item.product_details.map((detail) => {
                const keyName = Object.keys(detail);
                return (
                  <li key={keyName}>
                    <span>{keyName}</span>
                    <span>{detail[keyName]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="offer__content">
            <p className="content__name"></p>
            <p className="content__description"></p>
            <div className="content__avatar-username"></div>
          </div>
          <button>Acheter</button>
        </div>
      </article>
    </div>
  );
};

export default Product;
