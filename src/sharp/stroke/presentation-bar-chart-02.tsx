import React from "react";
const PresentationBarChart_02: React.FC<
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
        d="M21 16V2H3v14zM12 16v5M8 21l1.5-2h5l1.5 2M8 13V9m4 4V6m4 7v-3"
      />
    </svg>
  );
};
export default PresentationBarChart_02;
