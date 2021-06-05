import enAnt from 'antd/lib/locale/en_GB';
import esAnt from 'antd/lib/locale/es_ES';
import { ILang } from '@Config/locales/model';
import { IGenObject } from '@Common/model';

export const availableLanguages: ILang[] = [
  {
    id: 'es',
    name: 'Castellano',
    isDefault: true,
  },
  {
    id: 'en',
    name: 'Inglés',
  },
];

export const defaultLanguage = availableLanguages.find(
  language => language.isDefault,
)!.id;

export const antdLocales: IGenObject<any> = {
  en: enAnt,
  es: esAnt,
};
