import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { SelectError, SelectLoading } from "../../../redux/auth/slice";
import { createBalloon } from "../../../redux/balloons/ops";
import { AppDispatch } from "../../../redux/store";
import css from "./Add.module.css";

interface AddProps {}

interface FormValues {
  balloon: File | null;
  description: string;
}

const initialValues: FormValues = {
  balloon: null,
  description: "",
};

const Add: React.FC<AddProps> = () => {
  const loading = useSelector(SelectLoading);
  const error = useSelector(SelectError);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const formData = new FormData();
    formData.append("description", values.description);

    if (values.balloon) {
      formData.append("balloon", values.balloon);
    }

    try {
      const result = await dispatch(createBalloon(formData));

      console.log(result);

      if (createBalloon.fulfilled.match(result)) {
        toast.success("Ballon added successfully!", {
          duration: 4000,
          position: "top-center",
        });
      } else {
        toast.error("Error", {
          duration: 4000,
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Error: Something went wrong!", {
        duration: 4000,
        position: "top-center",
      });
    }

    actions.resetForm();
  };

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>ERROR</p>;

  return (
    <div className={css.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <div className={css.container}>
            <label>image</label>
            <Field name="balloon">
              {({ form }: any) => (
                <input
                  className={css.field}
                  type="file"
                  accept="image/*"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = event.currentTarget.files?.[0];
                    form.setFieldValue("balloon", file);
                  }}
                />
              )}
            </Field>
            <ErrorMessage
              className={css.error}
              name="balloon"
              component="span"
            />
          </div>
          <div className={css.container}>
            <label>description</label>
            <Field
              className={css.field}
              type="text"
              name="description"
              as="textarea"
              rows="3"
            />
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
