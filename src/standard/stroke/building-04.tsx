import React from "react";
const Building_04: React.FC<
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
        d="M11 2v14a2 2 0 0 1-2 2H3M5 11.989h6"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m17 16 1 .015m-1 2.97L18 19M14 10l6.702 2.513A2 2 0 0 1 22 14.386V22h-8M14 2v20H2L8.275 2.69A1 1 0 0 1 9.226 2z"
      />
    </svg>
  );
};
export default Building_04;
