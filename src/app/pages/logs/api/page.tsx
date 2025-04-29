import React from "react";
import '../../../../components/logs/api/ApiPage.css'

const Api = () => {
  return (
    <div className="chakra-stack hide-scrollbar overflow-hidden css-14dcm4k">
      <div className="flex flex-row justify-between items-center sticky top-0 bg-secondary/50 border-b border-border backdrop-blur-md z-40 rounded-t-xl">
        <div className="flex flex-row gap-x-2 items-center my-4 pl-4 ">
          <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-1">
            <svg
              width="12.832"
              height="24.2449"
              viewBox="0 0 12.832 24.2449"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] h-[20px] fill-icon/30"
            >
              <g>
                <rect
                  height="24.2449"
                  opacity="0"
                  width="12.832"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M6.24023 0.144902C2.76367 0.144902 0 2.90857 0 6.36561C0 8.97303 1.5625 11.2777 4.00391 12.2054L4.00391 21.8441C4.00391 22.0883 4.08203 22.2738 4.25781 22.4594L5.88867 24.1C6.05469 24.266 6.38672 24.3148 6.5918 24.1097L9.6875 21.014C9.89258 20.7992 9.88281 20.516 9.6875 20.3109L7.76367 18.4164L10.4004 15.7894C10.5859 15.5941 10.5859 15.3109 10.3809 15.0961L7.77344 12.4691C10.791 11.2679 12.4707 9.04139 12.4707 6.36561C12.4707 2.92811 9.6875 0.144902 6.24023 0.144902ZM6.24023 5.86756C5.33203 5.86756 4.60938 5.13514 4.60938 4.2367C4.60938 3.3285 5.32227 2.60584 6.24023 2.60584C7.13867 2.60584 7.87109 3.3285 7.87109 4.2367C7.87109 5.13514 7.13867 5.86756 6.24023 5.86756Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-2 items-center">
              <span className="text-xl text-text font-bold">API Logs</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-foreground/10 h-[1px] w-[100%] rounded-full scale-100">
        <span className="opacity-0">.</span>
      </div>
      <div className="css-16z4gez">
        <div className="css-bjgps0">
          <div className="chakra-stack css-k1jj38">
            <input
              placeholder="Search all columns..."
              className="flex h-9 w-full rounded-md text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(240,5%,50%)] outline-none focus-visible:ring-1 ring-ring disabled:cursor-not-allowed disabled:opacity-50 p-2 font-lg text-text bg-secondary hover:bg-foreground border shadow-sm shadow-black/10 transition-all duration-150 ease-in-out sm:w-[300px] border-input"
              defaultValue=""
            />
          </div>
        </div>
        <div className="bg-secondary rounded-2xl border border-border overflow-x-auto">
          <div className="relative w-full overflow-auto">
            <table className="caption-bottom text-sm w-max min-w-full">
              <thead className="[&amp;_tr]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 whitespace-nowrap">
                    Time
                  </th>
                  <th className="h-12 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 whitespace-nowrap">
                    Resource
                  </th>
                  <th className="h-12 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 whitespace-nowrap">
                    Request Duration (Seconds)
                  </th>
                  <th className="h-12 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 whitespace-nowrap">
                    Request HTTP Method
                  </th>
                  <th className="h-12 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 px-4 py-2 whitespace-nowrap">
                    Response HTTP Code
                  </th>
                </tr>
              </thead>
              <tbody className="[&amp;_tr:last-child]:border-0">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        22 Dec 2024: 7:23 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Credential
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.12
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        22 Dec 2024: 7:23 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Phone Number
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        22 Dec 2024: 7:23 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Metric
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.15
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        22 Dec 2024: 7:23 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Call
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.16
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 5:34 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Call
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.14
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 5:04 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Analytics
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.08
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-3v5xmd">POST</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">201</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 5:04 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Metric
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.16
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 5:04 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Credential
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 5:04 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Phone Number
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 3:43 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Metric
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.31
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 3:43 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Credential
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 3:43 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Phone Number
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.15
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        21 Dec 2024: 3:43 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Analytics
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.11
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-3v5xmd">POST</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">201</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        16 Dec 2024: 7:20 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Credential
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        16 Dec 2024: 7:20 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Phone Number
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.14
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        16 Dec 2024: 7:20 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Metric
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.15
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        16 Dec 2024: 7:20 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Analytics
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.16
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-3v5xmd">POST</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">201</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 4:47 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <a
                          className="!text-text/50 group-hover:!text-text w-full flex items-center"
                          href="/files/59c0e18b-6508-4f41-86aa-339337a20f31"
                        >
                          File
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
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 4:47 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        File
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 4:47 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        File
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        1.07
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-3v5xmd">POST</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">201</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:46 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        File
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:46 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <a
                          className="!text-text/50 group-hover:!text-text w-full flex items-center"
                          href="/files/a04d7c88-054e-45ca-a2b8-620a74096698"
                        >
                          File
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
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-etuqq1">DELETE</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1ezxoag">404</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:46 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        File
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:46 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <a
                          className="!text-text/50 group-hover:!text-text w-full flex items-center"
                          href="/files/a04d7c88-054e-45ca-a2b8-620a74096698"
                        >
                          File
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
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.14
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-etuqq1">DELETE</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:40 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <a
                          className="!text-text/50 group-hover:!text-text w-full flex items-center"
                          href="/files/a04d7c88-054e-45ca-a2b8-620a74096698"
                        >
                          File
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
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.15
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:40 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        File
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:40 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        File
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        1.63
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-3v5xmd">POST</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">201</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:39 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        File
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:39 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Phone Number
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.27
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:39 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Analytics
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.36
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-3v5xmd">POST</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">201</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:39 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Credential
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.14
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        12 Dec 2024: 1:39 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Metric
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.15
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 1:50 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Analytics
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.09
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-3v5xmd">POST</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">201</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 1:50 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Metric
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.14
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 1:50 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Phone Number
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.14
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 1:50 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Credential
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 12:43 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Token
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 12:38 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Metric
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.15
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 12:36 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Assistant
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.13
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        11 Dec 2024: 12:36 PM
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        Assistant
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        0.14
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-1akcczz">GET</span>
                      </span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 z-0 relative px-3 py-2">
                    <div className="flex flex-nowrap items-center w-[150px]">
                      <span className="text-xs text-text/50 group-hover:text-text">
                        <span className="chakra-badge css-ojgw2y">200</span>
                      </span>
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
            <ul className="flex-row items-center gap-1 flex w-full">
              <a
                className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out group hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5 !no-underline !text-text/50 hover:!text-text no-underline active:scale-95 rounded-lg opacity-50 cursor-not-allowed"
                aria-label="Go to previous page"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Previous</span>
                <span className="sr-only">Page link</span>
              </a>
              <li className="">
                <a
                  aria-current="page"
                  className="inline-flex items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out group border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 w-10 hover:!text-text no-underline cursor-pointer active:scale-95 rounded-lg !text-text"
                >
                  1<span className="sr-only">Page link</span>
                </a>
              </li>
              <li className="">
                <a className="inline-flex items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out group hover:bg-accent hover:text-accent-foreground h-10 w-10 !text-text/50 hover:!text-text no-underline cursor-pointer active:scale-95 rounded-lg">
                  2<span className="sr-only">Page link</span>
                </a>
              </li>
              <a
                className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out group hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 !no-underline !text-text/50 hover:!text-text no-underline active:scale-95 rounded-lg opacity-50 cursor-not-allowed"
                aria-label="Go to next page"
              >
                <span>Next</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                >
                  <path
                    d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Page link</span>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Api;
