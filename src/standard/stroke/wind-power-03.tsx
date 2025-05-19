import React from "react";
const WindPower_03: React.FC<
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
        d="M14 10.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13.5 9V2c-1.657 0-3 1.31-3 2.926V9M14.182 10.5 20 14.052a2.91 2.91 0 0 1-3.968 1.06L12 12.587M9.817 10.5 4 14.052a2.91 2.91 0 0 0 3.968 1.06L12 12.588M13.5 16.5 14 22h-4l.5-5.5"
      />
    </svg>
  );
};
export default WindPower_03;
