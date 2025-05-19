import React from "react";
const BorderLeft_01: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h4v2H4v16h3v2H3a1 1 0 0 1-1-1zm13 1H9V2h6zm5 0h-3V2h4a1 1 0 0 1 1 1v4h-2zm0 11V9h2v6zm0 5v-3h2v4a1 1 0 0 1-1 1h-4v-2zM9 20h6v2H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 7V3h2v4zm0 4V9h2v2h2v2h-2v2h-2v-2H9v-2zm10 2h-4v-2h4zm-10 8v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderLeft_01;
