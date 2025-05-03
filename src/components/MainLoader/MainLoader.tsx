import css from "./MainLoader.module.css";

const MainLoader: React.FC = () => {
  return (
    <div className="container">
      <div className={css.center}>
        <img src="/images/ballons/baloons2.png" alt="Valbaloons Logo" />
        <p>ValBalloons</p>
      </div>
    </div>
  );
};

export default MainLoader;
