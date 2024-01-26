import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather",
  async (city = "London") => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c35825b8e6f84b66daa67077ebdf9465`
    );
    return response.json();
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: true,
    data: null,
    isError: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      console.log("Error :", action.payload);
      state.isError = true;
    });
  },
});

export default weatherSlice.reducer;
