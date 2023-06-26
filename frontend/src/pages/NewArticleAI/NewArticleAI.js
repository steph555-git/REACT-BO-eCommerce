import React, { useState } from 'react'

import StepperCompo from './StepperCompo';
import Step1 from './Step1';

const NewArticleAI = () => {
    const [etapeActive, setEtapeActive] = useState(0);

    return (
        <>

            <StepperCompo etapeActive={etapeActive} />

            <Step1 />

        </>
    )
}

export default NewArticleAI