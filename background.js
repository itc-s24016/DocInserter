chrome.commands.onCommand.addListener(async (command) => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    // Google Docs 以外では実行しない
    if (!tab || !tab.url.includes("https://docs.google.com/")) return;

    // 選択テキスト取得（content script に依頼）
    const selection = await chrome.tabs.sendMessage(tab.id, { type: "GET_SELECTION" });

    if (!selection || !selection.text) return;

    if (command === "add_h1") {
        chrome.tabs.sendMessage(tab.id, {
            type: "ADD_H1",
            text: selection.text
        });
    }

    if (command === "add_description") {
        chrome.tabs.sendMessage(tab.id, {
            type: "ADD_DESCRIPTION",
            text: selection.text
        });
    }
});
