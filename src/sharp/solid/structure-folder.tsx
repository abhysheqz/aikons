import React from "react";
const StructureFolder: React.FC<
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
        d="M1.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM15.25 17a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.293 12.293A1 1 0 0 1 5 12h14.001a1 1 0 0 1 1 1v4h-2v-3h-12v3h-2L4 13a1 1 0 0 1 .293-.707"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M6.75 2a.75.75 0 0 1 .75-.75h3.31l2 2h3.69a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75z"
      />
    </svg>
  );
};
export default StructureFolder;
