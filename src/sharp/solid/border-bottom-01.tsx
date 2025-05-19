import React from "react";
const BorderBottom_01: React.FC<
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
        d="M20 4h-3V2h4a1 1 0 0 1 1 1v4h-2zm-5 0H9V2h6zM4 4h3V2H3a1 1 0 0 0-1 1v4h2zm16 11V9h2v6zM4 9v6H2V9zm16 11v-3h2v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4h2v3z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13 3v4h-2V3zm-2 10v2h2v-2h2v-2h-2V9h-2v2H9v2zm10 0h-4v-2h4zM7 13H3v-2h4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderBottom_01;
