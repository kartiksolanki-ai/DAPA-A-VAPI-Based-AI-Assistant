"use client"
import { CheckCheck, Copy, ListCollapse, Trash2 } from "lucide-react";
import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import ToolMessages from "./toolMessages";
import ToggleSwitch from "@/components/ui/toggle";
import ToolAccordion from "./toolAccordion";
import { Button } from "@/components/ui/button";


interface Tool {
    toolName: string;
    toolDescription: string;
    async: boolean;
    eventId: string;
}

const ToolEditor: React.FC = () => {
    const [tool, setTool] = useState<Tool>({
        toolName: "",
        toolDescription: "",
        async: false,
        eventId: "",
    });
    const [isOpen, setIsOpen] = useState(false)
    const [isToggled, setIsToggled] = useState(false);

    const handleToggleChange = (checked: boolean) => {
        setIsToggled(checked);
        console.log("Toggle is now:", checked);
    };
    const handleSave = () => {
        console.log("Tool Data:", tool);
        alert("Tool saved successfully!");
    };

    const tools = [
        { id: 1, name: "phoneNumber", description: "dfefef" },
        { id: 2, name: "event_details", description: "qswdefrgt" },
        { id: 3, name: "DuranEvents", description: "1w2e3t4r5yjukjmnhbgv`" },
    ];
    const [selectedTool, setSelectedTool] = useState<string | null>("phoneNumber"); // New state for selected tool
    const getSelectedToolDetails = () => {
        return tools.find(tool => tool.name === selectedTool) || { name: "", description: "" };
    };
    const [copied, setCopied] = useState(false);

    const handleCopy = async (text:string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds

        } catch (error) {
            console.error('Failed to copy text:', error);
        }
    };

    return (
        <div className="flex h-fit rounded-lg overflow-auto scrollbar-hide bg-foreground"
        // style={{ backgroundColor: "#1c1e21" }}
        >
            <div className="w-1/5 bg-transparent text-white px-4 py-1 flex flex-col border-r border-border sm:max-w-[320px] scrollbar-hide">
                <div className="flex gap-4 my-2">
                    <Button
                        className='text-muted-foreground hover:text-white font-bold transition-all duration-150 ease-in-out group rounded-lg bg-primary/80 hover:saturate-[1.3] hover:bg-primary shadow-sm hover:shadow-md hover:shadow-primary/30'
                        onClick={() => setIsOpen(true)}
                    >
                        New Tool +
                    </Button>
                    <Button className='bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '>
                        Documentation
                    </Button>
                </div>
                <h1 className="text-lg font-bold mb-4">Tools</h1>
                <ul>
                    {tools.map((tool) => (
                        <li
                            key={tool.name}
                            className={`py-2 px-4 rounded mb-2 cursor-pointer flex flex-col gap-1 ${selectedTool === tool.name ? 'bg-primary/10 hover:bg-background/50' : 'hover:bg-gray-700'
                                }`}
                            onClick={() => setSelectedTool(tool.name)} // Set selected tool on click
                        >
                            <p className="font-bold">{tool.name}</p>
                            <p>{tool.description}</p>
                        </li>
                    ))}

                </ul>
            </div>

            <div className="flex-1 p-3 border border-muted rounded-lg h-fit  shadow" style={{ background: 'hsl(216deg 13% 8% / 70%)' }}>
                <div className="border border-muted rounded-lg ">
                    <div className="flex justify-between items-start py-2 px-4  ">
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-white">{getSelectedToolDetails().name || "phoneNumber"}</h2>
                            <div>
                                <button
                                    onClick={() => { handleCopy(getSelectedToolDetails().description) }}
                                    className="flex items-center justify-center px-2 py-2 gap-2  bg-muted my-2 hover:bg-gray-600 text-white rounded-lg focus:outline-none w-auto"
                                >
                                    <span className="truncate text-sm font-medium">{getSelectedToolDetails().description}</span>
                                    {copied ? <CheckCheck size={12}/> : <Copy size={12} />}
                                </button>
                            </div>
                            <h2 className="text-2xl font-bold mb-6 text-white">{getSelectedToolDetails().description || "phoneNumber"}</h2>
                        </div>
                        <div className="inline-flex gap-4 ">
                            <button
                                className=' text-xs px-4 py-2 w-full  hover:text-white font-bold transition-all duration-150 ease-in-out group rounded-lg bg-primary/80 hover:saturate-[1.3] hover:bg-primary shadow-sm hover:shadow-md hover:shadow-primary/30 h-9'
                            >
                                Save
                            </button>
                            <button
                                className=' text-xs p-2 w-full  hover:text-white font-bold transition-all duration-150 ease-in-out group rounded-lg  bg-secondary  hover:saturate-[1.3] hover:bg-secondary shadow-sm hover:shadow-md h-9'
                            >
                                <Trash2 />
                            </button>
                        </div>
                    </div>
                    <div className="">
                        <div className="mx-2 bg-foreground shadow-black/10 p-6  shadow-md text-white rounded-t-lg border border-white/10 border-b-0">
                            <ToolAccordion />
                        </div>
                        <div className="px-2 border-t-2 border-muted border-collapse  pb-4 ">
                            <ToolMessages />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ToolEditor;
