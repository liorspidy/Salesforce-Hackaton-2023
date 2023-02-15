"use strict";

/**
 * @module controllers/BMEditFooter
 */
var boguard = require("bc_library/cartridge/scripts/boguard");
var ISML = require("dw/template/ISML");
var server = require("server");
var Site = require("dw/system/Site");

function start() {
  //   var Site = require('dw/system/Site');
  //   var Response = require('bc_library/cartridge/scripts/util/Response');

  ISML.renderTemplate("feeds/addCustomHeaderTutorial.isml");

  // Response.renderJSON(sites);
}

exports.Start = boguard.ensure(["get"], start);
