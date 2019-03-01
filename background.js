chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ "url": "https://en.wikipedia.org/wiki/Special:Random" });
});

chrome.contextMenus.create({
  "id": "donateButton",
  "title": "Donate to Wikipedia",
  "contexts": ["browser_action"]
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId == "donateButton") chrome.tabs.create({ "url": "https://donate.wikimedia.org/wiki/Special:FundraiserRedirector" });
});
