module.exports = {
  "core": {
    "name": "authmagic-timerange-stateless-core"
  },
  "plugins": {
    "authmagic-email-plugin": {
      "name": "authmagic-email-plugin"
    }
  },
  "params": {
    "authmagic-email-plugin": {
      "isTest": true,
      "mailer": {
        "auth": {
          "user": "",
          "pass": ""
        },
        "host": "smtp.ethereal.email",
        "port": 587,
        "secure": false
      },
      "from": "AuthMailer",
      "subject": "Your Magic Link"
    },
    "authmagic-timerange-stateless-core": {
      "duration": 300,
      "key": "e7516401bc1a841b",
      "sendKeyPlugin": "authmagic-email-plugin",
      "expiresIn": 1200
    }
  },
  "port": 3000,
  "theme": {
    "name": "authmagic-link-email-phone-bootstrap-theme"
  }
};