import { SearchMethod, SearchParam } from "@/api/data/app-info";
import { AppInfoTable } from "@/components/AppInfoTable";
import { MainTitle } from "@/components/MainTitle";
import { SearchBox } from "@/components/SearchBox";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router";

export default function IndexPage() {
  const { t } = useTranslation();

  const [searchParams, setSearchParams] = useSearchParams()

  const [searchConfig, setSearchConfig] = useState<SearchParam>(() => {
    const searchMethod = searchParams.get('searchMethod') as SearchMethod ?? 'byName'
    const keyword = searchParams.get('keyword') ?? ''
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1
    const per = searchParams.get('per') ? Number(searchParams.get('per')) : 10

    return {
      keyword,
      searchMethod,
      page,
      per
    }
  })

  useEffect(() => {
    setSearchParams(searchConfig.keyword ? {
      ...searchConfig,
      page: searchConfig.page.toString(),
      per: searchConfig.per?.toString() ?? '10',
    } : {})
  }, [searchConfig, setSearchParams])

  return (
    <div className="flex flex-col items-center gap-8">
      <MainTitle>App Tracker</MainTitle>
      <SearchBox searchConfig={searchConfig} setSearchConfig={setSearchConfig} />
      {
        searchConfig.keyword ? <AppInfoTable searchConfig={searchConfig} /> : null
      }
    </div>
  );
}
