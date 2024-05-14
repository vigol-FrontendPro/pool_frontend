import { createAppSlice } from "../../app/createAppSlice"
import { fetchAddProduct, fetchDeleteProduct, fetchProduct, fetchProducts } from "./api"
import type { ProductDTO, ProductsState } from "./types"

const initialState: ProductsState = {
  productsList: [],
  selectedProduct: undefined
}

export const productsSlice = createAppSlice({
  name: "products",
  initialState,
  reducers: create => ({
    getProducts: create.asyncThunk(
      async (arg: void) => {
        const response = await fetchProducts()
        return response
      },
      {
        pending: state => {},
        fulfilled: (state, action) => {
          state.productsList = action.payload
        },
        rejected: state => {},
      },
    ),
    deleteProduct: create.asyncThunk(
      async (id: number) => {
        const response = await fetchDeleteProduct(id)
        return response
      },
      {
        pending: state => {},
        fulfilled: (state, action) => {
          state.productsList = state.productsList.filter(p => p.id !== action.payload.id)
        },
        rejected: state => {},
      },
    ),
    getProduct: create.asyncThunk(
      async (id: number) => {
        const response = await fetchProduct(id)
        return response
      },
      {
        pending: state => {},
        fulfilled: (state, action) => {
         state.selectedProduct = action.payload
        },
        rejected: state => {},
      },
    ),
    addProduct: create.asyncThunk(
      async (productDTO: ProductDTO) => {
        const response = await fetchAddProduct(productDTO)
        return response
      },
      {
        pending: state => {},
        fulfilled: (state, action) => {
         state.productsList.push(action.payload)
        },
        rejected: state => {},
      },
    ),
  }),
  selectors: {
    selectProducts: productsState => productsState.productsList,
    selectProduct: productsState => productsState.selectedProduct,
  },
})

export const { getProducts, deleteProduct, getProduct, addProduct } = productsSlice.actions

export const { selectProducts, selectProduct } = productsSlice.selectors
