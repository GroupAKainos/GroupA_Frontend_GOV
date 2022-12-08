# GroupA_API
GroupA Frontend

Config
---
1. The following environment variables need to be set to enable communication between the API:

```
URL="http://localhost:8080/api"
AIURL="https://i9ie7dtl73.execute-api.eu-west-2.amazonaws.com/Prod/formality-score/"

```

1. The following environment variables need to be set allow for decryption:

```
PASS_SECRET_KEY
ENCODED_SECRET_KEY
```
How to start the frontend application
---

1. Run `npm install` to build your application
1. Start application with `npm start`
1. The first time you run the application a prompt will appear just input yes or no
1. To check if its running visit `http://localhost:3000/login`


Tests
---

1. Run `npm test` to run service tests

For selenium automated testing do the following:

```
1. Install https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd?hl=en 
2. Add extension
3. Download Group A Selenium Tests from ui-testing folder
4. Open selenium ide from extensions tab and select open existing project
5. Select Group A Selenium tests from where you downloaded it too
6. Ensure front and back end are running
7. Select run all tests in Selenium IDE
```
