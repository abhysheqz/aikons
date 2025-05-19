import React from "react";
const MessageNotification_02: React.FC<
  {
    size?: number | string | undefined,
  } & React.ComponentProps<"svg">
> = ({ size = 24, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.476 2.044a5.75 5.75 0 0 0 8.802 7.31q.136.643.18 1.318c.056.863.056 1.755 0 2.617-.298 4.61-3.921 8.296-8.488 8.6-1.46.097-2.983.097-4.44 0a5.6 5.6 0 0 1-1.722-.394 16 16 0 0 0-.518-.208c-.08.056-.189.135-.346.251-.79.583-1.789.993-3.203.96-.326 0-.644-.003-.901-.058a1.3 1.3 0 0 1-.462-.19 1.2 1.2 0 0 1-.36-.385c-.242-.412-.145-.83-.051-1.092.088-.247.242-.538.398-.834l.022-.041c.466-.884.596-1.606.347-2.088-.833-1.256-1.581-2.804-1.692-4.52a21 21 0 0 1 0-2.618c.298-4.61 3.921-8.296 8.488-8.6a34 34 0 0 1 3.946-.028M6.75 12.25a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2H7.75a1 1 0 0 1-1-1m3.996 0a1 1 0 0 1 1-1h.008a1 1 0 1 1 0 2h-.008a1 1 0 0 1-1-1m3.995 0a1 1 0 0 1 1-1h.009a1 1 0 1 1 0 2h-.009a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14 5.25a4.25 4.25 0 1 1 8.5 0 4.25 4.25 0 0 1-8.5 0"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MessageNotification_02;
