import React from "react";
const Tiktok: React.FC<
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
        d="M21 3v18H3V3z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.502 11.041c-2.211-.392-4.054 1.538-4.054 3.488 0 1.814 1.579 3.53 3.526 3.53a3.53 3.53 0 0 0 3.526-3.53c0-.82-.035-7.91-.035-8.538 0-.061.06-.044.069 0 0 1.36 1.337 3.494 3.972 3.494"
      />
    </svg>
  );
};
export default Tiktok;
