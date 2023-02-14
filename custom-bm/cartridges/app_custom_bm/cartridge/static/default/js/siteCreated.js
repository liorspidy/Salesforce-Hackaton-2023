const inputField = document.getElementById("siteId");
const token = document.getElementsByName("csrf_token");
const sandboxUrl = document.getElementById("sandboxUrl").value;

const getSiteUUID = async (token) => {
  const res = await fetch(
    "https://" +
      sandboxUrl +
      "/on/demandware.store/Sites-Site/default/ViewChannelList-ListAll?CurrentMenuItemId=sites&csrf_token=" +
      token
  );
  const data = await res.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(data, "text/html");


  const inputs = doc.getElementsByName("SelectedObjectUUID");
  const UUID = inputs[inputs.length - 1].value;
  return UUID;
};

const updateCartridgePath = () => {
  setTimeout(async () => {
    const siteId = inputField.value;
    const formData = new FormData();
    const UUID = await getSiteUUID(token[0].value);
    formData.append("RepositoryUUID", UUID);
    formData.append("update", "");
    formData.append("csrf_token", token[0].value);
    formData.append(
      "UpdateSite_Cartridges",
      `app_custom_${siteId}:app_custom_front:app_storefront_base`
    );
    formData.append("instType", "sandbox");
    formData.append("UpdateSite_InsecureHost", "");
    formData.append("UpdateSite_SecureHost", "");
    const url =
      "https://" +
      sandboxUrl +
      "/on/demandware.store/Sites-Site/default/ViewChannelDetails-Dispatch?csrf_token=" +
      token[0].value;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
  }, 1000);
};
updateCartridgePath();
