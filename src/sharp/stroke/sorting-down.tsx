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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M6 15.48h12M3 11.49h18"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M7.996 2.499v6.01M5.5 5.998 7.987 8.52 10.5 6.002M11.996 15.48v6.012M9.5 18.979l2.487 2.522 2.513-2.518M15.996 2.499v6.01M13.5 5.998l2.487 2.522L18.5 6.002"
      />
    </svg>
  );
};
export default SortingDown;
