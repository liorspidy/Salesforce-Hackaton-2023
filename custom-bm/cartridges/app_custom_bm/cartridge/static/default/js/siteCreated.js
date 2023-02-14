const inputField = document.getElementById('siteId');
const newSiteUUID = document.getElementById("newSiteUUID");
const token = document.getElementsByName("csrf_token");
const sandboxUrl = document.getElementById("sandboxUrl").value;

const updateCartridgePath = () => {

    

  setTimeout(async () => {
    const siteId = inputField.value;
    const formData = new FormData();
    formData.append("RepositoryUUID", newSiteUUID.value);
    formData.append("update", "");
    formData.append("csrf_token", token[0].value);
    formData.append("UpdateSite_Cartridges", "test:app_BS");
    formData.append("instType", "sandbox");
    formData.append("UpdateSite_InsecureHost", "");
    formData.append("UpdateSite_SecureHost", "");
     console.log(siteId,"///" ,newSiteUUID.value,"///", token[0].value,"///",sandboxUrl);

 

    const url = "https://" + sandboxUrl + "/on/demandware.store/Sites-Site/default/ViewChannelDetails-Dispatch?csrf_token=" + token[0].value;
    const response = await fetch(url, {
      method: "POST",
      body: formData
    })
    }, 1000);
  }
  updateCartridgePath();