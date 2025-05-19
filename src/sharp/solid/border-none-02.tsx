import React from "react";
const BorderNone_02: React.FC<
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
        d="M20 4h-3V2h4a1 1 0 0 1 1 1v4h-2zm-5 0H9V2h6zM4 4h3V2H3a1 1 0 0 0-1 1v4h2zm16 11V9h2v6zM4 9v6H2V9zm16 11v-3h2v4a1 1 0 0 1-1 1h-4v-2zM4 20v-3H2v4a1 1 0 0 0 1 1h4v-2zm5 0h6v2H9z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderNone_02;
