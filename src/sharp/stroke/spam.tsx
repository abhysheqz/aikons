import React from "react";
const Spam: React.FC<
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
        d="m22 12-4.5-9h-11L2 12l4.5 9h11z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M11.992 16h.009"
      />
      <path stroke="currentColor" strokeWidth={1.5} d="M11.992 14V7" />
    </svg>
  );
};
export default Spam;
