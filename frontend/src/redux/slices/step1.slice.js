import { createSlice } from "@reduxjs/toolkit";

export const step1Slice = createSlice({
    name: "step1",
    initialState: {
        role1: '__________',
        role2: '__________',
        sujet: '__________',
        mots: '____',
    },
    reducers: {
        setRole1: (state, action) => {
            console.log("role1", action.payload);
            state.role1 = action.payload;
        },
        setRole2: (state, action) => {
            console.log("role2", action.payload);
            state.role2 = action.payload;
        },
        setSujet: (state, action) => {
            console.log("sujet", action.payload);
            state.sujet = action.payload;
        },
        setMots: (state, action) => {
            console.log("mots", action.payload);
            state.mots = action.payload;
        },
    },
});

export const {
    setRole1,
    setRole2,
    setSujet,
    setMots,
} = step1Slice.actions;

export const getRole1 = (state) => {
    console.log("state get ROLE1", state.step1.role1)
    return state.step1.role1
}
export const getRole2 = (state) => {
    console.log("state get ROLE2", state.step1.role2)
    return state.step1.role2
}
export const getSujet = (state) => {
    console.log("state get SUJET", state.step1.sujet)
    return state.step1.sujet
}
export const getMots = (state) => {
    console.log("state get MOTS", state.step1.mots)
    return state.step1.mots
}

export default step1Slice.reducer;
