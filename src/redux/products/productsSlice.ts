import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "../api/apiCalls";

type SliceState = {
  loading: boolean;
  error: string | null;
  products: null | [];
};
const initialState: SliceState = {
  loading: false,
  error: "",
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
      state.products = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(
      fetchProducts.rejected,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.products = [];
        state.error = action.payload;
      }
    );
  },
});
export default productSlice.reducer;
