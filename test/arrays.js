var expect = require('chai').expect;

describe.only('Arrays test', () => {
    const array = [1, 2, 4, 6, 8];
    // Una prueba
    it('Los valores del array son iguales', () => {
        const res = [1, 2, 4, 6, 8];
        expect(String(array)).to.equal('1,2,4,6,8');
        expect(array).to.eql(res);
        expect(array).to.deep.equal(res);
        expect(array).to.have.ordered.members(res);
    });

    it('Contiene el valor "2" el array', () => {
        expect(String(array).indexOf('2,') > -1).to.equal(true);
        expect(array).to.include(2);
        expect(array).to.be.an('array').that.includes(2);
    });
    it('Incluye todos los números o alguno de ellos', () => {
        // Incluye esos números con duplicados (no tienen que estar todos)
        expect(array).to.include.members([1, 1, 1, 4]);
        expect(array).to.include.members([1, 2, 4, 6, 8, 1, 2, 4, 6, 8]);
    });
    it('Contiene los valores independientemente del orden', () => {
        expect(array).to.have.members([1, 2, 4, 6, 8]);
        expect(array).to.have.members([1, 2, 4, 8, 6]);
        expect(array).to.have.members([1, 8, 6, 2, 4]);
    });
    it('Tiene una longitud de 5 carácteres', () => {
        expect(array).to.have.lengthOf(5);
    });
});