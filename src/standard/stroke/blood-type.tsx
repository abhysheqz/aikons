import React from "react";
const BloodType: React.FC<
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
        d="M11.506 2.31a.89.89 0 0 1 .988 0C14.308 3.498 20.5 7.953 20.5 13.5a8.5 8.5 0 0 1-17 0c0-5.548 6.192-10.003 8.006-11.19Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9 16 2.5-6h1l1.458 3.5M15 16l-1.042-2.5m-3.916 0h3.916"
      />
    </svg>
  );
};
export default BloodType;
