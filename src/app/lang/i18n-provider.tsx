import React, { useEffect, useState } from 'react';
import { IntlProvider, createIntl } from 'react-intl';
import { ConfigProvider } from 'antd';
import moment from 'moment';
import 'moment/locale/en-gb';
import 'moment/locale/es';
import {defaultLanguage, antdLocales, availableLanguages} from '@Config/locales';
import { IGenObject } from '@Common/model';
import es from './locales/es.json';
import en from './locales/en.json';

export const messages: IGenObject<any> = { es, en };

export const createFixedTr = (locale: string) =>
  createIntl({
    locale,
    messages: messages[locale],
  });

const I18nProvider: React.FC = ({ children }) => {
  const [language, setLanguage] = useState<string>(defaultLanguage);

  useEffect(() => {
    moment.locale(language);
  }, [language]);

  return (
    <>
        {availableLanguages.map(language => <button onClick={() => setLanguage(language.id)}>{language.name}</button>)}
      <IntlProvider locale={language} messages={messages[language]}>
        <ConfigProvider locale={antdLocales[language]}>
          {children}
        </ConfigProvider>
      </IntlProvider>
    </>
  );
};

export default I18nProvider;
