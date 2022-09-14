import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./AuthService";

//get user from  localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  mainUser: user ? user : null,
  forgot: null,
  reset: null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  message: "",
};

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return await authService.login(data);
  } catch (error) {
    const message = error.response.data.message;

    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
  //await localStorage.removeItem("user");
});

//forget paassword

export const forgotPassword = createAsyncThunk(
  "auth/forgot",
  async (data, thunkAPI) => {
    try {
      return await authService.ForgetPassword(data);
    } catch (error) {
      const message = error.response.data.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

//reset paassword

export const resetPassword = createAsyncThunk(
  "auth/reset",
  async (data, thunkAPI) => {
    try {
      return await authService.resetPassword(data);
    } catch (error) {
      const message = error.response.data.message;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLodaing = false;
      state.message = "";
    },
  },
  extraReducers: {
    //login Actions
    [login.pending]: (state) => {
      state.isLodaing = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.mainUser = action.payload;
      state.isSuccess = true;
    },
    [login.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.message = action.payload;
      state.user = null;
    },

    //logout actions
    [logout.fulfilled]: (state) => {
      state.mainUser = null;
    },

    //forget password Actions
    [forgotPassword.pending]: (state) => {
      state.isLodaing = true;
    },
    [forgotPassword.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.forgot = action.payload;
      state.isSuccess = true;
    },
    [forgotPassword.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.message = action.payload;
    },

    //forget password Actions
    [resetPassword.pending]: (state) => {
      state.isLodaing = true;
    },
    [resetPassword.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.reset = action.payload;
      state.isSuccess = true;
    },
    [resetPassword.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.message = action.payload;
    },
  },
});

//export the reset action from reducer
export const { reset } = authSlice.actions;
//export the reducer to addd in store
export default authSlice.reducer;
