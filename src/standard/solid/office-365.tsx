import React from "react";
const Office_365: React.FC<
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
        fillRule="evenodd"
        d="M14.233 1.3a.75.75 0 0 1 .523-.005l5.5 2A.75.75 0 0 1 20.75 4v16a.75.75 0 0 1-.494.705l-5.5 2a.75.75 0 0 1-.523-.004l-10.5-4A.75.75 0 0 1 3.25 18V6a.75.75 0 0 1 .483-.7zM4.847 17.711h8.403V6.982l-4 1.09V15a.75.75 0 0 1-.334.624z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default Office_365;
