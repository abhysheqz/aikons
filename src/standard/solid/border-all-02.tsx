import React from "react";
const BorderAll_02: React.FC<
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
        d="M5.5 3.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-13a2 2 0 0 0-2-2zm-4 2a4 4 0 0 1 4-4h13a4 4 0 0 1 4 4v13a4 4 0 0 1-4 4h-13a4 4 0 0 1-4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderAll_02;
