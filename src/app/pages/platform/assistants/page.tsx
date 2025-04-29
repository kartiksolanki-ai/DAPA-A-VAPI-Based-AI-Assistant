"use client";

import { useState, useEffect } from "react";
import { Copy, Info, Component, CircleCheck, Trash2, Menu, Mic, VolumeX, ActivityIcon as Function, Settings, BarChart3 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { NavigationContent } from "@/components/model";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AssistHeader } from "@/components/platform/assistants/header";

const tabs = [
  { id: "model", label: "Model", icon: Component },
  { id: "transcriber", label: "Transcriber", icon: Mic },
  { id: "voice", label: "Voice", icon: VolumeX },
  { id: "functions", label: "Functions", icon: Function },
  { id: "advanced", label: "Advanced", icon: Settings },
  { id: "analysis", label: "Analysis", icon: BarChart3 },
];

export default function NewAssistant() {
  const [activeTab, setActiveTab] = useState("model");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const imageFields = {
    costs: [
      { id: 1, name: 'Velp Fixed Cost', color: '#40B8A6' },
      { id: 2, name: 'deepgram', color: '#FF69B4' },
      { id: 3, name: 'gpt 3.5 turbo', color: '#4169E1' },
      { id: 4, name: 'canfes', color: '#FFD700' },
      { id: 5, name: 'web', color: '#9400D3' },
    ]
  };

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className="flex h-screen overflow-hidden bg-[#1d1e22] text-white font-sans rounded-lg">
      {/* Sidebar */}
      <div className={`bg-[#1d1e22] border-r border-[#2A2A2A] p-4 ${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-64 lg:w-72`}>
        <div className="flex items-center justify-between py-2 gap-1 border-[#2e2d2d]">
          <div className="flex items-center gap-2 flex-wrap">
            <Button className="bg-[#40B8A6] hover:bg-[#40B8A6]/90 text-white text-xs px-3 py-1 h-7 rounded">
              Create Assistant <span className="ml-1 opacity-50">⌘</span>
            </Button>
            <span className="text-[#6C6C6C] text-sm border border-[#2e2d2d] px-3 py-1 rounded">
              Document...
            </span>
          </div>
        </div>
        <div className="border-t-[1px] border-[#2A2A2A] my-4"></div>
        <div className="bg-[#1e2c2d] rounded p-2 text-sm font-medium">
          New Assistant
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <AssistHeader toggleSidebar={function (): void {
          throw new Error("Function not implemented.");
        } } />

        {/* Main Content Area */}
        <div className="overflow-auto p-4 md:p-6 scrollbar-hide [scrollbar-width:none]">
          {/* Assistant ID */}
          <div className="mb-4 w-full">
            <div className="flex items-center gap-2 text-xs text-white mb-1 font-medium">
              Assistant ID
            </div>
            <div className="rounded-sm px-4 py-1 mt-2 bg-[#27262b] flex items-center justify-between border-[1px] border-[#202125] w-full md:w-72">
              <div className="text-[#908f8f] text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                4c95c227-c472-4b3a-...
              </div>
              <div className="flex gap-2">
                <div className="flex justify-center items-center h-10 w-10 rounded-sm border-2 border-[#202125]">
                  <Copy className="h-4 w-4 cursor-pointer opacity-40" />
                </div>
                <div className="flex justify-center items-center h-10 w-10 rounded-sm border-2 border-[#202125]">
                  <Info className="h-4 w-4 cursor-pointer opacity-40" />
                </div>
              </div>
            </div>
          </div>

          {/* Model Types */}
          <div className="flex flex-wrap items-center gap-4 mb-4 text-xs">
            {imageFields.costs.map((field) => (
              <span key={field.id} className="flex items-center gap-1">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: field.color }}
                />
                {field.name}
              </span>
            ))}
            <div className="mt-2 md:mt-0 md:ml-auto flex items-center gap-2 text-white text-sm">
              Mode
              <Select defaultValue="web">
                <SelectTrigger className="w-[80px] h-8 text-sm bg-transparent border-[#2A2A2A]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web" className="text-white">
                    Web
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-[#27262b] rounded-lg p-3 gap-2">
              <div className="flex items-center justify-between mb-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex justify-center items-center h-7 w-7 rounded-sm bg-[#1c1c1c] text-[#737373] font-medium text-sm">
                    $
                  </div>
                  <span className="text-white text-sm font-medium">Cost</span>
                  <Info className="h-4 w-4 text-[#6C6C6C]" color="#8d7739" />
                </div>
                <div className="text-[#40B8A6] text-sm px-4 bg-[#1c1c1c] py-2 rounded-sm font-medium">
                  ~$0.09 <span className="text-[#6C6C6C] ml-2">/min</span>
                </div>
              </div>
              <div className="h-3 bg-[#252525] rounded-l-full overflow-hidden mt-5">
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "linear-gradient(to right, #418c75 40%, #1e6180 40%, #8d7739 100%)",
                  }}
                />
              </div>
            </div>

            <div className="bg-[#27262b] rounded-lg p-3">
              <div className="flex items-center justify-between mb-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex justify-center items-center h-7 w-7 rounded-sm bg-[#1c1c1c] text-[#737373] font-medium text-sm">
                    $
                  </div>
                  <span className="text-white text-sm font-medium">
                    Latency
                  </span>
                  <Info className="h-4 w-4 text-[#6C6C6C]" color="#8d7739" />
                </div>
                <div className="text-[#40B8A6] text-sm px-4 bg-[#1c1c1c] py-2 rounded-sm font-medium">
                  ~700 <span className="text-[#6C6C6C] ml-2">ms</span>
                </div>
              </div>
              <div className="h-3 bg-[#252525] rounded-l-full overflow-hidden mt-5">
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "linear-gradient(to right, #1e6180 40%, #418c75 40%,  #8d7739 90%)",
                  }}
                />
              </div>
            </div>
          </div>

          <div className="border-t-[1px] border-[#2A2A2A] my-4"></div>

          {/* Tabs */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2 bg-[#13171a] rounded-lg px-2 py-1">
              {/* Medium and smaller screen - Menu button */}
              <div className="xl:hidden">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 px-3 py-2 h-9 text-sm text-[#6C6C6C] hover:bg-[#282828]/50"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Component className="h-4 w-4" />
                  Model
                </Button>
                {/* Dropdown for medium screens and smaller */}
                {isMenuOpen && (
                  <div className="absolute bg-[#13171a] rounded-lg px-2 py-1 mt-2 z-10">
                    {tabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <Button
                          key={tab.id}
                          variant="ghost"
                          className={`px-3 py-2 h-9 text-sm flex items-center gap-2 ${activeTab === tab.id
                              ? "text-white bg-[#282828]"
                              : "text-[#6C6C6C] hover:bg-[#282828]/50"
                            }`}
                          onClick={() => {
                            setActiveTab(tab.id);
                            setIsMenuOpen(false); // Close the dropdown on tab click
                          }}
                        >
                          <Icon className="h-4 w-4" />
                          {tab.label}
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
              {/* Tabs for larger screens */}
              <div className="max-xl:hidden xl:flex">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant="ghost"
                      className={`px-3 py-2 h-9 text-sm relative flex items-center gap-2 ${activeTab === tab.id
                          ? "text-white bg-[#282828]"
                          : "text-[#6C6C6C] hover:bg-[#282828]/50"
                        }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button className="bg-[#40B8A6] hover:bg-[#40B8A6]/90 text-white text-sm px-4 py-2 h-9 rounded-md font-medium flex items-center gap-2">
                <CircleCheck className="h-4 w-4 opacity-50" />
                Publish
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 bg-[#1c1c1c] text-[#737373] hover:bg-[#1c1c1c]/80"
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
          {/* Content Area */}
          <div className="bg-[#13171a] rounded-lg p-4 my-10">
            <NavigationContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}

