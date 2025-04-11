import css from "./Header.module.css";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return <div className={css.container}> Header</div>;
};

export default Header;
