import React from "react";
const OpenCaption: React.FC<
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
        d="M22 18V3H2v15z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 7.5H7v6h3.5m6.5-6h-3.5v6H17M2 21h20"
      />
    </svg>
  );
};
export default OpenCaption;
