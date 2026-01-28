require('dotenv').config();
const db = require('./config/database');

async function testDatabase() {
    console.log('Testing database connection...\n');
    
    // Test connection
    const isConnected = await db.testConnection();
    
    if (isConnected) {
        // Test query
        console.log('\nFetching sample data...');
        const result = await db.query('SELECT * FROM clinicians LIMIT 3');
        
        if (result.success) {
            console.log('\nClinicians:');
            console.table(result.data);
        }
        
        const patientResult = await db.query(
            'SELECT patient_id, age, sex, risk_category, risk_score FROM patients LIMIT 5'
        );
        
        if (patientResult.success) {
            console.log('\nPatients:');
            console.table(patientResult.data);
        }
    }
    
    // Close connection
    await db.closePool();
}

testDatabase();