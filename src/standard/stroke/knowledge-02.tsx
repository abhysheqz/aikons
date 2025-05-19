import React from "react";
const Knowledge_02: React.FC<
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
        strokeWidth={1.5}
        d="M20 14a4.9 4.9 0 0 0-1 3 4.9 4.9 0 0 0 1 3"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M3.5 7.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0M21 20H5a2 2 0 0 1-2-2v-1.999a2 2 0 0 1 2-2L21 14M13.5 7.5S12.928 7 12 7s-1.5.5-1.5.5"
      />
    </svg>
  );
};
export default Knowledge_02;
