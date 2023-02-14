'use strict';

/**
 * @module controllers/BMCreateNewSite
 */

var boguard = require('bc_library/cartridge/scripts/boguard');
var ISML = require('dw/template/ISML');
var Response = require('*/cartridge/scripts/util/Response');
var CSRFProtection = require('dw/web/CSRFProtection');
var Site = require('dw/system/Site');

function start() {
  const sites = Site.getAllSites();
  const sitesArr = [];
  for (let i = 0; i <= sites.length - 1; i++) {
    sitesArr[i] = sites[i].name;
  }
  const sitesJson = JSON.stringify(sitesArr);
  const sandboxUrl = request.httpHost;
  const a = '';
  ISML.renderTemplate('feeds/newSite.isml', {
    sandboxUrl: sandboxUrl,
    sites: sitesJson,
  });
}

const convertNameToId = (str) => {
  str = str.trim();
  str = str.toLowerCase().replace(/[^a-z\s]/g, '');
  return str.replace(/\s(?=\S)/g, '_').trim();
};

function handle() {
  const body = request.httpParameterMap;
  const siteId = convertNameToId(body.siteName.value);
  const sites = Site.getAllSites();
  const current = Site.current;
  const newSiteUUID = sites.toArray().filter((site) => site.ID === siteId)[0]
    .preferences.UUID;
  const siteData = {
    siteId: siteId,
    siteName: body.siteName.value,
  };
  ISML.renderTemplate('feeds/siteCreated', {
    siteId: siteId,
    newSiteUUID: newSiteUUID,
    sandboxUrl: sandboxUrl,
  });
  // Response.renderJSON({ siteData });
}

exports.Start = boguard.ensure(['get'], start);
exports.Handle = boguard.ensure(['post'], handle);

// exports.Preview = boguard.ensure(['post'], preview);

// exports.GetAllSites = boguard.ensure(['get'], getAllSites);
