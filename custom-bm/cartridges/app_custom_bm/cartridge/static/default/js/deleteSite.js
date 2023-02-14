//const inputField = document.getElementById('siteId');
//const newSiteUUID = document.getElementById("newSiteUUID");
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

    const inputTdRows = doc.querySelectorAll('tr td.w.s.center'); 
    const sitesDetails = [];
    for (let i = 0; i < inputTdRows.length; i++) {
      const inputsUUID = inputTdRows[i].querySelectorAll('input'); 
      const site = { 
        UUID: inputsUUID[0].value
      }; 
      sitesDetails.push(site);
    }

    const idTdsRows = doc.querySelectorAll('tr td.e.s[width="50%"][nowrap="nowrap"]'); 
    const allSitesId = []
    for (let i = 1; i < idTdsRows.length; i+=2) {
       allSitesId.push(idTdsRows[i].textContent);
    }

    for (let i = 0; i < sitesDetails.length; i++) {
      sitesDetails[i].id = allSitesId[i];
    }






    const inputs = doc.getElementsByName("SelectedObjectUUID");
    const UUID = inputs[inputs.length - 1].value;

    return UUID;
  };


const deleteSite = () => {

  setTimeout(async () => {
    //const siteId = inputField.value;
    const formData = new FormData();
    formData.append("delete", "");
    //formData.append("SelectedObjectUUID", )

    formData.append("csrf_token", token[0].value);

 

    const url = "https://" + sandboxUrl + "/on/demandware.store/Sites-Site/default/ViewChannelDetails-Dispatch?csrf_token=" + token[0].value;
    const response = await fetch(url, {
      method: "POST",
      body: formData
    })
    }, 1000);
  }
  deleteSite();
  getSiteUUID();