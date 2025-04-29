import React, { useState } from "react";

interface ToolMessage {
  id: string;
  label: string;
  tagline: string;
  placeholder?:string,
  value: string;
}

const ToolMessages = () => {
  const [messages, setMessages] = useState<ToolMessage[]>([
    {
      id: "requestStartMessage",
      label: "Request Start Message",
      tagline:  `Message shown when the tool starts executing. This message is never triggered for async tools. If not provided, a default message like "Hold on a sec" will be used.`,
      value: "",
    },
    {
      id: "requestDelayedMessage",
      label: "Request Delayed Message",
      tagline:"Message shown when the tool execution is taking longer than expected or when the user talks while processing. This message is never triggered for async tools.",
      placeholder:"",
      value: "",
    },
    {
      id: "requestCompletedMessage",
      label: "Request Completed Message",
      tagline:"Message shown when the tool completes successfully. For async tools, this is triggered immediately without waiting for server response. If not provided, the model will generate a response.",
      placeholder: "",
      value: "",
    },
    {
      id: "requestFailedMessage",
      label: "Request Failed Message",
      tagline:"Message shown when the tool execution fails. This message is never triggered for async tools. If not provided, the model will generate an error response.",
      placeholder: "",
      value: "",
    },
  ]);


  const handleChange = (id: string, value: string) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === id ? { ...msg, value } : msg
      )
    );
  };

  const handleSubmit = () => {
    console.log("Submitted Messages:", messages);
  };

  return (
    <div className="px-3 py-2 w-full mx-auto bg-foreground  shadow-md text-white border border-white/10 border-t-0 rounded-b-xl">
      <h1 className="text-2xl font-semibold mb-4 ">Tool Messages</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            <label
              htmlFor={message.id}
              className="block text-sm font-medium mb-2"
            >
              {message?.label}
            </label>
            <p className="text-xs text-muted-foreground font-semibold">
                {message?.tagline}
            </p>
            <textarea
              id={message.id}
              value={message?.value}
              onChange={(e) => handleChange(message.id, e.target.value)}
              placeholder={message?.placeholder}
              className="w-full p-2  rounded-md shadow-sm focus:outline-none focus:border border border-muted hover:border-gray-500 focus:border-gray-300 resize-none bg-transparent"
              rows={3}
            ></textarea>
          </div>
        ))}

        {/* <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Save Messages
        </button> */}
      </form>
    </div>
  );
};

export default ToolMessages;
