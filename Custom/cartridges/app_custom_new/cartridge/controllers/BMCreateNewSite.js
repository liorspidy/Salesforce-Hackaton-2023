"use strict";

/**
 * @module controllers/BMCreateNewSite
 */

var boguard = require("bc_library/cartridge/scripts/boguard");
var ISML = require("dw/template/ISML");
var Response = require("*/cartridge/scripts/util/Response");
var CSRFProtection = require("dw/web/CSRFProtection");

function start() {
  const token = CSRFProtection.generateToken();
  const a = "";
  ISML.renderTemplate("feeds/newSite.isml", { token });
}

const convertNameToId = (str) => {
  str = str.trim();
  str = str.toLowerCase().replace(/[^a-z\s]/g, "");
  return str.replace(/\s(?=\S)/g, "_").trim();
};

function handle() {
  const body = request.httpParameterMap;
  const siteId = convertNameToId(body.siteName.value);
  const siteData = {
    siteId: siteId,
    siteName: body.siteName.value,
    mainColor: body.mainColor.value,
    secondaryColor: body.secondaryColor.value,
  };
  // const FormData = require("form-data");
  // const formData = new FormData();
  const a = "";
  ISML.renderTemplate("feeds/siteCreated", { siteId: siteId });
  // Response.renderJSON({ siteData });
}

exports.Start = boguard.ensure(["get"], start);
exports.Handle = boguard.ensure(["post"], handle);

// exports.Preview = boguard.ensure(['post'], preview);

// exports.GetAllSites = boguard.ensure(['get'], getAllSites);
