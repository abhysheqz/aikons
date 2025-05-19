import React from "react";
const BoundingBox: React.FC<
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
        d="M6 2H2v4h4zM14 2h-4v4h4zM6 10H2v4h4zM14 10h-4v4h4zM14 18h-4v4h4zM22 18h-4v4h4zM22 10h-4v4h4zM6 4h4m-6 6V6m8 0v4m-6 2h4m4 0h4m2 2v4m-8-4v4m2 2h4"
      />
    </svg>
  );
};
export default BoundingBox;
