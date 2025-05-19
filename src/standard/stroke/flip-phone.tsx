import React from "react";
const FlipPhone: React.FC<
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
        d="M18.5 5a1 1 0 0 0-1-1h-11a1 1 0 0 0-1 1v10.118C5.5 18.918 8.41 22 12 22s6.5-3.081 6.5-6.882z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 7h-7v3.5A1.5 1.5 0 0 0 10 12h4a1.5 1.5 0 0 0 1.5-1.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M11 18h2M5.5 4.5V2"
      />
    </svg>
  );
};
export default FlipPhone;
