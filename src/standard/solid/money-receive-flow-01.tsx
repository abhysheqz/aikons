import React from "react";
const MoneyReceiveFlow_01: React.FC<
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
        d="M8.25 7V5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0m3 0V3a.75.75 0 0 1 1.5 0v4a.75.75 0 0 1-1.5 0m3 0V5a.75.75 0 0 1 1.5 0v2a.75.75 0 0 1-1.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20 6.25A2.75 2.75 0 0 1 22.75 9v10A2.75 2.75 0 0 1 20 21.75H4A2.75 2.75 0 0 1 1.25 19V9A2.75 2.75 0 0 1 4 6.25h3V7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.75zM2.75 19c0 .69.56 1.25 1.25 1.25h1.93a4 4 0 0 0-3.18-3.18zm18.5-1.93a4 4 0 0 0-3.18 3.18H20c.69 0 1.25-.56 1.25-1.25zM12 11a3 3 0 1 0 0 6 3 3 0 0 0 0-6M4 7.75c-.69 0-1.25.56-1.25 1.25v1.93a4 4 0 0 0 3.18-3.18zm14.07 0a4 4 0 0 0 3.18 3.18V9c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default MoneyReceiveFlow_01;
