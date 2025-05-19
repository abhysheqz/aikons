import React from "react";
const Folder_03: React.FC<
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
        d="M3.667 20.196c.096.467.518.804 1.009.804H18.5c.454 0 .855-.29.985-.713l2.47-8c.198-.641-.296-1.287-.986-1.287H3.03c-.65 0-1.137.577-1.01 1.196zM4 11V4a1 1 0 0 1 1-1h4.465a1 1 0 0 1 .832.445L12 6M8.5 6H18a2 2 0 0 1 2 2v3"
      />
    </svg>
  );
};
export default Folder_03;
