/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    let getAll = (callback) => {

    let query = 'SELECT * FROM tweets';

    dbPoolInstance.query(query, (error, queryResult) => {
        if (error) {
            // invoke callback function with results after query has executed
            callback(error, null);
        } else {
            // invoke callback function with results after query has executed
            if (queryResult.rows.length > 0) {
                callback(null, queryResult.rows);
            } else {
                callback(null, null);
                }
            }
        });
    };

    let register = (callback,data) => {

    let query = 'INSERT INTO users (name,password) VALUES (hahaha,hahahah) RETURNING *';

    dbPoolInstance.query(query, (error, queryResult) => {
        if (error) {
            // invoke callback function with results after query has executed
            callback(error, null);
        } else {
            // invoke callback function with results after query has executed
            if (queryResult.rows.length > 0) {
                callback(null, queryResult.rows);
            } else {
                callback(null, null);
                }
            }
        });
    }

    return {
        getAll: getAll,
        register: register,
    };
};