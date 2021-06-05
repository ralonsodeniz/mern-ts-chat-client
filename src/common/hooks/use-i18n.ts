import { useIntl } from 'react-intl';

const useI18n = () => {
  const tr = useIntl();

  return {
    tr,
    t: tr.formatMessage,
  };
};

export default useI18n;
