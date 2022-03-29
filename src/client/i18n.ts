import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

type Translation = {
  share: string;
  copy: string;
  duplicate: string;
  notEnouthCards: string;
  alreadyChecked: string;
  congratulations: string;
  game: {
    you: string;
    opponent: string;
    result: {
      next: string;
      play: string;
    };
  };
  settings: {
    title: string;
    darkMode: string;
  };
  poker: {
    flop: string;
    turn: string;
    river: string;
  };
  stats: {
    title: string;
    played: string;
    win: string;
    currentStreak: string;
    maxStreak: string;
    distribution: string;
  };
};

const resources: { [lang: string]: { translation: Translation } } = {
  en: {
    translation: {
      share: "Share",
      copy: "Copied results to clipboard",
      duplicate: "Duplicate card",
      notEnouthCards: "Not enough cards",
      alreadyChecked: "Already checked (bug?)",
      congratulations: "Congratulations!",
      game: {
        you: "you",
        opponent: "other",
        result: {
          next: "Next Poker",
          play: "Play Now!",
        },
      },
      settings: {
        title: "Settings",
        darkMode: "Dark Mode",
      },
      poker: {
        flop: "flop",
        turn: "turn",
        river: "river",
      },
      stats: {
        title: "Statistics",
        played: "Played",
        win: "Win %",
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        distribution: "Guess Distribution",
      },
    },
  },
  ja: {
    translation: {
      share: "シェア",
      copy: "クリップボードにコピーしました",
      duplicate: "選択済みのカードです",
      notEnouthCards: "カードが足りません",
      alreadyChecked: "チェック済みです（バグかも？）",
      congratulations: "クリアおめでとうございます！",
      game: {
        you: "あなた",
        opponent: "相手",
        result: {
          next: "次のポーカー",
          play: "挑戦!",
        },
      },
      settings: {
        title: "設定",
        darkMode: "Dark Mode",
      },
      poker: {
        flop: "フロップ",
        turn: "ターン",
        river: "リバー",
      },
      stats: {
        title: "統計",
        played: "プレイ回数",
        win: "Win %",
        currentStreak: "連続成功数",
        maxStreak: "最大連続成功数",
        distribution: "分布",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18n;
