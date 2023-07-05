import React from 'react'

import { getEtapeActive } from '../../redux/slices/stepsGenerateArticleAI.slice'
import { useSelector } from 'react-redux'

import Step1 from './Step1';

const NewArticleAI = () => {
    const ETAPE_ACTIVE = useSelector(getEtapeActive)
    return (
        <>
            <Step1 etapeActive={ETAPE_ACTIVE} />
        </>
    )
}

export default NewArticleAI