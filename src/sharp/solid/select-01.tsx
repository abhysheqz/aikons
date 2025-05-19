import React from "react";
const Select_01: React.FC<
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
        d="M3.5 3.5v-2h2v2h2v2h-2v2h-2v-2h-2v-2zM14.5 5.5h-4v-2h4zm6 0h-3v-2h4a1 1 0 0 1 1 1v4h-2zm-17 9v-4h2v4zm17 0v-3h2v3zm-15 6v-3h-2v4a1 1 0 0 0 1 1h4v-2zm15 0v-3h2v4a1 1 0 0 1-1 1h-4v-2zm-6 2h-3v-2h3z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Select_01;
