'use strict';

/**
 * @module controllers/BMEditFooter
 */
var boguard = require('bc_library/cartridge/scripts/boguard');
var ISML = require('dw/template/ISML');
var server = require('server');
var customFooterForm = server.forms.getForm('customFooter');
function start() {
  //   var Site = require('dw/system/Site');
  //   var Response = require('bc_library/cartridge/scripts/util/Response');

  ISML.renderTemplate('feeds/editFooter.isml');

  // Response.renderJSON(sites);
}

function handleForm() {
  const body = request.httpParameterMap;

  var CustomObjectMgr = require('dw/object/CustomObjectMgr');
  var Transaction = require('dw/system/Transaction');

  //create storage service

  Transaction.begin();
  try {
    var CustomObject = CustomObjectMgr.createCustomObject(
      'siteCustomColor',
      body.backgroundColor.value
    );

    CustomObject.custom.textColor = body.textColor.value;
    var co = CustomObject;

    Transaction.commit();
    ISML.renderTemplate('home/homePage');
    // res.render('home/homePage');
  } catch (e) {
    Transaction.rollback();
    ISML.renderTemplate('home/homePage');
    // res.render('home/homePage');
    // res.print('fail');
  }
}

exports.Start = boguard.ensure(['get'], start);

exports.HandleForm = boguard.ensure(['post'], handleForm);

// exports.GetAllSites = boguard.ensure(['get'], getAllSites);
