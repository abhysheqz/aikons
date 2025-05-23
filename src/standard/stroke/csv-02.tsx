import React from "react";
const Csv_02: React.FC<
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
        d="M15 14h-1.5a1 1 0 0 0-1 1v.5a1 1 0 0 0 1 1h.5a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-1.5m5-5 1.75 5L21 14m-11 4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l7 7v2m-.5-2h-4.502a2 2 0 0 1-2-2V2.5"
      />
    </svg>
  );
};
export default Csv_02;
