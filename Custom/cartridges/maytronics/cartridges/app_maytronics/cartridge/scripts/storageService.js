'use strict';

var CustomObjectMgr = require('dw/object/CustomObjectMgr');
function storeNewsletterObject(newsletterForm) {
  var CustomObject = CustomObjectMgr.createCustomObject(
    'NewsletterSubscription',
    newsletterForm.email.value
  );

  CustomObject.custom.lastName = newsletterForm.lname.value;
  CustomObject.custom.firstName = newsletterForm.fname.value;

  return CustomObject;
}

module.exports = { storeNewsletterObject: storeNewsletterObject };
