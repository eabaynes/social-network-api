// initialize the server here and connect to the database
import initServer from './server.js';
import initDBConn from './conn.js';

// initialize the database connection
initDBConn();

// initialize the server
initServer();