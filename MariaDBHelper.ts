import { Pool, PoolConfig, PoolConnection, QueryOptions, UpsertResult, createPool } from "mariadb";

class MariaDBHelper {
  #connection?: PoolConnection;
  #pool: Pool;

  constructor(poolParams: string | PoolConfig) {
    this.#pool = createPool(poolParams);
  }

  async getConnection(): Promise<void> {
    this.#connection = await this.#pool.getConnection();
  }

  async releaseConnection(): Promise<void> {
    if (this.#connection) return this.#connection.release();
  }

  async endPool(): Promise<void> {
    return this.#pool.end();
  }

  async executeQuery(query: string | QueryOptions, values?: any[]): Promise<any> {
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

  async executeBatch(query: string | QueryOptions, values: any[] = []): Promise<void | UpsertResult | UpsertResult[]> {
    try {
      if (!this.#connection)
        throw new Error(
          "No connection has been stablished. Please execute getConection() method before trying to access the DB"
        );
      return this.#connection.batch(query, values).catch((err) => console.log(err));
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error(err);
      }
    }
  }
}

export default MariaDBHelper;
