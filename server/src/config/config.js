module.exports = {
    port: process.env.port || 8081,
    db: {
        database: process.env.DB_NAME || 'musictracker',
        user: process.env.DB_USER || 'musictracker',
        password: process.env.DB_PASSWORD || 'musictracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './musictracker.sqlite'
        }
    }, 
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
}