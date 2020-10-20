exports.config = {
  services: [
    [
      "lambdatest",
      {
        tunnel: true,
        lambdatestOpts: {
          logFile: "tunnel.log"
        }
      }
    ]
  ],
  user: 'amitkslambdatest',
  key: 'YP67KD00E5dag50FKkodeVLGXQSUwGlM8AW6SKbc5o4UElpLmv',
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    // name: 'Parallel Sample Test',
    // build: 'WebDriver Selenium Sample'
  },

  capabilities: [
    {
      platfrom: "win10",
      browserName: "chrome",
      version: "64.0"
    },
    {
    platform: "Android",
    platformVersion: "8",
    deviceName: "Galaxy S7",
    resolution: "1920x1080",
    appium_version: "1.17.0",
    timezone: "UTC-07:00",
    browserName:"Chrome",
    name: "Test webdriverio",
    },


    {
      platform: "win10",
      browserName: "firefox",
      version: "64.0"
    },
    {
      platform: "Android",
      platformVersion: "8",
      deviceName: "Galaxy S7",
      resolution: "1920x1080",
      appium_version: "1.17.0",
      timezone: "UTC-07:00",
      browserName:"Chrome",
      name: "Test webdriverio",
      },

     {
      platform: "Android",
      platformVersion: "8",
      deviceName: "Galaxy S7",
      resolution: "1920x1080",
      appium_version: "1.17.0",
      timezone: "UTC-07:00",
      browserName:"Chrome",
      name: "Test webdriverio",
      },
    
    
     {
      platform: "Android",
      platformVersion: "8",
      deviceName: "Galaxy S7",
      resolution: "1920x1080",
      appium_version: "1.17.0",
      timezone: "UTC-07:00",
      browserName:"Chrome",
      name: "Test webdriverio",
      },
    
     {
      platform: "Android",
      platformVersion: "8",
      deviceName: "Galaxy S7",
      resolution: "1920x1080",
      appium_version: "1.17.0",
      timezone: "UTC-07:00",
      browserName:"Chrome",
      name: "Test webdriverio",
      },
    
    
     {
      platform: "Android",
      platformVersion: "8",
      deviceName: "Galaxy S7",
      resolution: "1920x1080",
      appium_version: "1.17.0",
      timezone: "UTC-07:00",
      browserName:"Chrome",
      name: "Test webdriverio",
      },
    
     {
      platform: "Android",
      platformVersion: "8",
      deviceName: "Galaxy S7",
      resolution: "1920x1080",
      appium_version: "1.17.0",
      timezone: "UTC-07:00",
      browserName:"Chrome",
      name: "Test webdriverio",
      },
    
    
      {
        platform: "Android",
        platformVersion: "8",
        deviceName: "Galaxy S7",
        resolution: "1920x1080",
        appium_version: "1.17.0",
        timezone: "UTC-07:00",
        browserName:"Chrome",
        name: "Test webdriverio",
        },

        {
          platform: "Android",
          platformVersion: "8",
          deviceName: "Galaxy S7",
          resolution: "1920x1080",
          appium_version: "1.17.0",
          timezone: "UTC-07:00",
          browserName:"Chrome",
          name: "Test webdriverio",
          },
    
      {
          platform: "iOS",
          platformVersion: "13.6",
          deviceName: "iPhone 11",
          resolution: "1920x1080",
          appium_version: "1.17.0",
          timezone: "UTC-07:00",
          browserName:"Chrome",
          name: "Test webdriverio",
          },

{
          platform: "iOS",
          platformVersion: "13.6",
          deviceName: "iPhone 11",
          resolution: "1920x1080",
          appium_version: "1.17.0",
          timezone: "UTC-07:00",
          browserName:"Chrome",
          name: "Test webdriverio",
          },
    
    {
          platform: "iOS",
          platformVersion: "13.6",
          deviceName: "iPhone 7",
          resolution: "1920x1080",
          appium_version: "1.17.0",
          timezone: "UTC-07:00",
          browserName:"Chrome",
          name: "Test webdriverio",
          },
    
    {
          platform: "iOS",
          platformVersion: "13.6",
          deviceName: "iPhone 11",
          resolution: "1920x1080",
          appium_version: "1.17.0",
          timezone: "UTC-07:00",
          browserName:"Chrome",
          name: "Test webdriverio",
          },
    
    
    
    {
      platform: "win10",
      browserName: "internet explorer",
      version: "11.0"
    },
    
       {
      platform: "win10",
      browserName: "internet explorer",
      version: "11.0"
    },

      {
      platform: "win10",
      browserName: "internet explorer",
      version: "11.0"
    },
    
       {
      platform: "win10",
      browserName: "internet explorer",
      version: "11.0"
    },
    
       {
      platform: "win10",
      browserName: "internet explorer",
      version: "11.0"
    },
    

  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: "hub.lambdatest.com",
  port: 80,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd"
  }
};

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
