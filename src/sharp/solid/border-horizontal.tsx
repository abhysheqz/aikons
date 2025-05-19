import React from "react";
const BorderHorizontal: React.FC<
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
        d="M2 3a1 1 0 0 1 1-1h4v2H4v3H2zm13 1H9V2h6zm5 0h-3V2h4a1 1 0 0 1 1 1v4h-2zM4 9v6H2V9zm16 6V9h2v6zM4 20v-3H2v4a1 1 0 0 0 1 1h4v-2zm16 0v-3h2v4a1 1 0 0 1-1 1h-4v-2zM9 20h6v2H9z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11 7V3h2v4zm0 4V9h2v2h8v2h-8v2h-2v-2H3v-2zm0 10v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderHorizontal;
