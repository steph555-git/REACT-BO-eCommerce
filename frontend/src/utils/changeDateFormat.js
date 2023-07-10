import moment from 'moment'

export const changeDateformat = (jsonData) => {
    for (let i = 0; i < jsonData.length; i++) {
        const obj = jsonData[i]
        const originalDate = obj.DATE
        const formattedDate = moment(originalDate).format('DD/MM/YY - HH:mm')
        obj.DATE = formattedDate;
    }
    return jsonData
}