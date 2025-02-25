import { AppInfoSearchResponse, SearchParam, useSearchResults } from "@/api/data/app-info";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./ui/table";
import { useEffect, useState } from "react";

export function AppInfoTable({ searchConfig }: {
    searchConfig: SearchParam
}) {

    const { data, error } = useSearchResults(searchConfig)

    const [items, setItems] = useState<AppInfoSearchResponse['items']>([])
    const [metadata, setMetadata] = useState<AppInfoSearchResponse['metadata']>()

    useEffect(() => {
        setItems(() => data?.data.items ?? [])
        setMetadata(() => data?.data.metadata)
    }, [
        data
    ])

    if (error) return error

    if (data) return <div>
        <Table className="=table-fixed max-w-[60rem]">
            <TableCaption>App info 数据.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-full">应用名</TableHead>
                    <TableHead className="w-full ">包名</TableHead>
                    <TableHead className="w-full ">启动项</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {items.map(({ id, localizedNames, packageName, mainActivity }) => (
                    <TableRow key={id} className="font-code text-zinc-700">
                        <TableCell className="w-full text-ellipsis break-keep overflow-hidden">
                                {localizedNames.at(0)?.name}
                        </TableCell>
                        <TableCell className="w-full text-ellipsis break-keep overflow-hidden">
                                {packageName}
                        </TableCell>
                        <TableCell className="w-full text-ellipsis break-keep overflow-hidden">
                                {mainActivity}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">{metadata?.total}条</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    </div>
}