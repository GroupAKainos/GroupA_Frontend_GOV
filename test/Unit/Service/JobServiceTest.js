const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require("chai");
const expect = chai.expect;
const EmployeeService = require ('../../../app/service/JobService')

const jobroles ={
    jobName:"Test",
    jobResponsibility:"Test"
}
const listdata = {
  listID: 1,
  listName:"data of list"
}
const newrole = {
  "jobName": "This is a test",
  "jobResponsibility": "This is a test value being added",
  "specSummary": "This is also a test",
  "bandLevelId": 1,
  "jobFamilyId": 1,
  "capabilityId": 1
}
const competencies ={
  competencyID: 1,
  subheading:"Test",
  information:"Test Information"
}

const updRole = {
  jobid: 1,
  jobName: "Test",
  specSummary: "Test",
  capabilityId: 1,
  bandLevelID: 1,
  jobResponsibility: "Test"
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
describe('getRoleForUpdate', function () {
  it('should return role to be updated', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/viewupdatejob/1").reply(200, updRole);

    var results = await EmployeeService.viewjob(1);
    
    expect(results).to.deep.equal(updRole)
  })

  it('should throw exception when 500 error returned from axios when invalid role is passed', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/viewupdatejob/0").reply(500);

    var error = await EmployeeService.viewjob(0);
        expect(error.message).to.equal('Failed to get job roles')
  })
})

describe('postAddNewJobRole', function () {
  it('should return valid list of band levels', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/populatebandlevelist").reply(200, listdata);

    var results = await EmployeeService.poulatebandlevellist()
    
    expect(results).to.deep.equal(listdata)
  })

  it('should throw exception when 500 error returned from axios when calling list band levels', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/populatebandlevelist").reply(500);

    var error = await EmployeeService.poulatebandlevellist()
    
    expect(error.message).to.equal('Failed to get list of band levels')
  })

  it('should return valid list of capabilites', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/populatecapabiltylist").reply(200, listdata);

    var results = await EmployeeService.poulatecapabiltynamelist()
    
    expect(results).to.deep.equal(listdata)
  })

  it('should throw exception when 500 error returned from axios when calling list capabilities', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/populatecapabiltylist").reply(500);

    var error = await EmployeeService.poulatecapabiltynamelist();
    
    expect(error.message).to.equal('Failed to get list of capabilites')
  })

  it('should return valid list of families', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/populatefamilylist").reply(200, listdata);

    var results = await EmployeeService.populatefamilylist()
    
    expect(results).to.deep.equal(listdata)
  })

  it('should throw exception when 500 error returned from axios when calling list families', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/populatefamilylist").reply(500);

    var error = await EmployeeService.populatefamilylist();
    
    expect(error.message).to.equal('Failed to get list of families')
  })

  it('should return added job role from axios when valid data is passed', async () => {
    var mock = new MockAdapter(axios);
      let body = { 
      jobName: 'This is a test',
      jobResponsibility: "This is a test value being added",
      specSummary: "This is also a test",
      bandLevelId: 1,
      jobFamilyId: 1,
      capabilityId: 1
    }
    mock.onPost(url+"/addnewrole", body).reply(201, body)

    var results = await EmployeeService.addnewrole(body);
   
    expect(results).to.deep.equal(newrole)
  })

  it('should return exception when 500 error returned from axios when calling addNewRole', async () => {
    var mock = new MockAdapter(axios);
      let body = { 
      jobName: 'This is a test',
      jobResponsibility: "This",
      specSummary: "This is also a test",
      bandLevelId: 1,
      jobFamilyId: 1,
      capabilityId: 1
    }
    mock.onPost(url+"/addnewrole", body).reply(500)

    var results = await EmployeeService.addnewrole(body);
   describe('getRoleForUpdate', function () {
  it('should return role to be updated', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/viewupdatejob/1").reply(200, updRole);

    var results = await EmployeeService.viewjob(1);
    
    expect(results).to.deep.equal(updRole)
  })

  it('should throw exception when 500 error returned from axios when invalid role is passed', async () => {
    var mock = new MockAdapter(axios);

    mock.onGet(url+"/viewupdatejob/0").reply(500);

    var error = await EmployeeService.viewjob(0);
    
    expect(results.message).to.equal('Failed to add new role')
  })
})

    expect(error.message).to.equal('Failed to get job roles')
  })
})

})