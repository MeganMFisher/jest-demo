const axios = require('axios');

describe('async tests:', function() {

    it('no async and await', () => {
        axios('https://swapi.co/api/people/1')
        .then((response) => {
            expect(response.data.name).toEqual('Luke Skywalker');
        })
    });

    it('works with async/await', async () => {
        const response = await axios('https://swapi.co/api/people/1');
        expect(response.data.name).toEqual('Luke Skywalker');
    });

    it('multiple awaits', async () => {
        const response = await axios('https://swapi.co/api/people/2');
        const planetResponse = await axios('https://swapi.co/api/planets/3/');
        expect(response.data.name).toEqual('C-3PO');
        expect(planetResponse.data.name).toEqual('Yavin IV')
    });
    

})