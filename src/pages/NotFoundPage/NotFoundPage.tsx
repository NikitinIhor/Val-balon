import { Link } from "react-router-dom";

import css from "./NotFoundPage.module.css";

interface NotFoundPageProps {}

const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  return (
    <div className={css.container}>
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <Link className={css.link} to="/">
          return home
        </Link>
        <img src="/images/notFound.jpg" alt="not found page" />
      </div>
    </div>
  );
};

export default NotFoundPage;
