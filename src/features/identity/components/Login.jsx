import img from "../../../assets/img-01.webp";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { BiSolidLockAlt, BiSolidMobile } from "react-icons/bi";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../../components/Input";
import { http } from "../../../core/httpServices";
import Spinner from "../../../components/Spinner";
import {
  redirect,
  useNavigation,
  useRouteError,
  useSubmit,
} from "react-router-dom";

const initialValues = {
  mobile: "",
  password: "",
};

const validationSchema = yup.object({
  mobile: yup.string().required("mobile is required."),
  password: yup.string().required("Password is required."),
});

const Login = () => {
  const submitForm = useSubmit();
  const { state } = useNavigation();
  const errors = useRouteError();
  console.log(errors)
  const onSubmit = (values) => {
    submitForm(values, { method: "post" });
  };

  const formik = useFormik({
    onSubmit,
    initialValues,
    validationSchema,
  });

  return (
    <div className="w-full h-screen  flex p-24 gap-24">
      <div className="flex-1 flex items-center justify-center">
        <img src={img} className="hover:origin-bottom-right hover:rotate-12" />
      </div>
      <div className="flex-1 flex flex-col gap-8 items-center justify-center">
        <h1 className="font-extrabold text-2xl">Admin Login</h1>
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
          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-72 mt-2 text-[#fff] transition-colors rounded-3xl px-4 py-3 font-bold outline-none bg-primary hover:bg-[#455865] disabled:opacity-60 disabled:hover:none"
          >
            {state === "submitting" ? <Spinner /> : "LOGIN"}
          </button>
          <p className="text-[#666666] text-sm">
            forgot{" "}
            <a className="text-[#9E9E9E] cursor-pointer hover:text-primary transition-colors">
              Username/Password
            </a>
          </p>
        </form>
        {errors && (
          <div className="flex flex-col gap-2 border-danger border-[1px] p-2 rounded-md">
            {errors.response?.data.map((error) => (
              <p className="text-danger text-xs">{error.description}.</p>
            ))}
          </div>
        )}
        <a className="transition-colors absolute bottom-12 text-[#666666] justify-self-end flex items-center gap-3 cursor-pointer text-sm hover:text-primary">
          Create Your Acount <HiMiniArrowLongRight className="text-xl" />
        </a>
      </div>
    </div>
  );
};

export default Login;

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const response = await http.post("/Users/login", data);
  if (response.status === 200) {
    localStorage.setItem("token", response?.data.token);
    return redirect("/");
  }
};
