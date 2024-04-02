import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="main__hero__background">
        <div className="container">
          <img className="hero__forme" src="/img/hero-blank.svg" alt="" />
          <div className="hero__texts">
            Prêts à faire du tri dans vos placards ?
            <button>Commencer à vendre</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
