import React from "react";
const Behance_01: React.FC<
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
        d="M7.4 12c1.988 0 3.6-1.567 3.6-3.5S9.388 5 7.4 5H2v7m5.4 0c1.988 0 3.6 1.567 3.6 3.5S9.388 19 7.4 19H2v-7m5.4 0H2"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20 7h-4m-2 7h8c0-2.041-1.79-4-4-4s-4 1.959-4 4Zm0 0v1a4 4 0 0 0 7.465 2"
      />
    </svg>
  );
};
export default Behance_01;
