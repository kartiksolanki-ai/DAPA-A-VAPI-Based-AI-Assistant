"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LineChart } from "lucide-react";
import "../../../components/overview/overview.css";
import { useState } from "react";
import PieChartComponent from "@/components/ui/PieChart";

export default function OverView() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Day");

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const callsData = [
    { name: 'customer-ended-calls', value: 400 },
    { name: 'customer-calls', value: 300 },
  ];

  const assistenceDurationData = [
    { name: 'test-1', value: 4 },
    { name: 'test-2', value: 1 },
  ];


  return (
    <>
      <div className="!w-full hide-scrollbar overflow-hidden pb-4">
        <div className="flex flex-row justify-between items-center sticky top-0 bg-secondary/50 border-b border-border backdrop-blur-md z-40 rounded-t-xl">
          <div className="flex flex-row gap-x-2 items-center my-4 pl-4 ">
            <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-1">
              <svg
                width="20.2832"
                height="19.9121"
                viewBox="0 0 20.2832 19.9121"
                fill="'none' || '#000000"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-[20px] h-[20px] fill-icon/30"
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
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-2 items-center">
                <span className="text-xl text-text font-bold">Overview</span>
              </div>
            </div>
          </div>
          <div className="flex items-center ">
            <button
              className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out active:scale-[0.98] group rounded-lg border border-border/50 hover:bg-secondary/50 hover:border-border hover:shadow-sm hover:shadow-black/10 text-text/50 hover:text-text h-10 px-4 py-2 mr-2 max-w-[80px]"
              onClick={toggleDropdown}
              aria-haspopup="menu"
              aria-expanded={isOpen}
            >
              <span className="mr-2">
                <svg
                  width="20.1172"
                  height="11.6504"
                  viewBox="0 0 20.1172 11.6504"
                  fill="none"
                  stroke="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3 h-3 fill-icon/30 group-hover:fill-icon transition-all duration-150 ease-in-out"
                >
                  <g>
                    <rect
                      height="11.6504"
                      opacity="0"
                      width="20.1172"
                      x="0"
                      y="0"
                    ></rect>
                    <path
                      d="M4.84375 11.6309L14.9609 11.6309C15.4004 11.6309 15.752 11.2891 15.752 10.8496C15.752 10.4102 15.4004 10.0586 14.9609 10.0586L4.84375 10.0586C4.4043 10.0586 4.0625 10.4102 4.0625 10.8496C4.0625 11.2891 4.4043 11.6309 4.84375 11.6309Z"
                      fillOpacity="0.85"
                    ></path>
                    <path
                      d="M2.8418 6.60156L16.9727 6.60156C17.4121 6.60156 17.7539 6.25977 17.7539 5.82031C17.7539 5.38086 17.4121 5.0293 16.9727 5.0293L2.8418 5.0293C2.40234 5.0293 2.05078 5.38086 2.05078 5.82031C2.05078 6.25977 2.40234 6.60156 2.8418 6.60156Z"
                      fillOpacity="0.85"
                    ></path>
                    <path
                      d="M0.78125 1.57227L18.9746 1.57227C19.4141 1.57227 19.7559 1.23047 19.7559 0.791016C19.7559 0.351562 19.4141 0 18.9746 0L0.78125 0C0.341797 0 0 0.351562 0 0.791016C0 1.23047 0.341797 1.57227 0.78125 1.57227Z"
                      fillOpacity="0.85"
                    ></path>
                  </g>
                </svg>
              </span>
              {selectedOption}
            </button>

            {isOpen && (
              <div
                className="absolute right-0 top-9 z-50 mt-2 w-48 rounded-xl bg-popover text-popover-foreground p-1 shadow-md border border-border backdrop-blur-lg"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-button"
              >
                {["Day", "Week", "Month"].map((option) => (
                  <div
                    key={option}
                    className="relative flex cursor-pointer select-none items-center rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-hover"
                    role="menuitem"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="bg-foreground/10 h-[1px] w-[100%] rounded-full scale-100">
          <span className="opacity-0">.</span>
        </div>
        <div className="flex flex-wrap gap-4 px-4 w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4">
            <div
              className="flex-1 ring-transparent border-transparent cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r1g:"
              data-state="closed"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="group relative flex p-4 bg-secondary border border-border rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0 scale-[1.08] opacity-15 group-hover:opacity-30 transition-all duration-150 ease-in-out">
                  <div
                    className="recharts-responsive-container"
                    style={{ width: "100%", height: "100%", minWidth: "0px" }}
                  >
                    <div
                      className="recharts-wrapper"
                      style={{ width: "100%", height: "100%", minWidth: "0px" }}
                    >
                      <svg
                        className="recharts-surface"
                        width="344"
                        height="140"
                        viewBox="0 0 344 140"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <title></title>
                        <desc></desc>
                        <defs>
                          <clipPath id="recharts1-clip">
                            <rect x="5" y="5" height="130" width="334"></rect>
                          </clipPath>
                        </defs>
                        <defs>
                          <linearGradient
                            id="colorTotalMinutes"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#ff7300"
                              stopOpacity="0.8"
                            ></stop>
                            <stop
                              offset="95%"
                              stopColor="#ff7300"
                              stopOpacity="0.3"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <g className="recharts-layer recharts-area">
                          <g className="recharts-layer recharts-area-dots">
                            <circle
                              r="3"
                              stroke="#ff7300"
                              fillOpacity="1"
                              fill="url(#colorTotalMinutes)"
                              width="334"
                              height="130"
                              cx="172"
                              cy="11.088331143061328"
                              className="recharts-dot recharts-area-dot"
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm md:text-lg font-semibold text-text/50">
                    Total Call Minutes
                  </h3>
                  <p className="text-4xl md:text-5xl text-text font-bold font-mono">
                    <span className="inline-block tabular-nums">0</span>
                  </p>
                  <div className="text-md font-bold flex flex-row justify-start items-center mt-2 text-primary">
                    +<span className="inline-block tabular-nums">0.00</span>%
                    <svg
                      width="15.8984"
                      height="15.9473"
                      viewBox="0 0 15.8984 15.9473"
                      fill="'none' || '#000000"
                      stroke="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-primary w-[11px] h-[11px] ml-2"
                    >
                      <g>
                        <rect
                          height="15.9473"
                          opacity="0"
                          width="15.8984"
                          x="0"
                          y="0"
                        ></rect>
                        <path
                          d="M15.5371 14.7656C15.5371 14.375 15.3613 14.0625 15.1562 13.6523L9.07227 1.11328C8.66211 0.273438 8.28125 0.00976562 7.76367 0.00976562C7.24609 0.00976562 6.875 0.273438 6.46484 1.11328L0.371094 13.6523C0.175781 14.0723 0 14.3848 0 14.7754C0 15.498 0.546875 15.9473 1.39648 15.9473L14.1309 15.9375C14.9805 15.9375 15.5371 15.4883 15.5371 14.7656Z"
                          fillOpacity="0.85"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 ring-transparent border-transparent cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r1l:"
              data-state="closed"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="group relative flex p-4 bg-secondary border border-border rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0 scale-[1.08] opacity-15 group-hover:opacity-30 transition-all duration-150 ease-in-out">
                  <div
                    className="recharts-responsive-container"
                    style={{ width: "100%", height: "100%", minWidth: "0px" }}
                  >
                    <div
                      className="recharts-wrapper"
                      style={{ width: "100%", height: "100%", minWidth: "0px" }}
                    >
                      <svg
                        className="recharts-surface"
                        width="344"
                        height="140"
                        viewBox="0 0 344 140"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <title></title>
                        <desc></desc>
                        <defs>
                          <clipPath id="recharts4-clip">
                            <rect x="5" y="5" height="130" width="334"></rect>
                          </clipPath>
                        </defs>
                        <defs>
                          <linearGradient
                            id="colorCallCount"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#5454FF"
                              stopOpacity="0.8"
                            ></stop>
                            <stop
                              offset="95%"
                              stopColor="#5454FF"
                              stopOpacity="0.3"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <g className="recharts-layer recharts-area">
                          <g className="recharts-layer">
                            <path
                              fillOpacity="1"
                              fill="url(#colorCallCount)"
                              width="334"
                              height="130"
                              stroke="none"
                              className="recharts-curve recharts-area-area"
                              d="M5,135C8.711,135,12.422,135,16.133,135C19.844,135,23.556,135,27.267,135C30.978,135,34.689,135,38.4,135C42.111,135,45.822,135,49.533,135C53.244,135,56.956,135,60.667,135C64.378,135,68.089,135,71.8,135C75.511,135,79.222,135,82.933,135C86.644,135,90.356,135,94.067,135C97.778,135,101.489,135,105.2,135C108.911,135,112.622,135,116.333,135C120.044,135,123.756,135,127.467,135C131.178,135,134.889,135,138.6,135C142.311,135,146.022,135,149.733,135C153.444,135,157.156,135,160.867,135C164.578,135,168.289,135,172,135C175.711,135,179.422,135,183.133,135C186.844,135,190.556,135,194.267,135C197.978,135,201.689,135,205.4,135C209.111,135,212.822,135,216.533,135C220.244,135,223.956,135,227.667,135C231.378,135,235.089,135,238.8,135C242.511,135,246.222,135,249.933,135C253.644,135,257.356,135,261.067,135C264.778,135,268.489,5,272.2,5C275.911,5,279.622,5,283.333,5C287.044,5,290.756,5,294.467,5C298.178,5,301.889,5,305.6,5C309.311,5,313.022,5,316.733,5C320.444,5,324.156,5,327.867,5C331.578,5,335.289,5,339,5L339,135C335.289,135,331.578,135,327.867,135C324.156,135,320.444,135,316.733,135C313.022,135,309.311,135,305.6,135C301.889,135,298.178,135,294.467,135C290.756,135,287.044,135,283.333,135C279.622,135,275.911,135,272.2,135C268.489,135,264.778,135,261.067,135C257.356,135,253.644,135,249.933,135C246.222,135,242.511,135,238.8,135C235.089,135,231.378,135,227.667,135C223.956,135,220.244,135,216.533,135C212.822,135,209.111,135,205.4,135C201.689,135,197.978,135,194.267,135C190.556,135,186.844,135,183.133,135C179.422,135,175.711,135,172,135C168.289,135,164.578,135,160.867,135C157.156,135,153.444,135,149.733,135C146.022,135,142.311,135,138.6,135C134.889,135,131.178,135,127.467,135C123.756,135,120.044,135,116.333,135C112.622,135,108.911,135,105.2,135C101.489,135,97.778,135,94.067,135C90.356,135,86.644,135,82.933,135C79.222,135,75.511,135,71.8,135C68.089,135,64.378,135,60.667,135C56.956,135,53.244,135,49.533,135C45.822,135,42.111,135,38.4,135C34.689,135,30.978,135,27.267,135C23.556,135,19.844,135,16.133,135C12.422,135,8.711,135,5,135Z"
                            ></path>
                            <path
                              stroke="#5454FF"
                              fillOpacity="1"
                              fill="none"
                              width="334"
                              height="130"
                              className="recharts-curve recharts-area-curve"
                              d="M5,135C8.711,135,12.422,135,16.133,135C19.844,135,23.556,135,27.267,135C30.978,135,34.689,135,38.4,135C42.111,135,45.822,135,49.533,135C53.244,135,56.956,135,60.667,135C64.378,135,68.089,135,71.8,135C75.511,135,79.222,135,82.933,135C86.644,135,90.356,135,94.067,135C97.778,135,101.489,135,105.2,135C108.911,135,112.622,135,116.333,135C120.044,135,123.756,135,127.467,135C131.178,135,134.889,135,138.6,135C142.311,135,146.022,135,149.733,135C153.444,135,157.156,135,160.867,135C164.578,135,168.289,135,172,135C175.711,135,179.422,135,183.133,135C186.844,135,190.556,135,194.267,135C197.978,135,201.689,135,205.4,135C209.111,135,212.822,135,216.533,135C220.244,135,223.956,135,227.667,135C231.378,135,235.089,135,238.8,135C242.511,135,246.222,135,249.933,135C253.644,135,257.356,135,261.067,135C264.778,135,268.489,5,272.2,5C275.911,5,279.622,5,283.333,5C287.044,5,290.756,5,294.467,5C298.178,5,301.889,5,305.6,5C309.311,5,313.022,5,316.733,5C320.444,5,324.156,5,327.867,5C331.578,5,335.289,5,339,5"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm md:text-lg font-semibold text-text/50">
                    Number of Calls
                  </h3>
                  <p className="text-4xl md:text-5xl text-text font-bold font-mono">
                    <span className="inline-block tabular-nums">3</span>
                  </p>
                  <div className="text-md font-bold flex flex-row justify-start items-center mt-2 text-primary">
                    +<span className="inline-block tabular-nums">0.00</span>%
                    <svg
                      width="15.8984"
                      height="15.9473"
                      viewBox="0 0 15.8984 15.9473"
                      fill="'none' || '#000000"
                      stroke="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-primary w-[11px] h-[11px] ml-2"
                    >
                      <g>
                        <rect
                          height="15.9473"
                          opacity="0"
                          width="15.8984"
                          x="0"
                          y="0"
                        ></rect>
                        <path
                          d="M15.5371 14.7656C15.5371 14.375 15.3613 14.0625 15.1562 13.6523L9.07227 1.11328C8.66211 0.273438 8.28125 0.00976562 7.76367 0.00976562C7.24609 0.00976562 6.875 0.273438 6.46484 1.11328L0.371094 13.6523C0.175781 14.0723 0 14.3848 0 14.7754C0 15.498 0.546875 15.9473 1.39648 15.9473L14.1309 15.9375C14.9805 15.9375 15.5371 15.4883 15.5371 14.7656Z"
                          fillOpacity="0.85"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 ring-transparent border-transparent cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r1q:"
              data-state="closed"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="group relative flex p-4 bg-secondary border border-border rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0 scale-[1.08] opacity-15 group-hover:opacity-30 transition-all duration-150 ease-in-out">
                  <div
                    className="recharts-responsive-container"
                    style={{ width: "100%", height: "100%", minWidth: "0px" }}
                  >
                    <div
                      className="recharts-wrapper"
                      style={{ width: "100%", height: "100%", minWidth: "0px" }}
                    >
                      <svg
                        className="recharts-surface"
                        width="344"
                        height="140"
                        viewBox="0 0 344 140"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <title></title>
                        <desc></desc>
                        <defs>
                          <clipPath id="recharts7-clip">
                            <rect x="5" y="5" height="130" width="334"></rect>
                          </clipPath>
                        </defs>
                        <defs>
                          <linearGradient
                            id="colorTotalSpent"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#ff7300"
                              stopOpacity="0.8"
                            ></stop>
                            <stop
                              offset="95%"
                              stopColor="#ff7300"
                              stopOpacity="0.3"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <g className="recharts-layer recharts-area">
                          <g className="recharts-layer recharts-area-dots">
                            <circle
                              r="3"
                              stroke="#ff7300"
                              fillOpacity="1"
                              fill="url(#colorTotalSpent)"
                              width="334"
                              height="130"
                              cx="172"
                              cy="25.583333333333346"
                              className="recharts-dot recharts-area-dot"
                            ></circle>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm md:text-lg font-semibold text-text/50">
                    Total Spent
                  </h3>
                  <p className="text-4xl md:text-5xl text-text font-bold font-mono">
                    <span className="inline-block tabular-nums">$0.01</span>
                  </p>
                  <div className="text-md font-bold flex flex-row justify-start items-center mt-2 text-primary">
                    +<span className="inline-block tabular-nums">0.00</span>%
                    <svg
                      width="15.8984"
                      height="15.9473"
                      viewBox="0 0 15.8984 15.9473"
                      fill="'none' || '#000000"
                      stroke="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-primary w-[11px] h-[11px] ml-2"
                    >
                      <g>
                        <rect
                          height="15.9473"
                          opacity="0"
                          width="15.8984"
                          x="0"
                          y="0"
                        ></rect>
                        <path
                          d="M15.5371 14.7656C15.5371 14.375 15.3613 14.0625 15.1562 13.6523L9.07227 1.11328C8.66211 0.273438 8.28125 0.00976562 7.76367 0.00976562C7.24609 0.00976562 6.875 0.273438 6.46484 1.11328L0.371094 13.6523C0.175781 14.0723 0 14.3848 0 14.7754C0 15.498 0.546875 15.9473 1.39648 15.9473L14.1309 15.9375C14.9805 15.9375 15.5371 15.4883 15.5371 14.7656Z"
                          fillOpacity="0.85"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex-1 ring-transparent border-transparent cursor-pointer"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:r1v:"
              data-state="closed"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="group relative flex p-4 bg-secondary border border-border rounded-2xl shadow-sm shadow-black/10 overflow-hidden">
                <div className="absolute inset-0 z-0 scale-[1.08] opacity-15 group-hover:opacity-30 transition-all duration-150 ease-in-out">
                  <div
                    className="recharts-responsive-container"
                    style={{ width: "100%", height: "100%", minWidth: "0px" }}
                  >
                    <div
                      className="recharts-wrapper"
                      style={{ width: "100%", height: "100%", minWidth: "0px" }}
                    >
                      <svg
                        className="recharts-surface"
                        width="344"
                        height="140"
                        viewBox="0 0 344 140"
                        style={{ width: "100%", height: "100%" }}
                      >
                        <title></title>
                        <desc></desc>
                        <defs>
                          <clipPath id="recharts10-clip">
                            <rect x="5" y="5" height="130" width="334"></rect>
                          </clipPath>
                        </defs>
                        <defs>
                          <linearGradient
                            id="colorAvgCallCost"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor="#00ffff"
                              stopOpacity="0.8"
                            ></stop>
                            <stop
                              offset="95%"
                              stopColor="#00ffff"
                              stopOpacity="0.3"
                            ></stop>
                          </linearGradient>
                        </defs>
                        <g className="recharts-layer recharts-area">
                          <g className="recharts-layer">
                            <path
                              fillOpacity="1"
                              fill="url(#colorAvgCallCost)"
                              width="334"
                              height="130"
                              stroke="none"
                              className="recharts-curve recharts-area-area"
                              d="M5,135C8.711,135,12.422,135,16.133,135C19.844,135,23.556,135,27.267,135C30.978,135,34.689,135,38.4,135C42.111,135,45.822,135,49.533,135C53.244,135,56.956,135,60.667,135C64.378,135,68.089,135,71.8,135C75.511,135,79.222,135,82.933,135C86.644,135,90.356,135,94.067,135C97.778,135,101.489,135,105.2,135C108.911,135,112.622,135,116.333,135C120.044,135,123.756,135,127.467,135C131.178,135,134.889,135,138.6,135C142.311,135,146.022,135,149.733,135C153.444,135,157.156,135,160.867,135C164.578,135,168.289,135,172,135C175.711,135,179.422,135,183.133,135C186.844,135,190.556,135,194.267,135C197.978,135,201.689,135,205.4,135C209.111,135,212.822,135,216.533,135C220.244,135,223.956,135,227.667,135C231.378,135,235.089,135,238.8,135C242.511,135,246.222,135,249.933,135C253.644,135,257.356,135,261.067,135C264.778,135,268.489,25.583,272.2,25.583C275.911,25.583,279.622,25.583,283.333,25.583C287.044,25.583,290.756,25.583,294.467,25.583C298.178,25.583,301.889,25.583,305.6,25.583C309.311,25.583,313.022,25.583,316.733,25.583C320.444,25.583,324.156,25.583,327.867,25.583C331.578,25.583,335.289,25.583,339,25.583L339,135C335.289,135,331.578,135,327.867,135C324.156,135,320.444,135,316.733,135C313.022,135,309.311,135,305.6,135C301.889,135,298.178,135,294.467,135C290.756,135,287.044,135,283.333,135C279.622,135,275.911,135,272.2,135C268.489,135,264.778,135,261.067,135C257.356,135,253.644,135,249.933,135C246.222,135,242.511,135,238.8,135C235.089,135,231.378,135,227.667,135C223.956,135,220.244,135,216.533,135C212.822,135,209.111,135,205.4,135C201.689,135,197.978,135,194.267,135C190.556,135,186.844,135,183.133,135C179.422,135,175.711,135,172,135C168.289,135,164.578,135,160.867,135C157.156,135,153.444,135,149.733,135C146.022,135,142.311,135,138.6,135C134.889,135,131.178,135,127.467,135C123.756,135,120.044,135,116.333,135C112.622,135,108.911,135,105.2,135C101.489,135,97.778,135,94.067,135C90.356,135,86.644,135,82.933,135C79.222,135,75.511,135,71.8,135C68.089,135,64.378,135,60.667,135C56.956,135,53.244,135,49.533,135C45.822,135,42.111,135,38.4,135C34.689,135,30.978,135,27.267,135C23.556,135,19.844,135,16.133,135C12.422,135,8.711,135,5,135Z"
                            ></path>
                            <path
                              stroke="#00ffff"
                              fillOpacity="1"
                              fill="none"
                              width="334"
                              height="130"
                              className="recharts-curve recharts-area-curve"
                              d="M5,135C8.711,135,12.422,135,16.133,135C19.844,135,23.556,135,27.267,135C30.978,135,34.689,135,38.4,135C42.111,135,45.822,135,49.533,135C53.244,135,56.956,135,60.667,135C64.378,135,68.089,135,71.8,135C75.511,135,79.222,135,82.933,135C86.644,135,90.356,135,94.067,135C97.778,135,101.489,135,105.2,135C108.911,135,112.622,135,116.333,135C120.044,135,123.756,135,127.467,135C131.178,135,134.889,135,138.6,135C142.311,135,146.022,135,149.733,135C153.444,135,157.156,135,160.867,135C164.578,135,168.289,135,172,135C175.711,135,179.422,135,183.133,135C186.844,135,190.556,135,194.267,135C197.978,135,201.689,135,205.4,135C209.111,135,212.822,135,216.533,135C220.244,135,223.956,135,227.667,135C231.378,135,235.089,135,238.8,135C242.511,135,246.222,135,249.933,135C253.644,135,257.356,135,261.067,135C264.778,135,268.489,25.583,272.2,25.583C275.911,25.583,279.622,25.583,283.333,25.583C287.044,25.583,290.756,25.583,294.467,25.583C298.178,25.583,301.889,25.583,305.6,25.583C309.311,25.583,313.022,25.583,316.733,25.583C320.444,25.583,324.156,25.583,327.867,25.583C331.578,25.583,335.289,25.583,339,25.583"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="relative z-10">
                  <h3 className="text-sm md:text-lg font-semibold text-text/50">
                    Average Cost per Call
                  </h3>
                  <p className="text-4xl md:text-5xl text-text font-bold font-mono">
                    <span className="inline-block tabular-nums">$0.01</span>
                  </p>
                  <div className="text-md font-bold flex flex-row justify-start items-center mt-2 text-primary">
                    +<span className="inline-block tabular-nums">0.00</span>%
                    <svg
                      width="15.8984"
                      height="15.9473"
                      viewBox="0 0 15.8984 15.9473"
                      fill="'none' || '#000000"
                      stroke="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="fill-primary w-[11px] h-[11px] ml-2"
                    >
                      <g>
                        <rect
                          height="15.9473"
                          opacity="0"
                          width="15.8984"
                          x="0"
                          y="0"
                        ></rect>
                        <path
                          d="M15.5371 14.7656C15.5371 14.375 15.3613 14.0625 15.1562 13.6523L9.07227 1.11328C8.66211 0.273438 8.28125 0.00976562 7.76367 0.00976562C7.24609 0.00976562 6.875 0.273438 6.46484 1.11328L0.371094 13.6523C0.175781 14.0723 0 14.3848 0 14.7754C0 15.498 0.546875 15.9473 1.39648 15.9473L14.1309 15.9375C14.9805 15.9375 15.5371 15.4883 15.5371 14.7656Z"
                          fillOpacity="0.85"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-3 mt-12 mb-3 gap-6">
            <div className="flex flex-row gap-x-2 col-span-3 sm:col-span-2">
              <div className="flex bg-secondary rounded-xl p-2 items-center justify-center w-[40px] h-[40px]">
                <svg
                  width="23.3207"
                  height="8.62305"
                  viewBox="0 0 23.3207 8.62305"
                  fill="'none' || '#000000"
                  stroke="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 fill-icon/30"
                >
                  <g>
                    <rect
                      height="8.62305"
                      opacity="0"
                      width="23.3207"
                      x="0"
                      y="0"
                    ></rect>
                    <path
                      d="M11.4797 0C7.25118 0 3.27657 0.888672 1.29414 2.87109C0.395707 3.76953-0.0535118 4.85352 0.00508192 6.16211C0.0441444 6.95312 0.288285 7.65625 0.747269 8.11523C1.08907 8.4668 1.56758 8.66211 2.12422 8.57422L5.74727 7.95898C6.29414 7.87109 6.675 7.70508 6.91914 7.45117C7.24141 7.13867 7.33907 6.66992 7.33907 6.05469L7.33907 5.06836C7.33907 4.91211 7.40743 4.79492 7.50508 4.69727C7.60274 4.58008 7.74922 4.53125 7.85664 4.50195C8.52071 4.3457 9.86836 4.19922 11.4797 4.19922C13.091 4.19922 14.4289 4.31641 15.1027 4.51172C15.2004 4.54102 15.3371 4.59961 15.4445 4.69727C15.5324 4.79492 15.591 4.90234 15.6008 5.05859L15.6106 6.05469C15.6203 6.66992 15.718 7.13867 16.0305 7.45117C16.2844 7.70508 16.6652 7.87109 17.2121 7.95898L20.7863 8.56445C21.3625 8.66211 21.8508 8.45703 22.2316 8.08594C22.6906 7.63672 22.9445 6.95312 22.9641 6.15234C22.9934 4.83398 22.4856 3.75 21.6066 2.87109C19.6242 0.888672 15.7082 0 11.4797 0Z"
                      fillOpacity="0.85"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex flex-col text-text">
                <p className="font-medium text-md">Call Analysis</p>
                <p className="text-xs text-muted-foreground">
                  Here you can get a quick overview of how your calls are going
                  within your organization.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2 grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col col-span-1 bg-secondary py-4 px-6 rounded-2xl border border-border shadow-sm shadow-black/10">
                <p className="font-medium text-md text-text">
                  Reason Call Ended
                </p>
                <p className="text-xs text-text/50">
                  Calls aggregated by reason of why the call ended or completed.
                </p>
                <PieChartComponent data={callsData} />
              </div>
              <div className="flex flex-col col-span-1 bg-secondary py-4 px-6 rounded-2xl border border-border shadow-sm shadow-black/10">
                <p className="font-medium text-md text-text">
                  Average Call Duration by Assistant
                </p>
                <p className="text-xs text-text/50">
                  Average call duration by assistant in minutes.
                </p>
                <PieChartComponent data={assistenceDurationData} />
              </div>
            </div>
            <div className="flex flex-col col-span-1 space-y-4">
              <div className="w-full mt-12 lg:mt-[-70px] mb-3 gap-6">
                <div className="flex flex-row gap-x-2 col-span-1">
                  <div className="flex bg-secondary rounded-xl p-2 items-center justify-center w-[40px] h-[40px]">
                    <svg
                      width="23.9648"
                      height="24.7363"
                      viewBox="0 0 23.9648 24.7363"
                      fill="'none' || '#000000"
                      stroke="none"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 fill-icon/30"
                    >
                      <g>
                        <rect
                          height="24.7363"
                          opacity="0"
                          width="23.9648"
                          x="0"
                          y="0"
                        ></rect>
                        <path
                          d="M17.9647 2.79297L5.63882 2.79297C5.6789 1.99929 6.17978 1.54297 7.01172 1.54297L16.5918 1.54297C17.4237 1.54297 17.9246 1.99929 17.9647 2.79297Z"
                          fillOpacity="0.85"
                        ></path>
                        <path
                          d="M19.9623 5.5825C19.6482 5.53257 19.3151 5.50781 18.9648 5.50781L4.63867 5.50781C4.2885 5.50781 3.95544 5.53256 3.64145 5.58247C3.74778 4.64426 4.38263 4.12109 5.41992 4.12109L18.1934 4.12109C19.2307 4.12109 19.8575 4.64428 19.9623 5.5825Z"
                          fillOpacity="0.85"
                        ></path>
                        <path
                          d="M5.70312 22.373L17.9004 22.373C17.3828 19.8828 14.8828 18.0762 11.8066 18.0762C8.7207 18.0762 6.2207 19.8828 5.70312 22.373ZM11.8066 16.5918C13.4961 16.5918 14.834 15.1758 14.834 13.2812C14.834 11.4941 13.4961 10.0293 11.8066 10.0293C10.1074 10.0293 8.7793 11.4941 8.7793 13.2812C8.7793 15.1758 10.1074 16.5918 11.8066 16.5918ZM4.63867 23.1641L18.9648 23.1641C21.0059 23.1641 22.0312 22.1484 22.0312 20.1367L22.0312 10.1074C22.0312 8.0957 21.0059 7.08008 18.9648 7.08008L4.63867 7.08008C2.59766 7.08008 1.57227 8.0957 1.57227 10.1074L1.57227 20.1367C1.57227 22.1484 2.59766 23.1641 4.63867 23.1641ZM4.66797 21.5918C3.69141 21.5918 3.14453 21.0645 3.14453 20.0488L3.14453 10.1953C3.14453 9.17969 3.69141 8.65234 4.66797 8.65234L18.9453 8.65234C19.9023 8.65234 20.459 9.17969 20.459 10.1953L20.459 20.0488C20.459 21.0645 19.9023 21.5918 18.9453 21.5918Z"
                          fillOpacity="0.85"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col text-text">
                    <p className="font-medium text-md">Assistants Table</p>
                    <p className="text-xs text-muted-foreground">
                      Total calls and average call duration aggregated by
                      assistant.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-secondary border border-border rounded-2xl shadow-sm shadow-black/10 flex flex-col justify-between">
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&amp;_tr]:border-b">
                      <tr className="border-b transition-colors data-[state=selected]:bg-muted hover:bg-transparent">
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                          <div className="flex flex-row items-center justify-start gap-x-2">
                            <span className="text-[14px] font-medium text-text">
                              Assistant Name
                            </span>
                          </div>
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 cursor-pointer w-[150px]">
                          <div className="flex flex-row items-center justify-start gap-x-2">
                            <span className="text-[14px] font-medium text-text">
                              Call Count ↑
                            </span>
                          </div>
                        </th>
                        <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[150px]">
                          <div className="flex flex-row items-center justify-start gap-x-2">
                            <span className="text-[14px] font-medium text-text">
                              Avg Duration
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="[&amp;_tr:last-child]:border-0">
                      <tr className="border-b transition-colors data-[state=selected]:bg-muted text-white/50 hover:text-white hover:bg-hover/50 cursor-pointer">
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-xs">
                          <a
                            className="hover:text-primary"
                            href="/assistants/0eaf30ce-3b85-4795-be61-b7e606b4bede"
                          >
                            <span className="text-text/50 hover:text-text">
                              test
                            </span>
                          </a>
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-text/50 hover:text-text">
                          1
                        </td>
                        <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 text-text/50 hover:text-text">
                          0.10 <span className="text-text/20">min</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <nav
                  role="navigation"
                  aria-label="pagination"
                  className="mx-auto flex w-full justify-center p-2 border-t border-border/20"
                >
                  <ul className="flex-row items-center gap-1 flex w-full">
                    <a
                      className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out group hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5 !no-underline text-[#ffffff80] hover:!text-text no-underline cursor-pointer active:scale-95 rounded-lg"
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
                    <a
                      className="inline-flex w-full items-center justify-center whitespace-nowrap ring-1 ring-transparent text-sm font-bold disabled:pointer-events-none disabled:opacity-50 transition-all duration-150 ease-in-out group hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5 !no-underline text-[#ffffff80] hover:!text-text no-underline cursor-pointer active:scale-95 rounded-lg"
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
        </div>
      </div>
    </>
  );
}
