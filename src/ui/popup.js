// 選択範囲取得テスト用
document.getElementById("btn-get-text").addEventListener("click", async () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { type: "GET_SELECTION" },
            (res) => {
                document.getElementById("preview").textContent = res?.text || "";
            }
        );
    });
});
