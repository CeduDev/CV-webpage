import { Pool } from "../deps.js";
import { config } from "../config/config.js";

const CONCURRENT_CONNECTIONS = 4;
const connectionPool = new Pool(config.database, CONCURRENT_CONNECTIONS);

//database queries are handled through this function
const executeQuery = async(query, ...params) => {
    const pool = await connectionPool.connect();
    try {
        return await pool.query(query, ...params);
    } catch (e) {
        console.log(e);
    } finally {
        pool.release();
    }

    return null;
};

export { executeQuery };