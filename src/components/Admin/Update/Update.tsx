import css from "./Update.module.css";

interface UpdateProps {}

const Update: React.FC<UpdateProps> = () => {
  return (
    <div className={css.wrapper}>
      <div className="container"> Update</div>
    </div>
  );
};

export default Update;
