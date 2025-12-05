// 「。」で改行
function aiFormat(text) {
    return text
        .replace(/。/g, "。\n")
        .replace(/\n\s*\n/g, "\n")
        .trim();
}

// 書式クリア（テキストのみ）
function clearFormat(text) {
    return text;
}

chrome.runtime.onMessage.addListener(async (msg) => {
    if (msg.type === "ADD_H1") {
        const processed = clearFormat(aiFormat(msg.text));
        insertAsH1(processed);
    }

    if (msg.type === "ADD_DESCRIPTION") {
        const processed = clearFormat(aiFormat(msg.text));
        insertAsDescription(processed);
    }
});

async function insertAsH1(text) {
    console.log("[DocInserter] 見出し1を追加:", text);
    // ここで今日の日付のドキュメントを検索し、
    // 無ければ自動生成してH1として追加する流れを実装する。
}

async function insertAsDescription(text) {
    console.log("[DocInserter] 説明を追加:", text);
    // ここでヘッダー一覧取得 → 選択UI → 説明追記の流れを実装する。
}
