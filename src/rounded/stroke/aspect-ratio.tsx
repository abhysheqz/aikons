import React from "react";
const AspectRatio: React.FC<
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
        strokeWidth={1.5}
        d="M2 12c0-4.243 0-6.364 1.172-7.682S6.229 3 10 3h4c3.771 0 5.657 0 6.828 1.318S22 7.758 22 12s0 6.364-1.172 7.682S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.318S2 16.242 2 12Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M2 9h8c2.828 0 4.243 0 5.121.879C16 10.757 16 12.172 16 15v6M10 21V9"
      />
    </svg>
  );
};
export default AspectRatio;
