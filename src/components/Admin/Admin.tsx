import Add from "./Add/Add";
import css from "./Admin.module.css";
import Gallery from "./Gallery/Galeery";

interface AdminProps {
  handleLogout: () => void;
}

const Admin: React.FC<AdminProps> = ({ handleLogout }) => {
  return (
    <>
      <div className={css.overlay}> </div>
      <div className={css.admin}>
        <Add />
        <div className={css.gallery}>
          <Gallery />
        </div>
        <button className={css.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Admin;
