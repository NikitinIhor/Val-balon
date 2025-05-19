import { ReactNode } from "react";
import css from "./ModalWrapper.module.css";

interface ModalWrapperProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default ModalWrapper;
