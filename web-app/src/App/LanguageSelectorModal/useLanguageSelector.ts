import type { LanguageType } from "./types.ts";
import { useTranslation } from "react-i18next";
import { SupportedLanguages } from "./data.ts";

export const useLanguageSelector = () => {
	const { i18n } = useTranslation();

	const getLanguagesCollection = (): LanguageType[] => {
		return Object.keys(i18n.services.resourceStore.data).map(
			(language) => SupportedLanguages[language],
		);
	};
	const setLanguage = (shortLanguageName: string) => {
		i18n.changeLanguage(shortLanguageName);
	};

	const currentLanguage = i18n.language;

	// const getCookieLangValue = () => {
	// 	return i18n.languages;
	// };

	return {
		currentLanguage,
		getLanguagesCollection,
		setLanguage,
	};
};
