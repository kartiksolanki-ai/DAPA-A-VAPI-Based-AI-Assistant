import React from "react";

const Webhook = () => {
  return (
    <div className="chakra-stack hide-scrollbar overflow-hidden css-14dcm4k">
      <div className="flex flex-row justify-between items-center sticky top-0 bg-secondary/50 border-b border-border backdrop-blur-md z-40 rounded-t-xl">
        <div className="flex flex-row gap-x-2 items-center my-4 pl-4 ">
          <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-1">
            <svg
              width="23.9258"
              height="16.8457"
              viewBox="0 0 23.9258 16.8457"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] h-[20px] fill-icon/30"
            >
              <g>
                <rect
                  height="16.8457"
                  opacity="0"
                  width="23.9258"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M11.7773 9.51172C12.0996 9.51172 12.4121 9.38477 12.7148 9.11133L22.4707 0.517578C21.9434 0.166016 21.3379 0.00976562 20.498 0.00976562L3.06641 0.00976562C2.22656 0.00976562 1.62109 0.166016 1.08398 0.517578L10.8398 9.11133C11.1523 9.38477 11.4648 9.51172 11.7773 9.51172ZM0.253906 15.2637L7.48047 8.04688L0.234375 1.66016C0.126953 1.86523 0 2.36328 0 3.03711L0 13.8184C0 14.4434 0.0976562 14.8926 0.253906 15.2637ZM2.77344 16.8457L20.791 16.8457C21.5039 16.8457 22.0605 16.6699 22.4316 16.416L15 8.98438L13.5742 10.2539C13.0078 10.752 12.3926 11.0059 11.7773 11.0059C11.1719 11.0059 10.5566 10.752 9.99023 10.2539L8.56445 8.98438L1.13281 16.416C1.50391 16.6699 2.05078 16.8457 2.77344 16.8457ZM23.3105 15.2637C23.457 14.8926 23.5645 14.4434 23.5645 13.8184L23.5645 3.03711C23.5645 2.36328 23.4375 1.86523 23.3301 1.66016L16.084 8.04688Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-x-2 items-center">
              <span className="text-xl text-text font-bold">Webhook Logs</span>
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
        <div className="flex justify-center items-center h-[400px] bg-secondary rounded-2xl border border-border p-4">
          <div className="flex flex-col items-center justify-center gap-y-2 w-[400px] mx-auto">
            <svg
              width="19.4434"
              height="19.2676"
              viewBox="0 0 19.4434 19.2676"
              fill="'none' || '#000000"
              stroke="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 fill-icon/50"
            >
              <g>
                <rect
                  height="19.2676"
                  opacity="0"
                  width="19.4434"
                  x="0"
                  y="0"
                ></rect>
                <path
                  d="M0 7.79297C0 12.0898 3.49609 15.5859 7.79297 15.5859C9.49219 15.5859 11.0449 15.0391 12.3242 14.1211L17.1289 18.9355C17.3535 19.1602 17.6465 19.2676 17.959 19.2676C18.623 19.2676 19.082 18.7695 19.082 18.1152C19.082 17.8027 18.9648 17.5195 18.7598 17.3145L13.9844 12.5098C14.9902 11.2012 15.5859 9.57031 15.5859 7.79297C15.5859 3.49609 12.0898 0 7.79297 0C3.49609 0 0 3.49609 0 7.79297ZM1.66992 7.79297C1.66992 4.41406 4.41406 1.66992 7.79297 1.66992C11.1719 1.66992 13.916 4.41406 13.916 7.79297C13.916 11.1719 11.1719 13.916 7.79297 13.916C4.41406 13.916 1.66992 11.1719 1.66992 7.79297Z"
                  fillOpacity="0.85"
                ></path>
                <path
                  d="M7.79297 9.27734C8.20312 9.27734 8.47656 9.0332 8.48633 8.57422L8.59375 4.49219C8.59375 4.05273 8.24219 3.71094 7.79297 3.71094C7.33398 3.71094 6.99219 4.05273 6.99219 4.48242L7.09961 8.57422C7.09961 9.01367 7.37305 9.27734 7.79297 9.27734ZM7.79297 11.7871C8.29102 11.7871 8.7207 11.3867 8.7207 10.8887C8.7207 10.3809 8.30078 9.99023 7.79297 9.99023C7.29492 9.99023 6.875 10.3906 6.875 10.8887C6.875 11.3867 7.30469 11.7871 7.79297 11.7871Z"
                  fillOpacity="0.85"
                ></path>
              </g>
            </svg>
            <h2 className="text-text font-bold">
              No results found in this batch of logs.
            </h2>
            <p className="text-text/60 text-center">
              You can load another batch of logs and see if you can find what
              you are looking for.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webhook;
