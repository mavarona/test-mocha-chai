describe.only('Hooks', () => {
    before(() => console.log('before all init the test once'));
    after(() => console.log('after to finish test once'));
    beforeEach(() => console.log('before execute all its'));
    afterEach(() => console.log('after all its'));
    it('test 1', () => console.log('test 1'));
    it('test 2', () => console.log('test 2'));
});