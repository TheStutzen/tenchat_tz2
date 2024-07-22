const umzug = require('./umzug');

const runMigrations = async () => {
  try {
    await umzug;
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Migration failed', error);
    process.exit(1);
  }
};

runMigrations();
