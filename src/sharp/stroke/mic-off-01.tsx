import React from "react";
const MicOff_01: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 2 20 20M4 11a8 8 0 0 0 8 8m0 0c1.954 0 3.745-.7 5.135-1.865M12 19v3m0 0h3m-3 0H9m11-11c0 1.651-.5 3.186-1.358 4.46M17 11V7a5 5 0 0 0-5-5c-1.837-.037-3.471 1.04-4.324 2.488M17 11c0 .791-.213 1.662-.561 2.294M17 11h-2.812M7 7v4a5 5 0 0 0 8.046 3.966m-1.043-7.962H17"
      />
    </svg>
  );
};
export default MicOff_01;
