"use client";
import SmallCard from "@/components/ui/SmallCard";
import smallCardData from "@/components/voice-library/smallCardData";
import { Button } from "@/components/ui/button";
import Slider from "@/components/ui/VoiceSlider";
import { useRouter } from "next/navigation";
import { Copy, RefreshCcw } from "lucide-react";
import VoiceImage from "../../../../public/voice.svg";
import {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useState } from "react";

interface GeneralSelectProps {
  defaultValue: string;
  name: string;
}

export default function OverView() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    router.push("/pages/platform/assistants");
  };

  const GeneralSelect: React.FC<
    GeneralSelectProps & { options: { value: string; label: string }[] }
  > = ({ defaultValue, name, options }) => {
    return (
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="w-40 h-10 bg-black border-[#2A2A2A] text-blue-100">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
        {/* <SelectContent>
        <SelectItem value={defaultValue}>{name}</SelectItem>
      </SelectContent> */}
      </Select>
    );
  };

  const handleClipboardClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    // max-w-6xl
    <div
      className="max-w-screen-2xl w-full overflow-hidden border-border rounded-2xl shadow-sm shadow-black/20 "
      style={{ backgroundColor: "#1d1e22" }}
    >
      <header className=" flex justify-between items-center mb-6 bg-secondary/50 border-b border-border backdrop-blur-md z-40 rounded-t-xl px-4">
        <div className="flex gap-2 items-center my-2 px-2">
          {/* <AudioLines className="bg-white"/> */}
          <div className="bg-secondary rounded-lg">
            <img src={VoiceImage.src} alt="" className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold text-white ">Voice Library</h1>
        </div>
      </header>
      <h2 className=" px-4 text-lg text-white font-bold">Featured Voices</h2>
      <div className="relative mb-8">
        <Slider />
      </div>
      <div className="flex items-center justify-between">
        <h2 className="px-4 text-lg text-white mb-4 font-bold">
          Explore All Voices
        </h2>
        <div className="flex justify-center gap-4 mb-4 px-4">
          <button className="bg-[#1e1e1e]  text-white px-2 py-2 rounded-md flex items-center gap-2 border-2 border-gray-800 text-sm">
            <span>
              <Copy size={12} />
            </span>
            Clone
          </button>
          <button className="bg-[#1e1e1e]  text-white px-2 py-2 rounded-md flex items-center gap-2 border-2 border-gray-800 text-sm">
            <span>+</span>
            Add
          </button>
          <button className="bg-[#1e1e1e]  text-white px-2 py-2 rounded-md flex items-center gap-2 border-2 border-gray-800 text-sm">
            <span>
              <RefreshCcw size={12} />
            </span>
            Sync
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 mb-6 px-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search for voices..."
          className="flex-grow min-w-[200px] w-[48%] px-4 h-9 py-2 border rounded bg-black text-white border-gray-700 focus:outline-none"
        />
        {/* Dropdown menus */}
        <GeneralSelect
          defaultValue={"all"}
          name={"all"}
          options={[
            { value: "cartesia", label: "Cartesia" },
            { value: "all", label: "All" },
            { value: "11labs", label: "11labs" }
          ]}
        />
        <GeneralSelect
          defaultValue={"11labs"}
          name={"11labs"}
          options={[
            { value: "cartesia", label: "Cartesia" },
            { value: "all", label: "All" },
            { value: "11labs", label: "11labs" }
          ]}
        />
        <GeneralSelect
          defaultValue={"select"}
          name={"Select Accent"}
          options={[
            { value: "select", label: "Select Accent" },
            { value: "all", label: "All" },
            { value: "11labs", label: "11labs" }
          ]}
        />
      </div>

      {/* Small Cards Section */}
      <div className="relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 pt-8 pb-8">
          {smallCardData.map((card, index) => (
            <SmallCard
              key={index}
              title={card.title}
              rate={card.rate}
              ping={card.ping}
              onClipboardClick={handleClipboardClick}
            />
          ))}
        </div>
      </div>
      {showAlert && (
        <Alert
          variant="default"
          className="absolute mt-6  w-52 bg-primary text-white border-none flex  justify-center items-end bottom-4 right-2 z-10  transition-transform transform translate-y-full animate-slide-up"
        >
          <AlertDescription className="flex items-center text-sm   mt-1">
            <span>Copied to Clipboard</span>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
