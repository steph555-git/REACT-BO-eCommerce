import moment from 'moment'

export const changeDateformat = (jsonData) => {
    for (let i = 0; i < jsonData.length; i++) {
        const obj = jsonData[i]
        const originalDateCrea = obj.DATECREA
        const originalDateModif = obj.DATEMODIF
        const formattedDateCrea = moment(originalDateCrea).format('DD/MM/YY - HH:mm')
        const formattedDateModif = moment(originalDateModif).format('DD/MM/YY - HH:mm')
        obj.DATECREA = formattedDateCrea;
        obj.DATEMODIF = formattedDateModif
    }
    return jsonData
}