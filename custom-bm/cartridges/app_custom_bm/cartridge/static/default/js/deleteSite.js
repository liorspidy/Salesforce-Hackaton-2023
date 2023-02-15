//const inputField = document.getElementById('siteId');
//const newSiteUUID = document.getElementById("newSiteUUID");
const token = document.getElementsByName("csrf_token");
const sandboxUrl = document.getElementById("sandboxUrl").value;
const allsitesId = document.getElementById("allsitesId").value;
const btnDelete = document.querySelectorAll(".btn-delete")
const sitesDetails = [];

btnDelete.forEach(function(btn){
  btn.addEventListener('click', function(event){
    const slecetedUUID = sitesDetails.find(site => site.id === event.target.value);
    deleteSite(slecetedUUID.UUID, sitesDetails);
  })})


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

      sitesDetails[i].id = allSitesId[i].substring(0, allSitesId[i].length - 1);
    }
    
    const inputs = doc.getElementsByName("SelectedObjectUUID");
    const UUID = inputs[inputs.length - 1].value;
    
    return UUID;
  };
  
  
  
  // fetch delete dosnt work
  function deleteSite(selectedUUID, otherSites) {
    setTimeout(async () => {
      const formData = new FormData();
      formData.append("delete", "");
      otherSites.forEach(site => formData.append("ObjectUUID", site.UUID))
      formData.append("SelectedObjectUUID", selectedUUID)
      formData.append("confirmDelete", "");
      formData.append("csrf_token", token[0].value);

      const url = "https://" + sandboxUrl + "/on/demandware.store/Sites-Site/default/ViewChannelDetails-Dispatch?csrf_token=" + token[0].value;
      const response = await fetch(url, {
        method: "POST",
        body: formData
      })
    }, 1000);
  }
  
  getSiteUUID();

