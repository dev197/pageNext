import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-96 text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it rechargable</AccordionTrigger>
          <AccordionContent>
            Yes. It can be recharged.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it made up of carbon fibre.</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default carbon fibre finish.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it available in different colours</AccordionTrigger>
          <AccordionContent>
            Yes. It is available in 3 different colours.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  