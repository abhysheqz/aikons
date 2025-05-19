import React from "react";
const MoneySendFlow_01: React.FC<
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
        d="M8.25 17v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0m3 0v4a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0m3 0v2a.75.75 0 0 0 1.5 0v-2a.75.75 0 0 0-1.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 17.75A2.75 2.75 0 0 0 22.75 15V5A2.75 2.75 0 0 0 20 2.25H4A2.75 2.75 0 0 0 1.25 5v10A2.75 2.75 0 0 0 4 17.75h3V17a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v.75zM2.75 5c0-.69.56-1.25 1.25-1.25h1.93a4 4 0 0 1-3.18 3.18zm18.5 1.93a4 4 0 0 1-3.18-3.18H20c.69 0 1.25.56 1.25 1.25zM12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6m-8 3.25c-.69 0-1.25-.56-1.25-1.25v-1.93a4 4 0 0 1 3.18 3.18zm14.07 0a4 4 0 0 1 3.18-3.18V15c0 .69-.56 1.25-1.25 1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneySendFlow_01;
