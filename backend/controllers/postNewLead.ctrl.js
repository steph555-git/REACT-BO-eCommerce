const db = require('../app')

const postNewLeadCTRL = async (req, res) => {
    try {
        const queryForNewLead = `INSERT INTO "BO_Schema"."TB_LEADS" ("FIRSTNAME","LASTNAME","EMAIL","REQUEST","TELEPHONE","DATE") 
        VALUES 
        ('Stephane', 'Lugassy', 'azeryty@azerty.com', 'Bonjour, je mappelle stephane et jhabite à paris', '0169480622', '09/07/1979');
            `
        const result = await db.query(queryForNewLead)
        console.log('New lead saved', result)
        return res.status(200).send('New lead added successfully')
    } catch (error) {
        return res.status(500).send('Database Error')
    }
}

module.exports = postNewLeadCTRL