chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "docInserter",
        title: "DocInserter",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "addH1",
        parentId: "docInserter",
        title: "見出し1として追加",
        contexts: ["selection"]
    });

    chrome.contextMenus.create({
        id: "addDescription",
        parentId: "docInserter",
        title: "説明として追加",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    if (!info.selectionText) return;

    // content.js に送る
    chrome.tabs.sendMessage(tab.id, {
        type: info.menuItemId === "addH1" ? "ADD_H1" : "ADD_DESCRIPTION",
        text: info.selectionText
    });
});
