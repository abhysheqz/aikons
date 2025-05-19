import React from "react";
const EdgeStyle: React.FC<
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
        d="M21 7H3V5h18zM11 11H3V9h8zM21 11h-8V9h8zM8 15H3v-2h5zM14 15h-4v-2h4zM21 15h-5v-2h5zM16 19h-3.5v-2H16zm5 0h-3.5v-2H21zM6 19H3v-2h3zm5 0H7.5v-2H11z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default EdgeStyle;
