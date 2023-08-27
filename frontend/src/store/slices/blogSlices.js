import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBlogs = createAsyncThunk(
  "getblog",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const productData = response.data.map((blogs) => ({
        ...blogs,
      }));
      return productData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  allBlogs: [], // Will store the fetched products
  loading: false,
  error: null,
  content: "",
};

// Create a slice using createSlice function
const blogSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    storeContent: (state, action) => {
      state.content = action.payload;
    },
  },
  //for api fetch when components renders
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.allBlogs = action.payload; // Store the fetched products in the 'products' array
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export default blogSlice; // Export the reducer

// // Optionally, you can export any actions generated by createSlice as well
export const { storeContent } = blogSlice.actions;