import React from "react";
const Sorting_03: React.FC<
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
        d="M11.5 8h8M12.5 12h5M14.5 16h1M10.5 4h10M3.5 18.5 6 21l2.5-2.5M6 4v16.391"
      />
    </svg>
  );
};
export default Sorting_03;
