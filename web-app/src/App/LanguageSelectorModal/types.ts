export type LanguageType = {
	Icon: string;
	Name: string;
	ShortName: string;
};

export type LanguagesMap = {
	[languageShortName: string]: LanguageType;
};
