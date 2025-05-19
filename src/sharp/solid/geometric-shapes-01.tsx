import React from "react";
const GeometricShapes_01: React.FC<
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
        fill="currentColor"
        d="M17.5 1.25a.75.75 0 0 1 .654.382l4.5 8A.75.75 0 0 1 22 10.75h-9a.75.75 0 0 1-.654-1.118l4.5-8a.75.75 0 0 1 .654-.382M1.25 2A.75.75 0 0 1 2 1.25h8a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75H2a.75.75 0 0 1-.75-.75zM12.75 18a4.75 4.75 0 1 1 9.5 0 4.75 4.75 0 0 1-9.5 0"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m5.957 16.629 3.293-3.293 1.414 1.414-3.293 3.293 3.293 3.293L9.25 22.75l-3.293-3.293-3.293 3.293-1.414-1.414 3.293-3.293L1.25 14.75l1.414-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default GeometricShapes_01;
