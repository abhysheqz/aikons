import React from "react";
const Policy: React.FC<
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
        d="M16.61 17.66 15.5 22l2.5-1 2.5 1-1-4.401M21 15a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v5M7.5 7h8m-8 5H12"
      />
    </svg>
  );
};
export default Policy;
