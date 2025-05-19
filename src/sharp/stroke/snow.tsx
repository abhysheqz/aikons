import React from "react";
const Snow: React.FC<
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
        d="M21 14.25 19 12l2-2.25m-18 0L5 12l-2 2.25M14.572 21l.928-3 3 .73M9.428 3 8.5 6l-3-.73M5 18.732 8.5 18l.727 3M19 5.268 15.5 6l-.727-3M19 12H5m10.5 6-7-12m7 0-7 12"
      />
    </svg>
  );
};
export default Snow;
