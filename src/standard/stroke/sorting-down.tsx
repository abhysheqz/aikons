import React from "react";
const SortingDown: React.FC<
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
        d="m6 6 2 2 2-2M8 2.5v4.891M14 6l2 2 2-2m-2-3.5v4.891M10 19l2 2 2-2m-2-3.5v4.891M6.5 15h11M3.5 11h17"
      />
    </svg>
  );
};
export default SortingDown;
