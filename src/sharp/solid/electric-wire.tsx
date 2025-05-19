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
        d="M20.75 4.25v2h2v1.5h-2v2h-1.5v-2h-2v-1.5h2v-2zM1.25 6.25h5.5v1.5h-5.5zM8 3.75H7v-1.5h1A2.75 2.75 0 0 1 10.75 5v4h-1.5V5c0-.69-.56-1.25-1.25-1.25m8 0c-.69 0-1.25.56-1.25 1.25v4h-1.5V5A2.75 2.75 0 0 1 16 2.25h1v1.5z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.25 8.25h-4v13.5h4zm1.5 13.5h4V8.25h-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default ElectricWire;
