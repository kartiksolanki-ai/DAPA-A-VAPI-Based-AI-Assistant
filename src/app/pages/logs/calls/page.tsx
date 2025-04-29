import React from "react";

const Calls = () => {
  return (
    <div className="flex flex-col w-full hide-scrollbar overflow-hidden">
      <div className="flex flex-row justify-between items-center sticky top-0 bg-secondary/50 border-b border-border backdrop-blur-md z-40 rounded-t-xl">
        <div className="flex flex-row gap-x-2 items-center my-4 pl-4 ">
          <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-1">
            <svg
              width="23.3887"
              height="16.6895"
              viewBox="0 0 23.3887 16.6895"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] h-[20px] fill-icon/30"
            >
              <g>
                <rect
                  height="16.6895"
                  opacity="0"
                  width="23.3887"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M3.06641 16.6895L19.9609 16.6895C22.0117 16.6895 23.0273 15.6738 23.0273 13.6621L23.0273 8.27148C23.0273 7.39258 22.8906 6.98242 22.4707 6.41602L19.1016 1.85547C18.0371 0.400391 17.4512 0.0195312 15.7129 0.0195312L7.31445 0.0195312C5.57617 0.0195312 5 0.400391 3.93555 1.85547L0.556641 6.41602C0.146484 6.98242 0 7.39258 0 8.27148L0 13.6621C0 15.6836 1.02539 16.6895 3.06641 16.6895ZM11.5137 11.0352C10.0488 11.0352 9.11133 9.76562 9.11133 8.56445L9.11133 8.53516C9.11133 8.0957 8.84766 7.68555 8.30078 7.68555L2.08008 7.68555C1.75781 7.68555 1.68945 7.41211 1.8457 7.19727L5.45898 2.23633C5.9082 1.61133 6.48438 1.38672 7.19727 1.38672L15.8301 1.38672C16.543 1.38672 17.1191 1.61133 17.5684 2.23633L21.1816 7.19727C21.3281 7.41211 21.2695 7.68555 20.9473 7.68555L14.7266 7.68555C14.1797 7.68555 13.9258 8.0957 13.9258 8.53516L13.9258 8.56445C13.9258 9.76562 12.9883 11.0352 11.5137 11.0352ZM15.6152 2.82227L7.41211 2.82227C7.14844 2.82227 6.94336 3.02734 6.94336 3.29102C6.94336 3.55469 7.14844 3.75977 7.41211 3.75977L15.6152 3.75977C15.8789 3.75977 16.084 3.55469 16.084 3.29102C16.084 3.02734 15.8789 2.82227 15.6152 2.82227ZM16.9141 5.0293L6.11328 5.0293C5.83984 5.0293 5.625 5.27344 5.625 5.53711C5.625 5.80078 5.83984 6.02539 6.11328 6.02539L16.9141 6.02539C17.1875 6.02539 17.4023 5.80078 17.4023 5.53711C17.4023 5.27344 17.1875 5.0293 16.9141 5.0293Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-2 items-center">
              <span className="text-xl text-text font-bold">Call Logs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-foreground/10 h-[1px] w-[100%] rounded-full scale-100">
        <span className="opacity-0">.</span>
      </div>
      <div className="w-full p-4">
        <div className="flex gap-2 mb-4 flex-wrap ">
          <button
            className="!border !border-text/10 hover:bg-text/5 px-2 py-1 rounded-full flex gap-1 items-center text-[#ffffff80] hover:text-white"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r2c:"
            data-state="closed"
          >
            <svg
              width="20.2832"
              height="19.9316"
              viewBox="0 0 20.2832 19.9316"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 fill-muted-foreground"
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
                  d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219ZM9.96094 18.2617C5.35156 18.2617 1.66992 14.5703 1.66992 9.96094C1.66992 5.35156 5.3418 1.66016 9.95117 1.66016C14.5605 1.66016 18.2617 5.35156 18.2617 9.96094C18.2617 14.5703 14.5703 18.2617 9.96094 18.2617Z"
                  fillOpacity="0.85"
                ></path>
                <path
                  d="M5.42969 9.96094C5.42969 10.4395 5.76172 10.7617 6.25977 10.7617L9.13086 10.7617L9.13086 13.6426C9.13086 14.1309 9.46289 14.4727 9.94141 14.4727C10.4297 14.4727 10.7715 14.1406 10.7715 13.6426L10.7715 10.7617L13.6523 10.7617C14.1406 10.7617 14.4824 10.4395 14.4824 9.96094C14.4824 9.47266 14.1406 9.13086 13.6523 9.13086L10.7715 9.13086L10.7715 6.25977C10.7715 5.76172 10.4297 5.41992 9.94141 5.41992C9.46289 5.41992 9.13086 5.76172 9.13086 6.25977L9.13086 9.13086L6.25977 9.13086C5.76172 9.13086 5.42969 9.47266 5.42969 9.96094Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
            <div className="text-xs font-medium line-clamp-1 flex-none">
              Date and Time
            </div>
          </button>
          <button
            className="!border !border-text/10 hover:bg-text/5 px-2 py-1 rounded-full flex gap-1 items-center text-[#ffffff80] hover:text-white"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r2d:"
            data-state="closed"
          >
            <svg
              width="20.2832"
              height="19.9316"
              viewBox="0 0 20.2832 19.9316"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 fill-muted-foreground"
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
                  d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219ZM9.96094 18.2617C5.35156 18.2617 1.66992 14.5703 1.66992 9.96094C1.66992 5.35156 5.3418 1.66016 9.95117 1.66016C14.5605 1.66016 18.2617 5.35156 18.2617 9.96094C18.2617 14.5703 14.5703 18.2617 9.96094 18.2617Z"
                  fillOpacity="0.85"
                ></path>
                <path
                  d="M5.42969 9.96094C5.42969 10.4395 5.76172 10.7617 6.25977 10.7617L9.13086 10.7617L9.13086 13.6426C9.13086 14.1309 9.46289 14.4727 9.94141 14.4727C10.4297 14.4727 10.7715 14.1406 10.7715 13.6426L10.7715 10.7617L13.6523 10.7617C14.1406 10.7617 14.4824 10.4395 14.4824 9.96094C14.4824 9.47266 14.1406 9.13086 13.6523 9.13086L10.7715 9.13086L10.7715 6.25977C10.7715 5.76172 10.4297 5.41992 9.94141 5.41992C9.46289 5.41992 9.13086 5.76172 9.13086 6.25977L9.13086 9.13086L6.25977 9.13086C5.76172 9.13086 5.42969 9.47266 5.42969 9.96094Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
            <div className="text-xs font-medium line-clamp-1 flex-none">
              Cost
            </div>
          </button>
          <button
            className="!border !border-text/10 hover:bg-text/5 px-2 py-1 rounded-full flex gap-1 items-center text-[#ffffff80] hover:text-white"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r2e:"
            data-state="closed"
          >
            <svg
              width="20.2832"
              height="19.9316"
              viewBox="0 0 20.2832 19.9316"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 fill-muted-foreground"
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
                  d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219ZM9.96094 18.2617C5.35156 18.2617 1.66992 14.5703 1.66992 9.96094C1.66992 5.35156 5.3418 1.66016 9.95117 1.66016C14.5605 1.66016 18.2617 5.35156 18.2617 9.96094C18.2617 14.5703 14.5703 18.2617 9.96094 18.2617Z"
                  fillOpacity="0.85"
                ></path>
                <path
                  d="M5.42969 9.96094C5.42969 10.4395 5.76172 10.7617 6.25977 10.7617L9.13086 10.7617L9.13086 13.6426C9.13086 14.1309 9.46289 14.4727 9.94141 14.4727C10.4297 14.4727 10.7715 14.1406 10.7715 13.6426L10.7715 10.7617L13.6523 10.7617C14.1406 10.7617 14.4824 10.4395 14.4824 9.96094C14.4824 9.47266 14.1406 9.13086 13.6523 9.13086L10.7715 9.13086L10.7715 6.25977C10.7715 5.76172 10.4297 5.41992 9.94141 5.41992C9.46289 5.41992 9.13086 5.76172 9.13086 6.25977L9.13086 9.13086L6.25977 9.13086C5.76172 9.13086 5.42969 9.47266 5.42969 9.96094Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
            <div className="text-xs font-medium line-clamp-1 flex-none">
              Call Type
            </div>
          </button>
          <button
            className="!border !border-text/10 hover:bg-text/5 px-2 py-1 rounded-full flex gap-1 items-center text-[#ffffff80] hover:text-white"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r2f:"
            data-state="closed"
          >
            <svg
              width="20.2832"
              height="19.9316"
              viewBox="0 0 20.2832 19.9316"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 fill-muted-foreground"
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
                  d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219ZM9.96094 18.2617C5.35156 18.2617 1.66992 14.5703 1.66992 9.96094C1.66992 5.35156 5.3418 1.66016 9.95117 1.66016C14.5605 1.66016 18.2617 5.35156 18.2617 9.96094C18.2617 14.5703 14.5703 18.2617 9.96094 18.2617Z"
                  fillOpacity="0.85"
                ></path>
                <path
                  d="M5.42969 9.96094C5.42969 10.4395 5.76172 10.7617 6.25977 10.7617L9.13086 10.7617L9.13086 13.6426C9.13086 14.1309 9.46289 14.4727 9.94141 14.4727C10.4297 14.4727 10.7715 14.1406 10.7715 13.6426L10.7715 10.7617L13.6523 10.7617C14.1406 10.7617 14.4824 10.4395 14.4824 9.96094C14.4824 9.47266 14.1406 9.13086 13.6523 9.13086L10.7715 9.13086L10.7715 6.25977C10.7715 5.76172 10.4297 5.41992 9.94141 5.41992C9.46289 5.41992 9.13086 5.76172 9.13086 6.25977L9.13086 9.13086L6.25977 9.13086C5.76172 9.13086 5.42969 9.47266 5.42969 9.96094Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
            <div className="text-xs font-medium line-clamp-1 flex-none">
              Assistant ID
            </div>
          </button>
          <button
            className="!border !border-text/10 hover:bg-text/5 px-2 py-1 rounded-full flex gap-1 items-center text-[#ffffff80] hover:text-white"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:r2g:"
            data-state="closed"
          >
            <svg
              width="20.2832"
              height="19.9316"
              viewBox="0 0 20.2832 19.9316"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 fill-muted-foreground"
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
                  d="M9.96094 19.9219C15.4102 19.9219 19.9219 15.4004 19.9219 9.96094C19.9219 4.51172 15.4004 0 9.95117 0C4.51172 0 0 4.51172 0 9.96094C0 15.4004 4.52148 19.9219 9.96094 19.9219ZM9.96094 18.2617C5.35156 18.2617 1.66992 14.5703 1.66992 9.96094C1.66992 5.35156 5.3418 1.66016 9.95117 1.66016C14.5605 1.66016 18.2617 5.35156 18.2617 9.96094C18.2617 14.5703 14.5703 18.2617 9.96094 18.2617Z"
                  fillOpacity="0.85"
                ></path>
                <path
                  d="M5.42969 9.96094C5.42969 10.4395 5.76172 10.7617 6.25977 10.7617L9.13086 10.7617L9.13086 13.6426C9.13086 14.1309 9.46289 14.4727 9.94141 14.4727C10.4297 14.4727 10.7715 14.1406 10.7715 13.6426L10.7715 10.7617L13.6523 10.7617C14.1406 10.7617 14.4824 10.4395 14.4824 9.96094C14.4824 9.47266 14.1406 9.13086 13.6523 9.13086L10.7715 9.13086L10.7715 6.25977C10.7715 5.76172 10.4297 5.41992 9.94141 5.41992C9.46289 5.41992 9.13086 5.76172 9.13086 6.25977L9.13086 9.13086L6.25977 9.13086C5.76172 9.13086 5.42969 9.47266 5.42969 9.96094Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
            <div className="text-xs font-medium line-clamp-1 flex-none">
              Call ID
            </div>
          </button>
        </div>
        <div className="bg-secondary rounded-2xl border border-border">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&amp;_tr]:border-b">
                <tr className="transition-colors data-[state=selected]:bg-muted hover:bg-transparent border-b border-border">
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                    style={{ width: "140px" }}
                  >
                    <span>Type</span>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                    style={{ width: "320px" }}
                  >
                    <span>Call ID</span>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                   
                  >
                    <span>Call Cost</span>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                    
                  >
                    <span>Ended Reason</span>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                    style={{ width: "150px" }}
                  >
                    <span>Assistant</span>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                    
                  >
                    <span>Phone Number</span>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                  
                  >
                    <span>Customer</span>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                    
                  >
                    <div className="cursor-pointer flex items-center">
                      <span>Start Time (GMT+5)</span>
                      <span className="ml-2">
                        <svg
                          width="17.3242"
                          height="10.4004"
                          viewBox="0 0 17.3242 10.4004"
                          fill="'none' || '#000000"
                          stroke="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 fill-icon/40 transition-transform duration-200 "
                        >
                          <g>
                            <rect
                              height="10.4004"
                              opacity="0"
                              width="17.3242"
                              x="0"
                              y="0"
                            ></rect>
                            <path
                              d="M8.48633 10.4004C8.73047 10.4004 8.97461 10.3027 9.14062 10.1172L16.6992 2.37305C16.8652 2.20703 16.9629 1.99219 16.9629 1.74805C16.9629 1.24023 16.582 0.849609 16.0742 0.849609C15.8301 0.849609 15.6055 0.947266 15.4395 1.10352L7.95898 8.75L9.00391 8.75L1.52344 1.10352C1.36719 0.947266 1.14258 0.849609 0.888672 0.849609C0.380859 0.849609 0 1.24023 0 1.74805C0 1.99219 0.0976562 2.20703 0.263672 2.38281L7.82227 10.1172C8.00781 10.3027 8.23242 10.4004 8.48633 10.4004Z"
                              fillOpacity="0.85"
                            ></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </th>
                  <th
                    className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 whitespace-nowrap"
                  
                  >
                    <span>Duration</span>
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0 relative">
                <tr className="transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted group relative text-text/50 hover:text-text cursor-pointer !z-0 border-b border-border">
                  <td
                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{ width: "140px" }}
                  >
                    Web
                  </td>
                  <td
                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{ width: "320px" }}
                  >
                    <div className="flex font-mono items-center bg-input border border-border pl-2 p-0.5 rounded-lg hover:cursor-pointer justify-between !z-10 gap-2">
                      <div
                        className="text-xs text-text/50 group-hover:text-text text-nowrap overflow-hidden relative flex items-center justify-center"
                        data-testid="call-id-text"
                      >
                        a8cf1e7a-e99e-4b74-9c5b-9ab658208556
                      </div>
                      <div className="flex flex-row gap-x-2">
                        <div
                          aria-label="Copy ID"
                          data-testid="copy-call-id-button"
                          className="group bg-text/10 background rounded-lg p-[6px] cursor-pointer hover:bg-text/5 active:scale-[0.95]"
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
                            className="w-3 h-3 fill-icon/50 group-hover:fill-primary"
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
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis">
                    <div className="relative flex flex-row items-center">
                      $0.01
                      <svg
                        width="20.2832"
                        height="19.9121"
                        viewBox="0 0 20.2832 19.9121"
                        fill="'none' || '#000000"
                        stroke="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 fill-icon/20 hover:fill-primary mx-2 cursor-pointer"
                        data-state="closed"
                      >
                        <g>
                          <rect
                            height="19.9121"
                            opacity="0"
                            width="20.2832"
                            x="0"
                            y="0"
                          ></rect>
                          <path
                            d="M9.96094 19.9121C12.3047 19.9121 14.5703 19.0723 16.377 17.5391L9.3457 10.6445C9.15039 10.4688 9.11133 10.3027 9.11133 10.0391L9.11133 0.0292969C4.04297 0.46875 0 4.79492 0 9.95117C0 15.4004 4.52148 19.9121 9.96094 19.9121ZM19.9219 9.95117C19.9219 8.48633 19.5605 6.95312 18.9453 5.70312L10.9668 10.293L17.3438 16.5918C18.9453 14.8438 19.9219 12.4414 19.9219 9.95117ZM10.4199 9.0918L18.3008 4.56055C16.6016 1.89453 13.5254 0.126953 10.4199 0Z"
                            fillOpacity="0.85"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis">
                    <div className="flex items-center justify-start">
                      <div className="inline-flex whitespace-nowrap px-2 py-0 rounded-full text-[11px] font-medium bg-green-500/10 text-text/50 group-hover:text-text transition-colors duration-200">
                        Customer Ended Call
                      </div>
                    </div>
                  </td>
                  <td
                    className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis"
                    style={{ width: "150px" }}
                  >
                    <div className="relative flex items-start flex-col justify-center m-0">
                      <a
                        className="!text-text/80 font-mono group-hover:!text-text hover:text-primary/80 text-xs flex items-center gap-0 hover:underline"
                        href="/assistants/0eaf30ce-3b85-4795-be61-b7e606b4bede"
                      >
                        0eaf30ce-3b85-4795-be61-b7e606b4bede
                        <svg
                          width="14.7852"
                          height="14.4434"
                          viewBox="0 0 14.7852 14.4434"
                          fill="'none' || '#000000"
                          stroke="none"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="fill-icon/20 group-hover:fill-primary/80 w-2 h-2 ml-2"
                        >
                          <g>
                            <rect
                              height="14.4434"
                              opacity="0"
                              width="14.7852"
                              x="0"
                              y="0"
                            ></rect>
                            <path
                              d="M14.4238 10.8008L14.4141 0.976562C14.4141 0.419922 14.0527 0.0292969 13.4668 0.0292969L3.64258 0.0292969C3.0957 0.0292969 2.72461 0.449219 2.72461 0.917969C2.72461 1.38672 3.14453 1.78711 3.60352 1.78711L7.00195 1.78711L11.7676 1.63086L9.95117 3.22266L0.273438 12.9199C0.0976562 13.0957 0 13.3203 0 13.5352C0 14.0039 0.419922 14.4434 0.908203 14.4434C1.13281 14.4434 1.34766 14.3652 1.52344 14.1797L11.2207 4.49219L12.832 2.66602L12.6562 7.22656L12.6562 10.8398C12.6562 11.2988 13.0566 11.7285 13.5352 11.7285C14.0039 11.7285 14.4238 11.3281 14.4238 10.8008Z"
                              fillOpacity="0.85"
                            ></path>
                          </g>
                        </svg>
                      </a>
                      <span className="text-xs text-text/50">test</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-text/15 group-hover:text-text/15">
                      N/A
                    </span>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis">
                    <span className="text-text/15 group-hover:text-text/15">
                      N/A
                    </span>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis">
                    <div className="relative flex flex-nowrap items-center bg-input border border-border p-1 rounded-lg hover:cursor-pointer justify-center">
                      <span className="text-xs text-text/50 group-hover:text-text text-nowrap overflow-hidden block relative">
                        11 Dec 2024, 15:20
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative whitespace-nowrap overflow-hidden text-ellipsis">
                    <div className="text-xs text-text/50 group-hover:text-text">
                      5s
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            role="navigation"
            aria-label="pagination"
            className="mx-auto flex w-full justify-center p-2 border-t border-border"
          >
            <ul className="flex-row items-center gap-1 flex w-full"></ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Calls;
