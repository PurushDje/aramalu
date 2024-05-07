const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-resutls-json",
  reportPath: "./",
  reportName:"Tutorial Automation Report",
  pageTitle:"Self Learning",
  displayDuration:true,
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Purush - PC",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Scenario Info",
    data: [
      { label: "Project", value: "Self Learning" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "MVP-1" }
     ],
  },
});