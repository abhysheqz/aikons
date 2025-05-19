import React from "react";
const GoogleGemini: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M3 12a9 9 0 0 0 9-9 9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9Z"
      />
    </svg>
  );
};
export default GoogleGemini;
