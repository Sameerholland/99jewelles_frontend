import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Checkuser, CreateAccount, Loginuser, UpdatePassword, updatePassword } from "./AuthAPI";


const initialState = {
  status: "idle",
  user: null,
  error:null,
  userExiste:false,
  Active :"order"
};

export const CreateUserAsync = createAsyncThunk(
  "Auth/CreateAccount",
  async (userdata) => {
    const response = await CreateAccount(userdata);
    return response.data;
  }
);
export const LoginuserAsync = createAsyncThunk(
  "Auth/Loginuser",
  async (userdata) => {
    const response = await Loginuser(userdata);
    return response.data;
  }
);

export const CheckuserAsync = createAsyncThunk(
  "Auth/Checkuser",
  async (userdata) => {
    const response = await Checkuser(userdata);
    return response.data;
  }
);

export const UpdatePasswordAsync = createAsyncThunk(
  "Auth/UpdatePassword",
  async (userdata) => {
    const response = await UpdatePassword(userdata);
    return response.data;
  }
);
export const changeProfileNavigationAsync = createAsyncThunk(
  "Auth/Navigation", async (userdata) =>{
    return userdata;
  }
)







export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(CreateUserAsync.pending, (state) => {
        state.status = "Pending";
      })
      .addCase(CreateUserAsync.fulfilled, (state, actions) => {
        state.status = "idle";
        state.user = actions.payload;
      })
      .addCase(LoginuserAsync.pending,(state)=>{
        state.status="pending";
      })
      .addCase(LoginuserAsync.fulfilled,(state,actions)=>{
        state.status = 'idle';
        state.user = actions.payload;
      })
      .addCase(LoginuserAsync.rejected, (state,actions)=>{
        state.status= 'rejected';
        state.error =actions.payload;

      })
      .addCase(CheckuserAsync.pending,(state)=>{
        state.status ='pending';
      })
      .addCase(CheckuserAsync.fulfilled,(state)=>{
        state.status ='idle';
        state.userExiste = true;
      })
    .addCase(UpdatePasswordAsync.pending ,(state)=>{
      state.status = 'pending';
    })
    .addCase(UpdatePasswordAsync.fulfilled,(state,actions)=>{
      state.status = 'idle';
      state.user = actions.payload;
    })
    .addCase(changeProfileNavigationAsync.fulfilled,(state,actions)=>{
      state.Active = actions.payload;
    })
  },
});

export const loggeduser = (state) => state.Auth.user;
export const activestate =(state) =>state.Auth.Active;

export default AuthSlice.reducer;
