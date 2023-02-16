'use strict';

/**
 * @module controllers/test
 */
 
var ISML = require('dw/template/ISML');
var boguard = require('bc_library/cartridge/scripts/boguard');
var Response = require('bc_library/cartridge/scripts/util/Response');
var ProductInventoryMgr = require('dw/catalog/ProductInventoryMgr');
var Transaction = require('dw/system/Transaction');

function Start() {
    var Site = require('dw/system/Site');
    var URLUtils = require('dw/web/URLUtils');
    var whatiscurrent = Site.getCurrent()
    var ProductMgr = require('dw/catalog/ProductMgr');
    var productIterator = ProductMgr.queryAllSiteProducts();
    var myinventory = ProductInventoryMgr.getInventoryList()

    var prodlist =[]
    while (productIterator.hasNext()) {
        var product = productIterator.next();
        var imgs = product.getImage()
        prodlist.push(product);
    }
    ISML.renderTemplate('feeds/inventory/inventoryformerch.isml',{myinventory:myinventory,
                                                prodlist:prodlist,
                                                whatiscurrent:whatiscurrent,
                                                })
}

// function preview() {
//     ISML.renderTemplate('data/preview.isml', {Preview : request});
// }

// function handleForm(){
//     const body = request.httpParameterMap;
//     const data = {
//         duck_name: body.duck_name.value,
//         select_duck: body.select_duck.value
//     }
//     Response.renderJSON({data})

// }

// function GetAllSites() {
//     var Site = require('dw/system/Site');    
//     var allSites = Site.getAllSites();
    
//     ISML.renderTemplate("feeds/testsites",{allSites:allSites});
// }

function clickSumbit(){
    const body = request.httpParameterMap;
    var myinventory = ProductInventoryMgr.getInventoryList()
    const data = {
        id: body.id.value,
        allocation: body.allocation.value,
        prepetual: body.prepetual.value
    }
    
}
 
// function formshower(req){
//     ISML.renderTemplate("feeds/testform", {req:req})
// }


exports.Start = boguard.ensure(['get'], Start);
// exports.Preview = boguard.ensure(['get'], preview);
// exports.FormShow= boguard.ensure(['get'], formshower)
// exports.HandleForm = boguard.ensure(['post'], handleForm)
// exports.GetAllSites = boguard.ensure(['get'], GetAllSites);
exports.clickSumbit = boguard.ensure(['post'], clickSumbit);