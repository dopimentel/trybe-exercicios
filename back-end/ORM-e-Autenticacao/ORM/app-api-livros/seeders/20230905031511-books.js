'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Joao e Maria',
        author: 'Irmãos Grimm',
        pageQuantity: 64,
        createdAt: new Date('2022-01-28T13:23:32.514Z'),
        updatedAt: new Date('2022-01-28T13:23:32.514Z'),
      },
      {
        title: 'Capitães da Areia',
        author: 'Jorge Amado',
        pageQuantity: 256,
        createdAt: new Date('2022-01-28T04:51:32.514Z'),
        updatedAt: new Date('2022-01-28T04:51:32.514Z'),
      },
      {
        title: 'O Cortiço',
        author: 'Aluísio Azevedo',
        pageQuantity: 256,
        createdAt: new Date('2022-01-28T19:37:32.514Z'),
        updatedAt: new Date('2022-01-28T19:37:32.514Z'),
      },
    ]);
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {});
  },
};