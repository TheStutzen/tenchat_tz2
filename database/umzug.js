const { Umzug, SequelizeStorage } = require('umzug');
const { sequelize } = require('./db');


// Create Umzug instance
const migrator = new Umzug({
    migrations: {glob: 'migrations/*.js'},
    context: sequelize.getQueryInterface(),
    storage: new SequelizeStorage({
        sequelize,
    }),
    logger: console,
});

// Run Umzug CLI
(async () => {
    try {
        await migrator.up();
        console.log('Migrations executed successfully');
    } catch (error) {
        console.error('Migration error:', error);
    }
})();


