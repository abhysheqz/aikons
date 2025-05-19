import React from "react";
const CameraAi: React.FC<
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
        d="M16 13a4 4 0 1 1-8 0 4 4 0 0 1 8 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M17.974 3A3.82 3.82 0 0 1 15 5.973v.054A3.82 3.82 0 0 1 17.974 9h.052A3.82 3.82 0 0 1 21 6.027v-.054A3.82 3.82 0 0 1 18.026 3z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="square"
        strokeWidth={1.5}
        d="M22 9v12H2V6h5.5l2-3h5"
      />
    </svg>
  );
};
export default CameraAi;
