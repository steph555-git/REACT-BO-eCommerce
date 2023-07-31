import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Articles/Header';
import VerticalTabs from '../../components/Nav/VerticalTabs';

import { getFetchBackendDataBase } from '../../utils/fetchBackendDataBase'
import { changeDateformat } from '../../utils/changeDateFormat'

import styles from './EditArticles.module.css'


const EditArticles = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [dataFetched, setDataFetched] = useState({ ARCHIVE: false, STATUS: '' })

    const { id } = useParams()

    const handleApply = () => {
        console.log('Apply')
    }
    useEffect(() => {
        const fetchArticleData = async () => {
            try {
                setIsLoading(true)
                const jsonData = await getFetchBackendDataBase('article', id)
                const newJsonData = changeDateformat(jsonData)
                console.log(newJsonData[0])

                setDataFetched(newJsonData[0])

                setIsLoading(false)

            } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
                setIsLoading(false)
            }
        };
        fetchArticleData();
    }, [id])

    return (
        <>
            <Header title={`Article #${id}`} handleApply={handleApply} />
            <VerticalTabs mode='edition' dataFetched={dataFetched} />


        </>
    )
}

export default EditArticles