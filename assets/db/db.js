import mysql from 'mysql2/promise'

export default function handlers(req, res) {
    const dbConnection = await mysql.createConnection({
        host: 'localhost',
        database: 'Facts_Products',
        user: 'root',
    })


    try {
        const query = `SELECT * FROM Produts`
        const values = []
        const [results] = await dbConnection.execute(query, values)
    }
    catch(error) {
        res.status(500).json({error: error.message})
    }

}