const seleniumServer = require('selenium-server');
module.exports = {
  src_folders: ['tests/'],
  output_folder: './results',
  live_output: true,
  page_objects_path: "./pages",

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: './results',
    cli_args: {
      'webdriver.chrome.driver': './node_modules/.bin/chromedriver'
      // 'webdriver.gecko.driver': './node_modules/.bin/geckodriver'
    }
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      // selenium_host: 'selenium-dev-cs.dev.blippar.com',
      selenium_host: '127.0.0.1',
      selenium_port: 4444,
      silent: true,
      disable_colors: false,
      disable_notifications: true,
      request_timeout_options: {
          timeout: 15000,
          retry_attempts: 2
      },
      screenshots: {
        enabled: true,
        path: './results/screenshots',
        on_failure: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: false,
        acceptSslCerts: true
      }
    },

    //For Parallel & Multi Browser support execution
    chrome: {
        desiredCapabilities: {
            browserName: 'chrome',
            javascriptEnabled: false,
            acceptSslCerts: true,
            chromeOptions: {
              args: [
                "window-size=360,640",
                "--user-agent=Googlebot/2.1",
                "--no-sandbox",
                "--verbose",
                "--disable-notifications"
              ]
            }
        }
    },
    firefox: {
        desiredCapabilities: {
            browserName: 'firefox',
            javascriptEnabled: true,
            acceptSslCerts: true
        }
    }
  }
};
