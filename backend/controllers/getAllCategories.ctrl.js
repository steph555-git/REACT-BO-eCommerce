const db = require('../app')

const getAllCategoriesCTRL = async (req, res) => {

    try {
        const query = {
            text: `SELECT * FROM "BO_Schema"."TB_CATEGORIES"`
        }
        const result = await db.query(query)
        console.log('Query sent')
        return res.status(200).send(result.rows)
    } catch (error) {
        return res.status(500).send('Query Error')
    }
}

module.exports = getAllCategoriesCTRL