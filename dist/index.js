// MariaDBHelper.js
import { createPool } from "mariadb";
var MariaDBHelper = class {
  #connection;
  #pool;
  constructor(poolParams) {
    this.#pool = createPool(poolParams);
  }
  async getConnection() {
    this.#connection = await this.#pool.getConnection();
  }
  async releaseConnection() {
    return this.#connection.release();
  }
  async endPool() {
    return this.#pool.end();
  }
  async executeQuery(query, values = []) {
    try {
      if (!this.#connection)
        throw new Error(
          "No connection has been stablished. Please execute getConection() method before trying to access the DB"
        );
      return this.#connection.query(query, values).catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
      return "err";
    }
  }
  async executeBatch(query, values) {
    try {
      if (!this.#connection)
        throw new Error(
          "No connection has been stablished. Please execute getConection() method before trying to access the DB"
        );
      return this.#connection.batch(query, values).catch((err) => console.log(err));
    } catch (err) {
      console.error(err);
      return "err";
    }
  }
};
var MariaDBHelper_default = MariaDBHelper;

// index.ts
var maria_db_helper_default = MariaDBHelper_default;
export {
  maria_db_helper_default as default
};
//# sourceMappingURL=index.js.map