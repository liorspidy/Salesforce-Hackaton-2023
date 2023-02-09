'use strict';

const btn = document.querySelector('.btn-dev')
const inputField = document.querySelector('.inputField')

console.log("inside js")


btn.addEventListener('click', (id) => {
    const givenId = inputField.value;

  var data = 
  `
    Invoke-Expression "mkdir ${givenId}"
    Invoke-Expression "cd ${givenId}"
    Write-Output "Running command: npm install -g sgmf-scripts --save-dev"
    Invoke-Expression "npm install -g sgmf-scripts --save-dev"
    Invoke-Expression "sgmf-scripts --createCartridge app_custom_${givenId}"
    Invoke-Expression "sgmf-scripts --uploadCartridge app_custom_${givenId}"
    Write-Output "Installation of sgmf-scripts complete."
  `

  var file = new Blob([data], {type: "text/plain"});
  var fileUrl = URL.createObjectURL(file);

  var a = document.createElement("a");
  a.href = fileUrl;
  a.download = `my_new_${givenId}_site.ps1`;
  a.click();
  
    console.log(data)
})


