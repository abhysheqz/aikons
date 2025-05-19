import React from "react";
const AdobeIllustrator: React.FC<
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
        d="M3 2.25a.75.75 0 0 0-.75.75v18c0 .414.336.75.75.75h18a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75zm11.201 13.737L11.02 7.5h-2.04l-3.182 8.487 1.404.526 1.13-3.013h3.336l1.13 3.013zM11.104 12h-2.21l1.105-2.947zm6.145-2.75v-1.5h-1.5v1.5zm0 7v-6h-1.5v6z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default AdobeIllustrator;
