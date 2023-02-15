'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');

var ContentMgr = require('dw/content/ContentMgr');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');

/**
 *  This function is called within the html head and renders its output there.
 *  It gathers either a css file from a content asset for external skin.css or the body element inline for quicker critical css introduction
 *  @returns {string} text to be rendered
 */
exports.renderSkin = function renderSkin() {
  // get content asset
  var getColor = CustomObjectMgr.getCustomObject('siteCustomColor');
  var renderParameters = new HashMap();
  if (getColor) {
    // check for file or inline css
    if (getColor.custom.customCSSFile) {
      renderParameters.type = 'FILE';
      renderParameters.url = getColor.custom.customCSSFile.getURL();
    } else {
      renderParameters.type = 'INLINE';
      renderParameters.markup = getColor.custom.body;
    }
    var template = new Template('components/skin');
    return template.render(renderParameters).text;
  }
  // render nothing if no skin is maintained in custom installation
  return '';
};
