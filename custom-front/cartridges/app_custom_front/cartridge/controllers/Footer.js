/* eslint-disable linebreak-style */
'use strict';
var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ContentMgr = require('dw/content/ContentMgr');
var server = require('server');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');
server.get('Show', function (req, res, next) {
  var firstAsset = ContentMgr.getContent('footer-locate-store');
  var renderParameters = new HashMap();

  renderParameters.first = firstAsset;
  res.render('/components/footer/pageFooter', { test: renderParameters });

  next();
});

module.exports = server.exports();
