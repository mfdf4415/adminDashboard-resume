import img from "../../../assets/img-01.webp";
import Input from "../../../components/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import { BiSolidMobile, BiSolidLockAlt } from "react-icons/bi";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import {
  Link,
  useNavigation,
  useActionData,
  useRouteError,
  useSubmit,
  useNavigate,
} from "react-router-dom";
import { http } from "../../../core/httpServices";
import Spinner from "../../../components/Spinner";
import { useEffect } from "react";

const initialValues = {
  mobile: "",
  password: "",
  confirmPassword: "",
};

const validationSchema = yup.object({
  mobile: yup
    .string()
    .min(11, "Mobile should be 11 chars")
    .max(11, "Mobile should be 11 chars")
    .required("Mobile is required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - minimum.")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
      "Password should be letters, symbols, number."
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("No passwordConfirm provided."),
});

const Register = () => {
  const submitForm = useSubmit();
  const navigate = useNavigate();
  const { state } = useNavigation();
  const errors = useRouteError();
  const actionData = useActionData();

  const onSubmit = (values) => {
    const { confirmPassword, ...userData } = values;
    submitForm(userData, { method: "post" });
  };
  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  useEffect(() => {
    if (actionData) {
      setTimeout(() => navigate("/login"), 3000);
    }
  }, [actionData]);

  return (
    <div className="w-full h-screen  flex p-24 gap-24">
      <div className="flex-1 flex items-center justify-center">
        <img src={img} className="hover:origin-bottom-right hover:rotate-12" />
      </div>
      <div className="flex-1 flex flex-col gap-8 items-center justify-center">
        <h1 className="font-extrabold text-2xl">Admin Signup</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full flex flex-col  items-center gap-2"
        >
          <Input
            name="mobile"
            type="text"
            iconName={<BiSolidMobile />}
            formik={formik}
            placeholder="Mobile"
          />
          <Input
            name="password"
            type="text"
            iconName={<BiSolidLockAlt className="text-sm" />}
            formik={formik}
            placeholder="Password"
          />
          <Input
            name="confirmPassword"
            type="text"
            iconName={<BiSolidLockAlt className="text-sm" />}
            formik={formik}
            placeholder="Confirm Password"
          />
          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-72 mt-2 text-[#fff] transition-colors rounded-3xl px-4 py-3 font-bold outline-none bg-primary hover:bg-[#455865] disabled:opacity-60 disabled:hover:none"
          >
            {state === "submitting" ? <Spinner /> : "LOGIN"}
          </button>
        </form>
        {errors && (
          <div className="flex flex-col gap-2 border-danger border-[1px] p-2 rounded-md">
            {errors.response?.data.map((error) => (
              <p className="text-danger text-xs">{error.description}.</p>
            ))}
          </div>
        )}
        {actionData && (
          <div className="flex flex-col gap-2 border-success border-[1px] p-2 rounded-md">
            <p className="text-success text-xs">
              Your acount successfully created.
            </p>
          </div>
        )}
        <Link
          to="/login"
          className="transition-colors absolute bottom-12 text-[#666666] justify-self-end flex items-center gap-3 cursor-pointer text-sm hover:text-primary"
        >
          Login Your Acount <HiMiniArrowLongRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Register;

export const registerAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await http.post("/Users", data);
  return response.status === 200;
};
