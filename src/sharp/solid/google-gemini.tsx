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
        fill="currentColor"
        d="M3 11.25A8.25 8.25 0 0 0 11.25 3h1.5A8.25 8.25 0 0 0 21 11.25v1.5A8.25 8.25 0 0 0 12.75 21h-1.5A8.25 8.25 0 0 0 3 12.75z"
      />
    </svg>
  );
};
export default GoogleGemini;
