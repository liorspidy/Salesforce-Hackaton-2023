document.addEventListener("DOMContentLoaded", function() {

    const getOS = () => {
    const platform = window.navigator.platform;
    let os = null;

    if (platform.indexOf("Mac") !== -1) {
        os = "Mac";
    } else if (platform.indexOf("Win") !== -1) {
        os = "Windows";
    } else if (platform.indexOf("Linux") !== -1) {
        os = "Linux";
    }
    return os;
}

  const form = document.querySelector('form');
  const curOS = getOS();
  const givenId = inputField.value;
  const a = document.createElement("a");

  if (curOS === "Mac") {
    data =
          'mkdir ' + givenId + '\n' +
          'cd ' + givenId + '\n' +
          'npm install -g sgmf-scripts --save-dev\n' +
          'sgmf-scripts --createCartridge app_custom_' + givenId + '\n' +
          'npm uninstall node-sass\n' +
          'npm i -D sass\n' +
          'npm i --force\n' +
          'rm dw.json\n' +
          'cp ../dw.json ./dw.json\n' +
          'sgmf-scripts --uploadCartridge app_custom_' + givenId + '\n'

      a.download = "my_new_" + givenId + "_site.sh";
      
  } else if(curOS === "Windows"){
    data =
    'function runCommand {\n' +
    ' param ([string]$Command)\n' +
    '   Try {\n' +
    '    Invoke-Expression "$\{Command}"\n' + 
    '    Write-Host -ForegroundColor Green "$\{Command}: success"}\n' +
    '   Catch{\n' +
    '    Write-Host -ForegroundColor Red "$\{Command}: failure"\n' +
    '    Read-Host -Prompt "Press Enter to exit"\n' +
    '    Break\n' +
    ' }\n' +
    '}\n\n' +
    'runCommand -Command "mkdir ' + givenId + '"\n' +
    'runCommand -Command "cd ' + givenId + '"\n' +
    'runCommand -Command "npm install -g sgmf-scripts --save-dev"\n' +
    'runCommand -Command "sgmf-scripts --createCartridge app_custom_' + givenId + '"\n' +
    'runCommand -Command "npm uninstall node-sass"\n' +
    'runCommand -Command "npm i -D sass"\n' +
    'runCommand -Command "npm i --force"\n' +
    'runCommand -Command "rm dw.json"\n' +
    'runCommand -Command "Copy-Item -Path ..\\\dw.json -Destination .\\\dw.json"\n' +
    'runCommand -Command "sgmf-scripts --uploadCartridge app_custom_' + givenId + '"\n\n' +
    'Read-Host -Prompt "Press Enter to exit"'
    
    a.download = "my_new_" + givenId + "_site.ps1";
  }

  var file = new Blob([data], {type: "text/plain"});
  var fileUrl = URL.createObjectURL(file);
  a.href = fileUrl;
  a.click();




});