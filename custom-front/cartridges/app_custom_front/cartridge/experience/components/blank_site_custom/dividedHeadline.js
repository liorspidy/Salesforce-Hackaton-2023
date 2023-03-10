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

  model.greyHeadline = content.headline1 ? content.headline1 : null;
  model.otherHeadline = content.headline2 ? content.headline2 : null;

  return new Template(
    "experience/components/blank_site_custom/dividedHeadline"
  ).render(model).text;
};
