import React, { useState } from 'react'
import StepperCompo from './StepperCompo'

const Step2 = () => {
    const [etapeActive] = useState(1);

    return (
        <div>
            <StepperCompo etapeActive={etapeActive} />
            Step2
        </div>
    )
}

export default Step2