import img from "../../../assets/img-01.webp";
import { TbMailFilled } from "react-icons/tb";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { BiSolidLockAlt } from "react-icons/bi";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "../../../components/Input";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email("Email is unvalid").required("Email is required."),
  password: yup.string().required("Password is required."),
});

const Login = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const  formik  = useFormik({
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
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col  items-center gap-2">
          <Input
            name="email"
            type="text"
            iconName={<TbMailFilled />}
            formik={formik}
            placeholder="Email"
          />
          <Input
            name="password"
            type="text"
            iconName={<BiSolidLockAlt className="text-sm" />}
            formik={formik}
            placeholder="Password"
          />
          <button className="w-72 mt-2 text-[#fff] transition-colors rounded-3xl px-4 py-3 font-bold outline-none bg-primary hover:bg-[#455865]">
            LOGIN
          </button>
          <p className="text-[#666666] text-sm mt-3">
            forgot{" "}
            <a className="text-[#9E9E9E] cursor-pointer hover:text-primary transition-colors">
              Username/Password
            </a>
          </p>
          <a className="transition-colors text-[#666666] justify-self-end flex items-center gap-3 cursor-pointer text-sm hover:text-primary">
            Create Your Acount <HiMiniArrowLongRight className="text-xl" />
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
