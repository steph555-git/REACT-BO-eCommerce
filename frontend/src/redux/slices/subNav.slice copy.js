import { createSlice } from "@reduxjs/toolkit";

export const stepsGenerateArticleAISlice = createSlice({
    name: "StepsArticle",
    initialState: {
        firstPrompt: '',
        respFirstPrompt: '',
        secondPrompt: '',
        respSecondPrompt: '',
        thirdPrompt: '',
        respThirdPrompt: '',

        finalResult: ''
    },
    reducers: {
        setFirstPrompt: (state, action) => {
            console.log("firstPrompt", action.payload);
            return action.payload;
        },
        setSecondPrompt: (state, action) => {
            console.log("firstPrompt", action.payload);
            return action.payload;
        },
        setThirdPrompt: (state, action) => {
            console.log("firstPrompt", action.payload);
            return action.payload;
        },
        setFinalResult: (state, action) => {
            console.log("firstPrompt", action.payload);
            return action.payload;
        },
    },
});

export const { setFirstPrompt, setSecondPrompt, setThirdPrompt, setFinalResult } = stepsGenerateArticleAISlice.actions;

export const getFirstPrompt = (state) => {
    console.log("state***get", state)
    return state.StepsArticle
}
export const getSecondPrompt = (state) => {
    console.log("state***get", state)
    return state.StepsArticle
}
export const getThirdPrompt = (state) => {
    console.log("state***get", state)
    return state.StepsArticle
}
export const getFirnalResult = (state) => {
    console.log("state***get", state)
    return state.StepsArticle
}
export default stepsGenerateArticleAISlice.reducer;
