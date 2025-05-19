import React from "react";
const MessageProgramming: React.FC<
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="m15.499 7.557 2.5 2.509-2.5 2.51M8.495 7.557l-2.501 2.509 2.5 2.51M12.998 7.055l-2.001 6.022"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M21.9 2H2.1a.1.1 0 0 0-.1.1v15.881a.1.1 0 0 0 .1.1h3.934V21.9a.1.1 0 0 0 .162.079l4.822-3.897H21.9a.1.1 0 0 0 .1-.1V2.101A.1.1 0 0 0 21.9 2Z"
      />
    </svg>
  );
};
export default MessageProgramming;
