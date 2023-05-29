const config = {
    db: {
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 5432,
        username: process.env.USER || 'postgres',
        password: process.env.PASSWORD || 'root',
        database: process.env.DATABASE || 'test'
    },
    apiPort: 3100
};

module.exports = config;