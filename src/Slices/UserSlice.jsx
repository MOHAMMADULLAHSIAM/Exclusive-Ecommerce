import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userReducer: (state, action) => {
            state.value = action.payload
            localStorage.setItem('user',JSON.stringify(state.value))

        },

    },
})



export const { userReducer } = UserSlice.actions

export default UserSlice.reducer