import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Header = ({ cookieToken, setCookieToken }) => {
  return (
    <header className="container">
      <Link to="/">
        <div className="header__img-container">
          <img
            className="header-logo"
            src="/img/vinted-logo.png"
            alt="logo vinted"
          />
        </div>
      </Link>
      <div className="header__search-container">
        <FontAwesomeIcon
          className="search-input-icon"
          icon="fa-solid fa-magnifying-glass"
        />
        <input
          className="search-input"
          type="text"
          placeholder="Recherche des articles"
        />
      </div>
      {cookieToken ? (
        <Link to="/">
          <button
            onClick={() => {
              Cookies.remove("token-vinted");
              setCookieToken(null);
            }}
            className="header-button connexion-button"
          >
            Déconnexion
          </button>
        </Link>
      ) : (
        <div className="header__connexion">
          <Link to="/signup">
            <button className="header-button connexion-button">
              S'inscrire
            </button>
          </Link>
          <Link to="/login">
            <button className="header-button connexion-button">
              Se connecter
            </button>
          </Link>
        </div>
      )}
      <button className="header-button sell-your-items">
        Vends tes articles
      </button>
    </header>
  );
};

export default Header;
