import "./App.scss";
import Layout from "./Layout/Layout";
import Layout2 from "./Layout/Layout2";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();
  if (i18n.language === "en-US") {
    i18n.init();
    document.documentElement.setAttribute("lang", "en");
    i18n.changeLanguage("en");
  }
  return <Layout />;
}

export default App;
