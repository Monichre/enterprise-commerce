"use client"

import { Button } from "components/ui/Button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "components/ui/DropdownMenu"
import { ArrowUpDownIcon } from "lucide-react"
import { parseAsStringEnum, useQueryState } from "nuqs"

export enum Sorting {
  PRICE_DESC = "minPrice:desc",
  PRICE_ASC = "minPrice:asc",
  DATE_ASC = "updatedAtTimestamp:asc",
  DATE_DESC = "updatedAtTimestamp:desc",
  RELEVANCY = "",
}

export function Sorter() {
  const [sortBy, setSortBy] = useQueryState("sortBy", {
    ...parseAsStringEnum<Sorting>(Object.values(Sorting)).withDefault(Sorting.DATE_DESC),
    shallow: false,
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          <ArrowUpDownIcon className="mr-2 size-4" />
          Sort by {sortBy}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => setSortBy(Sorting.RELEVANCY)}>
          Relevancy
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => setSortBy(Sorting.PRICE_ASC)}>
          Price: Low to High
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => setSortBy(Sorting.PRICE_DESC)}>
          Price: High to Low
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => setSortBy(Sorting.DATE_DESC)}>
          Oldest
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={() => setSortBy(Sorting.DATE_ASC)}>
          Newest
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
