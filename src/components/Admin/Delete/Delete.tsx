import css from "./Delete.module.css";

interface Balloon {
  balloon: string;
  description: string;
}

interface DeleteProps {
  onClose: () => void;
  item: Balloon[];
}

const Delete: React.FC<DeleteProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> Delete</div>
    </div>
  );
};

export default Delete;
