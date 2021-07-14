import { FunctionalComponent } from '../../../stencil-public-runtime';
interface Props {
  activeLanguage: string;
  languageCapabilities: string[];
  onSetLanguage: (e: Event) => void;
}
export declare const LanguagePicker: (props: Props) => FunctionalComponent;
export {};
