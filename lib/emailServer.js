const nodemailer = require("nodemailer");
const debug = require('debug')('spacehub:emailServer');

const __appConfig__ = require('../config');
const { emailAddr, serverConfigOAuth } = __appConfig__;



function send(name, email, subject, message) {
    async function main() {
    let transporter = nodemailer.createTransport(serverConfigOAuth);

    let from = `"${name} 🚀" ${email}`;
    let debugMsg = `Sending Message from ${from}`;
    debug(debugMsg);
    console.info(debugMsg);
    let emailReady = {
      from: emailAddr,
      to: emailAddr,
      subject: `${subject} | SpaceOutlook ${from}`,
      text: message,
      html: `
    <div>
        <h3>Message Automatically sent from SpaceOutlook Apps | Sender ${from} </h3>
    </div>
    <hr>
    <div>
      <b>${message}</b>
    </div>
      `,
    };

    return await transporter.sendMail(emailReady, function(err, data) {
        if (err) {
            let errMsg = `Error while sending email from ${from} | Error: ${err}`;
            debug(errMsg);
            console.error(errMsg);
            return Promise.reject(err);
        } else {
            let debugMsgSent = `Message sent: ${data.messageId}`;
            debug(debugMsgSent);
            console.info(debugMsgSent);
            return Promise.resolve(data);
        }
    });


  }
  return main();
}

module.exports = send;
