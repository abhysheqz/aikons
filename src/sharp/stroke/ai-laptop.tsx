import React from "react";
const AiLaptop: React.FC<
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
        strokeWidth={1.5}
        d="M20 4h-6v6h6z"
      />
      <path
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.5 10v2m3-2v2m-3-10v2m3-2v2M14 5.5h-2m2 3h-2m10-3h-2m2 3h-2"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M11 3H4v12" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m2 22 2.02-7H19.95L22 22z"
      />
    </svg>
  );
};
export default AiLaptop;
