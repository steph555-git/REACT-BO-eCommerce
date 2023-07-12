const express = require('express')
const app = express()
app.use(express.json())

const db = require('../app')

const updateLeadCTRL = async (req, res) => {
    const { id } = req.params
    const newData = req.body

    console.log('newData', newData)
    try {
        const queryUpdateLead = `UPDATE "BO_Schema"."TB_LEADS" SET 
        "FIRSTNAME" = $1,
        "LASTNAME" = $2,
        "EMAIL" = $3,
        "REQUEST" = $4,
        "TELEPHONE" = $5,
        "DATEMODIF" = $6,
        "STATUS" = $7,
        "OBJET" = $8 
      WHERE id = $9;`
        const result = await db.query(queryUpdateLead, [
            newData.FIRSTNAME,
            newData.LASTNAME,
            newData.EMAIL,
            newData.REQUEST,
            newData.TELEPHONE,
            newData.DATEMODIF,
            newData.STATUS,
            newData.OBJET,
            id
        ])
        return res.status(200).send('Lead updated successfully!')
    } catch (error) {
        return res.status(500).send('Database Error', error)
    }
}

module.exports = updateLeadCTRL