const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./reports/cucumber/",
    reportPath: "./reports/multi-reporter/",
    reportName: "Playwright Automation Report",
    pageTitle: "Swag Labs Web Automation",
    saveCollectedJSON: "true",
    displayDuration: "true",
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "Swag Labs" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "Smoke-1" }
        ],
    },
});