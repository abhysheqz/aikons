import React from "react";
const Note_05: React.FC<
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
        d="M7 1a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1v2.5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4.25 12.75V20c0 .69.56 1.25 1.25 1.25h13c.69 0 1.25-.56 1.25-1.25v-7.25h1.5V20a2.75 2.75 0 0 1-2.75 2.75h-13A2.75 2.75 0 0 1 2.75 20v-7.25z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 2.75A2.75 2.75 0 0 0 2.75 5.5V16a3.75 3.75 0 0 0 3.75 3.75h11A3.75 3.75 0 0 0 21.25 16V5.5a2.75 2.75 0 0 0-2.75-2.75zm3 6.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm0 5a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Note_05;
