import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[140px] mt-6">
        <SelectValue className="text-white" placeholder="Select a Colour" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="red">Red</SelectItem>
          <SelectItem value="apple">Brown</SelectItem>
          <SelectItem value="banana">White</SelectItem>
          <SelectItem value="blueberry">Beige</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
