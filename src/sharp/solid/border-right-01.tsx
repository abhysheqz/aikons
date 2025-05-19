import React from "react";
const BorderRight_01: React.FC<
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
        d="M1.998 3a1 1 0 0 1 1-1h4v2h-3v3h-2zm7-1h6v2h-6zm8 0h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-4v-2h3V4h-3zm-15 13V9h2v6zm0 6v-4h2v3h3v2h-4a1 1 0 0 1-1-1m13 1h-6v-2h6z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.998 7V3h2v4zm0 4V9h2v2h2v2h-2v2h-2v-2h-2v-2zm-8 0h4v2h-4zm8 10v-4h2v4z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default BorderRight_01;
