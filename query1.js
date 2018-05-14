
const config = {
    user: "sa",
    password: "Precise123",
    server: "localhost", 
    port:"1433",
    database: "RVI"
}

const sql = require('mssql')
async () => {
    try {
        console.log('Test 1')
        const pool = await sql.connect('mssql://sa:Precise123@localhost/RVI')
        const result = await sql.query('select * from InspectionReport')
        console.dir(result)
    } catch (err) {
        // ... error checks
        console.log('Error na jaa')
    }
}