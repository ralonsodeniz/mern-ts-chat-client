import useI18n from '@Common/hooks/use-i18n';
import messages from './tr'

const Dummy = () => {
  const { t } = useI18n();
  return <div>{t(messages.title)}</div>;
};

export default Dummy;
