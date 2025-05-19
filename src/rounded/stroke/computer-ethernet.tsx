import React from "react";
const ComputerEthernet: React.FC<
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
        d="M14 21h2m-2 0a1.5 1.5 0 0 1-1.5-1.5V17H12m2 4h-4m0 0H8m2 0a1.5 1.5 0 0 0 1.5-1.5V17h.5m0 0v4M14 3H8c-2.828 0-4.243 0-5.121.879C2 4.757 2 6.172 2 9v2c0 2.828 0 4.243.879 5.121C3.757 17 5.172 17 8 17h8.5M19 10h1a2 2 0 0 0 2-2V5.5h-5V8a2 2 0 0 0 2 2M19.5 10v11M17 5.5h5v-2a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5z"
      />
    </svg>
  );
};
export default ComputerEthernet;
