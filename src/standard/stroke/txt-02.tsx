import React from "react";
const Txt_02: React.FC<
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
        d="M19 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l7 7v2m-.5-2h-4.502a2 2 0 0 1-2-2V2.5M18 14h1.5m0 0H21m-1.5 0v5M7 14h1.5m0 0H10m-1.5 0v5m4-5 1.5 2.5m0 0 1.5 2.5M14 16.5l1.5-2.5M14 16.5 12.5 19"
      />
    </svg>
  );
};
export default Txt_02;
