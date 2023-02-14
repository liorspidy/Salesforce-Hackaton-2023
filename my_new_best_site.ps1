function runCommand {
 param ([string]$Command)
   Try {
    Invoke-Expression "${Command}"
    Write-Host -ForegroundColor Green "${Command}: success"}
   Catch{
    Write-Host -ForegroundColor Red "${Command}: failure"
    Read-Host -Prompt "Press Enter to exit"
    Break
 }
}

runCommand -Command "mkdir best"
runCommand -Command "cd best"
runCommand -Command "npm install -g sgmf-scripts --save-dev"
runCommand -Command "sgmf-scripts --createCartridge app_custom_best"
runCommand -Command "npm uninstall node-sass"
runCommand -Command "npm i -D sass"
runCommand -Command "npm i --force"
runCommand -Command "rm dw.json"
runCommand -Command "Copy-Item -Path ..\dw.json -Destination .\dw.json"
runCommand -Command "sgmf-scripts --uploadCartridge app_custom_best"

Read-Host -Prompt "Press Enter to exit"