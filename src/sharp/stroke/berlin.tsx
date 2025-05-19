import React from "react";
const Berlin: React.FC<
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
        d="M2 5.5h7M15 5.5h7M14 9h8m-8 0 1-5H9l1 5m4 0h-4m0 0H2M13.5 4c0-.5.2-1.6 1-2M10.5 4c0-.5-.2-1.6-1-2M4 5v17M20 5v17M17 9v13M14 9v13M7 9v13M10 9v13M2 22h20"
      />
    </svg>
  );
};
export default Berlin;
