import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <form>
      <div className="grid gap-4">
        <div>
          <LoginInput placeholder="Email address or phone number" />
        </div>
        <div>
          <LoginInput placeholder="password" />
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
