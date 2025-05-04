import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/auth/ops";
import { SelectLoading } from "../../redux/auth/slice";
import { AppDispatch } from "../../redux/store";
import css from "./Signin.module.css";

interface SigninProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormValues {
  username: string;
  password: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
};

const Signin: React.FC<SigninProps> = ({ setModal }) => {
  const loading = useSelector(SelectLoading);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const result = await dispatch(signin(values));

    if (signin.fulfilled.match(result)) {
      toast.success("Welcome admin!", {
        duration: 4000,
        position: "top-center",
      });
    } else {
      toast.error("Access denied!", {
        duration: 4000,
        position: "top-center",
      });
    }

    setModal(false);
    actions.resetForm();
  };

  if (loading) return <p>Loading ...</p>;

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.container}>
            <label>admin</label>
            <Field className={css.field} type="text" name="username" />
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
          </div>
          <div className={css.container}>
            <label>password</label>
            <Field className={css.field} type="password" name="password" />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>

          <button className={css.btn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Signin;
