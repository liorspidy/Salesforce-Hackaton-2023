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

  const catObj = {};
  const cat = content.category;

  if (cat) {
    catObj.name = content.catDisplayName
      ? content.catDisplayName
      : cat.displayName;

    catObj.imageURL = cat.custom.slotBannerImage
      ? cat.custom.slotBannerImage.getURL().toString()
      : null;

    catObj.url =
      cat.custom && "alternativeUrl" in cat.custom && cat.custom.alternativeUrl
        ? cat.custom.alternativeUrl
        : URLUtils.url("Search-Show", "cgid", cat.getID()).toString();
  }

  model.imgUrl = content.image ? content.image.absURL : null;
  model.imgAlt = content.alt;
  model.heading = content.heading ? content.heading : null;
  model.category = catObj;

  return new Template(
    "experience/components/blank_site_custom/middleBanner"
  ).render(model).text;
};
