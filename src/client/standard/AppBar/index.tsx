import React from "react";
import { useTranslation } from "react-i18next";
import { AppBarLayout } from "../../organisms/AppBarLayout";
import { HelpDialogJa, HelpDialogEn } from "../../standard/HelpDialog";
import { appName } from "../../constants/meta";

export const AppBar: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <AppBarLayout
      appName={appName}
      help={
        i18n.resolvedLanguage === "ja" ? <HelpDialogJa /> : <HelpDialogEn />
      }
    />
  );
};
