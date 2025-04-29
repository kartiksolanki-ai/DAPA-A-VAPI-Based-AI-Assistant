import Link from "next/link";
import React from "react";

interface UploadedFile {
  name: string;
  size: string;
  type: string;
  createdAt: string;
}

interface UploadedFileDetailsProps {
  file: UploadedFile;
  onDelete: () => void;
}

const UploadedFileDetails: React.FC<UploadedFileDetailsProps> = ({
  file,
  onDelete,
}) => {
  return (
    <>
      {/* <div className="bg-secondary p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="w-10 h-10 fill-primary"
          >
            <path d="M6 2v20h12V6l-6-4H6zm7 1.5L17.5 7H13V3.5z" />
          </svg>
          <div>
            <p className="text-lg font-bold text-text">{file.name}</p>
            <p className="text-sm text-text/50">
              {file.type} - {file.size}
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={onDelete}
            className="text-sm font-semibold text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-text">
          Metadata:
          <br />
          Created At: {file.createdAt}
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary text-white rounded-lg">
            Download
          </button>
          <button className="px-4 py-2 bg-gray-200 text-text rounded-lg">
            Copy URL
          </button>
        </div>
      </div>
    </div> */}

      <div
        className="flex flex-col sm:flex-row flex-1 h-full"
        data-testid="documents-page-content"
      >
        <div
          className="border-r border-border hide-scrollbar sm:max-w-[320px]"
          data-testid="documents-menu-panel"
        >
          <div className="flex p-4 sticky top-0 border-b border-border bg-foreground/5 backdrop-blur-lg">
            <div className="flex gap-2">
              <div className="flex flex-col flex-1 gap-4">
                <div className="">
                  <div className="space-y-2">
                    <div
                      role="presentation"
                      className="dropzone group relative  border-dashed border-[3px] min-h-20 flex flex-col items-center justify-center text-wrap mx-auto rounded-xl p-4 cursor-pointer active:scale-[0.98] transition-all duration-150 ease-in-out bg-secondary border-border/80 hover:border-border"
                    >
                      <input
                        accept="text/markdown,application/pdf,text/plain,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        type="file"
                        className="hidden"
                      />
                      <svg
                        width="29.375"
                        height="27.2754"
                        viewBox="0 0 29.375 27.2754"
                        fill="'none' || '#000000"
                        stroke="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-12 h-12 mb-2 fill-icon/30 group-hover:fill-icon/40 fill-[#ffffff4d] hover:fill-[#ffffff66]"
                      >
                        <g>
                          <rect
                            height="27.2754"
                            opacity="0"
                            width="29.375"
                            x="0"
                            y="0"
                          ></rect>
                          <path
                            d="M13.7988 10.332C13.7988 11.582 14.3945 12.1777 15.6445 12.1777L22.7148 12.1777L22.7148 21.0449C22.7148 23.0762 21.709 24.1016 19.6875 24.1016L11.7376 24.1016C12.279 23.182 12.5879 22.1158 12.5879 20.9863C12.5879 17.5293 9.74609 14.6875 6.28906 14.6875L6.28906 6.23047C6.28906 4.19922 7.30469 3.16406 9.31641 3.16406L13.7988 3.16406ZM16.4062 4.0918L21.7871 9.57031C22.2559 10.0488 22.5391 10.4395 22.5977 10.8398L15.6738 10.8398C15.3125 10.8398 15.1367 10.6641 15.1367 10.3125L15.1367 3.27148C15.5469 3.33984 15.9473 3.62305 16.4062 4.0918Z"
                            fillOpacity="0.85"
                          ></path>
                          <path
                            d="M11.25 20.9863C11.25 23.6914 8.98438 25.9473 6.28906 25.9473C3.57422 25.9473 1.32812 23.7109 1.32812 20.9863C1.32812 18.2617 3.57422 16.0254 6.28906 16.0254C9.01367 16.0254 11.25 18.2617 11.25 20.9863ZM5.69336 18.4766L5.69336 20.3809L3.7793 20.3809C3.42773 20.3809 3.18359 20.625 3.18359 20.9863C3.18359 21.3477 3.42773 21.582 3.7793 21.582L5.69336 21.582L5.69336 23.4961C5.69336 23.8477 5.92773 24.0918 6.28906 24.0918C6.66016 24.0918 6.89453 23.8477 6.89453 23.4961L6.89453 21.582L8.79883 21.582C9.16016 21.582 9.39453 21.3477 9.39453 20.9863C9.39453 20.625 9.16016 20.3809 8.79883 20.3809L6.89453 20.3809L6.89453 18.4766C6.89453 18.125 6.66016 17.8809 6.28906 17.8809C5.92773 17.8809 5.69336 18.125 5.69336 18.4766Z"
                            fillOpacity="0.85"
                          ></path>
                        </g>
                      </svg>
                      <p className="text-sm text-text/30 font-semibold text-center text-[#ffffff4d] hover:text-[#ffffff66]">
                        Drag and drop a file here or click to select file
                        locally.
                      </p>
                      <ul className="justify-self-end mt-auto"></ul>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-x-2">
                  <button className="inline-flex w-full items-center justify-center whitespace-nowrap text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg ring-2 ring-primary/80 bg-primary/80 hover:saturate-[1.3] hover:bg-primary hover:ring-primary border-t-[1px] border-b-[0px] border-l-[0px] border-r-[0px] border-white/30 hover:border-white/40 active:border-b-0 active:border-l-0 active:border-r-0 shadow-sm shadow-black/20 hover:shadow-md hover:shadow-primary/30 h-10 px-4 py-2">
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
                    className="w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 block truncate hover:no-underline border-gray-600 hover:border-gray-500 text-[#ffffff4d] hover:text-[#ffffff66]"
                  >
                    Documentation
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-mt-2" data-testid="documents-menu">
            <div
              role="list"
              data-testid="assistants-list"
              className="flex-col w-full sm:max-w-[320px] p-4 hide-scrollbar gap-y-2 hidden sm:flex"
            >
              <div className="group flex flex-col p-2 rounded-lg w-full border border-transparent hover:bg-background/50 cursor-pointer transition-all duration-150 ease-in-out bg-primary/10">
                <div className="flex justify-between items-center transition-all duration-150 ease-in-out">
                  <div className="flex flex-col justify-between items-start">
                    <div className="ellipsis-text font-semibold text-sm text-text text-[#ffffff4d] hover:text-[#ffffff66]">
                      yaqoob.pdf
                    </div>
                    <div className="flex gap-1.5 items-center overflow-hidden">
                      <p className="ellipsis-text text-sm text-text/40"></p>
                    </div>
                  </div>
                </div>
                <div className="description-text text-xs text-text/60 text-[#ffffff4d] hover:text-[#ffffff66]">
                  PDF File
                </div>
              </div>
            </div>
            <div className="sm:hidden w-[300px] sm:max-w-[320px] p-4">
              <button
                className="inline-flex items-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 w-full justify-between"
                type="button"
                id="radix-:r2u:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
              >
                <span>{file.name}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down ml-2 h-4 w-4 shrink-0 opacity-50"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="p-[16px] flex-1 hide-scrollbar flex flex-col"
          data-testid="file-viewer-container"
        >
          <div
            className="flex flex-1 flex-col xl:flex-row"
            data-testid="file-viewer-flex-container"
          >
            <div
              className="flex flex-col mr-0 xl:mr-4 w-full"
              data-testid="file-viewer-left-panel"
            >
              <div
                className="flex flex-1 mb-4 md:mb-0"
                data-testid="file-viewer-card"
              >
                <div
                  data-testid="file-viewer-card-body"
                  className="flex flex-col w-full"
                >
                  <div
                    className="flex flex-col gap-4"
                    data-testid="file-viewer-stack"
                  >
                    <div className=" p-3 rounded-xl border border-border w-full min-h-40 flex flex-col items-center justify-center bg-transparent border-gray-600">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="text-8xl text-text/60 text-[#ffffff4d] hover:text-[#ffffff66]"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"></path>
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"></path>
                      </svg>{" "}
                      <div className="text-sm mt-2 text-wrap word-wrap text-text text-[#ffffff4d] hover:text-[#ffffff66]">
                        yaqoob.pdf
                      </div>{" "}
                    </div>
                    <div>
                      <div className="chakra-editable text-text css-qqfgvy">
                        <span className="chakra-editable__preview css-1gasyng pt-0 pb-0 w-full cursor-pointer text-white">
                        {file.name}
                        </span>
                        
                      </div>
                      <div className="text-text/60 text-[#ffffff4d] hover:text-[#ffffff66]">
                      {file.type} - {file.size}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-9 px-3 space-x-2 text-[#ffffff4d] hover:text-[#ffffff66] border-gray-700">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 fill-[#ffffff4d] hover:fill-[#ffffff66]"
                        >
                          <path
                            d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Download
                      </button>
                      <button className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-9 px-3 space-x-2 text-[#ffffff4d] hover:text-[#ffffff66] border-gray-700">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 fill-[#ffffff4d] hover:fill-[#ffffff66]"
                        >
                          <path
                            d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Copy URL{" "}
                      </button>
                      <button className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out group bg-red-500 text-white hover:bg-red-400 active:scale-[0.98] rounded-lg py-1 px-2 space-x-2" onClick={onDelete}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2"
                        >
                          <path
                            d="M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>{" "}
                        Delete{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-testid="file-viewer-right-panel-card"
              className="flex flex-col flex-1"
            >
              <div
                data-testid="file-viewer-right-panel-card-body"
                className="flex flex-col p-4 w-[250px]"
              >
                <div
                  className="flex flex-col gap-4 "
                  data-testid="file-viewer-right-panel-stack"
                >
                  <div data-testid="file-viewer-id">
                    <h2 className="chakra-heading text-text css-1paks7o text-white">ID</h2>
                    <div className="text-text/60 text-[#ffffff4d] hover:text-[#ffffff66]">
                      59c0e18b-6508-4f41-86aa-339337a20f31{" "}
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg bg-border/50 border border-border/80 hover:bg-secondary hover:border-border text-text/50 hover:!text-text w-[24px] h-[24px] text-[#ffffff4d] hover:text-[#ffffff66]"
                        aria-label="Copy File ID"
                        data-state="closed"
                      >
                        <svg
                          width="21.0254"
                          height="20.4785"
                          viewBox="0 0 21.0254 20.4785"
                          fill="'none' || '#000000"
                          stroke="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-[14px] h-[14px] fill-[#ffffff4d] hover:fill-[#ffffff66]"
                        >
                          <g>
                            <rect
                              height="20.4785"
                              opacity="0"
                              width="21.0254"
                              x="0"
                              y="0"
                            ></rect>
                            <path
                              d="M15.9277 3.04688L15.9277 4.54102L14.3555 4.54102L14.3555 3.13477C14.3555 2.11914 13.8086 1.5918 12.8418 1.5918L3.08594 1.5918C2.10938 1.5918 1.57227 2.11914 1.57227 3.13477L1.57227 12.8418C1.57227 13.8574 2.10938 14.3848 3.08594 14.3848L4.73633 14.3848L4.73633 15.957L3.06641 15.957C1.01562 15.957 0 14.9414 0 12.9297L0 3.04688C0 1.03516 1.01562 0.0195312 3.06641 0.0195312L12.8711 0.0195312C14.9023 0.0195312 15.9277 1.03516 15.9277 3.04688Z"
                              fillOpacity="0.85"
                            ></path>
                            <path
                              d="M7.80273 20.4785L17.6074 20.4785C19.6387 20.4785 20.6641 19.4629 20.6641 17.4512L20.6641 7.56836C20.6641 5.55664 19.6387 4.54102 17.6074 4.54102L7.80273 4.54102C5.75195 4.54102 4.73633 5.54688 4.73633 7.56836L4.73633 17.4512C4.73633 19.4629 5.75195 20.4785 7.80273 20.4785ZM7.82227 18.9062C6.85547 18.9062 6.30859 18.3789 6.30859 17.3633L6.30859 7.65625C6.30859 6.64062 6.85547 6.11328 7.82227 6.11328L17.5781 6.11328C18.5449 6.11328 19.0918 6.64062 19.0918 7.65625L19.0918 17.3633C19.0918 18.3789 18.5449 18.9062 17.5781 18.9062Z"
                              fillOpacity="0.85"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div data-testid="file-viewer-metadata">
                    <h2 className="chakra-heading text-text css-1paks7o text-white">
                      Metadata
                    </h2>
                    <div className="text-text/60">
                      <ul></ul>
                    </div>
                  </div>
                  <div data-testid="file-viewer-started-at">
                    <h2 className="chakra-heading text-text css-1rev5f5 text-white">
                      Created At
                    </h2>
                    <div className="text-[#ffffff4d] hover:text-[#ffffff66]">12/12/2024, 21:47:55</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadedFileDetails;
