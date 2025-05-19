import React from "react";
const StructureAdd: React.FC<
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
        fill="currentColor"
        fillRule="evenodd"
        d="M6.293 3.293A1 1 0 0 1 7 3h5v2H8v2H6V4a1 1 0 0 1 .293-.707M8 19v-2H6v3a1 1 0 0 0 1 1h5v-2z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M14.25 16a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75zM14.25 2a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-7a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 6.25a5.75 5.75 0 1 0 0 11.5 5.75 5.75 0 0 0 0-11.5M6 14.5V13H4.5v-2H6V9.5h2V11h1.5v2H8v1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default StructureAdd;
