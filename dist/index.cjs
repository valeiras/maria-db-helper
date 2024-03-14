"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var maria_db_helper_exports = {};
__export(maria_db_helper_exports, {
  default: () => maria_db_helper_default
});
module.exports = __toCommonJS(maria_db_helper_exports);

// MariaDBHelper.js
var import_mariadb = require("mariadb");
var MariaDBHelper = class {
  #connection;
  #pool;
  constructor(poolParams) {
    this.#pool = (0, import_mariadb.createPool)(poolParams);
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
//# sourceMappingURL=index.cjs.map