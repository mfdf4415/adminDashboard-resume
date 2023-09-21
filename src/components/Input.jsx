import { MdOutlineError } from "react-icons/md";

const Input = ({ iconName, type = "text", placeholder, name, formik }) => {
  console.log(formik.errors, formik.touched);
  return (
    <>
      <div className="w-72 flex gap-3 bg-input_bg pl-6 pr-3 py-3 items-center rounded-3xl text-[#666666] focus-within:input-anime focus-within:text-primary">
        <span>{iconName}</span>
        {/* {formik.errors[name] && formik.touched[name] && formik.errors[name]} */}
        <input
          {...formik.getFieldProps(name)}
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full text-[#666666] font-semibold outline-none bg-input_bg placeholder:text-[#9E9E9E] placeholder:font-normal focus:placeholder:text-input_bg "
        />
        <span>
          {formik.errors[name] && formik.touched[name] && (
            <MdOutlineError className="text-danger group-hover:block" />
          )}
        </span>
      </div>
      {formik.errors[name] && formik.touched[name] && (
        <span className="w-72 ml-5 text-xs text-danger self-strt">
          {formik.errors[name]}
        </span>
      )}
    </>
  );
};

export default Input;
