import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import { SelectError, SelectLoading } from "../../../redux/auth/slice";
import { SelectCreateBalloon } from "../../../redux/balloons/slice";
import css from "./Add.module.css";

interface AddProps {}

interface FormValues {
  balloon: string;
  description: string;
}

const initialValues: FormValues = {
  balloon: "",
  description: "",
};

const handleSubmit = () => {};

const Add: React.FC<AddProps> = () => {
  const loading = useSelector(SelectLoading);
  const error = useSelector(SelectError);
  const createBalloon = useSelector(SelectCreateBalloon);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.container}>
            <label>image</label>
            <Field className={css.field} type="file" name="image" />
            <ErrorMessage className={css.error} name="image" component="span" />
          </div>
          <div className={css.container}>
            <label>description</label>
            <Field className={css.field} type="text" name="description" />
            <ErrorMessage
              className={css.error}
              name="description"
              component="span"
            />
          </div>

          <button className={css.btn} type="submit">
            Create
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Add;
