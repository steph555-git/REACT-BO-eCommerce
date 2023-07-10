const db = require('../app')

const getAllLeadsCTRL = async (req, res) => {
    try {
        const query = `SELECT * FROM "BO_Schema"."TB_LEADS" ORDER BY "id" ASC`
        const result = await db.query(query)
        console.log('Query sent')
        return res.status(200).send(result.rows)
    } catch (error) {
        return res.status(500).send('Query Error')
    }
}

module.exports = getAllLeadsCTRL