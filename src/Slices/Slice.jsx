import { createSlice } from '@reduxjs/toolkit'
import { toast, Bounce } from 'react-toastify';

const initialState = {
    value: [],
    cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    wish: localStorage.getItem('wish') ? JSON.parse(localStorage.getItem('wish')) : [],
    subtotal: localStorage.getItem('subtotal') ? JSON.parse(localStorage.getItem('subtotal')) : [],
}

export const Slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        products: (state, action) => {

            state.value = action.payload

        },
    filterCategory: (state, action) => {
        
        state.value = action.payload
        
    },
    
    
    
    // cart reducer
        cartReducer: (state, action) => {
            const exist = state.cart.find((item) => item.id == action.payload.id)
            if (!exist) {
                state.cart = [...state.cart, action.payload]
                localStorage.setItem("cart", JSON.stringify([...state.cart]))
                toast.success('🛒 Item added to cart!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            } else {
                toast.error('✔️ Item is already in your cart', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }

        },
        removeReducer: (state, action) => {
            // state.cart.splice(action.payload.id,1)
            // localStorage.setItem("cart", JSON.stringify([...state.cart]))


            // const index = state.cart.findIndex((item)=>item.id == action.payload)
            // if(index !== -1){
            //     state.cart.splice(index,1)
            //     localStorage.setItem("cart", JSON.stringify([...state.cart]))
            // }


            state.cart = state.cart.filter((item) => item.id !== action.payload)
            localStorage.setItem("cart", JSON.stringify([...state.cart]))
            

        },



        // wish reducer
         wishReducer: (state, action) => {

            const exist = state.wish.find((item) => item.id == action.payload.id)

            if (!exist) {

                state.wish = [...state.wish, action.payload]
                localStorage.setItem("wish", JSON.stringify([...state.wish]))
                toast.success(' 🤍 Item added to wishlist!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            } else {
                toast.error('✔️ Item is already in your wishlist', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
            }

        },

        
        wishRemoveReducer: (state, action) => {
            // state.wish.splice(action.payload.id,1)
            // localStorage.setItem("wish", JSON.stringify([...state.wish]))


            // const index = state.wish.findIndex((item)=>item.id == action.payload)
            // if(index !== -1){
            //     state.wish.splice(index,1)
            //     localStorage.setItem("wish", JSON.stringify([...state.wish]))
            // }

            state.wish = state.wish.filter((item) => item.id !== action.payload)
            localStorage.setItem("wish", JSON.stringify([...state.wish]))

        },


       


        incrimentReducer: (state, action) => {


            // const item = state.cart.find((item) => item.id === action.payload)

            // if (item) {
            //     item.quantity += 1
            // }

            
            state.cart = state.cart.map((item) => {
                return (
                    item.id == action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            })

            localStorage.setItem("cart", JSON.stringify([...state.cart]))
        },


        decrimentRududcer: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id == action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 }
                }
                return item
            })

            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        
        subtotalReducer: (state) => {
            state.subtotal = state.cart.reduce((prev,items)=>{
                
                return(
                    prev + (items.quantity * Number(items.price * (1-items.discountPercentage/100)).toFixed(2))
                )
            },0)
            localStorage.setItem("subtotal",JSON.stringify(state.subtotal))
        }
    },
})



export const { products, filterCategory, cartReducer, wishReducer, removeReducer, wishRemoveReducer, incrimentReducer, decrimentRududcer,subtotalReducer } = Slice.actions

export default Slice.reducer