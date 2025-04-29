import { CustomToolInput } from "@/components/platform/tools/dialogBox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import ToggleSwitch from "@/components/ui/toggle";
import { ListCollapse, Route, Workflow } from "lucide-react";
import { useState } from "react";
import DynamicProperties from "./properties";

interface InputFieldProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
}

interface Tool {
  toolName: string;
  toolDescription: string;
  async: boolean;
  eventId: string;
}
const InputField: React.FC<InputFieldProps> = ({ id, name, value, onChange, placeholder }) => {
  return (
    <div className="my-4">
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg px-4 py-2 hover:bg-black text-white bg-secondary border border-white/20"
        placeholder={placeholder}
      />
    </div>
  );
};

const ToolAccordion = () => {

  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = (checked: boolean) => {
    setIsToggled(checked);
    console.log("Toggle is now:", checked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setTool({
      ...tool,
      [name]: value,
    });
  };

  const [tool, setTool] = useState<Tool>({
    toolName: "",
    toolDescription: "",
    async: false,
    eventId: "",
  });
  const [headerRows, setHeaderRows] = useState<{ key: string; type: string; value: string }[]>([
    { key: "", type: "text", value: "" } // Initial row
  ]);
  const addHeaderRow = () => {
    setHeaderRows([...headerRows, { key: "", type: "text", value: "" }]);
  };

  const removeHeaderRow = (index: number) => {
    const newRows = headerRows.filter((_, i) => i !== index);
    setHeaderRows(newRows);
  };

  const handleHeaderChange = (index: number, field: string, value: string) => {
    const newRows: any = [...headerRows];
    newRows[index][field] = value;
    setHeaderRows(newRows);
  };
  return (<>
    <Accordion type="single" collapsible className="bg-secondary hover:bg-foreground  rounded-lg border border-muted  ">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="px-4 py-2 "><h1 className="flex gap-2  items-center">
          <Workflow /> <span className="text-xl">Integration</span>
        </h1></AccordionTrigger>
        <AccordionContent >
          <div className="my-2 px-4 border-b border-b-1 border-white/10">
            <button className="px-2 py-1 bg-muted rounded text-white ">
              Custom Tool
            </button>
            <p className="text-muted-foreground my-2"> Create a custom Function and connect it to any backend implementation.</p>
          </div>
          <div className="my-4 px-4">
            <CustomToolInput className={"bg-secondary shadow-sm shadow-black/10 px-2 py-4 rounded-2xl border border-white/10"} headerRows={headerRows} handleHeaderChange={handleHeaderChange} addHeaderRow={addHeaderRow} removeHeaderRow={removeHeaderRow} />

          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible className="bg-secondary hover:bg-foreground  rounded-lg border border-muted  my-4">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="px-4 py-2 "><h1 className="flex gap-2  items-center">
          <ListCollapse /> <span className="text-xl">Details</span>
        </h1></AccordionTrigger>
        <AccordionContent >
          <div className="my-4 px-4">
            <label className="block font-bold mb-2" htmlFor="toolName">
              Tool Name
            </label>
            <InputField
              id="toolName"
              name="toolName"
              value={tool.toolName}
              onChange={handleChange}
              placeholder="Enter Tool Name"
            />
          </div>

          <div className="mb-4 px-4">
            <label className="block font-bold mb-2" htmlFor="toolDescription">
              Tool Description
            </label>
            <textarea
              id="toolDescription"
              name="toolDescription"
              value={tool.toolDescription}
              onChange={handleChange}
              className="w-full rounded-lg px-4 py-2 hover:bg-black text-white bg-secondary  border border-white/20"
              placeholder="Enter Tool Description"
            ></textarea>
          </div>

          <div className="mb-4 flex justify-between items-center border-t border-b border-gray-400 px-4 py-2">
            <div>
              <label className="block font-bold mb-2" >
                Async
              </label>
              <p className="text-muted-foreground">This setting defines whether the assistant will move forward or wait for your server to respond. Enable this if you just want to trigger something on your server.</p>
            </div>
            <ToggleSwitch
              checked={isToggled}
              onChange={handleToggleChange}
              label="Enable Sync"
            />
          </div>

          <DynamicProperties/>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

  </>)
}

export default ToolAccordion