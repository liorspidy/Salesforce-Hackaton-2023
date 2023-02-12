'use strict';

/**
 * @module controllers/BMCustomFeeds
 */

var boguard = require('bc_library/cartridge/scripts/boguard');
var ISML = require('dw/template/ISML');

// function getAllSites() {
//     ISML.renderTemplate('feeds/test.isml');
// }

// test
function preview() {
        var Site = require('dw/system/Site');
    var Response = require('bc_library/cartridge/scripts/util/Response');
    
    var allSites = Site.getAllSites();
    
    var sites = [];
    for each(var availableSite in allSites) {
        var site = {};
        site['id'] = availableSite.ID;
        site['name'] = availableSite.name;
        site['httpsHostName'] = availableSite.httpsHostName;
        sites.push(site);
    }
    

    Response.renderJSON(sites);
}

// ----------------------

function start() {
    var Site = require('dw/system/Site');
    var Response = require('bc_library/cartridge/scripts/util/Response');
    
    var allSites = Site.getAllSites();
    
    var sites = [];
    for each(var availableSite in allSites) {
        var site = {};
        site['id'] = availableSite.ID;
        site['name'] = availableSite.name;
        site['httpsHostName'] = availableSite.httpsHostName;
        sites.push(site);
    }
    
    ISML.renderTemplate('feeds/mysitelist.isml',{sites:sites});

    // Response.renderJSON(sites);
}



exports.Start = boguard.ensure(['get'], start);

exports.Preview = boguard.ensure(['get'], preview);

// exports.GetAllSites = boguard.ensure(['get'], getAllSites);