import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = createAsyncThunk(
  "products",
  async (__, thunkApi) => {
    try {
      const products = await axios.get(`${BASE_URL}/products`);
      return products.data;
    } catch (error: any) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const getProduct = async (id: number) => {
  const product = await axios.get(`${BASE_URL}/products/${id}`);
  return product.data;
};
