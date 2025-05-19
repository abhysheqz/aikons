import React from "react";
const AlignVerticalCenter: React.FC<
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
        d="M2 12h3m5 0h4m5 0h3M6 20a1 1 0 0 1-1-1V5.002a1 1 0 0 1 1.002-1l3 .006a1 1 0 0 1 .998 1V19a1 1 0 0 1-1 1zM15 16a1 1 0 0 1-1-1V9.001a1 1 0 0 1 1.001-1l3 .003a1 1 0 0 1 .999 1V15a1 1 0 0 1-1 1z"
      />
    </svg>
  );
};
export default AlignVerticalCenter;
