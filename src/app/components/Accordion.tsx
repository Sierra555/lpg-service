'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/app/components/ui/accordion"

import { faqData } from "../constants";
import { v4 as uuidv4 } from 'uuid';

const AccordionComponent = () => {
  return (
    <Accordion type="single" collapsible className="bg-white">
        {faqData.map(({question, answer}, index) => (
            <AccordionItem value={`value-${index}`} key={`${index}-${uuidv4()}`}>
                <AccordionTrigger className="md:text-lg font-semibold">{question}</AccordionTrigger>
                <AccordionContent>
                    {answer}
                </AccordionContent>
             </AccordionItem>
        ))}
    </Accordion>
  );
};

export default AccordionComponent;