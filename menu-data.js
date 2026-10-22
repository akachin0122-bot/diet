// 🐾 定番食事・食品マスターデータベース (menu-data.js)
const MASTER_MENU_DATA = [
    // --- 【主食・ご飯もの・パン・麺】 ---
    { id: "m1", name: "ご飯 (1杯/150g)", category: "主食", calories: 252, p: 3.8, f: 0.5, c: 55.7 },
    { id: "m2", name: "玄米ご飯 (1杯/150g)", category: "主食", calories: 248, p: 4.2, f: 1.5, c: 51.0 },
    { id: "m3", name: "赤飯 (1杯/150g)", category: "主食", calories: 284, p: 5.2, f: 0.8, c: 61.5 },
    { id: "m4", name: "おにぎり (梅干し/90g)", category: "主食", calories: 140, p: 2.5, f: 0.3, c: 30.5 },
    { id: "m5", name: "全粥 (250g)", category: "主食", calories: 178, p: 2.8, f: 0.4, c: 39.5 },
    { id: "m6", name: "食パン (1枚/6枚切り60g)", category: "主食", calories: 156, p: 5.5, f: 2.6, c: 28.0 },
    { id: "m7", name: "クロワッサン (1個/40g)", category: "主食", calories: 178, p: 3.2, f: 10.5, c: 17.5 },
    { id: "m8", name: "バターロール (1個/30g)", category: "主食", calories: 95, p: 2.5, f: 3.5, c: 13.5 },
    { id: "m9", name: "そば (ゆで1玉/170g)", category: "主食", calories: 224, p: 8.5, f: 1.2, c: 45.0 },
    { id: "m10", name: "うどん (ゆで1玉/220g)", category: "主食", calories: 231, p: 5.5, f: 0.9, c: 49.0 },
    { id: "m11", name: "中華めん (蒸し1玉/150g)", category: "主食", calories: 297, p: 7.5, f: 2.5, c: 60.0 },
    { id: "m12", name: "スパゲティ (乾燥1人分/100g)", category: "主食", calories: 378, p: 13.0, f: 2.0, c: 72.0 },

    // --- 【定番メニュー・外食・主菜】 ---
    { id: "m13", name: "カレーライス", category: "定食・外食", calories: 954, p: 18.0, f: 32.0, c: 145.0 },
    { id: "m14", name: "牛丼", category: "定食・外食", calories: 909, p: 26.0, f: 35.0, c: 120.0 },
    { id: "m15", name: "かつどん", category: "定食・外食", calories: 893, p: 32.0, f: 38.0, c: 105.0 },
    { id: "m16", name: "オムライス", category: "定食・外食", calories: 697, p: 22.0, f: 26.0, c: 92.0 },
    { id: "m17", name: "シーフードスパゲティ", category: "定食・外食", calories: 731, p: 28.0, f: 20.0, c: 102.0 },
    { id: "m18", name: "スパゲティミートソース", category: "定食・外食", calories: 597, p: 22.0, f: 18.0, c: 84.0 },
    { id: "m19", name: "お好み焼き", category: "定食・外食", calories: 553, p: 18.0, f: 24.0, c: 66.0 },
    { id: "m20", name: "ラーメン", category: "定食・外食", calories: 443, p: 15.0, f: 14.0, c: 62.0 },
    { id: "m21", name: "ビーフシチュー", category: "定食・外食", calories: 568, p: 32.0, f: 35.0, c: 30.0 },
    { id: "m22", name: "ハンバーグ", category: "主菜", calories: 437, p: 24.0, f: 28.0, c: 16.0 },
    { id: "m23", name: "豚肉しょうが焼き", category: "主菜", calories: 330, p: 26.0, f: 22.0, c: 7.0 },
    { id: "m24", name: "かに玉", category: "主菜", calories: 339, p: 18.0, f: 24.0, c: 10.0 },
    { id: "m25", name: "ぶり照り焼き", category: "主菜", calories: 295, p: 25.0, f: 18.0, c: 8.0 },
    { id: "m26", name: "鶏のからあげ (一人前)", category: "主菜", calories: 284, p: 22.0, f: 18.0, c: 8.0 },
    { id: "m27", name: "魚のフライ", category: "主菜", calories: 272, p: 16.0, f: 16.0, c: 15.0 },
    { id: "m28", name: "さんま塩焼き", category: "主菜", calories: 248, p: 20.0, f: 18.0, c: 0.5 },
    { id: "m29", name: "しゅうまい (6個)", category: "主菜", calories: 246, p: 14.0, f: 15.0, c: 14.0 },

    // --- 【副菜・汁物・豆腐・卵・魚卵・豆類】 ---
    { id: "m30", name: "ポテトサラダ", category: "副菜", calories: 224, p: 3.5, f: 15.
