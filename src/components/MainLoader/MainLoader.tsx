import css from "./MainLoader.module.css";

const ballons = [
  "/images/ballons/1.png",
  "/images/ballons/2.png",
  "/images/ballons/3.png",
  "/images/ballons/4.png",
  "/images/ballons/5.png",
  "/images/ballons/6.png",
  "/images/ballons/7.png",
  "/images/ballons/8.png",
];

const ballons3 = Array(2)
  .fill(null)
  .flatMap(() => ballons);

const MainLoader: React.FC = () => {
  return (
    <div className={css.wrapper}>
      {ballons3.map((src, index) => {
        const left = Math.random() * 90;
        const duration = 5 + Math.random() * 5;

        return (
          <img
            key={index}
            src={src}
            className={css.balloon}
            style={{
              left: `${left}%`,
              animationDuration: `${duration}s`,
            }}
            alt={`balloon-${index}`}
          />
        );
      })}

      <div className={css.center}>
        <img src="/images/ballons/baloons2.png" alt="Val Balone Logo" />
        <p>Val Balone</p>
      </div>
    </div>
  );
};

export default MainLoader;
