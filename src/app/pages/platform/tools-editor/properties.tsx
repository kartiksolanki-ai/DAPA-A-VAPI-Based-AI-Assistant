import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SquarePen } from "lucide-react";

const DynamicProperties=()=>{
    const [accordions, setAccordions] = useState([{ id: 1, label: "phone number",description:"",type:'text' }]);

      const addPropertyRow = () => {

        setAccordions([
            ...accordions,
            { id: accordions.length + 1, label: `New Item ${accordions.length + 1}`,description:"",type:'text' },
          ]);
      };
    
      const removePropertyRow = (index: number) => {
        const newRows = accordions.filter((_, i) => i !== index);
        setAccordions(newRows);
      };
    
      const handlePropertyChange = (index: number, field: string, value: string) => {
        const newRows:any = [...accordions];
        newRows[index][field] = value;
        setAccordions(newRows);
      };
    
    return (
      <div className="p-4">
        <h1 className="font-bold ">Function</h1>
        <button
          onClick={addPropertyRow}
          className="mt-4 bg-secondary text-white py-2 px-4 rounded hover:bg-secondary/60 text-sm "
        >
          Properties +
        </button>
        <Accordion type="multiple" className=" rounded-xl">
          {accordions.map((accordion,index) => (
            <AccordionItem key={accordion.id} value={`item-${accordion.id}`} className="my-2  py-1 px-2 border-2 border-white/10 rounded-lg bg-secondary">
              <AccordionTrigger>{accordion.label}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 ">
                    <div className="flex gap-1 my-1">
                      <label htmlFor={accordion.label}><SquarePen  /></label>  
                <input
                  type="text"
                  id={accordion.label}
                  placeholder={accordion.label}
                  className="p-0 w-full rounded bg-transparent border-none hover:outline-none outline-none"
                  />
                  </div>
                  <div className="flex gap-1 my-1">
                  <label htmlFor={accordion.label}><SquarePen  /></label>  
                <input
                  type="text"
                  placeholder={"Describe the property it's purpose,it's use,etc."}
                  className="p-0 w-full rounded bg-transparent border-none hover:outline-none outline-none"
                />
                  </div>
                  <div className="flex justify-between items-center">
                  <select
            value={accordion.type}
            onChange={(e) => handlePropertyChange(index, "type", e.target.value)}
            className="my-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-black text-white "
          >
            <option value="fieldType">Field Type</option>
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="object">Object</option>
          </select>
          <button className="bg-muted border border-muted  text-red-600 px-2 py-1 rounded hover:bg-muted/20 "
          onClick={()=>{removePropertyRow(index)}}
          >
            Delete
          </button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
      </div>
    );
  };



  export default DynamicProperties