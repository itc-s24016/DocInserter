// 選択範囲を取得するロジック

// 選択テキストを取得して返す
function getSelectedText() {
    return window.getSelection().toString();
}

// popup から要求されたら選択テキストを返す
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "GET_SELECTION") {
        sendResponse({ text: getSelectedText() });
    }
});
