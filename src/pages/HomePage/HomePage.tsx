import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Admin from "../../components/Admin/Admin";
import Signin from "../../components/Signin/Signin";
import { signout } from "../../redux/auth/ops";
import { SelectIsAdmin } from "../../redux/auth/slice";
import { AppDispatch } from "../../redux/store";
import css from "./HomePage.module.css";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const [modal, setModal] = useState(false);

  const isAdmin = useSelector(SelectIsAdmin);
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenSignModal = () => {
    setModal(true);
  };

  useEffect(() => {
    if (isAdmin) {
      setModal(false);
    }
  }, [isAdmin]);

  const handleLogout = async () => {
    try {
      await dispatch(signout());
      setModal(false);
      toast.success("Goodbye admin!", {
        duration: 4000,
        position: "top-center",
      });
    } catch (error) {
      toast.error("Error during logout, please try again.", {
        duration: 4000,
        position: "top-center",
      });
    }
  };

  return (
    <div className={css.container}>
      <div className="container">
        {!isAdmin && (
          <button type="button" onClick={handleOpenSignModal}>
            admin
          </button>
        )}
        {!isAdmin && modal && <Signin setModal={setModal} />}
      </div>

      {isAdmin && <Admin handleLogout={handleLogout} />}
    </div>
  );
};

export default HomePage;
