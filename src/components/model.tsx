"use client";

import { Info } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface ContentProps {
  activeTab: string;
}

export function NavigationContent({ activeTab }: ContentProps) {
  const [selectedValue, setSelectedValue] = useState("openai");

  const handleChange = (value: any) => {
    setSelectedValue(value);
  };

  if (activeTab === "model") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-white">Model</h2>
          <p className="opacity-70 text-sm font-medium text-white mt-1">
            This section allows you to configure the model for the assistant.
          </p>
        </div>

        <div className="p-4 bg-[#1b1c20] rounded-lg space-y-6">
          <div className="flex max-lg:flex-col gap-6">
            <div className="space-y-4 lg:w-[70%] w-full">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-normal opacity-40">
                      First Message
                    </span>
                    <Info className="h-4 w-4" color="#8d7739" />
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="New Order"
                  className="bg-[#252525] placeholder-white placeholder-opacity-45 focus:placeholder-white focus:placeholder-opacity-100 text-sm border-[#2A2A2A] rounded p-2 w-full outline-none"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm font-normal opacity-40">
                    System Prompt
                  </span>
                  <Info className="h-4 w-4" color="#8d7739" />
                </div>
                <textarea
                  className="bg-[#252525] placeholder-white placeholder-opacity-45 focus:placeholder-white focus:placeholder-opacity-100 border-[#2A2A2A] px-3 w-full rounded-lg py-3 min-h-[240px] outline-none text-white text-sm"
                  placeholder="This is a blank template with minimal defaults, you can change the model, temperature, and messages."
                />
              </div>
            </div>

            <div className="space-y-4 lg:w-[30%] w-full">
              <div>
                <span className="text-sm font-normal opacity-40 mb-2">
                  Provider
                </span>
                <Select value={selectedValue} onValueChange={handleChange}>
                  <SelectTrigger className="py-3 h-[40px] bg-[#252525] border-[#2A2A2A] opacity-90 font-normal">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem
                      value="openai"
                      className={`text-sm font-normal ${
                        selectedValue === "openai" ? "text-white" : "text-gray-400"
                      }`}
                    >
                      OpenAI
                    </SelectItem>
                    <SelectItem
                      value="gpt3"
                      className={`text-sm font-normal ${
                        selectedValue === "gpt3" ? "text-white" : "text-gray-400"
                      }`}
                    >
                      GPT-3
                    </SelectItem>
                    <SelectItem
                      value="gpt4"
                      className={`text-sm font-normal ${
                        selectedValue === "gpt4" ? "text-white" : "text-gray-400"
                      }`}
                    >
                      GPT-4
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm font-normal opacity-40">Model</span>
                  <Info className="h-4 w-4" color="#8d7739" />
                </div>
                <Select defaultValue="gpt-3.5-turbo">
                  <SelectTrigger className="w-full mt-2 bg-[#252525] border-[#2A2A2A]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-3.5-turbo">gpt-3.5-turbo</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <span className="block mb-2 text-sm font-normal text-white opacity-40 mt-2">
                  Knowledge Base
                </span>
                <Select defaultValue="select">
                  <SelectTrigger className="w-full bg-[#252525] border-[#2A2A2A]">
                    <SelectValue placeholder="Select Files" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="select">Select Files</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between mt-2 gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-normal text-white opacity-40">
                      Temperature
                    </span>
                    <Info className="h-4 w-4" color="#8d7739" />
                  </div>
                  <div className="h-8 w-8 rounded-sm bg-[#252525] text-sm text-white ml-auto font-normal flex items-center justify-center">
                    0.7
                  </div>
                </div>
                <Slider
                  defaultValue={[0.7]}
                  max={1}
                  step={0.1}
                  className="[&_[role=slider]]:bg-[#40B8A6] my-2"
                />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-normal text-white opacity-40">
                    Max Tokens
                  </span>
                  <Info className="h-4 w-4" color="#8d7739" />
                </div>
                <input
                  type="number"
                  defaultValue="250"
                  className="w-full bg-[#252525] border border-[#2A2A2A] rounded p-2 text-sm"
                />
              </div>

              <div className="flex justify-between items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-normal text-white opacity-40">
                    Detect Emotion
                  </span>
                  <Info className="h-4 w-4" color="#8d7739" />
                </div>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Other tab content...
  if (activeTab === "transcriber") {
    return (
      <div>
        <h2 className="text-base font-semibold">Transcriber</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">
          Configure transcription settings for your assistant.
        </p>
        {/* Add transcriber content */}
      </div>
    );
  }

  if (activeTab === "voice") {
    return (
      <div>
        <h2 className="text-base font-semibold">Voice</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">
          Configure voice settings for your assistant.
        </p>
        {/* Add voice content */}
      </div>
    );
  }

  if (activeTab === "functions") {
    return (
      <div>
        <h2 className="text-base font-semibold">Functions</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">
          Configure custom functions for your assistant.
        </p>
        {/* Add functions content */}
      </div>
    );
  }

  if (activeTab === "advanced") {
    return (
      <div>
        <h2 className="text-base font-semibold">Advanced</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">
          Configure advanced settings for your assistant.
        </p>
        {/* Add advanced content */}
      </div>
    );
  }

  if (activeTab === "analysis") {
    return (
      <div>
        <h2 className="text-base font-semibold">Analysis</h2>
        <p className="text-[#6C6C6C] text-xs mt-1">
          View and configure analysis settings.
        </p>
        {/* Add analysis content */}
      </div>
    );
  }

  return null;
}

