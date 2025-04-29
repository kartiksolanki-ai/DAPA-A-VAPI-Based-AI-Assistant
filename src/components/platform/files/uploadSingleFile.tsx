import Link from "next/link";
import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";
interface FileUploadProps {
  onFileUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "text/plain": [".txt"],
    },    maxFiles: 1,  // Single file upload
    onDrop: (acceptedFiles: any) => {
      console.log("File uploaded:", acceptedFiles); // Handle the uploaded file
      if (acceptedFiles.length > 0) {
        onFileUpload(acceptedFiles[0]);
      }
    },
  });
  const handleChooseFileClick = () => {
    if (inputRef.current) {
      inputRef.current.click(); // Trigger the input file dialog
    }
  };

  return (
    <div
      className="flex flex-col sm:flex-row flex-1 h-full"
      data-testid="documents-page-content"
    >
      <div className="flex w-full justify-center items-center">
        <div className="w-full max-w-[330px]">
          <div className="flex flex-col flex-1 gap-4">
            <div className="">
              <div className="space-y-2">
               <div
                  {...getRootProps()}
                  onClick={handleChooseFileClick}
                  className="dropzone group relative border-[3px] min-h-20 flex flex-col items-center justify-center text-[#ffffff4d] hover:text-[#ffffff66] text-wrap mx-auto rounded-xl p-4 cursor-pointer active:scale-[0.98] transition-all duration-150 ease-in-out bg-secondary border-dashed border-border/80 hover:border-border"
                  style={{ opacity: 1, willChange: "opacity" }}
                >
                  <input
                    {...getInputProps()}
                    className="hidden"
                    ref={inputRef}
                  />
                  {/* SVG icon or any other content */}
                  <svg width="29.375" height="27.2754" viewBox="0 0 29.375 27.2754" fill="'none' || '#000000" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mb-2 fill-[#ffffff4d] hover:fill-[#ffffff66]"><g><rect height="27.2754" opacity="0" width="29.375" x="0" y="0"></rect><path d="M13.7988 10.332C13.7988 11.582 14.3945 12.1777 15.6445 12.1777L22.7148 12.1777L22.7148 21.0449C22.7148 23.0762 21.709 24.1016 19.6875 24.1016L11.7376 24.1016C12.279 23.182 12.5879 22.1158 12.5879 20.9863C12.5879 17.5293 9.74609 14.6875 6.28906 14.6875L6.28906 6.23047C6.28906 4.19922 7.30469 3.16406 9.31641 3.16406L13.7988 3.16406ZM16.4062 4.0918L21.7871 9.57031C22.2559 10.0488 22.5391 10.4395 22.5977 10.8398L15.6738 10.8398C15.3125 10.8398 15.1367 10.6641 15.1367 10.3125L15.1367 3.27148C15.5469 3.33984 15.9473 3.62305 16.4062 4.0918Z" fillOpacity="0.85"></path><path d="M11.25 20.9863C11.25 23.6914 8.98438 25.9473 6.28906 25.9473C3.57422 25.9473 1.32812 23.7109 1.32812 20.9863C1.32812 18.2617 3.57422 16.0254 6.28906 16.0254C9.01367 16.0254 11.25 18.2617 11.25 20.9863ZM5.69336 18.4766L5.69336 20.3809L3.7793 20.3809C3.42773 20.3809 3.18359 20.625 3.18359 20.9863C3.18359 21.3477 3.42773 21.582 3.7793 21.582L5.69336 21.582L5.69336 23.4961C5.69336 23.8477 5.92773 24.0918 6.28906 24.0918C6.66016 24.0918 6.89453 23.8477 6.89453 23.4961L6.89453 21.582L8.79883 21.582C9.16016 21.582 9.39453 21.3477 9.39453 20.9863C9.39453 20.625 9.16016 20.3809 8.79883 20.3809L6.89453 20.3809L6.89453 18.4766C6.89453 18.125 6.66016 17.8809 6.28906 17.8809C5.92773 17.8809 5.69336 18.125 5.69336 18.4766Z" fillOpacity="0.85"></path></g></svg>
                  <p>Drag & drop a file here, or click to select a file</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[330px]">
              <div
                className="text-left text-muted-foreground"
                style={{ opacity: 1, willChange: "opacity" }}
              >
                <h2
                  className="text-xl font-medium text-text"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    willChange: "opacity, transform, filter",
                    transform: "none",
                  }}
                >
                  Knowledge Base
                </h2>
                <p
                  className="text-md text-text/40 mb-4"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    willChange: "opacity, transform, filter",
                    transform: "none",
                  }}
                >
                  Knowledge base is a bank of files that are accessible by your
                  assistants.
                </p>
                <p
                  className="text-md text-text/40"
                  style={{
                    opacity: 1,
                    filter: "blur(0px)",
                    willChange: "opacity, transform, filter",
                    transform: "none",
                  }}
                >
                  You can upload a PDF, etc and attach it to your assistants,
                  they pull from these for more context during conversations.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-x-2">
              <button  onClick={handleChooseFileClick} className="inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg ring-2 ring-primary/80 bg-primary/80 hover:saturate-[1.3] hover:bg-primary hover:ring-primary border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-primary/30 h-10 px-4 py-2">
                <span className="text-white/80 group-hover:text-white pointer-events-none">
                  Choose File
                </span>
                <span className="ml-2">
                  <svg
                    width="20.2832"
                    height="19.9316"
                    viewBox="0 0 20.2832 19.9316"
                    fill="'none' || '#000000"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="fill-white/50 group-hover:fill-white/70 w-[16px] h-[16px] group-hover:rotate-90 transition-all duration-150 ease-in-out"
                  >
                    <g>
                      <rect
                        height="19.9316"
                        opacity="0"
                        width="20.2832"
                        x="0"
                        y="0"
                      ></rect>
                      <path
                        d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM9.11133 6.05469L9.11133 9.11133L6.05469 9.11133C5.54688 9.11133 5.19531 9.46289 5.19531 9.9707C5.19531 10.4688 5.54688 10.8008 6.05469 10.8008L9.11133 10.8008L9.11133 13.8672C9.11133 14.3652 9.45312 14.7266 9.95117 14.7266C10.459 14.7266 10.8105 14.375 10.8105 13.8672L10.8105 10.8008L13.877 10.8008C14.375 10.8008 14.7363 10.4688 14.7363 9.9707C14.7363 9.46289 14.375 9.11133 13.877 9.11133L10.8105 9.11133L10.8105 6.05469C10.8105 5.54688 10.459 5.18555 9.95117 5.18555C9.45312 5.18555 9.11133 5.54688 9.11133 6.05469Z"
                        fillOpacity="0.85"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
              <Link

                href="#"
                target="_blank"
                rel="noreferrer"
                className="w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border border-gray-300 text-center text-gray-300 hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 block truncate hover:no-underline"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;