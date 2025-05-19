import React from "react";
const AlignBottom: React.FC<
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
        d="M15 16a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1l3 .003a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1zM6 16a1 1 0 0 1-1-1V5.002a1 1 0 0 1 1.002-1l3 .004a1 1 0 0 1 .998 1V15a1 1 0 0 1-1 1zM22 20H2"
      />
    </svg>
  );
};
export default AlignBottom;
