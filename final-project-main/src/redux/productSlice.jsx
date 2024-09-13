import { createSlice } from "@reduxjs/toolkit";

const initialState  = {
    products: [],
    searchTerm : '',
    filteraData: []
}

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers : {
        setProducts(state, action) {
            state.products = action.payload
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
            state.filteraData = state.products.filter(product => {
                product.name.toLowCase().includes(state.searchTerm.toLowerCase())
            })
        }
    },
})

export const {setProducts, setSearchTerm } = productsSlice.actions;
export default productsSlice.reducer