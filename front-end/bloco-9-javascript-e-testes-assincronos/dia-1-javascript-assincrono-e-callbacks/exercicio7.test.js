const uppercase = require("./exercicio7");

describe('Exercicico 7', () => {

    it('Testa se ao receber a string "maria", temos "MARIA" no retorno', (done) => {
        uppercase('maria', (str) => {
            try {
                expect(str).toBe('MARIA');
                done();
            } catch (error) {
                done(error);
            }
            
        })
        
    })
})