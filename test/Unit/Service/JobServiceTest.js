const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require("chai");
const expect = chai.expect;
const EmployeeService = require ('../../../app/service/JobService')

const jobroles ={
    jobName:"Test",
    jobResponsibility:"Test"
}

const competencies ={
  competencyID: 1,
  subheading:"Test",
  information:"Test Information"
}

const url = process.env.URL;

describe('EmployeeService', function () {
    describe('getViewJobRoles', function () {
        it('should return jobroles', async () => {
            var mock = new MockAdapter(axios);
  
            mock.onGet(url+"/viewjobroles").reply(200, jobroles);
    
            var results = await EmployeeService.viewjobroles();
            
            expect(results).to.deep.equal(jobroles)
          })

          it('should throw exception when 500 error returned from axios when calling viewJobRoles', async () => {
            var mock = new MockAdapter(axios);
    
            mock.onGet(url+"/viewjobroles").reply(500);
    
            var error = await EmployeeService.viewjobroles();
            
            expect(error.message).to.equal('Failed to get job roles')
          })
})
describe('getCompetenciesPerBandLevel', function () {
  it('should return competencies for a valid band', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/viewcompetency/1").reply(200, competencies);

    var results = await EmployeeService.viewcompetency(1);
    
    expect(results).to.deep.equal(competencies)
  })

  it('should throw exception when 500 error returned from axios when invalid role is passed', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/viewcompetency/9").reply(500);

    var error = await EmployeeService.viewcompetency(9);
    
    expect(error.message).to.equal('Failed to get comptencies for band')
  })

})

})