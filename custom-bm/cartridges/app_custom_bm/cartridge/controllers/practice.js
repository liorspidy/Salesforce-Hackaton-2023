'use strict';/** *
 @module controllers/test */
var ISML = require('dw/template/ISML');
var boguard = require('bc_library/cartridge/scripts/boguard');



function Start() {
    var Response = require('bc_library/cartridge/scripts/util/Response');
    var Site = require('dw/system/Site');
    var message= "To upload a file please choose one of the following options: \n";

    var sandBoxUrl =Site.getCurrent();
    var httphost = sandBoxUrl.httpHostName;
    ISML.renderTemplate('feeds/uploadFile.isml',{message:message,sandBoxUrl1:httphost});

    };


function getAllSites() {
    var Site = require('dw/system/Site');
    var Response = require('bc_library/cartridge/scripts/util/Response');

    var allSites = Site.getAllSites();

    ISML.renderTemplate('feeds/testpage.isml', {allSites:allSites});
}

exports.Start = boguard.ensure(['get'], Start);

exports.GetAllSites = boguard.ensure(['get'], getAllSites);