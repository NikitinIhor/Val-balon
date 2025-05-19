import css from "./Delete.module.css";

interface DeleteProps {}

const Delete: React.FC<DeleteProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> Delete</div>
    </div>
  );
};

export default Delete;
