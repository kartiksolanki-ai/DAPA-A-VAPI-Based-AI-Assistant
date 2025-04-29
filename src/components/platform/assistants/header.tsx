import { Button } from "@/components/ui/button";
import { MoreVertical, Phone, Menu } from 'lucide-react';

interface AssistHeaderProps {
  toggleSidebar: () => void;
}

export function AssistHeader({ toggleSidebar }: AssistHeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#1d1e22] border-b border-[#2A2A2A]">
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-[#6C6C6C]"
          onClick={toggleSidebar}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold text-white">New Assistant</h1>
      </div>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          className="bg-[#40B8A6] hover:bg-[#40B8A6]/90 text-white text-xs px-3 py-2 h-7 rounded hidden sm:flex"
        >
          <Phone className="h-3 w-3 mr-2" />
          Talk with Assistant
        </Button>
        <Button variant="ghost" size="icon" className="text-[#6C6C6C]">
          <MoreVertical className="h-5 w-4" />
        </Button>
      </div>
    </header>
  );
}

