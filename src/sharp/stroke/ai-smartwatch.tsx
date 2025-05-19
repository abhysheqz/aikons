import React from "react";
const AiSmartwatch: React.FC<
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
        d="M20.25 6.75 18 9h-3m4.5-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM20.25 17.25 18 15h-3m4.5 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0ZM20.25 12H12m7.5 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 18H3V6h12"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m13 6-1-4H6L5 6M13 18l-1 4H6l-1-4"
      />
    </svg>
  );
};
export default AiSmartwatch;
