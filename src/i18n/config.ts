// i18n/config.ts
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import enJson from "./locales/en.json";
import jaJson from "./locales/ja.json";

i18n.use(initReactI18next).init({
  fallbackLng: "ja", // デフォルトの言語を設定
  returnEmptyString: false, // 空文字での定義を許可に
  resources: {
    // 辞書情報
    // 用意した翻訳ファイルを読み込む
    en: enJson,
    ja: jaJson,
  },
  lng: "ja",
  interpolation: {
    // 翻訳された文字列内のHTMLやReactコンポーネントをエスケープすることを無効に
    escapeValue: false,
  },
  react: {
    // 指定したHTMLノードを翻訳時にそのまま保持して表示するための設定
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "span"],
  },
});

export default i18n;
