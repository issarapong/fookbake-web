
import LoginInput from "./LoginInput";
import validateLogin from "../validators/validate-login";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../hooks/useForm";


export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      emailOrMobile: "",
      password: "",
    },
    validateLogin
  );
  return (
    <form onSubmit={handleSubmitForm()}>
      <div className="grid gap-4">
        <div>
          <LoginInput
            placeholder="Email address or phone number"
            name="emailOrMobile"
            value={input.emailOrMobile}
            onChange={handleChangeInput}
            isInvalid ={error.emailOrMobile}
          />
          <InputErrorMessage message={error.emailOrMobile} />
        </div>
        <div>
          <LoginInput
            placeholder="password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
            isInvalid ={error.password}
          />
          <InputErrorMessage message={error.password} />
        </div>
        <div>
          <button className="bg-blue-500 text-white w-full leading-[3rem] rounded-md text-xl font-bold">
            Login
          </button>
          {/* w-full กระจายให้เต็ม div  */}
        </div>
      </div>
    </form>
  );
}
