import { Client } from "../../node_modules/faunadb/index";

export const fauna = new Client({
    secret: process.env.FAUNADB_KEY,
});