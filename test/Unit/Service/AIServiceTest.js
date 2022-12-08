const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require("chai");
const expect = chai.expect;
const url = process.env.AIURL;
const aiService = require('../../../app/service/AIService')
const req = "This is a test. This should return a valid. Response."
const response = {
    sentences: ['This is a test.', 'This should return a valid.', 'Response.'],
    scores: [-0.77, -0.27, -0.39],
    formality: ['Informal', 'Informal', 'Informal']
}

describe('AI Service test', function () {
    it('should return valid response of formality scores when valid string passed across ', async () => {
        var mock = new MockAdapter(axios);

        mock.onPost(url, req).reply(200, response);

        var results = await aiService.checkformality(req);

        expect(results).to.deep.equal(response)
    })

    it('should return exception when 500 error returned from axios when calling check formality score', async () => {
        var mock = new MockAdapter(axios);
        let req = "123"
        mock.onPost(url, req).reply(500)

        var results = await aiService.checkformality(req);

        expect(results.message).to.equal('Failed to get formality scores')
    })
})
