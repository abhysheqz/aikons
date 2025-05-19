import React from "react";
const SortingZa_01: React.FC<
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
        d="M4 3h5.5v.5l-5 6v.5H10M4 21l2.5-7h1l2.5 7M17 4v15.34M14 17l3 3 3-3"
      />
    </svg>
  );
};
export default SortingZa_01;
