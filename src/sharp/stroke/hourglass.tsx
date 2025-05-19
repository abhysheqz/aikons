import React from "react";
const Hourglass: React.FC<
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
        d="M19 2v3a7 7 0 0 1-7 7M5 2v3a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7v3m-7-10a7 7 0 0 0-7 7v3M3 2h18m0 20H3"
      />
    </svg>
  );
};
export default Hourglass;
