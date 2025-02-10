import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import DefaultLayout from "./layouts/DefaultLayout";
import IndexPage from "./pages/IndexPage";

function App() {
  const { i18n, t } = useTranslation();

  function changeLanguage(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="p-2 flex flex-col items-center">
      <Select onValueChange={changeLanguage}>
        <SelectTrigger className="w-32">
          <SelectValue
            placeholder={t("common.language")}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="zh-CN">简体中文</SelectItem>
        </SelectContent>
      </Select>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
