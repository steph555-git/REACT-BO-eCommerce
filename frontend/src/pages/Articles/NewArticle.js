import React from 'react'

import Header from '../../components/Articles/Header';
import VerticalTabs from '../../components/Nav/VerticalTabs';

import { getNewArticle } from '../../redux/slices/article.slice'
import { useSelector } from 'react-redux'

const NewArticle = () => {

    const dataNewArticle = useSelector(getNewArticle)

    const handleApply = () => {
        // Appel a l'api pour enregistrer les données de l'articles 'dataNewArticle'
        console.log(dataNewArticle)
    }
    return (
        <>
            <Header title='New Article' handleApply={handleApply} />
            <VerticalTabs mode='creation' />
        </>
    )
}

export default NewArticle