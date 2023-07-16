import { configureStore } from "@reduxjs/toolkit";

import step1Slice from "../slices/step1.slice";
import stepsGenerateArticleAI from '../slices/stepsGenerateArticleAI.slice'

export default configureStore({
    // c'est ici que le reducer prend son nom // 
    reducer: {
        step1: step1Slice,
        stepsArticle: stepsGenerateArticleAI,
    },
})
