import React from "react";
const BorderNone_01: React.FC<
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
        d="M20 4.001h-3v-2h4a1 1 0 0 1 1 1v4h-2zm-5 0H9v-2h6zm-11 0h3v-2H3a1 1 0 0 0-1 1v4h2zm16 11v-6h2v6zm-16-6v6H2v-6zm16 11v-3h2v4a1 1 0 0 1-1 1h-4v-2zm-16 0v-3H2v4a1 1 0 0 0 1 1h4v-2zm5 0h6v2H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3v4h-2V3zm-2 10v2h2v-2h2v-2h-2V9h-2v2H9v2zm10 0h-4v-2h4zM7 13H3v-2h4zm6 4v4h-2v-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderNone_01;
