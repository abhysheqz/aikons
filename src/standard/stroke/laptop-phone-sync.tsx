import React from "react";
const LaptopPhoneSync: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 20.5H2l2-4h9M21 7.5V5a1.5 1.5 0 0 0-1.5-1.5h-14A1.5 1.5 0 0 0 4 5v11.5M21 10.5h-4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1"
      />
    </svg>
  );
};
export default LaptopPhoneSync;
