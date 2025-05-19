import React from "react";
const EditTable: React.FC<
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
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11.5 20.5h-9v-18h18v9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M2.5 8.5h18M2.5 12.5h14M2.5 16.5h9M11.5 20.5v-12M21.5 16.5l-2-2-5 5v2h2z"
      />
    </svg>
  );
};
export default EditTable;
