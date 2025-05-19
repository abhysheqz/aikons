import React from "react";
const HandPointingDown_02: React.FC<
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
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 9.5v4m0 0v6.25a1.75 1.75 0 1 0 3.5 0V13.5H16a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3H9.584a2 2 0 0 0-1.676.908l-1.92 2.95C5.115 7.684 5.016 8.297 5 8.97a3 3 0 0 0 .115.895c.184.646.66 1.19 1.614 2.28z"
      />
    </svg>
  );
};
export default HandPointingDown_02;
