import { createSlice } from "@reduxjs/toolkit";

export const stepsGenerateArticleAISlice = createSlice({
    name: "stepsArticle",
    initialState: {
        firstPrompt: {
            reqPrompt: '',
            respPrompt: ''
        },
        secondPrompt: {
            reqPrompt: '',
            respPrompt: ''
        },
        thirdPrompt: {
            reqPrompt: '',
            respPrompt: ''
        },

        finalResult: '',
        etapeActive: 0
    },
    reducers: {
        setFirstPrompt: (state, action) => {
            console.log("firstPrompt", action.payload);
            state.firstPrompt = action.payload;
        },
        setSecondPrompt: (state, action) => {
            console.log("SecondPrompt", action.payload);
            state.secondPrompt = action.payload;
        },
        setThirdPrompt: (state, action) => {
            console.log("ThirdPrompt", action.payload);
            state.thirdPrompt = action.payload;
        },
        setFinalResult: (state, action) => {
            console.log("FinalResult", action.payload);
            state.finalResult = action.payload;
        },
        setEtapeActive: (state, action) => {
            console.log("Etape Active", action.payload);
            state.etapeActive = action.payload;
        },
    },
});

export const {
    setFirstPrompt,
    setSecondPrompt,
    setThirdPrompt,
    setFinalResult,
    setEtapeActive
} = stepsGenerateArticleAISlice.actions;

export const getFirstPrompt = (state) => {
    console.log("state get FIRST_PROMPT", state.stepsArticle.firstPrompt)
    return state.stepsArticle.firstPrompt
}
export const getSecondPrompt = (state) => {
    console.log("state get SECOND_PROMPT", state.stepsArticle.secondPrompt)
    return state.stepsArticle.secondPrompt
}
export const getThirdPrompt = (state) => {
    console.log("state get THIRD_PROMPT", state.stepsArticle.thirdPrompt)
    return state.stepsArticle.thirdPrompt
}
export const getFinalResult = (state) => {
    console.log("state get FINAL RESULT", state.stepsArticle.finalResult)
    return state.stepsArticle.finalResult
}
export const getEtapeActive = (state) => {
    console.log("state get ETAPE_ACTIVE", state.stepsArticle.etapeActive)
    return state.stepsArticle.etapeActive
}

export default stepsGenerateArticleAISlice.reducer;
