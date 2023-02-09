"use strict";

/**
 * @module controllers/BMCreateNewSite
 */

var boguard = require("bc_library/cartridge/scripts/boguard");
var ISML = require("dw/template/ISML");
var Response = require("*/cartridge/scripts/util/Response");

function start() {
  ISML.renderTemplate("feeds/newSite.isml");
}

function handle() {
  const body = request.httpParameterMap;
  const siteData = {
    siteId: body.siteId.value,
    siteName: body.siteName.value,
    mainColor: body.mainColor.value,
    secondaryColor: body.secondaryColor.value,
  };
  const a = "";
  Response.renderJSON({ siteData });
}

exports.Start = boguard.ensure(["get"], start);
exports.Handle = boguard.ensure(["post"], handle);

// exports.Preview = boguard.ensure(['post'], preview);

// exports.GetAllSites = boguard.ensure(['get'], getAllSites);
