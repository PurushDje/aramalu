const fs = require("fs-extra");


try {
    fs.ensureDir("test-results-html");
    fs.emptyDir("test-results-html");

    fs.ensureDir("test-results-json");
    fs.emptyDir("test-results-json");
} catch (error) {
    console.log("Folder not created :" +error);    
}