  const getAppIconLocal = async (params: Partial<GetAppIconLocal>) => {
    const { data } = await get("/api/icon/local", {
      params,
      responseType: "arraybuffer",
    });
  
    const imgSrc = 'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint8Array(data)))
    return imgSrc;
  };
  
  export function useGetAppIconLocal() {
    return useRequest(getAppIconLocal, {
      manual: true,
    });
  }
  

  export function useSearchResults({ kw, regex }: SearchParam) {
    const url = "/api/app-info/search";
    const searchType = regex ? "regex" : "kw";
    const text = searchType === "regex" ? regex : kw;

    return useSWR([url, searchType, text], ([url, searchType, text]: [string, 'regex'|'kw', string]) => {
        return request<AppInfoSearchResponse>({
            url,
            method: "GET",
            params: {
                [searchType]: text,
            },
        })
    })
}