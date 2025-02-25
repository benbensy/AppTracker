import useSWR from "swr";
import { request } from "../fetcher";

interface LocalizedName {
  isPrimary: boolean;
  languageCode: string;
  id: string;
  appInfo: {
    id: string;
  };
  name: string;
  createdAt: number;
}

interface AppInfo {
  defaultName: string;
  mainActivity: string;
  localizedNames: LocalizedName[];
  packageName: string;
  createdAt: number;
  id: string;
  count: number;
}

export interface AppInfoSearchResponse {
  metadata: {
    total: number;
    page: number;
    per: number;
  };
  items: AppInfo[];
}

export const searchMethods = [
  'byName',
  'byPackageName',
  'byMainActivity'
] as const

export type SearchMethod = typeof searchMethods[number]

export type SearchParam = {
  keyword: string;
  searchMethod: SearchMethod
  page: number;
  per?: number;
}

export function useSearchResults({ keyword, searchMethod, page, per }: SearchParam) {
  const url = "/api/app-info/search";
  return useSWR([url, searchMethod, keyword, page, per ?? 10], ([url, searchMethod, text, page, per]: [string, SearchMethod, string, number, number]) => {
    return request<AppInfoSearchResponse>({
      url,
      method: "GET",
      params: {
        [searchMethod]: text,
        page,
        per
      },
    })
  })
}