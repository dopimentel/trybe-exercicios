/* eslint-disable max-lines-per-function */
const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);
const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      // eslint-disable-next-line sonarjs/no-duplicate-string
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      // eslint-disable-next-line sonarjs/no-duplicate-string
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });
  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get('/chocolates');
      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolates/total retorna a quantidade total de chocolates',
  function () {
    it('Retorna status 200 com a chave totalChocolates', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: JSON
        .parse(mockFile).chocolates.length });
    });
  });

  describe('Usando o método GET em /chocolates/search retorna os chocolates filtrados',
  function () {
    it('Caso pesquise por Mo retorna status 200 com a lista filtrada correspondente', async function () {
      const output = [
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(output);
    });

    it('Caso pesquise por ZZZ retorna status 404 com a lista vazia', async function () {
      const response = await chai
        .request(app)
        .get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id para atualizar o chocolate com id 1',
  function () {
    it('/PUT - Deve retornar status 200 e o chocolate de id 1 atualizado', async () => {
      const response = await chai
        .request(app)
        .put('/chocolates/1')
        .send(
          { 
          name: 'Mint Pretty Good',
          brandId: 2,
          },
          );
      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ id: 1, name: 'Mint Pretty Good', brandId: 2 });
    });
  });
});
