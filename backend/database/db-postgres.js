const { Client } = require('pg');

class Database {
    constructor() {
        if (!Database.instance) {
            this.client = new Client({
                user: process.env.USER_POSTGRESQL,
                host: process.env.HOST_POSTGRESQL,
                database: process.env.DATABASE_POSTGRESQL,
                password: process.env.PASSWORD_POSTGRESQL,
                port: process.env.PORT_POSTGRESQL,
            });
            this.connect();
            Database.instance = this;
        }

        return Database.instance;
    }

    connect() {
        this.client.connect(() => {
            console.log('PostgreSQL Database Connection OK');
        });
    }

    getClient() {
        return this.client;
    }
}

const database = new Database();

module.exports = database.getClient();