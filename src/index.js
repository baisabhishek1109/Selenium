var webDriver = require('selenium-webdriver'),
    By = webDriver.By,
    until = webDriver.until;

var capabilities = webDriver.Capabilities.chrome();

var chromeOptions = {
    args:['--start-maximized']
};

capabilities.set('chromeOptions',chromeOptions);

var driver = new webDriver.Builder().withCapabilities(capabilities).build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();