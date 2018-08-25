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
      "key": "dd25293f354099c8",
      "sendKeyPlugin": "authmagic-email-plugin",
      "expiresIn": "20m",
      "refreshExpiresIn": "2d",
      "securityKeyRule": {
        "length": 6,
        "charset": "numeric"
      }
    }
  },
  "port": 3000,
  "theme": {
    "name": "authmagic-link-email-phone-bootstrap-theme"
  }
};