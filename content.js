chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "GET_SELECTION") {
        const text = window.getSelection().toString();
        sendResponse({ text });
    }

    if (msg.type === "ADD_H1") {
        const processed = clearFormat(aiFormat(msg.text));
        insertAsH1(processed);
    }

    if (msg.type === "ADD_DESCRIPTION") {
        const processed = clearFormat(aiFormat(msg.text));
        insertAsDescription(processed);
    }
});
