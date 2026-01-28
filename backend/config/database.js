/*
 * Database.js
 * This file is responsible for creating and managing a reusable MySQL
 * connection pool for the application.
 *
 * This allow controllers to use the same connection instead of creating
 * new ones each time
 */

const mysql = require('mysql2');

// Create a connection pool
// A pool manages multiple connections and reuses them efficiently
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'diabetic_db',
  waitForConnections: true,
  connectionLimit: 10,  // Maximum 10 simultaneous connections
  queueLimit: 0         // No limit on queued connection requests
});

// Promise based connection
// Convert pool to use promises instead of callbacks
const promisePool = pool.promise();

// Function to test if database connection works
async function testConnection() {
  try {
    // Try to execute a simple query
    const [rows] = await promisePool.query('SELECT 1 + 1 AS result');
    console.log(' Database connected successfully!');
    console.log(`   Test query result: ${rows[0].result}`);
    return true;
  } catch (error) {
    console.error(' Database connection failed!');
    console.error('   Error:', error.message);
    console.error('\n   Troubleshooting:');
    console.error('   1. Is MySQL running?');
    console.error('   2. Is DB_PASSWORD correct in .env?');
    console.error('   3. Does database "diabetic_db" exist?');
    console.error('   4. Check MySQL user permissions\n');
    return false;
  }
}

// Helper functions for queries

// Execute a SELECT query
async function query(sql, params = []) {
  try {
    const [rows] = await promisePool.query(sql, params);
    return { success: true, data: rows };
  } catch (error) {
    console.error('Database query error:', error.message);
    return { success: false, error: error.message };
  }
}

// Execute an INSERT/UPDATE/DELETE query
async function execute(sql, params = []) {
  try {
    const [result] = await promisePool.execute(sql, params);
    return { success: true, data: result };
  } catch (error) {
    console.error('Database execute error:', error.message);
    return { success: false, error: error.message };
  }
}

// Get a single row
async function queryOne(sql, params = []) {
  try {
    const [rows] = await promisePool.query(sql, params);
    return { success: true, data: rows[0] || null };
  } catch (error) {
    console.error('Database query error:', error.message);
    return { success: false, error: error.message };
  }
}

// Close all connections when app shuts down
async function closePool() {
  try {
    await promisePool.end();
    console.log('Database connection pool closed');
  } catch (error) {
    console.error('Error closing database pool:', error.message);
  }
}

// Exports
module.exports = {
  pool: promisePool,      // Direct access to pool if needed
  testConnection,         // Test if database is connected
  query,                  // Execute SELECT queries
  execute,                // Execute INSERT/UPDATE/DELETE
  queryOne,               // Get single row
  closePool               // Close connections on shutdown
};