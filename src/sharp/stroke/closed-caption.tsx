import React from "react";
const ClosedCaption: React.FC<
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
        d="M22 21V3H2v18z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M10.5 9H7v6h3.5M17 9h-3.5v6H17"
      />
    </svg>
  );
};
export default ClosedCaption;
