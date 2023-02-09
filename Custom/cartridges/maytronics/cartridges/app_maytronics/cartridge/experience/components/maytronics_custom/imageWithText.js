"use strict";

const Template = require("dw/util/Template");
const HashMap = require("dw/util/HashMap");
const URLUtils = require("dw/web/URLUtils");

/**
 * Render logic for storefront.productBannerStrip component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */

module.exports.render = function (context) {
  const model = new HashMap();
  const content = context.content;

  model.imgUrl = content.image ? content.image.absURL : null;
  model.imgAlt = content.alt;
  model.heading = content.heading ? content.heading : null;
  model.leftHeadline = content.leftHeadline ? content.leftHeadline : null;
  model.rightHeadline = content.rightHeadline ? content.rightHeadline : null;
  model.mainText = content.mainText;
  model.btnName = content.btnName;
  model.btnLink = content.btnLink;

  return new Template(
    "experience/components/maytronics_custom/imageWithText"
  ).render(model).text;
};
