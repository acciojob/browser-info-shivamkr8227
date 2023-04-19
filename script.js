//your JS code here. If required.
// const browsername=navigator.appName;
// const browerversion=navigator.appversion;
// const browserinfo=document.getElementById("browser-info");
// browserinfo.textContent=`You are using ${browserName} version ${version}.`;
const userAgent = navigator.userAgent;
const browserInfo = /\b(?:Firefox|Chrome|Safari|Opera|MSIE)\b/.exec(userAgent);
const browserName = browserInfo[0];
const version = userAgent.slice(userAgent.indexOf(browserName) + browserName.length + 1);

// Display the browser information in the browser-info div
const browserInfoDiv = document.getElementById("browser-info");
browserInfoDiv.textContent = `You are using ${browserName} version ${version}.`;