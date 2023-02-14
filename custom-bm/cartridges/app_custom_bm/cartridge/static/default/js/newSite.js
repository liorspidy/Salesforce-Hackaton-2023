const form = document.forms.newSiteForm;
const btn = document.querySelector("#submitBtn");
const sandboxUrl = document.getElementById("sandboxUrl").value;
const token = document.getElementsByName("csrf_token");
const sites = JSON.parse(document.getElementById("sites").value);
const errorElement = document.querySelector(".error-message");

submitBtn.addEventListener("click", (e) => {
  const siteName = form.siteName.value;
  const siteId = convertNameToId(siteName);
  if (
    sites.some((name) => {
      return convertNameToId(name) === siteId;
    })
  ) {
    errorElement.style.display = "inline";
    errorElement.textContent =
      "ERROR!! You already have a site with that name!!";
  } else if (siteName === "") {
    errorElement.style.display = "inline";
    errorElement.textContent = "ERROR!! You must enter a name for the site!!";
  } else {
    errorElement.style.display = "none";
    createSite(siteId, siteName);
  }
});
/////////////// Functions

const createSite = async (siteId, siteName) => {
  const formData = new FormData();
  formData.append("ChannelForm_RepositoryID", siteId);
  formData.append("ChannelForm_DisplayName", siteName);
  formData.append("ChannelForm_SiteTimeZone", "Etc/UTC");
  formData.append("ChannelForm_CurrencyCode", "USD");
  formData.append("ChannelForm_Taxation", "net");
  formData.append("ChannelForm_CustomerListID", "CreateNewCustomerList");
  formData.append("webform-id", "ChannelForm");
  formData.append("create", "");
  if (siteName === "") return;
  const url =
    "https://" +
    sandboxUrl +
    "/on/demandware.store/Sites-Site/default/ViewChannel-Dispatch?csrf_token=" +
    token[0].value;
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });
  await form.submit();
};

//////////////////////////////////////////////////////////////////////////////////

const convertNameToId = (str) => {
  str = str.trim();
  str = str.toLowerCase().replace(/[^a-z\s]/g, "");
  return str.replaceAll(" ", "_").trim();
};
