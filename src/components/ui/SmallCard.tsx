import { ClipboardList } from "lucide-react"; // Importing clipboard icon from lucide-react
import { Alert } from "./alert";

interface SmallCardProps {
  title: string;
  rate: string;
  ping: string;
  onClipboardClick: Function;
}

const SmallCard: React.FC<SmallCardProps> = ({ title, rate, ping, onClipboardClick }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(title);
    onClipboardClick();
    // alert(`Copied "${title}" to clipboard!`); // Optional confirmation
  };

  return (
    <div className="relative p-4 bg-[#1e1e1e] rounded-lg shadow-md border border-gray-700 hover:shadow-lg hover:border-[#00ffcc] hover:bg-primary/5 hover:shadow-[#00ffcc33] transition-all duration-300 ease-in-out" >

      <div className="flex items-center justify-between">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-300 h-8">{title}</h3>
        {/* Clipboard icon */}
        <button
          className=" text-gray-400 hover:text-white"
          onClick={handleCopy}
          title="Copy to clipboard"
        >
          <ClipboardList size={16} />
        </button>

      </div>
      <div className="flex flex-col  place-self-end items-center justify-end mt-4 ">
        {/* Rate */}
        <p className="text-sm text-gray-400">
          <span className="text-white">{rate}</span> / min</p>

        {/* Ping */}
        <p className="text-sm text-gray-400">~
          <span className="text-white">{ping} </span>
          ms</p>
      </div>

    </div>

  );
};

export default SmallCard;
