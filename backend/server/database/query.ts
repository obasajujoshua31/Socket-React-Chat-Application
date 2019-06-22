interface Query {
    sql: string;
    values?: any[];
}

export interface Results {
    insertId: number
}
export default Query
