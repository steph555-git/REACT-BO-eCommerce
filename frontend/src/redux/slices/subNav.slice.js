import { createSlice } from "@reduxjs/toolkit";

export const subNavSlice = createSlice({
    name: "subNav",
    initialState: [
        { label: 'Liste des leads', path: 'listeleads' },
        { label: 'RGPD', path: 'rgpd' }
    ],
    reducers: {
        setSubNav: (state, action) => {
            console.log("action: ", action);
            state = action.payload;
        },

    },
});

// export qui servira pour mes fonctions
export const { setSubNav } = subNavSlice.actions;

export const getSubNav = (state) => {
    // console.log("state***", state)
    return state.subNav
}


export default subNavSlice.reducer;
