import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setCookieToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newsLetter, setNewsLetter] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setNewsLetter("");
      const response = await axios.post(
        `${import.meta.env.VITE_SIGNUP_LINK}`,
        {
          email,
          username,
          password,
          newsLetter,
        }
      );
      Cookies.set("token-vinted", response.data.token, { expires: 15 });
      setCookieToken(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <h2>S'inscrire</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          name="username"
          value={username}
          type="text"
          placeholder="Nom d'utilisateur"
        />
        <input
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
          name="email"
          type="email"
          placeholder="Adresse email"
        />
        <input
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
          name="password"
          type="password"
          placeholder="Mot de passe"
        />
        <input
          onChange={() => {
            setNewsLetter(!newsLetter);
          }}
          checked={newsLetter}
          type="checkbox"
          placeholder="Confirmation du mot de passe"
        />
        <input type="submit" value={"S'inscrire"} />
      </form>
      <a href="/login">Tu as déjà un compte ? Connecte toi !</a>
    </div>
  );
};

export default SignUp;
