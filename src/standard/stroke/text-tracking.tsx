import React from "react";
const TextTracking: React.FC<
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
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m20 17 2 2-2 2M4 17l-2 2 2 2m-1.475-2H21.29M22 14 18 3h-1l-4 11m1.454-4h6.092M11 3 6.5 14 2 3"
      />
    </svg>
  );
};
export default TextTracking;
