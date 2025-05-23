import { ProductProps } from '@/app/(client)/page';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface ProductState {
  products: ProductProps[];
  isLoading?: boolean;
}

const initialState: ProductState = {
  products: [],
  isLoading: false
};

export const allProduct = createAsyncThunk('product/allProduct', async () => {
  try {
    const repsone = await fetch('https://fakestoreapi.com/products');
    const data = await repsone.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch all product..');
  }
});

export const productSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(allProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(allProduct.rejected, (state) => {
        state.isLoading = false;
      });
  }
});

export const {} = productSlice.actions;

export default productSlice.reducer;
