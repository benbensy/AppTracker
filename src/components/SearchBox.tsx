import { Dispatch, SetStateAction, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { SearchMethod, SearchParam } from "@/api/data/app-info";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";

export function SearchBox({
  searchConfig,
  setSearchConfig,
}: {
  searchConfig: SearchParam
  setSearchConfig: Dispatch<SetStateAction<SearchParam>>,
}) {
  const { t } = useTranslation();

  const [realSearchMethod, setRealSearchMethod] = useState(searchConfig.searchMethod)

  const form = useForm<{ keyword: string }>({
    defaultValues: {
      keyword: searchConfig.keyword
    }
  });

  function onSubmit({ keyword }: { keyword: string }) {
    setSearchConfig((oldValue) => ({
      ...oldValue,
      keyword,
      searchMethod: realSearchMethod
    }))
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-row gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Select value={realSearchMethod} onValueChange={(value: SearchMethod) => setRealSearchMethod(value)}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>搜索方式</SelectLabel>
              <SelectItem value="byName">名称搜索</SelectItem>
              <SelectItem value="byPackageName">包名搜索</SelectItem>
              <SelectItem value="byMainActivity">活动搜索</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormField
          name="keyword"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input className="w-96" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">{t("app.search")}</Button>
      </form>
    </Form>
  );
}
