import LoginInput from "./LoginInput";
import validateLogin from "../validators/validate-login";
import InputErrorMessage from "./InputErrorMessage";
import useForm from "../../../hooks/useForm";
import { useDispatch } from 'react-redux'
import { login } from '../slice/auth-slice'
import { toast } from 'react-toastify'


export default function LoginForm() {
  const { input, handleChangeInput, error, handleSubmitForm } = useForm(
    {
      emailOrMobile: "",
      password: "",
    },
    validateLogin
  );

 const dispatch = useDispatch();

 const onSubmit = async data => {
  try {
    
  await dispatch(login(data)).unwrap();
  } catch (err) {
    console.log(err)
    toast.error('Invalid email address or mobile number or password')
  }


 }

  return (
    <form onSubmit={handleSubmitForm(onSubmit)}>
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
