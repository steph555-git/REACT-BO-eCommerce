import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: "article",
    initialState: {
        informations: {
            dateCrea: '',
            visible: '',
            title: '',
            author: '',
            chapeau: '',
            description: ''
        },
        categories: {
            categorie1: '',
            categorie2: '',
            categorie3: ''
        },
        images: {
            image1: '',
            image2: '',
            image3: ''
        },
        seo: {
            titleInURL: '',
            metaTitle: '',
            metaDescription: ''
        }
    },
    reducers: {
        setInformations: (state, action) => {
            console.log("ARTICLE INFORMATIONS", action.payload);
            state.informations = { ...action.payload };
        },
        setCategories: (state, action) => {
            console.log("article categories", action.payload);
            state.categories = { ...action.payload };
        },
        setImages: (state, action) => {
            console.log("article images", action.payload);
            state.images = { ...action.payload };
        },
        setSeo: (state, action) => {
            console.log("article seo", action.payload);
            state.seo = { ...action.payload };
        }
    },
});

export const { setInformations, setCategories, setImages, setSeo } = articleSlice.actions;

export const getInformations = (state) => {
    console.log("state get INFORMATIONS", state.article.informations)
    return state.article.informations
}
export const getCategories = (state) => {
    console.log("state get CATEGORIES", state.article.categories)
    return state.article.categories
}
export const getImages = (state) => {
    console.log("state get IMAGES", state.article.images)
    return state.article.images
}
export const getSeo = (state) => {
    console.log("state get SEO", state.article.seo)
    return state.article.seo
}
export const getNewArticle = (state) => {
    console.log("state get SEO", state.article)
    return state.article
}
export default articleSlice.reducer;
