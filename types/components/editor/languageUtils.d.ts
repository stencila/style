declare const languageAliases: Record<string, string[]>;
export declare const defaultLanguageCapabilities: string[];
export declare const languageByAlias: (languageName: string) => keyof typeof languageAliases;
export {};
