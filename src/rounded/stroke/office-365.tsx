import React from "react";
const Office_365: React.FC<
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
        d="M4 18V6l10.5-4L20 4v16l-5.5 2zm0 0 10 .5V6L8.5 7.5v8z"
      />
    </svg>
  );
};
export default Office_365;
