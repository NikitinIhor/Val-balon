import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBalloons } from "../../redux/balloons/ops";
import {
  selectAllBalloons,
  selectError,
  selectLoading,
} from "../../redux/balloons/slice";

import { AppDispatch } from "../../redux/store";
import css from "./GalleryPage.module.css";

const GalleryPage: React.FC = () => {
  const allBalloons = useSelector(selectAllBalloons);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllBalloons());
  }, [dispatch]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div className={css.container}>
      <div className="container">
        {allBalloons.length > 0 ? (
          <ul className={css.list}>
            {allBalloons.map((item, index) => (
              <li className={css.item} key={index}>
                <img
                  src={`https://valballoons-backend.onrender.com/${item.balloon}`}
                  alt={`Balloon ${index}`}
                />
                <p className={css.description}>{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Gallery is empty</p>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;
