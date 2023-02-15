"use strict";

/**
 * @module controllers/BMEditFooter
 */
var boguard = require("bc_library/cartridge/scripts/boguard");
var ISML = require("dw/template/ISML");
var server = require("server");
var Site = require("dw/system/Site");
var customFooterForm = server.forms.getForm("customFooter");
function start() {
  //   var Site = require('dw/system/Site');
  //   var Response = require('bc_library/cartridge/scripts/util/Response');

  ISML.renderTemplate("feeds/editFooter.isml");

  // Response.renderJSON(sites);
}

function handleForm() {
  const body = request.httpParameterMap;

  var CustomObjectMgr = require("dw/object/CustomObjectMgr");
  var Transaction = require("dw/system/Transaction");

  //create storage service

  var currentSite = Site.getCurrent();
  var siteName = currentSite.name;

  var checkLastId = CustomObjectMgr.getAllCustomObjects("siteColor").getCount();
  const fixedCheckLastId = checkLastId ? checkLastId + 1 : 1;

  Transaction.begin();
  try {
    var CustomObject = CustomObjectMgr.createCustomObject(
      "siteColor",
      fixedCheckLastId.toString()
    );

    CustomObject.custom.siteName = siteName;
    CustomObject.custom.backgroundColor = body.backgroundColor.value;
    CustomObject.custom.textColor = body.textColor.value;
    var co = CustomObject;

    Transaction.commit();
    ISML.renderTemplate("feeds/editFooter.isml", {
      status: "Footer Colors Successfully Changed",
    });

    // res.render('home/homePage');
  } catch (e) {
    Transaction.rollback();
    ISML.renderTemplate("feeds/editFooter.isml", {
      status: "Failed To Update Footer Colors",
    });

    // res.render('home/homePage');
    // res.print('fail');
  }
}

exports.Start = boguard.ensure(["get"], start);

exports.HandleForm = boguard.ensure(["post"], handleForm);

// exports.GetAllSites = boguard.ensure(['get'], getAllSites);
