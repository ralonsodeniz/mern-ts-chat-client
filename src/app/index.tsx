import I18nProvider from "@App/lang/i18n-provider";
import Dummy from "@App/components/dummy";

const App = () =>  {
    return (
      <I18nProvider>
        <Dummy />
      </I18nProvider>
    );
}

export default App;
