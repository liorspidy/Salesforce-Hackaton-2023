/* eslint-disable linebreak-style */
'use strict';

var server = require('server');

server.get('Show', function (req, res, next) {
    var PageMgr = require('dw/experience/PageMgr');

    var page = PageMgr.getPage('pageheader');

    if (page && page.isVisible()) {
        res.page('pageheader');
    next();
}});


module.exports = server.exports();
