'use strict';

var server = require('server');

var newsletterForm = server.forms.getForm('srvnewsletter');
var HookMgr = require('dw/system/HookMgr');

server.get('Start', (req, res, next) => {
  newsletterForm.clear();
  // 7-2 render the newsletter signup form, passing in the form
  res.render('newsletter/srvnewslettersignup', {
    newsletterForm: newsletterForm,
  });

  next();
});

function validateEmail(email) {
  var regex = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
  return regex.test(email);
}

server.post('HandleForm', (req, res, next) => {
  var Resource = require('dw/web/Resource');
  var storageService = require('*/cartridge/scripts/storageService');
  var Transaction = require('dw/system/Transaction');
  if (validateEmail(newsletterForm.email.value)) {
    Transaction.begin();
    try {
      var co = storageService.storeNewsletterObject(newsletterForm);

      res.render('newsletter/srvnewslettersuccess.isml', {
        firstName: newsletterForm.fname.value,
        lastName: newsletterForm.lname.value,
        newsletterObject: co,
      });

      Transaction.commit();

      HookMgr.callHook('app.email', 'send', newsletterForm.email.value);
    } catch (e) {
      Transaction.rollback();
      res.setViewData({
        emailerror: Resource.msg(
          'error.message.email.invalid.value',
          'forms',
          null
        ),
      });
      res.render('newsletter/srvnewslettersignup', {
        newsletterForm: newsletterForm,
      });
    }
  } else {
    res.setViewData({
      emailerror: Resource.msg(
        'error.message.parse.email.profile.form',
        'forms',
        null
      ),
    });
    res.render('newsletter/srvnewslettersignup', {
      newsletterForm: newsletterForm,
    });
  }
  next();
});

module.exports = server.exports();
