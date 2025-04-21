import * as React from "react"

import { ScrollArea } from "@/components/ui/scroll-area"
const tags = Array.from({ length: 10 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-2xl text-red-400 font-medium leading-none">Key Features</h4>
        <p className="letter-spacing-2 text-sm leading-6">
          Adjustable Brightness

          Touch Control

          Energy Efficient LED

          Color Temperature Modes

          Flexible Neck or Arm

          USB Charging Port

          Sleek, Modern Design

          Eye-Caring Technology

          Memory Function

          Portable and Lightweight
        </p>
      </div>
    </ScrollArea>
  )
}
