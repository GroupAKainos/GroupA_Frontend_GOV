const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const chai = require("chai");
const expect = chai.expect;
const RegisterService = require ('../../../app/service/RegisterService');
const LoginService = require ('../../../app/service/LoginService');
const url = process.env.URL

const user ={
    email:"Something@anything.com",
    password:"Password!",
    role:"Admin"
}

describe('RegistrService', function () {
    describe('registerUser', function () {
        it('should return error 500', async () => {
            let mock = new MockAdapter(axios);

            mock.onPost(url+"/register").reply(500);

            let error = await RegisterService.registerUser(user.email, user.password, user.role)
        
            expect(error.message).to.equal('Could not register user')
        })
        it('should return error 400', async () => {
            let mock = new MockAdapter(axios);

            mock.onPost(url+"/register").reply(400);

            let error = await RegisterService.registerUser(user.email, user.password, user.role)
        
            expect(error.message).to.equal('Invalid data')
        })
    })
})

describe('LoginService', function () {
    describe('loginUser', function () {
        it('should return error 500', async () => {
            let mock = new MockAdapter(axios);

            mock.onPost(url+"/login").reply(500);

            let error = await LoginService.loginUser(user.email, user.password, user.role)
        
            expect(error.message).to.equal('Could not login user')
        })
        it('should return error 400', async () => {
            let mock = new MockAdapter(axios);

            mock.onPost(url+"/login").reply(400);

            let error = await LoginService.loginUser(user.email, user.password, user.role)
        
            expect(error.message).to.equal('Invalid data')
        })
    })
})