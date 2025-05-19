import React from "react";
const ElectricWire: React.FC<
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
        d="M11.25 8.25H8a.75.75 0 0 0-.75.75v12a.75.75 0 0 0 .75.75h3.25zm1.5 13.5H16a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-3.25zM20 4.25a.75.75 0 0 1 .75.75v1.25H22a.75.75 0 0 1 0 1.5h-1.25V9a.75.75 0 0 1-1.5 0V7.75H18a.75.75 0 0 1 0-1.5h1.25V5a.75.75 0 0 1 .75-.75M1.25 7A.75.75 0 0 1 2 6.25h4a.75.75 0 0 1 0 1.5H2A.75.75 0 0 1 1.25 7"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.25 3A.75.75 0 0 1 7 2.25h1A2.75 2.75 0 0 1 10.75 5v4a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25H7A.75.75 0 0 1 6.25 3m9.75.75c-.69 0-1.25.56-1.25 1.25v4a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 16 2.25h1a.75.75 0 0 1 0 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricWire;
