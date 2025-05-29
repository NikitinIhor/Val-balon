import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateBalloon } from "../../../redux/balloons/ops";
import { AppDispatch } from "../../../redux/store";
import css from "./Update.module.css";

interface Balloon {
  _id: string;
  balloon: string;
  description: string;
}

interface UpdateProps {
  onClose: () => void;
  item: Balloon;
}

interface FormValues {
  balloon: File | null;
  description: string;
}

const Update: React.FC<UpdateProps> = ({ onClose, item }) => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: FormValues = {
    balloon: null,
    description: item.description || "",
  };

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const formData = new FormData();
    if (values.balloon instanceof File) {
      formData.append("balloon", values.balloon);
    }
    formData.append("description", values.description);

    const result = await dispatch(
      updateBalloon({ _id: item._id, data: formData })
    );

    if (updateBalloon.fulfilled.match(result)) {
      toast.success("Balloon updated!");
      onClose();
    } else {
      toast.error("Update failed.");
    }

    actions.resetForm();
  };

  return (
    <div className={css.wrapper}>
      <button onClick={onClose} type="button">
        close
      </button>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <div className={css.container}>
              <label>Balloon</label>
              <input
                className={css.field}
                type="file"
                name="balloon"
                onChange={(event) => {
                  const file = event.currentTarget.files?.[0];
                  if (file) setFieldValue("balloon", file);
                }}
              />
              <ErrorMessage
                className={css.error}
                name="balloon"
                component="span"
              />
            </div>

            <div className={css.container}>
              <label>Description</label>
              <Field className={css.field} type="text" name="description" />
              <ErrorMessage
                className={css.error}
                name="description"
                component="span"
              />
            </div>

            <button className={css.btn} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Update;
