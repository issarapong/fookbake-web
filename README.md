# Fookbake Web 📖

#### Install React Vite and run
```
pnpm create vite fookbake-web --template react
cd fookbake-web
pnpm install
pnpm run dev
pnpm add axios
pnpm add react-toastify   // alert popup
pnpm add react-redux @reduxjs/toolkit
pnpm add javascript-time-ago
```
#### Install tailwind by pnpm

https://tailwindcss.com/docs/guides/vite
```
pnpm add -D tailwindcss postcss autoprefixer
pnpm exec tailwindcss init -p
```
#### Add config to tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

#### Add tailwind Css Class to src/index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### Verify tailwind

```
function App() {

  return (
    <div className="h-16 w-16 bg-orange-200">Hello world
    </div>
  )
}

export default App

```
* Clear className after verify Tailwind integreted
#### clear file

del App.css
del src/assets/react.svg


##### Apply font and Background to index.css

```
@layer base{
  body {
    background-color: #f0f2f5;
    font-family: Segoe UI Historic,Segoe UI,Helvetica,Arial,sans-serif;
  }

}
```

##### install React-router-dom
pnpm add react-router-dom

#### Creat Rout component
/src/route/Router.jsx

```
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    { path: '/login', element: <h1>Login Page</h1>}
]);


export default function Router() {
    return <RouterProvider router={router} />
}

```

import router.jsx to app.jsx

```
import Router from "./route/Router"

function App() {

  return  <Router />
}

export default App


```
 
Chek By GET http://localhost:5173/login

Result 

```
Login Page
```

Create LoginPage component // rfc
/src/pages/LoginPage.jsx

```
export default function LoginPage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
    <div className="max-w-[25rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem]">
      <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          className="-m-7 h-[6.625rem]"
          alt="fakebook-logo"
        />
      </div>
      <h2 className="text-2xl font-medium text-center min-[900px]:text-left leading-7 min-[1075px]:text-[1.75rem] min-[1075px]:w-[31.25rem]">
        Facebook helps you connect and share with the people in your life.
      </h2>
    </div>
    <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
      <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4"></div>
      <div className="text-sm text-center">
        <span className="font-bold">Create a Page</span> for a celebrity,
        brand or business.
      </div>
    </div>
  </div>
  )
}

```


import login page to router
/src/route/Router.jsx
```
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
    { path: '/login', element: <LoginPage />}
]);


export default function Router() {
    return <RouterProvider router={router} />
}
```

#### Implement Feature Auth


##### 
/src/features/auth/components/LoginInput.jsx

```
export default function LoginInput({placeholder}) {
  return (
    <input 
    className="block w-full border border-gray-300 rounded-md px-4 py-3.5 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-300"
    placeholder = {placeholder}
    />
    
  )
}


```



Import LoginInput.jsx to  LoginForm.jsx

/src/features/auth/components/LoginForm.jsx

```
import LoginInput from "./LoginInput";

export default function LoginForm() {
  return (
    <form>
        <div className="grid gap-4">
            <div>
               <LoginInput placeholder="Email address or phone number" />
            </div>
            <div>
               <LoginInput placeholder="password"/>
            </div>
        </div>
    </form>
  )
}


```

Import LoginForm.jsx to LoginPage.jsx

```
import LoginForm from "../features/auth/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
    <div className="max-w-[25rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem]">
      <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          className="-m-7 h-[6.625rem]"
          alt="fakebook-logo"
        />
      </div>
      <h2 className="text-2xl font-medium text-center min-[900px]:text-left leading-7 min-[1075px]:text-[1.75rem] min-[1075px]:w-[31.25rem]">
        Fookbake helps you connect and share with the people in your life.
      </h2>
    </div>
    <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
      <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
        <LoginForm />
        <hr className="my-5 border-gray-300" />
      </div>
      <div className="text-sm text-center">
        <span className="font-bold">Create a Page</span> for a celebrity,
        brand or business.
      </div>
    </div>
  </div>
  )
}


```


Prepar Register Component

/src/features/auth/components/RegisterContainer.jsx
```
export default function RegisterContainer() {
  return (
    <div><button className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wide ">Create new account</button></div>
  )
}

```

import  RegisterContainer.jsx to //src/pages/LoginPage.jsx

```
import LoginForm from "../features/auth/components/LoginForm";
import RegisterContainer from "../features/auth/components/RegisterContainer";

export default function LoginPage() {
  return (
    <div className="mx-10 pt-10 flex flex-col items-center min-[900px]:pt-[8.25rem] min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-start min-[1075px]:justify-center">
      <div className="max-w-[25rem] flex-1 min-[900px]:pt-[4.5rem] min-[1075px]:max-w-[36.25rem]">
        <div className="pb-5 flex justify-center min-[900px]:pb-4 min-[900px]:justify-start">
          <img
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            className="-m-7 h-[6.625rem]"
            alt="fakebook-logo"
          />
        </div>
        <h2 className="text-2xl font-medium text-center min-[900px]:text-left leading-7 min-[1075px]:text-[1.75rem] min-[1075px]:w-[31.25rem]">
          Fookbake helps you connect and share with the people in your life.
        </h2>
      </div>
      <div className="mt-10 self-stretch min-[900px]:mt-0 min-[900px]:basis-[24.75rem]">
        <div className="mx-auto max-w-[24.75rem] bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 p-4">
          <LoginForm />
          <hr className="my-5 border-gray-300" />
          <div className="flex justify-center pt-1 pb-2">
            <RegisterContainer />
          </div>
        </div>
        <div className="text-sm text-center">
          <span className="font-bold">Create a Page</span> for a celebrity,
          brand or business.
        </div>
      </div>
    </div>
  );
}

```


Creat Register Input
/src/features/auth/components/RegisterInput.jsx
```
import React from 'react'

export default function RegisterInput({ placeholder}) {
  return (
    <input type="text" className="block w-full rounded-md border border-gray-300 px-3 py-1.5 leading-6 outline-none text-sm focus:ring focus:ring-blue-300 focus:border-blue-500"
    placeholder={placeholder}
    ></input>
  )
}


```

Creat Models
/src/components/Modal.jsx  // การสร้าง ในระดับ Global folder เพื่แนำไปใช้หลายที่

```

import RegisterInput from "../features/auth/components/RegisterInput";

export default function Modal() {
  return (
    <>
      <div className="fixed inset-0 bg-white opacity-70 z-20"></div>
      <div className="fixed inset-0 z-30">
        <div className="flex justify-center items-center min-h-full p-4">
          <div className="bg-white rounded-lg max-w-[27rem] shadow-[0_0_15px_rgb(0_0_0_/0.2)] flex flex-col">
            <div className="flex justify-between p-4 border-b text-xl">
              <div className="invisible">x</div>
              <div className="text-xl font-bold">Sign Up</div>
              <div className="text-gray-500 font-semibold hover:text-gray-600 role=button ">&#10005;</div>
            </div>
            <div className="p-4">
              <form>
                <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                  <div>
                    <RegisterInput placeholder="First name"/>
                  </div>
                  <div>
                    <RegisterInput placeholder="Last Name"/>
                  </div>
                  <div className="col-span-full">{/* ยุบรวม เป็น 1 */}
                    <RegisterInput placeholder= "Email Address or Mobile number"/>
                  </div>
                  <div className="col-span-full">

                    <RegisterInput placeholder="Password"/>
                  </div>
                  <div className="col-span-full">
             
                 
                    <RegisterInput placeholder="Confirm Password"/>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="bg-green-500 hover:bg-green-600 rounded-lg text-white text-lg font-bold px-8 py-2">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


```

import Modal.jsx to registerContainer

```
import Modal from "../../../components/Modal";

export default function RegisterContainer() {
  return (
    <div><button className="bg-green-500 text-white rounded-md px-4 leading-[3rem] font-bold hover:bg-green-600 tracking-wide ">Create new account</button>
    <Modal />
    </div>
  )
}

```


## Create Portal

index.tml add 

``
  <div id="model"></div>
``




Install Validate joi

pnpm add joi



create file
/src/features/auth/validators/validate-register.js


## Implement Axios /REGISTER API


/src/api/axios.js
```
import axios from "axios";
import { BACKEND_URL } from "../config/env";

axios.defaults.baseURL = BACKEND_URL

export default axios
```

/src/config/env.js
```
export const BACKEND_URL = "http://localhost:8888";
```

/src/api/auth-api.js

```
import axios from "./axios";     // ไม่ใช้ Library โดยตรง


export const register = input => axios.post('/auth/register', input);


```
/src/utils/localstorage.js
```
const ACCESS_TOKEN = 'accessToken'
export const setAccessToken = token => localStorage.setItem('accessToken', token)
localStorage.setItem(ACCESS_TOKEN, token)
```
/src/features/auth/components/RegisterForm.jsx





### implement react-toastify

import to main.jsx
````
import 'react-toastify/dist/ReactToastify.css';
```

import to App.jsx

```
import { ToastContainer } from 'react-toastify'

// Config to compnent

```
  return ( <div>
  
  <Router />
   <ToastContainer  position="bottom-center" theme="dark" autoClose={3000}/>   // example config from https://fkhadra.github.io/react-toastify/introduction
  </div>
  );
}
```

```


### after register login to homepage (With Redux)



# implement REDUX
1 . Intall Lib pnpm add react-redux @reduxjs/toolkit

2 . create Store
src/store/index.js
```
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({});

export default store;

```

import to main.jsx

```
import { Provider } from 'react-redux'

import store from './store';


// Add store to control <App />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)


```
3. create & Import
/src/features/auth/slice/auth-slice.js

```
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState
})
```

# Add reducer

``
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

   register: state  => {
        state.isAuthenticated = true;
    }
    }
})
``

Import stat to to store/index.js

```
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/slice/auth-slice'

const store = configureStore({
   reducer: { 
    auth: authReducer
   }
});

export default store;
```

import dispatch tp RegisterForm.jsx
```
import { useDispatch } from 'react-redux'
import { register } from '../slice/auth-slice';


dispatchEvent(register());

```

create 
/src/features/auth/components/RedirectIfAuthenticated.jsx

```
```

import to Router.jsx


createAsyncThunk 






# Validate Login

 src/features/auth/validators/validate-login.js



 สร้าง Custom hook for reuse LOGIC

 function useForm()  การตั้งชื่อ ฟังชั่น โดยมี use  นำหน้าคือการทำ customhook หรือขึ้นต้นด้วยตัวพิมใหญ่


 Create Hooks


create
/src/features/auth/components/ProtectedRoute.jsx

```
export default function ProtectedRoute({children}) {
  return children;
}

```


## after Authenticated
### create memu layout
/src/layouts/Header.jsx


Create icon Fookbake
/src/icons/index.jsx
/src/layouts/Menu.jsx
/src/layouts/MenuItem.jsx


##  Add profile Dropdown


axios getme
/src/features/auth/slice/auth-slice.js


// add user to auth-slice.js


## Intercepter

## add feature Profile

src/features/profile/components/ProfileContainer.jsx



edit profile

/src/features/profile/components/PictureForm.jsx
/src/features/profile/components/FormButton.jsx

# Context

1 สร้างระบบ Context
/src/features/profile/context/ProfileContextProvider.jsx
/src/features/profile/hooks/userProfile.js


/src/pages/ProfilePage.jsx



# Useparam
src/features/profile/components/ProfileContainer.jsx
/src/features/profile/context/ProfileContextProvider.jsx