import React from "react";
const DiningTable: React.FC<
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
      <path stroke="currentColor" strokeWidth={1.5} d="m20 4-1.5 3h-13L4 4" />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M2 4h20M4 20h2.5l2-2h7l2 2H20M10 7l.5 2.5h3L14 7M10 18l.5-2.5h3L14 18M12 15.5v-6"
      />
    </svg>
  );
};
export default DiningTable;
