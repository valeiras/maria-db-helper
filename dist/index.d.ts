declare class MariaDBHelper {
    constructor(poolParams: any);
    getConnection(): Promise<void>;
    releaseConnection(): Promise<any>;
    endPool(): Promise<void>;
    executeQuery(query: any, values?: any[]): Promise<any>;
    executeBatch(query: any, values: any): Promise<any>;
    #private;
}

export { MariaDBHelper as default };
