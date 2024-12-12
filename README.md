SwagLabs Automation Suite

Pre-requisites:
- node is installed (v20.10.0 was used) 

To run:
npm ci
npm test

Features of framework:
- Scenarios are written in BBD format (tests/features/purchases.feature).
- Multiple environment switch (done by adding switching parameter in package.json).
- Multiple browser switch (done by adding switching parameter in package.json).
- Can run sub suites by using tags passed in via package.json.
- 3rd party reporter with dashboard (reports/multi-reporter/index.html).
- Sample of report output is at /reports/multi-reporter-sample/index.html
- Screenshots for all steps can be turn on or off from parameter in package.json.
- Will only display screeshots for failed scenarios if all screenshots are turn off.
- Will run 3 scenarios in parrallel if more scenarios are added
- Page Object model is used.
- All locators are keep together in a seperate file.

There is also a sample jenkins config run file that can be used to run this suite in jenkins job.
Further config is then require to store reports as artifacts and display reports on jenkins.
