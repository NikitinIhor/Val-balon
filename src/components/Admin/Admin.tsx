import css from "./Admin.module.css";

interface AdminProps {
  handleLogout: () => void;
}

const Admin: React.FC<AdminProps> = ({ handleLogout }) => {
  return (
    <>
      <div className={css.overlay}> </div>
      <div className={css.admin}>
        <ul className={css.list}>
          <li className={css.item}>add</li>
          <li className={css.item}>update</li>
          <li className={css.item}>delete</li>
        </ul>
        <button className={css.logout} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Admin;
