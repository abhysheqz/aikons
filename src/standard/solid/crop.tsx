import React from "react";
const Crop: React.FC<
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
        d="M1 5.5a1 1 0 0 1 1-1h14.5a3 3 0 0 1 3 3V22a1 1 0 1 1-2 0V7.5a1 1 0 0 0-1-1H2a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 2a1 1 0 0 1 1 1v2.5a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m0 6a1 1 0 0 1 1 1v8.5a1 1 0 0 0 1 1h8a1 1 0 1 1 0 2h-8a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1m13 11.5a1 1 0 0 1 1-1H21a1 1 0 1 1 0 2h-2.5a1 1 0 0 1-1-1"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Crop;
