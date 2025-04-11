import css from "./HomePage.module.css";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return <div className={css.container}> HomePage</div>;
};

export default HomePage;
