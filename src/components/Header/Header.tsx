import { GrContact, GrGallery } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import css from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={css.wrapper}>
      <div className="container">
        <nav className={css.nav}>
          <ul className={css.list}>
            <li className={css.item}>
              <IoHomeOutline />
              <Link to="/">home</Link>
            </li>
            <li className={css.item}>
              <GrGallery />
              <Link to="/gallery">gallery</Link>
            </li>
            <li className={css.item}>
              <GrContact />
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
