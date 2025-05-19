import React from "react";
const AiNetwork: React.FC<
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
        d="M21.25 5.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm0 0V12H18.5M2.75 18.5a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Zm0 0V12H5.5M5.5 2.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm0 0H12V5.5M18.5 21.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm0 0H12V18.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M18.5 5.667h-13v13h13z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="bevel"
        strokeWidth={1.5}
        d="M14.501 8.753v6.64m-5.483-2.387 1.42-3.99 1.446 3.99m-2.866 0-.723 2.218m.723-2.218h2.866m0 0 .748 2.218"
      />
    </svg>
  );
};
export default AiNetwork;
