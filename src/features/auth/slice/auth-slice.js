import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from '../../../api/auth-api'
import { setAccessToken } from "../../../utils/localstorage";

const initialState = {
  isAuthenticated: false,
  error: null,
  loading: false
};

export const registerAsync = createAsyncThunk(
    'auth/registerAync',  
    async (input, trunkApi)=> {
    try {
        const res = authService.register(input)
        setAccessToken((await res).data.accessToken)
        return;
    } catch (err) {
        return trunkApi.rejectWithValue(err.response.data.message)

    }

})

export const login = createAsyncThunk('auth/login', async  input => {
    const res = await authService.login(input);
    setAccessToken(res.data.accessToken);
})



// auth/registerAsynce/pending
// auth/registerAsynce/rejected
// auth/registerAsynce/fullfiled
const authSlice = createSlice({
  name: "auth",
  initialState,
//   reducers: {
//     register: (state) => {
//       state.isAuthenticated = true;
//     },
//   },
  extraReducers: builder => 
      builder
      .addCase(registerAsync.pending, state => {
        state.loading = true})
      .addCase(registerAsync.fulfilled, state => {
    state.isAuthenticated = true;
    state.loading = false;
  })
  .addCase(registerAsync.rejected, (state, action) => {
    state.error = action.payload;
    state.loading = false;
  }).addCase(login.fulfilled, state => {
    state.isAuthenticated = true;
  })
});

export default authSlice.reducer;
//export const { register } = authSlice.actions;




// อธิบาย กลไก redux reducers
//action obj { type: 'register'}

// action object { type: 'register' }
// action creator register => () => ({ type: 'register' })

// action => dispatch => reducer => new state => update UI
// { type: 'register' } => dispatch({ type: 'auth/register' })
// const register = () => ({ type: 'auth/register' })
// dispatch(register())
// const login = (payload) => ({type: 'auth/login', payload: payload})
// dispatch({ type: 'auth/login', payload: { email: 'a@gmail.com' } })
// dispatch(login({ email: 'a@gmail.com' }))

// function reducer(state,action) {
//   switch (action.type) {
//     case 'auth/register': {
//       state.isAuthenticated = true;
//     }
//     case 'auth/login': {
//       state.isAuthenticated = true
//     }
//   }
// }