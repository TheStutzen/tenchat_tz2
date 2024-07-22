const {Sequelize} = require('sequelize')


    async function up({context: queryInterface}) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'test',
        email: 'test@bk.ru',
        balance: 10000,
        createdAt: new Date('2024-07-19 06:43:20.510')
      }
    ]);
  }

  async function down({context: queryInterface}) {
    await queryInterface.bulkDelete('users', { email: 'test@bk.ru' });
  }

module.exports = {up, down}
