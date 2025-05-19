import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBalloons } from "../../../redux/balloons/ops";
import { SelectAllBalloons } from "../../../redux/balloons/slice";
import { AppDispatch } from "../../../redux/store";
import Delete from "../Delete/Delete";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import Update from "../Update/Update";
import css from "./Gallery.module.css";

interface GalleryProps {}

const Gallery: React.FC<GalleryProps> = () => {
  const allBalloons = useSelector(SelectAllBalloons);
  const [modalType, setModalType] = useState<null | "update" | "delete">(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleOpenModal = (type: "update" | "delete", item: any) => {
    setModalType(type);
    setSelectedItem(item);
  };
  const handleCloseModal = () => {
    setModalType(null);
    setSelectedItem(null);
  };

  useEffect(() => {
    dispatch(getAllBalloons());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {allBalloons.length > 0 ? (
        <ul className={css.list}>
          {allBalloons.map((item, index) => (
            <li className={css.item} key={index}>
              <img
                src={`https://valballoons-backend.onrender.com/${item.balloon}`}
                alt={`Balloon ${index}`}
              />
              <p className={css.description}>{item.description}</p>
              <div className={css.btns}>
                <button onClick={() => handleOpenModal("update", item)}>
                  <Update />
                </button>
                <button onClick={() => handleOpenModal("delete", item)}>
                  <Delete />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Gallery is empty</p>
      )}

      {modalType && selectedItem && (
        <ModalWrapper onClose={handleCloseModal}>
          {modalType === "update" ? (
            <Update item={selectedItem} onClose={handleCloseModal} />
          ) : (
            <Delete item={selectedItem} onClose={handleCloseModal} />
          )}
        </ModalWrapper>
      )}
    </div>
  );
};

export default Gallery;
