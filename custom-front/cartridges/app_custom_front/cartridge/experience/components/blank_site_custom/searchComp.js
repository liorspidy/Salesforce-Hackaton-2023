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

  model.leftOrRight = content.leftOrRight;
  model.cartColor = content.cartNumColor.value;
  model.backgroundColor = content.backgroundColor.value
    ? content.backgroundColor.value
    : "#ffffff";
  model.bagColor = content.bagColor.value ? content.bagColor.value : "#000000";

  let r = 0,
    g = 0,
    b = 0; // Check if hex code is valid
  // Convert hex code to RGB parameters
  const hexToRgb = (hex) => {
    if (hex.match(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
      // If hex code is in 6-digit format, grab the 3 pairs of characters
      if (hex.length === 7) {
        r = parseInt(hex.substring(1, 3), 16);
        g = parseInt(hex.substring(3, 5), 16);
        b = parseInt(hex.substring(5, 7), 16);
      } else {
        // If hex code is in 3-digit format, repeat each character twice
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      }
    }

    return [r, g, b];
  };

  model.bgred = hexToRgb(model.backgroundColor)[0];
  model.bggreen = hexToRgb(model.backgroundColor)[1];
  model.bgblue = hexToRgb(model.backgroundColor)[2];

  model.cartred = hexToRgb(model.cartColor)[0];
  model.cartgreen = hexToRgb(model.cartColor)[1];
  model.cartblue = hexToRgb(model.cartColor)[2];

  model.bagred = hexToRgb(model.bagColor)[0];
  model.baggreen = hexToRgb(model.bagColor)[1];
  model.bagblue = hexToRgb(model.bagColor)[2];

  return new Template(
    "experience/components/blank_site_custom/searchComp"
  ).render(model).text;
};
