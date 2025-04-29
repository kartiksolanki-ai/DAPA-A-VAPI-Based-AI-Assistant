import React, { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUp10, Clock9, LibraryBig, Link as LINK, SquarePen, Wand } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/compat/router";
interface DialogBoxProps {
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
}

interface CardProps {
  cardId:number;
  title: string;
  description: string;
  icon?: React.ReactNode; 
  selected?: boolean
  setSelectedCardDescription: Function
  handleCardSelect:Function
  setSelectedCardId:Function
  selectedCardId:number
}

interface DialogInput {
  name: string;
  placeholder: string;
  icon?: React.ReactNode;
}

interface CustomToolProps{
  className?:string,
  headerRows:{ key: string; type: string; value: string }[],
  handleHeaderChange:Function,
  removeHeaderRow:Function,
  addHeaderRow:Function
}


const DialogCard: React.FC<CardProps> = ({selectedCardId,cardId,title, description, icon, selected, setSelectedCardDescription,handleCardSelect,setSelectedCardId }) => {
  const handleClick = () => {
    handleCardSelect(cardId); // Handle card selection
    setSelectedCardDescription(description); // Set the description based on the selected card
    setSelectedCardId(cardId)
  };

  return (
    <button className={`w-full px-4 py-2 active:scale-[0.98]  ${selectedCardId===cardId ?  "bg-white/15" : "bg-transparent hover:bg-secondary/100 "}  border-2 border-white/10  rounded-md transition-colors cursor-pointer text-secondary-foreground min-w-14`}
    onClick={handleClick}
    >

      {icon && <div className="mb-2">{icon}</div>}
      <div className="text-left text-wrap flex flex-col gap-2">
        <h3 className="text-base font-medium ">{title}</h3>
        <p className="text-sm text-muted-foreground ">{description}</p>
      </div>
    </button>
  );
};


export const CustomToolInput: React.FC<CustomToolProps>=({className,headerRows,handleHeaderChange,removeHeaderRow,addHeaderRow})=>{
  return (<div className={className}> 
  <div>
            <label htmlFor={`serverurl`} className=" text-sm font-medium text-white flex gap-2 items-center">
                <LINK size={16}/> 
                <span>Server URL</span>
              </label>
              <input
                type="text"
                id={`serverurl`}
                placeholder={"Server url for your custom POST endpoint "}
                className="my-1 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary
                hover:bg-black
                text-white
                bg-transparent
                "
                required
              />
              <span className="text-red-500 text-sm hidden" id={`error-`}>
                This field is required.
              </span>
            </div>
          <div>
            <label htmlFor={`timeout`} className="text-sm font-medium text-white flex gap-2 items-center py-1">
            <Clock9 size={16} /> 
          <span>Timeout Seconds</span>
              </label>
              <p className="text-muted-foreground text-xs">This is the timeout in seconds for the request to your server. Must be between 1 and 120 seconds.</p>
              <input
                type="text"
                id={`timeout`}
                placeholder={"20"}
                className="my-1 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary
                hover:bg-black
                text-white
                bg-transparent
                "
                required
              />
              <span className="text-red-500 text-sm hidden" id={`error-`}>
                This field is required.
              </span>
            </div>
          <div className="space-y-2 text-white">
            <label htmlFor="headers" className="flex gap-2 items-center text-sm font-medium">
            <SquarePen size={16} /> 
            <span>Headers</span>
            </label>
            <p className="text-muted-foreground my-1 text-sm ">
            These are the custom headers to include in the request sent to your server. Each key-value pair represents a header name and its value.
            </p>
            {headerRows.map((row, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Key"
            value={row.key}
            onChange={(e) => handleHeaderChange(index, "key", e.target.value)}
            className="my-1 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary hover:bg-black text-white bg-transparent"
          />
          <select
            value={row.type}
            onChange={(e) => handleHeaderChange(index, "type", e.target.value)}
            className="my-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary hover:bg-black text-white bg-transparent"
          >
            <option value="fieldType">Field Type</option>
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="object">Object</option>
          </select>
          <input
            type="text"
            placeholder="Value"
            value={row.value}
            onChange={(e) => handleHeaderChange(index, "value", e.target.value)}
            className="my-1 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary hover:bg-black text-white bg-transparent"
          />
          <button onClick={() => removeHeaderRow(index)} className="text-red-500">
            &times; 
          </button>
        </div>
      ))}
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
            onClick={()=>addHeaderRow()}>
              Add Row
            </button>
          </div>
    </div>)}

const DialogBox = ({ setIsOpen, isOpen }: DialogBoxProps) => {
  const dialogCards = [
    { id:1,title: "Custom Tool", description: "Create a custom Function or choose from one of the supported providers.", icon: <Wand />, selected: true },
    { id:2,title: "Make", description: "Connect your Make.com Scenario as a tool which can be triggered during conversations.", icon: <LibraryBig />, selected: false },
    { id:3,title: "GoHighLevel", description: "Connect your GoHighLevel Workflows as a tool, which can be triggered during conversations.", icon: <ArrowUp10 />, selected: false },
  ];
  const [selectedCardDescription, setSelectedCardDescription] = useState(dialogCards[0]?.description);
  const [dialogInputs, setDialogInputs] = useState<DialogInput[]>([]); 
  
  const [selectedCardId,setSelectedCardId]=useState(1);
  
  const handleCardSelect = (id: number) => {
    if (id === 2) {
      setDialogInputs([{ name: "Server URL", placeholder: "Webhook URL from your Make.com scenario" }]); 
    } else if (id === 3) {
      setDialogInputs([{ name: "Server URL", placeholder: "Webhook URL from your GoHighLevel workflow" }]); 
    } 
    else {
      setDialogInputs([]);
    }
  };
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
    const newRows:any = [...headerRows];
    newRows[index][field] = value;
    setHeaderRows(newRows);
  };

  const handleNavigation = () => {
    // router.push("/tool-editor");
    // if (router) { // Check if router is defined
    //   router.push("/tool-editor");
    // }
    window.location.href = '/pages/platform/tools-editor'; // Updated to include leading slash
  };

  return (

    <Sheet open={isOpen} onOpenChange={setIsOpen} >
      <SheetContent side={"left"} className="w-[90%] sm:max-w-[600px] px-0 py-0 border-border rounded-2xl overflow-y-scroll" >
        <SheetHeader className="bg-secondary py-4 px-6">
          <SheetTitle className='flex gap-2 items-center text-white'>
            <img src="/Tools.png" className='w-6 h-6' alt="" />
            Create a Tool</SheetTitle>
        </SheetHeader>
        <div className="p-4 space-y-6 " style={{ backgroundColor: "#1d1e22" }}>
          {/* Choose a provider section */}
          <div>
            <h2 className="text-lg font-medium text-white">Choose a provider</h2>
            <p className="text-sm text-secondary-foreground">
              Create a custom Function or choose from one of the supported providers.
            </p>
            <div className="mt-4 flex space-x-4">
              {

                dialogCards.map((card, index) => (
                  <div key={index}>
                    <DialogCard
                      title={card.title}
                      description={card.description}
                      selected={card.selected}
                      icon={card.icon}
                      setSelectedCardDescription={setSelectedCardDescription}
                      handleCardSelect={handleCardSelect}
                      cardId={card.id}
                      selectedCardId={selectedCardId}
                      setSelectedCardId={setSelectedCardId}
                    />

                  </div>
                ))}
            </div>
            <div className="text-sm text-muted-foreground mt-2">{selectedCardDescription}</div>
          </div>

          <div className="bg-secondary p-4 rounded-lg">
          {dialogInputs.map((input, index) => (
            <div key={index}>
              <label htmlFor={`input-${index}`} className="flex gap-2 items-center text-sm font-medium text-white">
              <LINK size={16}/>  {input.name}
              </label>
              <input
                type="text"
                id={`input-${index}`}
                placeholder={input.placeholder}
                // className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary hover:bg-black bg-transparent"
                className="my-1 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary
                hover:bg-black
                text-white
                bg-transparent
                "
                required
              />
              <span className="text-red-500 text-sm hidden" id={`error-${index}`}>
                This field is required.
              </span>
            </div>
          ))}
          {selectedCardId===1  && <CustomToolInput headerRows={headerRows} handleHeaderChange={handleHeaderChange} addHeaderRow={addHeaderRow} removeHeaderRow={removeHeaderRow} />}

            </div>    

          <div className="flex justify-end space-x-4">
            <button className='px-4 py-2 bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '>
              Clear
            </button>
            <button
            className='px-4 py-2 text-muted-foreground hover:text-white font-bold transition-all duration-150 ease-in-out group rounded-lg bg-primary/80 hover:saturate-[1.3] hover:bg-primary shadow-sm hover:shadow-md hover:shadow-primary/30'
            //  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
             >
              Save
            </button>
          </div>
          
        </div>
        <div className="absolute flex justify-end space-x-4 bottom-2 right-4">
            <button className='px-4 py-2 bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '>
              Close
            </button>
            <button className='px-4 py-2 bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '>
              Previous
            </button>
            <div>
        <button className="px-4 py-2 bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md"
        type="button" onClick={handleNavigation}>
          Next
        </button>
      {/* <Link href="platform/tools-editor">
      </Link> */}
    </div>
            {/* <button className='px-4 py-2 bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '>Next</button> */}
            {/* <button className='px-4 py-2 bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '
            <Link href="/tools-editor" className='px-4 py-2 bg-secondary/40 font-bold text-muted-foreground hover:text-white rounded-lg transition-all duration-150 ease-in-out hover:bg-secondary hover:saturate-[1.3] hover:shadow-secondary/30 hover:shadow-md '>
                    onClick={() => router.push('/tools-editor')}
                    >
              </Link>
                     */}
            {/* </button> */}
          </div>
      </SheetContent>
      
    </Sheet>
    
  );
};

export default DialogBox;
