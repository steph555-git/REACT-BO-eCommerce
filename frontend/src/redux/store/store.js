import { configureStore } from "@reduxjs/toolkit";
import subNavSlice from "../slices/subNav.slice";
import step1Slice from "../slices/step1.slice";
import stepsGenerateArticleAI from '../slices/stepsGenerateArticleAI.slice'

export default configureStore({
    // c'est ici que le reducer prend son nom // 
    reducer: {
        subNav: subNavSlice,
        step1: step1Slice,
        stepsArticle: stepsGenerateArticleAI,
    },
})
